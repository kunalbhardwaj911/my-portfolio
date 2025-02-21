import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">📩 Contact Me</h2>
      <p className="contact-text">
        reach out to me here if you have any questions, opportunities, or just want to connect!
      </p>
      <div className="contact-info">
        <p>Email: <a href="mailto:vedantlegendx@google.com">vedantlegendx@google.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/rann-abhay-yadav/" target="_blank" rel="noopener noreferrer">Rann Abhay Yadav</a></p>
        <p>GitHub: <a href="https://github.com/RannAbhay" target="_blank" rel="noopener noreferrer">RannAbhay</a></p>
      </div>
    </div>
  );
};

export default Contact;
