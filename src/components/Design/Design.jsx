import React, { useEffect, useState } from "react";

import "./Design.css";

const Design = ({ isActive, isScrollFinished , setSlideIndex }) => {
  useEffect(() => {
    if (!isActive || !isScrollFinished) {
      // Eliminar la clase 'visible' de todos los elementos animados
      const elements = document.querySelectorAll('.animated');
      elements.forEach((el) => el.classList.remove('visible'));
      return; // No hacer nada más si la diapositiva no es activa o el scroll no ha finalizado
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target); // Deja de observar el elemento una vez que es visible
          }
        });
      },
      { threshold: .5 } // Ajusta el umbral según sea necesario
    );

    const elements = document.querySelectorAll('.animated');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [isActive, isScrollFinished]); // Ejecutar el efecto cuando isActive o isScrollFinished cambie

  
    return (
      <div className="page_container">
        <div className="contentRow-design">
          <div className="left-header-design">
            <h1 className="text-normal-design">Development Areas</h1>
            <h1 className="text-yellow-design">Design</h1>
            <img
                src="static/images/Design/scrolldown.png"
                alt="Scroll Down"
                className="scroll-icon"
            />
          </div>
          <img src="static/images/Design/girl-cafe.png" alt="Illustration" className="ilustration-design"/>
        </div>
        <div className="grid-section-design">
            <div className="feature-row1-card1-design animated">
                <div className="feature-row1-card1-content-design">
                  <img src="static/images/Design/row1_1.png" alt="Row 1 Feature 1" className="grid-picture-style" />
                  <h2 className="card-title-style">Design-Led Approach</h2>
                  <p className="card-p-style">We’re a design-first company, integrating strong UI/UX principles to ensure our products are as intuitive as they are powerful.</p>
                </div>
            </div>
            <div className="feature-row1-card2-design animated">
                <div className="feature-row1-card2-content-design">
                  <img src="static/images/Design/row1_2.png" alt="Row 1 Feature 2" className="grid-row1-2" />
                </div>
            </div>
            <div className="feature-row2-card1-design animated">
                <div className="feature-row2-card1-content-design">
                  <img src="static/images/Design/row2_1.png" alt="Row 2 Feature 1" className="grid-picture-style" />
                  <h2 className="card-title-style">Empowering Backends</h2>
                  <p className="card-p-style">Our backend systems are built with automation, machine learning, and AI to empower teams and streamline tasks.</p>
                </div>
            </div>
            <div className="feature-row2-card2-design animated">
                <div className="feature-row2-card2-content-design">
                  <img src="static/images/Design/row2_2.png" alt="Row 2 Feature 2" className="grid-picture-style" />
                  <h2 className="card-title-style">Intuitive UI/UX</h2>
                  <p className="card-p-style">Every interface we create prioritises user experience, focusing on ease of use and seamless interaction.</p>
                </div>
            </div>
            <div className="feature-row3-card1-design animated">
                <div className="feature-row3-card1-content-design">
                  <img src="static/images/Design/row3_1.png" alt="Row 3 Feature 1" className="grid-picture-style" />
                  <h2 className="card-title-style">Engaging Social Media Products</h2>
                  <p className="card-p-style">We design compelling tools for social media platforms that enable dynamic content creation and user engagement.</p>
                </div>
            </div>
            <div className="feature-row3-card2-design animated">
                <div className="feature-row3-card2-content-design">
                  <img src="static/images/Design/row3_2.png" alt="Row 1 Feature 2" className="grid-row1-2" />
                </div>
            </div>
        </div>
        <button class="cta-button-modular" onClick={() => setSlideIndex(4)}>Check our Case Studies</button>
      </div>
    );
};


export default Design;
