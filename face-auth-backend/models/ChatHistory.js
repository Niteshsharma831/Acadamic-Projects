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
    type: String,
    required: function() {
      return this.type === 'image';
    }
  }],
  timestamp: {
    type: Date,
    default: Date.now,
    index: true
  }
});

// Indexes for faster queries
chatHistorySchema.index({ user: 1, timestamp: -1 });
chatHistorySchema.index({ timestamp: -1 });

// Static method to get recent chat history for a user
chatHistorySchema.statics.getRecentHistory = function(user, limit = 10) {
  return this.find({ user })
    .sort({ timestamp: -1 })
    .limit(limit);
};

// Static method to clear chat history for a user
chatHistorySchema.statics.clearHistory = function(user) {
  return this.deleteMany({ user });
};

const ChatHistory = mongoose.model('ChatHistory', chatHistorySchema);

module.exports = ChatHistory;