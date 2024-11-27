import React from "react";
import "./Yellowcard.css";

function Yellowcard() {
  return (
    <div className="teammembers-container">
      <h2 className="team-title">Our Team</h2>
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
            className="linkedin-link"
          >
            in
          </a>
        </div>
        <div className="team-member-big">
          <div className="team-photo">
            <img src="static/images/Home/macarena.svg" alt="Macarena Olivera" />
          </div>
          <h3 className="team-member-name-big">Macarena Olivera</h3>
          <p className="team-member-role-big">Head of Management</p>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/macarenaolivera/"
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
            <img src="static/images/Home/tamar.svg" alt="Tamar Voscoboinik" />
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
  );
}

export default Yellowcard;
