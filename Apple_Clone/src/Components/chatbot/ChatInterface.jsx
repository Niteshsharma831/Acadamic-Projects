import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { FaMicrophone, FaStop, FaImage, FaPaperPlane, FaSpinner } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const API_URL = 'http://localhost:3001/api';

const ChatInterface = ({ onHistoryUpdate, userId, isAuthenticated }) => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const messagesEndRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleImageSelect = (e) => {
    if (!isAuthenticated) {
      navigate('/login', { state: { error: 'Please login to use image chat.' } });
      return;
    }

    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setError('Image size should be less than 5MB');
        return;
      }
      if (!file.type.startsWith('image/')) {
        setError('Please select an image file');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setInputMessage('Analyze this image');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim() && !imagePreview) return;

    const newMessage = {
      text: inputMessage,
      sender: 'user',
      timestamp: new Date().toISOString(),
      image: imagePreview,
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputMessage('');
    setImagePreview(null);
    setIsLoading(true);
    setError(null);

    try {
      let response;
      if (imagePreview) {
        if (!isAuthenticated) {
          throw new Error('Please login to use image chat.');
        }
        const base64Data = imagePreview.split(',')[1];
        const blob = await fetch(`data:image/jpeg;base64,${base64Data}`).then((res) => res.blob());
        const formData = new FormData();
        formData.append('file', blob, 'image.jpg');
        formData.append('query', inputMessage || 'Analyze this image');
        formData.append('userId', userId || 'anonymous');

        response = await axios.post(`${API_URL}/upload`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      } else {
        response = await axios.post(`${API_URL}/chat`, {
          message: inputMessage,
          type: 'text',
          userId: userId || 'anonymous',
        });
      }

      if (response.data.success) {
        const botMessage = {
          text: response.data.text,
          sender: 'bot',
          timestamp: new Date().toISOString(),
        };
        setMessages((prev) => [...prev, botMessage]);
        onHistoryUpdate((prev) => [...prev, { question: inputMessage, answer: response.data.text, timestamp: new Date() }]);
      } else {
        throw new Error(response.data.error || 'Failed to get response');
      }
    } catch (err) {
      const errorMessage = err.response?.data?.error || err.message || 'Failed to send message';
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
        const formData = new FormData();
        formData.append('audio', audioBlob, 'audio.wav');
        formData.append('userId', userId || 'anonymous');

        try {
          const response = await axios.post(`${API_URL}/voice/voice`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
          });

          if (response.data.success) {
            setInputMessage(response.data.text);
          } else {
            throw new Error(response.data.error || 'Failed to convert voice to text');
          }
        } catch (error) {
          setError(error.message || 'Failed to process voice input');
        }
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (error) {
      setError(`Failed to access microphone: ${error.message}`);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.stream.getTracks().forEach((track) => track.stop());
      setIsRecording(false);
    }
  };

  const renderMessage = (message) => {
    const formatText = (text) => {
      return text.split('\n').map((line, i) => (
        <span key={i}>
          {line.startsWith('-') ? <li className="ml-4">{line.substring(1)}</li> : line}
          <br />
        </span>
      ));
    };

    return (
      <motion.div
        key={message.timestamp}
        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-4`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div
          className={`max-w-xs p-4 rounded-xl shadow-lg ${
            message.sender === 'user'
              ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
              : 'bg-gray-700/50 text-gray-200'
          }`}
        >
          {message.image && (
            <div className="relative mb-3 rounded-lg overflow-hidden">
              <img src={message.image} alt="Uploaded" className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <span className="text-white text-sm">Analyzing image...</span>
              </div>
            </div>
          )}
          <div>{formatText(message.text)}</div>
        </div>
      </motion.div>
    );
  };

  return (
    <motion.div
      className="flex flex-col h-[600px] bg-gray-800/30 backdrop-blur-lg rounded-2xl border border-gray-700/50 shadow-lg"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => renderMessage(message))}
        {isLoading && (
          <motion.div
            className="flex items-center justify-center text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <FaSpinner className="animate-spin h-5 w-5 mr-3 text-indigo-400" />
            Processing your request...
          </motion.div>
        )}
        {error && (
          <motion.div
            className="flex items-center bg-red-500/10 border border-red-500/50 text-red-400 rounded-xl p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <span>{error}</span>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t border-gray-700/50">
        {imagePreview && (
          <motion.div
            className="relative w-24 h-24 mb-4 rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
            <button
              type="button"
              className="absolute top-1 right-1 bg-red-500/80 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-500"
              onClick={() => setImagePreview(null)}
              aria-label="Remove image"
            >
              X
            </button>
          </motion.div>
        )}
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder={imagePreview ? 'Add a message about the image...' : 'Type your message...'}
            disabled={isLoading}
            className="flex-1 p-3 rounded-lg bg-gray-900/50 border border-gray-600 text-white placeholder-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 transition-all"
            aria-label="Chat input"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageSelect}
            disabled={isLoading}
            ref={fileInputRef}
            className="hidden"
            id="image-upload"
          />
          <motion.button
            type="button"
            className={`p-3 rounded-lg ${
              isLoading || !isAuthenticated
                ? 'bg-gray-600 cursor-not-allowed'
                : 'bg-gray-700/50 hover:bg-gray-600'
            } text-white transition-all`}
            onClick={() => isAuthenticated ? fileInputRef.current?.click() : navigate('/login', { state: { error: 'Please login to use image chat.' } })}
            disabled={isLoading}
            whileHover={isLoading || !isAuthenticated ? {} : { scale: 1.05 }}
            whileTap={isLoading || !isAuthenticated ? {} : { scale: 0.95 }}
            aria-label="Upload image"
          >
            <FaImage />
          </motion.button>
          <motion.button
            type="button"
            className={`p-3 rounded-lg ${
              isRecording ? 'bg-red-500/80 hover:bg-red-500' : isLoading ? 'bg-gray-600 cursor-not-allowed' : 'bg-gray-700/50 hover:bg-gray-600'
            } text-white transition-all`}
            onClick={isRecording ? stopRecording : startRecording}
            disabled={isLoading}
            whileHover={isLoading ? {} : { scale: 1.05 }}
            whileTap={isLoading ? {} : { scale: 0.95 }}
            aria-label={isRecording ? 'Stop recording' : 'Start recording'}
          >
            {isRecording ? <FaStop /> : <FaMicrophone />}
          </motion.button>
          <motion.button
            type="button"
            onClick={handleSendMessage}
            disabled={isLoading || (!inputMessage.trim() && !imagePreview)}
            className={`p-3 rounded-lg ${
              isLoading || (!inputMessage.trim() && !imagePreview)
                ? 'bg-gray-600 cursor-not-allowed'
                : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500'
            } text-white transition-all`}
            whileHover={isLoading || (!inputMessage.trim() && !imagePreview) ? {} : { scale: 1.05 }}
            whileTap={isLoading || (!inputMessage.trim() && !imagePreview) ? {} : { scale: 0.95 }}
            aria-label="Send message"
          >
            <FaPaperPlane />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

ChatInterface.propTypes = {
  onHistoryUpdate: PropTypes.func.isRequired,
  userId: PropTypes.string,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default ChatInterface;