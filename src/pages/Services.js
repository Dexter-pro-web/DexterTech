import effect from "../assets/images/button-effects.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "../styles/service.css"
import ServiceType from "../components/service-type";
import { ServiceData1, ServiceData2} from "../components/Data/servicesData";

export default function Services() {

        useEffect(() => {
          AOS.init({
            once: false,
            duration: 700,
            easing: "ease-in-out",
          });
        }, []);
        
  return (
    <div>
      <div className="service-hero">
        <h1  data-aos="zoom-in"
          data-aos-duration="50000">WE MAKE TECH WORK FOR YOU</h1>
        <p  data-aos="zoom-in"
          data-aos-duration="50000">Tech doesn’t have to be complicated. We help businesses like yours run smoother, work faster, and grow smarter with tailored digital solutions. 
          Whether you need custom software, IT security, or expert support, we’ve got you covered.</p>
          <button className="glow-on-hover"  data-aos="fade-up"
          data-aos-duration="50000">
          BOOK A FREE CONSULTATION
          <img id="button-effect" src={effect} alt="button effect" />
        </button >
        <img id="hero3bg" src='/images/hero3bg.png' alt="hero3 img" />
      </div>
      <div className="container"></div>

      <ServiceType
        title={ServiceData1.title}
        description={ServiceData1.description}
        list_title={ServiceData1.list_title}
        services={ServiceData1.services}
        howWeWorkSteps={ServiceData1.howWeWorkSteps}
        imageUrl={ServiceData1.imageUrl}
      />

      <ServiceType
        title={ServiceData2.title}
        description={ServiceData2.description}
        list_title={ServiceData2.list_title}
        services={ServiceData2.services}
        howWeWorkSteps={ServiceData2.howWeWorkSteps}
        imageUrl={ServiceData2.imageUrl}
      />
      
    </div>
  );
}
