import React from "react";
import "./Card6.css";

function Card6({ title, image, color, longText, textColor }) {
  return (
    <div className="card6">
      <div className="card6-right">
        <h2>{title}</h2>
        <p>{longText}</p>
      </div>
      <div className="card6-left">
        {image != null && image !== undefined && <img src={image} alt="Icon" />}
      </div>
    </div>
  );
}

export default Card6;
