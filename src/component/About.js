import React, { Component } from "react";
import Carousel from "./Carousel";
import { motion } from "framer-motion";

export default class About extends Component {
  render() {
    const infoStyle = {
      color: "#04b4e0",
      margin: "0px 12px 0 0",
    };

    return (
      <motion.div
        className="AboutSec"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="content-section">
          <div className="titleBlock">
            <div className="pageTitle">
              <h1>
                About <span style={{ color: "#04b4e0" }}>Me</span>
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="left_col">
              <p style={{ textAlign: "justify" }}>
                Focused and Hardworking. Self Motivated and team Oriented with
                effectiv team player with excellent communication and
                interpersonal skills. Exhibits an hones work thic with the
                ability to excel in fast-paced, time-sensitive environments and
                excellent team player with proven ability to work consistently
                towards attaining goals an targets.
              </p>
            </div>
            <div className="right_col">
              <div className="abInfo">
                <ul>
                  <li>
                    <span style={infoStyle}>
                      <strong>Age</strong>
                    </span>
                    <span>24</span>
                  </li>
                  <li>
                    <span style={infoStyle}>
                      <strong>Residence</strong>
                    </span>
                    <span>India</span>
                  </li>
                  <li>
                    <span style={infoStyle}>
                      <strong>Address</strong>
                    </span>
                    <span>H-175, Begumpur, New Delhi-110086</span>
                  </li>
                  <li>
                    <span style={infoStyle}>
                      <strong>e-mail</strong>
                    </span>
                    <span>mahvishfaridi96@gmai.com</span>
                  </li>
                  <li>
                    <span style={infoStyle}>
                      <strong>Phone</strong>
                    </span>
                    <span>+91 75-03-100-400</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="white-space"></div>
          <div className="pageTitle">
            <h1>
              What <span style={{ color: "#04b4e0" }}>I Do</span>
            </h1>
          </div>
          <div className="row">
            <div className="left_col">
              <div className="myinfo">
                <h4>Design</h4>
                <span class="iconHolder">
                  <img alt="" src="/img/icon/shop.svg" />
                </span>
                <p>Web design Direction artistique Logo & branding UI & UX</p>
              </div>
            </div>
            <div className="right_col">
              <div className="myinfo">
                <h4>Degital &amp; Mobile</h4>
                <span class="iconHolder">
                  <img alt="" src="/img/icon/pen.svg" />
                </span>
                <p>
                  Sites web Responsive design Mobile & Tablette Applications
                  mobile (iOS, Android)
                </p>
              </div>
            </div>
            <div className="left_col">
              <div className="myinfo">
                <h4>Development</h4>
                <span class="iconHolder">
                  <img alt="" src="/img/icon/development.svg" />
                </span>
                <p>
                  Développement front & back Interaction design Magento,
                  Wordpress Symfony, Laravel
                </p>
              </div>
            </div>
            <div className="right_col">
              <div className="myinfo">
                <h4>Social Media & Web-marketing</h4>
                <span class="iconHolder">
                  <img alt="" src="/img/icon/task.svg" />
                </span>
                <p>
                  Stratégie Social Media Community Management Bloggeurs,
                  influenceurs Reporting, live event Emailing & jeux concours
                </p>
              </div>
            </div>
            <div className="white-space"></div>
            <div className="pageTitle">
              <h1>
                Testimonial <span style={{ color: "#04b4e0" }}></span>
              </h1>
            </div>
            <Carousel />
          </div>
        </div>
      </motion.div>
    );
  }
}
