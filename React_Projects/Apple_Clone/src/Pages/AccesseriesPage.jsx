import React from "react";

function AccesseriesPage() {
  return (
    <div className="mt-5">
      <div className="container">
        <div className="row">
          <div className="col col-lg-6 col-md-6 col-12">
            <h1
              className="mt-5 mx-5 text-center"
              style={{ marginLeft: "20px" }}
            >
              Mix. Match. <br /> MagSafe.
            </h1>
            <p className="text-center">
              Find the right accessories to <br /> match your products.
            </p>
            <button
              className="btn text-center text-primary"
              style={{ marginLeft: "35px" }}
            >
              <strong>Shop MagSafe </strong>
            </button>
          </div>
          <div className="col col-lg-6 col-md-6 col-12">
            <img
              alt=""
              width="100%"
              src="https://www.harveynorman.co.uk/cdn/shop/files/iPhone_16_image_10_m3jo-x6.jpg?v=1727097798&width=4000"
            />
          </div>
        </div>
        <div className="text-center">
          <h3>Find the accessories you’re looking for.</h3>
          <div className="d-flex justify-content-center">
            <div className="input-group w-50">
              <span className="input-group-text">
                {" "}
                <i className="fas fa-search"></i>
              </span>{" "}
              <input
                type="text"
                className="form-control"
                placeholder="Search accessories"
              />
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="text-center">
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Browse by Product
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-muted" href="#">
                  Browse by Category
                </a>
              </li>
            </ul>
          </div>

          <hr />

          <div className="row text-center justify-content-center">
            <div className="col-md-2 col-6 mb-3">
              <a href="#" className="d-block text-decoration-none">
                <div
                  className="border border-dark rounded-circle d-flex align-items-center justify-content-center overflow-hidden"
                  style={{ width: "100px", height: "100px" }}
                >
                  <img
                    src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/icon-product-mac?wid=225&hei=225&fmt=png-alpha&.v=1700067558508"
                    alt="Mac"
                    className="w-75 h-75"
                  />
                </div>
                <p className="mt-2 text-dark mx-3">Mac</p>
              </a>
            </div>

            <div className="col-md-2 col-6 mb-3">
              <a href="#" className="d-block text-decoration-none">
                <div
                  className="border border-dark rounded-circle d-flex align-items-center justify-content-center overflow-hidden"
                  style={{ width: "100px", height: "100px" }}
                >
                  <img
                    src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/icon-product-ipad?wid=225&hei=225&fmt=png-alpha&.v=1699474605227"
                    alt="iPad"
                    className="w-75 h-75"
                  />
                </div>
                <p className="mt-2 text-dark">iPad</p>
              </a>
            </div>

            <div className="col-md-2 col-6 mb-3">
              <a href="#" className="d-block text-decoration-none">
                <div
                  className="border border-dark rounded-circle d-flex align-items-center justify-content-center overflow-hidden"
                  style={{ width: "100px", height: "100px" }}
                >
                  <img
                    src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/icon-product-iphone?wid=225&hei=225&fmt=png-alpha&.v=1699474605231"
                    alt="iPhone"
                    className="w-75 h-75"
                  />
                </div>
                <p className="mt-2 text-dark">iPhone</p>
              </a>
            </div>

            <div className="col-md-2 col-6 mb-3">
              <a href="#" className="d-block text-decoration-none">
                <div
                  className="border border-dark rounded-circle d-flex align-items-center justify-content-center overflow-hidden"
                  style={{ width: "100px", height: "100px" }}
                >
                  <img
                    src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/icon-product-watch?wid=225&hei=225&fmt=png-alpha&.v=1699474605232"
                    alt="Watch"
                    className="w-75 h-75"
                  />
                </div>
                <p className="mt-2 text-dark">Watch</p>
              </a>
            </div>

            <div className="col-md-2 col-6 mb-3">
              <a href="#" className="d-block text-decoration-none">
                <div
                  className="border border-dark rounded-circle d-flex align-items-center justify-content-center overflow-hidden"
                  style={{ width: "100px", height: "100px" }}
                >
                  <img
                    src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/icon-product-tv?wid=225&hei=225&fmt=png-alpha&.v=1699474605227"
                    alt="TV & Home"
                    className="w-75 h-75"
                  />
                </div>
                <p className="mt-2 text-dark">TV & Home</p>
              </a>
            </div>
          </div>
          <hr />
        </div>
      </div>
      <div classNameName="product-details p-5">
        <h2 className="text-center mt-5">Valentine’s Day Picks</h2>
        <div className="row p-5">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card">
              <img
                className="card-img-top img-fluid mx-auto mt-3"
                alt="Laptop Image"
                style={{ width: "100px", height: "100px" }}
                src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MYY53?wid=532&hei=582&fmt=png-alpha&.v=1723236737854"
              />
              <div className="card-body">
                <h5 className="card-title text-center mt-3">
                  iPhone 16 Silicone Case with <br /> MagSafe – Fuchsia
                </h5>
                <p className="card-text text-center">
                  <strong>From ₹4900.00*</strong>
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
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card">
              <img
                className="card-img-top img-fluid mx-auto mt-3"
                alt="Laptop Image"
                style={{ width: "100px", height: "100px" }}
                src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MC2T4?wid=532&hei=582&fmt=png-alpha&.v=1727989774498"
              />
              <div className="card-body">
                <h5 className="card-title text-center mt-3">
                  Smart Folio for iPad mini <br /> (A17 Pro) - Light Violet
                </h5>
                <p className="card-text text-center">
                  <strong>From ₹6500.00*</strong>
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
                style={{ width: "100px", height: "100px" }}
                src="https://www.apple.com/in/watch/images/overview/select/product_u2__ebztafh9rvau_xlarge.png"
              />
              <div className="card-body">
                <h5 className="card-title text-center mt-3">
                  Apple Watch ultra 2
                </h5>
                <p className="card-text text-center">The ultimate sports</p>
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
        <h2 className="text-center mt-5">Featured iPhone Accessories</h2>
        <div className="row p-5">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card">
              <img
                className="card-img-top img-fluid mx-auto mt-3"
                alt="Laptop Image"
                style={{ width: "100px", height: "100px" }}
                src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MA7E4?wid=532&hei=582&fmt=png-alpha&.v=1723930332796"
              />
              <div className="card-body">
                <h5 className="card-title text-center mt-3">
                  iPhone 16 Pro Clear <br /> Case with MagSafe
                </h5>
                <p className="card-text text-center">
                  <strong>From ₹4900.00*</strong>
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
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card">
              <img
                className="card-img-top img-fluid mx-auto mt-3"
                alt="Laptop Image"
                style={{ width: "100px", height: "100px" }}
                src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MYY63?wid=532&hei=582&fmt=png-alpha&.v=1723236736369"
              />
              <div className="card-body">
                <h5 className="card-title text-center mt-3">
                  iPhone 16 Pro Clear <br /> Case with MagSafe
                </h5>
                <p className="card-text text-center">
                  <strong>From ₹4900.00*</strong>
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
                style={{ width: "100px", height: "100px" }}
                src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MU862?wid=532&hei=582&fmt=png-alpha&.v=1591824860000"
              />
              <div className="card-body">
                <h5 className="card-title text-center mt-3">
                  20W USB-C Power Adapter
                </h5>
                <p className="card-text text-center">
                  <strong>From ₹1900.00*</strong>
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
        <h2 className="text-center mt-5">Apple Watch Straps</h2>
        <div className="row p-5">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card">
              <img
                className="card-img-top img-fluid mx-auto mt-3"
                alt="Laptop Image"
                style={{ width: "100px", height: "100px" }}
                src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MDF54?wid=532&hei=582&fmt=png-alpha&.v=1734628448223"
              />
              <div className="card-body">
                <h5 className="card-title text-center mt-3">
                  Black Unity Sport <br /> Loop - Unity Rhythm
                </h5>
                <p className="card-text text-center">
                  <strong>From ₹4900.00*</strong>
                </p>
                <a href="#" className="btn btn-primary mt-3">
                  Learn More
                </a>{" "}
                <a href="#" className="btn btn-primary mt-3">
                  Buy
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card">
              <img
                className="card-img-top img-fluid mx-auto mt-3"
                alt="Laptop Image"
                style={{ width: "100px", height: "100px" }}
                src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MY4E3ref?wid=532&hei=582&fmt=png-alpha&.v=1724186614129"
              />
              <div className="card-body">
                <h5 className="card-title text-center mt-3">
                  46mm Magenta Braided Solo <br /> Loop - Size 6
                </h5>
                <p className="card-text text-center">
                  <strong>From ₹4900.00*</strong>
                </p>
                <a href="#" className="btn btn-primary mt-3">
                  Learn More
                </a>{" "}
                <a href="#" className="btn btn-primary mt-3">
                  Buy
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card">
              <img
                className="card-img-top img-fluid mx-auto mt-3"
                alt="Laptop Image"
                style={{ width: "100px", height: "100px" }}
                src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MXLX3ref?wid=532&hei=582&fmt=png-alpha&.v=1724186562286"
              />
              <div className="card-body">
                <h5 className="card-title text-center mt-3">
                  46mm Stone Grey Sport <br /> Band - M/L
                </h5>
                <p className="card-text text-center">
                  <strong>From ₹1900.00*</strong>
                </p>
                <a href="#" className="btn btn-primary mt-3">
                  Learn More
                </a>{" "}
                <a href="#" className="btn btn-primary mt-3">
                  Buy
                </a>
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-center mt-5">Sound Essentials</h2>
        <div className="row p-5">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card">
              <img
                className="card-img-top img-fluid mx-auto mt-3"
                alt="Laptop Image"
                style={{ width: "100px", height: "100px" }}
                src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-pro-2-hero-select-202409?wid=532&hei=582&fmt=png-alpha&.v=1724041669458"
              />
              <div className="card-body">
                <h5 className="card-title text-center mt-3">AirPods pro 2</h5>
                <p className="card-text text-center">
                  <strong>From ₹24900.00*</strong>
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
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card">
              <img
                className="card-img-top img-fluid mx-auto mt-3"
                alt="Laptop Image"
                style={{ width: "100px", height: "100px" }}
                src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-4-anc-select-202409?wid=532&hei=582&fmt=png-alpha&.v=1725502639798"
              />
              <div className="card-body">
                <h5 className="card-title text-center mt-3">
                  AirPods 4 with Active Noise Cancellation
                </h5>
                <p className="card-text text-center">
                  <strong>From ₹17900.00*</strong>
                </p>
                <a href="#" className="btn btn-primary mt-3">
                  Learn More
                </a>{" "}
                <a href="#" className="btn btn-primary mt-3">
                  But
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card">
              <img
                className="card-img-top img-fluid mx-auto mt-3"
                alt="Laptop Image"
                style={{ width: "100px", height: "100px" }}
                src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-202409-midnight?wid=532&hei=582&fmt=png-alpha&.v=1724927451276"
              />
              <div className="card-body">
                <h5 className="card-title text-center mt-3">
                  AirPods Max - Midnight
                </h5>
                <p className="card-text text-center">
                  <strong>From ₹69900.00*</strong>
                </p>
                <a href="#" className="btn btn-primary mt-3">
                  Learn More
                </a>{" "}
                <a href="#" className="btn btn-primary mt-3">
                  Buy
                </a>
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-center mt-5">Featured iPad Accessories</h2>
        <div className="row p-5">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card">
              <img
                className="card-img-top img-fluid mx-auto mt-3"
                alt="Laptop Image"
                style={{ width: "100px", height: "100px" }}
                src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MC2T4?wid=532&hei=582&fmt=png-alpha&.v=1727989774498"
              />
              <div className="card-body">
                <h5 className="card-title text-center mt-3">
                  Smart Folio for iPad mini <br /> (A17 Pro) - Light Violet
                </h5>
                <p className="card-text text-center">
                  <strong>From ₹6500.00*</strong>
                </p>
                <a href="#" className="btn btn-primary mt-3">
                  Learn More
                </a>{" "}
                <a href="#" className="btn btn-primary mt-3">
                  Buy
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card">
              <img
                className="card-img-top img-fluid mx-auto mt-3"
                alt="Laptop Image"
                style={{ width: "100px", height: "100px" }}
                src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MX2D3?wid=532&hei=582&fmt=png-alpha&.v=1713841707336"
              />
              <div className="card-body">
                <h5 className="card-title text-center mt-3">
                  Apple Pencil Pro
                </h5>
                <p className="card-text text-center">
                  <strong>From ₹11900.00*</strong>
                </p>
                <a href="#" className="btn btn-primary mt-3">
                  Learn More
                </a>{" "}
                <a href="#" className="btn btn-primary mt-3">
                  But
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card">
              <img
                className="card-img-top img-fluid mx-auto mt-3"
                alt="Laptop Image"
                style={{ width: "100px", height: "100px" }}
                src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MWR43?wid=532&hei=582&fmt=png-alpha&.v=1713934214856"
              />
              <div className="card-body">
                <h5 className="card-title text-center mt-3">
                  Magic Keyboard for <br /> iPad Pro 13" (M4) - White
                </h5>
                <p className="card-text text-center">
                  <strong>From ₹33900.00*</strong>
                </p>
                <a href="#" className="btn btn-primary mt-3">
                  Learn More
                </a>{" "}
                <a href="#" className="btn btn-primary mt-3">
                  Buy
                </a>
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-center mt-5">Featured Mac Accessories</h2>
        <div className="row p-5">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card">
              <img
                className="card-img-top img-fluid mx-auto mt-3"
                alt="Laptop Image"
                style={{ width: "100px", height: "100px" }}
                src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MK0U3?wid=532&hei=582&fmt=png-alpha&.v=1646446502337"
              />
              <div className="card-body">
                <h5 className="card-title text-center mt-3">studio Display</h5>
                <p className="card-text text-center">
                  <strong>From ₹15900.00*</strong>
                </p>
                <a href="#" className="btn btn-primary mt-3">
                  Learn More
                </a>{" "}
                <a href="#" className="btn btn-primary mt-3">
                  Buy
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card">
              <img
                className="card-img-top img-fluid mx-auto mt-3"
                alt="Laptop Image"
                style={{ width: "100px", height: "100px" }}
                src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MXK83?wid=532&hei=582&fmt=png-alpha&.v=1737411034588"
              />
              <div className="card-body">
                <h5 className="card-title text-center mt-3">
                  Magic Keyboard with Touch <br /> ID and Numeric Keypad
                </h5>
                <p className="card-text text-center">
                  <strong>From ₹19500.00*</strong>
                </p>
                <a href="#" className="btn btn-primary mt-3">
                  Learn More
                </a>{" "}
                <a href="#" className="btn btn-primary mt-3">
                  But
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card">
              <img
                className="card-img-top img-fluid mx-auto mt-3"
                alt="Laptop Image"
                style={{ width: "100px", height: "100px" }}
                src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MXK63?wid=532&hei=582&fmt=png-alpha&.v=1730508287136"
              />
              <div className="card-body">
                <h5 className="card-title text-center mt-3">magic Mouse</h5>
                <p className="card-text text-center">
                  <strong>From ₹9500*</strong>
                </p>
                <a href="#" className="btn btn-primary mt-3">
                  Learn More
                </a>{" "}
                <a href="#" className="btn btn-primary mt-3">
                  Buy
                </a>
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-center mt-5">AirTag</h2>
        <div className="row p-5">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card">
              <img
                className="card-img-top img-fluid mx-auto mt-3"
                alt="Laptop Image"
                style={{ width: "100px", height: "100px" }}
                src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airtag-single-select-202104?wid=532&hei=582&fmt=png-alpha&.v=1617761671000"
              />
              <div classNameName="card-body">
                <h5 className="card-title text-center mt-3">Air Tags</h5>
                <p className="card-text text-center">
                  <strong>From ₹35900.00*</strong>
                </p>
                <a href="#" className="btn btn-primary mt-3">
                  Learn More
                </a>{" "}
                <a href="#" className="btn btn-primary mt-3">
                  Buy
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card">
              <img
                className="card-img-top img-fluid mx-auto mt-3"
                alt="Laptop Image"
                style={{ width: "100px", height: "100px" }}
                src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airtag-4pack-select-202104?wid=532&hei=582&fmt=png-alpha&.v=1617761669000"
              />
              <div className="card-body">
                <h5 className="card-title text-center mt-3">AirTags 4 packs</h5>
                <p className="card-text text-center">
                  <strong>From ₹11900.00*</strong>
                </p>
                <a href="#" className="btn btn-primary mt-3">
                  Learn More
                </a>{" "}
                <a href="#" className="btn btn-primary mt-3">
                  But
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card">
              <img
                className="card-img-top img-fluid mx-auto mt-3"
                alt="Laptop Image"
                style={{ width: "100px", height: "100px" }}
                src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MA7K4?wid=532&hei=582&fmt=png-alpha&.v=1723856728623"
              />
              <div className="card-body">
                <h5 className="card-title text-center mt-3">
                  AirTag FineWoven Key Ring – Blackberry
                </h5>
                <p className="card-text text-center">
                  <strong>From ₹3900*</strong>
                </p>
                <a href="#" className="btn btn-primary mt-3">
                  Learn More
                </a>{" "}
                <a href="#" className="btn btn-primary mt-3">
                  Buy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccesseriesPage;
