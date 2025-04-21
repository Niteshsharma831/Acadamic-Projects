import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiLogOut, FiUser, FiMessageCircle, FiClock, FiAlertCircle, FiLogIn } from 'react-icons/fi';
import ChatInterface from '../chatbot/ChatInterface';
import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

const Dashboard = () => {
  const [imageError, setImageError] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const image = location.state?.image;
  const user = location.state?.user;
  const userId = location.state?.userId;

  useEffect(() => {
    const checkUserStatus = async () => {
      if (user && user.email && image) {
        // Perform face and email match for registered users
        try {
          const base64Data = image;
          const blob = new Blob([new Uint8Array(atob(base64Data).split('').map(c => c.charCodeAt(0)))], { type: 'image/jpeg' });
          const formData = new FormData();
          formData.append('image', blob, 'image.jpg');
          formData.append('email', user.email);

          const response = await axios.post(`${API_URL}/auth/verify`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
          });

          if (!response.data.success) {
            setError(response.data.error || 'Face or email verification failed.');
            navigate('/login', { state: { error: 'Verification failed. Please login.' } });
          }
        } catch (err) {
          setError(err.response?.data?.error || 'Verification error. Please try again.');
          navigate('/login', { state: { error: 'Verification error. Please login.' } });
        }
      } else if (location.state?.registrationSuccess) {
        // Redirect newly registered users to login
        navigate('/login', { state: { registrationSuccess: true } });
      }
    };

    checkUserStatus();

    const fetchHistory = async () => {
      if (userId) {
        try {
          const response = await axios.get(`${API_URL}/chat/history`, {
            params: { userId },
          });
          if (response.data.success) {
            setChatHistory(response.data.history || []);
          }
        } catch (error) {
          console.error('Failed to fetch chat history:', error);
          setError('Failed to load chat history.');
        }
      }
    };

    fetchHistory();
  }, [image, user, userId, location.state, navigate]);

  const handleLogout = () => {
    navigate('/', { state: { logoutSuccess: true } });
  };

  const handleProtectedFeature = (feature) => {
    if (!user || !image) {
      navigate('/login', { state: { error: `Please login to access ${feature}.` } });
    }
  };

  const buttonVariants = {
    hover: { scale: 1.05, boxShadow: '0 8px 24px rgba(99, 102, 241, 0.3)' },
    tap: { scale: 0.95 },
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-indigo-950 via-gray-900 to-blue-950 p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div
          className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 shadow-lg"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          <div className="flex items-center justify-between mb-6">
            <motion.h3
              className="text-xl font-semibold text-white flex items-center gap-2"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <FiUser className="text-indigo-400 text-2xl" />
              {user?.name || 'Guest User'}
            </motion.h3>
            {image && user ? (
              <motion.button
                className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full hover:from-indigo-500 hover:to-purple-500 transition-all"
                onClick={handleLogout}
                variants={buttonVariants}
                whileHover={buttonVariants.hover}
                whileTap={buttonVariants.tap}
                aria-label="Logout"
              >
                <FiLogOut />
                Logout
              </motion.button>
            ) : (
              <motion.button
                className="flex items-center gap-2 bg-gray-800/50 border border-gray-600 text-white px-4 py-2 rounded-full hover:bg-gray-700/50 transition-all"
                onClick={() => navigate('/login')}
                variants={buttonVariants}
                whileHover={buttonVariants.hover}
                whileTap={buttonVariants.tap}
                aria-label="Login"
              >
                <FiLogIn />
                Login
              </motion.button>
            )}
          </div>

          <motion.div
            className="space-y-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex justify-center">
              {!imageError && image ? (
                <motion.div
                  className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-indigo-500 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  <img
                    src={`data:image/jpeg;base64,${image}`}
                    alt="User"
                    className="w-full h-full object-cover"
                    onError={() => setImageError(true)}
                  />
                </motion.div>
              ) : (
                <motion.div
                  className="flex flex-col items-center text-gray-400"
                  animate={{ scale: [1, 1.05, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <FiUser className="text-6xl mb-2" />
                  <p>Please login to see profile</p>
                </motion.div>
              )}
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white flex items-center gap-2 mb-4">
                <FiMessageCircle className="text-indigo-400" />
                Recent Conversations
              </h4>
              {user && image ? (
                <div className="space-y-4">
                  {chatHistory.slice(-3).map((chat, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-4 bg-gray-700/20 p-3 rounded-lg hover:bg-gray-700/30 transition-all"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <img
                        src={`data:image/jpeg;base64,${image}`}
                        alt={`Chat ${index + 1}`}
                        className="w-12 h-12 rounded-full object-cover border-2 border-indigo-500"
                      />
                      <div className="flex-1">
                        <p className="text-gray-300 text-sm">{chat.question}</p>
                        <span className="text-gray-400 text-xs flex items-center gap-2">
                          <FiClock className="text-indigo-400" />
                          {new Date(chat.timestamp).toLocaleDateString()}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <motion.div
                  className="text-gray-400 text-center cursor-pointer"
                  onClick={() => handleProtectedFeature('chat history')}
                  whileHover={{ scale: 1.02 }}
                >
                  Login to view your chat history
                </motion.div>
              )}
            </div>
          </motion.div>

          <motion.div
            className="mt-6 text-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span
              className={`inline-block px-4 py-1 rounded-full text-sm font-semibold ${
                image && user ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'
              }`}
            >
              {image && user ? 'Verified' : 'Guest'}
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          className="lg:col-span-2 bg-gray-800/30 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 shadow-lg"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, delay: 0.3 }}
        >
          <motion.h2
            className="text-2xl font-bold text-white mb-6"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Apple Chatbot
          </motion.h2>
          {error && (
            <motion.div
              className="flex items-center bg-red-500/10 border border-red-500/50 text-red-400 rounded-xl p-4 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <FiAlertCircle className="mr-3 text-xl" />
              <span>{error}</span>
            </motion.div>
          )}
          <ChatInterface
            onHistoryUpdate={setChatHistory}
            userId={userId}
            isAuthenticated={!!(user && image)}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Dashboard;