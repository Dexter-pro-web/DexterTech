import React from "react";
import "../styles/footer.css";
import logo from "../assets/images/logo.png";
import effect from "../assets/images/button-effects.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div
        data-aos="zoom-in"
        data-aos-duration="50000"
        className="footer-banner"
      >
        <h2>TRANSFORMING BUSINESSES THROUGH TECHNOLOGY</h2>
        <p>
          All you need to drive innovative software solutions into enterprise
          tech transformation services for your business, you will find with us.
          We're here to power your business growth. Let’s build your digital
          future together!
        </p>
        <a href="mailto:dexterprotechnologylimited@gmail.com">
        <button className="cta-button ">
          CLAIM YOUR FREE STRATEGY SESSION{" "}
          <img id="button-effect" src={effect} alt="hero-image" />
        </button>
        </a>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={logo} alt="footer-logo" />
          </div>

          <div className="footer-links">
            <div>
              <p>Product and Services</p>
              <ul>
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink exact to="/about">About us</NavLink></li>
                <li><NavLink exact to="/services">Services</NavLink></li>
                <li><NavLink exact to="/partners">Partners</NavLink></li>
                <li><NavLink exact to="/careers">Careers</NavLink></li>
              </ul>
            </div>
            <div>
              <p>Company</p>
              <ul>
                <li><a href="tel:08165353645">08165353645</a></li>
                <li><a href="mailto:dexterprotechnologylimited@gmail.com">dexterprotechnologylimited@gmail.com</a></li>
                <li>36b Jay Jay Oladimeji Close, Ikate, Lekki, Lagos State</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Dexterpro Technologies.</p>
          <div className="social-icons">
            <a
              href="https://x.com"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-x"></i>
            </a>
            <a
              href="https://instagram.com/dexterpro_ltd"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://linkedin.com/company/dexterpro-technology-limited/"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
