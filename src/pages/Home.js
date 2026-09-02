import image1 from "../assets/images/hero-img.png";
import techlines from "../assets/images/tech-lines.png";
import effect from "../assets/images/button-effects.png";
import Clients from "../components/sections/Clients";
import Why from "../components/sections/Why";
import Hero from "../components/sections/Hero";
import Stats from "../components/sections/Stats";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import PartnerLogo from "../components/sections/PartnerLogo";

export default function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: true,
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

      <div className="w-full h-[9px] bg-[linear-gradient(110deg,black_10%,#d0a225_10%,#136dec_15%,white_15%)]"></div>

      <div className="bg-gray-50 m-0 relative overflow-hidden flex justify-center p-6 sm:p-10 lg:p-16 xl:p-24">
        <div className="flex flex-col-reverse lg:flex-row lg:justify-between items-center gap-12 max-w-7xl w-full">
          <div data-aos="zoom-in" className="flex justify-center lg:justify-start w-full lg:w-1/2 relative">
            <img className="hidden lg:block absolute -left-96 w-[150%] h-96 opacity-50 pointer-events-none" src={techlines} alt="" />
            <img className="w-full max-w-md rounded-2xl relative z-10 shadow-lg object-cover" src="/images/why-we-are.png" alt="Why we are the best" />
          </div>
          <div
            data-aos="fade-left"
            className="text-center lg:text-left w-full lg:w-1/2 pt-10 lg:pt-0"
          >
            <h1 className="text-xl md:text-2xl lg:text-3xl text-gray-900 mt-0 font-bold mb-6">WHY WE ARE THE BEST TECH SERVICE COMPANY IN LAGOS</h1>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed text-justify lg:text-left mb-8">
              At DexterPro Technology, we’re passionate about helping businesses
              in Nigeria and across Africa unlock their full potential. As a
              one-stop tech solutions provider, we offer innovative tools and
              services designed to take your business to the next level. From
              creating custom solutions to solving everyday challenges, we’re here
              to make things easier for you. Our commitment to your success is
              rooted in our core values, ensuring we’re with you every step of the
              way to deliver long-term growth and real results you can count on.
            </p>
            <button className="bg-[#136dec] text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition relative">
              READ MORE
              <img className="w-14 h-6 absolute -right-6 -bottom-3 pointer-events-none" src={effect} alt="" />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 text-black flex justify-center py-16 px-6 sm:px-10 lg:px-32">
        <div className="flex flex-col items-center max-w-7xl w-full">
          <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">OUR TEAM IS SKILLED IN OFFERING</h1>
          <p className="text-sm md:text-base text-gray-600 text-center max-w-4xl leading-relaxed mb-16">
            Expert tech solutions uniquely tailored to deliver 98% success, from
            custom software development to round-the-clock technical support. We
            don't just build software; we optimize your operations, boost
            efficiency, and ensure your success through services designed to match
            your unique business needs and preferences.
          </p>

          <div className="flex flex-col lg:flex-row gap-6 w-full mb-6">
            <div data-aos="zoom-in" className="bg-gradient-to-b from-[#111318] via-[#07162c] to-[#1a2f4d] rounded-2xl overflow-hidden relative w-full lg:w-3/5 p-8 pb-0 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-white mb-3">SOFTWARE DEVELOPMENT</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  We deliver customized web and mobile software applications
                  alongside professional enterprise-level software solutions. We
                  integrate specific and tailored solutions to streamline core
                  processes driving significant value and impact for your business.
                </p>
              </div>
              <img className="w-full max-w-xl mx-auto -mb-16 mt-8" src="/images/software-dev.png" alt="Software Development" />
            </div>
            <div data-aos="fade-left" className="bg-gradient-to-b from-[#111318] via-[#07162c] to-[#1a2f4d] rounded-2xl overflow-hidden relative w-full lg:w-2/5 p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-white mb-3">CYBER SECURITY</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Partnering with us means more than just securing your business, we
                  offer end-to-end services, from technology assessments to
                  implementation and continuous support. Our expert team ensures you
                  make informed, strategic decisions that align with your business
                  goals.
                </p>
              </div>
              <img className="w-full max-w-[16rem] mx-auto mt-12 lg:mt-16" src="/images/cybersecurity.png" alt="Cyber Security" />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-6 w-full mb-6">
            <div data-aos="zoom-in" className="bg-gradient-to-b from-[#111318] via-[#07162c] to-[#1a2f4d] rounded-2xl overflow-hidden relative w-full lg:w-1/2 p-8 pt-48 lg:pt-56">
              <img className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 max-w-xs -mt-8" src="/images/enterprise.png" alt="Enterprise Solutions" />
              <h3 className="text-lg font-bold text-white mb-3 relative z-10 mt-12">ENTERPRISE SOLUTIONS</h3>
              <p className="text-sm text-gray-300 leading-relaxed relative z-10">
                Here at Dexterpro, we deliver enterprise technology solutions that
                work. Specializing in ERP systems, cloud infrastructure, and
                workflow automation to help businesses increase efficiency and
                reduce costs.
              </p>
            </div>
            <div data-aos="fade-left" className="bg-gradient-to-b from-[#111318] via-[#07162c] to-[#1a2f4d] rounded-2xl overflow-hidden relative w-full lg:w-1/2 p-8 pt-48 lg:pt-56">
              <img className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 max-w-[16rem] lg:max-w-[20rem] -mt-8 object-contain object-center" src="/images/procurement.png" alt="Procurements" />
              <h3 className="text-lg font-bold text-white mb-3 relative z-10 mt-12">PROCUREMENTS INSTALLATIONS</h3>
              <p className="text-sm text-gray-300 leading-relaxed relative z-10">
                We simplify the process of acquiring and setting up the right
                tools and equipment for your business. Sourcing high-quality
                products leading to seamless installation, we ensure you have
                everything you need to enhance productivity.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-6 w-full mb-16">
            <div data-aos="zoom-in" className="bg-gradient-to-b from-[#111318] via-[#07162c] to-[#1a2f4d] rounded-2xl overflow-hidden relative w-full lg:w-2/5 p-8 pb-48 sm:pb-56 lg:pb-64">
              <div className="relative z-10 mb-8 lg:mb-16">
                <h3 className="text-lg font-bold text-white mb-3">TECHNICAL SUPPORT</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Our team of skilled technical support experts ensures your
                  business runs smoothly with fully functioning equipment that
                  guarantees safety and optimal productivity. This includes routine
                  maintenance to assisting with equipment purchases.
                </p>
              </div>
              <img className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-sm z-0" src="/images/technical.png" alt="Technical Support" />
            </div>
            <div data-aos="fade-left" className="bg-gradient-to-b from-[#111318] via-[#07162c] to-[#1a2f4d] rounded-2xl overflow-hidden relative w-full lg:w-3/5 p-8 pb-48 sm:pb-56 lg:pb-64">
              <div className="relative z-10 mb-8 lg:mb-16">
                <h3 className="text-lg font-bold text-white mb-3">TECHNOLOGY CONSULTING</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  We can be relied upon to help your business align its goals with
                  the right tech solutions. Starting with a perfect structure from
                  strategy to implementation, we provide expert guidance to drive
                  efficiency, scalability, and success.
                </p>
              </div>
              <img className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-lg z-0" src="/images/consulting.png" alt="Technology Consulting" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-2 bg-gray-50 bg-[linear-gradient(50deg,white_85%,#d0a225_85%,#136dec_90%,rgba(255,255,255,0)_90%)]"></div>

      <PartnerLogo />

      <div className="w-full h-2 bg-[linear-gradient(110deg,black_10%,#d0a225_10%,#136dec_15%,white_15%)]"></div>

      <Why
        title="WHY WORK WITH US"
        imageSrc="/images/why-work-with-us.png"
        subtitle="LEADING IT SOLUTIONS IN NIGERIA, AFRICA"
        description="DexterPro Technology equips & empowers businesses across Nigeria and Africa with innovative tech solutions. We are guided by our core values of strong partnerships, professionalism, client trust, innovation, and consistent value delivery, driving long-term success and growth for our clients through digital transformation."
      />

      <Stats />

      <div className="py-16 px-6 sm:px-10 lg:px-32 text-center max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          UNLOCK YOUR POTENTIAL WITH <br /> DEXTERPRO ACADEMY
        </h1>
        <p className="text-gray-600 mb-8 font-medium">
          Empowering Africa's Next Generation of Tech Leaders
        </p>
        <div className="h-2 bg-[linear-gradient(110deg,#DD9828_20%,#E6E7F0_20%,#E6E7F0_80%,#136dec_80%)] w-40 mx-auto mb-16 rounded-full"></div>
        
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          <div data-aos="zoom-in" className="text-left w-full lg:w-1/2">
            <div className="mb-6">
              <h3 className="text-lg md:text-xl font-bold mb-2">EXPERT INSTRUCTIONS AT YOUR SERVICE</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Learn from industry professionals who bring real-world experience to every class.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-lg md:text-xl font-bold mb-2">FLEXIBLE LEARNING THAT WORKS FOR YOU</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Master new skills with training programs that fit your schedule and budget.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-lg md:text-xl font-bold mb-2">REAL WORLD TECH SKILLS</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                We don't just teach; we equip you with practical, hands-on
                knowledge to stand out in the competitive job market and excel in
                your chosen field.
              </p>
            </div>
            <div className="mb-8">
              <h3 className="text-lg md:text-xl font-bold mb-2">IN<span style={{ fontFamily: 'Inter, sans-serif' }}>-</span>DEMAND COURSES</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                From software development to cloud computing, learn foundational
                skills to advanced certifications. Our Tech Academy offers a wide
                range of courses to meet the unique needs of learners of all levels.
              </p>
            </div>
            <div className="text-center lg:text-left">
              <a href="https://www.dexterproacademy.com" target="blank" className="inline-block">
                <button className="bg-[#136dec] text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg font-bold text-sm sm:text-base hover:bg-blue-700 transition relative inline-block">
                  VISIT WEBSITE
                  <img className="w-14 h-6 absolute -right-6 -bottom-3" src={effect} alt="" />
                </button>
              </a>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <img className="w-full max-w-sm lg:max-w-md object-contain" src="/images/unlock-img.png" alt="Dexterpro Academy" />
          </div>
        </div>
      </div>

      <Clients />
    </div>
  );
}
