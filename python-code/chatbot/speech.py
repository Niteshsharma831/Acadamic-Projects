import speech_recognition as sr
import pyttsx3
from chatbot.rag import AppleClone
import asyncio
import base64
from io import BytesIO

apple_clone = AppleClone()

# Initialize pyttsx3 engine once
engine = pyttsx3.init()
engine.setProperty('rate', 150)
voices = engine.getProperty('voices')
for voice in voices:
    if voice.name in [
        'Microsoft David Desktop - English (United States)',
        'Microsoft Zira Desktop - English (United States)',
        'Microsoft Hazel Desktop - English (United States)'
    ]:
        engine.setProperty('voice', voice.id)
        break

async def speech_to_text():
    recognizer = sr.Recognizer()
    with sr.Microphone() as source:
        print("Please speak...")
        audio = recognizer.listen(source)
        try:
            text = recognizer.recognize_google(audio)
            print("You said:", text)
            return text
        except sr.UnknownValueError:
            return "Sorry, I did not understand that."
        except sr.RequestError:
            return "Sorry, the speech service is not available."

async def text_to_speech(text):
    try:
        audio_buffer = BytesIO()
        await asyncio.to_thread(engine.save_to_file, text, audio_buffer)
        await asyncio.to_thread(engine.runAndWait)
        audio_buffer.seek(0)
        audio_data = base64.b64encode(audio_buffer.read()).decode('utf-8')
        return audio_data
    except Exception as e:
        print(f"Text-to-speech error: {str(e)}")
        return None

async def speech_to_speech_chatbot():
    user_input_text = await speech_to_text()
    response = await AppleClone.process_query(user_input_text)
    audio_data = await text_to_speech(response)
    return response, audio_data