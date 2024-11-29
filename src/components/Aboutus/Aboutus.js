import React, { useRef, useState, useEffect } from "react";
import "./Aboutus.css";
import Card from "../Careers/Cards/Card";
import Card2 from "../Careers/Cards/Card2";
import Card3 from "../Careers/Cards/Card3";
import Card4 from "../Careers/Cards/Card4";
import Card5 from "../Careers/Cards/Card5";
import Card6 from "../Careers/Cards/Card6";
import Card7 from "../Careers/Cards/Card7";
import Card11 from "../Careers/Cards/Card11";

import VisibilitySensor from "react-visibility-sensor";

import Footer from "../Footer/Footer";

const Aboutus = () => {
  const [slide, setSlide] = useState("left");
  const [text, setText] = useState("");
  const [fix, setFix] = useState(0);
  const [openJob, setOpenJob] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const toggleJob = (jobId) => {
    setOpenJob(openJob === jobId ? null : jobId);
  };

  //know when our component comes into view so we can scroll down.
  function onChange5(isVisible) {
    console.log("Element is now %s", isVisible ? "visible" : "hidden");
    if (isVisible) {
      setSlide("left2");
      setFix(fix + 1);
    }
    if (fix > 1) {
      setSlide("left");
      setFix(0);
    }
  }

  // Check screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="careers-main-container">
      {isMobile ? (
        <div className="contentRow-joinourteam-mobile">
          <div className="illustration-joinourteam">
            <img
              src="static/images/Aboutus/friendgroup.png"
              alt="Illustration"
            />
          </div>
          <div className="textContent-joinourteam-mobile">
            <h1>
              <div className="text-yellow-joinourteam">About Us</div>
              <div className="text-normal-joinourteam">
                At Novatide Labs, we don’t just build software; we build
                solutions tailored to the unique challenges of forward-thinking
                industries. Our mission is simple: to develop custom solutions
                that address the pain points hindering your progress.
              </div>
            </h1>
          </div>
        </div>
      ) : (
        <div className="contentRow-joinourteam">
          <div className="textContent-joinourteam">
            <h1>
              <div className="text-yellow-joinourteam">About Us</div>
              <div className="text-normal-joinourteam">
                At Novatide Labs, we don’t just build software; we build
                solutions tailored to the unique challenges of forward-thinking
                industries. Our mission is simple: to develop custom solutions
                that address the pain points hindering your progress.
              </div>
            </h1>
          </div>
          <div className="illustration-joinourteam">
            <img
              src="static/images/Aboutus/friendgroup.png"
              alt="Illustration"
            />
          </div>
        </div>
      )}
      <div className="careers-container-aboutus">
        <div className="right">
          <section class="stacking-slide">
            <VisibilitySensor>
              <div>
                <Card3
                  title="Values & Ethics:
                  Our Guiding Principles"
                  image="static/images/Careers/aboutus1.svg"
                  color="#171717"
                />
              </div>
            </VisibilitySensor>
          </section>
          <section class="stacking-slide">
            <VisibilitySensor>
              <div>
                <Card4
                  title="Kindness"
                  secondTitle="Innovation and Transparency"
                  image="static/images/Careers/aboutus2a.svg"
                  secondImage="static/images/Careers/aboutus2b.png"
                  longText="At  Novatide Labs, we believe that strong values and ethics are the  foundation of everything we do. Our core principles focus on building a  team with both high Emotional Intelligence (EQ) and Intellectual  Intelligence (IQ). For us, kindness is a prerequisite, along with a deep  intellectual curiosity. Every team member must have the ability to  think laterally while still working effectively within structured  processes.  "
                  secondLongText="We ensure that our operations and product development are driven by  these values. Innovation and transparency are critical to our  decision-making process, and we foster an environment where hierarchy  does not determine the value of an idea. Everyone has the opportunity to  contribute and be heard. By promoting collaboration and open  communication, we ensure that each voice is valued, and the best ideas  can thrive—whether they come from a new hire or a senior leader."
                />
              </div>
            </VisibilitySensor>
          </section>
          <section class="stacking-slide">
            <VisibilitySensor>
              <div>
                <Card11
                  title="Creativity"
                  image="static/images/Careers/aboutus3a.svg"
                  secondImage="static/images/Careers/aboutus3b.svg"
                  longText="At Novatide Labs, our goal is to empower our team to think creatively  and push the boundaries of what is possible, all while remaining  committed to the security and trustworthiness our users expect from us."
                />
              </div>
            </VisibilitySensor>
          </section>

          {/*This is to make a clean space at the bottom of the section*/}
          <section
            style={{ height: 250, width: "100%", backgroundColor: "white" }}
          >
            <VisibilitySensor>
              <div>
                <div
                  style={{
                    height: 150,
                    width: "100%",
                    backgroundColor: "white",
                  }}
                ></div>
              </div>
            </VisibilitySensor>
          </section>
        </div>
      </div>
      <div className="careers-container2-aboutus">
        <div className="teammembers-container">
          <h2 className="team-title-big">Our Team</h2>
          <div className="team-row">
            <div className="team-member-big">
              <div className="team-photo">
                <img src="static/images/Home/aman.svg" alt="Aman Anand" />
              </div>
              <h3 className="team-member-name-big">Aman Anand</h3>
              <p className="team-member-role-big">CEO</p>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/aman-anand-9b4043322/"
                className="linkedin-link-big"
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
              <h3 className="team-member-name-big">Macarena Olivera</h3>
              <p className="team-member-role-big">Head of Management</p>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/macarenaolivera/"
                className="linkedin-link-big"
              >
                in
              </a>
            </div>
          </div>

          <h2 className="team-title">Team Leaders</h2>
          <div className="team-row">
            <div className="team-member">
              <div className="team-photo">
                <img src="static/images/Home/angela.svg" alt="Ángela Eguren" />
              </div>
              <h3 className="team-member-name">
                Ángela
                <br /> Eguren
              </h3>
              <p className="team-member-role">Marketing</p>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/angelaegurenrevilla"
                className="linkedin-link"
              >
                in
              </a>
            </div>
            <div className="team-member">
              <div className="team-photo">
                <img src="static/images/Home/david.svg" alt="David Rodriguez" />
              </div>
              <h3 className="team-member-name">
                David
                <br /> Rodriguez
              </h3>
              <p className="team-member-role">Development</p>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/arnold-david-rodriguez-c-0129109b/"
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
                target="_blank"
                href="https://linkedin.com/"
                className="linkedin-link"
              >
                in
              </a>
            </div>
            <div className="team-member">
              <div className="team-photo">
                <img
                  src="static/images/Home/francisca.svg"
                  alt="Francisca Cagnoni"
                />
              </div>
              <h3 className="team-member-name">
                Francisca
                <br /> Cagnoni
              </h3>
              <p className="team-member-role">Human Resources</p>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/maria-francisca-cagnoni-8a603622b/ "
                className="linkedin-link"
              >
                in
              </a>
            </div>
            <div className="team-member">
              <div className="team-photo">
                <img
                  src="static/images/Home/georgina.svg"
                  alt="Georgina Kontopyrgou"
                />
              </div>
              <h3 className="team-member-name">
                Georgina
                <br /> Kontopyrgou
              </h3>
              <p className="team-member-role">Administrative Leader</p>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/georgina-kontopyrgou-176019329"
                className="linkedin-link"
              >
                in
              </a>
            </div>
            <div className="team-member">
              <div className="team-photo">
                <img
                  src="static/images/Home/tamar.svg"
                  alt="Tamar Voscoboinik"
                />
              </div>
              <h3 className="team-member-name">
                Tamar
                <br /> Voscoboinik
              </h3>
              <p className="team-member-role">Design</p>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/tamar-voscoboinik-75570a216"
                className="linkedin-link"
              >
                in
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Aboutus;
