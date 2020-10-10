import React, { Component } from "react";
import ReactDom from "react-dom";
import { NavLink, Link } from "react-router-dom";

export default class Portals extends Component {
  forceUpdate = () => {
    this.forceUpdate();
  };

  render() {
    return ReactDom.createPortal(
      <div className="navigationBar">
        <ul>
          <NavLink exact to="/" activeClassName="activeLink">
            <li>
              <i class="fas fa-home"></i>
            </li>
          </NavLink>
          <NavLink exact to="/About" activeClassName="activeLink">
            <li>
              <i class="fas fa-user"></i>
            </li>
          </NavLink>
          <NavLink exact to="/Resume" activeClassName="activeLink">
            <li>
              <i class="fas fa-graduation-cap"></i>
            </li>
          </NavLink>
          <NavLink exact to="/Portfolio" activeClassName="activeLink">
            <li onClick="forceUpdate">
              <i class="fas fa-briefcase"></i>
            </li>
          </NavLink>
          <NavLink exact to="/Blog" activeClassName="activeLink">
            <li>
              <i class="fas fa-book"></i>
            </li>
          </NavLink>
          <NavLink exact to="/Contact" activeClassName="activeLink">
            <li>
              <i class="fas fa-address-card"></i>
            </li>
          </NavLink>
          <Link activeClassName="activeLink">
            <li>
              <i class="fas fa-sliders-h"></i>
            </li>
          </Link>
        </ul>
      </div>,
      document.getElementById("portal-root")
    );
  }
}
