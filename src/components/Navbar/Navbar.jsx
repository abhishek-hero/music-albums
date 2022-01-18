import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export const Navbar = ({ pagination }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link to="/" style={{ textDecoration: "none" }}>
            <p className="navbar-brand" style={{ fontFamily: "cursive" }}>
              <span
                style={{
                  fontWeight: "bolder",
                  fontFamily: "cursive",
                  color: "orange",
                }}
              >
                X
              </span>
              Music
            </p>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to="/" style={{ textDecoration: "none" }}>
                <p className="nav-link active" aria-current="page">
                  Home
                </p>
              </Link>
              <Link to="/artist" style={{ textDecoration: "none" }}>
                <p className="nav-link active" aria-current="page">
                  Artist
                </p>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
