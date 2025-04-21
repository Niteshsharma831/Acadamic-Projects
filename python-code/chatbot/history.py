import json
from pymongo import MongoClient
from datetime import datetime
from typing import List, Dict
import os
from dotenv import load_dotenv
import logging
from functools import lru_cache

load_dotenv()

# Logger setup
logger = logging.getLogger(__name__)

def init_mongo():
    """Initialize MongoDB connection and create indexes"""
    client = MongoClient(os.getenv('MONGODB_URI', 'mongodb://localhost:27017'), maxPoolSize=50)
    db = client['face-auth']
    collection = db['chat_history']
    
    # Create indexes for faster queries
    collection.create_index([('timestamp', -1)])
    collection.create_index([('user_id', 1), ('timestamp', -1)])
    collection.create_index([('user_input', 'text'), ('bot_response', 'text')])
    
    return collection

class HistoryManager:
    def __init__(self):
        """Initialize MongoDB connection"""
        self.client = MongoClient(os.getenv('MONGODB_URI', 'mongodb://localhost:27017'), maxPoolSize=50)
        self.db = self.client['face-auth']
        self.collection = self.db['chat_history']

    def add_interaction(self, user_input: str, bot_response: str, user_id: str = None) -> None:
        """Add a new chat interaction to MongoDB"""
        interaction = {
            'user_input': user_input,
            'bot_response': bot_response,
            'timestamp': datetime.now(),
            'user_id': user_id
        }
        try:
            self.collection.insert_one(interaction)
            logger.info(f"Added interaction for user {user_id or 'anonymous'}")
        except Exception as e:
            logger.error(f"Failed to add interaction: {str(e)}")

    @lru_cache(maxsize=100)
    def get_recent(self, limit: int = 10) -> List[Dict]:
        """Get recent chat history from MongoDB"""
        try:
            history = list(self.collection.find(
                {}, {'_id': 0}
            ).sort('timestamp', -1).limit(limit))
            
            for item in history:
                item['timestamp'] = item['timestamp'].isoformat()
            
            return history
        except Exception as e:
            logger.error(f"Failed to fetch recent history: {str(e)}")
            return []

    def clear(self) -> None:
        """Clear all chat history from MongoDB"""
        try:
            self.collection.delete_many({})
            logger.info("Chat history cleared")
        except Exception as e:
            logger.error(f"Failed to clear history: {str(e)}")

    @lru_cache(maxsize=100)
    def get_user_history(self, user_id: str, limit: int = 10) -> List[Dict]:
        """Get chat history for a specific user from MongoDB"""
        try:
            history = list(self.collection.find(
                {'user_id': user_id}, {'_id': 0}
            ).sort('timestamp', -1).limit(limit))
            
            for item in history:
                item['timestamp'] = item['timestamp'].isoformat()
            
            return history
        except Exception as e:
            logger.error(f"Failed to fetch user history: {str(e)}")
            return []

    def search_history(self, query: str) -> List[Dict]:
        """Search chat history for specific terms in MongoDB"""
        try:
            history = list(self.collection.find(
                {
                    '$or': [
                        {'user_input': {'$regex': query, '$options': 'i'}},
                        {'bot_response': {'$regex': query, '$options': 'i'}}
                    ]
                }, {'_id': 0}
            ).sort('timestamp', -1))
            
            for item in history:
                item['timestamp'] = item['timestamp'].isoformat()
            
            return history
        except Exception as e:
            logger.error(f"Failed to search history: {str(e)}")
            return []

history_manager = HistoryManager()