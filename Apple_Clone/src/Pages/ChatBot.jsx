import React from "react";
import { Link } from "react-router-dom";
import videoSrc from "../Videos/AiAnimation.mp4";

function ChatBot() {
  return (
    <div>
      <div className="container-fluid w-100 position-fixed top-0 bg-light d-flex justify-content-between align-items-center px-3 py-2 shadow">
        <div className="center-text fs-5 fw-bold">Welcome to our Chatbot</div>
        <Link to="HomePage">
          <button className="btn btn-dark text-white">Apple Profile</button>
        </Link>
      </div>

      <div
        className="container d-flex justify-content-center align-items-center mt-4"
        style={{ height: "80vh" }}
      >
        <video
          autoPlay
          loop
          muted
          className="border p-2"
          style={{ width: "80%", height: "auto" }}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="chatbotOffcanvas"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">ChatBot</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>
        <div className="offcanvas-body">
          <p>Welcome to the AI ChatBot! Type below:</p>
          <div className="input-container">
            <input
              type="text"
              className="form-control"
              placeholder="Type your message..."
            />
            <button className="btn btn-primary w-100 mt-2">Send</button>
          </div>
        </div>
      </div>

      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="imageReaderOffcanvas"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Image Reader</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>
        <div className="offcanvas-body">
          <p>Upload an image or document to analyze content.</p>
          <div className="input-group mb-3">
            <span className="input-group-text">
              <i className="bi bi-cloud-upload"></i>
            </span>
            <input
              type="file"
              className="form-control"
              accept=".jpg,.png,.pdf,.doc,.docx"
            />
          </div>
          <button className="btn btn-success mt-2 w-100">Upload</button>
        </div>
      </div>

      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="voiceSupportOffcanvas"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Voice Support</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>
        <div className="offcanvas-body">
          <p>Speak to our AI assistant or type below:</p>
          <input
            type="text"
            className="form-control"
            placeholder="Type your query..."
          />
          <button className="btn btn-info w-100 mt-2">Send</button>
        </div>
      </div>

      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="appleAssistanceOffcanvas"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Apple Assistance</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>
        <div className="offcanvas-body">
          <p>Get Apple Support. Type below:</p>
          <input
            type="text"
            className="form-control"
            placeholder="Type your issue..."
          />
          <button className="btn btn-warning w-100 mt-2">Send</button>
        </div>
      </div>

      <div className="container-fluid position-fixed bottom-0 w-100 bg-light py-3">
        <div className="row w-100 justify-content-center align-items-center">
          <div className="col col-lg-3 col-md-4 col-12 my-2 text-center">
            <button
              className="btn btn-primary w-100"
              data-bs-toggle="offcanvas"
              data-bs-target="#chatbotOffcanvas"
            >
              ChatBot
            </button>
          </div>
          <div className="col col-lg-3 col-md-4 col-12 my-2 text-center">
            <button
              className="btn btn-success w-100"
              data-bs-toggle="offcanvas"
              data-bs-target="#imageReaderOffcanvas"
            >
              Image Reader
            </button>
          </div>
          <div className="col col-lg-3 col-md-4 col-12 my-2 text-center">
            <button
              className="btn btn-info w-100"
              data-bs-toggle="offcanvas"
              data-bs-target="#voiceSupportOffcanvas"
            >
              Voice Support
            </button>
          </div>
          <div className="col col-lg-3 col-md-4 col-12 my-2 text-center">
            <button
              className="btn btn-warning w-100"
              data-bs-toggle="offcanvas"
              data-bs-target="#appleAssistanceOffcanvas"
            >
              Apple Assistance
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ChatBot;
