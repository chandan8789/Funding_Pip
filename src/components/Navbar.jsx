import React from "react";
import logo from "../images/fundinglogo.png";
import Home from "./Home";
import "../StyleSheet/Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
        <div class="container-fluid p-2 mx-2">
          <a class="navbar-brand" href="#">
            <img style={{ height: "40px" }} src={logo} alt="" srcset="" />
            <span className="mx-2">FUNDING PIPS</span>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item active">
                <a
                  class="nav-link"
                  aria-current="page"
                  href="#"
                  style={{color: "#2e3bef"}}
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Trading Rules
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">
                  FAQ
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact Us
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link buyChallenge" href="#">
                  <i class="bi bi-arrow-up-right"></i> Buy Challenge
                </a>
              </li>

              <li class="nav-item">
                <a style={{ color: "#2e3bef" }} class="nav-link" href="#">
                  Dashboard
                  <i class="bi bi-box-arrow-in-up-right"></i>
                </a>
              </li>
            </ul>

            <button className="p-2 rounded border">
              <i class="bi bi-moon-fill"></i>
            </button>
          </div>
        </div>
      </nav>

      <Home />
    </>
  );
};

export default Navbar;
