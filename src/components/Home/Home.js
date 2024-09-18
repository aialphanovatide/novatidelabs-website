import React from "react";
import "./Home.css";
import OurJourney from "./OurJourney/OurJourney.js";

const Home = () => {
  return (
    <div className="home">
      <main className="mainContent">
        {/* First row: Logo */}
        <div className="logoRow">
          <img
            src="static/images/baseLogoWithText.png"
            alt="Novatide Labs Logo"
            className="logo"
          />
        </div>
        {/* Second row: Text and Illustration */}
        <div className="contentRow">
          <div className="textContent">
            <h1>
              Moving <br />
              <div className="text-with-shadow">Global Finance </div>
              <span>Forward</span>
            </h1>
          </div>
          <div className="illustration">
            <img src="static/images/Home/content-one.png" alt="Illustration" />
          </div>
        </div>
        {/* Third component: Yellow timeline */}
        <OurJourney />
      </main>
    </div>
  );
};

export default Home;
