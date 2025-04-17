import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { FaMicrophone, FaStop, FaImage, FaPaperPlane, FaVolumeUp, FaSpinner } from 'react-icons/fa';
import './ChatInterface.css';

const API_URL = 'http://localhost:3001/api';

const ChatInterface = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const messagesEndRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const audioRef = useRef(null);
  const fileInputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const playAudio = (audioData) => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    
    const audio = new Audio(`data:audio/wav;base64,${audioData}`);
    audioRef.current = audio;
    
    audio.onplay = () => setIsPlaying(true);
    audio.onpause = () => setIsPlaying(false);
    audio.onended = () => setIsPlaying(false);
    
    audio.play().catch(error => {
      console.error('Error playing audio:', error);
      setError('Failed to play audio response');
    });
  };

  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        setError('Image size should be less than 5MB');
        return;
      }
      
      if (!file.type.startsWith('image/')) {
        setError('Please select an image file');
        return;
      }
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setInputMessage('Analyze this image');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim() && !imagePreview) return;

    const newMessage = {
      text: inputMessage,
      sender: 'user',
      timestamp: new Date().toISOString(),
      image: imagePreview
    };

    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');
    setImagePreview(null);
    setIsLoading(true);
    setError(null);

    try {
      let response;
      if (imagePreview) {
        // Convert base64 to blob
        const base64Data = imagePreview.split(',')[1];
        const blob = await fetch(`data:image/jpeg;base64,${base64Data}`).then(res => res.blob());
        
        // Create FormData
        const formData = new FormData();
        formData.append('file', blob, 'image.jpg');
        formData.append('message', inputMessage || 'Analyze this image');

        response = await axios.post(`${API_URL}/sound/image-chat`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
      } else {
        response = await axios.post(`${API_URL}/chat/chat`, {
          message: inputMessage,
          type: 'text',
          voice_response: true
        });
      }

      if (response.data.success) {
        const botMessage = {
          text: response.data.text,
          sender: 'bot',
          timestamp: new Date().toISOString(),
          audioData: response.data.voice_response
        };

        setMessages(prev => [...prev, botMessage]);
        
        if (response.data.voice_response) {
          playAudio(response.data.voice_response);
        }
      } else {
        throw new Error(response.data.error || 'Failed to get response');
      }
    } catch (err) {
      const errorMessage = err.response?.data?.error || err.message || 'Failed to send message';
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
        const formData = new FormData();
        formData.append('audio', audioBlob);

        try {
          const response = await axios.post(`${API_URL}/sound/voice-to-text`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
          });

          if (response.data.success) {
            setInputMessage(response.data.text);
          } else {
            throw new Error(response.data.error || 'Failed to convert voice to text');
          }
        } catch (error) {
          setError(error.message || 'Failed to process voice input');
        }
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (error) {
      setError(`Failed to access microphone: ${error.message}`);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
      setIsRecording(false);
    }
  };

  const renderMessage = (message) => {
    const formatText = (text) => {
      return text.split('\n').map((line, i) => (
        <span key={i}>
          {line.startsWith('-') ? <li>{line.substring(1)}</li> : line}
          <br />
        </span>
      ));
    };

    return (
      <div
        key={message.timestamp}
        className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}
      >
        {message.image && (
          <div className="message-image-container">
            <img src={message.image} alt="Uploaded" className="message-image" />
            <div className="image-overlay">
              <span className="image-text">Analyzing image...</span>
            </div>
          </div>
        )}
        <div className="message-content">
          {formatText(message.text)}
          {message.audioData && (
            <button
              className={`audio-button ${isPlaying ? 'playing' : ''}`}
              onClick={() => isPlaying ? stopAudio() : playAudio(message.audioData)}
            >
              <FaVolumeUp />
            </button>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="chat-interface">
      <div className="messages-container">
        {messages.map((message) => renderMessage(message))}
        {isLoading && (
          <div className="message bot-message loading-message">
            <FaSpinner className="spinner" />
            <p>Processing your request...</p>
          </div>
        )}
        {error && (
          <div className="error-message">
            <p>{error}</p>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSendMessage} className="input-container">
        {imagePreview && (
          <div className="image-preview">
            <img src={imagePreview} alt="Preview" />
            <button 
              type="button" 
              className="remove-image"
              onClick={() => setImagePreview(null)}
            >
              X
            </button>
          </div>
        )}
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder={imagePreview ? "Add a message about the image..." : "Type your message..."}
          disabled={isLoading}
        />
        <div className="button-container">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageSelect}
            disabled={isLoading}
            ref={fileInputRef}
            style={{ display: 'none' }}
          />
          <button
            type="button"
            className="icon-button"
            onClick={() => fileInputRef.current?.click()}
            disabled={isLoading}
          >
            <FaImage />
          </button>
          <button
            type="button"
            className={`icon-button ${isRecording ? 'recording' : ''}`}
            onClick={isRecording ? stopRecording : startRecording}
            disabled={isLoading}
          >
            {isRecording ? <FaStop /> : <FaMicrophone />}
          </button>
          <button 
            type="submit" 
            disabled={isLoading || (!inputMessage.trim() && !imagePreview)}
            className={(!inputMessage.trim() && !imagePreview) ? 'disabled' : ''}
          >
            <FaPaperPlane />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatInterface;
