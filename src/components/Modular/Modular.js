import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Modular.css";

const Modular = () => {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

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
      <div className="modular">
        <div className="contentRow-modular-mobile">
          <div className="illustration-modular-mobile">
            <img
              src="static/images/Modular/books-falling.png"
              alt="Illustration"
            />
          </div>
          <div className="textContent-modular-mobile">
            <h1>
              <div className="text-normal-modular">Development Areas</div>
              <div className="text-yellow-modular">Modular</div>
              <div className="text-yellow-modular-second">Architecture</div>
            </h1>
            <div className="scroll-down-section-modular">
              <img
                src="static/images/Modular/scrolldown.png"
                alt="Scroll Down"
                className="scroll-icon-modular"
              />
            </div>
          </div>
        </div>
        <div className="features-section-modular-mobile">
          <div className="feature-row1-card1-modular">
            <img src="static/images/Modular/row1_1.png" alt="Row 1 Feature 1" />
            <h2>Customizable Modules</h2>
            <p>
              Every module we build is adaptable to your unique needs, offering
              flexible solutions that can grow and evolve with your business.
            </p>
          </div>
          <div className="feature-row1-card2-modular">
            <img src="static/images/Modular/row1_2.png" alt="Row 1 Feature 2" />
          </div>
          <div className="feature-row2-card4-modular">
            <img src="static/images/Modular/row2_2.png" alt="Row 2 Feature 2" />
            <h2>Speed Optimization</h2>
            <p>
              From front-end interfaces to back-end processing, our applications
              are designed for speed and reliability.
            </p>
          </div>
          <div className="feature-row2-card3-modular">
            <img src="static/images/Modular/row2_1.png" alt="Row 2 Feature 1" />
            <h2>
              Efficiency and
              <br /> Cost-Effectiveness
            </h2>
            <p>
              Using a balanced blend of talented developers and our streamlined
              Agentic Workflow, we deliver products efficiently and
              competitively.
            </p>
          </div>
        </div>
        <div className="button-section-modular">
          <button
            className="cta-button-modular"
            onClick={() => {
              navigate("/casestudies");
              window.location.reload(); // Force reload after navigating
            }}
          >
            Check our Case Studies
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="modular">
      <div className="contentRow-modular">
        <div className="textContent-modular">
          <h1>
            <div className="text-normal-modular">Development Areas</div>
            <div className="text-yellow-modular">Modular</div>
            <div className="text-yellow-modular-second">Architecture</div>
          </h1>
          <div className="scroll-down-section">
            <img
              src="static/images/Modular/scrolldown.png"
              alt="Scroll Down"
              className="scroll-icon"
            />
          </div>
        </div>
        <div className="illustration-modular">
          <img
            src="static/images/Modular/books-falling.png"
            alt="Illustration"
          />
        </div>
      </div>
      <div className="features-section-modular">
        <div className="features-row-modular">
          <div className="feature-row1-card1-modular">
            <img src="static/images/Modular/row1_1.png" alt="Row 1 Feature 1" />
            <h2>Customizable Modules</h2>
            <p>
              Every module we build is adaptable to your unique needs, offering
              flexible solutions that can grow and evolve with your business.
            </p>
          </div>
          <div className="feature-row1-card2-modular">
            <img src="static/images/Modular/row1_2.png" alt="Row 1 Feature 2" />
          </div>
        </div>
        <div className="features-row-modular">
          <div className="feature-row2-card3-modular">
            <img src="static/images/Modular/row2_1.png" alt="Row 2 Feature 1" />
            <h2>Efficiency and Cost-Effectiveness</h2>
            <p>
              Using a balanced blend of talented developers and our streamlined
              Agentic Workflow, we deliver products efficiently and
              competitively.
            </p>
          </div>
          <div className="feature-row2-card4-modular">
            <img src="static/images/Modular/row2_2.png" alt="Row 2 Feature 2" />
            <h2>Speed Optimization</h2>
            <p>
              From front-end interfaces to back-end processing, our applications
              are designed for speed and reliability.
            </p>
          </div>
        </div>
      </div>
      <div className="button-section-modular">
        <button
          className="cta-button-modular"
          onClick={() => {
            navigate("/casestudies");
            window.location.reload(); // Force reload after navigating
          }}
        >
          Check our Case Studies
        </button>
      </div>
    </div>
  );
};

export default Modular;
