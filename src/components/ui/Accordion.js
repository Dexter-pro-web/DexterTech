import React, { useState } from "react";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleSection = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      number: "01.",
      title: "INNOVATION",
      content:
        "One of our core values is leveraging cutting-edge enterprise technology solutions to transform businesses across Africa. We are equipped with knowledge for multiple innovative approaches which combine cloud infrastructure services, business technology consulting, and other IT services in Nigeria and Africa.",
    },
    {
      number: "02.",
      title: "PROFESSIONALISM",
      content:
        "We have highly trained and certified IT experts who are ready to always deliver enterprise-grade solutions with precision and excellence. We follow industry best practices in software development, cloud architecture, and system integration. Our professional team brings decades of combined experience in implementing complex technology solutions across various business sectors.",
    },
    {
      number: "03.",
      title: "CLIENT SATISFACTION",
      content:
        "We pride ourselves in measuring our success through our clients' digital transformation achievements. We have a proven track record which includes 98% client retention rate across Nigeria and African Tech Solutions. Executed plans from initial consultation to post-implementation support, ensuring a seamless technology adoption and measurable business outcomes through dedicated project management and responsive technical support.",
    },
    {
      number: "04.",
      title: "INTEGRITY",
      content:
        "Trust is the solid foundation we build all our technology partnerships on by maintaining transparent communication, ethical business practices, and unwavering commitment to all data security. All operations and solutions adhere to international compliance standards, ensuring your business interests are protected while we drive your digital innovation journey.",
    },
  ];

  return (
    <div className="mb-32 lg:mb-0 lg:p-4 px-4 sm:px-6 md:px-8">
      {accordionData.map((item, index) => (
        <div
          key={index}
          className="rounded-lg mb-0 bg-[#0a0b12] transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] p-4 sm:p-6 lg:p-8"
        >
          <div 
            className="flex justify-between items-center cursor-pointer transition-colors duration-300 ease-in-out" 
            onClick={() => toggleSection(index)}
          >
            <span className="text-white/70 mr-3 text-xs sm:text-sm">
              {item.number}
            </span>
            <span 
              className={`text-white transition-transform duration-300 ease-in-out text-xs sm:text-sm ${activeIndex === index ? "rotate-180" : ""}`}
            >
              ▼
            </span>
          </div>
          <h3 className="text-white/70 uppercase mt-2 text-lg sm:text-xl transition-colors duration-300 ease-in-out">
            {item.title}
          </h3>
          <div 
            className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? "max-h-[500px] opacity-100 pt-4 translate-y-0" : "max-h-0 opacity-0 pt-0 -translate-y-2"}`}
          >
            <p className="m-0 text-white/70 text-justify text-sm sm:text-base mb-4 md:mb-0 leading-relaxed">
              {item.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
