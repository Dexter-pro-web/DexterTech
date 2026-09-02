import effect from "../assets/images/button-effects.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ServiceType from "../components/ui/ServiceType";
import {
  ServiceData1,
  ServiceData2,
  ServiceData3,
  ServiceData4,
  ServiceData5,
  ServiceData6,
} from "../data/servicesData";

export default function Services() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: true,
      duration: 700,
      easing: "ease-in-out",
    });
  }, []);

  const serviceDataArray = [
    ServiceData1,
    ServiceData2,
    ServiceData3,
    ServiceData4,
    ServiceData5,
    ServiceData6,
  ];

  return (
    <div>
      <div className="flex flex-col items-center justify-center px-6 py-20 lg:px-32 lg:py-0 relative overflow-hidden bg-[#0a0b12] text-white text-center min-h-screen lg:min-h-[calc(100vh-90px)]">
        <h1 data-aos="zoom-in" className="text-3xl lg:text-5xl font-bold mb-6 mt-10 lg:mt-0 relative z-20">
          WE MAKE TECH WORK FOR YOU
        </h1>
        <p data-aos="zoom-in" className="text-base lg:text-lg mb-8 max-w-3xl text-gray-300 relative z-20">
          Tech doesn’t have to be complicated. We help businesses like yours run
          smoother, work faster, and grow smarter with tailored digital
          solutions. Whether you need custom software, IT security, or expert
          support, we’ve got you covered.
        </p>
        <button className="relative z-20 w-full sm:w-auto px-8 py-4 mb-10 lg:mb-20 bg-[#136dec] text-white rounded-lg font-bold text-sm lg:text-base cursor-pointer overflow-visible hover:bg-blue-700 transition">
          BOOK A FREE CONSULTATION
          <img className="absolute w-[58px] h-[26px] -right-6 -bottom-3 z-10" src={effect} alt="" />
        </button>
        <img className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-0 w-full max-w-[800px] lg:max-w-[1200px] opacity-70 pointer-events-none" src="/images/hero3bg.png" alt="Background glow" />
      </div>

      <div className="w-full h-[9px] bg-[linear-gradient(110deg,black_10%,#d0a225_10%,#136dec_15%,white_15%)]"></div>

      {serviceDataArray.map((service, index) => (
        <ServiceType
          key={index}
          title={service.title}
          description={service.description}
          list_title={service.list_title}
          services={service.services}
          howWeWorkSteps={service.howWeWorkSteps}
          imageUrl={service.imageUrl}
          isReversed={index % 2 !== 0}
        />
      ))}

      <div className="h-[275px]"></div>
    </div>
  );
}
