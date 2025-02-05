import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const JobCard = ({ job }) => {

        useEffect(() => {
          AOS.init({
            once: false,
            duration: 700,
            easing: "ease-in-out",
          });
        }, []);

  return (
    <div data-aos="fade-up" className="job-card">
      <div className="job-info">
        <h2 className="job-title">{job.title}</h2>
        {job.hybrid && <span className="hybrid-tag">Hybrid</span>}
        </div>
        <p className="job-description">{job.description}</p>
      <div className="job-actions">
      <div className="job-details">
      <img src="/icons/dollar-icon.png" alt="currency"/>
          <span>{job.salary}</span>
        </div>
        <button className="apply-btn">Apply</button>
      </div>
    </div>
  );
};

export default JobCard;
