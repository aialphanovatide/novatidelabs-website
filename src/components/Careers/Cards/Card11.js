import React from "react";
import "./Card11.css";

function Card11({ title, image, secondImage, color, longText, textColor }) {
  return (
    <div className="card11">
      <div className="card11-left">
        {image != null && image !== undefined && <img src={image} alt="Icon" />}
      </div>
      <div className="card11-right">
        {secondImage != null && secondImage !== undefined && (
          <img src={secondImage} alt="Second Icon" />
        )}
        <h2>{title}</h2>
        <p>{longText}</p>
      </div>
    </div>
  );
}

export default Card11;
