import React, { useState, useEffect } from "react";
import "./Projects.css";
import Footer from "../Footer/Footer";

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [expandedItem, setExpandedItem] = useState(null);

  const openPopup = (imageSrc) => {
    setSelectedImage(imageSrc);
    setZoomLevel(1);
  };

  const closePopup = () => {
    setSelectedImage(null);
  };

  const zoomIn = () => {
    setZoomLevel((prevZoom) => Math.min(prevZoom + 0.2, 3)); // Increase zoom level, max 3
  };

  const zoomOut = () => {
    setZoomLevel((prevZoom) => Math.max(prevZoom - 0.2, 1)); // Decrease zoom level, min 1
  };

  const toggleExpand = (item) => {
    // Toggle expanded item
    setExpandedItem(expandedItem === item ? null : item);
  };

  return (
    <div className="projects-wrapper">
      <div className="spacer"></div>
      <div className="projects-main-container">
        <div className="projects-left-section">
          <h2>Our Projects</h2>
          <h3>Helping you make the right decisions</h3>
          <h4>AI Alpha App</h4>
          <p>
            AI Alpha is aspiring to be the equivalent of Bloomberg for Crypto,
            offering users a powerful, all-in-one platform for navigating the
            digital finance world with ease.
          </p>
          <ul className="projects-list">
            <li onClick={() => toggleExpand(1)} className="clickable-title">
              <div className="title-container">
                Comprehensive One-Stop Shop{" "}
                <div className="plus-icon">
                  {expandedItem === 1 ? "-" : "+"}
                </div>
              </div>
              {expandedItem === 1 && (
                <p className="expanded-text">
                  AI Alpha consolidates all the information you need about
                  cryptocurrencies into one place. From real-time market data to
                  expert analysis and key fundamental metrics, everything is
                  available at your fingertips.
                </p>
              )}
            </li>
            <li onClick={() => toggleExpand(2)} className="clickable-title">
              <div className="title-container">
                AI-Powered Expertise{" "}
                <div className="plus-icon">
                  {expandedItem === 2 ? "-" : "+"}
                </div>
              </div>
              {expandedItem === 2 && (
                <p className="expanded-text">
                  From built custom news bots that focus on only the most
                  important news stories and filter out all the noise to bespoke
                  tools that powers our team of analysts to be able to analyse a
                  plethora of data, AI and machine learning are superpowers that
                  make AI Alpha a powerful tool for any cryptocurrency user.
                </p>
              )}
            </li>
            <li onClick={() => toggleExpand(3)} className="clickable-title">
              <div className="title-container">
                Designed for All Users{" "}
                <div className="plus-icon">
                  {expandedItem === 3 ? "-" : "+"}
                </div>
              </div>
              {expandedItem === 3 && (
                <p className="expanded-text">
                  Whether you're a novice looking to learn or a seasoned
                  investor seeking deeper analysis, AI Alpha simplifies the
                  complex cryptocurrency world with intuitive tools and
                  educational resources.
                </p>
              )}
            </li>
          </ul>
        </div>
        <div className="projects-right-section">
          <div className="project-row-one">
            <img
              src="static/images/Projects/one.svg"
              alt="Project One"
              onClick={() => openPopup("static/images/Projects/one.svg")}
            />
            <img
              src="static/images/Projects/two.svg"
              alt="Project Two"
              onClick={() => openPopup("static/images/Projects/two.svg")}
            />
          </div>
          <div className="project-row-two">
            <img
              src="static/images/Projects/three.svg"
              alt="Project Three"
              onClick={() => openPopup("static/images/Projects/three.svg")}
            />
            <img
              src="static/images/Projects/four.svg"
              alt="Project Four"
              onClick={() => openPopup("static/images/Projects/four.svg")}
            />
          </div>
          <div className="project-row-three">
            <img
              src="static/images/Projects/five.svg"
              alt="Project Five"
              onClick={() => openPopup("static/images/Projects/five.svg")}
            />
            <img
              src="static/images/Projects/six.svg"
              alt="Project Six"
              onClick={() => openPopup("static/images/Projects/six.svg")}
            />
          </div>
        </div>
      </div>
      <div className="projects-main-container">
        <div className="projects-left-section-upper">
          <h4>AI Alpha X</h4>
          <p>
            AI Alpha is aspiring to be the equivalent of Bloomberg for Crypto,
            offering users a powerful, all-in-one platform for navigating the
            digital finance world with ease.
          </p>
          <ul className="projects-list">
            <li onClick={() => toggleExpand(4)} className="clickable-title">
              <div className="title-container">
                Comprehensive One-Stop Shop{" "}
                <div className="plus-icon">
                  {expandedItem === 4 ? "-" : "+"}
                </div>
              </div>
              {expandedItem === 4 && (
                <p className="expanded-text">
                  AI Alpha consolidates all the information you need about
                  cryptocurrencies into one place. From real-time market data to
                  expert analysis and key fundamental metrics, everything is
                  available at your fingertips.
                </p>
              )}
            </li>
            <li onClick={() => toggleExpand(5)} className="clickable-title">
              <div className="title-container">
                AI-Powered Expertise{" "}
                <div className="plus-icon">
                  {expandedItem === 5 ? "-" : "+"}
                </div>
              </div>
              {expandedItem === 5 && (
                <p className="expanded-text">
                  From built custom news bots that focus on only the most
                  important news stories and filter out all the noise to bespoke
                  tools that powers our team of analysts to be able to analyse a
                  plethora of data, AI and machine learning are superpowers that
                  make AI Alpha a powerful tool for any cryptocurrency user.
                </p>
              )}
            </li>
            <li onClick={() => toggleExpand(6)} className="clickable-title">
              <div className="title-container">
                Designed for All Users{" "}
                <div className="plus-icon">
                  {expandedItem === 6 ? "-" : "+"}
                </div>
              </div>
              {expandedItem === 6 && (
                <p className="expanded-text">
                  Whether you're a novice looking to learn or a seasoned
                  investor seeking deeper analysis, AI Alpha simplifies the
                  complex cryptocurrency world with intuitive tools and
                  educational resources.
                </p>
              )}
            </li>
          </ul>
        </div>
        <div className="projects-right-section">
          <div className="project-row-one">
            <img
              src="static/images/Projects/one.svg"
              alt="Project One"
              onClick={() => openPopup("static/images/Projects/one.svg")}
            />
            <img
              src="static/images/Projects/two.svg"
              alt="Project Two"
              onClick={() => openPopup("static/images/Projects/two.svg")}
            />
          </div>
          <div className="project-row-two">
            <img
              src="static/images/Projects/three.svg"
              alt="Project Three"
              onClick={() => openPopup("static/images/Projects/three.svg")}
            />
            <img
              src="static/images/Projects/four.svg"
              alt="Project Four"
              onClick={() => openPopup("static/images/Projects/four.svg")}
            />
          </div>
          <div className="project-row-three">
            <img
              src="static/images/Projects/five.svg"
              alt="Project Five"
              onClick={() => openPopup("static/images/Projects/five.svg")}
            />
            <img
              src="static/images/Projects/six.svg"
              alt="Project Six"
              onClick={() => openPopup("static/images/Projects/six.svg")}
            />
          </div>
        </div>
      </div>
      <div className="projects-main-container">
        <div className="projects-left-section-upper">
          <h4>Key Wallet</h4>
          <p>
            Key Wallet offers the best security on the market, setting a new
            standard for decentralized wallets with state-of-the-art technology
            that protects users from potential hacks.
          </p>
          <ul className="projects-list">
            <li onClick={() => toggleExpand(7)} className="clickable-title">
              <div className="title-container">
                Unhackable Tech Card Device{" "}
                <div className="plus-icon">
                  {expandedItem === 7 ? "-" : "+"}
                </div>
              </div>
              {expandedItem === 7 && (
                <p className="expanded-text">
                  Key Wallet comes with a unique tech card that must be scanned
                  with your phone before making any withdrawal. This physical
                  layer of security ensures that your crypto assets remain
                  protected and inaccessible to hackers unless the card is
                  present.
                </p>
              )}
            </li>
            <li onClick={() => toggleExpand(8)} className="clickable-title">
              <div className="title-container">
                First-of-its-Kind Maker and Checker System{" "}
                <div className="plus-icon">
                  {expandedItem === 8 ? "-" : "+"}
                </div>
              </div>
              {expandedItem === 8 && (
                <p className="expanded-text">
                  Taking inspiration from secure banking systems in Asia, Key
                  Wallet allows one person to initiate a transaction while
                  another authorizes it. This feature is ideal for businesses or
                  high-value transactions, adding an extra layer of security and
                  control.
                </p>
              )}
            </li>
            <li onClick={() => toggleExpand(9)} className="clickable-title">
              <div className="title-container">
                Access to Major Wallets{" "}
                <div className="plus-icon">
                  {expandedItem === 9 ? "-" : "+"}
                </div>
              </div>
              {expandedItem === 9 && (
                <p className="expanded-text">
                  At launch, Key Wallet will support Ethereum, Solana, Bitcoin,
                  BNB, and Tron, with plans to integrate all major wallets in
                  the future, offering unparalleled flexibility and convenience
                  for managing your assets across multiple blockchains.
                </p>
              )}
            </li>
          </ul>
        </div>
        <div className="projects-right-section">
          <div className="project-row-one">
            <img
              src="static/images/Projects/one3.svg"
              alt="Project One"
              onClick={() => openPopup("static/images/Projects/one3.svg")}
            />
            <img
              src="static/images/Projects/two3.svg"
              alt="Project Two"
              onClick={() => openPopup("static/images/Projects/two3.svg")}
            />
          </div>
          <div className="project-row-two">
            <img
              src="static/images/Projects/three3.svg"
              alt="Project Three"
              onClick={() => openPopup("static/images/Projects/three3.svg")}
            />
            <img
              src="static/images/Projects/four3.svg"
              alt="Project Four"
              onClick={() => openPopup("static/images/Projects/four3.svg")}
            />
          </div>
          <div className="project-row-three">
            <img
              src="static/images/Projects/five3.svg"
              alt="Project Five"
              onClick={() => openPopup("static/images/Projects/five3.svg")}
            />
            <img
              src="static/images/Projects/six3.svg"
              alt="Project Six"
              onClick={() => openPopup("static/images/Projects/six3.svg")}
            />
          </div>
        </div>
      </div>
      <div className="spacer"></div>
      {selectedImage && (
        <div className="image-popup">
          <span className="close-popup" onClick={closePopup}>
            &times;
          </span>
          <img
            src={selectedImage}
            alt="Zoomed Project"
            className="zoomed-image"
            style={{ transform: `scale(${zoomLevel})` }}
          />
          <div className="zoom-controls">
            <button onClick={zoomOut} className="zoom-button">
              -
            </button>
            <button onClick={zoomIn} className="zoom-button">
              +
            </button>
          </div>
        </div>
      )}
      <div class="footer-container">
        <Footer />
      </div>
    </div>
  );
};

export default Projects;
