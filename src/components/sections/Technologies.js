import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";
import effect from "../../assets/images/button-effects.png";
import { technologiesData } from "../../data/technologiesData";

export default function Technologies() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: true,
      duration: 700,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section id="technologies" className="bg-[#0a0b12] text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-16 xl:px-24 relative overflow-hidden flex justify-center">
      {/* Subtle background glow */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#d0a225]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl w-full flex flex-col items-center relative z-10">
        {/* Section Header */}
        <div data-aos="fade-up" className="text-center max-w-3xl mb-12 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide uppercase text-white mb-4">
            OUR TECHNOLOGIES
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Innovative digital products and software platforms engineered by DexterPro to solve real-world problems.
          </p>
          <div className="h-1.5 bg-[linear-gradient(110deg,#DD9828_20%,#E6E7F0_20%,#E6E7F0_80%,#136dec_80%)] w-32 mx-auto mt-6 rounded-full" />
        </div>

        {/* Technologies Grid/List (Concise & Uncluttered) */}
        <div className="w-full flex flex-col gap-10">
          {technologiesData.map((tech) => (
            <div
              key={tech.id}
              data-aos="zoom-in"
              className="bg-gradient-to-b from-[#111728] via-[#0b101c] to-[#070a12] rounded-3xl border border-blue-900/40 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden"
            >
              {/* Card Header: Logo */}
              <div className="flex items-center justify-between pb-5 sm:pb-6 border-b border-slate-800/80 mb-6 sm:mb-8">
                <img
                  src={tech.logo}
                  alt={`${tech.name} Logo`}
                  className="h-7 sm:h-8 md:h-9 w-auto object-contain filter drop-shadow"
                />
              </div>

              {/* Card Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Column: Summary & Quick Highlights (7 cols) */}
                <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 leading-tight uppercase">
                    {tech.tagline}
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 text-justify lg:text-left line-clamp-3">
                    {tech.description}
                  </p>

                  {/* Buttons: View More (to /technologies) & Visit Website */}
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                    <NavLink to="/technologies" className="inline-block">
                      <button className="bg-[#136dec] text-white px-6 sm:px-7 py-2.5 sm:py-3 rounded-lg font-bold text-xs sm:text-sm hover:bg-blue-700 transition relative inline-flex items-center gap-2 shadow-md shadow-blue-900/20 group">
                        <span>VIEW MORE</span>
                        <span
                          className="text-sm transition-transform duration-200 group-hover:translate-x-1"
                          style={{ fontFamily: "Inter, sans-serif" }}
                        >
                          →
                        </span>
                        <img
                          className="w-12 h-5 sm:w-14 sm:h-6 absolute -right-5 -bottom-2.5 sm:-right-6 sm:-bottom-3 pointer-events-none"
                          src={effect}
                          alt=""
                        />
                      </button>
                    </NavLink>

                    <a
                      href={tech.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm text-gray-400 hover:text-white px-4 py-2.5 rounded-lg border border-slate-800 hover:border-slate-600 transition inline-flex items-center gap-1.5"
                    >
                      <span>Visit Website</span>
                      <span className="text-xs" style={{ fontFamily: "Inter, sans-serif" }}>↗</span>
                    </a>
                  </div>
                </div>

                {/* Right Column: Compact Mockup Preview (5 cols) */}
                <div className="lg:col-span-5 flex flex-col items-center">
                  <div className="w-full bg-[#070b14]/90 border border-blue-900/40 rounded-2xl p-3.5 sm:p-4 shadow-xl relative overflow-hidden backdrop-blur-sm">
                    {/* Window Controls */}
                    <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-slate-800/80">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                        <span className="text-[11px] font-mono text-gray-400 ml-2">hmfasttrack</span>
                      </div>
                    </div>

                    {/* Simulation Mockup Image */}
                    <div className="relative overflow-hidden rounded-xl bg-white p-2 flex items-center justify-center">
                      <img
                        src={tech.mockup}
                        alt="HM FastTrack Simulation Preview"
                        className="w-full h-auto object-contain rounded-lg max-h-56"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
