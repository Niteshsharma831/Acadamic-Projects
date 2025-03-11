import React from "react";
import VideoSrc from "../Videos/iPadVideo.mp4";

function IPadPage() {
  const latestAccessories = [
    {
      name: "AirPods Pro",
      img: "https://img.lovepik.com/background/20211030/medium/lovepik-wallpaper-for-skydiving-aerial-photography-mobile-background-image_400457365.jpg",
      price: "From ₹119900.00",
      text: "iPhone 16 Pro Built for Apple Intelligence. Footnote",
    },
    {
      name: "AirPods Pro",
      img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-watch-ultra-202409_GEO_IN?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1725655434777",
      price: "From ₹119900.00",
      text: "iPhone 16 Pro Built for Apple Intelligence. Footnote",
    },
    {
      name: "AirPods Pro",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn8P3DeCVM6RHaGrM_p4c0m64kT-04AtHvoDHqsgA0caCI6Bjic2UrIp8fTSsjRcbHNZs&usqp=CAU",
      price: "From ₹119900.00",
      text: "iPhone 16 Pro Built for Apple Intelligence. Footnote",
    },
    {
      name: "AirPods Pro",
      img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-macbook-pro-202410?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1728342374593",
      price: "From ₹119900.00",
      text: "iPhone 16 Pro Built for Apple Intelligence. Footnote",
    },
    {
      name: "AirPods Pro",
      img: "https://newspaperads.ads2publish.com/wp-content/uploads/2019/06/ipad-air-incredible-power-at-an-incredible-value-ad-times-of-india-delhi-23-06-2019.png",
      price: "From ₹119900.00",
      text: "iPhone 16 Pro Built for Apple Intelligence. Footnote",
    },
    {
      name: "AirPods Pro",
      img: "https://thumbs.dreamstime.com/b/fierce-majestic-orange-black-striped-tiger-wallpaper-generated-ai-fierce-majestic-orange-black-striped-tiger-352258722.jpg",
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
            <h1 style={{ fontSize: "5rem" }}>Ipad</h1>
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
      <h1 className="p-5 mt-5" style={{ fontSize: "4rem" }}>
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
                src="https://www.apple.com/assets-www/en_WW/ipad/product_tile/xlarge/ipad_pro_f1345e8ae.png"
              />
              <div className="card-body">
                <h3 className="card-title text-center mt-3">iPad Pro</h3>
                <p className="card-text text-center mt-3">
                  M4, M4 Pro or M4 Max chip
                </p>
                <p className="card-text text-center mt-3">
                  The most advanced Mac laptops for demanding workflows.
                </p>
                <p className="card-text text-center">
                  <strong>From ₹169900.00*</strong>
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
                src="https://www.apple.com/assets-www/en_WW/ipad/product_tile/xlarge/ipad_air_103528cc7.png"
              />
              <div className="card-body">
                <h3 className="card-title text-center mt-3">MiPad Air</h3>
                <p className="card-text text-center mt-3">M2 or M3 chip</p>
                <p className="card-text text-center mt-3">
                  Strikingly thin and fast so you can work, play or create
                  anywhere.
                </p>
                <p className="card-text text-center">
                  <strong>From ₹99900.00*</strong>
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
                src="https://www.apple.com/assets-www/en_WW/ipad/product_tile/xlarge/ipad_10th_gen_3e2bffc1d.png"
              />
              <div className="card-body">
                <h3 className="card-title text-center mt-3">iPad</h3>
                <p className="card-text text-center mt-3">
                  M4, M4 Pro or M4 Max chip
                </p>
                <p className="card-text text-center mt-3">
                  The most advanced Mac laptops for demanding workflows.
                </p>
                <p className="card-text text-center">
                  <strong>From ₹169900.00*</strong>
                </p>
                <a href="#" className="btn btn-primary mt-3">
                  Learn More
                </a>{" "}
                <a href="#" class="btn btn-primary mt-3">
                  Buy{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col col-lg-4 col-md-4 col-sm-12 mt-5">
            <h3>33.02 cm or 28.22 cm</h3>
            (13″ or 11″) Ultra Retina XDR display4 ProMotion technology P3 wide
            colour Nano-texture display glass option on 1TB and 2TB models
          </div>
          <div className="col col-lg-4 col-md-4 col-sm-12 mt-5">
            <h3>33.02 cm or 28.22 cm</h3>
            (13″ or 11″) Liquid Retina display4 P3 wide colour
          </div>
          <div className="col col-lg-4 col-md-4 col-sm-12 mt-5">
            <h3>27.69 cm</h3>
            (10.9″) Liquid Retina display4 sRGB colour
          </div>
        </div>
        <div className="row mt-5">
          <div className="col col-lg-4 col-md-4 col-sm-12">
            <img
              alt=""
              src="https://www.apple.com/assets-www/en_WW/ipad/tout_table/small/chip.m4_elevated_3dd9db733.svg"
            />
            <p>M4 clip</p>
          </div>
          <div className="col col-lg-4 col-md-4 col-sm-12">
            <img
              alt=""
              src="https://www.apple.com/assets-www/en_WW/ipad/tout_table/small/chip.m4_elevated_3dd9db733.svg"
            />
            <p>M2 clip</p>
          </div>
          <div className="col col-lg-4 col-md-4 col-sm-12">
            <img
              alt=""
              src="https://www.apple.com/assets-www/en_WW/ipad/tout_table/small/chip.m4_elevated_3dd9db733.svg"
            />
            <p>A14 clip</p>
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
          <div className="col col-lg-4 col-md-4 col-sm-12">
            <h3>----</h3>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col col-lg-4 col-md-4 col-sm-12">
            <img
              alt=""
              src="https://www.apple.com/assets-www/en_WW/ipad/tout_table/small/ipadpro13.gen7.camera_elevated_8b1ecd6e5.svg"
            />
            <p>
              12MP Wide camera <br /> 4K video, ProRes
            </p>
          </div>
          <div className="col col-lg-4 col-md-4 col-sm-12">
            <img
              alt=""
              src="https://www.apple.com/assets-www/en_WW/ipad/tout_table/small/ipadair13.gen6.camera_elevated_a660a9722.svg"
            />
            <p>
              12MP Wide camera <br /> 4K video
            </p>
          </div>
          <div className="col col-lg-4 col-md-4 col-sm-12">
            <img
              alt=""
              src="https://www.apple.com/assets-www/en_WW/ipad/tout_table/small/ipadair13.gen6.camera_elevated_a660a9722.svg"
            />
            <p>
              12MP Wide camera <br /> 4K video
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col col-lg-4 col-md-4 col-sm-12">
            <img
              alt=""
              src="https://www.apple.com/assets-www/en_WW/ipad/tout_table/small/ipad.front.camera.landscape_elevated_3a58a988e.svg"
            />
            <p>
              Landscape 12MP Center Stage camera <br /> TrueDepth camera system
            </p>
          </div>
          <div className="col col-lg-4 col-md-4 col-sm-12">
            <img
              alt=""
              src="https://www.apple.com/assets-www/en_WW/ipad/tout_table/small/ipad.front.camera.landscape_elevated_3a58a988e.svg"
            />
            <p>Landscape 12MP Center Stage camera</p>
          </div>
          <div className="col col-lg-4 col-md-4 col-sm-12">
            <img
              alt=""
              src="https://www.apple.com/assets-www/en_WW/ipad/tout_table/small/ipad.front.camera.landscape_elevated_3a58a988e.svg"
            />
            <p>Landscape 12MP Center Stage camera</p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col col-lg-4 col-md-4 col-sm-12">
            <img
              alt=""
              src="https://www.apple.com/assets-www/en_WW/ipad/tout_table/small/applepencil.vertical.gen2.gen3_elevated_cf05e9268.svg"
            />
            <p>
              Supports Apple Pencil Pro <br /> Supports Apple Pencil (USB-C)
            </p>
          </div>
          <div className="col col-lg-4 col-md-4 col-sm-12">
            <img
              alt=""
              src="https://www.apple.com/assets-www/en_WW/ipad/tout_table/small/applepencil.vertical.gen2.gen3_elevated_cf05e9268.svg"
            />
            <p>
              Supports Apple Pencil Pro <br /> Supports Apple Pencil (USB-C)
            </p>
          </div>
          <div className="col col-lg-4 col-md-4 col-sm-12">
            <img
              alt=""
              src="https://www.apple.com/assets-www/en_WW/ipad/tout_table/small/applepencil.vertical.gen2.gen3_elevated_cf05e9268.svg"
            />
            <p>
              Supports Apple Pencil Pro <br /> Supports Apple Pencil (USB-C)
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col col-lg-4 col-md-4 col-sm-12">
            <img
              alt=""
              src="https://www.apple.com/assets-www/en_WW/ipad/tout_table/small/magickeyboard.m4.ipad_elevated_c74c0cc60.svg"
            />
            <p>Supports Magic Keyboard for iPad Pro (M4)</p>
          </div>
          <div className="col col-lg-4 col-md-4 col-sm-12">
            <img
              alt=""
              src="https://www.apple.com/assets-www/en_WW/ipad/tout_table/small/magickeyboard.m4.ipad_elevated_c74c0cc60.svg"
            />
            <p>Supports Magic Keyboard</p>
          </div>
          <div className="col col-lg-4 col-md-4 col-sm-12">
            <img
              alt=""
              src="https://www.apple.com/assets-www/en_WW/ipad/tout_table/small/magickeyboard.m4.ipad_elevated_c74c0cc60.svg"
            />
            <p>Supports Magic Keyboard Folio</p>
          </div>
        </div>
      </div>
      <h1 className="p-5 mt-5" style={{ fontSize: "4rem" }}>
        iPad essentials.
      </h1>
      <div className="col col-lg-6 col-md-6 col-12">
        <div className="mt-5" style={{ marginLeft: "20%" }}>
          <h3 className="mt-5">Keyboard for Ipad</h3>
          <p>type it out. take it with you</p>
        </div>
      </div>
      <h1 className="p-5 mt-5">Significant others.</h1>
      <div className="row p-5">
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
                  <h5>iPad and iPhone</h5>
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Answer calls or messages from iPad is perfect for taking the
                  content you capture on iPhone and bringing it to life on an
                  immersive canvas. You can shoot videos and photos on your
                  iPhone and use the large display of your iPad to edit, add
                  animations and more. You can also pick up wherever you left
                  off with Handoff.
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
                  <h5>iPad and Mac</h5>
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  iPad and Mac are designed to work together to form the
                  ultimate creative setup. Sketch on your iPad and have it
                  appear instantly on your Mac with Sidecar. Then use your iPad
                  for drawing or editing with Apple Pencil or as a second
                  display. Extend your workflow to new places, and when you
                  return to your desk, Universal Control allows you to use one
                  mouse or trackpad seamlessly across both devices.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col col-lg-6 col-md-6 col-12">
          <img
            alt=""
            src="https://www.apple.com/assets-www/en_IN/ipad/image_accordion/xlarge/ipad_mac_b66f69e30.jpg"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
}

export default IPadPage;
