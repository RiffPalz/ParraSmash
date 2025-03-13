import React from "react";

import { Link, NavLink } from "react-router-dom";

import "./sticky.js";
import "./Navbar.css";


import Logo from "../assets/images/parrasmash.png";

export const Navbar = () =>{
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="logo-container">
            <Link to="/">
              <img src={Logo} className="logo" />
            </Link>
          </div>

          <ul className="nav-menu">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/bookcourt" className="nav-link">
                BOOK A COURT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                ABOUT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact-us" className="nav-link">
                CONTACT US
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/login" className="nav-link">
                LOG IN
              </NavLink>
            </li>
          </ul>

          <div className="hamburger">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </header>
    </>
  );
};


