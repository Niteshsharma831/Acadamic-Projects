import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

export default function HistoryPanel({ history, onHistorySelect }) {
  return (
    <motion.div
      className="bg-gray-800/30 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 shadow-lg"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-semibold text-white mb-4">Chat History</h3>
      <div className="space-y-4">
        {Array.isArray(history) && history.length > 0 ? (
          history.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-700/20 p-4 rounded-lg hover:bg-gray-700/30 transition-all cursor-pointer"
              onClick={() => onHistorySelect(item.question)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-indigo-400 font-medium mb-2">{item.question}</div>
              <div className="text-gray-400 text-sm line-clamp-2">{item.answer}</div>
              <div className="text-gray-500 text-xs mt-2">
                {new Date(item.timestamp).toLocaleDateString()}
              </div>
            </motion.div>
          ))
        ) : (
          <div className="text-gray-400 text-center">No chat history available</div>
        )}
      </div>
    </motion.div>
  );
}

HistoryPanel.propTypes = {
  history: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
      timestamp: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.instanceOf(Date)])
        .isRequired,
    })
  ),
  onHistorySelect: PropTypes.func.isRequired,
};

HistoryPanel.defaultProps = {
  history: [],
};