import React from "react";
import "./Card9.css";

function Card9({
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
    <div className="card9">
      <div className="card9-column-left">
        {image != null && image !== undefined && <img src={image} alt="Icon" />}
        <h2>{title}</h2>
        <p>{longText}</p>
      </div>
      <div className="card9-column-right">
        {secondImage != null && secondImage !== undefined && (
          <img src={secondImage} alt="Second Icon" />
        )}
        <h2>{secondTitle}</h2>
        <p>{secondLongText}</p>
      </div>
    </div>
  );
}

export default Card9;
