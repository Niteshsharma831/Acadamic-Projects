const express = require('express');
const axios = require('axios');
const ChatHistory = require('../models/ChatHistory');
const router = express.Router();

const FLASK_API_URL = process.env.FLASK_API_URL || 'http://localhost:5000';

// Chat endpoint
router.post('/voice', async (req, res) => {
    try {
        const { text, userId } = req.body;
        if (!text) {
            return res.status(400).json({ 
                success: false, 
                error: 'Text is required' 
            });
        }

        // Make sure to use the correct Flask API endpoint
        const flaskResponse = await axios.post(`${FLASK_API_URL}/api/voice`, {
            text,
        });

        // Save the chat history
        const chatHistory = new ChatHistory({
            user: userId || 'anonymous',
            question: text,
            answer: flaskResponse.data.text,
            type: 'voice',
            timestamp: new Date()
        });
        await chatHistory.save();

        return res.json({ 
            success: true, 
            data: flaskResponse.data 
        });
    }
    catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ 
            success: false, 
            error: error.message 
        });
    }
});

router.post('/text-to-voice', async (req, res) => {
    try {
        const { text, userId } = req.body;

        if (!text) {
            return res.status(400).json({ 
                success: false,
                error: 'Text is required' 
            });
        }

        // Call the Flask API to convert text to voice
        const flaskResponse = await axios.post(`${FLASK_API_URL}/api/text-to-speech`, { 
            text 
        });

        // Save the chat history
        const chatHistory = new ChatHistory({
            user: userId || 'anonymous',
            question: text,
            answer: flaskResponse.data.text || flaskResponse.data.response,
            type: 'voice',
            timestamp: new Date()
        });
        
        await chatHistory.save();

        return res.json({
            success: true,
            data: flaskResponse.data.audio,
        });
    } catch (error) {
        console.error('Error in text-to-voice:', error);
        return res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

module.exports = router;