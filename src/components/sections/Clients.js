import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Clients() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: true,
      duration: 700,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div
      data-aos="zoom-in"
      className="mt-12 sm:mt-16 md:mt-24 mb-16 sm:mb-20 md:mb-32 pb-16 sm:pb-20 md:pb-32 px-8 sm:px-16 md:px-32"
    >
      <h3 className="font-bold text-center text-sm sm:text-base md:text-lg mb-8 sm:mb-10 text-black/70 uppercase tracking-widest">
        Clients That We Have Worked With
      </h3>
      <div className="flex justify-center flex-wrap gap-8 sm:gap-10 md:gap-12 items-center">
        <img className="h-8 sm:h-10 md:h-12 w-auto object-contain" src="/logos/frebson.png" alt="" />
        <img className="h-8 sm:h-10 md:h-12 w-auto object-contain" src="/logos/misa.png" alt="" />
        <img className="h-8 sm:h-10 md:h-12 w-auto object-contain" src="/logos/akatech.png" alt="" />
        <img className="h-8 sm:h-10 md:h-12 w-auto object-contain" src="/logos/perlex.png" alt="" />
        <img className="h-8 sm:h-10 md:h-12 w-auto object-contain" src="/logos/one-acre-fund.png" alt="" />
        <img className="h-8 sm:h-10 md:h-12 w-auto object-contain" src="/logos/isn.png" alt="" />
        <img className="h-8 sm:h-10 md:h-12 w-auto object-contain" src="/logos/fmdq.png" alt="" />
        <img className="h-8 sm:h-10 md:h-12 w-auto object-contain" src="/logos/redleaf.png" alt="" />
      </div>
    </div>
  );
}

export default Clients;
