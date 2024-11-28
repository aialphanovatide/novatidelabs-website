import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDot, setActiveDot] = useState("/");
  const [isAboveFooter, setIsAboveFooter] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setActiveDot(location.pathname);
  }, [location.pathname]);

  const handleDotClick = (path) => {
    setActiveDot(path);
    navigate(path);
  };

  useEffect(() => {
    // Check screen width and disable repositioning on mobile
    const isMobile = window.innerWidth <= 768;
    if (isMobile) return;

    const footer = document.querySelector(".footer");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsAboveFooter(true);
          } else {
            setIsAboveFooter(false);
          }
        });
      },
      { root: null, threshold: 0.1 }
    );

    if (footer) observer.observe(footer);

    return () => {
      if (footer) observer.disconnect();
    };
  }, [location.pathname]);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="https://novatidelabs.com" rel="noopener noreferrer">
          <img src="static/images/baseLogo.png" alt="Logo" />
        </a>
      </div>
      <div
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={() => toggleMenu()}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
            end
            onClick={() => toggleMenu()}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/design"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => toggleMenu()}
          >
            Design
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/modular"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => toggleMenu()}
          >
            Modular
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/ai"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => toggleMenu()}
          >
            AI
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/casestudies"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => toggleMenu()}
          >
            Case Studies
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contactus"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => toggleMenu()}
          >
            Contact Us
          </NavLink>
        </li>
        <a
          target="_blank"
          href="https://www.linkedin.com/company/novatide-labs/"
          className="linkedin-mobile-link"
        >
          <div className="linkedin-container"></div>
        </a>
      </ul>
      {!isOpen && (
        <>
          <div className="left-arrow arrow">
            <img
              src="static/images/arrow-left.png"
              style={{
                opacity:
                  activeDot === "/" ||
                  activeDot === "/aboutus" ||
                  activeDot === "/philosophy" ||
                  activeDot === "/methodology" ||
                  activeDot === "/joinourteam"
                    ? 0
                    : 1,
              }}
              alt="Previous"
            />
          </div>
          <div className="right-arrow arrow">
            <img
              src="static/images/arrow-right.png"
              style={{
                opacity:
                  activeDot === "/contactus" ||
                  activeDot === "/aboutus" ||
                  activeDot === "/philosophy" ||
                  activeDot === "/methodology" ||
                  activeDot === "/joinourteam"
                    ? 0
                    : 1,
              }}
              alt="Next"
            />
          </div>
        </>
      )}

      {/* Dot Container */}
      <div className={`dot-container ${isAboveFooter ? "stuck" : ""}`}>
        <div
          className={`dot ${activeDot === "/" ? "active-dot" : "inactive-dot"}`}
          onClick={() => handleDotClick("/")}
        ></div>
        <div
          className={`dot ${
            activeDot === "/design" ? "active-dot" : "inactive-dot"
          }`}
          onClick={() => handleDotClick("/design")}
        ></div>
        <div
          className={`dot ${
            activeDot === "/modular" ? "active-dot" : "inactive-dot"
          }`}
          onClick={() => handleDotClick("/modular")}
        ></div>
        <div
          className={`dot ${
            activeDot === "/ai" ? "active-dot" : "inactive-dot"
          }`}
          onClick={() => handleDotClick("/ai")}
        ></div>
        <div
          className={`dot ${
            activeDot === "/casestudies" ? "active-dot" : "inactive-dot"
          }`}
          onClick={() => handleDotClick("/casestudies")}
        ></div>
        <div
          className={`dot ${
            activeDot === "/contactus" ? "active-dot" : "inactive-dot"
          }`}
          onClick={() => handleDotClick("/contactus")}
        ></div>
      </div>
    </nav>
  );
};

export default Navbar;
