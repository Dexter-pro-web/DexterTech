import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import effect from "../assets/images/button-effects.png";
import { technologiesData } from "../data/technologiesData";

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
    <div>
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center px-6 py-20 lg:px-32 lg:py-0 relative overflow-hidden bg-[#0a0b12] text-white text-center min-h-[50vh] lg:min-h-[calc(100vh-90px)]">
        <h1 data-aos="zoom-in" className="text-3xl lg:text-5xl font-bold mb-6 mt-10 lg:mt-0 relative z-20 uppercase tracking-wide">
          PROPRIETARY TECHNOLOGIES
        </h1>
        <p data-aos="zoom-in" className="text-base lg:text-lg mb-8 max-w-3xl text-gray-300 relative z-20 leading-relaxed">
          Innovative digital products and software platforms engineered by DexterPro. From AI-powered industry solutions to modern enterprise and consumer applications, we build technology that empowers businesses and transforms everyday experiences.
        </p>
        <a href="mailto:info@dexterprolimited.com">
          <button className="relative z-20 w-full sm:w-auto px-8 py-4 mb-10 lg:mb-20 bg-[#136dec] text-white rounded-lg font-bold text-sm lg:text-base cursor-pointer overflow-visible hover:bg-blue-700 transition">
            PARTNER OR LICENSE OUR TECH
            <img className="absolute w-[58px] h-[26px] -right-6 -bottom-3 z-10" src={effect} alt="" />
          </button>
        </a>
        <img
          className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-0 w-full max-w-[800px] lg:max-w-[1200px] opacity-70 pointer-events-none"
          src="/images/hero3bg.png"
          alt="Background glow"
        />
      </div>

      <div className="w-full h-[9px] bg-[linear-gradient(110deg,black_10%,#d0a225_10%,#136dec_15%,white_15%)]" />

      {/* Main Technologies Showcase */}
      <div className="bg-[#0a0b12] text-white py-16 sm:py-24 px-4 sm:px-8 lg:px-16 xl:px-24 flex justify-center">
        <div className="max-w-7xl w-full flex flex-col gap-20">
          {technologiesData.map((tech) => (
            <div
              key={tech.id}
              data-aos="fade-up"
              className="bg-gradient-to-b from-[#111728] via-[#0b101c] to-[#070a12] rounded-3xl border border-blue-900/40 p-6 sm:p-10 lg:p-14 shadow-2xl relative overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Logo Header */}
              <div className="flex items-center justify-between pb-6 sm:pb-8 border-b border-slate-800/80 mb-8 sm:mb-10">
                <img
                  src={tech.logo}
                  alt={`${tech.name} Logo`}
                  className="h-8 sm:h-9 md:h-10 w-auto object-contain filter drop-shadow"
                />
              </div>

              {/* Two Column Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-12">
                {/* Left Description & Specs (7 cols) */}
                <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight uppercase">
                    {tech.tagline}
                  </h2>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 text-justify lg:text-left">
                    {tech.description}
                  </p>

                  {/* 4 Stats Grid */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full mb-8">
                    {tech.stats.map((stat, idx) => (
                      <div
                        key={idx}
                        className="bg-[#0c1220]/90 border border-blue-900/30 rounded-xl p-3.5 sm:p-4 text-left"
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

                  {/* Feature Checkmarks */}
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

                  {/* Actions */}
                  <div>
                    <a
                      href={tech.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <button className="bg-[#136dec] text-white px-6 sm:px-8 py-3 rounded-lg font-bold text-xs sm:text-sm hover:bg-blue-700 transition relative inline-flex items-center gap-2 shadow-md shadow-blue-900/20 group">
                        <span>EXPLORE HM FASTTRACK</span>
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
                    </a>
                  </div>
                </div>

                {/* Right Visual Frame (5 cols) */}
                <div className="lg:col-span-5 flex flex-col items-center">
                  <div className="w-full bg-[#070b14]/90 border border-blue-900/40 rounded-2xl p-4 sm:p-5 shadow-2xl relative overflow-hidden backdrop-blur-sm">
                    {/* Window Controls */}
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
                        alt="HM FastTrack Simulation"
                        className="w-full h-auto object-contain rounded-lg"
                      />
                    </div>

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

      {/* Engineering Philosophy Cards */}
      <div data-aos="fade-up" className="pt-20 lg:pt-28 pb-32 lg:pb-48 px-6 sm:px-10 lg:px-16 xl:px-24 text-center bg-[#f7f8fc] flex justify-center">
        <div className="max-w-7xl w-full">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8 uppercase tracking-wide text-gray-900">
            HOW WE BUILD OUR TECHNOLOGIES
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mt-0 mb-12 max-w-3xl mx-auto">
            Every product engineered by DexterPro is rooted in user-first design, robust modern architecture, and real-world impact.
          </p>
          <div className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-12">
            <div className="bg-white rounded-b-2xl relative text-left w-full lg:w-1/3 p-6 sm:p-8 lg:p-10 shadow-sm before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-2 before:bg-[linear-gradient(130deg,#2212a0_80%,#2c17ce_80%,#2c17ce_82%,#845554_85%,#d0a225_100%)]">
              <h3 className="text-base lg:text-lg mb-4 font-bold text-gray-900">USER<span style={{ fontFamily: "Inter, sans-serif" }}>-</span>CENTERED DESIGN</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                We design intuitive, engaging experiences tailored to real user needs, making complex processes simple, fast, and accessible.
              </p>
            </div>
            <div className="bg-white rounded-b-2xl relative text-left w-full lg:w-1/3 p-6 sm:p-8 lg:p-10 shadow-sm before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-2 before:bg-[linear-gradient(130deg,#2212a0_80%,#2c17ce_80%,#2c17ce_82%,#845554_85%,#d0a225_100%)]">
              <h3 className="text-base lg:text-lg mb-4 font-bold text-gray-900">SCALABLE AND SECURE ARCHITECTURE</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Built on modern cloud infrastructure and dependable tech stacks designed to support growth, high availability, and data protection.
              </p>
            </div>
            <div className="bg-white rounded-b-2xl relative text-left w-full lg:w-1/3 p-6 sm:p-8 lg:p-10 shadow-sm before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-2 before:bg-[linear-gradient(130deg,#2212a0_80%,#2c17ce_80%,#2c17ce_82%,#845554_85%,#d0a225_100%)]">
              <h3 className="text-base lg:text-lg mb-4 font-bold text-gray-900">INNOVATION WITH PURPOSE</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                We apply cutting-edge technology, from artificial intelligence to automated workflows, to solve practical problems and deliver measurable results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
