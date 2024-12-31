import React from "react";
import "./footer.css";
import logo from "../../img/full_logo.svg";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
function Footer({ slideIndex, setSlideIndex }) {
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
  };

  const getFootItemClass = (index) => {
    return slideIndex === index ? "foot_item_active" : "foot_item";
  };

  const getFootSecondaryItemClass = (path) => {
    return location.pathname === path ? "foot_item_active" : "foot_item";
  };

  return (
    <div>
      <div className="footer_container">
        <div className="grow-logo">
          <img src={logo} alt="" className="footer_logo" />
        </div>

        <div className="items_container grow-navs">
          <div className="footer_items">
            <span
              onClick={() => handleNavClick(0)}
              className={getFootItemClass(0)}
            >
              Home
            </span>
            <span
              onClick={() => handleNavClick(1)}
              className={getFootItemClass(1)}
            >
              Design
            </span>
            <span
              onClick={() => handleNavClick(2)}
              className={getFootItemClass(2)}
            >
              Modular
            </span>
            <span
              onClick={() => handleNavClick(3)}
              className={getFootItemClass(3)}
            >
              AI
            </span>
            <span
              onClick={() => handleNavClick(4)}
              className={getFootItemClass(4)}
            >
              Case Studies
            </span>
            <span
              onClick={() => handleNavClick(5)}
              className={getFootItemClass(5)}
            >
              Contact Us
            </span>
          </div>
          <div className="footer_items">
            <span className="top_line mobile"></span>
            <span
              onClick={() => navigate("/aboutus")}
              className={`gray_footer_item ${getFootSecondaryItemClass(
                "/aboutus"
              )}`}
            >
              About Us
            </span>
            <span
              onClick={() => navigate("/philosophy")}
              className={`gray_footer_item ${getFootSecondaryItemClass(
                "/philosophy"
              )}`}
            >
              Philosophy
            </span>
            <span
              onClick={() => navigate("/methodology")}
              className={`gray_footer_item ${getFootSecondaryItemClass(
                "/methodology"
              )}`}
            >
              Methodology
            </span>
            <span
              onClick={() => navigate("/joinourteam")}
              className={`gray_footer_item ${getFootSecondaryItemClass(
                "/joinourteam"
              )}`}
            >
              Join Our Team
            </span>
          </div>
        </div>
        <div className="grow-contact">
          <div className="footer_items">
            <p className="footer-paragraph">
              71-75 Shelton Street, Covent Garden, London, United Kingdom, WC2H
              9JQ, United Kingdom.
            </p>
            <p className="footer-paragraph footer-mail">
              enquiries@novatidelabs.com
            </p>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/novatide-labs/"
              className="linkedin-mobile-link"
            >
              <div className="linkedin-container"></div>
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">© 2024 by Novatide Labs</div>
    </div>
  );
}

export default Footer;
