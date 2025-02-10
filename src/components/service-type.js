import React from "react";
import "../styles/service-type.css";
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
  style,
  index,
  info, // Add index as a prop
}) => {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 700,
      easing: "ease-in-out",
    });
  }, []);

  const isEven = index % 2 === 0;

  return (
    <section className="service-type-section">
      <div
        data-aos="fade-up"
        className="service-type-content"
        style={style}
      >
        <div className="service-type-image">
          <img src={imageUrl} alt="image alt" />
        </div>

        <div className="service-type-text">
          <h1>{title}</h1>
          <p>{description}</p>
          <h2>{list_title}</h2>
          <ul>
            {services.map((service, index) => (
              <li key={index} className="service-item">
                <img
                  src={service.icon}
                  alt={service.name}
                  className="service-icon"
                />
                {service.name}: {service.info}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="how-we-work">
        <h3 data-aos="fade-up">How We Work</h3>
        <div data-aos="zoom-in" className="work-steps">
          {howWeWorkSteps.map((step, index) => (
            <div key={index} className="work-step">
              <h4>{step.number}</h4>
              <h5>{step.title}</h5>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="container3"></div>
    </section>
  );
};

export default ServiceType;
