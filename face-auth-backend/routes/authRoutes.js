const express = require('express');
const multer = require('multer');
const axios = require('axios');
const FormData = require('form-data');
const User = require('../models/User');
const router = express.Router();
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
  transports: [new winston.transports.Console()]
});

const FLASK_API_URL = process.env.FLASK_API_URL || 'http://localhost:5000';

// Configure multer for memory storage
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'));
    }
  }
});

// Register route
router.post('/register', upload.single('image'), async (req, res) => {
  try {
    const { email, name } = req.body;
    const image = req.file;

    if (!email || !name || !image) {
      return res.status(400).json({
        success: false,
        error: 'Email, name, and image are required'
      });
    }

    const existingUser = await User.findByEmail(email);
    if (existingUser) {
      return res.status(400).json({
        success: false,
        error: 'User already exists'
      });
    }

    const formData = new FormData();
    formData.append('image', image.buffer, {
      filename: image.originalname,
      contentType: image.mimetype
    });
    formData.append('email', email);
    formData.append('name', name);

    const flaskResponse = await axios.post(`${FLASK_API_URL}/api/register`, formData, {
      headers: { ...formData.getHeaders() }
    });

    if (!flaskResponse.data.success) {
      throw new Error(flaskResponse.data.error || 'Failed to process face image');
    }

    const user = new User({
      email,
      name,
      faceEmbedding: flaskResponse.data.embedding,
      registeredAt: new Date()
    });

    await user.save();

    res.json({
      success: true,
      message: 'User registered successfully',
      userId: user._id,
      user: { id: user._id, email: user.email, name: user.name }
    });
  } catch (error) {
    logger.error(`Registration error: ${error.message}`);
    res.status(error.response?.status || 500).json({
      success: false,
      error: error.response?.data?.error || error.message || 'Registration failed'
    });
  }
});

// Login route
router.post('/login', upload.single('image'), async (req, res) => {
  try {
    const { email } = req.body;
    const image = req.file;

    if (!email || !image) {
      return res.status(400).json({
        success: false,
        error: 'Email and image are required'
      });
    }

    const user = await User.findByEmail(email);
    if (!user) {
      return res.status(401).json({
        success: false,
        error: 'User not found'
      });
    }

    const formData = new FormData();
    formData.append('image', image.buffer, {
      filename: image.originalname,
      contentType: image.mimetype
    });
    formData.append('email', email);

    const flaskResponse = await axios.post(`${FLASK_API_URL}/api/auth/login`, formData, {
      headers: { ...formData.getHeaders() }
    });

    if (!flaskResponse.data.success) {
      return res.status(401).json({
        success: false,
        error: 'Face verification failed'
      });
    }

    await user.updateLastLogin();

    res.json({
      success: true,
      message: 'Login successful',
      userId: user._id,
      user: { id: user._id, email: user.email, name: user.name }
    });
  } catch (error) {
    logger.error(`Login error: ${error.message}`);
    res.status(error.response?.status || 500).json({
      success: false,
      error: error.response?.data?.error || error.message || 'Login failed'
    });
  }
});

// Verify route
router.post('/verify', upload.single('image'), async (req, res) => {
  try {
    const { email } = req.body;
    const image = req.file;

    if (!email || !image) {
      return res.status(400).json({
        success: false,
        error: 'Email and image are required'
      });
    }

    const user = await User.findByEmail(email);
    if (!user) {
      return res.status(401).json({
        success: false,
        error: 'User not found'
      });
    }

    const formData = new FormData();
    formData.append('image', image.buffer, {
      filename: image.originalname,
      contentType: image.mimetype
    });
    formData.append('email', email);

    const flaskResponse = await axios.post(`${FLASK_API_URL}/api/auth/login`, formData, {
      headers: { ...formData.getHeaders() }
    });

    if (!flaskResponse.data.success) {
      return res.status(401).json({
        success: false,
        error: 'Face verification failed'
      });
    }

    res.json({
      success: true,
      message: 'Verification successful',
      userId: user._id,
      user: { id: user._id, email: user.email, name: user.name }
    });
  } catch (error) {
    logger.error(`Verification error: ${error.message}`);
    res.status(error.response?.status || 500).json({
      success: false,
      error: error.response?.data?.error || error.message || 'Verification failed'
    });
  }
});

module.exports = router;