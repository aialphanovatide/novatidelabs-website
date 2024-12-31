import React, { useEffect, useState } from "react";
import "./Ai.css";

const Ai = ({ isActive, isScrollFinished, setSlideIndex }) => {
  useEffect(() => {
    if (!isActive || !isScrollFinished) {
      // Eliminar la clase 'visible' de todos los elementos animados
      const elements = document.querySelectorAll(".animated");
      elements.forEach((el) => el.classList.remove("visible"));
      return; // No hacer nada más si la diapositiva no es activa o el scroll no ha finalizado
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // Deja de observar el elemento una vez que es visible
          }
        });
      },
      { threshold: 0.5 } // Ajusta el umbral según sea necesario
    );

    const elements = document.querySelectorAll(".animated");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [isActive, isScrollFinished]); // Ejecutar el efecto cuando isActive o isScrollFinished cambie
  return (
    <div className="page_container">
      <div className="contentRow">
        <div className="left-header-design">
          <h1 className="text-normal-design">Development Areas</h1>
          <h1 className="text-yellow-design">AI-Driven</h1>
          <div className="text-yellow-modular-second">Infrastructure</div>
          <img
            src="static/images/Ai/scrolldown.png"
            alt="Scroll Down"
            className="scroll-icon"
          />
        </div>
        <img
          src="static/images/Ai/drawer.png"
          alt="Illustration"
          className="ilustration-design ilustration-ai"
        />
      </div>

      <div className="grid-section-ai">
        <div className="feature-row1-card1-ai animated">
          <div className="feature-row1-card1-content-ai">
            <img
              src="static/images/Ai/row1_1.png"
              alt="Row 1 Feature 1"
              className="grid-picture-style"
            />
            <h2 className="card-title-style">
              AI as Infrastructure and Team Member
            </h2>
            <p className="card-p-style">
              AI is woven into the fabric of our development, enabling
              automation across your business systems, from data sorting to
              product innovation.
            </p>
          </div>
        </div>
        <div className="feature-row1-card2-ai animated">
          <div className="feature-row1-card2-content-ai">
            <img
              src="static/images/Ai/row1_2.png"
              alt="Row 1 Feature 2"
              className="grid-picture-style"
            />
            <h2 className="card-title-style">Machine Learning + AI Agents</h2>
            <p className="card-p-style">
              This powerful combination ensures rapid bug detection and
              correction, as well as flexibility to meet ambitious product
              visions.
            </p>
          </div>
        </div>
        <div className="feature-row2-card1-ai animated">
          <div className="feature-row2-card1-content-ai">
            <img
              src="static/images/Ai/row2_1.png"
              alt="Row 2 Feature 1"
              className="grid-picture-style"
            />
            <h2 className="card-title-style">Closed-End LLMs</h2>
            <p className="card-p-style">
              With a robust data pipeline, our closed-end LLMs minimise errors
              and maximise insights, using your company’s data to enrich
              decision-making.
            </p>
          </div>
        </div>

        <div className="feature-row2-card2-ai animated">
          <div className="feature-row2-card2-content-ai">
            <img
              src="static/images/Ai/row2_2.png"
              alt="Row 1 Feature 2"
              className="grid-row1-2"
            />
          </div>
        </div>
      </div>
      <button class="cta-button-modular" onClick={() => setSlideIndex(4)}>
        Check our Case Studies
      </button>
    </div>
  );
};

export default Ai;
