import React from "react";
import "./Card7.css";

function Card7({ title, image, color, longText, textColor }) {
  return (
    <div className="card7" style={{ backgroundColor: color }}>
      <div className="card7-content">
        {image && <img src={image} alt="Icon" className="card7-image" />}
        <h2>{title}</h2>
        <p>{longText}</p>
      </div>
    </div>
  );
}

export default Card7;
