import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Design.css";

const Design = () => {
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

  useEffect(() => {
    console.log("Initializing IntersectionObserver in MODULAR...");

    // Scroll animation handler
    const handleScrollAnimation = (entries, observer) => {
      entries.forEach((entry) => {
        console.log(
          `Observed: ${entry.target.className}, IsIntersecting: ${entry.isIntersecting}`
        );
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      });
    };

    // Create observer
    const observer = new IntersectionObserver(handleScrollAnimation, {
      root: null, // Use the viewport
      threshold: 0.1, // Trigger when 10% of the element is visible
      rootMargin: "0px 0px -20% 0px", // Trigger slightly earlier
    });

    // Select all cards
    const cards = document.querySelectorAll(
      ".feature-row1-card1-design, .feature-row1-card2-design, .feature-row2-card3-design, .feature-row2-card4-design, .feature-row3-card5-design, .feature-row3-card6-design"
    );

    if (cards.length === 0) {
      console.error("No cards found for observer");
    } else {
      cards.forEach((card) => observer.observe(card));
    }

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []); // Empty dependency array ensures observer is set up once

  if (isMobile) {
    // Mobile layout
    return (
      <div className="design">
        <div className="contentRow-design-mobile">
          <div className="illustration-design-mobile">
            <img src="static/images/Design/girl-cafe.png" alt="Illustration" />
          </div>
          <div className="textContent-design-mobile">
            <h1>
              <div className="text-normal-design">Development Areas</div>
              <div className="text-yellow-design">Design</div>
            </h1>
            <div className="scroll-down-section">
              <img
                src="static/images/Design/scrolldown.png"
                alt="Scroll Down"
                className="scroll-icon"
              />
            </div>
          </div>
        </div>
        <div className="features-section-design">
          <div className="feature-row1-card1-design">
            <img src="static/images/Design/row1_1.png" alt="Row 1 Feature 1" />
            <h2>Design-Led Approach</h2>
            <p>
              We’re a design-first company, integrating strong UI/UX principles
              to ensure our products are as intuitive as they are powerful.
            </p>
          </div>
          <div className="feature-row1-card2-design">
            <img src="static/images/Design/row1_2.png" alt="Row 1 Feature 2" />
          </div>
          <div className="feature-row2-card4-design">
            <img src="static/images/Design/row2_2.png" alt="Row 2 Feature 2" />
            <h2>Intuitive UI/UX</h2>
            <p>
              Every interface we create prioritises user experience, focusing on
              ease of use and seamless interaction.
            </p>
          </div>
          <div className="feature-row2-card3-design">
            <img src="static/images/Design/row2_1.png" alt="Row 2 Feature 1" />
            <h2>Empowering Backends</h2>
            <p>
              Our backend systems are built with automation, machine learning,
              and AI to empower teams and streamline tasks.
            </p>
          </div>
          <div className="feature-row3-card6-design">
            <img src="static/images/Design/row3_2.png" alt="Row 3 Feature 2" />
          </div>
          <div className="feature-row3-card5-design">
            <img src="static/images/Design/row3_1.png" alt="Row 3 Feature 1" />
            <h2>Engaging Social Media Products</h2>
            <p>
              We design compelling tools for social media platforms that enable
              dynamic content creation and user engagement.
            </p>
          </div>
        </div>
        <div className="button-section-design">
          <button
            className="cta-button-design"
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
    <div className="design">
      <div className="contentRow-design">
        <div className="textContent-design">
          <h1>
            <div className="text-normal-design">Development Areas</div>
            <div className="text-yellow-design">Design</div>
          </h1>
          <div className="scroll-down-section">
            <img
              src="static/images/Design/scrolldown.png"
              alt="Scroll Down"
              className="scroll-icon"
            />
          </div>
        </div>
        <div className="illustration-design">
          <img src="static/images/Design/girl-cafe.png" alt="Illustration" />
        </div>
      </div>
      <div className="features-section-design">
        <div className="features-row-design">
          <div className="feature-row1-card1-design">
            <img src="static/images/Design/row1_1.png" alt="Row 1 Feature 1" />
            <h2>Design-Led Approach</h2>
            <p>
              We’re a design-first company, integrating strong UI/UX principles
              to ensure our products are as intuitive as they are powerful.
            </p>
          </div>
          <div className="feature-row1-card2-design">
            <img src="static/images/Design/row1_2.png" alt="Row 1 Feature 2" />
          </div>
        </div>
        <div className="features-row-design">
          <div className="feature-row2-card3-design row2">
            <img src="static/images/Design/row2_1.png" alt="Row 2 Feature 1" />
            <h2>Empowering Backends</h2>
            <p>
              Our backend systems are built with automation, machine learning,
              and AI to empower teams and streamline tasks.
            </p>
          </div>
          <div className="feature-row2-card4-design row2">
            <img src="static/images/Design/row2_2.png" alt="Row 2 Feature 2" />
            <h2>Intuitive UI/UX</h2>
            <p>
              Every interface we create prioritises user experience, focusing on
              ease of use and seamless interaction.
            </p>
          </div>
        </div>
        <div className="features-row-design">
          <div className="feature-row3-card5-design row3">
            <img src="static/images/Design/row3_1.png" alt="Row 3 Feature 1" />
            <h2>Engaging Social Media Products</h2>
            <p>
              We design compelling tools for social media platforms that enable
              dynamic content creation and user engagement.
            </p>
          </div>
          <div className="feature-row3-card6-design ">
            <img src="static/images/Design/row3_2.png" alt="Row 3 Feature 2" />
          </div>
        </div>
      </div>
      <div className="button-section-design">
        <button
          className="cta-button-design"
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

export default Design;
