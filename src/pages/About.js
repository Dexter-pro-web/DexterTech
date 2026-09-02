import Clients from "../components/sections/Clients";
import Why from "../components/sections/Why";
import Hero from "../components/sections/Hero";
import image1 from "../assets/images/about-hero-img.png";
import techlines from "../assets/images/tech-lines.png";
import effect from "../assets/images/button-effects.png";
import Stats from "../components/sections/Stats";

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
      <div className="w-full h-[9px] bg-[linear-gradient(110deg,black_10%,#d0a225_10%,#136dec_15%,white_15%)]"></div>

      <div className="bg-[#f7f8fc] relative overflow-hidden flex justify-center p-6 sm:p-10 lg:p-16 xl:p-24">
        <div className="flex flex-col lg:flex-row justify-between lg:gap-12 max-w-7xl w-full">
          <div
            data-aos="fade-right"
            className="flex justify-center lg:justify-start w-full lg:w-1/2 bg-transparent relative"
          >
            <img className="hidden lg:block absolute -left-96 w-[150%] h-96 opacity-50 pointer-events-none" src={techlines} alt="" />
            <img
              src="/images/who-we-are.png"
              alt="Who we are"
              className="rounded-2xl z-10 w-full lg:max-w-md h-auto lg:h-[444px] mt-0 lg:mt-8 mb-6 lg:mb-0 object-cover shadow-lg"
            />
          </div>
          <div
            data-aos="fade-left"
            className="overflow-hidden bg-transparent w-full lg:w-1/2 text-center lg:text-left pt-6 lg:pt-0"
          >
            <h1 className="text-black mt-0 text-lg sm:text-xl lg:text-3xl mb-4 lg:mb-6 font-bold uppercase tracking-wide">WH0 WE ARE</h1>
            <p className="text-gray-600 font-medium text-sm md:text-base leading-relaxed text-justify lg:text-left">
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
      </div>

      <div data-aos="fade-up" className="pt-10 px-6 pb-16 md:px-32 md:pb-36 text-center bg-[#f7f8fc] flex justify-center">
        <div className="max-w-7xl w-full">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-8 md:mb-12 uppercase tracking-wide">WHAT DRIVES US</h1>
          <div className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-12 mt-16 md:mt-0">
            <div className="bg-white rounded-b-2xl relative text-justify w-full lg:w-1/2 p-6 md:p-10 shadow-sm before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-2 before:bg-[linear-gradient(130deg,#2212a0_80%,#2c17ce_80%,#2c17ce_82%,#845554_85%,#d0a225_100%)]">
              <h3 className="text-base md:text-lg mb-4 font-bold">OUR MISSION</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                To deliver innovative and integrated information technology
                solutions empowering our clients to achieve operational
                excellence, provide seamless processes, and foster sustainable
                growth across all tech-related services.
              </p>
            </div>
            <div className="bg-white rounded-b-2xl relative text-justify w-full lg:w-1/2 p-6 md:p-10 shadow-sm before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-2 before:bg-[linear-gradient(130deg,#2212a0_80%,#2c17ce_80%,#2c17ce_82%,#845554_85%,#d0a225_100%)]">
              <h3 className="text-base md:text-lg mb-4 font-bold">OUR VISION</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                To be the leading provider of advanced IT solutions and
                cross-divisional services, to be recognized for our unwavering
                commitment to quality, safety, and client success in the tech,
                energy, and maritime sectors.
              </p>
            </div>
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
