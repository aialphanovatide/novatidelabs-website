import React from "react";
import "./Card3.css";

function Card3({ title, image, color, longText, textColor }) {
  return (
    <div className="card3">
      <div className="card3-right">
        <h2 style={{ textAlign: "center" }}>{title}</h2>
        <p>{longText}</p>
      </div>
      <div className="card3-left">
        {image != null && image !== undefined && <img src={image} alt="Icon" />}
      </div>
    </div>
  );
}

export default Card3;
