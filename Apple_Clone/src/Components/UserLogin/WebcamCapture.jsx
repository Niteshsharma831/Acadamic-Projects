import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import { FaCamera, FaRedo } from 'react-icons/fa';
import { motion } from 'framer-motion';

const WebcamCapture = ({ onCapture, mode, isCapturing = false }) => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [webcamError, setWebcamError] = useState(null);

  const capture = () => {
    try {
      const imageSrc = webcamRef.current.getScreenshot();
      if (!imageSrc) throw new Error('Failed to capture image');
      setImgSrc(imageSrc);
      if (typeof onCapture === 'function') {
        onCapture(imageSrc);
      }
    } catch (error) {
      console.error('Capture error:', error);
      setWebcamError('Failed to capture image. Please try again.');
    }
  };

  const retake = () => {
    setImgSrc(null);
    setWebcamError(null);
  };

  const buttonVariants = {
    hover: { scale: 1.05, boxShadow: '0 8px 24px rgba(99, 102, 241, 0.3)' },
    tap: { scale: 0.95 },
  };

  return (
    <motion.div
      className="flex flex-col items-center bg-gray-800/30 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 w-full max-w-lg"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {webcamError && (
        <motion.div
          className="flex items-center bg-red-500/10 border border-red-500/50 text-red-400 rounded-xl p-4 mb-6 w-full"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <span className="flex-1">{webcamError}</span>
          <button
            onClick={retake}
            className="bg-red-500/50 text-red-400 px-4 py-2 rounded-lg hover:bg-red-500/70 transition-all"
          >
            Try Again
          </button>
        </motion.div>
      )}

      {!imgSrc ? (
        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width="100%"
            height="100%"
            videoConstraints={{
              facingMode: 'user',
              width: { ideal: 640 },
              height: { ideal: 480 },
            }}
            onUserMediaError={(error) => {
              console.error('Webcam error:', error);
              setWebcamError('Camera access denied. Please enable permissions.');
            }}
            screenshotQuality={0.92}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-3/4 h-3/4 border-2 border-dashed border-indigo-400 rounded-full opacity-50" />
          </div>
        </div>
      ) : (
        <motion.div
          className="w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <img
            src={imgSrc}
            alt="Captured face"
            className="w-full h-full object-cover"
            onError={() => {
              setWebcamError('Failed to load preview');
              retake();
            }}
          />
        </motion.div>
      )}

      <motion.div className="mt-6 w-full">
        <motion.button
          className={`flex items-center justify-center w-full px-6 py-3 rounded-full font-semibold text-lg transition-all duration-300 ${
            isCapturing ? 'bg-gray-600 cursor-not-allowed' : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white'
          }`}
          onClick={imgSrc ? retake : capture}
          disabled={isCapturing}
          variants={buttonVariants}
          whileHover={isCapturing ? {} : buttonVariants.hover}
          whileTap={isCapturing ? {} : buttonVariants.tap}
          aria-label={imgSrc ? 'Retake photo' : 'Capture photo'}
        >
          {imgSrc ? (
            <>
              <FaRedo className="mr-2 text-xl" />
              Retake
            </>
          ) : (
            <>
              <FaCamera className="mr-2 text-xl" />
              {mode === 'register' ? 'Register Face' : 'Verify Face'}
            </>
          )}
        </motion.button>
        {isCapturing && (
          <motion.div
            className="flex items-center justify-center mt-4 text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <svg className="animate-spin h-5 w-5 mr-3 text-indigo-400" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
            </svg>
            Processing...
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

WebcamCapture.propTypes = {
  onCapture: PropTypes.func.isRequired,
  mode: PropTypes.oneOf(['register', 'login']).isRequired,
  isCapturing: PropTypes.bool,
};

export default WebcamCapture;