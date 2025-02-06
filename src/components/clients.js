import React from "react";
import "../styles/clients.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Clients() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 700,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="50000"
      className="clients-container"
    >
      <h3 className="clients-title">Clients That We Have Worked With</h3>
      <div className="clients">
        <img src="/logos/frebson.png" alt="" />
        <img src="/logos/misa.png" alt="" />
        <img src="/logos/akatech.png" alt="" />
        <img src="/logos/perlex.png" alt="" />
        <img src="/logos/one-acre-fund.png" alt="" />
        <img src="/logos/isn.png" alt="" />
        <img src="/logos/fmdq.png" alt="" />
      </div>
    </div>
  );
}

export default Clients;
