import Partner_logo from "../components/partner-logo";
import "../styles/Partner.css";
import effect from "../assets/images/button-effects.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Partners() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 700,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div>
      <div className="partner-hero">
        <h1 data-aos="zoom-in" data-aos-duration="50000">
          GROW FASTER, TOGETHER
        </h1>
        <p data-aos="zoom-in" data-aos-duration="50000">
          We believe in strong partnerships that create real impact. Whether
          you're a tech provider, consultant, or business looking to scale,
          we’re here to collaborate and build something great.
        </p>
        <button
          className="glow-on-hover"
          data-aos="fade-up"
          data-aos-duration="50000"
        >
          BOOK A FREE CONSULTATION
          <img id="button-effect" src={effect} alt="button effect" />
        </button>
        <img id="hero3bg" src="/images/hero3bg.png" alt="hero3 img" />
      </div>
      <div className="container"></div>

      <Partner_logo />
      <div data-aos="fade-up" className="main-partner">
        <h1>WHY PARTNER WITH US</h1>
        <p className="first-p">
          Great things happen when the right minds come together. We work with
          businesses, startups, and industry leaders to create seamless digital
          solutions that drive growth.
        </p>
        <div className="main-partner-col">
          <div className="main-partner-col1">
            <h3>EXPAND YOUR REACH</h3>
            <p>Get access to new markets and customers.</p>
          </div>
          <div className="main-partner-col2">
            <h3>LEVERAGE OUR EXPERTISE</h3>
            <p>Work with a team that understands tech and business</p>
          </div>
          <div className="main-partner-col2">
            <h3>OUUNLOCK MORE OPPURTUNITIES</h3>
            <p>Collaborate on projects that create real value.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
