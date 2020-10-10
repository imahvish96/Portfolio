import React, { Component } from "react";
import { motion } from "framer-motion";

export default class Contact extends Component {
  render() {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="AboutSec"
      >
        <div className="content-section" style={{ padding: "10px" }}>
          <div className="titleBlock">
            <div class="pageTitle">
              <h1>Contact</h1>
            </div>
          </div>
          <div className="left-col w-30">
            <div className="contactBox">
              <span>
                <i class="fas fa-map-marker-alt"></i>
              </span>
              <span className="ctitle">New Delhi, India</span>
            </div>
            <div className="contactBox">
              <span>
                <i class="fas fa-phone"></i>
              </span>
              <span className="ctitle">+91 75-03-100-400</span>
            </div>
            <div className="contactBox">
              <span>
                <i class="fas fa-envelope"></i>
              </span>
              <span className="ctitle">mahvishfaridi96@gmail.com</span>
            </div>
            <div className="contactBox">
              <span>
                <i class="far fa-check-circle"></i>
              </span>
              <span className="ctitle">Freelancer Available</span>
            </div>
          </div>

          <div className="right-col w-60 mlr-2">
            <iframe
              title="mymap"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.681154732945!2d77.08981481459197!3d28.48914739730784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1930a2be6bdf%3A0x7cc5a4a20534c60d!2sUnify%20Square%20India%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1594621259786!5m2!1sen!2sin"
              width="600"
              height="200"
              frameborder="0"
              style={{ border: "0", marginTop: "10px" }}
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>

            <div className="title">
              <h2>
                How Can I <span style={{ color: "#04b4e0" }}>Help You?</span>
              </h2>
            </div>
            <form action="#" method="post" name="contactForm" class="formStyle">
              <div className="inputHolder">
                <input
                  name="name"
                  type="text"
                  value=""
                  placeholder="Your Name"
                  id="name"
                  class="brzyInput"
                />
                <input
                  name="email"
                  type="email"
                  value=""
                  placeholder="Your Email"
                  id="email"
                  class="brzyInput"
                />
                <input
                  name="subject"
                  type="text"
                  value=""
                  placeholder="Subject"
                  id="subject"
                  class="brzyInput"
                />
              </div>
              <div class="textareaHolder">
                <textarea
                  cols="50"
                  rows="9"
                  placeholder="Your Message"
                  name="message"
                />
              </div>
              <div className="btnHolder">
                <button className="brzyBtn">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    );
  }
}
