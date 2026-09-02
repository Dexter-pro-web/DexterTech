import PartnerLogo from "../components/sections/PartnerLogo";
import effect from "../assets/images/button-effects.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Partners() {
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
      <div className="flex flex-col items-center justify-center px-6 py-20 lg:px-32 lg:py-0 relative overflow-hidden bg-[#0a0b12] text-white text-center min-h-screen lg:min-h-[calc(100vh-90px)]">
        <h1 data-aos="zoom-in" className="text-3xl lg:text-5xl font-bold mb-6 mt-10 lg:mt-0 relative z-20">
          GROW FASTER, TOGETHER
        </h1>
        <p data-aos="zoom-in" className="text-base lg:text-lg mb-8 max-w-3xl text-gray-300 relative z-20">
          We believe in strong partnerships that create real impact. Whether
          you're a tech provider, consultant, or business looking to scale,
          we’re here to collaborate and build something great.
        </p>
        <button className="relative z-20 w-full sm:w-auto px-8 py-4 mb-10 lg:mb-20 bg-[#136dec] text-white rounded-lg font-bold text-sm lg:text-base cursor-pointer overflow-visible hover:bg-blue-700 transition">
          BOOK A FREE CONSULTATION
          <img className="absolute w-[58px] h-[26px] -right-6 -bottom-3 z-10" src={effect} alt="" />
        </button>
        <img className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-0 w-full max-w-[800px] lg:max-w-[1200px] opacity-70 pointer-events-none" src="/images/hero3bg.png" alt="Background glow" />
      </div>
      <div className="w-full h-[9px] bg-[linear-gradient(110deg,black_10%,#d0a225_10%,#136dec_15%,white_15%)]"></div>

      <PartnerLogo />
      <div data-aos="fade-up" className="pt-20 lg:pt-32 pb-40 lg:pb-64 px-6 sm:px-10 lg:px-16 xl:px-24 text-center bg-[#f7f8fc] flex justify-center">
        <div className="max-w-7xl w-full">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8 lg:mb-12">WHY PARTNER WITH US</h1>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-0 mb-10 max-w-3xl mx-auto">
            Great things happen when the right minds come together. We work with
            businesses, startups, and industry leaders to create seamless digital
            solutions that drive growth.
          </p>
          <div className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-12 pb-16 lg:pb-0">
            <div className="bg-white rounded-b-2xl relative text-left w-full lg:w-1/3 p-6 sm:p-8 lg:p-10 shadow-sm before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-2 before:bg-[linear-gradient(130deg,#2212a0_80%,#2c17ce_80%,#2c17ce_82%,#845554_85%,#d0a225_100%)]">
              <h3 className="text-base lg:text-lg mb-4 font-bold">EXPAND YOUR REACH</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">Get access to new markets and customers.</p>
            </div>
            <div className="bg-white rounded-b-2xl relative text-left w-full lg:w-1/3 p-6 sm:p-8 lg:p-10 shadow-sm before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-2 before:bg-[linear-gradient(130deg,#2212a0_80%,#2c17ce_80%,#2c17ce_82%,#845554_85%,#d0a225_100%)]">
              <h3 className="text-base lg:text-lg mb-4 font-bold">LEVERAGE OUR EXPERTISE</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">Work with a team that understands tech and business</p>
            </div>
            <div className="bg-white rounded-b-2xl relative text-left w-full lg:w-1/3 p-6 sm:p-8 lg:p-10 shadow-sm before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-2 before:bg-[linear-gradient(130deg,#2212a0_80%,#2c17ce_80%,#2c17ce_82%,#845554_85%,#d0a225_100%)]">
              <h3 className="text-base lg:text-lg mb-4 font-bold">UNLOCK MORE OPPORTUNITIES</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">Collaborate on projects that create real value.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
