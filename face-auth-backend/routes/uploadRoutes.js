const express = require('express');
const multer = require('multer');
const axios = require('axios');
const FormData = require('form-data');
const ChatHistory = require('../models/ChatHistory');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

const FLASK_API_URL = process.env.FLASK_API_URL || 'http://localhost:5000';

// File upload endpoint
router.post('/api/upload', upload.single('file'), async (req, res) => {
  try {
    const formData = new FormData();
    formData.append('file', req.file);
    formData.append('query', req.body.query);

    const flaskResponse = await axios.post(`${FLASK_API_URL}/api/upload`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    const history = new ChatHistory({
      question: req.body.query,
      answer: flaskResponse.data.text,
    });
    await history.save();

    res.json(flaskResponse.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
