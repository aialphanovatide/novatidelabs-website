import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.location.reload(); // Force reload after navigating
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Set to true if screen width is <= 768px
    };

    // Initial check
    checkMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  if (isMobile) {
    // Mobile Layout
    return (
      <footer className="footer">
        <div className="footer-content-mobile">
          {/* First row: Logo */}
          <div className="logo-row">
            <img
              src="static/images/baseLogoWithText.png"
              alt="Novatide Labs Logo"
              className="logo"
            />
          </div>

          {/* Second row: Navigation and Contact Info */}
          <div className="footer-second-row">
            {/* First column: Navigation */}
            <div className="footer-navigation-column">
              <nav className="footer-navigation">
                <NavLink
                  exact
                  to="/"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/design"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Design
                </NavLink>
                <NavLink
                  to="/modular"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Modular
                </NavLink>
                <NavLink
                  to="/ai"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  AI
                </NavLink>
                <NavLink
                  to="/casestudies"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Case Studies
                </NavLink>
                <NavLink
                  to="/contactus"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Contact Us
                </NavLink>
              </nav>
              <nav className="footer-navigation-2">
                <img
                  src="static/images/footer_mobileLine.png"
                  alt="line"
                  className="footer-mobile-line"
                />{" "}
                <NavLink
                  exact
                  to="/aboutus"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  About Us
                </NavLink>
                <NavLink
                  to="/philosophy"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Philosophy
                </NavLink>
                <NavLink
                  to="/methodology"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Methodology
                </NavLink>
                <NavLink
                  to="/joinourteam"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Join Our Team
                </NavLink>
              </nav>
            </div>

            {/* Second column: Contact Info */}
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
              <p className="enquiries-email">enquiries@novatidelabs.com</p>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/novatide-labs/"
              >
                <div className="linkedin-container"></div>
              </a>
            </div>
          </div>
        </div>
        <div className="copyright">© 2024 by Novatide Labs</div>
      </footer>
    );
  }
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
              to="/design"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Design
            </NavLink>
            <NavLink
              to="/modular"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Modular
            </NavLink>
            <NavLink
              to="/ai"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              AI
            </NavLink>
            <NavLink
              to="/casestudies"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Case Studies
            </NavLink>
            <NavLink
              to="/contactus"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contact Us
            </NavLink>
          </nav>
          <nav className="footer-navigation-2">
            <NavLink
              exact
              to="/aboutus"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              About Us
            </NavLink>
            <NavLink
              to="/philosophy"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Philosophy
            </NavLink>
            <NavLink
              to="/methodology"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Methodology
            </NavLink>
            <NavLink
              to="/joinourteam"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Join Our Team
            </NavLink>
            <br />
            <br />
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
            <p className="enquiries-email">enquiries@novatidelabs.com</p>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/novatide-labs/"
            >
              {" "}
              <div className="linkedin-container"></div>
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">© 2024 by Novatide Labs</div>
    </footer>
  );
};

export default Footer;
