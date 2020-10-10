import React, { Component } from "react";
import { motion } from "framer-motion";
export default class About extends Component {
  render() {
    return (
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="AboutSec"
      >
        <div className="content-section">
          <div className="pageTitle">
            <h1>Resume</h1>
          </div>
          <div className="row">
            <div className="left_col">
              <div class="timeline">
                <div className="pageTitle">
                  <h3>Education</h3>
                </div>
                <div className="timelineBox">
                  <div className="timelineYear">
                    <h3>Diploma @ Arena Animation </h3> (2017-2019)
                  </div>
                  <div className="timelineInfo">
                    <p>
                      Pursued Diploma in in Graphic and Web Desinging and
                      Development (GWDD) from Arena Animation.
                    </p>
                  </div>
                </div>
                <div className="timelineBox">
                  <div className="timelineYear">
                    {" "}
                    <h3>Bachelor Degree @ Delhi University</h3> (2017-2020)
                  </div>
                  <div className="timelineInfo">
                    <p>
                      Pursued B.A from SOL (School Of Open Learning) Delhi
                      University.
                    </p>
                  </div>
                </div>
              </div>
              <div className="white-space"></div>
              <div class="timeline">
                <div className="pageTitle">
                  <h3>Experience</h3>
                </div>
                <div className="timelineBox">
                  <div className="timelineYear">
                    <h3>GM Education</h3> (2014-2016)
                  </div>
                  <div className="timelineInfo">
                    <h3>Graphic & Web Design</h3>

                    <p>
                      Sernior Graphic Designer and Staff Manager have to creat
                      Flyers, Pamphlate, Banner, Bill Borad, Standy, Broucher,
                      handle Social Media Marketing and a Wordpress Developer &
                      have to manage the Staff.
                    </p>
                  </div>
                </div>
                <div className="timelineBox">
                  <div className="timelineYear">
                    <h3>Torusinfo Tech</h3> (2017-2018)
                  </div>
                  <div className="timelineInfo">
                    <h3>Graphic & Web Designer</h3>

                    <p>
                      Designed many Web prototype for many tour and travels
                      company with new web Platform like Bootstrap.
                    </p>
                  </div>
                </div>
                <div className="timelineBox">
                  <div className="timelineYear">
                    <h3>Cetus Design Studio</h3> (2018){" "}
                  </div>
                  <div className="timelineInfo">
                    <h3>Web Designer</h3>

                    <p>
                      Designed UI (User Interface) for Android & Web Platform
                      Designed Web Banners & Social Media Posts (Facebook,
                      Twitter, Instagram, Google Plus). Designed Logo. Designing
                      of Website Banners and Web Advertisements &amp; Designed
                      Media.
                    </p>
                  </div>
                </div>
                <div className="timelineBox">
                  <div className="timelineYear">
                    <h3>Alienskart</h3> (2018-2020)
                  </div>
                  <div className="timelineInfo">
                    <h3>Web Designer</h3>

                    <p>
                      Designed UI for full responsive E-Commerce site for
                      Android & Web Platform.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="right_col">
              <div className="skill">
                <div className="pageTitle">
                  <h3>
                    Design <span style={{ color: "#04b4e0" }}>Skill</span>
                  </h3>
                </div>
                <ul>
                  <li>
                    <span className="titleTag">Frontend Development</span>
                  </li>
                  <li>
                    <span className="titleTag">Backend Development</span>
                  </li>
                  <li>
                    <span className="titleTag">UI / UX Design</span>
                  </li>
                  <li>
                    <span className="titleTag">Printing Design</span>
                  </li>
                  <li>
                    <span className="titleTag">Logo Design</span>
                  </li>
                  <li>
                    <span className="titleTag">Book Design</span>
                  </li>
                  <li>
                    <span className="titleTag">Graphic Design</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="right_col">
              <div className="skill">
                <div className="pageTitle">
                  <h3>
                    Coding <span style={{ color: "#04b4e0" }}>Skill</span>
                  </h3>
                </div>
                <ul>
                  <li>
                    <span className="titleTag">HTML</span>
                  </li>
                  <li>
                    <span className="titleTag">CSS</span>
                  </li>
                  <li>
                    <span className="titleTag">Javascript</span>
                  </li>
                  <li>
                    <span className="titleTag">Php</span>
                  </li>
                  <li>
                    <span className="titleTag">React Js</span>
                  </li>
                  <li>
                    <span className="titleTag">NodeJs</span>
                  </li>
                  <li>
                    <span className="titleTag">ReactNative</span>
                  </li>
                  <li>
                    <span className="titleTag">Flask</span>
                  </li>
                  <li>
                    <span className="titleTag">MangoDb</span>
                  </li>
                  <li>
                    <span className="titleTag">MySql</span>
                  </li>
                  <li>
                    <span className="titleTag">Android Studio</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="right_col">
              <div className="skill">
                <div className="pageTitle">
                  <h3>
                    <span>Knowledge </span>
                  </h3>
                </div>
                <ul>
                  <li>
                    <span className="titleTag">Marketing</span>
                  </li>
                  <li>
                    <span className="titleTag">Print</span>
                  </li>
                  <li>
                    <span className="titleTag">Degital Design</span>
                  </li>
                  <li>
                    <span className="titleTag">Social Media</span>
                  </li>
                  <li>
                    <span className="titleTag">Degital Marketing</span>
                  </li>
                  <li>
                    <span className="titleTag">Time Management</span>
                  </li>
                  <li>
                    <span className="titleTag">Communication</span>
                  </li>
                  <li>
                    <span className="titleTag">Problem-Solving</span>
                  </li>
                  <li>
                    <span className="titleTag">Social Networking</span>
                  </li>
                  <li>
                    <span className="titleTag">Flexibility</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    );
  }
}
