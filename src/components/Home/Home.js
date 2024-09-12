import React from "react";
import "./Home.css";

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
              Global Finance <br />
              <span>Forward</span>
            </h1>
          </div>
          <div className="illustration">
            <img src="static/images/Home/content-one.png" alt="Illustration" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
