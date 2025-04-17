// src/pages/BuyProduct.js
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function BuyProduct() {
  const { state } = useLocation();
  const { product } = state || {};
  const navigate = useNavigate();
  const [customerName, setCustomerName] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  if (!product) {
    return (
      <div className="text-center mt-5 text-danger">
        No product data available.
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Navigate to the confirmation page with the product and customer details
    navigate("/order-confirmation", {
      state: {
        product,
        customerName,
        shippingAddress,
        paymentMethod,
      },
    });
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-5 text-primary fw-bold">Buy Product</h2>
      <div className="row shadow-lg p-4 rounded bg-white">
        {/* Product Image */}
        <div className="col-md-6 mb-4 mb-md-0 d-flex align-items-center justify-content-center">
          <img
            src={product.imageUrl || "https://via.placeholder.com/300"}
            alt={product.name}
            className="img-fluid rounded"
            style={{ maxHeight: "350px", objectFit: "cover" }}
          />
        </div>

        {/* Product Details & Order Form */}
        <div className="col-md-6">
          <h3 className="fw-bold mb-2">{product.name}</h3>
          <p className="text-muted mb-2">{product.description}</p>
          <h4 className="text-success fw-bold mb-4">${product.price}</h4>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fw-semibold">Full Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your full name"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Shipping Address</label>
              <textarea
                className="form-control"
                rows="3"
                placeholder="Enter your address"
                value={shippingAddress}
                onChange={(e) => setShippingAddress(e.target.value)}
                required
              ></textarea>
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Payment Method</label>
              <select
                className="form-select"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                required
              >
                <option value="">Select payment method</option>
                <option value="cod">Cash on Delivery</option>
                <option value="card">Credit/Debit Card</option>
              </select>
            </div>

            <button type="submit" className="btn btn-success w-100 mt-3 py-2">
              Confirm Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BuyProduct;
