import PropTypes from 'prop-types';

export default function HistoryPanel({ history, onHistorySelect }) {
    return (
      <div className="history-panel">
        <h3 className="history-title">Chat History</h3>
        <div className="history-list">
          {Array.isArray(history) && history.map((item, index) => (
            <div 
              key={index}
              className="history-item"
              onClick={() => onHistorySelect(item.question)}
            >
              <div className="history-question">{item.question}</div>
              <div className="history-answer">
                {item.answer && item.answer.substring(0, 80)}...
              </div>
              <div className="history-date">
                {new Date(item.timestamp).toLocaleDateString()}
              </div>
            </div>
          ))}
          {(!history || history.length === 0) && (
            <div className="no-history">
              No chat history available
            </div>
          )}
        </div>
      </div>
    );
  }

HistoryPanel.propTypes = {
  history: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
      timestamp: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.instanceOf(Date)
      ]).isRequired,
    })
  ),
  onHistorySelect: PropTypes.func.isRequired,
};

HistoryPanel.defaultProps = {
  history: []
};