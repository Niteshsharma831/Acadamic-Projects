import base64
import logging
import numpy as np
from fastapi import FastAPI, File, UploadFile, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from typing import Optional
from chatbot.face import get_embedding, detect_face
from chatbot.history import history_manager
from chatbot.rag import AppleClone
from chatbot.speech import speech_to_speech_chatbot, speech_to_text, text_to_speech
from chatbot.image import process_chat
from pymongo import MongoClient
from io import BytesIO
import asyncio
import os
from dotenv import load_dotenv

load_dotenv()
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI()

# Updated CORS settings to match Node.js server
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:3000",
        "http://localhost:3001"
    ],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["Content-Type", "Authorization", "Accept"],
)

# Standardize MongoDB database name to 'face-auth'
client = MongoClient('mongodb://localhost:27017/', maxPoolSize=50)
db = client['face-auth']
users = db['users']

apple_clone = AppleClone()

class ChatRequest(BaseModel):
    message: str
    voice_response: bool = False

class TextToSpeechRequest(BaseModel):
    text: str

class TextToVoiceRequest(BaseModel):
    query: str

class VerifyFaceRequest(BaseModel):
    image: str
    storedEmbedding: str

@app.on_event("startup")
async def startup_event():
    """Initialize AppleClone on startup"""
    try:
        await apple_clone.initialize()
        logger.info("AppleClone initialized successfully")
    except Exception as e:
        logger.error(f"Failed to initialize AppleClone: {str(e)}")
        raise

@app.post("/api/register")
async def register(file: UploadFile = File(...), email: str = None, name: str = None):
    try:
        if not email or not name:
            raise HTTPException(status_code=400, detail="Email and name are required")
        
        # Check if user already exists
        existing_user = users.find_one({"email": email.lower()})
        if existing_user:
            raise HTTPException(status_code=400, detail="User already exists")

        contents = await file.read()
        base64_image = base64.b64encode(contents).decode('utf-8')
        embedding = get_embedding(base64_image, is_base64=True)
        
        user_data = {
            'email': email.lower(),
            'name': name,
            'embedding': embedding,
            'registeredAt': datetime.now()
        }
        user_id = users.insert_one(user_data).inserted_id
        return {
            'success': True,
            'userId': str(user_id),
            'message': 'Registration successful',
            'embedding': embedding  # Return embedding as expected by Node.js
        }
    except Exception as e:
        logger.error(f"Registration error: {str(e)}")
        raise HTTPException(status_code=400, detail=f"Registration failed: {str(e)}")

@app.post("/api/auth/login")
async def login(file: UploadFile = File(...), email: str = None):
    try:
        if not email:
            raise HTTPException(status_code=400, detail="Email is required")

        # Find user by email
        user = users.find_one({"email": email.lower()})
        if not user:
            raise HTTPException(status_code=401, detail="User not found")

        contents = await file.read()
        input_embedding = np.array(get_embedding(base64.b64encode(contents).decode('utf-8'), is_base64=True))
        stored_embedding = np.array(user['embedding'])
        
        # Calculate cosine similarity
        similarity = np.dot(input_embedding, stored_embedding) / (
            np.linalg.norm(input_embedding) * np.linalg.norm(stored_embedding)
        )
        
        if similarity < 0.6:
            raise HTTPException(status_code=401, detail="Face verification failed")

        # Update last login
        users.update_one({"_id": user['_id']}, {"$set": {"lastLogin": datetime.now()}})
        
        return {
            'success': True,
            'userId': str(user['_id']),
            'user': {'email': user.get('email'), 'name': user.get('name')},
            'message': 'Login successful'
        }
    except Exception as e:
        logger.error(f"Login error: {str(e)}")
        raise HTTPException(status_code=400, detail=f"Login failed: {str(e)}")

@app.post("/api/verify-face")
async def verify_face(request: VerifyFaceRequest):
    try:
        # Decode base64 image
        base64_image = request.image.split(',')[1] if ',' in request.image else request.image
        input_embedding = np.array(get_embedding(base64_image, is_base64=True))
        
        # Parse stored embedding
        stored_embedding = np.array(json.loads(request.storedEmbedding))
        
        # Calculate cosine similarity
        similarity = np.dot(input_embedding, stored_embedding) / (
            np.linalg.norm(input_embedding) * np.linalg.norm(stored_embedding)
        )
        
        if similarity < 0.6:
            return {
                'success': False,
                'isMatch': False,
                'error': 'Face does not match'
            }
        
        return {
            'success': True,
            'isMatch': True
        }
    except Exception as e:
        logger.error(f"Face verification error: {str(e)}")
        raise HTTPException(status_code=400, detail=f"Face verification failed: {str(e)}")

