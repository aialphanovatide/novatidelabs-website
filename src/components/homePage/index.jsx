import React, { useEffect, useState } from "react";
import "./homePage.css";
import { useLocation } from "react-router-dom";
import Carousel from "../carousel";

function HomePage({ slideIndex, setSlideIndex, slide }) {
  const [isScrollFinished, setIsScrollFinished] = useState(false);
  const [randomScroll, setRandomScroll] = useState(0);
  const location = useLocation();
  const changeRandom = () => {
    let newRandomScroll = Math.floor(Math.random() * 1) + 1;
    if (newRandomScroll === randomScroll) {
      newRandomScroll += 1;
      setRandomScroll(newRandomScroll);
    } else {
      setRandomScroll(newRandomScroll);
    }
  };

  useEffect(() => {
    changeRandom();
    window.scrollTo({ top: randomScroll, behavior: "smooth" });

    setIsScrollFinished(false); // Reiniciar la bandera cuando cambie el índice de la diapositiva
    const handleScrollEnd = () => {
      clearTimeout(window.scrollTimeout);
      window.scrollTimeout = setTimeout(() => {
        setIsScrollFinished(true);
      }, 30); // Ajusta el tiempo de retraso según sea necesario
    };

    window.addEventListener("scroll", handleScrollEnd);

    return () => {
      window.removeEventListener("scroll", handleScrollEnd);
    };
  }, [slideIndex]);

  const [selectedImage, setSelectedImage] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [expandedItem, setExpandedItem] = useState(null);

  const openPopup = (numberImg, shortName) => {
    const imageSrc = `static/images/Projects/${shortName}/${numberImg}.svg`;
    setSelectedImage(imageSrc);
    setZoomLevel(1);
  };

  const closePopup = () => {
    setSelectedImage(null);
  };

  const zoomIn = () => {
    setZoomLevel((prevZoom) => Math.min(prevZoom + 0.2, 4.5)); // Increase zoom level, max 3
  };

  const zoomOut = () => {
    setZoomLevel((prevZoom) => Math.max(prevZoom - 0.2, 1)); // Decrease zoom level, min 1
  };
  const toggleExpand = (item) => {
    // Toggle expanded item
    setExpandedItem(expandedItem === item ? null : item);
  };

  return (
    <div className="homepage_container">
      <Carousel
        slideIndex={slideIndex}
        setSlideIndex={setSlideIndex}
        isScrollFinished={isScrollFinished}
        openPopup={openPopup}
      />
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
  );
}

export default HomePage;
