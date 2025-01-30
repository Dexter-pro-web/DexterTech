import Accordion from "./accordion";
import "../styles/why.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Why({ title, imageSrc, subtitle, description }) {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 700,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="why">
      <div className="why-col1">
        <Accordion />
      </div>

      <div data-aos="zoom-in" className="why-col2">
        <h1>{title}</h1>
        <img src={imageSrc} alt={title} />
        <h3>{subtitle}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Why;
