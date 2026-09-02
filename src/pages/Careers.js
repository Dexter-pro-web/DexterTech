import JobBoard from "../components/sections/JobBoard";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Careers() {
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
      <div className="flex flex-col items-center justify-start px-6 pt-24 lg:pt-32 lg:px-32 relative overflow-hidden bg-[#0a0b12] text-white text-center min-h-[50vh] lg:min-h-[calc(100vh-90px)]">
        <h1 data-aos="zoom-in" className="text-3xl lg:text-5xl font-bold mb-6 mt-10 lg:mt-0 relative z-20">
          JOIN OUR TEAM, BUILD THE FUTURE
        </h1>
        <p data-aos="zoom-in" className="text-base lg:text-lg mb-12 max-w-3xl text-gray-300 relative z-20">
          We’re looking for smart, passionate people who love solving real
          problems. If you’re excited about creating impact and growing your
          career, you’re in the right place.
        </p>
        <img className="relative mt-auto z-10 w-[150%] max-w-[800px] sm:w-[120%] lg:w-full lg:max-w-[1100px] xl:max-w-[1300px] object-contain" src="/images/career-img.png" alt="Hero" />
        <img className="absolute bottom-0 left-1/2 -translate-x-1/2 z-0 w-full max-w-[800px] lg:max-w-[1200px] opacity-70 pointer-events-none" src="/images/hero3bg.png" alt="Background glow" />
      </div>
      <div className="w-full h-[9px] bg-[linear-gradient(110deg,black_10%,#d0a225_10%,#136dec_15%,white_15%)]"></div>
      <JobBoard />
      <div className="h-[300px]"></div>
    </div>
  );
}
