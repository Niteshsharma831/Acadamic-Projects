import React from "react";
import VideoSrc from "../Videos/watchVideo.mp4";
import watchADV from "../../public/ApppleWatch.png";

function WatchPage() {
  const latestAccessories = [
    {
      name: "Smart Watch",
      img: "https://www.apple.com/v/watch/bq/images/overview/consider/feature_health__b2yo83wkzoaa_xlarge_2x.jpg",
      price: "From ₹119900.00",
      text: "iPhone 16 Pro Built for Apple Intelligence. Footnote",
    },
    {
      name: "Smart Watch",
      img: "https://www.apple.com/v/watch/bq/images/overview/consider/feature_fitness__b5owsglf0ieu_xlarge_2x.jpg",
      price: "From ₹119900.00",
      text: "iPhone 16 Pro Built for Apple Intelligence. Footnote",
    },
    {
      name: "Smart Watch",
      img: "https://www.apple.com/v/watch/bq/images/overview/consider/feature_connectivity__cwtqydvy2laq_xlarge_2x.jpg",
      price: "From ₹119900.00",
      text: "iPhone 16 Pro Built for Apple Intelligence. Footnote",
    },
    {
      name: "Smart Watch",
      img: "https://www.apple.com/v/watch/bq/images/overview/consider/feature_safety__gln97xcew2em_xlarge_2x.jpg",
      price: "From ₹119900.00",
      text: "iPhone 16 Pro Built for Apple Intelligence. Footnote",
    },
    {
      name: "Smart Watch",
      img: "https://www.apple.com/v/watch/bq/images/overview/consider/feature_watch_and_iphone__fiq5g9njy5qy_xlarge_2x.jpg",
      price: "From ₹119900.00",
      text: "iPhone 16 Pro Built for Apple Intelligence. Footnote",
    },
    {
      name: "Smart Watch",
      img: "https://www.apple.com/v/watch/bq/images/overview/consider/feature_personalization__f8bl9mx85j22_xlarge_2x.jpg",
      price: "From ₹119900.00",
      text: "iPhone 16 Pro Built for Apple Intelligence. Footnote",
    },
    {
      name: "Smart Watch",
      img: "https://www.apple.com/v/watch/bq/images/overview/consider/feature_adventure__d4xvmn7guk02_xlarge_2x.jpg",
      price: "From ₹119900.00",
      text: "iPhone 16 Pro Built for Apple Intelligence. Footnote",
    },
  ];
  return (
    <div className="mt-5">
      <div className="content p-5">
        <p className="text-center">
          Get up to 24 months of No Cost EMI* plus up to ₹6000.00 instant
          cashback◊ on selected iPad models with eligible cards
        </p>
        <div className="row mt-5">
          <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
            <h1 style={{ fontSize: "5rem" }}>Smart Watch</h1>
          </div>
          <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
            <h3 className="text-center text-md-end">
              The ultimate device <br /> for a healthy life..
            </h3>
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
      <h1 className="p-5 content mt-5">
        Why Apple is the best <br /> place to buy iPhone.
      </h1>
      <div>
        <img alt="" src={watchADV} style={{ width: "100%" }} />
      </div>
      <div className="content p-5">
        <h1 style={{ fontSize: "4rem" }}>Get to know Apple Watch.</h1>
        <p className="text-center">
          Apple Watch is a wearable device that allows you to track your
          fitness, health, and wellness data.
        </p>
        <div className="latestAccesseries d-flex justify-content-between gap-3 mt-5 p-5">
          {latestAccessories.map((latestAccessery, index) => (
            <div className="card text-center border-0" key={index}>
              <img
                src={latestAccessery.img}
                className="card-img-top mb-5"
                alt={latestAccessery.name}
                style={{ height: "650px", objectFit: "cover" }}
              />
              <div
                className="position-absolute top-0"
                style={{
                  color:
                    index === 1 ||
                    index === 2 ||
                    index === 3 ||
                    index === 4 ||
                    index === 5
                      ? "black"
                      : "white",
                }}
              >
                <p>
                  <h1 className="p-2">{latestAccessery.name}</h1>
                  <span className="p-2">{latestAccessery.text}</span>
                  <span>{latestAccessery.price}</span>
                </p>
              </div>
              <a href="#">
                <button
                  className="position-absolute rounded-circle bg-primary text-white border-0 "
                  style={{
                    width: "50px",
                    height: "50px",
                    bottom: "10px",
                    right: "10px",
                    fontSize: "24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  +
                </button>
              </a>
            </div>
          ))}
        </div>
        <h1 className="p-5" style={{ fontSize: "4rem" }}>
          Explore the line-up.
        </h1>
        <div className="container mt-4">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card">
                <img
                  className="card-img-top img-fluid mx-auto mt-3"
                  alt="Laptop Image"
                  style={{ width: "150px", height: "auto" }}
                  src="https://www.apple.com/v/watch/bp/images/overview/select/product_se__frx4hb13romm_xlarge.png"
                />
                <div className="card-body">
                  <h3 className="card-title text-center mt-3">Apple Watch</h3>
                  <p className="card-text text-center mt-3">
                    All the essentials. <br /> Light on price.
                  </p>
                  <p className="card-text text-center">
                    <strong>From ₹24900.00*</strong>
                  </p>
                  <a href="#" class="btn btn-primary mt-3">
                    Learn More
                  </a>{" "}
                  <a href="#" class="btn btn-primary mt-3">
                    Buy{" "}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card">
                <img
                  className="card-img-top img-fluid mx-auto mt-3"
                  alt="Laptop Image"
                  style={{ width: "150px", height: "auto" }}
                  src="https://www.apple.com/v/watch/bp/images/overview/select/product_s10__deak4mdempoy_xlarge.png"
                />
                <div className="card-body">
                  <h3 className="card-title text-center mt-3">
                    Apple Watch series 10
                  </h3>
                  <p className="card-text text-center mt-3">M2 or M3 chip</p>
                  <p className="card-text text-center mt-3">
                    Strikingly thin and fast so you can work, play or create
                    anywhere.
                  </p>
                  <p class="card-text text-center">
                    <strong>From ₹49900.00*</strong>
                  </p>
                  <a href="#" className="btn btn-primary mt-3">
                    Learn More
                  </a>{" "}
                  <a href="#" className="btn btn-primary mt-3">
                    But{" "}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card">
                <img
                  className="card-img-top img-fluid mx-auto mt-3"
                  alt="Laptop Image"
                  style={{ width: "150px", height: "auto" }}
                  src="https://www.apple.com/v/watch/bq/images/overview/select/product_se__c83w8hz9gre6_xlarge_2x.png"
                />
                <div className="card-body">
                  <h3 className="card-title text-center mt-3">
                    Apple Watch ultra 2
                  </h3>
                  <p className="card-text text-center mt-3">
                    M4, M4 Pro or M4 Max chip
                  </p>
                  <p className="card-text text-center mt-3">
                    The ultimate sports <br /> and adventure watch..
                  </p>
                  <p className="card-text text-center">
                    <strong>From ₹89900.00*</strong>
                  </p>
                  <a href="#" className="btn btn-primary mt-3">
                    Learn More
                  </a>{" "}
                  <a href="#" className="btn btn-primary mt-3">
                    Buy{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col col-lg-4 col-md-4 col-sm-12">
              <img
                alt=""
                src="https://www.apple.com/v/watch/bp/images/overview/select/product_tile_icon_case_sizes__frpc80tcj9me_large.png"
              />
              <p>
                44 mm or 40 mm <br /> aluminium case
              </p>
            </div>
            <div className="col col-lg-4 col-md-4 col-sm-12">
              <img
                alt=""
                src="https://www.apple.com/v/watch/bp/images/overview/select/product_tile_icon_case_sizes__frpc80tcj9me_large.png"
              />
              <p>
                44 mm or 40 mm <br /> aluminium case
              </p>
            </div>
            <div className="col col-lg-4 col-md-4 col-sm-12">
              <img
                alt=""
                src="https://www.apple.com/v/watch/bp/images/overview/select/product_tile_icon_case_sizes__frpc80tcj9me_large.png"
              />
              <p>
                44 mm or 40 mm <br /> aluminium case
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col col-lg-4 col-md-4 col-sm-12">
              <img
                alt=""
                src="https://www.apple.com/v/watch/bp/images/overview/select/product_tile_icon_case_fill__fszn2l29zuy6_large.png"
              />
              <p>
                Retina display <br /> Up to 1,000 nits
              </p>
            </div>
            <div className="col col-lg-4 col-md-4 col-sm-12">
              <img
                alt=""
                src="https://www.apple.com/v/watch/bp/images/overview/select/product_tile_icon_case_fill__fszn2l29zuy6_large.png"
              />
              <p>
                Retina display <br /> Up to 2,000 nits
              </p>
            </div>
            <div className="col col-lg-4 col-md-4 col-sm-12">
              <img
                alt=""
                src="https://www.apple.com/v/watch/bp/images/overview/select/product_tile_icon_case_fill__fszn2l29zuy6_large.png"
              />
              <p>
                Retina display <br /> Up to 3,000 nits
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col col-lg-4 col-md-4 col-sm-12">
              <img
                alt=""
                src="https://www.apple.com/v/watch/bp/images/overview/select/product_tile_icon_chip_s8__1dfxw5yx25u2_large.png"
              />
              <p>
                S10 SiP <br /> Faster on-device Siri <br /> Precision Finding
                for iPhone13
              </p>
            </div>
            <div className="col col-lg-4 col-md-4 col-sm-12">
              <img
                alt=""
                src="https://www.apple.com/v/watch/bp/images/overview/select/product_tile_icon_chip_s8__1dfxw5yx25u2_large.png"
              />
              <p>
                S10 SiP <br /> Double tap gesture <br /> Faster on-device Siri{" "}
                <br /> Precision Finding for iPhone13
              </p>
            </div>
            <div className="col col-lg-4 col-md-4 col-sm-12">
              <img
                alt=""
                src="https://www.apple.com/v/watch/bp/images/overview/select/product_tile_icon_chip_s8__1dfxw5yx25u2_large.png"
              />
              <p>
                S10 SiP <br /> Double tap gesture <br /> Faster on-device Siri{" "}
                <br /> Precision Finding for iPhone13
              </p>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col col-lg-4 col-md-4 col-sm-12">
              <img
                alt=""
                src="https://www.apple.com/v/watch/bp/images/overview/select/product_tile_icon_heart__d3nput42we0y_large.png"
              />
              <p>
                High and low heart rate notifications <br /> Irregular rhythm
                notifications2 <br /> Low cardio fitness notifications
              </p>
            </div>
            <div className="col col-lg-4 col-md-4 col-sm-12">
              <img
                alt=""
                src="https://www.apple.com/v/watch/bp/images/overview/select/product_tile_icon_heart__d3nput42we0y_large.png"
              />
              <p>
                High and low heart rate notifications <br /> Irregular rhythm
                notifications2 <br /> Low cardio fitness notifications
              </p>
            </div>
            <div className="col col-lg-4 col-md-4 col-sm-12">
              <img
                alt=""
                src="https://www.apple.com/v/watch/bp/images/overview/select/product_tile_icon_heart__d3nput42we0y_large.png"
              />
              <p>
                High and low heart rate notifications <br /> Irregular rhythm
                notifications2 <br /> Low cardio fitness notifications
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col col-lg-4 col-md-4 col-sm-12">
              <img
                alt=""
                src="https://www.apple.com/v/watch/bp/images/overview/select/product_tile_icon_battery__cf9dxpv3s9iu_large.png"
              />
              <p>
                Up to 18 hours20 <br /> Up to 36 hours in Low Power Mode20
              </p>
            </div>
            <div className="col col-lg-4 col-md-4 col-sm-12">
              <img
                alt=""
                src="https://www.apple.com/v/watch/bp/images/overview/select/product_tile_icon_battery__cf9dxpv3s9iu_large.png"
              />
              <p>
                Up to 18 hours20 <br /> Up to 36 hours in Low Power Mode20{" "}
                <br />
                Fast charging21
              </p>
            </div>
            <div className="col col-lg-4 col-md-4 col-sm-12">
              <img
                alt=""
                src="https://www.apple.com/v/watch/bp/images/overview/select/product_tile_icon_battery__cf9dxpv3s9iu_large.png"
              />
              <p>
                Up to 18 hours20 <br /> Up to 36 hours in Low Power Mode20{" "}
                <br />
                Fast charging21
              </p>
            </div>
          </div>
        </div>
        <h1 className="mt-5 p-5">iPhone essentials.</h1>
        <div class="row">
          <div class="col col-lg-6 col-md-6 col-12">
            <div class="mt-5" style={{ marginLeft: "20%" }}>
              <h3 class="mt-5">Show your True Color</h3>
              <p>
                New materials, new styles, new colours, new carbon neutral
                options.
              </p>
            </div>
            <img
              alt=""
              width="100%"
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/watch-bands-header-202409_GEO_IN?wid=1840&hei=960&fmt=jpeg&qlt=90&.v=1724804471362"
            />
          </div>
          <div class="col col-lg-6 col-md-6 col-12">
            <div class="mt-5" style={{ marginLeft: "20%" }}>
              <h3 class="mt-5">Magic run in the Family</h3>
              <p>
                Hearing Health features including Loud Sound Reduction,
                Conversation Boost and Background Sounds
              </p>
            </div>
            <img
              alt=""
              width="100%"
              src="https://www.apple.com/v/airpods-max/b/images/overview/design_colors_blue_front__ddfias5frxqq_xlarge.jpg"
            />
          </div>
        </div>
        <h1 className="mt-5 p-5">Significant others.</h1>
        <div className="row">
          <div className="col col-lg-6 col-md-6 col-12">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <h5>Apple Watch and iPhone</h5>
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Combining Apple Watch and iPhone opens up a world of
                    features that make each device better. You can do things
                    like create a custom route with Maps on your iPhone, then
                    download it to your watch to use any time. Or start a
                    cycling workout on your watch and see your metrics
                    automatically appear as a Live Activity on your iPhone.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <h5>Apple Watch and AirPods</h5>
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    You can do so much with just Apple Watch and AirPods — all
                    without your iPhone. Take calls, stream music and podcasts,
                    hear incoming notifications. Even respond to messages with
                    Siri.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col col-lg-6 col-md-6 col-12">
            <img
              alt=""
              src="https://www.apple.com/newsroom/images/live-action/wwdc-2023/standard/watchos-10/Apple-WWDC23-watchOS-10-cycling-Live-Activity-230605_inline.jpg.large.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WatchPage;
