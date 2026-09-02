import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = ({
  title,
  description,
  buttonText,
  effectImage,
  techLinesImage,
  backgroundImage,
}) => {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: true,
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="px-6 py-16 lg:px-32 lg:py-0 relative overflow-hidden bg-[#0a0b12] min-h-[calc(100vh-60px)] lg:min-h-[calc(100vh-90px)] flex justify-center">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 max-w-7xl w-full">
        <div data-aos="fade-up" className="w-full lg:w-1/2 z-10 text-center lg:text-left">
          <h1 className="text-3xl lg:text-5xl font-bold mb-4 text-white">{title}</h1>
          <p className="text-base lg:text-lg mb-8 text-gray-300">{description}</p>
          <a href="mailto:dexterprotechnologylimited@gmail.com">
            <button className="relative z-10 w-full sm:w-auto px-8 py-4 bg-[#136dec] text-white rounded-lg font-bold text-sm lg:text-base cursor-pointer overflow-visible hover:bg-blue-700 transition">
              {buttonText}
              {effectImage && (
                <img className="absolute w-[58px] h-[26px] -right-6 -bottom-3 z-10" src={effectImage} alt="" />
              )}
            </button>
          </a>
        </div>
        <div data-aos="fade-left" className="w-full lg:w-1/2 relative flex justify-center lg:justify-end mt-12 lg:mt-0">
          {techLinesImage && (
            <img className="absolute w-[150%] max-w-none h-auto -right-[20%] top-1/2 -translate-y-1/2 z-0 opacity-50 pointer-events-none" src={techLinesImage} alt="" />
          )}
          <img className="relative z-10 w-full max-w-[320px] lg:max-w-[400px] h-auto rounded-2xl object-cover shadow-2xl" src={backgroundImage} alt="Hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
