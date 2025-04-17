import   "react";
import { Link } from "react-router-dom";
import iphone16Pro1 from "../../public/iphone-16-pro_overview.png";
import iphone16Pro from "../../public/iPhoneBlue2.png";
import AppleWatchAds from "../../public/Apple Watch ads.jpg";
import AppleWatchDP from "../../public/watch dp.jpeg";
import VideoFrame from "../../public/videoframe_2840.png";
import heroEndFram from "../../public/hero_endframe__sg50vzdd6sqm_large.jpg";
import AirPoods from "../../public/airpods-4-anc-select-202409.jpg";

function HomePage() {
  return (
    <div className="mt-5 relative flex flex-col items-center justify-center w-full min-h-screen bg-gray-100">
      <img
        src={iphone16Pro1}
        alt="iPhone 16 Pro"
        style={{
          height: "70vh",
          width: "100%",
        }}
      />

      <img
        className="mt-2 bg-primary"
        src={iphone16Pro}
        alt="iPhone 16 Pro Blue"
        style={{
          height: "70vh",
          width: "100%",
        }}
      />
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-center">
        <h2 className="text-black font-bold">From ₹19900.00*</h2>
        <Link to="/buy">
          <button className="btn mt-2 bg-primary rounded-lg font-bold shadow-lg hover:bg-blue-800">
            Buy Now
          </button>
        </Link>
      </div>
      <img
        className="mt-2 bg-primary"
        src={AppleWatchAds}
        alt="iPhone 16 Pro Blue"
        style={{
          height: "70vh",
          width: "100%",
        }}
      />
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-center">
        <h2 className="text-black font-bold">From ₹119900.00*</h2>
        <Link to="/buy">
          <button className="btn mt-2 bg-primary rounded-lg font-bold shadow-lg hover:bg-blue-800">
            Buy Now
          </button>
        </Link>
      </div>
      <div className="row p-3">
        <div className="col-md-6 col-lg-6 col-sm-12 col-12">
          <div className="card" style={{ height: "100%" }}>
            <div className="card-title p-3 d-flex flex-column justify-content-center align-items-center text-center">
              <h2 className="text-black font-bold">Watch</h2>
              <h4>Series 10</h4>
              <div className="d-flex justify-content-center align-items-center">
                <button
                  className="btn bg-light learn-btn mr-2"
                  style={{ border: "2px solid #000" }}
                >
                  Learn
                </button>
                <button className="btn bg-primary text-light mx-3">
                  Buy Now
                </button>
              </div>
            </div>
            <div className="card-body p-0" style={{ flex: 1 }}>
              <img
                src={AppleWatchDP}
                alt="Apple Watch"
                style={{
                  maxWidth: "100%",
                  height: "100%",
                  objectFit: "cover",
                  padding: "10px",
                }}
              />
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-sm-12 col-12">
          <div className="card" style={{ height: "100%" }}>
            <div className="card-title p-3 d-flex flex-column justify-content-center align-items-center text-center">
              <h2 className="text-black font-bold">MacBook Air</h2>
              <h4>Supercharged by M3</h4>
              <div className="d-flex justify-content-center align-items-center">
                <button
                  className="btn bg-light learn-btn mr-2"
                  style={{ border: "2px solid #000" }}
                >
                  Learn
                </button>
                <button className="btn bg-primary text-light mx-3">
                  Buy Now
                </button>
              </div>
            </div>
            <div className="card-body p-0" style={{ flex: 1 }}>
              <img
                src={VideoFrame}
                alt="MacBook Air"
                style={{
                  maxWidth: "100%",
                  height: "100%",
                  objectFit: "cover",
                  padding: "10px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row p-3">
        <div className="col-md-6 col-lg-6 col-sm-12 col-12">
          <div className="card" style={{ height: "100%" }}>
            <div className="card-title p-3 d-flex flex-column justify-content-center align-items-center text-center">
              <h3 className="text-black font-bold">iPad Pro</h3>
              <h1 className="gradient-text">
                <b>ThinPossible</b>
              </h1>
              <div className="d-flex justify-content-center align-items-center">
                <button
                  className="btn bg-light learn-btn mr-2"
                  style={{ border: "2px solid #000" }}
                >
                  Learn
                </button>
                <button className="btn bg-primary text-light mx-3">
                  Buy Now
                </button>
              </div>
            </div>
            <div className="card-body p-0" style={{ flex: 1 }}>
              <img
                src={heroEndFram}
                alt="Apple Watch"
                style={{
                  maxWidth: "100%",
                  height: "100%",
                  objectFit: "cover",
                  padding: "10px",
                }}
              />
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-sm-12 col-12">
          <div className="card" style={{ height: "100%" }}>
            <div className="card-title p-3 d-flex flex-column justify-content-center align-items-center text-center">
              <h4 className="text-black font-bold">AirPod 4</h4>
              <h1 className="gradient-text">
                <b>Take a closer look.</b>
              </h1>
              <div className="d-flex justify-content-center align-items-center">
                <button
                  className="btn bg-light learn-btn mr-2"
                  style={{ border: "2px solid #000" }}
                >
                  Learn
                </button>
                <button className="btn bg-primary text-light mx-3">
                  Buy Now
                </button>
              </div>
            </div>
            <div className="card-body p-0" style={{ flex: 1 }}>
              <img
                src={AirPoods}
                alt="MacBook Air"
                style={{
                  maxWidth: "100%",
                  height: "100%",
                  objectFit: "cover",
                  padding: "10px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
