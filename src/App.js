import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Profile from "./component/Profile";
import Home from "./component/Home";
import Portals from "./component/Portals";
import About from "./component/About";
import Resume from "./component/Resume";
import Portfolio from "./component/Portfolio";
import Blog from "./component/Blog";
import Contact from "./component/Contact";
import data from "./data/designSkill.json";
import { AnimatePresence } from "framer-motion";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Profile />
          <AnimatePresence>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/resume" component={() => <Resume data={data} />} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/blog" component={Blog} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </AnimatePresence>

          <Portals pages="this.showPages" />
        </div>
      </Router>
    );
  }
}
