import Clients from "../components/clients";
import Why from "../components/why";
import Hero from "../components/hero";
import image1 from "../assets/images/about-hero-img.png";
import techlines from "../assets/images/tech-lines.png";
import effect from "../assets/images/button-effects.png";
import Stats from "../components/stats";
import "../styles/PageStyle/about.css";

export default function About() {
  return (
    <div>
      <Hero
        title="MEET THE TECHNOLOGY EXPERTS DRIVING YOOUR SUCCESS"
        description="We are Dexterpro Technology – your trusted partner for innovative tech solutions. From software development
         to enterprise IT services, our unmatched expertise and dedication empower businesses to thrive in a competitive world. 
         Let us help you unlock new opportunities and achieve your goals."
        buttonText="BOOK A FREE CONSULTATION"
        effectImage={effect}
        techLinesImage={techlines}
        backgroundImage={image1}
      />
      <div className="container"></div>

      <div className="hero3">
        <div
          data-aos="fade-right"
          data-aos-duration="50000"
          className="hero3-img"
        >
          <img id="test" src={techlines} alt="hero-image" />
          <img
            src="/images/who-we-are.png"
            alt="hero-background"
            id="main-img"
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="50000"
          className="hero-text"
        >
          <h1>WH0 WE ARE</h1>
          <p>
            At Dexterpro Technology, we believe technology should make life
            easier and businesses thrive. That’s why we’re dedicated to
            providing innovative and reliable tech solutions that work for you.
            We’re a team of passionate problem-solvers, tech enthusiasts, and
            forward-thinkers, driven by one goal: empowering businesses like
            yours to achieve more. Whether you need software development,
            enterprise solutions, or IT consultancy, we’re here to provide the
            expertise and tools to help you succeed. Headquartered in Lagos,
            we’re proud to be a trusted partner for companies across Africa,
            delivering cutting-edge technology that meets real-world needs. From
            small startups to large enterprises, our solutions are tailored to
            each client's unique goals, ensuring every project is a success. Our
            commitment to innovation, professionalism, and integrity sets us
            apart. With a focus on client satisfaction, we work hard to build
            relationships that last, delivering results that speak for
            themselves. Let’s work together to transform your business through
            technology that works—because your success is our success.
          </p>
        </div>
      </div>

      <div data-aos="fade-up" className="drive">
        <h1>WHAT DRIVES US</h1>
        <div className="drive-col">
          <div className="drive-col1">
            <h3>OUR MISSION</h3>
            <p>
              To deliver innovative and integrated information technology
              solutions empowering our clients to achieve operational
              excellence, provide seamless processes, and foster sustainable
              growth across all tech-related services.
            </p>
          </div>
          <div className="drive-col2">
            <h3>OUR VISION</h3>
            <p>
              To be the leading provider of advanced IT solutions and
              cross-divisional services, to be recognized for our unwavering
              commitment to quality, safety, and client success in the tech,
              energy, and maritime sectors.
            </p>
          </div>
        </div>
      </div>
      <Why
        title="WHY WORK WITH US"
        imageSrc="/images/about-wwwu.png"
        subtitle="LEADING IT SOLUTIONS IN NIGERIA, AFRICA"
        description="DexterPro Technology equips & empowers businesses across Nigeria and Africa with innovative tech solutions. We are guided by our core values of strong partnerships, professionalism, client trust, innovation, and consistent value delivery, driving long-term success and growth for our clients through digital transformation."
      />
      <Stats />
      <Clients />
    </div>
  );
}
