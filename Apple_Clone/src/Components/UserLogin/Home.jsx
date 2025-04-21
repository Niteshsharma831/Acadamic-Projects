import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { FiUserPlus, FiLogIn, FiCheckCircle, FiAlertCircle, FiShield, FiClock, FiSmartphone, FiLock, FiArrowRight } from 'react-icons/fi';

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  const particleVariants = {
    animate: {
      scale: [0, 1.2, 0],
      opacity: [0, 0.6, 0],
      x: () => Math.random() * 200 - 100,
      y: () => Math.random() * 200 - 100,
      transition: { duration: Math.random() * 4 + 3, repeat: Infinity, ease: 'easeInOut' },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-gray-900 to-blue-950 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-300 rounded-full opacity-50"
            style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
            variants={particleVariants}
            animate="animate"
          />
        ))}
      </div>

      <motion.div
        className="container mx-auto px-6 py-12 max-w-7xl relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 mb-6"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            Next-Gen Face Authentication
          </motion.h1>
          <motion.p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto" variants={itemVariants}>
            Secure, fast, and seamless facial recognition technology for modern authentication
          </motion.p>
        </motion.div>

        <AnimatePresence>
          {(location.state?.registrationSuccess || location.state?.loginSuccess) && (
            <motion.div
              className="flex items-center justify-center bg-green-500/10 border border-green-500/50 text-green-400 rounded-xl p-4 mb-12 max-w-lg mx-auto"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <FiCheckCircle className="mr-3 text-xl" />
              <span>
                {location.state?.registrationSuccess
                  ? 'Registration successful! Please login.'
                  : 'Welcome back! Authentication successful.'}
              </span>
            </motion.div>
          )}
          {location.state?.error && (
            <motion.div
              className="flex items-center justify-center bg-red-500/10 border border-red-500/50 text-red-400 rounded-xl p-4 mb-12 max-w-lg mx-auto"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <FiAlertCircle className="mr-3 text-xl" />
              <span>{location.state.error}</span>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div className="flex flex-col sm:flex-row justify-center gap-4 mb-16" variants={itemVariants}>
          <motion.button
            className="flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:from-indigo-500 hover:to-purple-500 transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: '0 8px 24px rgba(99, 102, 241, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/register')}
            aria-label="Register new user"
          >
            <FiUserPlus className="mr-2 text-xl" />
            Register New User
          </motion.button>
          <motion.button
            className="flex items-center justify-center bg-gray-800/50 border border-gray-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-700/50 transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: '0 8px 24px rgba(75, 85, 99, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/login')}
            aria-label="Login"
          >
            <FiLogIn className="mr-2 text-xl" />
            Login
          </motion.button>
          <motion.button
            className="flex items-center justify-center bg-gray-800/50 border border-gray-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-700/50 transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: '0 8px 24px rgba(75, 85, 99, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/dashboard')}
            aria-label="More"
          >
            <FiArrowRight className="mr-2 text-xl" />
            More
          </motion.button>
        </motion.div>

        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16" variants={containerVariants}>
          {[
            { icon: FiShield, title: 'Secure Authentication', desc: 'Advanced facial recognition with 99.9% accuracy' },
            { icon: FiClock, title: 'Real-time Analysis', desc: 'Instant verification in under 2 seconds' },
            { icon: FiSmartphone, title: 'Cross-Platform', desc: 'Seamless experience across all devices' },
            { icon: FiLock, title: 'Privacy First', desc: 'Encrypted biometric data for maximum security' },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/30 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-6 text-center hover:bg-gray-800/50 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.03, boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)' }}
            >
              <feature.icon className="text-4xl text-indigo-400 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="text-center" variants={itemVariants}>
          {location.state?.image ? (
            <motion.div
              className="flex flex-col items-center gap-4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={`data:image/jpeg;base64,${location.state.image}`}
                alt="User profile"
                className="w-24 h-24 rounded-full object-cover border-4 border-indigo-500 shadow-lg"
              />
              <p className="text-lg text-white font-medium">Welcome back, {location.state.user?.email}</p>
            </motion.div>
          ) : (
            <motion.p
              className="text-gray-400 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Login to access your personalized dashboard
            </motion.p>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;