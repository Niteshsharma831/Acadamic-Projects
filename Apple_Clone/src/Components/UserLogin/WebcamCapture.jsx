import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import { FaCamera, FaRedo } from 'react-icons/fa';
import './WebcamCapture.css';

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

  return (
    <div className="webcam-section">
      {webcamError && (
        <div className="error-banner">
          {webcamError}
          <button onClick={retake}>Try Again</button>
        </div>
      )}

      {!imgSrc ? (
        <div className="webcam-container">
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={640}
            height={480}
            videoConstraints={{
              facingMode: 'user',
              width: { ideal: 640 },
              height: { ideal: 480 }
            }}
            onUserMediaError={(error) => {
              console.error('Webcam error:', error);
              setWebcamError('Camera access denied. Please enable permissions.');
            }}
            screenshotQuality={0.92}
          />
          <div className="face-guide">
            <div className="guide-circle" />
            <div className="guide-line top" />
            <div className="guide-line bottom" />
          </div>
        </div>
      ) : (
        <div className="preview-section">
          <h3>Preview</h3>
          <img 
            src={imgSrc} 
            alt="Captured face" 
            className="preview-image"
            onError={() => {
              setWebcamError('Failed to load preview');
              retake();
            }}
          />
        </div>
      )}

      <div className="capture-controls">
        <button 
          className={`capture-btn ${isCapturing ? 'disabled' : ''}`}
          onClick={imgSrc ? retake : capture}
          disabled={isCapturing}
        >
          {imgSrc ? (
            <>
              <FaRedo className="btn-icon" />
              Retake
            </>
          ) : (
            <>
              <FaCamera className="btn-icon" />
              {mode === 'register' ? 'Register Face' : 'Verify Face'}
            </>
          )}
        </button>
        
        {isCapturing && (
          <div className="processing-indicator">
            <div className="spinner"></div>
            <span>Processing...</span>
          </div>
        )}
      </div>
    </div>
  );
};

WebcamCapture.propTypes = {
  onCapture: PropTypes.func.isRequired,
  mode: PropTypes.oneOf(['register', 'login']).isRequired,
  isCapturing: PropTypes.bool,
};

export default WebcamCapture;