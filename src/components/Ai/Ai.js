import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Ai.css";

const Ai = () => {
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
      <div className="ai">
        <div className="contentRow-ai-mobile">
          <div className="illustration-ai-mobile">
            <img src="static/images/Ai/drawer.png" alt="Illustration" />
          </div>
          <div className="textContent-ai-mobile">
            <h1>
              <div className="text-normal-ai">Development Areas</div>
              <div className="text-yellow-ai">AI-Driven</div>
              <div className="text-yellow-ai-second">Infrastructure</div>
            </h1>
            <div className="scroll-down-section-ai">
              <img
                src="static/images/Ai/scrolldown.png"
                alt="Scroll Down"
                className="scroll-icon-ai"
              />
            </div>
          </div>
        </div>
        <div className="features-section-ai-mobile">
          <div className="feature-card1-ai">
            <img src="static/images/Ai/row1_1.png" alt="Row 1 Feature 1" />
            <h2>
              AI as Infrastructure
              <br /> and Team Member
            </h2>
            <p>
              AI is woven into the fabric of our development, enabling
              automation across your business systems, from data sorting to
              product innovation.
            </p>
          </div>
          <div className="feature-card2-ai">
            <img src="static/images/Ai/row1_2.png" alt="Row 1 Feature 2" />
            <h2>
              Machine Learning
              <br /> + AI Agents
            </h2>
            <p>
              This powerful combination ensures rapid bug detection and
              correction, as well as flexibility to meet ambitious product
              visions.
            </p>
          </div>
          <div className="feature-card4-ai">
            <img src="static/images/Ai/row2_2.png" alt="Row 2 Feature 2" />
          </div>
          <div className="feature-card3-ai">
            <img src="static/images/Ai/row2_1.png" alt="Row 2 Feature 1" />
            <h2>Closed-End LLMs</h2>
            <p>
              With a robust data pipeline, our closed-end LLMs minimise errors
              and maximise insights, using your company’s data to enrich
              decision-making.
            </p>
          </div>
        </div>
        <div className="button-section-ai">
          <button
            className="cta-button-ai"
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
    <div className="ai">
      <div className="contentRow-ai">
        <div className="textContent-ai">
          <h1>
            <div className="text-normal-ai">Development Areas</div>
            <div className="text-yellow-ai">AI-Driven</div>
            <div className="text-yellow-ai-second">Infrasestructure</div>
          </h1>
          <div className="scroll-down-section">
            <img
              src="static/images/Ai/scrolldown.png"
              alt="Scroll Down"
              className="scroll-icon"
            />
          </div>
        </div>
        <div className="illustration-ai">
          <img src="static/images/Ai/drawer.png" alt="Illustration" />
        </div>
      </div>
      <div className="features-section-ai">
        <div className="features-column">
          {/* Column 1 */}
          <div className="feature-card1-ai">
            <img src="static/images/Ai/row1_1.png" alt="Card 1 Feature" />
            <h2>
              AI as Infrastructure
              <br /> and Team Member
            </h2>
            <p>
              AI is woven into the fabric of our development, enabling
              automation across your business systems, from data sorting to
              product innovation.
            </p>
          </div>
          <div className="feature-card3-ai">
            <img src="static/images/Ai/row2_1.png" alt="Card 3 Feature" />
            <h2>Closed-End LLMs</h2>
            <p>
              With a robust data pipeline, our closed-end LLMs minimise errors
              and maximise insights, using your company’s data to enrich
              decision-making.
            </p>
          </div>
        </div>
        <div className="features-column">
          {/* Column 2 */}
          <div className="feature-card2-ai">
            <img src="static/images/Ai/row1_2.png" alt="Card 2 Feature" />
            <h2>
              Machine Learning
              <br /> + AI Agents
            </h2>
            <p>
              This powerful combination ensures rapid bug detection and
              correction, as well as flexibility to meet ambitious product
              visions.
            </p>
          </div>
          <div className="feature-card4-ai">
            <img src="static/images/Ai/row2_2.png" alt="Card 4 Feature" />
          </div>
        </div>
      </div>
      <div className="button-section-ai">
        <div className="button-section-ai">
          <a className="cta-button-ai" href="/casestudies#casestudies">
            Check our Case Studies
          </a>
        </div>
      </div>
    </div>
  );
};

export default Ai;
