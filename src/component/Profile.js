import React, { Component } from "react";
import { motion } from "framer-motion";

export default class Profile extends Component {
  render() {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="profile"
      >
        <div className="profileImg">
          <img src={process.env.PUBLIC_URL + "/avtar.jpg"} alt="Profile-Img" />
        </div>
        <div className="aboutMe">
          <div className="name_and_pos">
            <h1>Mahvish Faridy</h1>
            <p>Frontend Developer</p>
          </div>

          <div className="socialLink">
            <ul>
              <li>
                <i class="fab fa-facebook-f"></i>
              </li>
              <li>
                <i class="fab fa-twitter"></i>
              </li>
              <li>
                <i class="fab fa-instagram"></i>
              </li>
              <li>
                <i class="fab fa-linkedin-in"></i>
              </li>
            </ul>
          </div>

          <div className="about">
            <p>
              Focused and Hardworking. Self Motivated and team Oriented with
              effectiv team player with excellent communication and
              interpersonal skills. Exhibits an hones work thic with the ability
              to excel in fast-paced, time-sensitive environments and excellent
              team player with proven ability to work consistently towards
              attaining goals an targets.
            </p>
          </div>

          <button className="ButtonHolder">Download CV</button>

          <footer className="footer">&#169; 2020 All right reserved</footer>
        </div>
      </motion.div>
    );
  }
}
