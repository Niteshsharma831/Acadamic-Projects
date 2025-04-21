import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WebcamCapture from './WebcamCapture';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FiAlertCircle } from 'react-icons/fi';

const Login = () => {
  const [message, setMessage] = useState('');
  const [isCapturing, setIsCapturing] = useState(false);
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (imageData) => {
    try {
      if (!email) {
        setMessage('Please enter your email');
        return;
      }

      setIsCapturing(true);
      setMessage('');

      const base64Data = imageData.split(',')[1];
      const blob = new Blob([new Uint8Array(atob(base64Data).split('').map(c => c.charCodeAt(0)))], { type: 'image/jpeg' });
      const formData = new FormData();
      formData.append('image', blob, 'image.jpg');
      formData.append('email', email);

      const response = await axios.post('http://localhost:3001/api/auth/login', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (response.data.success) {
        navigate('/dashboard', {
          state: {
            loginSuccess: true,
            image: base64Data,
            user: { email, name: response.data.user.name },
            userId: response.data.userId,
          },
        });
      } else {
        setMessage(response.data.error || 'Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Login error:', error);
      setMessage(error.response?.data?.error || error.message || 'Login failed. Please try again.');
    } finally {
      setIsCapturing(false);
    }
  };

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-950 via-gray-900 to-blue-950 relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-300 rounded-full opacity-50"
            style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
            animate={{
              y: [0, -1000],
              x: [0, Math.random() * 200 - 100],
              opacity: [0.5, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          />
        ))}
      </div>

      <motion.div
        className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 max-w-md w-full border border-gray-700/50 shadow-2xl"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <motion.h2
          className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Face Login
        </motion.h2>

        <div className="space-y-4 mb-6">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-900/50 border border-gray-600 text-white placeholder-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
            aria-label="Email address"
          />
        </div>

        <motion.div
          className="rounded-2xl overflow-hidden shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <WebcamCapture onCapture={handleLogin} mode="login" isCapturing={isCapturing} />
        </motion.div>

        {message && (
          <motion.div
            className="flex items-center bg-red-500/10 border border-red-500/50 text-red-400 rounded-xl p-4 mt-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
          >
            <FiAlertCircle className="mr-3 text-xl" />
            <span>{message}</span>
          </motion.div>
        )}

        <motion.p
          className="text-center mt-6 text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Position your face in the center frame and ensure good lighting
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Login;