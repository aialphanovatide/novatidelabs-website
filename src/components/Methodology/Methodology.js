import React, { useState, useEffect } from "react";
import "./Methodology.css";
import Footer from "../Footer/Footer";

const Methodology = () => {
  const [isMobile, setIsMobile] = useState(false);

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

  return (
    <div className="methodology">
      {isMobile ? (
        <div className="contentRow-methodology-mobile">
          <div className="illustration-methodology">
            <img
              src="static/images/Methodology/bricks.png"
              alt="Illustration"
            />
          </div>
          <div className="textContent-methodology-mobile">
            <h1>
              <div className="text-yellow-methodology">Our</div>
              <div className="text-yellow-methodology">Methodology</div>
              <div className="text-normal-methodology">
                Our development process is designed to be transparent,
                collaborative, and efficient.
              </div>
            </h1>
          </div>
        </div>
      ) : (
        <div className="contentRow-methodology">
          <div className="textContent-methodology">
            <h1>
              <div className="text-yellow-methodology">Our</div>
              <div className="text-yellow-methodology">Methodology</div>
              <div className="text-normal-methodology">
                Our development process is designed to be transparent,
                collaborative, and efficient.
              </div>
            </h1>
          </div>
          <div className="illustration-methodology">
            <img
              src="static/images/Methodology/bricks.png"
              alt="Illustration"
            />
          </div>
        </div>
      )}
      {isMobile ? (
        <>
          {/* Mobile Layout */}
          <div className="methodology-step-mobile">
            <div className="methodology-number-different">
              <img src="static/images/Methodology/number1.png" alt="Step 1" />
            </div>
            <div className="methodology-right-column">
              <img
                src="static/images/Methodology/image1.png"
                alt="In-Depth Discovery"
                className="methodology-image"
              />
              <h3>In-Depth Discovery</h3>
              <p>
                We start by understanding the core pain points your business
                faces, diving deep into your industry’s unique demands and
                challenges.
              </p>
            </div>
          </div>
          <div className="methodology-step-mobile">
            <div className="methodology-number">
              <img src="static/images/Methodology/number2.png" alt="Step 2" />
            </div>
            <div className="methodology-right-column">
              <img
                src="static/images/Methodology/image2.png"
                alt="Tailored Solution Design"
                className="methodology-image"
              />
              <h3>Tailored Solution Design</h3>
              <p>
                Our team works with you to build customizable, scalable modules
                that can be adapted as your needs evolve.
              </p>
            </div>
          </div>
          <div className="methodology-step-mobile">
            <div className="methodology-number">
              <img src="static/images/Methodology/number3.png" alt="Step 3" />
            </div>
            <div className="methodology-right-column">
              <img
                src="static/images/Methodology/image3.png"
                alt="Iterative Development"
                className="methodology-image-different"
              />
              <h3>Iterative Development</h3>
              <p>
                With agile workflows and regular check-ins, we ensure your
                feedback is integrated, keeping the project on track and aligned
                with your vision.
              </p>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Desktop Layout */}
          <div className="methodology-step-desktop">
            <div className="methodology-number-different">
              <img src="static/images/Methodology/number1.png" alt="Step 1" />
            </div>
            <div className="methodology-content">
              <h3>In-Depth Discovery</h3>
              <p>
                We start by understanding the core pain points your business
                faces, diving deep into your industry’s unique demands and
                challenges.
              </p>
            </div>
            <div className="methodology-image">
              <img
                src="static/images/Methodology/image1.png"
                alt="In-Depth Discovery"
              />
            </div>
          </div>
          <div className="methodology-step-desktop-different">
            <div className="methodology-number-different2">
              <img src="static/images/Methodology/number2.png" alt="Step 2" />
            </div>
            <div className="methodology-content">
              <h3>Tailored Solution Design</h3>
              <p>
                Our team works with you to build customizable, scalable modules
                that can be adapted as your needs evolve.
              </p>
            </div>
            <div className="methodology-image-different">
              <img
                src="static/images/Methodology/image2.png"
                alt="Tailored Solution Design"
              />
            </div>
          </div>
          <div className="methodology-step-desktop">
            <div className="methodology-number">
              <img src="static/images/Methodology/number3.png" alt="Step 3" />
            </div>
            <div className="methodology-content">
              <h3>Iterative Development</h3>
              <p>
                With agile workflows and regular check-ins, we ensure your
                feedback is integrated, keeping the project on track and aligned
                with your vision.
              </p>
            </div>
            <div className="methodology-image-different2">
              <img
                src="static/images/Methodology/image3.png"
                alt="Iterative Development"
              />
            </div>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
};

export default Methodology;
