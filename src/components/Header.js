import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import "bootstrap/dist/js/bootstrap.min.js";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid bg-dark">
        <Link className="nav-link" to="/cl">
          <StaticImage
            src="../assets/images/didi-logo.png"
            alt="didi logo"
            width={100}
          />
        </Link>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/cl">
                Chile
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cr">
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
