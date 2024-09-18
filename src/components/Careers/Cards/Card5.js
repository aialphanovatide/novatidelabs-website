import React from "react";
import "./Card5.css";

function Card5({ title, image, color, longText, textColor }) {
  return (
    <div className="card5">
      <div className="card5-left">
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
      <div className="card5-right">
        <h2 style={{ textAlign: "left" }}>{title}</h2>
        <p>{longText}</p>
      </div>
    </div>
  );
}

export default Card5;
