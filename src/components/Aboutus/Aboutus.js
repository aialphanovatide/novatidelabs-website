import React, { useEffect, useState } from "react";
import "./Aboutus.css";
import Footer from "../Footer/Footer.js";

const Aboutus = () => {
  return (
    <div className="Aboutus">
      <main
        className={`mainContent ${
          window.screen.width < 768 ? "mobile-grid" : ""
        }`}
      >
        {window.screen.width < 768 ? (
          <>
            <div class="mobile-row">
              <div className="textContent">
                <h1 className="mt-2">Global Finance</h1>
                <h1 className="highlighted-text mt-2">Forward</h1>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="contentRow">
              <div className="textContent">
                <h1>
                  Solving Tomorrow's <br />
                </h1>
              </div>
            </div>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Aboutus;
