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
        <p>Email: <a href="mailto:bhardwajkunal2603@gmail.com">bhardwajkunal2603@gmail.com</a></p>
      </div>
    </div>
  );
};

export default Contact;
