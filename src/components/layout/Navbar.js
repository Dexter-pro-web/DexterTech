import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo-dark.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="bg-[#0a0b12] sticky top-0 z-50 px-6 lg:px-32 flex justify-center">
      <nav className="flex justify-between items-center w-full max-w-7xl h-[60px] lg:h-[90px]">
        <div>
          <NavLink to="/">
            <img src={logo} alt="Logo" className="h-8 lg:h-10 w-auto" />
          </NavLink>
        </div>

        <ul className={`absolute top-[60px] left-0 w-full h-[calc(100vh-60px)] bg-[#0a0b12] flex-col items-center gap-10 pt-10 overflow-y-auto lg:static lg:w-auto lg:h-auto lg:bg-transparent lg:flex-row lg:gap-8 lg:flex lg:pt-0 lg:overflow-visible ${isOpen ? "flex" : "hidden"}`}>
          <li className="lg:py-2">
            <NavLink
              exact
              to="/"
              className="text-white transition-colors duration-300 ease text-lg lg:text-base hover:font-bold [&.active]:text-[#1a6ee5] [&.active]:pb-1 [&.active]:border-b-2 [&.active]:border-[#1a6ee5]"
              activeClassName="active"
              onClick={closeMenu}
            >
              Home
            </NavLink>
          </li>
          <li className="lg:py-2">
            <NavLink
              to="/about"
              className="text-white transition-colors duration-300 ease text-lg lg:text-base hover:font-bold [&.active]:text-[#1a6ee5] [&.active]:pb-1 [&.active]:border-b-2 [&.active]:border-[#1a6ee5]"
              activeClassName="active"
              onClick={closeMenu}
            >
              About us
            </NavLink>
          </li>
          <li className="lg:py-2">
            <NavLink
              to="/services"
              className="text-white transition-colors duration-300 ease text-lg lg:text-base hover:font-bold [&.active]:text-[#1a6ee5] [&.active]:pb-1 [&.active]:border-b-2 [&.active]:border-[#1a6ee5]"
              activeClassName="active"
              onClick={closeMenu}
            >
              Services
            </NavLink>
          </li>
          <li className="lg:py-2">
            <NavLink
              to="/partners"
              className="text-white transition-colors duration-300 ease text-lg lg:text-base hover:font-bold [&.active]:text-[#1a6ee5] [&.active]:pb-1 [&.active]:border-b-2 [&.active]:border-[#1a6ee5]"
              activeClassName="active"
              onClick={closeMenu}
            >
              Partners
            </NavLink>
          </li>
          <li className="lg:py-2">
            <NavLink
              to="/careers"
              className="text-white transition-colors duration-300 ease text-lg lg:text-base hover:font-bold [&.active]:text-[#1a6ee5] [&.active]:pb-1 [&.active]:border-b-2 [&.active]:border-[#1a6ee5]"
              activeClassName="active"
              onClick={closeMenu}
            >
              Careers
            </NavLink>
          </li>
          <li className="lg:py-2">
          <a
            href="mailto:info@dexterprotechnology.com"
            className="text-white transition-all duration-300 ease hover:font-bold text-xs py-2 px-4 rounded-lg border-2 border-white hover:bg-white hover:border-white hover:text-black inline-block"
            onClick={closeMenu}
          >
            GET IN TOUCH
          </a>
          </li>
        </ul>

        <div className="flex flex-col justify-between w-6 h-5 cursor-pointer lg:hidden" onClick={toggleMenu}>
          <span className="h-[3px] w-full bg-white rounded-full"></span>
          <span className="h-[3px] w-full bg-white rounded-full"></span>
          <span className="h-[3px] w-full bg-white rounded-full"></span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
