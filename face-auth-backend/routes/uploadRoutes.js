const express = require('express');
const multer = require('multer');
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

const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'));
    }
  }
});

const FLASK_API_URL = process.env.FLASK_API_URL || 'http://localhost:5000';

router.post('/', upload.single('file'), async (req, res) => {
  try {
    const { query } = req.body;
    const file = req.file;

    if (!file) {
      return res.status(400).json({
        success: false,
        error: 'File is required'
      });
    }

    const formData = new FormData();
    formData.append('image', file.buffer, {
      filename: file.originalname,
      contentType: file.mimetype
    });

    const flaskResponse = await axios.post(`${FLASK_API_URL}/api/image-to-text-chatbot`, formData, {
      headers: { ...formData.getHeaders() }
    });

    if (!flaskResponse.data.success) {
      throw new Error(flaskResponse.data.error || 'Failed to process image');
    }

    const history = new ChatHistory({
      user: req.body.userId || 'anonymous',
      question: query || 'Image analysis request',
      answer: flaskResponse.data.text,
      type: 'image',
      attachments: [`data:${file.mimetype};base64,${file.buffer.toString('base64')}`],
      timestamp: new Date()
    });
    await history.save();

    res.json({
      success: true,
      text: flaskResponse.data.text
    });
  } catch (error) {
    logger.error(`Upload error: ${error.message}`);
    res.status(error.response?.status || 500).json({
      success: false,
      error: error.response?.data?.error || error.message || 'Failed to process upload'
    });
  }
});

module.exports = router;