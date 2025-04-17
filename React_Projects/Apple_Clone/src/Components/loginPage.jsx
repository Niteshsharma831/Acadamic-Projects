import React from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    if (form.checkValidity()) {
      // Show alert or log for confirmation
      console.log("Form submitted successfully!");
      // Navigate to homepage
      navigate("/HomePage");
    } else {
      // Let browser show validation messages
      form.reportValidity();
    }
  };

  return (
    <div
      className="container-fluid d-flex align-items-center vh-100"
      style={{ backgroundColor: "#121212" }}
    >
      <div className="row w-100">
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
            alt="Apple Logo"
            width="200"
          />
        </div>

        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div
            className="card shadow-lg border-0 rounded p-4"
            style={{ width: "350px" }}
          >
            <div className="card-header text-center bg-white border-0">
              <h5>Login</h5>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
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
                  <button type="submit" className="btn btn-dark w-100">
                    Login
                  </button>
                </div>
              </form>
              <div className="text-center mt-3">
                <p className="text-white">
                  New User?{" "}
                  <a href="/newuser" className="text-info text-decoration-none">
                    Sign up here
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
