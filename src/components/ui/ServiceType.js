import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ServiceType = ({
  title,
  description,
  services,
  list_title,
  howWeWorkSteps,
  imageUrl,
  isReversed,
  index,
}) => {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: true,
      duration: 700,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="w-full bg-white">
      <div className="flex justify-center w-full py-16 px-6 sm:px-12 md:py-24 md:px-16 lg:py-32 lg:px-16 xl:px-24">
        <div
          data-aos="fade-up"
          className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center w-full max-w-7xl`}
        >
          <div className="w-full lg:w-1/2 flex justify-center">
            <img src={imageUrl} alt="Service" className="w-full max-w-md h-auto rounded-xl shadow-lg object-cover" />
          </div>

          <div className="w-full lg:w-1/2 text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">{title}</h1>
            <p className="text-sm md:text-base text-gray-600 mb-8 leading-relaxed">{description}</p>
            <h2 className="text-base sm:text-lg font-semibold mb-4 text-gray-800">{list_title}</h2>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index} className="text-sm md:text-base font-medium text-gray-600 flex items-start">
                  <img
                    src={service.icon}
                    alt={service.name}
                    className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5"
                  />
                  <span><strong>{service.name}:</strong> {service.info}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="px-6 py-16 sm:px-12 sm:py-20 lg:px-32 lg:py-32 bg-[#0a0b12] text-white bg-[url('/public/images/step-bg.png')] bg-auto bg-no-repeat lg:bg-contain lg:bg-repeat bg-[center_calc(100%+50px)] lg:bg-bottom flex justify-center">
        <div className="w-full max-w-7xl">
          <h3 data-aos="fade-up" className="text-center text-white mb-10 text-2xl sm:text-3xl lg:text-4xl font-bold">How We Work</h3>
          <div data-aos="zoom-in" className={`grid grid-cols-1 sm:grid-cols-2 ${howWeWorkSteps.length === 3 ? 'lg:grid-cols-3 lg:max-w-5xl lg:mx-auto' : 'lg:grid-cols-4'} gap-6`}>
            {howWeWorkSteps.map((step, index) => (
              <div key={index} className="border border-white/20 p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
                <h4 className="font-black text-5xl sm:text-6xl lg:text-7xl mb-4 lg:mb-8 text-white/20" style={{ fontFamily: 'Inter, sans-serif' }}>{step.number}</h4>
                <h5 className="text-[#d0a225] font-bold text-base sm:text-lg lg:text-xl mb-4">{step.title}</h5>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceType;
