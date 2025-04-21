const express = require('express');
const axios = require('axios');
const FormData = require('form-data');
const ChatHistory = require('../models/ChatHistory');
const router = express.Router();
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
  transports: [new winston.transports.Console()]
});

const FLASK_API_URL = process.env.FLASK_API_URL || 'http://localhost:5000';

router.post('/chat', async (req, res) => {
  try {
    const { message, type = 'text', userId } = req.body;

    if (!message) {
      return res.status(400).json({
        success: false,
        error: 'Message is required'
      });
    }

    const flaskResponse = await axios.post(`${FLASK_API_URL}/api/chat`, {
      message,
      voice_response: type === 'voice'
    });

    if (!flaskResponse.data.success) {
      throw new Error(flaskResponse.data.error || 'No response from AI service');
    }

    const historyEntry = new ChatHistory({
      user: userId || 'anonymous',
      question: message,
      answer: flaskResponse.data.text,
      type,
      timestamp: new Date()
    });

    await historyEntry.save();

    res.json({
      success: true,
      text: flaskResponse.data.text
    });
  } catch (error) {
    logger.error(`Chat error: ${error.message}`);
    res.status(error.response?.status || 500).json({
      success: false,
      error: error.response?.data?.error || error.message || 'Failed to process message'
    });
  }
});

router.post('/image', async (req, res) => {
  try {
    const { image, message, userId } = req.body;

    if (!image) {
      return res.status(400).json({
        success: false,
        error: 'Image is required'
      });
    }

    const formData = new FormData();
    formData.append('image', Buffer.from(image.split(',')[1], 'base64'), {
      filename: 'image.jpg',
      contentType: 'image/jpeg'
    });

    const flaskResponse = await axios.post(`${FLASK_API_URL}/api/image-to-text-chatbot`, formData, {
      headers: { ...formData.getHeaders() }
    });

    if (!flaskResponse.data.success) {
      throw new Error(flaskResponse.data.error || 'Invalid response from AI service');
    }

    const historyEntry = new ChatHistory({
      user: userId || 'anonymous',
      question: message || 'Image analysis request',
      answer: flaskResponse.data.text,
      type: 'image',
      attachments: [image],
      timestamp: new Date()
    });

    await historyEntry.save();

    res.json({
      success: true,
      text: flaskResponse.data.text
    });
  } catch (error) {
    logger.error(`Image chat error: ${error.message}`);
    res.status(error.response?.status || 500).json({
      success: false,
      error: error.response?.data?.error || error.message || 'Failed to process image'
    });
  }
});

router.get('/history', async (req, res) => {
  try {
    const { userId } = req.query;
    const history = await ChatHistory.find(
      userId ? { user: userId } : {},
      { _id: 0, __v: 0 }
    ).sort({ timestamp: -1 }).limit(10).lean();

    res.json({
      success: true,
      history
    });
  } catch (error) {
    logger.error(`History fetch error: ${error.message}`);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch chat history'
    });
  }
});

router.post('/clear_history', async (req, res) => {
  try {
    const { userId } = req.body;
    await ChatHistory.deleteMany(userId ? { user: userId } : {});
    res.json({
      success: true,
      message: 'History cleared'
    });
  } catch (error) {
    logger.error(`Clear history error: ${error.message}`);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

module.exports = router;