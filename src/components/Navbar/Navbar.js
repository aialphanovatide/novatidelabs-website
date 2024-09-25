import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a
          href="https://novatidelabs.com"
          target="_blank"
          rel="noopener noreferrer"
        >
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
            to="/projects"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => toggleMenu()}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/careers"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => toggleMenu()}
          >
            Careers
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => toggleMenu()}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
