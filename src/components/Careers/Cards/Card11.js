import React from "react";
import "./Card11.css";

const Card11 = () => {
  return (
    <div className="card11-main-container card11-column">
      <div className="card11-content">
        <img
          src="static/images/Home/second-yellow-tape.png"
          alt="Yellow years tape"
          className="card11-time-tape"
        />
        {/* Time tape content */}
        <div className="card11-rows-container">
          <div className="card11-item">
            <h1 className="card11-tape-number-special">Our Vision</h1>
            <img
              src="static/images/Home/global-map.svg"
              alt="AI Alpha"
              className="card11-big-image-global-map"
            />
            <div className="card11-text-container">
              <h3 className="card11-row-title">Our Mission</h3>
              <p>
                To rebuild the global financial infrastructure to truly reflect
                the dynamic, fast-paced nature of modern business. Finance, as
                it stands today, is decades behind how business is conducted,
                and we aim to reshape that system to empower our customers,
                community members, and users.
              </p>
            </div>
          </div>
          {/* 2021: Team creation */}
          <div className="card11-item">
            <h1 className="card11-tape-number">2025</h1>
            <img
              src="static/images/Home/aialpha-phone.png"
              alt="AI Alpha"
              className="card11-big-image"
            />
            <div className="card11-text-container">
              <h3 className="card11-row-title">AI Alpha</h3>
              <p className="card11-bold">We began developing AI Alpha.</p>
              <p>
                It started as a simple Telegram group focused on educating users
                about digital finance but has now evolved into a sophisticated
                AI assistant that provides comprehensive cryptocurrency insights
                in one place.
              </p>
            </div>
          </div>
          {/* 2022: AI Alpha */}
          <div className="card11-item">
            <h1 className="card11-tape-number">2030</h1>
            <img
              src="static/images/Home/aialpha-phone.png"
              alt="AI Alpha"
              className="card11-big-image"
            />
            <div className="card11-text-container">
              <h3 className="card11-row-title">AI Alpha</h3>
              <p className="card11-bold">We began developing AI Alpha.</p>
              <p>
                It started as a simple Telegram group focused on educating users
                about digital finance but has now evolved into a sophisticated
                AI assistant that provides comprehensive cryptocurrency insights
                in one place.
              </p>
            </div>
          </div>
          {/* 2023: Expansion */}
          <div className="card11-item">
            <h1 className="card11-tape-number">2035</h1>
            <img
              src="static/images/Home/aialpha-phone.png"
              alt="AI Alpha"
              className="card11-big-image"
            />
            <div className="card11-text-container">
              <h3 className="card11-row-title">AI Alpha</h3>
              <p className="card11-bold">We began developing AI Alpha.</p>
              <p>
                It started as a simple Telegram group focused on educating users
                about digital finance but has now evolved into a sophisticated
                AI assistant that provides comprehensive cryptocurrency insights
                in one place.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card11;
