import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Careers from "../pages/Careers";
import Services from "../pages/Services";
import Partners from "../pages/Partners";
import Technologies from "../pages/Technologies";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/technologies" element={<Technologies />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/partners" element={<Partners />} />
    </Routes>
  );
};

export default AppRoutes;
