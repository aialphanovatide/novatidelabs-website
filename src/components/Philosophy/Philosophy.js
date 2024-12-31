import React, { useState, useEffect } from "react";
import "./Philosophy.css";

const Philosophy = ( { setSlideIndex}) => {
  const [isMobile, setIsMobile] = useState(false);
  setSlideIndex(null);
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
    <div className="philosophy">
      {isMobile ? (
        <div className="contentRow-methodology-mobile">
          <div className="illustration-methodology">
            <img src="static/images/Philosophy/hands.png" alt="Illustration" />
          </div>
          <div className="textContent-methodology-mobile">
            <h1>
              <div className="text-yellow-methodology">Our</div>
              <div className="text-yellow-methodology">Philosophy</div>
              <div className="text-normal-philosophy">
                At Novatide Labs, we believe that software should serve as a
                <b> tool for growth</b>, not a limitation. Our approach is
                rooted in understanding your industry’s demands, identifying
                obstacles, and delivering solutions that empower your team. We
                pride ourselves on the impact of our work and our dedication to
                building products that are as{" "}
                <b>functional as they are intuitive.</b>
              </div>
            </h1>
          </div>
        </div>
      ) : (
        <div className="contentRow-methodology">
          <div className="textContent-methodology">
            <h1>
              <div className="text-yellow-methodology">Our</div>
              <div className="text-yellow-methodology">Philosophy</div>
              <div className="text-normal-philosophy">
                At Novatide Labs, we believe that software should serve as a
                <b> tool for growth</b>, not a limitation. Our approach is
                rooted in understanding your industry’s demands, identifying
                obstacles, and delivering solutions that empower your team. We
                pride ourselves on the impact of our work and our dedication to
                building products that are as
                <b> functional as they are intuitive.</b>
              </div>
            </h1>
          </div>
          <div className="illustration-philosophy">
            <img src="static/images/Philosophy/hands.png" alt="Illustration" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Philosophy;
