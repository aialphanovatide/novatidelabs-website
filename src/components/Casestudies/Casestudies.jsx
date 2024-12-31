import React from "react";

import "./Casestudies.css";
import ProjectContainer from "../projectContainer";

const Casestudies = ({openPopup}) => {
  
  return (
    <div className="page_container">
    <div className="contentRow">
          <div className="left-header-design">
            <h1 className="title-black-case">Case<br/>Studies</h1>
            <p className="paragraph-case">We focus on tangible results for each client,<br/>turning challenges into growth opportunities.</p>
            <img
                src="static/images/Casestudies/scrolldown.png"
                alt="Scroll Down"
                className="scroll-icon"
            />
          </div>
          <img src="static/images/Casestudies/computer-girl.png" alt="Illustration" className="ilustration-design ilustration-modular"/>
    </div>
      <ProjectContainer name="AI Alpha" painpoint="Delivering reliable, up-to-date crypto news to users in an automated way." solution="Solution: We developed bespoke news bots for each of the 35 cryptocurrencies that AI Alpha tracks, providing real-time insights for their users." shortName="ai" openPopup={openPopup}/>
      <ProjectContainer name="AIX" painpoint="Offering a Centralised Exchange (CEX) model that doesn’t rely on the traditional order book approach." solution="We integrated decentralised exchange (DEX) functionalities, allowing AIX users to buy directly from a DEX while benefiting from the security of a centralised model." shortName="ai" openPopup={openPopup}/>
      <ProjectContainer name="Key Wallet" painpoint="Building a decentralised wallet experience that institutional users can trust for high-stakes transactions." solution="We implemented a maker-checker feature for large payments, bringing a trusted, bank-standard feature to decentralised finance for enhanced security and trust." shortName="key" openPopup={openPopup}/>
    </div>
  );

};

export default Casestudies;
