import React from "react";
import "./Card6.css";

function Card6({ title, image, color, longText, textColor }) {
  return (
    <div className="card6">
      <div className="card6-right">
        <h2 style={{ textAlign: "left" }}>{title}</h2>
        <p>{longText}</p>
      </div>
      <div className="card6-left">
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

export default Card6;
