// src/pages/ProductApi.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../config/axoisIntence";

function ProductApi() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // ⬅️ Added

  useEffect(() => {
    axios
      .get("http://localhost:3000/product/getAll")
      .then((response) => {
        console.log("API Response:", response.data);
        setItems(response.data.products || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching items:", error);
        setError("Failed to load products. Please try again later.");
        setLoading(false);
      });
  }, []);

  const handleBuyNow = (product) => {
    navigate(`/buy/${product._id}`, { state: { product } });
  };

  return (
    <div className="bg-dark p-5 mt-5 text-white">
      <h1 className="text-white mb-4 text-center">Product API</h1>

      {loading ? (
        <p className="text-center text-light">Loading products...</p>
      ) : error ? (
        <p className="text-center text-danger">{error}</p>
      ) : items.length === 0 ? (
        <p className="text-center text-warning">No products found.</p>
      ) : (
        <div className="row">
          {items.map((product) => (
            <div className="col-6 col-md-4 col-lg-3" key={product._id}>
              <div className="card shadow-lg border-0 rounded-3 overflow-hidden bg-dark text-light mb-4 p-2">
                <img
                  src={product.imageUrl || "https://via.placeholder.com/180"}
                  alt={product.name}
                  className="w-100"
                  style={{
                    height: "180px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
                <div className="card-body bg-dark text-dark">
                  <h5 className="mb-2 text-light">{product.name}</h5>
                  <p className="text-light mb-2">
                    {product.description || "No description available."}
                  </p>
                  <p className="fw-bold text-primary">
                    ${product.price || "N/A"}
                  </p>
                  <div className="d-flex flex-column flex-lg-row gap-2 mt-3">
                    <button
                      className="btn btn-primary px-3 w-100 w-lg-auto"
                      onClick={() => handleBuyNow(product)}
                    >
                      Buy Now
                    </button>
                    <button className="btn btn-success px-3 w-100 w-lg-auto">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default ProductApi;
