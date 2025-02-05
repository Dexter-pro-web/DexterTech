import "../styles/PageStyle/career.css";
import JobBoard from "../components/jobBoard";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Careers() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 700,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div>
      <div className="career-hero">
        <h1 data-aos="zoom-in" data-aos-duration="50000">
          JOIN OUR TEAM, BULD THE FUTURE
        </h1>
        <p data-aos="zoom-in" data-aos-duration="50000">
          We’re looking for smart, passionate people who love solving real
          problems. If you’re excited about creating impact and growing your
          career, you’re in the right place.
        </p>
        <img id="career-img" src="/images/career-img.png" alt="hero3 img" />
        <img id="hero3bg" src="/images/hero3bg.png" alt="hero3 img" />
      </div>
      <div className="container"></div>
      <JobBoard />
      <div style={{ height: "300px" }}></div>
    </div>
  );
}
