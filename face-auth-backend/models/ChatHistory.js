const mongoose = require('mongoose');

const chatHistorySchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
    index: true
  },
  question: {
    type: String,
    required: true
  },
  answer: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['text', 'image', 'voice'],
    default: 'text'
  },
  attachments: [{
    type: String
  }],
  timestamp: {
    type: Date,
    default: Date.now,
    index: true
  }
});

chatHistorySchema.index({ user: 1, timestamp: -1 });
chatHistorySchema.index({ type: 1, timestamp: -1 });

chatHistorySchema.statics.getRecentHistory = function(user, limit = 10) {
  return this.find({ user })
    .select('-__v')
    .sort({ timestamp: -1 })
    .limit(limit)
    .lean();
};

chatHistorySchema.statics.clearHistory = function(user) {
  return this.deleteMany({ user });
};

module.exports = mongoose.model('ChatHistory', chatHistorySchema);