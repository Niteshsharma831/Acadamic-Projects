import React from "react";
import "../index.css";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-black text-light fixed-top py-2">
      <div className="container-fluid">
        <Link className="navbar-brand text-light ms-4" to="HomePage">
          <img
            src="https://img.icons8.com/m_rounded/512/FFFFFF/mac-os.png"
            alt="logo"
            width="30"
            height="30"
          />
        </Link>

        <button
          className="navbar-toggler border-0 text-white me-4"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav mx-auto">
            <li className="nav-item mx-2">
              <Link className="nav-link active text-light" to="HomePage">
                Home
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link text-light" to="store">
                Store
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link text-light" to="#">
                Mac
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link text-light" to="#">
                iPad
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link text-light" to="#">
                iPhone
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link text-light" to="#">
                Watch
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link text-light" to="#">
                AirPods
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link text-light" to="#">
                TV & Home
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link text-light" to="#">
                Entertainment
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link text-light" to="#">
                Accessories
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link text-light" to="HomePage">
                Apple Profile
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item me-4">
              <Link className="nav-link text-light" to="#">
                <i className="fas fa-search"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
