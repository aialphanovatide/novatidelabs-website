import React from "react";
import "./Card10.css";

function Card10({ title, image, secondImage, color, longText, textColor }) {
  return (
    <div className="card10">
      <div className="card10-left">
        {image != null && image !== undefined && (
          <img
            src={image}
            alt="Icon"
            style={{
              maxWidth: "433px",
              maxHeight: "300px",
              objectFit: "contain",
            }}
          />
        )}
      </div>
      <div className="card10-column-right">
        {secondImage != null && secondImage !== undefined && (
          <img src={secondImage} alt="Second Icon" />
        )}
        <h2>{title}</h2>
        <p>{longText}</p>
      </div>
    </div>
  );
}

export default Card10;
