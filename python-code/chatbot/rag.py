import os
import logging
import pandas as pd
from datetime import datetime
import asyncio
from functools import lru_cache
from dotenv import load_dotenv
from langdetect import detect, DetectorFactory
from transformers import M2M100ForConditionalGeneration, M2M100Tokenizer

from langchain_groq import ChatGroq
from langchain_community.vectorstores import FAISS
from langchain_huggingface import HuggingFaceEmbeddings
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.prompts import ChatPromptTemplate
from langchain.schema import Document
from langchain.schema.runnable import RunnablePassthrough
from langchain.schema.output_parser import StrOutputParser
from sentence_transformers import CrossEncoder
from chatbot.history import history_manager
from chatbot.template import prompt

logger = logging.getLogger(__name__)

class HealthChatRAG:
    SUPPORTED_LANGUAGES = {
        "en": "en", "hi": "hi", "ar": "ar", "gu": "gu",
        "bn": "bn", "ta": "ta", "te": "te", "ml": "ml",
        "mr": "mr", "kn": "kn", "pa": "pa", "ur": "ur",
        "bo": "bo", "or": "or"
    }

    def __init__(self, data_path: str = "apple.csv"):
        DetectorFactory.seed = 0
        self.data_path = data_path
        self.initialize_components()
        logger.info("RAG system initialized successfully")

    def initialize_components(self):
        # Load environment variables
        load_dotenv()
        if "GROQ_API_KEY" not in os.environ:
            raise ValueError("GROQ_API_KEY environment variable missing")

        # Initialize components asynchronously
        loop = asyncio.get_event_loop()
        loop.run_until_complete(asyncio.gather(
            self.initialize_llm(),
            self.initialize_retriever(),
            self.initialize_translation_models()
        ))
        self.cross_encoder = CrossEncoder("cross-encoder/ms-marco-MiniLM-L-6-v2")
        self.build_rag_chain()

    async def initialize_llm(self):
        self.llm = ChatGroq(
            temperature=0.5, model_name="llama3-8b-8192", max_retries=2, timeout=10
        )

    async def initialize_retriever(self):
        try:
            df = pd.read_csv(self.data_path, usecols=['Text Content'],encoding='latin1').dropna()
            documents = [Document(page_content=row['Text Content']) for _, row in df.iterrows()]

            text_splitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=100)
            splits = text_splitter.split_documents(documents)

            embeddings = HuggingFaceEmbeddings(
                model_name="sentence-transformers/all-MiniLM-L6-v2",
                model_kwargs={"device": "cpu"}
            )
            self.vector_store = FAISS.from_documents(splits, embeddings)
            self.retriever = self.vector_store.as_retriever(search_kwargs={"k": 5})
        except Exception as e:
            logger.error(f"Retriever initialization failed: {str(e)}")
            raise

    async def initialize_translation_models(self):
        try:
            self.tokenizer = M2M100Tokenizer.from_pretrained("facebook/m2m100_418M")
            self.translation_model = M2M100ForConditionalGeneration.from_pretrained("facebook/m2m100_418M")
        except Exception as e:
            logger.error(f"Translation model loading failed: {str(e)}")
            raise

    def build_rag_chain(self):
        self.rag_chain = (
            {
                "context": self.retriever | self.format_context,
                "question": RunnablePassthrough()
            }
            | prompt
            | self.llm
            | StrOutputParser()
        )

    def format_context(self, docs: list) -> str:
        # Rerank documents with cross-encoder
        query = docs[0].metadata.get("query", "") if docs else ""
        pairs = [(query, doc.page_content) for doc in docs]
        if pairs and query:
            scores = self.cross_encoder.predict(pairs)
            docs = [doc for _, doc in sorted(zip(scores, docs), reverse=True)][:3]
        return "\n\n".join(doc.page_content for doc in docs)

    async def process_query(self, query: str) -> str:
        try:
            if not query.strip():
                return "Please enter a valid health question."

            lang = self.detect_language(query)
            lang = lang if lang in self.SUPPORTED_LANGUAGES else "en"

            if cached := await self.check_similarity(query):
                return cached

            response = await self.generate_response(query, lang)
            self.update_history(query, response, lang)
            return response

        except Exception as e:
            logger.error(f"Query processing error: {str(e)}")
            return "Error processing your request. Try again."

    @lru_cache(maxsize=1000)
    def detect_language(self, text: str) -> str:
        try:
            return detect(text)
        except:
            return "en"

    async def check_similarity(self, query: str) -> str:
        try:
            history = history_manager.get_recent(limit=20)
            if not history:
                return None

            questions = [entry["user_input"] for entry in history]
            vectorizer = self.vector_store.embedding_function
            query_embedding = vectorizer.embed_query(query)
            history_embeddings = vectorizer.embed_documents(questions)
            
            similarities = [
                float(self.vector_store.similarity_search_with_score(query_embedding, h)[0][1])
                for h in history_embeddings
            ]
            max_similarity = max(similarities) if similarities else 0
            if max_similarity > 0.9:
                return history[similarities.index(max_similarity)]["bot_response"]
            return None
        except Exception as e:
            logger.warning(f"Similarity check failed: {str(e)}")
            return None

    async def generate_response(self, query: str, lang: str) -> str:
        try:
            translated_query = await self.translate(query, lang, "en") if lang != "en" else query
            response = await asyncio.to_thread(self.rag_chain.invoke, translated_query)
            return await self.translate(response, "en", lang) if lang != "en" else response
        except Exception as e:
            logger.error(f"Response generation failed: {str(e)}")
            return "I don’t have enough data. Consult a professional.\n\nThis is informational only. Consult a doctor for medical advice."

    @lru_cache(maxsize=500)
    async def translate(self, text: str, src: str, tgt: str) -> str:
        if src == tgt or not text:
            return text
        try:
            self.tokenizer.src_lang = self.SUPPORTED_LANGUAGES[src]
            inputs = self.tokenizer(text, return_tensors="pt", truncation=True, max_length=512)
            outputs = await asyncio.to_thread(
                self.translation_model.generate,
                **inputs,
                forced_bos_token_id=self.tokenizer.lang_code_to_id[self.SUPPORTED_LANGUAGES[tgt]]
            )
            return self.tokenizer.decode(outputs[0], skip_special_tokens=True)
        except Exception as e:
            logger.error(f"Translation failed: {str(e)}")
            return text

    def update_history(self, query: str, response: str, lang: str):
        history_manager.add_interaction(query, response)

# Run the chatbot
health_rag = HealthChatRAG()
    # Example usage
