import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function PartnerLogo() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: true,
      duration: 700,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div data-aos="zoom-in" className="text-center bg-white mt-10 mx-4 sm:mx-8 lg:mx-32 lg:mt-16 mb-10 lg:mb-32 py-10 lg:py-0">
      <h2 className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 lg:mb-12 uppercase font-bold text-gray-800 tracking-wider">OUR PARTNERS</h2>
      <div className="flex flex-wrap justify-center items-center mx-auto gap-6 sm:gap-8 lg:gap-12 max-w-7xl opacity-80">
        {["cisco", "hp", "dell", "lenovo", "fortinet", "hitachi", "huawei", "paloalto", "trelix", "citrix", "redhat", "oracle", "microsoft"].map((logoName) => (
          <img key={logoName} src={`/logos/${logoName}.png`} alt={logoName} className="p-1 object-contain w-auto h-10 sm:h-12 lg:h-14 transition-opacity hover:opacity-100" />
        ))}
      </div>
    </div>
  );
}

export default PartnerLogo;
