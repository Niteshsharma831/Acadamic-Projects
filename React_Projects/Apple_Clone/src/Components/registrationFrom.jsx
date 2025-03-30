import React from "react";

function RegistrationForm() {
  return (
    <div className="container-fluid d-flex align-items-center justify-content-center vh-100 bg-dark">
      <div className="row w-100 justify-content-center">
        {/* Left Side - Logo */}
        <div className="col-md-4 d-flex justify-content-center align-items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
            alt="Apple Logo"
            width="200"
          />
        </div>

        {/* Right Side - Form */}
        <div className="col-md-8 d-flex justify-content-center align-items-center">
          <div
            className="card shadow-lg border-0 rounded p-4"
            style={{
              maxWidth: "700px",
              width: "100%",
              height: "80vh",
              overflowY: "auto",
            }}
          >
            <div className="card-header text-center bg-white border-0">
              <h5>Register Now</h5>
            </div>
            <div className="card-body">
              <form>
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <label className="form-label">First Name</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter first name"
                      required
                      name="firstName"
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label">Middle Name</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter middle name"
                      name="middleName"
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label">Last Name</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter last name"
                      required
                      name="lastName"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Username or Email</label>
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Enter username or email"
                    required
                    name="email"
                  />
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      placeholder="Enter password"
                      required
                      name="password"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Confirm Password</label>
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      placeholder="Confirm password"
                      required
                      name="confirmPassword"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Gender</label>
                    <select
                      className="form-control form-control-lg"
                      required
                      name="gender"
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Date of Birth</label>
                    <input
                      type="date"
                      className="form-control form-control-lg"
                      required
                      name="dateOfBirth"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Profile Picture</label>
                  <input
                    type="file"
                    className="form-control form-control-lg"
                    name="picture"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Address</label>
                  <textarea
                    className="form-control form-control-lg"
                    rows="3"
                    placeholder="Enter your address"
                    required
                    name="address"
                  ></textarea>
                </div>

                <div className="text-center">
                  <button type="submit" className="btn btn-dark w-100 btn-lg">
                    Register Now
                  </button>
                </div>

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
    </div>
  );
}

export default RegistrationForm;
