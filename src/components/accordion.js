import React, { useState } from "react";
import "../styles/accordion.css";

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
    <div className="accordion">
      {accordionData.map((item, index) => (
        <div
          key={index}
          className={`accordion-item ${activeIndex === index ? "active" : ""}`}
        >
          <div className="accordion-title" onClick={() => toggleSection(index)}>
            <span className="accordion-number">{item.number}</span>
            <span className="accordion-icon">
              {activeIndex === index ? "▲" : "▼"}
            </span>
          </div>
          <h3>{item.title}</h3>
          <div className="accordion-content">
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
