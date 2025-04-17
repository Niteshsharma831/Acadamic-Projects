import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WebcamCapture from './WebcamCapture';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FiAlertCircle } from 'react-icons/fi';

const Register = () => {
  const [message, setMessage] = useState('');
  const [isCapturing, setIsCapturing] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleRegistration = async (imageData) => {
    try {
      if (!email || !name) {
        setMessage('Please fill in all fields');
        return;
      }

      setIsCapturing(true);
      setMessage('');
      
      // Convert base64 to blob
      const base64Data = imageData.split(',')[1];
      const byteCharacters = atob(base64Data);
      const byteArrays = [];
      
      for (let offset = 0; offset < byteCharacters.length; offset += 1024) {
        const slice = byteCharacters.slice(offset, offset + 1024);
        const byteNumbers = new Array(slice.length);
        
        for (let i = 0; i < slice.length; i++) {
          byteNumbers[i] = slice.charCodeAt(i);
        }
        
        const byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
      }
      
      const blob = new Blob(byteArrays, { type: 'image/jpeg' });
      
      const formData = new FormData();
      formData.append('image', blob, 'image.jpg');
      formData.append('email', email);
      formData.append('name', name);

      const response = await axios.post('http://localhost:3001/api/auth/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      if (response.data.success) {
        navigate('./login', { 
          state: { 
            registrationSuccess: true,
            userId: response.data.userId 
          }
        });
      } else {
        setMessage(response.data.error || 'Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Registration error:', error);
      setMessage(error.response?.data?.error || error.message || 'Registration failed. Please try again.');
    } finally {
      setIsCapturing(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="register-container"
    >
      <div className="particles-background">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle" />
        ))}
      </div>

      <motion.div 
        className="auth-card"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <motion.h2 
          className="gradient-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Face Registration
        </motion.h2>

        <div className="form-fields">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
          />
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-field"
          />
        </div>

        <motion.div 
          className="webcam-wrapper"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <WebcamCapture 
            onCapture={handleRegistration}
            mode="register"
            isCapturing={isCapturing}
          />
        </motion.div>

        {message && (
          <motion.div
            className="error-message"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <FiAlertCircle className="error-icon" />
            {message}
          </motion.div>
        )}

        <div className="instruction-text">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Position your face in the center frame and ensure good lighting
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Add this CSS
const styles = `
  .register-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
    position: relative;
    overflow: hidden;
  }

  .particles-background {
    position: absolute;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .particle {
    position: absolute;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    animation: float 15s infinite linear;
  }

  @keyframes float {
    0% { transform: translateY(100vh) translateX(-10vw); }
    100% { transform: translateY(-100vh) translateX(10vw); }
  }

  .auth-card {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(12px);
    border-radius: 24px;
    padding: 3rem;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    border: 1px solid rgba(255, 255, 255, 0.18);
    width: 90%;
    max-width: 600px;
    z-index: 1;
  }

  .gradient-title {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 2rem;
    background: linear-gradient(45deg, #667eea, #764ba2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .form-fields {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .input-field {
    padding: 0.8rem;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.1);
    color: white;
    font-size: 1rem;
    transition: all 0.3s ease;
  }

  .input-field:focus {
    outline: none;
    border-color: #667eea;
    background: rgba(255, 255, 255, 0.15);
  }

  .input-field::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  .webcam-wrapper {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
  }

  .error-message {
    padding: 1rem;
    margin-top: 1.5rem;
    background: rgba(255, 99, 71, 0.1);
    color: #ff6347;
    border-radius: 12px;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border: 1px solid rgba(255, 99, 71, 0.3);
    animation: shake 0.4s ease;
  }

  .error-icon {
    font-size: 1.2rem;
  }

  .instruction-text {
    text-align: center;
    margin-top: 1.5rem;
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.9rem;
  }

  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    20% { transform: translateX(-10px); }
    40% { transform: translateX(10px); }
    60% { transform: translateX(-5px); }
    80% { transform: translateX(5px); }
  }

  @media (max-width: 768px) {
    .auth-card {
      padding: 2rem;
      width: 95%;
    }

    .gradient-title {
      font-size: 2rem;
    }
  }
`;

// Inject styles
const styleSheet = document.createElement('style');
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default Register;