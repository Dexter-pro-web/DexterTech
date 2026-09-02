import React from "react";
import logo from "../../assets/images/logo-dark.png";
import effect from "../../assets/images/button-effects.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#0a0b12] text-[#ccc] font-sans px-4 sm:px-6 md:px-10 lg:px-24 border border-[#0a0b12]">
      <div
        data-aos="zoom-in"
        className="bg-[#136dec] text-white text-center p-6 sm:p-8 md:p-10 lg:py-16 lg:px-32 mb-10 lg:-mb-8 rounded-xl w-full lg:max-w-5xl mx-auto flex flex-col justify-center items-center relative -mt-24 sm:-mt-28 md:-mt-36"
      >
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2 sm:mb-3 md:mb-4 w-11/12 lg:max-w-2xl font-bold">
          TRANSFORMING BUSINESSES THROUGH TECHNOLOGY
        </h2>
        <p className="text-sm md:text-base lg:text-lg mb-4 sm:mb-5 md:mb-8 leading-relaxed w-11/12 lg:max-w-3xl text-white/80">
          All you need to drive innovative software solutions into enterprise
          tech transformation services for your business, you will find with us.
          We're here to power your business growth. Let’s build your digital
          future together!
        </p>
        <a href="mailto:info@dexterprotechnology.com">
          <button className="bg-[#f2b203] hover:bg-[#f59e0b] text-[#141414] py-3 px-4 sm:py-3 sm:px-5 md:py-4 md:px-6 rounded-lg font-bold relative z-10 text-xs sm:text-sm md:text-base lg:text-lg w-full sm:w-auto transition-colors">
            CLAIM YOUR FREE STRATEGY SESSION
            <img 
              className="w-10 sm:w-12 md:w-14 lg:w-16 absolute -right-2 -bottom-2 sm:-right-3 md:-right-5 lg:-right-6 lg:-bottom-3" 
              src={effect} 
              alt="" 
            />
          </button>
        </a>
      </div>

      <footer className="py-8 px-2 sm:py-12 md:py-16 lg:py-24 lg:px-4 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row justify-between mb-8 md:mb-12 lg:mb-20 mt-8 md:mt-10 lg:mt-0 items-start">
          <div className="mb-6 lg:mb-0">
            <img 
              className="h-6 sm:h-8 md:h-10 w-auto" 
              src={logo} 
              alt="Dexterpro logo" 
            />
          </div>

          <div className="flex flex-col lg:flex-row flex-wrap gap-6 sm:gap-8 md:gap-10 lg:gap-16">
            <div>
              <p className="text-base sm:text-lg font-semibold text-white mb-4">Product and Services</p>
              <ul className="space-y-2">
                <li><NavLink exact to="/" className="text-sm md:text-base text-gray-400 hover:text-white transition">Home</NavLink></li>
                <li><NavLink exact to="/about" className="text-sm md:text-base text-gray-400 hover:text-white transition">About us</NavLink></li>
                <li><NavLink exact to="/services" className="text-sm md:text-base text-gray-400 hover:text-white transition">Services</NavLink></li>
                <li><NavLink exact to="/partners" className="text-sm md:text-base text-gray-400 hover:text-white transition">Partners</NavLink></li>
                <li><NavLink exact to="/careers" className="text-sm md:text-base text-gray-400 hover:text-white transition">Careers</NavLink></li>
              </ul>
            </div>
            <div>
              <p className="text-base sm:text-lg font-semibold text-white mb-4">Company</p>
              <ul className="space-y-2">
                <li><a href="tel:07066645933" className="text-sm md:text-base text-gray-400 hover:text-white transition">07066645933</a></li>
                <li><a href="tel:08141360482" className="text-sm md:text-base text-gray-400 hover:text-white transition">08141360482</a></li>
                <li><a href="mailto:info@dexterprotechnology.com" className="text-sm md:text-base text-gray-400 hover:text-white transition">info@dexterprotechnology.com</a></li>
                <li className="text-sm md:text-base text-gray-400 max-w-xs">36b Jay Jay Oladimeji Close, Ikate, Lekki, Lagos State</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center mt-10 md:mt-16 border-t border-gray-800 gap-4 md:gap-0">
          <p className="text-xs sm:text-sm md:text-base text-gray-400">&copy; 2025 Dexterpro Technologies.</p>
          <div className="flex gap-4">
            <a
              href="https://x.com"
              className="text-gray-400 hover:text-white hover:bg-blue-600 p-2 rounded-full w-10 h-10 flex items-center justify-center transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-x"></i>
            </a>
            <a
              href="https://instagram.com/dexterpro_ltd"
              className="text-gray-400 hover:text-white hover:bg-blue-600 p-2 rounded-full w-10 h-10 flex items-center justify-center transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://linkedin.com/company/dexterpro-technology-limited/"
              className="text-gray-400 hover:text-white hover:bg-blue-600 p-2 rounded-full w-10 h-10 flex items-center justify-center transition"
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
