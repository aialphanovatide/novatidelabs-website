import React from "react";
import "./Home.css";

const Home = () => {
  const isMobile = window.innerWidth < 768;

  return (
    <div className="home">
      <main className="mainContent-home">
        <div className={`contentRow-home ${isMobile ? "mobile-layout" : ""}`}>
          <div className="textContent-home">
            <img
              src="static/images/baseLogoWithText.png"
              alt="Novatide Labs Logo"
              className="logo-home"
            />
            <h1>
              Solving Tomorrow's <br />
              <div className="text-with-shadow-home">
                Problems
                <br />
                with Today's
              </div>
              <span>Technology</span>
            </h1>
          </div>
          <div className="illustration-home">
            <img src="static/images/Home/content-one.png" alt="Illustration" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
