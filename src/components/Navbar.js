import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <NavLink to="/">
          <img src={logo} alt="Logo" className="logo" />
        </NavLink>
      </div>

      <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
        <li>
          <NavLink exact to="/" className="nav-link" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-link" activeClassName="active">
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" className="nav-link" activeClassName="active">
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/partners" className="nav-link" activeClassName="active">
            Partners
          </NavLink>
        </li>
        <li>
          <NavLink to="/careers" className="nav-link" activeClassName="active">
            Careers
          </NavLink>
        </li>
        <li>
          <NavLink
            to="null"
            className="nav-link contact-btn"
            activeClassName="active"
          >
            GET IN TOUCH
          </NavLink>
        </li>
      </ul>

      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
