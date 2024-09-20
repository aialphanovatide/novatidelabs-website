import React, { useEffect, useState } from "react";
import "./Home.css";
import OurJourney from "./OurJourney/OurJourney.js";
import Footer from "../Footer/Footer.js";
import VisibilitySensor from "react-visibility-sensor";
import Card from "../Careers/Cards/Card.js";
import Card2 from "../Careers/Cards/Card2.js";
import Card3 from "../Careers/Cards/Card3.js";
import Card4 from "../Careers/Cards/Card4.js";
import Card5 from "../Careers/Cards/Card5.js";
import Card6 from "../Careers/Cards/Card6.js";
import Card7 from "../Careers/Cards/Card7.js";
import Card8 from "../Careers/Cards/Card8.js";
import Card9 from "../Careers/Cards/Card9.js";
import Card10 from "../Careers/Cards/Card10.js";
import Card11 from "../Careers/Cards/Card11.js";

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
      <div className="home-container2">
        <div className="home-right">
          <section className="home-stacking-slide">
            <h2 style={{ marginLeft: "40px" }}></h2>
            <VisibilitySensor>
              <div>
                <Card8
                  title="Values & Ethics:
Our Guiding Principles"
                  image="static/images/Home/icon1.svg"
                  color="#171717"
                  textColor="white"
                />
              </div>
            </VisibilitySensor>
          </section>
          <section className="home-stacking-slide">
            <VisibilitySensor>
              <div>
                <Card9
                  title="Kindness"
                  secondTitle="Innovation & Transparency"
                  image="static/images/Home/icon2.svg"
                  secondImage="static/images/Home/icon3.svg"
                  color="#F5F5F5"
                  longText="At  Novatide Labs, we believe that strong values and ethics are the  foundation of everything we do. Our core principles focus on building a  team with both high Emotional Intelligence (EQ) and Intellectual  Intelligence (IQ). For us, kindness is a prerequisite, along with a deep  intellectual curiosity. Every team member must have the ability to  think laterally while still working effectively within structured  processes.  "
                  secondLongText="We ensure that our operations and product development are driven by  these values. Innovation and transparency are critical to our  decision-making process, and we foster an environment where hierarchy  does not determine the value of an idea. Everyone has the opportunity to  contribute and be heard. By promoting collaboration and open  communication, we ensure that each voice is valued, and the best ideas  can thrive—whether they come from a new hire or a senior leader."
                />
              </div>
            </VisibilitySensor>
          </section>
          <section className="home-stacking-slide">
            <VisibilitySensor>
              <div>
                <Card10
                  title="Creativity"
                  image="static/images/Home/icon4.svg"
                  secondImage="static/images/Home/icon5.svg"
                  color="#F5F5F5"
                  longText="At Novatide Labs, our goal is to empower our team to think creatively  and push the boundaries of what is possible, all while remaining  committed to the security and trustworthiness our users expect from us."
                />
              </div>
            </VisibilitySensor>
          </section>
          <section className="home-stacking-slide">
            <VisibilitySensor>
              <div>
                <Card11 />
              </div>
            </VisibilitySensor>
          </section>
          {/*This is to make a clean space at the bottom of the section*/}
        </div>
      </div>
      <h2 className="home-final-title">Imagine what will come next</h2>

      <div className="teammembers-container">
        <h2 className="team-title">Our Team</h2>
        <div className="team-row">
          <div className="team-member-big">
            <div className="team-photo">
              <img src="static/images/Home/noprofile.jpg" alt="Aman Anand" />
            </div>
            <h3 className="team-member-name">Aman Anand</h3>
            <p className="team-member-role">CEO</p>
            <a
              href="https://linkedin.com/in/aman-anand"
              className="linkedin-link"
            >
              in
            </a>
          </div>
          <div className="team-member-big">
            <div className="team-photo">
              <img src="static/images/Home/noprofile.jpg" alt="Rajan Anand" />
            </div>
            <h3 className="team-member-name">Rajan Anand</h3>
            <p className="team-member-role">COO</p>
            <a
              href="https://linkedin.com/in/rajan-anand"
              className="linkedin-link"
            >
              in
            </a>
          </div>
          <div className="team-member-big">
            <div className="team-photo">
              <img
                src="static/images/Home/macarena.svg"
                alt="Macarena Olivera"
              />
            </div>
            <h3 className="team-member-name">Macarena Olivera</h3>
            <p className="team-member-role">Project Manager</p>
            <a
              href="https://linkedin.com/in/macarena-olivera"
              className="linkedin-link"
            >
              in
            </a>
          </div>
        </div>

        <h2 className="team-title">Team Leaders</h2>
        <div className="team-row">
          <div className="team-member">
            <div className="team-photo">
              <img src="static/images/Home/noprofile.jpg" alt="Ángela Eguren" />
            </div>
            <h3 className="team-member-name">
              Ángela
              <br /> Eguren
            </h3>
            <p className="team-member-role">Marketing</p>
            <a
              href="https://linkedin.com/in/angela-eguren"
              className="linkedin-link"
            >
              in
            </a>
          </div>
          <div className="team-member">
            <div className="team-photo">
              <img src="static/images/Home/noprofile.jpg" alt="David Pajaro" />
            </div>
            <h3 className="team-member-name">
              David
              <br /> Pajaro
            </h3>
            <p className="team-member-role">Development</p>
            <a
              href="https://linkedin.com/in/david-pajaro"
              className="linkedin-link"
            >
              in
            </a>
          </div>
          <div className="team-member">
            <div className="team-photo">
              <img src="static/images/Home/fatima.svg" alt="Fátima Aguirre" />
            </div>
            <h3 className="team-member-name">
              Fátima
              <br /> Aguerre
            </h3>
            <p className="team-member-role">Trading</p>
            <a
              href="https://linkedin.com/in/fatima-aguirre"
              className="linkedin-link"
            >
              in
            </a>
          </div>
          <div className="team-member">
            <div className="team-photo">
              <img
                src="static/images/Home/noprofile.jpg"
                alt="Francisca Cagnoni"
              />
            </div>
            <h3 className="team-member-name">
              Francisca
              <br /> Cagnoni
            </h3>
            <p className="team-member-role">Human Resources</p>
            <a
              href="https://linkedin.com/in/francisca-cagnoni"
              className="linkedin-link"
            >
              in
            </a>
          </div>
          <div className="team-member">
            <div className="team-photo">
              <img
                src="static/images/Home/noprofile.jpg"
                alt="Georgina Kontopyrgou"
              />
            </div>
            <h3 className="team-member-name">
              Georgina
              <br /> Kontopyrgou
            </h3>
            <p className="team-member-role">Administrative Leader</p>
            <a
              href="https://linkedin.com/in/georgina-kontopyrgou"
              className="linkedin-link"
            >
              in
            </a>
          </div>
          <div className="team-member">
            <div className="team-photo">
              <img src="static/images/Home/tamar.svg" alt="Tamar Voscoboinik" />
            </div>
            <h3 className="team-member-name">
              Tamar
              <br /> Voscoboinik
            </h3>
            <p className="team-member-role">Design</p>
            <a
              href="https://linkedin.com/in/tamar-voscoboinik"
              className="linkedin-link"
            >
              in
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
