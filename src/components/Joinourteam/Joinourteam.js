import React, { useRef, useState, useEffect } from "react";
import "./Joinourteam.css";
import Card from "../Careers/Cards/Card";
import Card2 from "../Careers/Cards/Card2";
import Card3 from "../Careers/Cards/Card3";
import Card4 from "../Careers/Cards/Card4";
import Card5 from "../Careers/Cards/Card5";
import Card6 from "../Careers/Cards/Card6";
import Card7 from "../Careers/Cards/Card7";

import VisibilitySensor from "react-visibility-sensor";

import Footer from "../Footer/Footer";

const Joinourteam = () => {
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
              src="static/images/Joinourteam/computer-call.png"
              alt="Illustration"
            />
          </div>
          <div className="textContent-joinourteam-mobile">
            <h1>
              <div className="text-yellow-joinourteam">Join Our Team</div>
              <div className="text-normal-joinourteam">
                At Novatide Labs, we’re building the future of global finance.
                Our diverse, talented team plays a key role in driving this
                vision forward, and we are always on the lookout for passionate
                individuals who want to make an impact.
              </div>
            </h1>
          </div>
        </div>
      ) : (
        <div className="contentRow-joinourteam">
          <div className="textContent-joinourteam">
            <h1>
              <div className="text-yellow-joinourteam">Join</div>
              <div className="text-yellow-joinourteam">Our Team</div>
              <div className="text-normal-joinourteam">
                At Novatide Labs, we’re building the future of global finance.
                Our diverse, talented team plays a key role in driving this
                vision forward, and we are always on the lookout for passionate
                individuals who want to make an impact.
              </div>
            </h1>
          </div>
          <div className="illustration-joinourteam">
            <img
              src="static/images/Joinourteam/computer-call.png"
              alt="Illustration"
            />
          </div>
        </div>
      )}
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
                  longText="At Novatide Labs, we believe that effective communication is crucial to our success. Clear, timely, and respectful exchanges help us avoid bottlenecks and keep operations running smoothly. Respect is central to our culture, and we value professionalism in all communications, while recognizing the importance of our team’s diversity. We encourage open, respectful dialogue to promote mutual understanding and collaboration across different countries and cultures."
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

            <div
              className={`job-content ${
                openJob === 1 ? "job-content-expanded" : ""
              }`}
            >
              <p>
                We are looking for a strategic MBA Graduate to join our team. In
                this role, you will engage in various projects across different
                business areas, contributing to strategic initiatives, market
                analysis, business development, and operational improvements.
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
              <a
                href="https://forms.gle/jAkZXEmeQCmeNvE59"
                className="apply-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply
              </a>
            </div>
          </div>

          <div className="job-opening-yellow" onClick={() => toggleJob(2)}>
            <div className="job-header-different">
              <img src="static/images/Careers/icon6.svg" alt="Video Editor" />
              <span className="careers-job-title"> Video Editor</span>
              <span className="careers-plus-icon">
                {openJob === 2 ? "-" : "+"}
              </span>
            </div>
            <div
              className={`job-content ${
                openJob === 2 ? "job-content-expanded" : ""
              }`}
            >
              <p>
                We are hiring a skilled Content Creator for our marketing team.
                The role focuses on creating engaging short videos for social
                media using fast editing techniques and AI tools, while ensuring
                content aligns with our brand.
              </p>
              <h3>Responsibilities:</h3>

              <ul className="job-details-list">
                <li>
                  Use AI tools and fast video editing to turn text into
                  compelling video content.
                </li>
                <li>Develop creative concepts with the marketing team.</li>
                <li>
                  Produce short videos for platforms like TikTok, Instagram, and
                  LinkedIn.
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
              <a
                href="https://forms.gle/BG1N5jLauPvQpgNA6"
                className="apply-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply
              </a>
            </div>
          </div>

          <div className="job-opening" onClick={() => toggleJob(3)}>
            <div className="job-header">
              <img src="static/images/Careers/icon7.svg" alt="Bookkeeper" />
              <span className="careers-job-title"> Bookkeeper</span>
              <span className="careers-plus-icon">
                {openJob === 3 ? "-" : "+"}
              </span>
            </div>
            <div
              className={`job-content ${
                openJob === 3 ? "job-content-expanded" : ""
              }`}
            >
              <p>
                Our company is seeking a detail-oriented and proactive
                Bookkeeper to support the financial administration processes.
                This role is ideal for someone who can manage traditional
                financial tasks and ensure that the company’s financial
                operations run smoothly and accurately.
              </p>
              <h3>Responsibilities:</h3>

              <ul className="job-details-list">
                <li>
                  Maintain accurate and up-to-date financial records, including
                  tracking income, expenses, and budgets.
                </li>
                <li>
                  Oversee accounts payable and accounts receivable, ensuring
                  timely and accurate processing of invoices and payments, as
                  well as effective management of incoming funds and outstanding
                  balance
                </li>
                <li>
                  Reconcile accounts, prepare financial statements, and assist
                  in financial audits to ensure accuracy and compliance.
                </li>
                <li>
                  Coordinate closely with the Management Stakeholder to ensure
                  all financial policies are followed.
                </li>
                <li>
                  Prepare monthly, quarterly, and annual financial reports,
                  providing insights to management when necessary.
                </li>
                <li>
                  Monitor and maintain budgetary controls, flagging any
                  discrepancies or issues as they arise.
                </li>
                <li>
                  Contribute to continuous improvement of financial processes,
                  suggesting enhancements to streamline workflows.
                </li>
              </ul>
              <h3>Required Skills:</h3>
              <ul className="job-details-list">
                <li>
                  Proven experience in bookkeeping, accounting, or financial
                  administration.
                </li>
                <li>
                  Excellent organizational skills and keen attention to detail,
                  with the ability to effectively track budgets and
                  transactions.
                </li>
                <li>
                  Capacity to work independently, handling tasks with minimal
                  supervision while meeting deadlines.
                </li>
                <li>
                  Proficiency with accounting tools and software (e.g.,
                  QuickBooks, Excel, or other financial management software).
                </li>
                <li>
                  Basic knowledge of financial compliance standards and
                  practices.
                </li>
              </ul>
              <h3>Preferred Qualifications</h3>
              <ul className="job-details-list">
                <li>
                  Associate degree or higher in Accounting, Finance, or a
                  related field.
                </li>
                <li>
                  Experience working in a small to medium-sized business
                  environment.
                </li>
                <li>
                  Strong communication skills, with the ability to relay
                  financial information clearly to non-financial stakeholders.
                </li>
              </ul>
              <h3>Position Type</h3>
              <ul className="job-details-list">
                <li>
                  This is a part-time or freelance position with flexible hours.
                </li>
              </ul>
              <a
                href="https://forms.gle/QaW5Z2GcirSjpHbX8"
                className="apply-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply
              </a>
            </div>
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
            <div
              className={`job-content ${
                openJob === 4 ? "job-content-expanded" : ""
              }`}
            >
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
                  Familiarity with HTML, CSS, Node.js, Flask, PostgreSQL, Redis,
                  Git, GitHub, and preferred development IDEs.
                </li>
                <li>
                  A background in Computer Science, Machine Learning, or related
                  fields is beneficial but not required.
                </li>
              </ul>
              <a
                href="https://forms.gle/P4eFHVzTSfEN14Gq6"
                className="apply-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply
              </a>
            </div>
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
            <div
              className={`job-content ${
                openJob === 5 ? "job-content-expanded" : ""
              }`}
            >
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
              <a
                href="https://forms.gle/GbuaLtENxxyW9E7Q8"
                className="apply-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply
              </a>
            </div>
          </div>
          <div className="job-opening-yellow" onClick={() => toggleJob(6)}>
            <div className="job-header">
              <img
                src="static/images/Careers/icon8.svg"
                alt="Developer Cryptographer"
              />
              <span className="careers-job-title">Developer Cryptographer</span>
              <span className="careers-plus-icon">
                {openJob === 6 ? "-" : "+"}
              </span>
            </div>
            <div
              className={`job-content ${
                openJob === 6 ? "job-content-expanded" : ""
              }`}
            >
              <p>
                We are seeking a highly skilled Developer Cryptographer to join
                our team and contribute to the development of secure,
                decentralised wallets. The ideal candidate will have strong
                expertise in cryptography, decentralised finance (DeFi), and
                blockchain technologies, with experience in building
                decentralised wallets such as MetaMask, Rabi, or similar.
              </p>
              <h3>Key Responsibilities:</h3>

              <ul className="job-details-list">
                <li>
                  Design, implement, and maintain cryptographic protocols for
                  secure decentralized wallet systems.
                </li>
                <li>
                  Collaborate with blockchain developers to integrate
                  cryptographic features into the wallet infrastructure.
                </li>
                <li>
                  Ensure the security and scalability of decentralized wallet
                  solutions.
                </li>
                <li>
                  Conduct audits of cryptographic code and architecture to
                  identify vulnerabilities and ensure secure practices.
                </li>
                <li>
                  Work with multi-signature wallets, encryption schemes, and
                  other security-focused technologies.
                </li>
                <li>
                  Stay updated on the latest trends and developments in
                  cryptography, blockchain, and decentralised finance.
                </li>
              </ul>
              <h3>Required Skills:</h3>
              <ul className="job-details-list">
                <li>
                  Strong understanding of cryptographic principles, including
                  encryption, digital signatures, and hashing algorithms.
                </li>
                <li>
                  Experience with blockchain development, particularly Ethereum
                  and Layer 2 scaling solutions.
                </li>
                <li>
                  Proficiency in programming languages such as Solidity, Rust,
                  or Go.
                </li>
                <li>
                  Familiarity with smart contract security and best practices in
                  wallet development.
                </li>
                <li>
                  Knowledge of DeFi protocols and decentralised application
                  (dApp) ecosystems.
                </li>
              </ul>
              <h3>Preferred Qualifications</h3>
              <ul className="job-details-list">
                <li>
                  Experience working in a decentralized finance (DeFi) or Web3
                  environment.
                </li>
                <li>
                  Familiarity with Layer 2 solutions, rollups, and
                  zero-knowledge proofs.
                </li>
                <li>
                  Previous contributions to open-source blockchain projects or
                  protocols.
                </li>
                <li>Strong analytical and problem-solving skills.</li>
                <li>
                  Excellent communication skills and ability to work in a
                  collaborative environment.
                </li>
                <li>
                  Proven experience in developing and deploying decentralized
                  wallets (e.g., MetaMask, Rabi, or similar).
                </li>
              </ul>
              <h3>Position Type</h3>
              <ul className="job-details-list">
                <li>This is a full-time remote position.</li>
              </ul>
              <a
                href="https://forms.gle/Jevw8h9MWMJrF78L7"
                className="apply-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply
              </a>
            </div>
          </div>
          <div className="job-opening" onClick={() => toggleJob(7)}>
            <div className="job-header">
              <img src="static/images/Careers/icon7.svg" alt="Bookkeeper" />
              <span className="careers-job-title">
                PR & Communications Specialist - Crypto Sector
              </span>
              <span className="careers-plus-icon">
                {openJob === 7 ? "-" : "+"}
              </span>
            </div>
            <div
              className={`job-content ${
                openJob === 7 ? "job-content-expanded" : ""
              }`}
            >
              <p>
                We are looking for a PR & Communications Specialist with a deep
                understanding of the cryptocurrency and blockchain industry.
                This role is critical in shaping and amplifying our brand
                narrative, driving media engagement, and building strong
                relationships within the crypto ecosystem. The ideal candidate
                will combine strategic thinking with hands-on expertise in
                crafting compelling stories, managing communications across
                various channels, and positioning our organisation as a leader
                in the crypto space. This is a unique opportunity for a
                communications professional who lives and breathes crypto,
                thrives in fast-paced environments, and is passionate about
                revolutionising the future of finance and technology.
              </p>
              <h3>Key Responsibilities:</h3>

              <ul className="job-details-list">
                <li>
                  Strategic Communications: Develop and execute a comprehensive
                  PR and communications strategy tailored to the crypto sector,
                  aligning with company goals.
                </li>
                <li>
                  Media Relations: Build and maintain strong relationships with
                  crypto-focused journalists, influencers, and media outlets to
                  secure consistent coverage.
                </li>
                <li>
                  Content Creation: Craft compelling press releases, thought
                  leadership articles, blog posts, and other communications
                  materials with a focus on blockchain and cryptocurrency
                  trends.
                </li>
                <li>
                  Crisis Management: Respond proactively to industry
                  developments, managing communications during periods of high
                  attention or market sensitivity.
                </li>
                <li>
                  Social Engagement: Collaborate with social media teams to
                  amplify messages across platforms, ensuring consistency with
                  crypto-specific terminology and trends.
                </li>
                <li>
                  Event Coordination: Represent the company at crypto
                  conferences, webinars, and industry events, ensuring clear and
                  impactful messaging.
                </li>
                <li>
                  Analytical Insights: Monitor and report on the effectiveness
                  of communication strategies, leveraging insights to refine
                  future campaigns.
                </li>
              </ul>
              <h3>Industry Expertise:</h3>
              <ul className="job-details-list">
                <li>
                  Deep understanding of crypto-specific narratives, key players,
                  and industry jargon.
                </li>
              </ul>
              <h3>Skillset:</h3>
              <ul className="job-details-list">
                <li>
                  Proven ability to craft narratives that resonate with the
                  crypto community and industry stakeholders.
                </li>
                <li>
                  Strong network within crypto media, influencers, and thought
                  leaders.
                </li>
                <li>
                  Exceptional writing and editing skills with attention to
                  detail.
                </li>
              </ul>
              <h3>Preferred Qualifications:</h3>
              <ul className="job-details-list">
                <li>
                  Bachelor's degree in Communications, Marketing, Journalism, or
                  a related field.
                </li>
                <li>
                  Certifications or training in blockchain/crypto are a plus.
                </li>
              </ul>
              <h3>Personal Attributes:</h3>
              <ul className="job-details-list">
                <li>Passion for blockchain technology and the crypto space.</li>
                <li>
                  Ability to thrive in a fast-paced, high-growth environment.
                </li>
                <li>Proactive, adaptable, and strategic mindset.</li>
              </ul>
              <a
                href="https://forms.gle/bqVZeUMwyoAZiS849"
                className="apply-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply
              </a>
            </div>
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

export default Joinourteam;
