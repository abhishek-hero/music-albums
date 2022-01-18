import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export const Navbar = ({ pagination }) => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <Link to="/" style={{ textDecoration: "none" }}>
            <a class="navbar-brand" href="#">
              Musica
            </a>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link to="/" style={{ textDecoration: "none" }}>
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </Link>
              <Link to="/artist" style={{ textDecoration: "none" }}>
                <a class="nav-link active" aria-current="page" href="#">
                  Artist
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
