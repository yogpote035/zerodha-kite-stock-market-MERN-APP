import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top border-bottom navbar-white bg-white mb- p-3">
        <div className="container-fluid ">
          <NavLink className="navbar-brand" to="/">
            <img
              src="media_images/logo.svg"
              alt="Logo"
              style={{ marginInlineStart: "52px" }}
              width="20%"
              className="d-inline-block align-text-top"
            />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ outline: "none", boxShadow: "none" }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav ">
              <li className="nav-item mx-3">
                <NavLink className="nav-link" aria-current="page" to="/signup">
                  Signup
                </NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink className="nav-link" to="/about">
                  About{" "}
                </NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink className="nav-link" to="/pricing">
                  Pricing
                </NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink className="nav-link" to="/support">
                  Support
                </NavLink>
              </li>
              <li className="nav-item mx-3">
                <NavLink className="nav-link">
                  <i className="fa-solid fa-bars"></i>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
