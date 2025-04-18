import React from "react";
import { Link } from "react-router-dom";

function AdminLoginForm() {
  return (
    <div
      className="container-fluid d-flex align-items-center vh-100"
      style={{ backgroundColor: "#121212" }}
    >
      <div className="row w-100">
        {/* Left Side - Logo */}
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
            alt="Apple Logo"
            width="200"
          />
        </div>

        {/* Right Side - Form */}
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div
            className="card shadow-lg border-0 rounded p-4"
            style={{ width: "350px" }}
          >
            <div className="card-header text-center bg-white border-0">
              <h5>Admin Login</h5>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label className="form-label">Username or Email</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter username or email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    required
                  />
                </div>
                <div className="text-center">
                  <Link to="/adminDashboard">
                    <button type="submit" className="btn btn-dark w-100">
                      Login
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLoginForm;
