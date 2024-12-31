import React, { use } from "react";
import "./navbar.css";
import { useEffect, useRef } from "react";
import logo from "../../img/logo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar({ slideIndex, setSlideIndex }) {
  const navigate = useNavigate();
  const location = useLocation();
  const sliderPaths = [
    "/aboutus",
    "/philosophy",
    "/methodology",
    "/joinourteam",
  ];
  const handleNavClick = (index) => {
    if (!sliderPaths.includes(location.pathname)) {
      changeSlideIndex(index);
    } else {
      navigate("/");

      setTimeout(() => {
        changeSlideIndex(index);
      }, 0.1);
    }
  };

  const changeSlideIndex = (index) => {
    setSlideIndex(index);
    unshowNavbar();
  };
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const unshowNavbar = () => {
    navRef.current.classList.add("responsive_nav");
  };

  const getNavItemClass = (index) => {
    return slideIndex === index ? "nav_item_active" : "nav_item";
  };

  return (
    <div className="navbar">
      <div className="navbar_container">
        <img
          src={logo}
          alt=""
          className="nav_logo"
          onClick={() => handleNavClick(0)}
        />
        {/* <img src={logo_mobile} alt="" className='nav_logo mobile' onClick={() => changeSlideIndex(0)}/> */}
        <div ref={navRef} className="nav_items responsive_nav">
          <span
            onClick={() => handleNavClick(0)}
            className={getNavItemClass(0)}
          >
            Home
          </span>
          <span
            onClick={() => handleNavClick(1)}
            className={getNavItemClass(1)}
          >
            Design
          </span>
          <span
            onClick={() => handleNavClick(2)}
            className={getNavItemClass(2)}
          >
            Modular
          </span>
          <span
            onClick={() => handleNavClick(3)}
            className={getNavItemClass(3)}
          >
            AI
          </span>
          <span
            onClick={() => handleNavClick(4)}
            className={getNavItemClass(4)}
          >
            Case Studies
          </span>
          <span
            onClick={() => handleNavClick(5)}
            className={getNavItemClass(5)}
          >
            Contact Us
          </span>
          <a
            target="_blank"
            href="https://www.linkedin.com/company/novatide-labs/"
            className="linkedin-mobile-link mobile"
          >
            <div className="linkedin-container"></div>
          </a>
        </div>
        <button className="nav_toggle mobile" onClick={showNavbar}>
          <MenuIcon sx={{ color: "black" }} />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
