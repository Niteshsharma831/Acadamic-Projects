import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const products = [
  {
    name: "Mac",
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-mac-nav-202410?wid=400&hei=260&fmt=png-alpha&.v=1728342368663",
    link: "https://www.apple.com/in/mac/",
  },
  {
    name: "iPhone",
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-iphone-nav-202409_GEO_EMEA?wid=400&hei=260&fmt=png-alpha&.v=1723857138464",
    link: "https://www.apple.com/in/iphone/",
  },
  {
    name: "iPad",
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-ipad-nav-202405?wid=400&hei=260&fmt=png-alpha&.v=1714168620875",
    link: "https://www.apple.com/in/ipad/",
  },
  {
    name: "Apple Watch",
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-watch-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=1724165625838",
    link: "https://www.apple.com/in/watch/",
  },
  {
    name: "AirPods",
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-airpods-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=1722974349822",
    link: "https://www.apple.com/in/airpods/",
  },
  {
    name: "AirTag",
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=400&hei=260&fmt=png-alpha&.v=1625783380000",
    link: "https://www.apple.com/in/airtag/",
  },
  {
    name: "Apple TV 4K",
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-appletv-nav-202210?wid=400&hei=260&fmt=png-alpha&.v=1664628458484",
    link: "https://www.apple.com/in/apple-tv-4k/",
  },
  {
    name: "Accessories",
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-homepod-nav-202301?wid=400&hei=260&fmt=png-alpha&.v=1670389216654",
    link: "https://www.apple.com/in/shop/accessories/all",
  },
  {
    name: "Gift Cards",
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-accessories-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=1723738892174",
    link: "https://www.apple.com/in/shop/gift-cards",
  },
];

const latestAccessories = [
  {
    name: "AirPods Pro",
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-iphone-16-pro-202409?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1726165763242",
    price: "From ₹119900.00",
    text: "iPhone 16 Pro Built for Apple Intelligence. Footnote",
  },
  {
    name: "AirPods Pro",
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-watch-s10-202409?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1724095131742",
    price: "From ₹119900.00",
    text: "iPhone 16 Pro Built for Apple Intelligence. Footnote",
    style: { color: "black" },
  },
  {
    name: "AirPods Pro",
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-bhm-202501?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1736792017949",
    price: "From ₹119900.00",
    text: "iPhone 16 Pro Built for Apple Intelligence. Footnote",
  },
  {
    name: "AirPods Pro",
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-ipad-mini-202410_GEO_IN?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1728400506777",
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
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-iphone-16-202409_GEO_IN?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1725661572544",
    price: "From ₹119900.00",
    text: "iPhone 16 Pro Built for Apple Intelligence. Footnote",
  },
  {
    name: "AirPods Pro",
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-waystobuy-202409?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1724945767823",
    price: "From ₹119900.00",
    text: "iPhone 16 Pro Built for Apple Intelligence. Footnote",
  },
  {
    name: "AirPods Pro",
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-watch-ultra-202409_GEO_IN?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1725655434777",
    price: "From ₹119900.00",
    text: "iPhone 16 Pro Built for Apple Intelligence. Footnote",
  },
];

