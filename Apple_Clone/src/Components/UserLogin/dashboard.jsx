import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiLogOut, FiUser, FiMessageCircle, FiClock } from "react-icons/fi";
import "./dashboard.css";
import ChatInterface from "../chatbot/ChatInterface";
import axios from "axios";

const API_URL = 'http://localhost:3001/api';

const Dashboard = () => {
  const [imageError, setImageError] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const image = location.state?.image;
  // const userId = location.state?.userId;

  useEffect(() => {
    if (!location.state) {
      navigate('/', { state: { error: 'Please login first' } });
      return;
    }
    if (image) {
      setImageError(false);
    }

    // Fetch chat history when component mounts
    const fetchHistory = async () => {
      try {
        const response = await axios.get(`${API_URL}/chat/history`);
        if (response.data.success) {
          setChatHistory(response.data.history || []);
        }
      } catch (error) {
        console.error('Failed to fetch chat history:', error);
      }
    };

    fetchHistory();
  }, [image, location.state, navigate]);

  const handleLogout = () => {
    navigate('/', { state: { logoutSuccess: true } });
  };

  return (
    <motion.div 
      className="dashboard-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="profile-card-container"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="profile-header">
          <motion.h3
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <FiUser className="header-icon" /> {image ? 'Welcome Back!' : 'Guest User'}
          </motion.h3>
          {image ? (
            <motion.button 
              className="logout-btn"
              onClick={handleLogout}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiLogOut /> Logout
            </motion.button>
          ) : (
            <motion.button 
              className="login-btn"
              onClick={() => navigate('/login')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiLogOut /> Login
            </motion.button>
          )}
        </div>

        <motion.div 
          className="profile-content"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="image-section">
            {!imageError && image ? (
              <motion.div 
                className="image-frame"
                whileHover={{ scale: 1.05 }}
              >
                <div className="image-overlay" />
                <img
                  src={`data:image/jpeg;base64,${image}`}
                  alt="User"
                  className="user-image"
                  onError={() => setImageError(true)}
                />
              </motion.div>
            ) : (
              <motion.div 
                className="image-error"
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.7, 1, 0.7] 
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 2 
                }}
              >
                <FiUser className="error-icon" />
                <p>Please login to see profile</p>
              </motion.div>
            )}
          </div>

          <motion.div 
            className="chat-history"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h4><FiMessageCircle /> Recent Conversations</h4>
            {image ? (
              <div className="history-circles">
                {chatHistory.slice(-3).map((chat, index) => (
                  <motion.div 
                    key={index} 
                    className="history-circle"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <img
                      src={`data:image/jpeg;base64,${image}`}
                      alt={`Chat ${index + 1}`}
                    />
                    <span>
                      <FiClock className="time-icon" />
                      {new Date().toLocaleDateString()}
                    </span>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="guest-message">
                <p>Login to view your chat history</p>
              </div>
            )}
          </motion.div>
        </motion.div>

        <motion.div 
          className="profile-footer"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.span 
            className="status-badge"
            whileHover={{ scale: 1.1 }}
          >
            {image ? 'Verified' : 'Guest'}
          </motion.span>
        </motion.div>
      </motion.div>

      <motion.div 
        className="chatbot-section"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
      >
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Apple Chatbot
        </motion.h2>
        <ChatInterface onHistoryUpdate={setChatHistory} />
      </motion.div>
    </motion.div>
  );
};

export default Dashboard;