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
        "One of our core values is leveraging cutting-edge enterprise technology solutions to transform businesses across Africa. We are equipped with knowledge for multiple innovative approaches which combine cloud infrastructure services, business technology consulting, and other IT services in Nigeria and Africa.",
    },
    {
      number: "03.",
      title: "CLIENT SATISFACTION",
      content:
        "One of our core values is leveraging cutting-edge enterprise technology solutions to transform businesses across Africa. We are equipped with knowledge for multiple innovative approaches which combine cloud infrastructure services, business technology consulting, and other IT services in Nigeria and Africa.",
    },
    {
      number: "04.",
      title: "INTEGRITY",
      content:
        "One of our core values is leveraging cutting-edge enterprise technology solutions to transform businesses across Africa. We are equipped with knowledge for multiple innovative approaches which combine cloud infrastructure services, business technology consulting, and other IT services in Nigeria and Africa.",
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
