import React from "react";
import VideoSrc from "../Videos/airPods.mp4";
import AirPods1 from "../assets/pro_startframe.jpg";
import AirPods2 from "../assets/headset.jpg";

function AirPodsPage() {
  const features = [
    {
      img: "https://www.apple.com/v/watch/bp/images/overview/select/product_tile_icon_chip_s8__1dfxw5yx25u2_large.png",
      text: "S10 SiP\nFaster on-device Siri\nPrecision Finding for iPhone 13",
    },
    {
      img: "https://www.apple.com/v/watch/bp/images/overview/select/product_tile_icon_chip_s8__1dfxw5yx25u2_large.png",
      text: "S10 SiP\nDouble tap gesture\nFaster on-device Siri\nPrecision Finding for iPhone 13",
    },
    {
      img: "https://www.apple.com/v/watch/bp/images/overview/select/product_tile_icon_chip_s8__1dfxw5yx25u2_large.png",
      text: "S10 SiP\nDouble tap gesture\nFaster on-device Siri\nPrecision Finding for iPhone 13",
    },
  ];

  const healthFeatures = [
    {
      img: "https://www.apple.com/v/watch/bp/images/overview/select/product_tile_icon_heart__d3nput42we0y_large.png",
      text: "High and low heart rate notifications\nIrregular rhythm notifications\nLow cardio fitness notifications",
    },
    {
      img: "https://www.apple.com/v/watch/bp/images/overview/select/product_tile_icon_heart__d3nput42we0y_large.png",
      text: "High and low heart rate notifications\nIrregular rhythm notifications\nLow cardio fitness notifications",
    },
    {
      img: "https://www.apple.com/v/watch/bp/images/overview/select/product_tile_icon_heart__d3nput42we0y_large.png",
      text: "High and low heart rate notifications\nIrregular rhythm notifications\nLow cardio fitness notifications",
    },
  ];
  const batteryFeatures = [
    {
      img: "https://www.apple.com/v/watch/bp/images/overview/select/product_tile_icon_battery__cf9dxpv3s9iu_large.png",
      text: "Up to 18 hours\nUp to 36 hours in Low Power Mode",
    },
    {
      img: "https://www.apple.com/v/watch/bp/images/overview/select/product_tile_icon_battery__cf9dxpv3s9iu_large.png",
      text: "Up to 18 hours\nUp to 36 hours in Low Power Mode\nFast charging",
    },
    {
      img: "https://www.apple.com/v/watch/bp/images/overview/select/product_tile_icon_battery__cf9dxpv3s9iu_large.png",
      text: "Up to 18 hours\nUp to 36 hours in Low Power Mode\nFast charging",
    },
  ];
  const latestAccessories = [
    {
      name: "Air Pods",
      img: "https://www.apple.com/v/watch/bq/images/overview/consider/feature_health__b2yo83wkzoaa_xlarge_2x.jpg",
      price: "From ₹119900.00",
      text: "iPhone 16 Pro Built for Apple Intelligence. Footnote",
    },
    {
      name: "Air Pods",
      img: "https://www.apple.com/v/airpods/x/images/overview/consider/card_spatial_audio__uga42js3h4ya_large.jpg",
      price: "From ₹119900.00",
      text: "iPhone 16 Pro Built for Apple Intelligence. Footnote",
    },
    {
      name: "Air Pods",
      img: "https://www.apple.com/ro/airpods-pro/images/overview/hearing_health_iphone__bx2h7aurs52a_large.jpg",
      price: "From ₹119900.00",
      text: "iPhone 16 Pro Built for Apple Intelligence. Footnote",
    },
    {
      name: "Air Pods",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHJcLA0Z6EkOKTG0-A7uCvOsbaYH-PvJ5wYviquri4ED2RAbiJ5yMEUL9QzZm42JTelQo&usqp=CAU",
      price: "From ₹119900.00",
      text: "iPhone 16 Pro Built for Apple Intelligence. Footnote",
    },
    {
      name: "Air Pods",
      img: "https://www.myimaginestore.com/media/catalog/product/cache/4a48ac28cbb6e9c41470e5be5a6d3043/m/t/mtjv3_av6_geo_in.jpeg",
      price: "From ₹119900.00",
      text: "iPhone 16 Pro Built for Apple Intelligence. Footnote",
    },
    {
      name: "Air Pods",
      img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-watch-ultra-202409_GEO_IN?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1725655434777",
      price: "From ₹119900.00",
      text: "iPhone 16 Pro Built for Apple Intelligence. Footnote",
    },
  ];
  return (
    <div className="p-5">
      <div className="content p-5 text-center">
        <p>
          Get up to 24 months of No Cost EMI* plus up to ₹6000.00 instant
          cashback◊ on selected iPad models with eligible cards
        </p>
        <div className="row mt-5">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h1 style={{ fontSize: "4rem" }}>AirPods</h1>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 text-md-end">
            <h3>
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
          className="border p-2 w-100"
          style={{
            height: "500px",
            objectFit: "cover",
          }}
        >
          <source src={VideoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="text-center mt-3">
        <img
          alt="AirPods Pro"
          src={AirPods1}
          style={{ width: "100%", objectFit: "cover" }}
        />
      </div>
      <div className="text-center mt-3">
        <img
          alt="AirPods Headset"
          src={AirPods2}
          style={{ width: "100%", objectFit: "cover" }}
        />
      </div>
      <div className="row">
        <div className="col-md-4 col-lg-6 col12">
          <h3>Five fresh colours. Bold sound. ₹59900.00*</h3>
        </div>
        <div className="col-md-4 col-lg-6 col12">
          <button className="btn bg-primary text-light">
            <strong>learn more</strong>
          </button>
          <button className="btn">
            <strong>buy</strong>
          </button>
        </div>
      </div>
      <h1 className="text-center p-5" style={{ fontSize: "4rem" }}>
        Which AirPods are <br /> right for you?
      </h1>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card">
              <img
                className="card-img-top img-fluid mx-auto mt-3"
                alt="Laptop Image"
                style={{ width: "150px", height: "auto" }}
                src="https://img.drz.lazcdn.com/static/bd/p/554d8c32b91c655f02b4af864b76a4a7.jpg_720x720q80.jpg"
              />
              <div className="card-body">
                <h3 className="card-title text-center mt-3">Apple AirPods 2</h3>
                <p className="card-text text-center mt-3">
                  Active Noise Cancelling
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
                src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-pro-compare-202409_FMT_WHH?wid=286&hei=324&fmt=jpeg&qlt=90&.v=1723594294397"
              />
              <div className="card-body">
                <h3 className="card-title text-center mt-3">
                  Apple AirPods Pro 2
                </h3>
                <p className="card-text text-center mt-3">
                  Strikingly thin and fast so you can work, play or create
                  anywhere.
                </p>
                <p className="card-text text-center">
                  <strong>From ₹49900.00*</strong>
                </p>
                <a href="#" class="btn btn-primary mt-3">
                  Learn More
                </a>{" "}
                <a href="#" class="btn btn-primary mt-3">
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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4XqML4N8FU03XOiRluafn1VjWcvxiSYtLPQ&s"
              />
              <div className="card-body">
                <h3 className="card-title text-center mt-3">Apple headset</h3>
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
      </div>
      <div className="container mt-5">
        <div className="row text-center p-5">
          {features.map((feature, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-12">
              <img src={feature.img} alt="" className="img-fluid" />
              <p>
                {feature.text.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>

        <div className="row text-center p-5">
          {healthFeatures.map((feature, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-12">
              <img src={feature.img} alt="" className="img-fluid" />
              <p>
                {feature.text.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
        <div className="row text-center p-5">
          {batteryFeatures.map((batteryFeatures, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-12">
              <img src={batteryFeatures.img} alt="" className="img-fluid" />
              <p>
                {batteryFeatures.text.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
      <h1 style={{ fontSize: "4rem" }}>Get to know AirPods.</h1>
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
                color: index === 3 || index === 4 ? "black" : "white",
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
      <div class="row mt-5 p-5" style={{ marginTop: "20%" }}>
        <div class="col col-lg-6 col-md-6 col-12">
          <h1>Get 3 months of Apple Music free with your AirPods.**</h1>
        </div>

        <div class="col col-lg-6 col-md-6 col-12">
          <img
            alt=""
            src="https://www.apple.com/in/airpods/images/overview/music/music_album_hero__gme6dccldf6u_large.jpg"
          />
        </div>
      </div>
    </div>
  );
}
export default AirPodsPage;
