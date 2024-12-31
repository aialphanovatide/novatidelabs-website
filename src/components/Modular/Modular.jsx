import React, { useEffect, useState } from "react";
import "./Modular.css";

const Modular = ({isActive, isScrollFinished, setSlideIndex }) => {

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
        { threshold: .8 } // Ajusta el umbral según sea necesario
      );
  
      const elements = document.querySelectorAll('.animated');
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
            <h1 className="text-yellow-design">Modular</h1>
            <div className="text-yellow-modular-second">Architecture</div>
            <img
                src="static/images/Design/scrolldown.png"
                alt="Scroll Down"
                className="scroll-icon"
            />
          </div>
          <img src="static/images/Modular/books-falling.png" alt="Illustration" className="ilustration-design ilustration-modular"/>
        </div>
        <div className="grid-section-modular">
            <div className="feature-row1-card1-modular animated">
                <div className="feature-row1-card1-content-modular">
                  <img src="static/images/modular/row1_1.png" alt="Row 1 Feature 1" className="grid-picture-style" />
                  <h2 className="card-title-style">Customizable Modules</h2>
                  <p className="card-p-style">Every module we build is adaptable to your unique needs, offering flexible solutions that can grow and evolve with your business.</p>
                </div>
            </div>
            <div className="feature-row1-card2-modular animated">
                <div className="feature-row1-card2-content-modular">
                  <img src="static/images/modular/row1_2.png" alt="Row 1 Feature 2" className="grid-row1-2" />
                </div>
            </div>
            <div className="feature-row2-card1-modular animated">
                <div className="feature-row2-card1-content-modular">
                  <img src="static/images/modular/row2_1.png" alt="Row 2 Feature 1" className="grid-picture-style" />
                  <h2 className="card-title-style">Efficiency and Cost-Effectiveness</h2>
                  <p className="card-p-style">Using a balanced blend of talented developers and our streamlined Agentic Workflow, we deliver products efficiently and competitively.</p>
                </div>
            </div>
            <div className="feature-row2-card2-modular animated">
                <div className="feature-row2-card2-content-modular">
                  <img src="static/images/modular/row2_2.png" alt="Row 2 Feature 2" className="grid-picture-style" />
                  <h2 className="card-title-style">Speed Optimization</h2>
                  <p className="card-p-style">From front-end interfaces to back-end processing, our applications are designed for speed and reliability.</p>
                </div>
            </div>
        </div>
        <button class="cta-button-modular" onClick={() => setSlideIndex(4)}>Check our Case Studies</button>
      </div>
    );
  };

export default Modular;