@app.post("/api/chat")
async def handle_chat(request: ChatRequest):
    try:
        if not apple_clone:
            raise HTTPException(status_code=500, detail="Chat system not initialized")
        
        response = await apple_clone.process_query(request.message)
        audio_data = None
        if request.voice_response:
            audio_data = await text_to_speech(response)
        
        history_manager.add_interaction(request.message, response, user_id=None)
        
        return {
            'success': True,
            'text': response,
            'voice_response': audio_data
        }
    except Exception as e:
        logger.error(f"Chat error: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Chat failed: {str(e)}")

@app.post("/api/voice-chatbot")
async def voice_chatbot(file: UploadFile = File(...)):
    try:
        contents = await file.read()
        # Simulate speech-to-text (replace with actual processing if needed)
        text = await speech_to_text()  # Note: This expects a microphone input, adjust for file
        response = await apple_clone.process_query(text)
        audio_data = await text_to_speech(response)
        
        history_manager.add_interaction(text, response, user_id=None)
        
        return {
            'success': True,
            'text': response,
            'audio_data': audio_data
        }
    except Exception as e:
        logger.error(f"Voice chatbot error: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Voice chatbot failed: {str(e)}")

@app.post("/api/voice-to-text-chatbot")
async def voice_to_text_chatbot(file: UploadFile = File(...)):
    try:
        contents = await file.read()
        text = await speech_to_text()  # Note: Adjust for file-based input
        return {
            'success': True,
            'text': text
        }
    except Exception as e:
        logger.error(f"Voice-to-text error: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Voice-to-text failed: {str(e)}")

@app.post("/api/text-to-voice-chatbot")
async def text_to_voice_chatbot(request: TextToVoiceRequest):
    try:
        response = await apple_clone.process_query(request.query)
        audio_data = await text_to_speech(response)
        
        history_manager.add_interaction(request.query, response, user_id=None)
        
        return {
            'success': True,
            'text': response,
            'audio_data': audio_data
        }
    except Exception as e:
        logger.error(f"Text-to-voice error: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Text-to-voice failed: {str(e)}")

@app.post("/api/image-to-text-chatbot")
async def image_to_text_chatbot(file: Optional[UploadFile] = File(None), image: Optional[str] = None):
    try:
        if not file and not image:
            raise HTTPException(status_code=400, detail="No image provided")
        
        if file:
            contents = await file.read()
            extracted_text = await process_chat(base64.b64encode(contents).decode('utf-8'), is_base64=True)
        else:
            extracted_text = await process_chat(image, is_base64=True)
        
        response = await apple_clone.process_query(extracted_text)
        
        history_manager.add_interaction(extracted_text, response, user_id=None)
        
        return {
            'success': True,
            'text': response
        }
    except Exception as e:
        logger.error(f"Image-to-text error: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Image-to-text failed: {str(e)}")

@app.get("/api/history")
async def get_history(userId: Optional[str] = None):
    try:
        history = history_manager.get_user_history(userId) if userId else history_manager.get_recent()
        return {
            'success': True,
            'history': history
        }
    except Exception as e:
        logger.error(f"History error: {str(e)}")
        raise HTTPException(status_code=500, detail=f"History fetch failed: {str(e)}")

@app.post("/api/clear_history")
async def clear_history(userId: Optional[str] = None):
    try:
        if userId:
            history_manager.clear(user_id=userId)
        else:
            history_manager.clear()
        return {
            'success': True,
            'message': 'History cleared'
        }
    except Exception as e:
        logger.error(f"Clear history error: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Clear history failed: {str(e)}")

@app.post("/api/text-to-speech")
async def text_to_speech_endpoint(request: TextToSpeechRequest):
    try:
        audio_data = await text_to_speech(request.text)
        return {
            'success': True,
            'audio_data': audio_data
        }
    except Exception as e:
        logger.error(f"Text-to-speech endpoint error: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Text-to-speech failed: {str(e)}")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=5000, workers=4, reload=True)