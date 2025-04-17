const express = require('express');
const axios = require('axios');
const ChatHistory = require('../models/ChatHistory');
const router = express.Router();

const FLASK_API_URL = process.env.FLASK_API_URL || 'http://localhost:5000';

// Chat endpoint
router.post('/chat', async (req, res) => {
  try {
    const { message, type, userId } = req.body;
    
    if (!message) {
      return res.status(400).json({ 
        success: false, 
        error: 'Message is required' 
      });
    }

    // Make sure to use the correct Flask API endpoint
    const flaskResponse = await axios.post(`${FLASK_API_URL}/api/chat`, { 
      message,
      type: type || 'text'
    });

    // Improved error handling
    if (!flaskResponse.data) {
      throw new Error('No response from AI service');
    }

    const historyEntry = new ChatHistory({
      user: userId || 'anonymous',
      question: message,
      answer: flaskResponse.data.text || flaskResponse.data.response,
      type: type || 'text',
      timestamp: new Date()
    });

    await historyEntry.save();
    
    res.json({
      success: true,
      text: flaskResponse.data.text || flaskResponse.data.response
    });
  } catch (error) {
    console.error('Chat error:', error);
    res.status(error.response?.status || 500).json({ 
      success: false, 
      error: error.response?.data?.error || error.message || 'Failed to process message'
    });
  }
});

// Image chat endpoint
router.post('/image', async (req, res) => {
  try {
    const { file, message, userId } = req.body;
    
    if (!file) {
      return res.status(400).json({ 
        success: false, 
        error: 'Image file is required' 
      });
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('message', message || 'Analyze this image');

    const flaskResponse = await axios.post(`${FLASK_API_URL}/api/image-to-text-chatbot`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });

    if (!flaskResponse.data || !flaskResponse.data.success) {
      throw new Error(flaskResponse.data?.error || 'Invalid response from AI service');
    }

    const historyEntry = new ChatHistory({
      user: userId || 'anonymous',
      question: message || 'Image analysis request',
      answer: flaskResponse.data.text,
      type: 'image',
      attachments: [file],
      timestamp: new Date()
    });

    await historyEntry.save();
    
    res.json({
      success: true,
      text: flaskResponse.data.text
    });
  } catch (error) {
    console.error('Image chat error:', error);
    res.status(500).json({ 
      success: false, 
      error: error.response?.data?.error || error.message || 'Failed to process image'
    });
  }
});
// voice chat endpoint


// Get chat history
router.get('/history', async (req, res) => {
  try {
    const { userId } = req.query;
    const history = await ChatHistory.find(
      userId ? { user: userId } : {},
      { _id: 0 }
    )
    .sort({ timestamp: -1 })
    .limit(10);
    
    res.json({
      success: true,
      history
    });
  } catch (error) {
    console.error('History fetch error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to fetch chat history'
    });
  }
});

// Clear chat history
router.post('/clear_history', async (req, res) => {
  try {
    const { userId } = req.body;
    await ChatHistory.deleteMany(userId ? { user: userId } : {});
    res.json({ 
      success: true,
      message: 'History cleared' 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      error: error.message 
    });
  }
});

module.exports = router;
