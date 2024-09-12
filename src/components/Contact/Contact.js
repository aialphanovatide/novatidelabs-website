import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      {/* First Section: Contact Form */}
      <h2>Contact Us</h2>
      <section className="contactFormSection">
        <div className="contactImage">
          <img
            src="static/images/Contact/handWithPencil.svg"
            alt="Hand with Pencil"
          />
        </div>
        <div className="contactForm">
          <form>
            <div className="formGroup">
              <label htmlFor="fullName">Full Name*</label>
              <input type="text" id="fullName" placeholder="John Doe" />
            </div>
            <div className="formGroup">
              <label htmlFor="email">Email*</label>
              <input type="email" id="email" placeholder="johndoe@gmail.com" />
            </div>
            <div className="formGroup">
              <label htmlFor="phone">Phone</label>
              <div className="phoneInput">
                <img src="static/images/flag.png" alt="Country Flag" />
                <input type="text" id="phone" placeholder="1234567890" />
              </div>
            </div>
            <div className="formGroup fullWidth">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <button type="submit" className="submitButton">
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Second Section: Contact Information */}
      <section className="contactInfoSection">
        <div className="contactDetails">
          <div className="contactDetail">
            <img
              src="static/images/Contact/locationIcon.svg"
              alt="Location Icon"
            />
            <div>
              <h3>71–75 Shelton Street, Covent Garden</h3>
              <p>London, United Kingdom, WC2H 9JQ, United Kingdom.</p>
            </div>
          </div>
          <div className="contactDetail">
            <img src="static/images/Contact/emailIcon.svg" alt="Email Icon" />
            <p>a.anand@novatidelabs.com</p>
          </div>
        </div>
        <div className="map">
          <img src="static/images/Contact/map.svg" alt="Map" />
        </div>
      </section>
    </div>
  );
};

export default Contact;
