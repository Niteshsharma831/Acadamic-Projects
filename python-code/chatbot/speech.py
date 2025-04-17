import speech_recognition as sr
import pyttsx3
from chatbot.rag import health_rag  # type: ignore # Fix: Import from correct module

def speech_to_text():
    recognizer = sr.Recognizer()
    with sr.Microphone() as source:
        print("Please speak...")
        audio = recognizer.listen(source)
        try:
            text = recognizer.recognize_google(audio)
            print("You said: ", text)
            return text
        except sr.UnknownValueError:
            return "Sorry, I did not understand that."
        except sr.RequestError:
            return "Sorry, the speech service is not available."
    

def text_to_speech(text):
    engine = pyttsx3.init()
    engine.setProperty('rate', 150)
    voices = engine.getProperty('voices')
    for voice in voices:
        if voice.name == 'Microsoft David Desktop - English (United States)':
            engine.setProperty('voice', voice.id)
            break
        elif voice.name == 'Microsoft Zira Desktop - English (United States)':
            engine.setProperty('voice', voice.id)
            break
        elif voice.name == 'Microsoft Hazel Desktop - English (United States)':
            engine.setProperty('voice', voice.id)
            break
    response = health_rag.process_query(text)
    engine.say(text)
    engine.runAndWait()
    # Fix: Remove the recursive call to rag_chain and text_to_speech



def speech_to_speech_chatbot():
    # Capture speech from user
    user_input_text = speech_to_text()
    
    # class DummyRequest:
    #     def __init__(self, query):
    #         self.json = {"query": query}
    
    
    # dummy_request = DummyRequest(user_input_text)
    response = health_rag.process_query(user_input_text)
    
    # Extract text from response
    response_text = response.json['text']
    
    # Convert the response to speech
    text_to_speech(response_text)
    
    # Return the response for API use
    return response
