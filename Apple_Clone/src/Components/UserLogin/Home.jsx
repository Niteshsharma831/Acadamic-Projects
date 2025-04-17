// Home.jsx
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { FiUserPlus, FiLogIn, FiCheckCircle, FiAlertCircle, FiShield, FiClock, FiSmartphone, FiLock } from 'react-icons/fi';

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="home-container"
    >
      <div className="particles-background">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <motion.div
        className="content-wrapper"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="hero-section"
          variants={itemVariants}
        >
          <motion.h1 
            className="gradient-title"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Next-Gen Face Authentication
          </motion.h1>
          <motion.p 
            className="subtitle"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Experience the future of secure authentication with our advanced facial recognition technology
          </motion.p>
        </motion.div>

        <AnimatePresence>
          {(location.state?.registrationSuccess || location.state?.loginSuccess) && (
            <motion.div
              className="success-message"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <FiCheckCircle className="success-icon" />
              {location.state?.registrationSuccess
                ? 'Registration successful! Please login.'
                : 'Welcome back! Authentication successful.'}
            </motion.div>
          )}

          {location.state?.error && (
            <motion.div
              className="error-message"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <FiAlertCircle className="error-icon" />
              {location.state.error}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div 
          className="action-buttons"
          variants={itemVariants}
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="primary-btn"
            onClick={() => navigate('/register')}
          >
            <FiUserPlus className="btn-icon" />
            Register New User
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="secondary-btn"
            onClick={() => navigate('/login')}
          >
            <FiLogIn className="btn-icon" />
            Login
          </motion.button>
        </motion.div>

        <motion.div
          className="features-grid"
          variants={containerVariants}
        >
          <motion.div 
            className="feature-card"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <FiShield className="feature-icon" />
            <h3>Secure Authentication</h3>
            <p>Advanced facial recognition technology with 99.9% accuracy</p>
          </motion.div>

          <motion.div 
            className="feature-card"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <FiClock className="feature-icon" />
            <h3>Real-time Analysis</h3>
            <p>Instant verification process under 2 seconds</p>
          </motion.div>

          <motion.div 
            className="feature-card"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <FiSmartphone className="feature-icon" />
            <h3>Cross-Platform</h3>
            <p>Works seamlessly across all devices and platforms</p>
          </motion.div>

          <motion.div 
            className="feature-card"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <FiLock className="feature-icon" />
            <h3>Privacy First</h3>
            <p>Your biometric data is encrypted and secure</p>
          </motion.div>
        </motion.div>

        <motion.div 
          className="user-status"
          variants={itemVariants}
        >
          {location.state?.image ? (
            <motion.div 
              className="user-profile"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <img 
                src={`data:image/jpeg;base64,${location.state.image}`} 
                alt="User profile" 
                className="profile-image"
              />
              <p className="welcome-text">Welcome back, {location.state.user?.email}</p>
            </motion.div>
          ) : (
            <motion.div 
              className="guest-message"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <p>Login to access your personalized dashboard</p>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Home;

// Add this CSS
const styles = `
  .home-container {
    min-height: 100vh;
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
    position: relative;
    overflow: hidden;
    padding: 2rem;
  }

  .particles-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .particle {
    position: absolute;
    width: 4px;
    height: 4px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
  }

  .content-wrapper {
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  .hero-section {
    text-align: center;
    margin-bottom: 3rem;
  }

  .gradient-title {
    font-size: 3.5rem;
    font-weight: 800;
    margin-bottom: 1rem;
    background: linear-gradient(45deg, #667eea, #764ba2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .subtitle {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.8);
    max-width: 600px;
    margin: 0 auto;
  }

  .action-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-bottom: 4rem;
  }

  .primary-btn, .secondary-btn {
    padding: 1rem 2rem;
    border-radius: 12px;
    font-size: 1.1rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    transition: all 0.3s ease;
    border: none;
  }

  .primary-btn {
    background: linear-gradient(45deg, #667eea, #764ba2);
    color: white;
  }

  .secondary-btn {
    background: rgba(255, 255, 255, 0.1);
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  .btn-icon {
    font-size: 1.2rem;
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
  }

  .feature-card {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(12px);
    border-radius: 20px;
    padding: 2rem;
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
  }

  .feature-icon {
    font-size: 2.5rem;
    color: #667eea;
    margin-bottom: 1rem;
  }

  .feature-card h3 {
    color: white;
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
  }

  .feature-card p {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
  }

  .success-message, .error-message {
    padding: 1rem 2rem;
    border-radius: 12px;
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .success-message {
    background: rgba(46, 204, 113, 0.1);
    color: #2ecc71;
    border: 1px solid rgba(46, 204, 113, 0.3);
  }

  .error-message {
    background: rgba(255, 99, 71, 0.1);
    color: #ff6347;
    border: 1px solid rgba(255, 99, 71, 0.3);
  }

  .success-icon, .error-icon {
    font-size: 1.2rem;
  }

  .user-status {
    text-align: center;
    margin-top: 2rem;
  }

  .user-profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .profile-image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid #667eea;
  }

  .welcome-text {
    color: white;
    font-size: 1.2rem;
  }

  .guest-message {
    color: rgba(255, 255, 255, 0.7);
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    .gradient-title {
      font-size: 2.5rem;
    }

    .subtitle {
      font-size: 1rem;
    }

    .action-buttons {
      flex-direction: column;
    }

    .features-grid {
      grid-template-columns: 1fr;
    }
  }
`;

// Inject styles
const styleSheet = document.createElement('style');
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
