import base64
import tempfile
import logging
from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from dotenv import load_dotenv
from pymongo import MongoClient
from chatbot.history import history_manager, init_mongo
from chatbot.face import get_embedding, detect_face
from chatbot.history import HistoryManager
from langchain_groq import ChatGroq
from chatbot.rag import health_rag, HealthChatRAG
import numpy as np
from langdetect import detect, DetectorFactory
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from chatbot.speech import speech_to_speech_chatbot, speech_to_text, text_to_speech
from chatbot.image import process_chat
import tensorflow as tf
from datetime import datetime
from werkzeug.utils import secure_filename


# Load environment variables
load_dotenv()
DetectorFactory.seed = 0  # Set fixed seed for consistent results

# Initialize Flask app
app = Flask(__name__)
CORS(app, resources={
    r"/api/*": {
        "origins": ["http://localhost:5173", "http://localhost:3001"],
        "methods": ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        "allow_headers": ["Content-Type", "Authorization", "Accept"],
        "supports_credentials": True,
        "expose_headers": ["Content-Type", "Authorization"],
        "max_age": 600
    }
})

# Initialize MongoDB with error handling
client = MongoClient('mongodb://localhost:27017/')
db = client['face-auth']
users = db['users']

# Initialize RAG system
try:
    health_rag = HealthChatRAG()
    # logger.info("RAG system initialized successfully")
except Exception as e:
    # logger.error(f"Failed to initialize RAG system: {str(e)}")
    health_rag = None

@app.route('/api/register', methods=['POST'])
def register():
    """Register new user endpoint"""
    try:
        if 'image' not in request.files:
            return jsonify({
                'success': False,
                'error': 'No image file provided'
            }), 400

        image_file = request.files['image']
        if image_file.filename == '':
            return jsonify({
                'success': False,
                'error': 'No selected file'
            }), 400

        # Save the image temporarily
        temp_path = os.path.join(tempfile.gettempdir(), secure_filename(image_file.filename))
        image_file.save(temp_path)

        try:
            # Get face embedding
            embedding = get_embedding(temp_path)
            
            # Store embedding in MongoDB
            user_id = users.insert_one({'embedding': embedding}).inserted_id
            return jsonify({
                'success': True,
                'userId': str(user_id),
                'embedding': embedding,  # The embedding is already a list
                'message': 'Registration successful'
            })
        finally:
            # Clean up temp file
            if os.path.exists(temp_path):
                os.remove(temp_path)
                
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 400

@app.route('/api/verify', methods=['POST'])
def verify():
    """Verify user endpoint"""
    try:
        if 'image' not in request.files:
            return jsonify({
                'success': False,
                'error': 'No image file provided'
            }), 400

        image_file = request.files['image']
        if image_file.filename == '':
            return jsonify({
                'success': False,
                'error': 'No selected file'
            }), 400

        # Save the image temporarily
        temp_path = os.path.join(tempfile.gettempdir(), secure_filename(image_file.filename))
        image_file.save(temp_path)

        # Get face embedding
        input_embedding = get_embedding(temp_path)
        
        # Clean up temp file
        os.remove(temp_path)

        best_match = {'similarity': 0, 'user_id': None}
        
        # Compare with all stored embeddings
        for user in users.find():
            stored_embedding = np.array(user['embedding'])
            
            # Calculate cosine similarity
            similarity = np.dot(input_embedding, stored_embedding) / (
                np.linalg.norm(input_embedding) * np.linalg.norm(stored_embedding)
            )
            
            if similarity > best_match['similarity']:
                best_match = {'similarity': similarity, 'user_id': user['_id']}
        
        if best_match['similarity'] > 0.6:
            return jsonify({
                'success': True,
                'userId': str(best_match['user_id']),
                'similarity': float(best_match['similarity'])
            })
        return jsonify({
            'success': False,
            'error': 'No matching user found'
        }), 401
        
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 400


@app.route('/api/chat', methods=['POST', 'OPTIONS'])
def handle_chat():
    """Chatbot endpoint with proper error handling"""
    if request.method == 'OPTIONS':
        return '', 200

    try:
        if not health_rag:
            return jsonify({
                'success': False,
                'error': 'Chat system not initialized'
            }), 500

        data = request.get_json()
        if not data or 'message' not in data or not data['message']:
            return jsonify({
                'success': False,
                'error': 'No message provided'
            }), 400

        message = data['message']
        

        # Process the message using RAG
        response = health_rag.process_query(message)
        
        if not response:
            return jsonify({
                'success': False,
                'error': 'Failed to generate response'
            }), 500

        # Generate voice response if requested
        voice_response = None
        if data.get('voice_response', False):
            
            voice_response = text_to_speech(response)

        return jsonify({
            'success': True,
            'text': response,
            'voice_response': voice_response
        })

    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500


@app.route('/api/voice-chatbot', methods=['POST'])
def voice_chatbot():
    """Voice chatbot endpoint"""
    try:
        response_text = speech_to_speech_chatbot()
        return jsonify({
            'success': True,
            'text': response_text
        })
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

@app.route('/api/voice-to-text-chatbot', methods=['POST'])
def voice_to_text_chatbot():
    """Voice to text endpoint"""
    try:
        text = speech_to_text()
        return jsonify({
            'success': True,
            'text': text
        })
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

@app.route('/api/text-to-voice-chatbot', methods=['POST'])
def text_to_voice_chatbot():
    """Text to voice endpoint"""
    try:
        if 'query' not in request.json:
            return jsonify({
                'success': False,
                'error': 'No query provided'
            }), 400

        query = request.json['query']
        text_to_speech(query)
        
        # Process the query with RAG
        response = health_rag.process_query(query)
        
        return jsonify({
            'success': True,
            'text': response
        })
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

@app.route('/api/image-to-text-chatbot', methods=['POST'])
def image_to_text_chatbot():
    """Image to text endpoint"""
    try:
        if 'image' not in request.files and 'image' not in request.json:
            return jsonify({
                'success': False,
                'error': 'No image provided'
            }), 400

        if 'image' in request.files:
            image_file = request.files['image']
            temp_path = os.path.join(tempfile.gettempdir(), image_file.filename)
            image_file.save(temp_path)
            extracted_text = process_chat(temp_path)
            os.remove(temp_path)
        else:
            image_data = request.json.get('image', '')
            temp_path = os.path.join(tempfile.gettempdir(), 'temp_image.jpg')
            with open(temp_path, 'wb') as f:
                f.write(base64.b64decode(image_data.split(',')[1] if ',' in image_data else image_data))
            extracted_text = process_chat(temp_path)
            os.remove(temp_path)
        
        # Process the extracted text with RAG
        response = health_rag.process_query(extracted_text)
        
        return jsonify({
            'success': True,
            'text': response
        })
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

@app.route('/api/history', methods=['GET'])
def get_history():
    """Get chat history endpoint"""
    try:
        history = history_manager.get_recent()
        return jsonify({
            'success': True,
            'history': history
        })
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

@app.route('/api/clear_history', methods=['POST'])
def clear_history():
    """Clear chat history endpoint"""
    try:
        history_manager.clear()
        return jsonify({
            'success': True,
            'message': 'History cleared'
        })
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

@app.route('/api/text-to-speech', methods=['POST'])
def text_to_speech_endpoint():
    """Text to speech endpoint"""
    try:
        data = request.get_json()
        if not data or 'text' not in data:
            return jsonify({
                'success': False,
                'error': 'No text provided'
            }), 400

        text = data['text']
        audio_data = text_to_speech(text)
        
        return jsonify({
            'success': True,
            'audio_data': audio_data
        })
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True, threaded=True)
    