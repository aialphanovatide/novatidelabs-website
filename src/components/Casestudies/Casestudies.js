import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Casestudies.css";

const Casestudies = () => {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

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
  // Check screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isMobile) {
    // Mobile layout
    return (
      <div className="casestudies">
        <div className="contentRow-casestudies-mobile">
          <div className="illustration-casestudies-mobile">
            <img
              src="static/images/Casestudies/computer-girl.png"
              alt="Illustration"
            />
          </div>
          <div className="textContent-casestudies-mobile">
            <h1>
              <div className="text-yellow-casestudies">Case</div>
              <div className="text-yellow-casestudies">Studies</div>
              <div className="text-normal-casestudies">
                We focus on tangible results for each client,
                <br /> turning challenges into growth opportunities.
              </div>
            </h1>
            <div className="scroll-down-section-casestudies">
              <img
                src="static/images/Casestudies/scrolldown.png"
                alt="Scroll Down"
                className="scroll-icon-casestudies"
              />
            </div>
          </div>
        </div>
        <div className="projects-wrapper">
          <div className="spacer"></div>
          <div className="projects-main-container">
            <div className="projects-left-section">
              <h4>AI Alpha App</h4>
              <p>
                <b>Pain Point:</b> Delivering reliable, up-to-date crypto news
                to users in an automated way. <br />
                <br />
                <b>Solution: </b>
                We developed bespoke news bots for each of the 35
                cryptocurrencies that AI Alpha tracks, providing real-time
                insights for their users.
              </p>
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
              <h4>AIX</h4>
              <p>
                <b>Pain Point:</b> Offering a Centralised Exchange (CEX) model
                that doesn’t rely on the traditional order book approach. <br />
                <br />
                <b>Solution: </b>
                We integrated decentralised exchange (DEX) functionalities,
                allowing AIX users to buy directly from a DEX while benefiting
                from the security of a centralised model.
              </p>
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
                <b>Pain Point:</b> Building a decentralised wallet experience
                that institutional users can trust for high-stakes transactions.
                <br />
                <br />
                <b>Solution: </b>
                We implemented a maker-checker feature for large payments,
                bringing a trusted, bank-standard feature to decentralised
                finance for enhanced security and trust.
              </p>
            </div>
            <div className="projects-right-section">
              <div className="project-row-one">
                <img
                  src="static/images/Projects/one3.svg"
                  alt="Project One"
                  onClick={() =>
                    openPopup("static/images/Projects/keywallet.jpg")
                  }
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
        </div>
      </div>
    );
  }
  return (
    <div className="casestudies">
      <div className="contentRow-casestudies">
        <div className="textContent-casestudies">
          <h1>
            <div className="text-yellow-casestudies">Case</div>
            <div className="text-yellow-casestudies">Studies</div>
            <div className="text-normal-casestudies">
              We focus on tangible results for each client,
              <br /> turning challenges into growth opportunities.
            </div>
          </h1>
          <div className="scroll-down-section">
            <img
              src="static/images/Casestudies/scrolldown.png"
              alt="Scroll Down"
              className="scroll-icon"
            />
          </div>
        </div>
        <div className="illustration-casestudies">
          <img
            src="static/images/Casestudies/computer-girl.png"
            alt="Illustration"
          />
        </div>
      </div>
      <div className="projects-wrapper">
        <div className="spacer"></div>
        <div className="projects-main-container">
          <div className="projects-left-section">
            <h4>AI Alpha App</h4>
            <p>
              <b>Pain Point:</b> Delivering reliable, up-to-date crypto news to
              users in an automated way. <br />
              <br />
              <b>Solution: </b>
              We developed bespoke news bots for each of the 35 cryptocurrencies
              that AI Alpha tracks, providing real-time insights for their
              users.
            </p>
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
            <h4>AIX</h4>
            <p>
              <b>Pain Point:</b> Offering a Centralised Exchange (CEX) model
              that doesn’t rely on the traditional order book approach. <br />
              <br />
              <b>Solution: </b>
              We integrated decentralised exchange (DEX) functionalities,
              allowing AIX users to buy directly from a DEX while benefiting
              from the security of a centralised model.
            </p>
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
              <b>Pain Point:</b> Building a decentralised wallet experience that
              institutional users can trust for high-stakes transactions.
              <br />
              <br />
              <b>Solution: </b>
              We implemented a maker-checker feature for large payments,
              bringing a trusted, bank-standard feature to decentralised finance
              for enhanced security and trust.
            </p>
          </div>
          <div className="projects-right-section">
            <div className="project-row-one">
              <img
                src="static/images/Projects/one3.svg"
                alt="Project One"
                onClick={() =>
                  openPopup("static/images/Projects/keywallet.jpg")
                }
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
      </div>
    </div>
  );
};

export default Casestudies;
