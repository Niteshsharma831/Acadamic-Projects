import base64
import re
import os
import tempfile
from groq import Groq
from dotenv import load_dotenv
import cv2
import pytesseract
import numpy as np
from PIL import Image
import io

# Load environment variables
load_dotenv()

# Initialize Groq client
groq_client = Groq(api_key=os.getenv("GROQ_API_KEY"))
def process_chat(image_path):
    """Extract text from image using Groq's vision model"""
    with open(image_path, "rb") as f:
        base64_image = base64.b64encode(f.read()).decode('utf-8')

    response = groq_client.chat.completions.create(
        messages=[{
            "role": "user",
            "content": [
                {"type": "text", "text": "Extract all text from this image accurately."},
                {"type": "image_url", "image_url": {"url": f"data:image/jpeg;base64,{base64_image}"}}
            ]
        }],
        model="llama-3.2-11b-vision-preview",
    )
    return re.sub(r'<[^>]+>', '', response.choices[0].message.content)


# def process_image(image_data):
#     """Extract text from image using OCR"""
#     try:
#         # Convert image data to numpy array
#         if isinstance(image_data, bytes):
#             nparr = np.frombuffer(image_data, np.uint8)
#             img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
#         elif isinstance(image_data, str):
#             img = cv2.imread(image_data)
#         else:
#             raise ValueError("Unsupported image data format")

#         # Convert to grayscale
#         gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
        
#         # Apply thresholding to preprocess the image
#         threshold = cv2.threshold(gray, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)[1]
        
#         # Perform OCR
#         text = pytesseract.image_to_string(threshold)
        
#         # Clean up the text
#         text = text.strip()
#         if not text:
#             raise ValueError("No text found in image")
            
#         return text
        
#     except Exception as e:
#         raise Exception(f"Error processing image: {str(e)}")

# def enhance_image(image):
#     """Enhance image quality for better OCR results"""
#     # Denoise
#     denoised = cv2.fastNlMeansDenoisingColored(image)
    
#     # Increase contrast
#     lab = cv2.cvtColor(denoised, cv2.COLOR_BGR2LAB)
#     l, a, b = cv2.split(lab)
#     clahe = cv2.createCLAHE(clipLimit=3.0, tileGridSize=(8,8))
#     cl = clahe.apply(l)
#     enhanced = cv2.merge((cl,a,b))
#     enhanced = cv2.cvtColor(enhanced, cv2.COLOR_LAB2BGR)
    
#     return enhanced
