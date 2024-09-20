import React from "react";
import "./Card8.css";

function Card8({ title, image, color, longText, textColor }) {
  return (
    <div className="card8">
      <div className="card8-right">
        <h2 style={{ textAlign: "center" }}>{title}</h2>
        <p>{longText}</p>
      </div>
      <div className="card8-left">
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
    </div>
  );
}

export default Card8;
