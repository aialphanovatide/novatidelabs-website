import React from "react";
import "./OurJourney.css";

const OurJourney = () => {
  return (
    <div className="main-container column">
      <h2 className="subtitle">Our Journey</h2>
      <div className="content">
        <img
          src="static/images/Home/yellow-tape.png"
          alt="Yellow years tape"
          className="time-tape"
        />
        {/* Time tape content */}
        <div className="rows-container">
          {/* 2016: beginning */}
          <div className="item">
            <h1 class="tape-number">2016</h1>
            <img
              src="static/images/Home/business.png"
              alt="Beginning"
              class="big-image"
            />
            <div class="text-container">
              <h3 class="row-title">Beginning</h3>
              <p>
                <span className="bold">
                  We recognized significant gaps in the global financial system.
                </span>{" "}
                From working with buyers and suppliers across different
                continents, it became clear that the financial infrastructure
                was outdated, creating numerous inefficiencies and blockages.
              </p>
            </div>
          </div>
          <div class="item relative">
            <div class="yellow-borders-figure" />
            <p class="secondary-text figure-text center">
              We started developing solutions to address these pain points,
              initially focusing on building an infrastructure that would enable
              smoother transactions across borders.
            </p>
          </div>
          {/* 2020: Identification */}
          <div className="item">
            <h1 class="tape-number">2020</h1>
            <img
              src="static/images/Home/identification.png"
              alt="Identification"
              class="medium-image"
            />
            <div class="text-container">
              <h3 class="row-title">Identification</h3>
              <p>
                We noticed that the digital finance space lacked a product that
                could help educate and inform the tens of millions of users
                joining the space every few years.
              </p>
            </div>
          </div>
          {/* 2021: Team creation */}
          <div className="item flex">
            <h1 class="tape-number">2021</h1>
            <div class={window.screen.width < 768 ? "row" : "column"}>
              <img
                src="static/images/Home/member1.png"
                alt="Team member 1"
                class="member-image"
              />
              <img
                src="static/images/Home/member2.png"
                alt="Team member 2"
                class="member-image"
              />
              <img
                src="static/images/Home/member3.png"
                alt="Team member 3"
                class="member-image"
              />
            </div>
            <div class="text-container">
              <h3 class="row-title">Team Creation</h3>
              <p class={`my-2 ${window.screen.width < 768 ? "my-0" : ""}`}>
                <span class="bold">The team began to form </span> when we tested
                our thesis that certain cryptocurrency projects could provide
                the necessary rails to support the development of our ideas.
              </p>
              <p class="secondary-text my-2">
                Aman Anand, the founder and now CEO, worked closely with his
                brother Rajan Anand, who serves as COO, to lead the company’s
                efforts.
              </p>
              <p class="secondary-text my-2">
                Key milestones include hiring key personnel like Macarena
                Olivera in Argentina, who played a pivotal role as Lead Project
                Manager.
              </p>
            </div>
          </div>
          {/* 2022: AI Alpha */}
          <div className="item">
            <h1 class="tape-number">2022</h1>
            <img
              src="static/images/Home/aialpha-phone.png"
              alt="AI Alpha"
              class="big-image"
            />
            <div class="text-container">
              <h3 class="row-title">AI Alpha</h3>
              <p className="bold">We began developing AI Alpha.</p>
              <p>
                It started as a simple Telegram group focused on educating users
                about digital finance but has now evolved into a sophisticated
                AI assistant that provides comprehensive cryptocurrency insights
                in one place.
              </p>
            </div>
          </div>
          {/* 2023: Expansion */}
          <div className="item w-auto">
            <h1 class="tape-number">2023</h1>
            <div class="row">
              <img
                src="static/images/Home/expansion1.png"
                alt="Novatide 1"
                class="expansion-image"
              />
              <img
                src="static/images/Home/expansion2.png"
                alt="Novatide 2"
                class="expansion-image"
              />
            </div>
            <div
              class={`text-container ${
                window.screen.width < 768 ? "" : "w-50 ml-3"
              }`}
            >
              <h3 class="row-title">Expansion</h3>
              <p class="bold">Novatide Labs was officially incorporated.</p>
              <p>
                We expanded further, beginning work on AI Alpha X and Key
                Wallet, each growing into unique platforms offering unparalleled
                security and functionality for their users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurJourney;
