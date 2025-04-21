import cv2
import numpy as np
from deepface import DeepFace
from pymongo import MongoClient
import base64
from io import BytesIO
from PIL import Image

# MongoDB Configuration with connection pooling
client = MongoClient('mongodb://localhost:27017/', maxPoolSize=50)
db = client['face-auth']  # Changed from 'face_auth' to 'face-auth'
users = db['users']

# Create index for embedding (requires MongoDB Atlas Vector Search or similar)
users.create_index([("embedding", "2dsphere")])

# Face Detection Model
prototxt = "deploy.prototxt"
caffemodel = "res10_300x300_ssd_iter_140000.caffemodel"
net = cv2.dnn.readNetFromCaffe(prototxt, caffemodel)

def decode_base64_image(base64_string):
    """Decode base64 image to numpy array"""
    img_data = base64.b64decode(base64_string)
    img = Image.open(BytesIO(img_data))
    return cv2.cvtColor(np.array(img), cv2.COLOR_RGB2BGR)

def detect_face(image):
    """Detect face using OpenCV's deep learning model"""
    (h, w) = image.shape[:2]
    blob = cv2.dnn.blobFromImage(cv2.resize(image, (300, 300)), 1.0,
                                 (300, 300), (104.0, 177.0, 123.0))
    net.setInput(blob)
    detections = net.forward()
    
    for i in range(detections.shape[2]):
        confidence = detections[0, 0, i, 2]
        if confidence > 0.5:
            box = detections[0, 0, i, 3:7] * np.array([w, h, w, h])
            (startX, startY, endX, endY) = box.astype("int")
            return image[startY:endY, startX:endX]
    raise ValueError("No face detected")

def get_embedding(image_data, is_base64=True):
    """Convert image to facial embedding"""
    try:
        if is_base64:
            image = decode_base64_image(image_data)
        else:
            image = cv2.imread(image_data)
        
        face = detect_face(image)
        embedding = DeepFace.represent(face, model_name='Facenet', enforce_detection=False)[0]['embedding']
        return embedding
    except Exception as e:
        raise Exception(f"Failed to generate face embedding: {str(e)}")