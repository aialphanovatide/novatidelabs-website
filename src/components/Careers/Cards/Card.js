import React from "react";
import "./Card.css";

function Card({ title, image, color, longText, textColor }) {
  return (
    <div className="card" style={{ backgroundColor: color }}>
      {image != null && image !== undefined && (
        <img
          src={image}
          alt="Icon"
          style={{ width: "100%", height: "220px" }}
        />
      )}
      <h2>{title}</h2>
      <p>{longText}</p>
    </div>
  );
}

export default Card;
