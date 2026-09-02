import Accordion from "../ui/Accordion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Why({ title, imageSrc, subtitle, description }) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: true,
      duration: 700,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="bg-[#0a0b12] flex justify-center p-4 pb-40 sm:p-8 sm:pb-40 lg:px-32 lg:pt-16 lg:pb-64">
      <div className="flex flex-col-reverse lg:flex-row w-full max-w-7xl gap-12 lg:gap-24">
        <div className="w-full lg:w-1/2">
          <Accordion />
        </div>

        <div data-aos="zoom-in" className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-start p-6 pb-0 lg:p-0">
          <h1 className="text-xl sm:text-2xl lg:text-4xl text-white mb-6 sm:mb-8 lg:mb-12 w-full text-center lg:text-left font-bold">{title}</h1>
          <img src={imageSrc} alt={title} className="mb-6 w-full lg:max-w-xl h-auto object-cover rounded-xl" />
          <h3 className="text-lg lg:text-2xl text-white mb-4 lg:mb-6 w-full text-center lg:text-left font-semibold">{subtitle}</h3>
          <p className="text-gray-300 text-sm md:text-base w-full lg:max-w-xl text-center lg:text-justify leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Why;
