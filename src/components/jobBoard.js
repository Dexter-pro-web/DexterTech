import React, { useState } from "react";
import { jobData } from "../components/Data/jobData";
import JobCard from "../components/jobCard";

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
    <div className="job-board">
      <div className="filter-buttons">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`filter-btn ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="job-listings">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job, index) => <JobCard key={index} job={job} />)
        ) : (
          <div data-aos="fade-in" className="no-jobs-message">
            <img src="/icons/no-job-icon.png" alt="no-job" />
            <p>No openings at the moment, but stay tuned!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobBoard;
