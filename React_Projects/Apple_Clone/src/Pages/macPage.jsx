import React from "react";
import VideoSrc from "../Videos/xlarge_2x.mp4";

function MacProducts() {
  const latestAccessories = [
    {
      name: "AirPods Pro",
      img: "https://www.apple.com/v/mac/home/cc/images/overview/consider/mac_intelligence__esfi0qmvis6e_xlarge_2x.jpg",
      price: "From ₹119900.00",
      text: "iPhone 16 Pro Built for Apple Intelligence. Footnote",
    },
    {
      name: "AirPods Pro",
      img: "https://www.apple.com/v/mac/home/cc/images/overview/consider/mac_performance__dh5hyac1zf8m_xlarge_2x.jpg",
      price: "From ₹119900.00",
      text: "iPhone 16 Pro Built for Apple Intelligence. Footnote",
    },
    {
      name: "AirPods Pro",
      img: "https://www.apple.com/v/mac/home/cc/images/overview/consider/mac_iphone__gh1tblkt6bqm_xlarge_2x.jpg",
      price: "From ₹119900.00",
      text: "iPhone 16 Pro Built for Apple Intelligence. Footnote",
    },
    {
      name: "AirPods Pro",
      img: "https://www.apple.com/v/mac/home/cc/images/overview/consider/mac_compatibility__cu59oukz81ci_xlarge_2x.jpg",
      price: "From ₹119900.00",
      text: "iPhone 16 Pro Built for Apple Intelligence. Footnote",
    },
    {
      name: "AirPods Pro",
      img: "https://www.apple.com/v/mac/home/cc/images/overview/consider/mac_security__gfwda10khdym_xlarge_2x.jpg",
      price: "From ₹119900.00",
      text: "iPhone 16 Pro Built for Apple Intelligence. Footnote",
    },
    {
      name: "AirPods Pro",
      img: "https://www.apple.com/v/mac/home/cc/images/overview/consider/mac_durability__epiwcuk7zkeq_xlarge_2x.jpg",
      price: "From ₹119900.00",
      text: "iPhone 16 Pro Built for Apple Intelligence. Footnote",
    },
    {
      name: "AirPods Pro",
      img: "https://www.apple.com/v/mac/home/cc/images/overview/consider/mac_values__c9gck9qi4kia_xlarge_2x.jpg",
      price: "From ₹119900.00",
      text: "iPhone 16 Pro Built for Apple Intelligence. Footnote",
    },
  ];

  return (
    <div className="mt-5">
      <div className="content p-5">
        <p className="text-center">
          Get up to 24 months of No Cost EMI‡ plus up to ₹10000.00 instant
          cashback◊ on selected Mac models with eligible cards. Shop
        </p>
        <div className="row mt-5">
          <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
            <h1 style={{ fontSize: "5rem" }}>Mac</h1>
          </div>
          <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
            <h3 className="text-center text-md-end">
              If you can dream it, <br /> Mac can do it.
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
      <h1 className="p-5" style={{ fontSize: "4rem" }}>
        Get to know Mac.
      </h1>
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
              style={{ color: index === 0 || index === 2 ? "black" : "white" }}
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
      <h1 class="p-5 mt-5" style={{ fontSize: "4rem" }}>
        Explore the line-up.
      </h1>
      <div className="row p-5">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card p-5">
            <img
              src="https://www.apple.com/v/mac/home/cb/images/overview/select/product_tile_mbp_14_16__bkl8zusnkpw2_large.png"
              class="card-img-top"
              alt="Laptop Image"
            />
            <div classNames="card-body">
              <h3 className="card-title text-center">
                MacBook Pro 14” and 16”
              </h3>
              <p className="card-text text-center">M4, M4 Pro or M4 Max chip</p>
              <p className="card-text text-center">
                The most advanced Mac laptops for demanding workflows.
              </p>
              <p className="card-text text-center">
                <strong>From ₹169900.00*</strong>
              </p>
              <a href="#" className="btn btn-primary">
                Learn More
              </a>{" "}
              <a href="#" className="btn btn-primary">
                Buy
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card p-5">
            <img
              src="https://www.apple.com/v/mac/home/cb/images/overview/select/product_tile_mba_13_15__fx2g3qlubdym_large.png"
              class="card-img-top"
              alt="Laptop Image"
            />
            <div className="card-body">
              <h3 className="card-title text-center">
                MacBook Air 13” and 15”
              </h3>
              <p className="card-text text-center">M2 or M3 chip</p>
              <p className="card-text text-center">
                Strikingly thin and fast so you can work, play or create
                anywhere.
              </p>
              <p className="card-text text-center">
                <strong>From ₹99900.00*</strong>
              </p>
              <a href="#" className="btn btn-primary">
                Learn More
              </a>{" "}
              <a href="#" className="btn btn-primary">
                But
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className="row mt-5">
          <div className="col col-lg-4 col-md-4 col-sm-12 mt-5">
            <h3>35.97 cm or 41.05 cm</h3>
            (14.2″ or 16.2″) Liquid Retina XDR display with up to 1,600 nits
            peak brightness, 10,00,000:1 contrast ratio and up to 120Hz refresh
            rates.9
          </div>
          <div className="col col-lg-4 col-md-4 col-sm-12 mt-5">
            <h3>34.46 cm or 38.91 cm</h3>
            (13.6″ or 15.3″) Liquid Retina display with 500 nits of brightness
            and support for 1 billion colours9
          </div>
        </div>
        <div className="row mt-5">
          <div className="col col-lg-4 col-md-4 col-sm-12">
            <img
              alt=""
              src="https://www.apple.com/v/mac/home/cb/images/overview/select/product_tile_icon_m4_pro_max__d90fsmfhy6ky_large.png"
            />
            <p>Apple M4, M4 Pro or M4 Max chip</p>
          </div>
          <div className="col col-lg-4 col-md-4 col-sm-12">
            <img
              alt=""
              src="https://www.apple.com/v/mac/home/cb/images/overview/select/product_tile_icon_m2_m3__jo6w8mbgmmye_large.png"
            />
            <p>Apple M2 or M3 chip</p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col col-lg-4 col-md-4 col-sm-12">
            <img
              alt=""
              src="https://www.apple.com/v/mac/home/cb/images/overview/select/product_tile_icon_apple_intelligence__cjf0r385lhaq_large.png"
            />
            <p>Built for Apple Intelligence1</p>
          </div>
          <div className="col col-lg-4 col-md-4 col-sm-12">
            <img
              alt=""
              src="https://www.apple.com/v/mac/home/cb/images/overview/select/product_tile_icon_apple_intelligence__cjf0r385lhaq_large.png"
            />
            <p>Built for Apple Intelligence1</p>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col col-lg-4 col-md-4 col-sm-12">
            <h3>7 ports</h3>
            3x Thunderbolt 4 (USB‑C) or 3x Thunderbolt 5 (USB‑C), HDMI, SDXC,
            headphone jack, MagSafe
          </div>
          <div className="col col-lg-4 col-md-4 col-sm-12">
            <h3>4 ports</h3>
            2x Thunderbolt / USB 4, headphone jack, MagSafe
          </div>
        </div>
        <div className="row mt-5">
          <div className="col col-lg-4 col-md-4 col-sm-12">
            <h3>1.55 kg or 2.14 kg (3.40 lb. or 4.71 lb.)</h3>
          </div>
          <div className="col col-lg-4 col-md-4 col-sm-12">
            <h3>1.24 kg or 1.51 kg (2.7 lb. or 3.3 lb.)</h3>
          </div>
        </div>
      </div>
      <div className="mx-5">
        <h1 className="mt-5">Significant others.</h1>

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
                    <h5>Mac and iPhone</h5>
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Answer calls or messages from your iPhone directly on your
                    Mac. See and control what’s on your iPhone from your Mac
                    with iPhone Mirroring. Use Universal Clipboard to copy
                    images, video or text from your iPhone, then paste into
                    another app on your nearby Mac. And thanks to iCloud, you
                    can access your files from either your iPhone or your Mac.
                    And so much more.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <h5>Mac and iPad</h5>
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    Sketch on your iPad and have it appear instantly on your
                    Mac. Or use your iPad as a second display, so you can work
                    on one screen while you reference the other. You can even
                    start a Final Cut Pro project on your iPad and continue it
                    on your Mac.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    <h5>Mac and Apple Watch</h5>
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Automatically log in to your Mac when you’re wearing your
                    Apple Watch with Auto Unlock. No password typing required.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col col-lg-6 col-md-6 col-12">
            <img
              alt=""
              src="https://images.reiboot.com/article/ios18/comprehensive-writing-tools-for-enhanced-text-processing.jpg?w=559&h=363"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MacProducts;
