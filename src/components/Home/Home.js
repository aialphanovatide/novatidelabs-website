import React, { useEffect, useState } from "react";
import "./Home.css";
import OurJourney from "./OurJourney/OurJourney.js";
import Footer from "../Footer/Footer.js";

const Home = () => {
  return (
    <div className="home">
      <main
        className={`mainContent ${
          window.screen.width < 768 ? "mobile-grid" : ""
        }`}
      >
        {window.screen.width < 768 ? (
          <>
            <div className="mobile-row">
              <div class="column justify-end">
                <img
                  src="static/images/baseLogoWithText.png"
                  alt="Novatide Labs Logo"
                  className="logo-mobile"
                />
                <div className="textContent">
                  <h1 className="mt-4">Moving</h1>
                </div>
              </div>
              <div class="column">
                <div className="illustration">
                  <img
                    src="static/images/Home/content-one.png"
                    alt="Illustration"
                  />
                </div>
              </div>
            </div>
            <div class="mobile-row">
              <div className="textContent">
                <h1 className="mt-2">Global Finance</h1>
                <h1 className="highlighted-text mt-2">Forward</h1>
              </div>
            </div>
          </>
        ) : (
          <>
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
                <img
                  src="static/images/Home/content-one.png"
                  alt="Illustration"
                />
              </div>
            </div>
          </>
        )}
        {/* Third component: Yellow timeline */}
        {window.screen.width < 768 ? <OurJourney /> : <OurJourney />}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
