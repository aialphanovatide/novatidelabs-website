import React, { useRef, useState, useEffect } from "react";
import "./Careers.css";
import Card from "./Cards/Card";
import Card2 from "./Cards/Card2";
import Card3 from "./Cards/Card3";
import Card4 from "./Cards/Card4";
import Card5 from "./Cards/Card5";
import Card6 from "./Cards/Card6";
import Card7 from "./Cards/Card7";

import VisibilitySensor from "react-visibility-sensor";
import Footer from "../Footer/Footer";

const Careers = () => {
  const [slide, setSlide] = useState("left");
  const [text, setText] = useState("");
  const [fix, setFix] = useState(0);
  const [openJob, setOpenJob] = useState(null);

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

  return (
    <div className="careers-main-container">
      <h2 style={{ marginLeft: "100px" }}>Join Our Team</h2>
      <h3 style={{ marginLeft: "100px", width: "650px" }}>
        At Novatide Labs, we’re building the future of global finance. Our
        diverse, talented team plays a key role in driving this vision forward,
        and we are always on the lookout for passionate individuals who want to
        make an impact.
      </h3>
      <div className="careers-container">
        <div className="right">
          <section class="stacking-slide">
            <h2 style={{ marginLeft: "40px" }}></h2>
            <VisibilitySensor>
              <div>
                <Card
                  title="Company Culture"
                  color="#171717"
                  textColor="white"
                  longText="Our culture is centred around collaboration, curiosity, and proactive communication. We believe that innovation thrives in an environment where respect, continuous learning, and initiative are valued. The following principles guide how we work together."
                />
              </div>
            </VisibilitySensor>
          </section>
          <section class="stacking-slide">
            <VisibilitySensor>
              <div>
                <Card2
                  title="Communication & Respect"
                  image="static/images/Careers/card2.svg"
                  color="#F5F5F5"
                  longText="At Novatide Labs, we believe that effective communication is crucial to our success. Clear, timely, and respectful exchanges help us avoid bottlenecks and keep operations running smoothly. Respect is central to our culture, and we value professionalism in all communications, while recognizing the importance of our team’s diversity. We encourage open, respectful dialogue to promote mutual understanding and collaboration across different countries and cultures"
                />
              </div>
            </VisibilitySensor>
          </section>
          <section class="stacking-slide">
            <VisibilitySensor>
              <div>
                <Card3
                  title="Continuous Learning"
                  image="static/images/Careers/card3.svg"
                  color="#171717"
                  longText="Curiosity and continuous improvement are key at Novatide Labs. We encourage everyone to actively seek feedback and learn from their experiences. Whether it’s through formal reviews or casual advice, we value team members who are committed to their personal and professional growth, contributing to the long-term success of the company."
                />
              </div>
            </VisibilitySensor>
          </section>
          <section class="stacking-slide">
            <VisibilitySensor>
              <div>
                <Card4
                  title="Initiative"
                  secondTitle="There are no silly questions"
                  image="static/images/Careers/card4.svg"
                  secondImage="static/images/Careers/card4b.svg"
                  longText="We appreciate individuals who take initiative. Sharing ideas or identifying areas for improvement is always encouraged, as proactive contributions help drive the company forward. A culture of continuous improvement depends on everyone’s efforts to recognize opportunities and take action"
                  secondLongText="At Novatide Labs, curiosity is always welcomed. Exploring how things work and considering ways to improve them can enhance your understanding of the company and your role. Curiosity helps drive innovation, and we appreciate team members who are eager to push boundaries"
                />
              </div>
            </VisibilitySensor>
          </section>
          <section class="stacking-slide">
            <VisibilitySensor>
              <div>
                <Card5
                  title="Kindness"
                  image="static/images/Careers/card5.svg"
                  longText="This  is one of our core values. We believe that empathy and consideration help cultivate a supportive and positive work environment.
 Being kind means understanding and respecting the perspectives of our colleagues, offering support when needed, and addressing conflicts with compassion. Our aim is to foster a workplace where everyone feels valued, which ultimately contributes to our shared success and well-being
"
                />
              </div>
            </VisibilitySensor>
          </section>
          <section class="stacking-slide">
            <VisibilitySensor>
              <div>
                <Card6
                  title="Responsibility"
                  image="static/images/Careers/card6.svg"
                  longText="We encourage team members to take ownership of their tasks, meet deadlines, and contribute to the company's success. This includes being accountable for your work, addressing challenges with initiative, and delivering quality results.
Being dependable and following through on commitments helps build trust within the team and supports our shared goals."
                />
              </div>
            </VisibilitySensor>
          </section>
          <section class="stacking-slide">
            <VisibilitySensor>
              <div>
                <Card7
                  title="Resilience"
                  image="static/images/Careers/card7.svg"
                  longText="At Novatide Labs, we are dedicated to supporting personal growth. We see constructive criticism as an opportunity to improve, rather than a setback. Feedback—whether from colleagues, supervisors, or self-reflection—is an important part of professional development and helps us enhance our skills. By staying open to feedback and willing to adapt, we create a culture that promotes continuous personal and team growth.
"
                />
              </div>
            </VisibilitySensor>
          </section>
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
      <div className="careers-container2">
        <h2>Application Process</h2>
        <div className="application-process">
          <div className="process-left">
            <h3>
              Ready to make an impact at Novatide Labs?
              <br />
              Here's how to apply:
            </h3>
            <p></p>
          </div>
          <div className="process-right">
            <div className="process-step">
              <h3>1</h3>
              <div>
                <h4>Explore Opportunities</h4>
                <p>
                  Click on the position that interests you to access the
                  application form.
                </p>
              </div>
            </div>
            <div className="process-step">
              <h3>2</h3>
              <div>
                <h4>Submit Your Application</h4>
                <p>Complete the form and submit it to us.</p>
              </div>
            </div>
            <div className="process-step">
              <h3>3</h3>
              <div>
                <h4>Interview Rounds</h4>
                <p>
                  If selected, you will be invited to an initial interview. This
                  will be followed by additional rounds with our HR team and
                  CEO.
                </p>
              </div>
            </div>
            <div className="process-step">
              <h3>4</h3>
              <div>
                <h4>
                  Join <br /> Our Team
                </h4>
                <p>
                  Successful candidates will receive an offer and can look
                  forward to starting their journey with us!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="job-openings-section-container">
        {" "}
        <div className="job-openings-section">
          <h2>Current Job Openings</h2>
          <p className="section-description">
            Explore the opportunities to be part of a cutting-edge fintech
            company. You can also stay updated by visiting our LinkedIn page for
            more listings and company updates.
          </p>

          <div className="job-opening" onClick={() => toggleJob(1)}>
            <div className="job-header">
              <img src="static/images/Careers/icon5.svg" alt="MBA Graduate" />
              <span className="careers-job-title"> MBA Graduate</span>
              <span className="careers-plus-icon">
                {openJob === 1 ? "-" : "+"}
              </span>
            </div>
            {openJob === 1 && (
              <div className="job-content">
                <p>
                  We are looking for a strategic MBA Graduate to join our team.
                  In this role, you will engage in various projects across
                  different business areas, contributing to strategic
                  initiatives, market analysis, business development, and
                  operational improvements.
                </p>
                <h3>Responsibilities:</h3>

                <ul className="job-details-list">
                  <li>Create business plans.</li>
                  <li>Conduct research to optimise business models.</li>
                  <li>
                    Coordinate with external teams and manage multiple projects.
                  </li>
                  <li>
                    Apply agile and strategic thinking to enhance business
                    processes.
                  </li>
                  <li>
                    Present findings and recommendations to senior management.
                  </li>
                </ul>
                <h3>Requirements:</h3>
                <ul className="job-details-list">
                  <li>MBA degree.</li>
                  <li>Strategic, results-driven mindset.</li>
                  <li>Strong analytical and communication skills.</li>
                  <li>Ability to work independently and collaboratively.</li>
                  <li>Proficiency in English.</li>
                </ul>
                <button className="apply-button">Apply</button>
              </div>
            )}
          </div>

          <div className="job-opening-yellow" onClick={() => toggleJob(2)}>
            <div className="job-header-different">
              <img src="static/images/Careers/icon6.svg" alt="Video Editor" />
              <span className="careers-job-title"> Video Editor</span>
              <span className="careers-plus-icon">
                {openJob === 2 ? "-" : "+"}
              </span>
            </div>
            {openJob === 2 && (
              <div className="job-content">
                <p>
                  We are hiring a skilled Content Creator for our marketing
                  team. The role focuses on creating engaging short videos for
                  social media using fast editing techniques and AI tools, while
                  ensuring content aligns with our brand.
                </p>
                <h3>Responsibilities:</h3>

                <ul className="job-details-list">
                  <li>
                    Use AI tools and fast video editing to turn text into
                    compelling video content.
                  </li>
                  <li>Develop creative concepts with the marketing team.</li>
                  <li>
                    Produce short videos for platforms like TikTok, Instagram,
                    and LinkedIn.
                  </li>
                  <li>
                    Ensure videos reflect the Novatide Labs brand and enhance
                    visual storytelling.
                  </li>
                  <li>
                    Stay updated on video content trends and best practices.
                  </li>
                  <li>
                    Manage multiple projects, meeting deadlines and quality
                    standards.
                  </li>
                </ul>
                <h3>Requirements:</h3>
                <ul className="job-details-list">
                  <li>
                    Experience in content creation, preferably in tech or
                    innovation.
                  </li>
                  <li>
                    Proficiency in video editing software (e.g., Adobe Premiere
                    Pro, Final Cut Pro).
                  </li>
                  <li>
                    Knowledge of AI video creation tools and social media video
                    specs.
                  </li>
                  <li>Excellent communication and collaboration skills.</li>
                  <li>
                    Fluent in English, with a portfolio of relevant social media
                    video work.
                  </li>
                </ul>
                <button className="apply-button">Apply</button>
              </div>
            )}
          </div>

          <div className="job-opening" onClick={() => toggleJob(3)}>
            <div className="job-header">
              <img
                src="static/images/Careers/icon7.svg"
                alt="Quality Assurance Engineer"
              />
              <span className="careers-job-title">
                {" "}
                Quality Assurance Engineer
              </span>
              <span className="careers-plus-icon">
                {openJob === 3 ? "-" : "+"}
              </span>
            </div>
            {openJob === 3 && (
              <div className="job-content">
                <p>
                  We are looking for a skilled QA Engineer to join our team and
                  ensure the quality of our diverse software products, including
                  Python backend services, React Native mobile apps, static
                  websites, React web apps, and dashboards.
                </p>
                <h3>Responsibilities:</h3>

                <ul className="job-details-list">
                  <li>
                    Backend Testing: Design and execute test cases for Python
                    server endpoints, perform API testing, and conduct unit and
                    integration tests.
                  </li>
                  <li>
                    Mobile Application Testing: Test React Native apps on iOS
                    and Android, perform functional and performance tests, and
                    use mobile testing frameworks.
                  </li>
                  <li>
                    Web Application Testing: Test static websites and
                    React-based web applications for functionality,
                    responsiveness, and cross-browser compatibility.
                  </li>
                  <li>
                    General QA Tasks: Create and maintain test plans, execute
                    manual and automated tests, report and track bugs,
                    collaborate with developers, and improve testing processes.
                  </li>
                </ul>
                <h3>Required Skills:</h3>
                <ul className="job-details-list">
                  <li>
                    Technical Skills: Proficiency in Python, testing frameworks
                    (e.g., pytest), API testing tools, and experience with web
                    technologies (HTML, CSS, JavaScript).
                  </li>
                  <li>
                    Testing Skills: Strong understanding of QA methodologies,
                    experience with both manual and automated testing, test
                    management tools, and performance testing concepts.
                  </li>
                  <li>
                    Soft Skills: Excellent analytical and problem-solving
                    abilities, attention to detail, effective communication, and
                    time management.
                  </li>
                </ul>
                <button className="apply-button">Apply</button>
              </div>
            )}
          </div>

          <div className="job-opening-yellow" onClick={() => toggleJob(4)}>
            <div className="job-header">
              <img
                src="static/images/Careers/icon8.svg"
                alt="Developer Internship"
              />
              <span className="careers-job-title"> Developer Internship</span>
              <span className="careers-plus-icon">
                {openJob === 4 ? "-" : "+"}
              </span>
            </div>
            {openJob === 4 && (
              <div className="job-content">
                <p>
                  We are  hiring a Software Development Intern to join their
                  innovative development team. This role offers hands-on
                  experience with real-world software projects, focusing on
                  process automation, feature development, and website creation.
                </p>
                <h3>Key Responsibilities:</h3>

                <ul className="job-details-list">
                  <li>
                    Assist in automating processes, building new software
                    features, and creating websites.
                  </li>
                  <li>
                    Collaborate with the Project Manager, Team Leader, and
                    Developers via Slack and Monday.com.
                  </li>
                  <li>
                    Develop skills in tools like Git and GitHub, and enhance
                    problem-solving abilities.
                  </li>
                  <li>
                    Take ownership of tasks, contribute innovative ideas, and
                    support team efforts.
                  </li>
                </ul>
                <h3>Required Skills:</h3>
                <ul className="job-details-list">
                  <li>Proficiency in JavaScript and Python.</li>
                  <li>
                    Familiarity with HTML, CSS, Node.js, Flask, PostgreSQL,
                    Redis, Git, GitHub, and preferred development IDEs.
                  </li>
                  <li>
                    A background in Computer Science, Machine Learning, or
                    related fields is beneficial but not required.
                  </li>
                </ul>
                <button className="apply-button">Apply</button>
              </div>
            )}
          </div>

          <div className="job-opening" onClick={() => toggleJob(5)}>
            <div className="job-header">
              <img
                src="static/images/Careers/icon9.svg"
                alt="Designer Internship"
              />
              <span className="careers-job-title"> Designer Internship</span>
              <span className="careers-plus-icon">
                {openJob === 5 ? "-" : "+"}
              </span>
            </div>
            {openJob === 5 && (
              <div className="job-content">
                <p>
                  We are seeking a motivated Designer Intern to join our team.
                  This role offers hands-on experience with real-world design
                  projects, focusing on identity and web page design while
                  developing skills in various design processes.
                </p>
                <h3>Key Responsibilities:</h3>

                <ul className="job-details-list">
                  <li>
                    Work on identity and simple web page design projects,
                    incorporating information design.
                  </li>
                  <li>
                    Collaborate closely with the Design Team, including the Head
                    of Design and Junior Designer, using Slack and Monday.com.
                  </li>
                  <li>
                    Develop skills in design tools and techniques, enhance
                    creativity, and learn to work effectively in a team.
                  </li>
                  <li>
                    Take ownership of tasks, contribute innovative ideas, and
                    support team project completion.
                  </li>
                </ul>
                <h3>Required Skills:</h3>
                <ul className="job-details-list">
                  <li>Proficiency in Adobe Illustrator and Photoshop.</li>
                  <li>Basic knowledge of Figma.</li>
                  <li>
                    Background in graphic design, visual arts, or related fields
                    is beneficial but not required.
                  </li>
                </ul>
                <button className="apply-button">Apply</button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="careers-final-section">
        <h2 className="careers-final-heading">
          We can’t wait to hear from you!
        </h2>
        <img
          className="careers-final-image"
          src="static/images/Careers/icon4.svg"
          alt="Skateboarder with laptop"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Careers;
