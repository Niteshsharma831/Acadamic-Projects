const mongoose = require('mongoose');
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
  transports: [new winston.transports.Console()]
});

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/face-auth', {
      maxPoolSize: 50,
      connectTimeoutMS: 10000,
      serverSelectionTimeoutMS: 5000
    });

    logger.info(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    logger.error(`MongoDB connection error: ${error.message}`);
    setTimeout(connectDB, 5000); // Retry after 5 seconds
  }
};

module.exports = connectDB;