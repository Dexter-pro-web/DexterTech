import "../styles/Home.css";
import image1 from "../assets/images/hero-img.png";
import techlines from "../assets/images/tech-lines.png";
import effect from "../assets/images/button-effects.png";
import Clients from "../components/clients";
import Why from "../components/why";
import Hero from "../components/hero";
import Stats from "../components/stats";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Partner_logo from "../components/partner-logo";

export default function Home() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 700,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div>
      <Hero
        title="EMPOWERING YOUR BUSINESS WITH TECHNOLOGY THAT WORKS"
        description="We believe technology drives growth and innovation. We're dedicated to delivering quality solutions, excellent service, and building lasting partnerships to elevate your business."
        buttonText="BOOK A FREE CONSULTATION"
        effectImage={effect}
        techLinesImage={techlines}
        backgroundImage={image1}
      />

      <div className="container"></div>

      <div className="hero2">
        <div
          data-aos="zoom-in"
          data-aos-duration="50000"
          className="hero-img"
        >
          <img id="test" src={techlines} alt="hero-image" />
          <img src="/images/why-we-are.png" alt="hero-background" />
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="50000"
          className="hero-text"
        >
          <h1>WHY WE ARE THE BEST TECH SERVICE COMPANY IN LAGOS</h1>
          <p>
            At DexterPro Technology, we’re passionate about helping businesses
            in Nigeria and across Africa unlock their full potential. As a
            one-stop tech solutions provider, we offer innovative tools and
            services designed to take your business to the next level. From
            creating custom solutions to solving everyday challenges, we’re here
            to make things easier for you. Our commitment to your success is
            rooted in our core values, ensuring we’re with you every step of the
            way to deliver long-term growth and real results you can count on.
          </p>
          <button className="glow-on-hover">
            READ MORE
            <img id="button-effect" src={effect} alt="hero-image" />{" "}
          </button>
        </div>
      </div>

      <div className="offerings">
        <h1>OUR TEAM IS SKILLED IN OFFERING</h1>
        <p>
          Expert tech solutions uniquely tailored to deliver 98% success, from
          custom software development to round-the-clock technical support. We
          don't just build software; we optimize your operations, boost
          efficiency, and ensure your success through services designed to match
          your unique business needs and preferences.
        </p>

        <div className="offering1">
          <div data-aos="zoom-in" data-aos-duration="50000" className="col1">
            <h3>SOFTWARE DEVELOPMENT</h3>
            <p>
              {" "}
               We deliver customized web and mobile software applications
              alongside professional enterprise-level software solutions. We
              integrate specific and tailored solutions to streamline core
              processes driving significant value and impact for your business.
            </p>
            <img src="/images/software-dev.png" alt="hero-background" />
          </div>
          <div data-aos="fade-left" data-aos-duration="50000" className="col2">
            <h3>CYBER SECURITY</h3>
            <p>
              Partnering with us means more than just securing your business, we
              offer end-to-end services, from technology assessments to
              implementation and continuous support. Our expert team ensures you
              make informed, strategic decisions that align with your business
              goals, driving success for both your operations and ours. We are
              here to safeguard your future while enabling growth and
              resilience.
            </p>
            <img src="/images/cybersecurity.png" alt="hero-background" />
          </div>
        </div>
        <div className="offering2">
          <div data-aos="zoom-in" data-aos-duration="50000" className="col3">
            <img src="/images/enterprise.png" alt="hero-background" />
            <h3>ENTERPRISE SOLUTIONS</h3>
            <p>
              Here at Dexterpro, we deliver enterprise technology solutions that
              work. Specializing in ERP systems, cloud infrastructure, and
              workflow automation to help businesses increase efficiency and
              reduce costs. We have proven expertise in data management and
              software integration which ensures smooth digital transformation
              for mid to large organizations.
            </p>
          </div>
          <div data-aos="fade-left" data-aos-duration="50000" className="col4">
            <img src="/images/procurement.png" alt="hero-background" />
            <h3>PROCUREMENTS INSTALLATIONS</h3>
            <p>
              We simplify the process of acquiring and setting up the right
              tools and equipment for your business. Sourcing high-quality
              products leading to seamless installation, we ensure you have
              everything you need to enhance productivity and achieve your
              goals. We can fully trust us for a hassle-free, end-to-end
              solution tailored to your requirements
            </p>
          </div>
        </div>
        <div className="offering1">
          <div data-aos="zoom-in" data-aos-duration="50000" className="col5">
            <h3>TECHNICAL SUPPORT</h3>
            <p>
              Our team of skilled technical support experts ensures your
              business runs smoothly with fully functioning equipment that
              guarantees safety and optimal productivity. This includes routine
              maintenance to assisting with equipment purchases, we deliver
              comprehensive, effective services tailored to your needs. We're
              here to keep your operations efficient and hassle-free.
            </p>
            <img src="/images/technical.png" alt="hero-background" />
          </div>
          <div data-aos="fade-left" data-aos-duration="50000" className="col6">
            <h3>TECHNOLOGY CONSULTING</h3>
            <p>
              We can be relied upon to help your business align its goals with
              the right tech solutions. Starting with a perfect structure from
              strategy to implementation, we provide expert guidance to drive
              efficiency, scalability, and success.
            </p>
            <img src="/images/consulting.png" alt="hero-background" />
          </div>
        </div>
      </div>

      <div className="container2"></div>

      <Partner_logo/>

      <div className="container"></div>

      <Why
        title="WHY WORK WITH US"
        imageSrc="/images/why-work-with-us.png"
        subtitle="LEADING IT SOLUTIONS IN NIGERIA, AFRICA"
        description="DexterPro Technology equips & empowers businesses across Nigeria and Africa with innovative tech solutions. We are guided by our core values of strong partnerships, professionalism, client trust, innovation, and consistent value delivery, driving long-term success and growth for our clients through digital transformation."
      />

      <Stats />

      <div className="unlock">
        <h1>
          UNLOCK YOUR POTENTIAL WITH <br /> DEXTERPRO ACADEMY
        </h1>
        <p style={{ marginBottom: "91px" }}>
          Empowering Africa's Next Generation of Tech Leaders
        </p>
        <div className="unlock-inner">
          <div
            data-aos="zoom-in"
            data-aos-duration="50000"
            className="unlock-col1"
          >
            <h3>EXPERT INSTRUCTIONS AT YOUR SERVICE</h3>
            <p>
              Learn from industry professionals who bring real-world experience
              to every class.
            </p>
            <h3>FLEXIBLE LEARNING THAT WORKS FOR YOU</h3>
            <p>
              Master new skills with training programs that fit your schedule
              and budget.
            </p>
            <h3>REAL WORLD TECH SKILLS</h3>
            <p>
              We don’t just teach; we equip you with practical, hands-on
              knowledge to stand out in the competitive job market and excel in
              your chosen field.
            </p>
            <h3>INDEMAND COURSES</h3>
            <p>
              From software development to cloud computing, learn foundational
              skills to advanced certifications. Our Tech Academy offers a wide
              range of courses to meet the unique needs of learners of all
              levels.
            </p>
            <button
              className="glow-on-hover"
              style={{ width: "auto", fontFamily: "MyCustomFont" }}
            >
              VISIT WEBSITE{" "}
              <img id="button-effect" src={effect} alt="hero-image" />{" "}
            </button>
          </div>

          <div
            className="unlock-col2"
          >
            <img src="/images/unlock-img.png" alt="unlock image" />
          </div>
        </div>
      </div>

      <Clients />
    </div>
  );
}
