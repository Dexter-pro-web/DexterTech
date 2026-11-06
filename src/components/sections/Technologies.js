import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
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
    <section id="technologies" className="bg-[#0a0b12] text-white py-16 sm:py-20 lg:py-28 px-4 sm:px-8 lg:px-16 xl:px-24 relative overflow-hidden flex justify-center">
      {/* Background glow orbs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#d0a225]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl w-full flex flex-col items-center relative z-10">
        {/* Section Header */}
        <div data-aos="fade-up" className="text-center max-w-3xl mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide uppercase text-white mb-4">
            TECHNOLOGIES ENGINEERED BY DEXTERPRO
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Beyond engineering custom client solutions, DexterPro designs, develops, and deploys industry-defining proprietary platforms that solve complex engineering, simulation, and enterprise problems.
          </p>
          <div className="h-1.5 bg-[linear-gradient(110deg,#DD9828_20%,#E6E7F0_20%,#E6E7F0_80%,#136dec_80%)] w-32 mx-auto mt-6 rounded-full" />
        </div>

        {/* Technologies List */}
        <div className="w-full flex flex-col gap-16">
          {technologiesData.map((tech) => (
            <div
              key={tech.id}
              data-aos="zoom-in"
              className="bg-gradient-to-b from-[#111728] via-[#0b101c] to-[#070a12] rounded-3xl border border-blue-900/40 p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden"
            >
              {/* Top Accent Glow */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

              {/* Card Header: Logo */}
              <div className="flex items-center justify-between pb-6 sm:pb-8 border-b border-slate-800/80 mb-8">
                <img
                  src={tech.logo}
                  alt={`${tech.name} Logo`}
                  className="h-7 sm:h-8 md:h-9 w-auto object-contain filter drop-shadow"
                />
              </div>

              {/* Card Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                {/* Left Column: Details & Stats (7 cols) */}
                <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight uppercase">
                    {tech.tagline}
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 text-justify lg:text-left">
                    {tech.description}
                  </p>

                  {/* 4 Stats Cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4 w-full mb-8">
                    {tech.stats.map((stat, idx) => (
                      <div
                        key={idx}
                        className="bg-[#0c1220]/90 border border-blue-900/30 rounded-xl p-3.5 sm:p-4 text-left hover:border-blue-700/50 transition-colors"
                      >
                        <p
                          className="text-lg sm:text-xl font-bold text-white tracking-wide"
                          style={{ fontFamily: "Inter, sans-serif" }}
                        >
                          {stat.value}
                        </p>
                        <p className="text-xs font-semibold text-blue-400 uppercase tracking-wider mt-0.5">
                          {stat.label}
                        </p>
                        <p className="text-[11px] text-gray-400 mt-0.5 hidden sm:block">
                          {stat.sub}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Bullet Highlights */}
                  <div className="w-full space-y-2.5 mb-10 text-left">
                    {tech.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <span className="text-[#136dec] mt-0.5 font-bold flex-shrink-0 text-sm">✓</span>
                        <p className="text-xs sm:text-sm text-gray-300 leading-normal font-normal">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="w-full text-center lg:text-left">
                    <a
                      href={tech.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <button className="bg-[#136dec] text-white px-5 py-2.5 sm:px-7 sm:py-3 rounded-lg font-bold text-xs sm:text-sm hover:bg-blue-700 transition relative inline-flex items-center gap-2 shadow-md shadow-blue-900/20 group">
                        <span>EXPLORE HM FASTTRACK</span>
                        <span className="text-sm transition-transform duration-200 group-hover:translate-x-1" style={{ fontFamily: "Inter, sans-serif" }}>
                          →
                        </span>
                        <img
                          className="w-12 h-5 sm:w-14 sm:h-6 absolute -right-5 -bottom-2.5 sm:-right-6 sm:-bottom-3 pointer-events-none"
                          src={effect}
                          alt=""
                        />
                      </button>
                    </a>
                  </div>
                </div>

                {/* Right Column: Visual Mockup / Calibration Curve (5 cols) */}
                <div className="lg:col-span-5 flex flex-col items-center">
                  <div className="w-full bg-[#070b14]/90 border border-blue-900/40 rounded-2xl p-4 sm:p-5 shadow-2xl relative overflow-hidden backdrop-blur-sm">
                    {/* Window Control Header */}
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/80">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                        <span className="text-[11px] font-mono text-gray-400 ml-2">hmfasttrack</span>
                      </div>
                    </div>

                    {/* Simulation Mockup Image */}
                    <div className="relative overflow-hidden rounded-xl bg-white p-2 sm:p-3 flex items-center justify-center">
                      <img
                        src={tech.mockup}
                        alt="HM FastTrack Pressure Match Simulation"
                        className="w-full h-auto object-contain rounded-lg"
                      />
                    </div>

                    {/* Caption */}
                    <p className="text-[11px] text-gray-400 text-center mt-3 leading-relaxed">
                      Real field pressure calibration curve with CatBoost surrogate optimization aligning dynamic models to observation data.
                    </p>
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