const appleStore = [
  {
    name: "APPLE STORE APP",
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-india-asa-launch-202501?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1736763680757",
    text: "Discover a new way to shop..",
    title: "APPLE STORE APP",
  },
  {
    name: "Explore recommendations customised for you.",
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-india-asa-personalisation-202501?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1736763681484",
    title: "PERSONALISATION",
  },
  {
    name: "Browse. Save. Pick up where you left off.",
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-india-asa-for-you-202501?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1736763680936",
    title: "SEAMLESS SHOPING",
  },
  {
    name: "Learn how to get more from your devices.",
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-india-asa-go-further-202501?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1737095125109",
    title: "GO FURTHER",
  },
];
const accessories = [
  {
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-valentines-accessories-202501?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1734624551518",
  },
  {
    name: "Apple Store",
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MA7E4?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1723930332796",
    text: "iPhone 16 Pro Clear Case with MagSafe",
    Prise: "MRP ₹4900.00 (Incl. of all taxes)",
  },
  {
    name: "Apple Store",
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MDF54?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1734628448223",
    text: "46mm Black Unity Sport Loop – Unity Rhythm",
    Prise: "MRP ₹4500.00 (Incl. of all taxes)",
  },
  {
    name: "Apple Store",
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-202409-purple?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1724927451266",
    text: "AirPods Max - Purple",
    Prise: "MRP ₹59900.00 (Incl. of all taxes)",
  },
  {
    name: "Apple Store",
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MYYM3?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1723593625848",
    text: "iPhone 16 Pro Silicone Case with MagSafe – Plum",
    Prise: "MRP ₹4900.00 (Incl. of all taxes)",
  },
  {
    name: "Apple Store",
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MWQW3?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1716251412396",
    text: "Beats Pill — Wireless Bluetooth® Speaker — Statement Red",
    Prise: "MRP ₹16900.00 (Incl. of all taxes)",
  },
  {
    name: "Apple Store",
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MXW33ref?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1724186583979",
    text: "42mm Dark Taupe Modern Buckle - Medium",
    Prise: "MRP ₹14500.00 (Incl. of all taxes)",
  },
  {
    name: "Apple Store",
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MUW33?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1712255584823",
    text: "Beats Solo 4 — On-Ear Wireless Headphones – Cloud Pink",
    Prise: "MRP ₹22900.00 (Incl. of all taxes)",
  },
  {
    name: "Apple Store",
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MA7A4?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1723573541772",
    text: "iPhone FineWoven Wallet with MagSafe – Blackberry",
    Prise: "MRP ₹5900.00 (Incl. of all taxes)",
  },
  {
    name: "Apple Store",
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MC2T4?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1727989774498",
    text: "iPhone FineWoven Wallet with MagSafe – Blackberry",
    Prise: "MRP ₹5900.00 (Incl. of all taxes)",
  },
  {
    name: "Apple Store",
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MX6X3?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1724257154789",
    text: "42mm Dark Taupe Modern Buckle - Medium",
    Prise: "MRP ₹14500.00 (Incl. of all taxes)",
  },
];
const personalisation = [
  {
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-valentines-engraving-202501?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1734624551582",
  },
  {
    name: "Apple Store",
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-4-anc-select-202409?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1725502639798",
    text: "AirPods 4 with Active Noise Cancellation",
    Prise: "MRP ₹17900.00 (Incl. of all taxes)",
  },
  {
    name: "Apple Store",
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-pro-2-hero-select-202409?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1724041669458",
    text: "AirPods Pro 2",
    Prise: "MRP ₹24900.00 (Incl. of all taxes)",
  },
  {
    name: "Apple Store",
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airtag-single-select-202104?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1617761671000",
    text: "AirTag)",
    Prise: "MRP ₹3490.00 (Incl. of all taxes",
  },
  {
    name: "Apple Store",
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MX2D3?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1713841707336",
    text: "Apple Pencil Pro",
    Prise: "MRP ₹11900.00 (Incl. of all taxes)",
  },
  {
    name: "Apple Store",
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airtag-4pack-select-202104?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1617761669000",
    text: "AirTag 4 pack",
    Prise: "MRP ₹11900.00 (Incl. of all taxes)",
  },
  {
    name: "Apple Store",
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MU8F2?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1540596407165",
    text: "Apple Pencil (2nd Generation)",
    Prise: "MRP ₹11900.00 (Incl. of all taxes)",
  },
];
const difference = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-credit-card-fill"
        viewBox="0 0 16 16"
        color="black"
      >
        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1H0zm0 3v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7zm3 2h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1" />
      </svg>
    ),
    text: "Free Shipping",
  },
];
const help = [
  {
    name: "APPLE STORE APP",
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-50-specialist-help-202309?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1701194078821",
    text: "Discover a new way to shop..",
    title: "APPLE STORE APP",
  },
  {
    name: "Explore recommendations customised for you.",
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-business-202409_GEO_IN?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1724793636957",
    title: "PERSONALISATION",
  },
  {
    name: "Browse. Save. Pick up where you left off.",
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-50-TAA-202310?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1697149577145",
    title: "SEAMLESS SHOPING",
  },
  {
    name: "Learn how to get more from your devices.",
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-50-personal-setup-202408?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1727714996748",
    title: "GO FURTHER",
  },
];

