import React from "react";
import "./style.scss";
import ContactForm from "../../components/ContactForm";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Contact Us</h1>
        <p>
          Connect with us today to learn more about our portfolio and our vision
          for the future.
        </p>
        <a href="https://www.linkedin.com/company/nexsphere">
          <img src="../image/linkedin.png" alt="qwe" />
        </a>
      </div>
      <div className="contact-main">
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
