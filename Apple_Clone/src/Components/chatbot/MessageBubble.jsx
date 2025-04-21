import { FaVolumeUp } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

export default function MessageBubble({ message, onSpeak }) {
  return (
    <motion.div
      className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} mb-4`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className={`max-w-xs p-4 rounded-xl shadow-lg ${
          message.isUser ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white' : 'bg-gray-700/50 text-gray-200'
        }`}
      >
        <div className="flex items-center justify-between mb-2">
          {!message.isUser && (
            <span className="flex items-center gap-2 text-indigo-400 font-medium">
              <FaVolumeUp className="text-lg" />
              HealthAI
            </span>
          )}
          <span className="text-xs text-gray-400">
            {new Date(message.timestamp).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </span>
        </div>
        <p className="text-sm">{message.text || 'Empty response received'}</p>
        {message.audioData && (
          <audio controls className="w-full mt-2 rounded-lg">
            <source src={`data:audio/wav;base64,${message.audioData}`} type="audio/wav" />
          </audio>
        )}
        {!message.isUser && (
          <motion.button
            className="flex items-center gap-2 mt-3 px-3 py-1 rounded-full bg-gray-600/50 hover:bg-indigo-500/70 text-white transition-all"
            onClick={() => onSpeak(message.text)}
            aria-label="Play audio response"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaVolumeUp />
            <span>Hear Response</span>
          </motion.button>
        )}
        {message.isUser && message.audioUrl && (
          <audio controls src={message.audioUrl} className="w-full mt-2 rounded-lg">
            Your browser does not support the audio element.
          </audio>
        )}
      </div>
    </motion.div>
  );
}

MessageBubble.propTypes = {
  message: PropTypes.shape({
    isUser: PropTypes.bool.isRequired,
    timestamp: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.instanceOf(Date)])
      .isRequired,
    text: PropTypes.string.isRequired,
    audioUrl: PropTypes.string,
    audioData: PropTypes.string,
  }).isRequired,
  onSpeak: PropTypes.func.isRequired,
};