const AppleStore = () => {
  return (
    <div className="container mt-5">
      <p className="text-center mt-5 pt-5">
        Get up to ₹10000.00 instant cashback with eligible cards.§§ Plus up to
        12 months of No Cost EMI.§{" "}
        <span className="text-primary">See offers</span>
      </p>
      <img
        src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/vday-store-seasonalbanner-202501?wid=3840&hei=400&fmt=png-alpha&.v=1737999438042"
        alt=""
        style={{ width: "100%" }}
      />
      <div className="row">
        <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
          <h1>
            Store.{" "}
            <span
              className="text-secondary"
              style={{ color: "#6c757d !important" }}
            >
              The best way to buy the product you love
            </span>
          </h1>
        </div>
      </div>
      <div className="scrollable-container d-flex justify-content-between gap-3 mt-5">
        {products.map((product, index) => (
          <div className="card text-center border-0" key={index}>
            <a href={product.link} target="_blank" rel="noopener noreferrer">
              <img
                src={product.img}
                className="card-img-top"
                alt={product.name}
              />
            </a>
            <div className="card-body">
              <p className="card-title fw-bold">{product.name}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="col col-lg-6 col-md-6 col-sm-12 col-12 mt-3">
        <h1>
          <span className="text-danger">The latest.</span>{" "}
          <span
            className="text-secondary"
            style={{ color: "#6c757d !important" }}
          >
            All-new, and heartfelt.
          </span>
        </h1>
      </div>

      <div className="latestAccesseries d-flex justify-content-between gap-3 mt-5">
        {latestAccessories.map((latestAccesseries, index) => (
          <div className="card text-center border-0" key={index}>
            <img
              src={latestAccesseries.img}
              className="card-img-top mb-5"
              alt={latestAccesseries.name}
            />

            <div className="position-absolute top-0 text-light">
              <p
                className=""
                style={{
                  color:
                    index === 1 || index === 3 || index === 6
                      ? "black"
                      : "white",
                }}
              >
                <h1 className="p-2">{latestAccesseries.name}</h1>
                <span className="p-2">{latestAccesseries.text}</span>
                <span>{latestAccesseries.price}</span>
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
      <div className="col col-lg-6 col-md-6 col-sm-12 col-12 mt-3">
        <h1>
          <span className="text-danger">Apple Store App.</span>{" "}
          <span
            className="text-secondary"
            style={{ color: "#6c757d !important" }}
          >
            Your own personal store.
          </span>
        </h1>
      </div>

      <div className="appleStore d-flex justify-content-between mt-5 gap-5">
        {appleStore.map((appleStore, index) => (
          <div className="card mb-5 border-0 shadow-lg" key={index}>
            <img
              src={appleStore.img}
              className="card-img"
              alt={appleStore.name}
            />
            <div className="position-absolute top-0 p-3">
              <p>
                <span className="text-primary">{appleStore.title}</span>
                <h4>{appleStore.name}</h4>
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
      <div className="col col-lg-6 col-md-6 col-sm-12 col-12 mt-3">
        <h1>
          <span className="text-danger">Accessories.</span>{" "}
          <span
            className="text-secondary"
            style={{ color: "#6c757d !important" }}
          >
            Find the perfect match.
          </span>
        </h1>
      </div>

      <div className="appleStore d-flex justify-content-between mt-5 gap-5">
        {accessories.map((accessories, index) => (
          <div
            className="card mb-5 position-relative shadow-lg border-0"
            key={index}
          >
            <img
              src={accessories.img}
              className="card-img"
              alt={accessories.name}
            />
            <div className="position-absolute bottom-0 p-3">
              <p>
                <h5 className="">{accessories.text}</h5>
                <p>{accessories.Prise}</p>
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
      <div className="col col-lg-6 col-md-6 col-sm-12 col-12 mt-3">
        <h1>
          <span className="text-danger">Personalisation.</span>{" "}
          <span
            className="text-secondary"
            style={{ color: "#6c757d !important" }}
          >
            A Valentine’s gift just for them.
          </span>
        </h1>
      </div>

      <div className="appleStore d-flex justify-content-between mt-5 gap-5">
        {personalisation.map((personalisation, index) => (
          <div
            className="card mb-5 position-relative shadow-lg border-0"
            key={index}
          >
            <img
              src={personalisation.img}
              className="card-img"
              alt={personalisation.name}
            />
            <div className="position-absolute bottom-0 p-3">
              <p>
                <h5 className="">{personalisation.text}</h5>
                <p>{personalisation.Prise}</p>
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
      <div className="col col-lg-6 col-md-6 col-sm-12 col-12 mt-3">
        <h1>
          <span className="text-danger"> The Apple Store difference.</span>{" "}
          <span
            className="text-secondary"
            style={{ color: "#6c757d !important" }}
          >
            So many reasons to love.
          </span>
        </h1>
      </div>
      <div className="appleStore d-flex justify-content-between mt-5 gap-5 mb-5">
        {difference.map((difference, index) => (
          <div
            className="card mb-5 position-relative shadow-lg border-0"
            key={index}
          >
            <i class="bi bi-credit-card-fill"></i>
            <div className="card position-absolute top-0 text-light">
              <p className="text-dark p-3">
                <h5>{difference.text}</h5>
              </p>
            </div>
            <div className="position-absolute bottom-0 p-3"></div>
          </div>
        ))}
      </div>

      <div className="col col-lg-6 col-md-6 col-sm-12 col-12 mt-3">
        <h1>
          <span className="text-danger">Help is here.</span>{" "}
          <span
            className="text-secondary"
            style={{ color: "#6c757d !important" }}
          >
            Whenever and however you need it.
          </span>
        </h1>
      </div>

      <div className="appleStore d-flex justify-content-between mt-5 gap-5">
        {help.map((help, index) => (
          <div className="card mb-5 border-0 shadow-lg" key={index}>
            <img src={help.img} className="card-img" alt={help.name} />
            <div className="position-absolute top-0 p-3">
              <p>
                <span className="text-primary">{help.title}</span>
                <h4>{help.name}</h4>
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
    </div>
  );
};

export default AppleStore;
