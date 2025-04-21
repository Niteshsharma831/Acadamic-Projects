import asyncio
import base64
import os
from groq import Groq
from dotenv import load_dotenv
import cv2
import pytesseract
import numpy as np
from PIL import Image
from io import BytesIO
import re
import logging

load_dotenv()
logger = logging.getLogger(__name__)

groq_client = Groq(api_key=os.getenv("GROQ_API_KEY"))

async def process_chat(image_data, is_base64=True):
    """Extract text from image using Groq's vision model"""
    try:
        if is_base64:
            img_data = base64.b64decode(image_data.split(',')[1] if ',' in image_data else image_data)
            base64_image = base64.b64encode(img_data).decode('utf-8')
        else:
            with open(image_data, "rb") as f:
                base64_image = base64.b64encode(f.read()).decode('utf-8')

        response = await asyncio.to_thread(
            groq_client.chat.completions.create,
            messages=[{
                "role": "user",
                "content": [
                    {"type": "text", "text": "Extract all text from this image accurately."},
                    {"type": "image_url", "image_url": {"url": f"data:image/jpeg;base64,{base64_image}"}}
                ]
            }],
            model="meta-llama/llama-4-scout-17b-16e-instruct"
        )
        return re.sub(r'<[^>]+>', '', response.choices[0].message.content)
    except Exception as e:
        logger.error(f"Image processing error: {str(e)}")
        raise Exception(f"Failed to process image: {str(e)}")  