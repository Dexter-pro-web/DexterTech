import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const JobCard = ({ job }) => {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: true,
      duration: 700,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div data-aos="fade-up" className="bg-white border border-gray-200 rounded-xl flex flex-col p-4 sm:p-6 md:p-8">
      <div className="flex flex-row justify-between w-full">
        <h2 className="mt-0 mb-3 text-base sm:text-lg lg:text-xl font-semibold">{job.title}</h2>
        {job.hybrid && <span className="bg-white text-gray-800 rounded mb-2 border border-gray-100 text-xs sm:text-sm px-2 py-1 md:px-3">Hybrid</span>}
      </div>
      <p className="text-gray-700 mb-3 text-sm md:text-base">{job.description}</p>
      <div className="flex flex-row justify-between items-center w-full mt-6 py-3">
        <div className="text-gray-500 font-medium flex gap-2 text-sm sm:text-base items-center">
          <img className="w-5 h-5 object-contain" src="/icons/dollar-icon.png" alt="Salary" />
          <span>{job.salary}</span>
        </div>
        <button className="bg-[#136dec] text-white border-none rounded-lg cursor-pointer font-medium text-sm px-4 py-2 hover:bg-blue-700 transition-colors">Apply</button>
      </div>
    </div>
  );
};

export default JobCard;
