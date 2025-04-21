const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  faceEmbedding: {
    type: [Number],
    required: true,
    validate: {
      validator: (v) => Array.isArray(v) && v.length > 0,
      message: 'faceEmbedding must be a non-empty array'
    }
  },
  registeredAt: {
    type: Date,
    default: Date.now
  },
  lastLogin: {
    type: Date
  }
});

userSchema.methods.updateLastLogin = async function() {
  this.lastLogin = new Date();
  return this.save();
};

userSchema.statics.findByEmail = function(email) {
  return this.findOne({ email: email.toLowerCase() }).lean();
};

userSchema.pre('save', function(next) {
  if (this.isModified('email')) {
    this.email = this.email.toLowerCase();
  }
  next();
});

module.exports = mongoose.model('User', userSchema);