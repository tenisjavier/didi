import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import "bootstrap/dist/js/bootstrap.min.js";

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid bg-dark">
        <a class="navbar-brand" href="#">
          <StaticImage
            src="../assets/images/didi-logo.png"
            alt="didi logo"
            width="100"
          />
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
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link" to="/cl">
                Chile
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/cr">
                CostaRica
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
