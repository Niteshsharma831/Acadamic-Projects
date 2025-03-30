import React from "react";
import VideoSrc from "../Videos/watchVideo.mp4";

function EntertainmentPage() {
  return (
    <div className="mt-5">
      <div className="content p-5">
        <p className="text-center">
          Get up to 24 months of No Cost EMI* plus up to ₹6000.00 instant
          cashback◊ on selected iPad models with eligible cards
        </p>
        <div className="row mt-5">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h1 style={{ fontSize: "3rem" }}>Entertainment</h1>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 text-center text-md-end">
            <h3>
              The ultimate device <br /> for a healthy life..
            </h3>
          </div>
        </div>
      </div>

      <div
        className="container-fluid d-flex justify-content-center align-items-center flex-column"
        style={{ height: "70vh", backgroundColor: "black" }}
      >
        <h1 className="text-center text-light" style={{ fontSize: "5rem" }}>
          Meet the A-list of <br /> entertainment.
        </h1>
        <p className="text-center text-light mt-3">
          Award‑winning movies. Binge‑worthy shows. Your favourite music
          mastered in Spatial Audio. And the most epic collection of mobile
          games. The best entertainment and experiences live here — only on
          Apple.
        </p>
      </div>

      <div className="container-fluid bg-dark p-5">
        <div className="row align-items-center">
          <div className="col-lg-4 col-md-4 col-12">
            <img
              alt=""
              src="https://www.apple.com/v/services/i/images/services/overview/services/apple-one-banner/chiclet_icloud__cg2fz3fj3nau_large.png"
            />
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <p className="text-light fs-5">
              Get four services in one and enjoy more for less.
            </p>
          </div>
          <div className="col-lg-4 col-md-4 col-12 text-end">
            <button
              className="rounded border-light text-light"
              style={{ backgroundColor: "transparent" }}
            >
              Learn more
            </button>
          </div>
        </div>
      </div>

      <div className="hero" id="hero">
        <video
          autoPlay
          loop
          muted
          className="border p-2"
          style={{
            width: "100vw",
            minHeight: "60vh",
            maxHeight: "70vh",
            objectFit: "cover",
          }}
        >
          <source src={VideoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="container-fluid p-5 mx-5">
        <div
          className="d-flex flex-lg-wrap flex-nowrap overflow-auto"
          style={{
            gap: "15px",
            whiteSpace: "nowrap",
            scrollbarWidth: "thin",
            scrollbarColor: "lightgray transparent",
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
            <div
              key={index}
              className="col-lg-2 col-md-3 col-sm-4 col-6"
              style={{
                minWidth: "200px",
                maxWidth: "280px",
              }}
            >
              <div className="card position-relative">
                <img
                  className="card-img-top"
                  src="https://www.apple.com/newsroom/images/r8-landing-page-tiles/Apple_TV_Marvelous_Mrs_Maisel_12062017_LP_hero.jpg.og.jpg"
                  alt={`Image ${index}`}
                />
                <button
                  className="btn btn-primary position-absolute"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    bottom: "10px",
                    right: "10px",
                  }}
                  onClick={() => (window.location.href = `/new-page-${index}`)}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="hero p-5" id="hero">
        <video
          autoPlay
          loop
          muted
          className="border p-2"
          style={{
            width: "100vw",
            minHeight: "60vh",
            maxHeight: "70vh",
            objectFit: "cover",
          }}
        >
          <source src={VideoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="container-fluid p-5 mx-5">
        <div
          className="d-flex flex-lg-wrap flex-nowrap overflow-auto"
          style={{
            gap: "15px",
            whiteSpace: "nowrap",
            scrollbarWidth: "thin",
            scrollbarColor: "lightgray transparent",
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
            <div
              key={index}
              className="col-lg-2 col-md-3 col-sm-4 col-6"
              style={{
                minWidth: "200px",
                maxWidth: "280px",
              }}
            >
              <div className="card position-relative">
                <img
                  className="card-img-top"
                  src="https://www.apple.com/newsroom/images/r8-landing-page-tiles/Apple_TV_Marvelous_Mrs_Maisel_12062017_LP_hero.jpg.og.jpg"
                  alt={`Image ${index}`}
                />
                <button
                  className="btn btn-primary position-absolute"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    bottom: "10px",
                    right: "10px",
                  }}
                  onClick={() => (window.location.href = `/new-page-${index}`)}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EntertainmentPage;
