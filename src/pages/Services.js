import effect from "../assets/images/button-effects.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "../styles/service.css";
import ServiceType from "../components/service-type";
import { ServiceData1, ServiceData2, ServiceData3, ServiceData4, ServiceData5, ServiceData6 } from "../components/Data/servicesData";

export default function Services() {

  useEffect(() => {
    AOS.init({
      once: false,
      duration: 700,
      easing: "ease-in-out",
    });
  }, []);

  // Array to hold all service data
  const serviceDataArray = [
    ServiceData1,
    ServiceData2,
    ServiceData3,
    ServiceData4,
    ServiceData5,
    ServiceData6
  ];

  return (
    <div>
      <div className="service-hero">
        <h1 data-aos="zoom-in" data-aos-duration="50000">WE MAKE TECH WORK FOR YOU</h1>
        <p data-aos="zoom-in" data-aos-duration="50000">
          Tech doesn’t have to be complicated. We help businesses like yours run smoother, work faster, and grow smarter with tailored digital solutions. Whether you need custom software, IT security, or expert support, we’ve got you covered.
        </p>
        <button className="glow-on-hover" data-aos="fade-up" data-aos-duration="50000">
          BOOK A FREE CONSULTATION
          <img id="button-effect" src={effect} alt="button effect" />
        </button>
        <img id="hero3bg" src='/images/hero3bg.png' alt="hero3 img" />
      </div>

      <div className="container"></div>

      {serviceDataArray.map((service, index) => (
        <ServiceType
          key={index}
          title={service.title}
          description={service.description}
          list_title={service.list_title}
          services={service.services}
          howWeWorkSteps={service.howWeWorkSteps}
          imageUrl={service.imageUrl}
          style={index % 2 != 0 ? { flexDirection: 'row-reverse' } : {}}
        />
      ))}

      <div className="empty-div"></div>
    </div>
  );
}
