import cv2
import numpy as np
from deepface import DeepFace
from pymongo import MongoClient
import base64
import tempfile
import os


# MongoDB Configuration
client = MongoClient('mongodb://localhost:27017/')
db = client['face_auth']
users = db['users']

# Face Detection Model
prototxt = "deploy.prototxt"
caffemodel = "res10_300x300_ssd_iter_140000.caffemodel"
net = cv2.dnn.readNetFromCaffe(prototxt, caffemodel)

def detect_face(image_path):
    """Detect face using OpenCV's deep learning model"""
    image = cv2.imread(image_path)
    (h, w) = image.shape[:2]
    
    # Preprocess image for face detection
    blob = cv2.dnn.blobFromImage(cv2.resize(image, (300, 300)), 1.0,
                                (300, 300), (104.0, 177.0, 123.0))
    net.setInput(blob)
    detections = net.forward()
    
    # Find face with highest confidence
    for i in range(detections.shape[2]):
        confidence = detections[0, 0, i, 2]
        if confidence > 0.5:
            box = detections[0, 0, i, 3:7] * np.array([w, h, w, h])
            (startX, startY, endX, endY) = box.astype("int")
            return image[startY:endY, startX:endX]
    raise ValueError("No face detected")

def get_embedding(image_path):
    """Convert image to facial embedding"""
    try:
        # Detect face and generate embedding
        face = detect_face(image_path)
        embedding = DeepFace.represent(face, model_name='Facenet', enforce_detection=False)[0]['embedding']
        return embedding
    except Exception as e:
        raise Exception(f"Failed to generate face embedding: {str(e)}")
