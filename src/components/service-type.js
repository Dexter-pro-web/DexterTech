import React from "react";
import '../styles/service-type.css';

const ServiceType = ({
  title,
  description,
  services,
  list_title,
  howWeWorkSteps,
  imageUrl,
  style,
}) => {
  return (
    <section className="service-type-section">
      <div className="service-type-content" style={style}>
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
                {service.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="how-we-work">
        <h3>How We Work</h3>
        <div className="work-steps">
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
