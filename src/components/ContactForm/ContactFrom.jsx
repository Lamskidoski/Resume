import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  // Define state variables for form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can perform form submission logic
    console.log("Submitted:", { name, email, message });
    // Clear form fields after submission
    setName("");
    setEmail("");
    setLocation("");
    setMessage("");
  };

  return (
    <>
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="contact-box contact-name">
            <label className="contact-label" htmlFor="name">
              Name:{" "}
            </label>
            <input
              className="contact-input"
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="contact-box contact-email">
            <label className="contact-label" htmlFor="email">
              Email:{" "}
            </label>
            <input
              className="contact-input"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="contact-box contact-location">
            <label className="contact-label" htmlFor="location">
              Location:{" "}
            </label>
            <input
              className="contact-input"
              type="location"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>
          <div className="contact-box contact-message">
            <label className="contact-label" htmlFor="message">
              Message:{" "}
            </label>
            <textarea
              className="contact-input textarea "
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="contact-button">
            <button className="contact-submit" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
