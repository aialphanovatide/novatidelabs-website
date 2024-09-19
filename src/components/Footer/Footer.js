import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logo-section">
          <img
            src="static/images/baseLogoWithText.png"
            alt="Novatide Labs Logo"
            className="logo"
          />
        </div>
        <div className={"row align-end"}>
          <nav className="footer-navigation">
            <NavLink
              exact
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Projects
            </NavLink>
            <NavLink
              to="/careers"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Careers
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contact
            </NavLink>
          </nav>
          <div className="contact-info">
            <p>
              71-75 Shelton Street,
              <br />
              Covent Garden,
              <br />
              London, United Kingdom,
              <br />
              WC2H 9JQ, United Kingdom.
            </p>
            <p>a.anand@novatidelabs.com</p>
          </div>
          <div className="linkedin-container">
            <a
              href="https://www.linkedin.com"
              className="linkedin-link"
              aria-label="LinkedIn"
            >
              in
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">© 2024 by Novatide Labs</div>
    </footer>
  );
};

export default Footer;
