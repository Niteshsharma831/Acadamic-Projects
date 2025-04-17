import { FaVolumeUp } from "react-icons/fa";
import PropTypes from "prop-types";

export default function MessageBubble({ message, onSpeak }) {
  return (
    <div className={`message-bubble ${message.isUser ? "user" : "bot"}`}>
      <div className="message-content">
        <div className="message-header">
          {!message.isUser && (
            <span className="bot-label">
              <FaVolumeUp className="bot-icon" />
              HealthAI
            </span>
          )}
          <span className="timestamp">
            {new Date(message.timestamp).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </div>

        <p className="message-text">
          {message.text || "Empty response received"}
        </p>
        {message.audioData && (
          <audio controls className="audio-player">
            <source
              src={`data:audio/wav;base64,${message.audioData}`}
              type="audio/wav"
            />
          </audio>
        )}
        {!message.isUser && (
          <button
            className="speak-button"
            onClick={() => onSpeak(message.text)}
            aria-label="Play audio response"
          >
            <FaVolumeUp className="speak-icon" />
            <span>Hear Response</span>
          </button>
        )}
      </div>

      {message.isUser && message.audioUrl && (
        <audio controls src={message.audioUrl} className="audio-player">
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  );
}

MessageBubble.propTypes = {
  message: PropTypes.shape({
    isUser: PropTypes.bool.isRequired,
    timestamp: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.instanceOf(Date),
    ]).isRequired,
    text: PropTypes.string.isRequired,
    audioUrl: PropTypes.string,
    audioData: PropTypes.string,
  }).isRequired,
  onSpeak: PropTypes.func.isRequired,
};
