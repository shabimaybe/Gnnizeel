import React from "react";
import "./Header.css";
import admin from "./admin.svg"
import g from './Vector.svg'
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg " style={{ backgroundColor: "#2ED3C5" }}>
        <div className="container-fluid">

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-3">
              <li className="nav-item ">
                <a className="nav-link" href="#" style={{ color: "white" }}>
                Deals
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ color: "white" }}>
                  Last Mins Booking
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ color: "white" }}>
                  Reviews
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ color: "white" }}>
                  Contact
                </a>
              </li>
            </ul>
            <div className="header" style={{ backgroundColor: "#2ED3C5" }}>
              <div className="center-content">
                <img src={g} alt="Icon" />
                <h5>Ginzzel</h5 >
              </div>
            </div>

            <div className="circle-div">
              <div className="circle-content">
                <img src={admin} alt="admin" />

              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
