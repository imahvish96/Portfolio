import React, { Component } from "react";
import { motion } from "framer-motion";
export default class Home extends Component {
  render() {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="home"
      >
        <h1>Mahvish Faridy</h1>
        <p>Frontend Developer</p>
      </motion.div>
    );
  }
}
