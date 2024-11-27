import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Contactus.css";
import ReactFlagsSelect from "react-flags-select";
import countriesData from "./countriesCodes.json";

const Contactus = () => {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const formspreeURL = "https://formspree.io/f/xqazovol";
  const [selected, setSelected] = useState("GB");
  const [customLabels, setCustomLabels] = useState({});
  const [dialCode, setDialCode] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: false,
  });

  useEffect(() => {
    const labels = {};
    countriesData.forEach((country) => {
      labels[country.code] = `${country.code}`;
    });
    setCustomLabels(labels);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  useEffect(() => {
    // Buscar el objeto que tenga el code "DZ"
    const country = countriesData.find((country) => country.code === selected);

    // Si existe el país, obtenemos el dial_code
    if (country) {
      setDialCode(country.dial_code);
    } else {
      setDialCode("");
    }
  }, [selected]);

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, success: false, error: false });

    try {
      const response = await fetch(formspreeURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: dialCode + formData.phone,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setFormStatus({ submitting: false, success: true, error: false });
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        throw new Error("Error en el envío");
      }
    } catch (error) {
      setFormStatus({ submitting: false, success: false, error: true });
    }
  };

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

  if (isMobile) {
    // Mobile layout
    return (
      <div className="contactus">
        <div className="contentRow-contactus-mobile">
          <div className="illustration-contactus-mobile">
            <img
              src="static/images/Contactus/handpencil.png"
              alt="Illustration"
            />
          </div>
          <div className="textContent-contactus-mobile">
            <h1>
              <div className="text-yellow-contactus">Get</div>
              <div className="text-yellow-contactus">Touch</div>
            </h1>
            <div className="scroll-down-section-contactus">
              <img
                src="static/images/Contactus/scrolldown.png"
                alt="Scroll Down"
                className="scroll-icon-contactus"
              />
            </div>
          </div>
        </div>
        <section className="contactFormSection">
          <div className="contactForm">
            <form className="formGrid" onSubmit={handleSubmit}>
              <div className="formGroup fullWidth">
                <label htmlFor="fullName">Full Name*</label>
                <input
                  type="text"
                  id="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="formGroup noFullWidth">
                <label htmlFor="email">Email*</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="johndoe@gmail.com"
                  required
                />
              </div>
              <div className="formGroup noFullWidth">
                <label htmlFor="phone">Phone</label>
                <div className="phoneInput">
                  <ReactFlagsSelect
                    selected={selected}
                    onSelect={(code) => setSelected(code)}
                    customLabels={customLabels}
                    showSelectedLabel={false}
                    searchable={true}
                    className="flagSelect"
                  />
                  <input
                    type="text"
                    id="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="1234567890"
                    className="phoneInputData"
                  />
                </div>
              </div>
              <div className="formGroup fullWidth">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your message here..."
                  className="inputStyleMessage"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="submitButton"
                disabled={formStatus.submitting}
              >
                {formStatus.submitting ? "Sending..." : "Submit"}
              </button>
            </form>

            {/* Mensajes de éxito o error */}
            {formStatus.success && (
              <p className="successMessage">Message sent successfully!</p>
            )}
            {formStatus.error && (
              <p className="errorMessage">
                Error sending message. Please try again later.
              </p>
            )}
          </div>
        </section>

        {/* Second Section: Contact Information */}
        <section className="contactInfoSection">
          <div className="contactDetails">
            <div className="contactDetail">
              <img
                src="static/images/Contactus/locationIcon.svg"
                alt="Location Icon"
              />
              <div>
                <h3>71–75 Shelton Street, Covent Garden</h3>
                <p>London, United Kingdom, WC2H 9JQ, United Kingdom.</p>
              </div>
            </div>
            <div className="contactDetail">
              <img
                src="static/images/Contactus/emailIcon.svg"
                alt="Email Icon"
              />
              <p>enquiries@novatidelabs.com</p>
            </div>
          </div>
          <div className="map">
            <img src="static/images/Contactus/map.svg" alt="Map" />
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="contactus">
      <div className="contentRow-contactus">
        <div className="textContent-contactus">
          <h1>
            <div className="text-yellow-contactus">Get In</div>
            <div className="text-yellow-contactus">Touch</div>
          </h1>
          <div className="scroll-down-section">
            <img
              src="static/images/Contactus/scrolldown.png"
              alt="Scroll Down"
              className="scroll-icon"
            />
          </div>
        </div>
        <div className="illustration-contactus">
          <img
            src="static/images/Contactus/handpencil.png"
            alt="Illustration"
          />
        </div>
      </div>
      <section className="contactFormSection">
        <div className="contactForm">
          <form className="formGrid" onSubmit={handleSubmit}>
            <div className="formGroup fullWidth">
              <label htmlFor="fullName">Full Name*</label>
              <input
                type="text"
                id="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="John Doe"
                required
              />
            </div>
            <div className="formGroup noFullWidth">
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="johndoe@gmail.com"
                required
              />
            </div>
            <div className="formGroup noFullWidth">
              <label htmlFor="phone">Phone</label>
              <div className="phoneInput">
                <ReactFlagsSelect
                  selected={selected}
                  onSelect={(code) => setSelected(code)}
                  customLabels={customLabels}
                  showSelectedLabel={false}
                  searchable={true}
                  className="flagSelect"
                />
                <input
                  type="text"
                  id="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="1234567890"
                  className="phoneInputData"
                />
              </div>
            </div>
            <div className="formGroup fullWidth">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your message here..."
                className="inputStyleMessage"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="submitButton"
              disabled={formStatus.submitting}
            >
              {formStatus.submitting ? "Sending..." : "Submit"}
            </button>
          </form>

          {/* Mensajes de éxito o error */}
          {formStatus.success && (
            <p className="successMessage">Message sent successfully!</p>
          )}
          {formStatus.error && (
            <p className="errorMessage">
              Error sending message. Please try again later.
            </p>
          )}
        </div>
      </section>

      {/* Second Section: Contact Information */}
      <section className="contactInfoSection">
        <div className="contactDetails">
          <div className="contactDetail">
            <img
              src="static/images/Contactus/locationIcon.svg"
              alt="Location Icon"
            />
            <div>
              <h3>71–75 Shelton Street, Covent Garden</h3>
              <p>London, United Kingdom, WC2H 9JQ, United Kingdom.</p>
            </div>
          </div>
          <div className="contactDetail">
            <img src="static/images/Contactus/emailIcon.svg" alt="Email Icon" />
            <p>enquiries@novatidelabs.com</p>
          </div>
        </div>
        <div className="map">
          <img src="static/images/Contactus/map.svg" alt="Map" />
        </div>
      </section>
    </div>
  );
};

export default Contactus;