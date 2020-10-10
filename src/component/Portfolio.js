import React, { Component } from "react";
import { motion } from "framer-motion";

export default class Portfolio extends Component {
  componentDidMount() {}

  render() {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="AboutSec"
      >
        <div className="titleBlock">
          <div class="pageTitle">
            <h1>Portfolio</h1>
          </div>
        </div>
        <div className="content-section">
          <div id="buttons"></div>

          <div id="gallery">
            <img
              src="https://picsum.photos/600/450?image=776"
              data-tags="Blog"
              alt="Alt 1"
            />

            <img
              src="https://picsum.photos/600/450?image=777"
              data-tags="Health & Beauty"
              alt="Alt 2"
            />

            <img
              src="https://picsum.photos/600/450?image=755"
              data-tags="Business"
              alt="Alt 3"
            />

            <img
              src="https://picsum.photos/600/450?image=778"
              data-tags="Blog,Health & Beauty"
              alt="Alt 4"
            />
            <img
              src="https://picsum.photos/600/450?image=764"
              data-tags="Business"
              alt="Alt 5"
            />

            <img
              src="https://picsum.photos/600/450?image=526"
              data-tags="Blog,Shop"
              alt="Alt 6"
            />

            <img
              src="https://picsum.photos/600/450?image=668"
              data-tags="Blog,Megazine"
              alt="Alt 7"
            />
            <img
              src="https://picsum.photos/600/450?image=660"
              data-tags="Blog"
              alt="Alt 8"
            />

            <img
              src="https://picsum.photos/600/450?image=659"
              data-tags="Blog,Portfolio"
              alt="Alt 9"
            />
            <img
              src="https://picsum.photos/600/450?image=513"
              data-tags="Business"
              alt="Alt 10"
            />
            <img
              src="https://picsum.photos/600/450?image=535"
              data-tags="Shop"
              alt="Alt 11"
            />
            <img
              src="https://picsum.photos/600/450?image=531"
              data-tags="Shop,Blog"
              alt="Alt 12"
            />
          </div>
        </div>
      </motion.div>
    );
  }
}
