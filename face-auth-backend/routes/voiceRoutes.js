const express = require('express');
const router = express.Router();
const axios = require('axios');
const ChatHistory = require('../models/ChatHistory');

const winston = require('winston');
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
  transports: [new winston.transports.Console()]
});

const FLASK_API_URL = process.env.FLASK_API_URL || 'http://localhost:5000';

router.post('/voice', async (req, res) => {
  try {
    const { userId } = req.body;
    if (!req.files || !req.files.audio) {
      return res.status(400).json({
        success: false,
        error: 'Audio file is required'
      });
    }

    const audioFile = req.files.audio;
    const formData = new FormData();
    formData.append('audio', audioFile.data, { filename: audioFile.name });

    const flaskResponse = await axios.post(`${FLASK_API_URL}/api/voice-chatbot`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });

    if (!flaskResponse.data.success) {
      throw new Error(flaskResponse.data.error || 'Failed to process voice input');
    }

    const chatHistory = new ChatHistory({
      user: userId || 'anonymous',
      question: flaskResponse.data.text,
      answer: flaskResponse.data.text,
      type: 'voice',
      timestamp: new Date()
    });
    await chatHistory.save();

    res.json({
      success: true,
      text: flaskResponse.data.text,
      audio: flaskResponse.data.audio_data
    });
  } catch (error) {
    logger.error(`Voice error: ${error.message}`);
    res.status(error.response?.status || 500).json({
      success: false,
      error: error.response?.data?.error || error.message || 'Failed to process voice input'
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

    const flaskResponse = await axios.post(`${FLASK_API_URL}/api/text-to-voice-chatbot`, { query: text });
    if (!flaskResponse.data.success) {
      throw new Error(flaskResponse.data.error || 'Failed to convert text to voice');
    }

    const chatHistory = new ChatHistory({
      user: userId || 'anonymous',
      question: text,
      answer: flaskResponse.data.text,
      type: 'voice',
      timestamp: new Date()
    });
    await chatHistory.save();

    res.json({
      success: true,
      text: flaskResponse.data.text,
      audio: flaskResponse.data.audio_data
    });
  } catch (error) {
    logger.error(`Text-to-voice error: ${error.message}`);
    res.status(error.response?.status || 500).json({
      success: false,
      error: error.response?.data?.error || error.message || 'Failed to convert text to voice'
    });
  }
});

module.exports = router;
