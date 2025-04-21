/* eslint-disable no-undef */

import React, { useState } from "react";
import "../styles/JobCard.css";

const JobCard = ({
  title = "Untitled Job",
  company = "Unknown Company",
  location = "Unknown Location",
  minSalary = 0,
  maxSalary = 0,
  experienceMin = 0,
  experienceMax = 0,
  jobType = "Unknown",
  workMode = "Unknown",
  deadline = "N/A",
  description = "No description available",
  createdAt = "N/A",
  image,
}) => {
  const [showPopup, setShowPopup] = useState(false);

  const imageSrc = image
  ? `data:image/jpeg;base64,${Buffer.from(image).toString('base64')}`
  : require('../assets/logo.png').default;

  const handleApply = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  return (
    <div className="job-card">
      <div className="job-card-header">
        <img src={imageSrc} alt="logo" className="job-logo" />
        <div className="job-meta">
          <span className="time">2h ago</span>
          <span className="job-type">{jobType}</span>
        </div>
      </div>

      <h3 className="job-title">{title}</h3>

      <p className="company-name">{company}</p>

      <div className="job-details">
        <span>{experienceMin}-{experienceMax} yr Exp</span>
        <span>{workMode}</span>
        <span>₹{minSalary} - ₹{maxSalary}</span>
      </div>

      <div className="job-location">
        <span>{location}</span>
        <span>Apply Before: {deadline}</span>
      </div>

      <p className="job-desc">{description}</p>

      <button className="btn-apply" onClick={handleApply}>
        Apply Now
      </button>

      {showPopup && <div className="popup-success">Applied Successfully!</div>}
    </div>
  );
};

export default JobCard;