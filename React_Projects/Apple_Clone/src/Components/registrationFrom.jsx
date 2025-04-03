import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    dateOfBirth: "",
    picture: "",
    address: "",
  });

  const [imagePreview, setImagePreview] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Show image preview if picture URL is updated
    if (name === "picture") {
      setImagePreview(value);
    }
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrorMessage(""); // Reset previous error message

    // Validate Password Confirmation
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/user/create",
        formData
      );

      if (response.status === 201) {
        alert("Registration Successful!");

        // Reset form after success
        setFormData({
          firstName: "",
          middleName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
          gender: "",
          dateOfBirth: "",
          picture: "",
          address: "",
        });

        setImagePreview("");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMessage(
          "This email is already registered. Please use a different email."
        );
      } else {
        console.error("Error submitting form:", error);
        setErrorMessage("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="container-fluid d-flex align-items-center justify-content-center vh-100 bg-dark">
      <div className="row w-100">
        <div className="col-md-4 d-flex justify-content-center align-items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
            alt="Logo"
            width="150"
          />
        </div>

        <div className="col-md-8 d-flex justify-content-center align-items-center">
          <div className="card p-4 w-100" style={{ maxWidth: "600px" }}>
            <h5 className="text-center mb-3">Register Now</h5>

            {errorMessage && (
              <div className="alert alert-danger text-center">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-4 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                    required
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Middle Name"
                    name="middleName"
                    value={formData.middleName}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                    required
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    required
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm Password"
                    required
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="mb-3">
                <select
                  className="form-control"
                  required
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="mb-3">
                <input
                  type="date"
                  className="form-control"
                  required
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Profile Picture URL"
                  name="picture"
                  value={formData.picture}
                  onChange={handleChange}
                />
                {imagePreview && (
                  <div className="mt-2 text-center">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      style={{ maxWidth: "100px", borderRadius: "5px" }}
                    />
                  </div>
                )}
              </div>

              <div className="mb-3">
                <textarea
                  className="form-control"
                  placeholder="Address"
                  rows="2"
                  required
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Register Now
              </button>

              <div className="text-center mt-3">
                <a href="/login" className="text-decoration-none">
                  Already have an account? Login here
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
