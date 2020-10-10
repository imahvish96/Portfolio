import React, { Component } from "react";
import { motion } from "framer-motion";

export default class Blog extends Component {
  render() {
    return (
      <motion.div
        className="AboutSec"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="content-section" style={{ padding: "10px" }}>
          <div className="titleBlock">
            <div className="pageTitle">
              <h1>Blog</h1>
            </div>
          </div>
          <div className="left-col">
            <div className="blogBox">
              <div className="imgHolder">
                <img src="/img/blog/home-blog/home-blog-1.jpg" alt="" />
              </div>
              <div className="btit">
                <span className="blogDate">5 MAR 2020</span>
                <span className="blogtitle">
                  <h3>Best Practices for Animated Progress Indicators</h3>
                </span>
              </div>
            </div>
          </div>
          <div className="left-col">
            <div className="blogBox">
              <div className="imgHolder">
                <img src="/img/blog/home-blog/home-blog-2.jpg" alt="" />
              </div>
              <div className="btit">
                <span className="blogDate">18 MAR 2020</span>
                <span className="blogtitle">
                  <h3>Why I Switched to Sketch For UI Design</h3>
                </span>
              </div>
            </div>
          </div>
          <div className="left-col">
            <div className="blogBox">
              <div className="imgHolder">
                <img src="/img/blog/home-blog/home-blog-3.jpg" alt="" />
              </div>
              <div className="btit">
                <span className="blogDate">22 MAR 2020</span>
                <span className="blogtitle">
                  <h3>An Overview of E-Commerce Platforms</h3>
                </span>
              </div>
            </div>
          </div>
          <div className="left-col">
            <div className="blogBox">
              <div className="imgHolder">
                <img src="/img/blog/home-blog/home-blog-1.jpg" alt="" />
              </div>
              <div className="btit">
                <span className="blogDate">16 APR 2020</span>
                <span className="blogtitle">
                  <h3>Designing the Perfect Feature Comparison Table</h3>
                </span>
              </div>
            </div>
          </div>
          <div className="left-col">
            <div className="blogBox">
              <div className="imgHolder">
                <img src="/img/blog/main-blog/m-blog-1.jpg" alt="" />
              </div>
              <div className="btit">
                <span className="blogDate">20 APR 2020</span>
                <span className="blogtitle">
                  <h3>Best Practices for Animated Progress Indicators</h3>
                </span>
              </div>
            </div>
          </div>
          <div className="left-col">
            <a href="portfolio" className="blogBox">
              <div className="imgHolder">
                <img src="/img/blog/main-blog/m-blog-2.jpg" alt="" />
              </div>
              <div className="btit">
                <span className="blogDate">30 APR 2020</span>
                <span className="blogtitle">
                  <h3>Why I Switched to Sketch For UI Design</h3>
                </span>
              </div>
            </a>
          </div>
        </div>
      </motion.div>
    );
  }
}
