// src/pages/ProfilePage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import appLogo from "../assets/Awesome.jpg";

export default function ProfilePage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "johndoe",
    fullName: "John Doe",
    password: "password123",
    address: "123 Main St, City, Country",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    // TODO: POST formData to API
    console.log("Saved:", formData);
  };

  const handleChangePassword = () => navigate("/change-password");
  const handleLogout = () => navigate("/login");

  return (
    <div className="container my-5">
      <div className="card shadow-lg rounded">
        <div className="card-header bg-light d-flex justify-content-between align-items-center">
          <h3 className="mb-0">Profile</h3>
          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
        </div>
        <div className="card-body">
          <div className="text-center mb-4">
            <img
              src={appLogo}
              alt="Profile"
              className="rounded-circle"
              style={{ width: "120px", height: "120px", objectFit: "cover" }}
            />
          </div>

          <form onSubmit={handleSave}>
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Username</label>
                <input
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="username"
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="***********"
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Full Name</label>
                <input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="User Full Name"
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Address</label>
                <input
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Full Address"
                  required
                />
              </div>
            </div>

            <div className="d-flex justify-content-center gap-3 mt-4">
              <button type="submit" className="btn btn-dark px-4">
                Save Changes
              </button>
              <button
                type="button"
                className="btn btn-dark px-4"
                onClick={handleChangePassword}
              >
                Change Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
