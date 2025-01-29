import "../styles/hero.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = ({
  title,
  description,
  buttonText,
  effectImage,
  techLinesImage,
  backgroundImage,
}) => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="hero">
      <div data-aos="fade-up" data-aos-duration="50000" className="hero-text">
        <h1>{title}</h1>
        <p>{description}</p>
        <button className="glow-on-hover">
          {buttonText}{" "}
          <img id="button-effect" src={effectImage} alt="button effect" />
        </button>
      </div>
      <div data-aos="fade-left" className="hero-img">
        <img id="test" src={techLinesImage} alt="hero image" />
        <img src={backgroundImage} alt="hero background" />
      </div>
    </div>
  );
};

export default Hero;
