import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/images/logo-dark.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true); // Disable certain links

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
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
          <NavLink
            exact
            to="/"
            className="nav-link"
            activeClassName="active"
            onClick={closeMenu}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className="nav-link"
            activeClassName="active"
            onClick={closeMenu}
          >
            About us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            className="nav-link"
            activeClassName="active"
            onClick={closeMenu}
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/partners"
            className="nav-link"
            activeClassName="active"
            onClick={closeMenu}
          >
            Partners
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/careers"
            className="nav-link"
            activeClassName="active"
            onClick={closeMenu}
          >
            Careers
          </NavLink>
        </li>
        <li>
        <a
          href="mailto:info@dexterprotechnology.com"
          className="nav-link contact-btn"
          onClick={closeMenu}
        >
          GET IN TOUCH
        </a>
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
