import React from "react";

import './Contact.css';

export const ContactUs = () => {
    return (
      <>
        <div className="contact-bg">
          <div className="contact-header">
              <h2 className="contact-title">Get in Touch</h2>
              <p className="contact-desc">Send us a message!</p>
            </div>
          <div className="contact-form-container">
            <form className="contact-form">
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                className="contact-input"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                className="contact-input"
                required
              />
              <input
                type="text"
                placeholder="Subject"
                name="subject"
                className="contact-input"
              />
              <textarea
                placeholder="Your Message"
                name="message"
                className="contact-textarea"
                rows="5"
                required
              ></textarea>
              <button type="submit" className="contact-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </>
    );

    
}