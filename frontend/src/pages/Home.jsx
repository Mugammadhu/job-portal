import React, { useEffect, useState } from "react";
import axios from "axios";
import JobCard from "../components/JobCard";
import "../styles/Home.css";

const Home = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/jobs")
      .then((response) => setJobs(response.data))
      .catch((error) => console.error("Error fetching jobs:", error));
  }, []);

  return (
    <div className="container mt-4">
      <div className="row g-3">
        <div className="col-12">
          <div className="filter-bar">
            <input
              type="text"
              className="form-control"
              placeholder="Search by Job Title, Role"
            />
            <select className="form-select">
              <option>Preferred Location</option>
            </select>
            <select className="form-select">
              <option>Job Type</option>
            </select>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                minWidth: "160px",
              }}
            >
              <label style={{ fontSize: "12px", marginBottom: "4px" }}>
                Salary Per Month
              </label>
              <input
                type="range"
                className="form-range"
                min="50000"
                max="80000"
              />
              <span style={{ fontSize: "12px" }}>₹50k - ₹80k</span>
            </div>
          </div>
        </div>
        {jobs.map((job, index) => (
          <div className="col-md-4" key={index}>
            <JobCard {...job} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
