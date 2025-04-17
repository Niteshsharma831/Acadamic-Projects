import sqlite3
from datetime import datetime
from pymongo import MongoClient
import os
from dotenv import load_dotenv
from typing import List, Dict

load_dotenv()

def init_mongo():
    """Initialize MongoDB connection and create indexes"""
    client = MongoClient(os.getenv('MONGODB_URI', 'mongodb://localhost:27017'))
    db = client['face-auth']
    collection = db['chat_history']
    
    # Create indexes for better query performance
    collection.create_index('timestamp')
    collection.create_index('user_id')
    collection.create_index([('user_input', 'text'), ('bot_response', 'text')])
    
    return collection

class HistoryManager:
    def __init__(self):
        """Initialize MongoDB connection and collection"""
        self.client = MongoClient(os.getenv('MONGODB_URI', 'mongodb://localhost:27017'))
        self.db = self.client['face-auth']
        self.collection = self.db['chat_history']
        
    def add_interaction(self, user_input: str, bot_response: str) -> None:
        """Add a new chat interaction to history"""
        interaction = {
            'user_input': user_input,
            'bot_response': bot_response,
            'timestamp': datetime.now()
        }
        self.collection.insert_one(interaction)
        
    def get_recent(self, limit: int = 10) -> List[Dict]:
        """Get recent chat history"""
        history = list(self.collection.find(
            {},
            {'_id': 0}  # Exclude MongoDB ID
        ).sort('timestamp', -1).limit(limit))
        
        # Convert datetime objects to strings for JSON serialization
        for item in history:
            item['timestamp'] = item['timestamp'].isoformat()
            
        return history
        
    def clear(self) -> None:
        """Clear all chat history"""
        self.collection.delete_many({})
        
    def get_user_history(self, user_id: str, limit: int = 10) -> List[Dict]:
        """Get chat history for a specific user"""
        history = list(self.collection.find(
            {'user_id': user_id},
            {'_id': 0}
        ).sort('timestamp', -1).limit(limit))
        
        for item in history:
            item['timestamp'] = item['timestamp'].isoformat()
            
        return history
        
    def search_history(self, query: str) -> List[Dict]:
        """Search chat history for specific terms"""
        history = list(self.collection.find(
            {
                '$or': [
                    {'user_input': {'$regex': query, '$options': 'i'}},
                    {'bot_response': {'$regex': query, '$options': 'i'}}
                ]
            },
            {'_id': 0}
        ).sort('timestamp', -1))
        
        for item in history:
            item['timestamp'] = item['timestamp'].isoformat()
            
        return history

# Create global instance
history_manager = HistoryManager()

