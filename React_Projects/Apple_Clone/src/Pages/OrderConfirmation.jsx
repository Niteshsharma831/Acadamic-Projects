// src/pages/OrderConfirmation.js
import React from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Import useNavigate
import { FaCheckCircle } from "react-icons/fa"; // Ensure correct import for the check circle icon

function OrderConfirmation() {
  const { state } = useLocation();
  const { product, customerName, shippingAddress, paymentMethod } = state || {};
  const navigate = useNavigate(); // Initialize the navigate function

  if (!product) {
    return (
      <div className="text-center mt-5 text-danger">
        No order data available. Please go back and try again.
      </div>
    );
  }

  const handleReturnToHome = () => {
    navigate("/HomePage"); // Navigate to the home page
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-5 text-primary fw-bold">
        Order Confirmation
      </h2>
      <div className="card shadow-lg p-4 rounded bg-light">
        <div className="row">
          {/* Confirmation Tick Icon */}
          <div className="col-12 text-center mb-4">
            <FaCheckCircle size={80} color="green" className="mb-3" />
            <h4 className="text-success fw-bold">Order Placed Successfully!</h4>
          </div>

          {/* Product Image */}
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <img
              src={product.imageUrl || "https://via.placeholder.com/300"}
              alt={product.name}
              className="img-fluid rounded"
              style={{ maxHeight: "300px", objectFit: "cover" }}
            />
          </div>

          {/* Order Details */}
          <div className="col-md-6">
            <h3 className="fw-bold mb-3">{product.name}</h3>
            <p className="text-muted mb-2">{product.description}</p>
            <h4 className="text-success fw-bold mb-4">${product.price}</h4>

            <h5 className="fw-semibold">Customer Details</h5>
            <p>
              <strong>Name:</strong> {customerName}
            </p>
            <p>
              <strong>Shipping Address:</strong> {shippingAddress}
            </p>
            <p>
              <strong>Payment Method:</strong>{" "}
              {paymentMethod === "cod"
                ? "Cash on Delivery"
                : "Credit/Debit Card"}
            </p>

            <div className="mt-4">
              <h5 className="fw-semibold">Order Summary</h5>
              <p>Product: {product.name}</p>
              <p>Price: ${product.price}</p>

              <button
                className="btn btn-primary w-100 py-2 mt-3"
                onClick={handleReturnToHome} // On button click, return to the home page
              >
                Return to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderConfirmation;
