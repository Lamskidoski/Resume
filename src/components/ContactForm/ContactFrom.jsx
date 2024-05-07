import React, { useState } from "react";

const ContactForm = () => {
  // Define state variables for form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can perform form submission logic
    console.log("Submitted:", { name, email, message });
    // Clear form fields after submission
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
