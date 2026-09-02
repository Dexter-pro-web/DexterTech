import React, { useState } from "react";
import { jobData } from "../../data/jobData";
import JobCard from "../ui/JobCard";

const categories = [
  "All",
  "Software Engineering",
  "Product and Design",
  "IT support and Systems",
  "Cybersecurity",
  "Data and Infrastructure",
];

const JobBoard = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredJobs =
    selectedCategory === "All"
      ? jobData
      : jobData.filter((job) => job.category === selectedCategory);

  return (
    <div className="w-full py-6 px-4 sm:py-10 sm:px-8 md:py-12 md:px-16 lg:py-16 lg:px-32 flex justify-center">
      <div className="w-full max-w-7xl">
        <div className="flex flex-nowrap md:flex-wrap justify-start md:justify-center overflow-x-auto gap-3 lg:gap-4 mb-8 pb-4 snap-x">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`whitespace-nowrap flex-shrink-0 snap-start border border-gray-200 rounded-lg cursor-pointer h-10 px-4 py-2 min-w-[5rem] sm:min-w-[6rem] lg:min-w-[7rem] text-sm transition-colors ${
                selectedCategory === category ? "bg-[#136dec] text-white" : "bg-white text-gray-800 hover:bg-gray-50"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-5 lg:gap-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, index) => <JobCard key={index} job={job} />)
          ) : (
            <div data-aos="fade-in" className="text-gray-800 font-medium text-center p-6 text-sm sm:text-base md:text-lg my-12 flex flex-col items-center">
              <img className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 object-contain" src="/icons/no-job-icon.png" alt="No jobs available" />
              <p className="mt-4">No openings at the moment, but stay tuned!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobBoard;
