import React from "react";
import "./Card2.css";

function Card2({ title, image, color, longText, textColor }) {
  return (
    <div className="card2">
      <div className="card2-left">
        {image != null && image !== undefined && <img src={image} alt="Icon" />}
      </div>
      <div className="card2-right">
        <h2>{title}</h2>
        <p>{longText}</p>
      </div>
    </div>
  );
}

export default Card2;
