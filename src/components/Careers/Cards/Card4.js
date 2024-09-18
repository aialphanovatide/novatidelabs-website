import React from "react";
import "./Card4.css";

function Card4({
  title,
  secondTitle,
  image,
  secondImage,
  color,
  longText,
  secondLongText,
  textColor,
}) {
  return (
    <div className="card4">
      <div className="card4-column-left">
        {image != null && image !== undefined && <img src={image} alt="Icon" />}
        <h2>{title}</h2>
        <p>{longText}</p>
      </div>
      <div className="card4-column-right">
        {secondImage != null && secondImage !== undefined && (
          <img src={secondImage} alt="Second Icon" />
        )}
        <h2>{secondTitle}</h2>
        <p>{secondLongText}</p>
      </div>
    </div>
  );
}

export default Card4;
