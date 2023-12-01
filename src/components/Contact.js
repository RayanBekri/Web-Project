import React from "react";
import img from "../assests/download.jpeg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Email..." type="email" />
          <label htmlFor="subject">Subject</label>
          <input name="subject" placeholder="Subject..." type="text" />
          <label htmlFor="Message">Message</label>
          <textarea
            rows="6"
            placeholder=" message..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Submit </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;