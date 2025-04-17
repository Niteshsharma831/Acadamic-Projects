const express = require('express');
const multer = require('multer');
const axios = require('axios');
const FormData = require('form-data');
const User = require('../models/User');
const router = express.Router();

const FLASK_API_URL = process.env.FLASK_API_URL || 'http://localhost:5000';

// Configure multer for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'));
    }
  }
});

// Register endpoint
router.post('/register', upload.single('image'), async (req, res) => {
  try {
    const { email, name } = req.body;
    const image = req.file;

    if (!email || !name || !image) {
      return res.status(400).json({
        success: false,
        error: 'Email, name and image are required'
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        error: 'User already exists'
      });
    }

    // Send image to Flask API for face embedding
    const formData = new FormData();
    formData.append('image', image.buffer, {
      filename: image.originalname,
      contentType: image.mimetype
    });

    const flaskResponse = await axios.post(`${FLASK_API_URL}/api/register`, formData, {
      headers: {
        ...formData.getHeaders()
      }
    });

    if (!flaskResponse.data || !flaskResponse.data.success) {
      throw new Error(flaskResponse.data?.error || 'Failed to process face image');
    }

    // Create new user with face embedding
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
      user: {
        id: user._id,
        email: user.email,
        name: user.name
      }
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({
      success: false,
      error: error.response?.data?.error || error.message || 'Registration failed'
    });
  }
});

// Login endpoint
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

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        error: 'User not found'
      });
    }

    // Send image to Flask API for verification
    const formData = new FormData();
    formData.append('image', image.buffer, {
      filename: image.originalname,
      contentType: image.mimetype
    });

    const flaskResponse = await axios.post(`${FLASK_API_URL}/api/verify`, formData, {
      headers: {
        ...formData.getHeaders()
      }
    });

    if (!flaskResponse.data || !flaskResponse.data.success) {
      return res.status(401).json({
        success: false,
        error: 'Face verification failed'
      });
    }

    res.json({
      success: true,
      message: 'Login successful',
      userId: user._id,
      user: {
        id: user._id,
        email: user.email,
        name: user.name
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      success: false,
      error: error.response?.data?.error || error.message || 'Login failed'
    });
  }
});

module.exports = router;
