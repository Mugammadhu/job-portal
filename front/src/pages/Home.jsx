import React, { useEffect, useState } from "react";
import axios from "axios";
import JobCard from "../components/JobCard";
import "../styles/Home.css";
import search from "../assets/search.svg";
import Location from "../assets/Location.svg";
import type from "../assets/type.svg";

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [salary, setSalary] = useState(100000); // Default 1 LPA
  const [refreshJobs, setRefreshJobs] = useState(0); // Trigger refetch

  const fetchJobs = () => {
    axios
      .get("https://job-portal-8cii.onrender.com/api/jobs")
      .then((response) => {
        console.log("Fetched jobs:", response.data); // Debug
        const jobsWithFallback = response.data.map((job) => ({
          ...job,
          createdAt: job.createdAt || new Date().toISOString(), // Fallback
        }));
        setJobs(jobsWithFallback);
        setFilteredJobs(jobsWithFallback);
      })
      .catch((error) => console.error("Error fetching jobs:", error));
  };

  useEffect(() => {
    fetchJobs();
  }, [refreshJobs]);

  useEffect(() => {
    const results = jobs.filter((job) => {
      const matchesSearch =
        (job.title?.toLowerCase().includes(searchText.toLowerCase()) || false) ||
        (job.description?.toLowerCase().includes(searchText.toLowerCase()) || false);

      const matchesLocation =
        !location || job.location?.toLowerCase() === location.toLowerCase();

      const matchesType =
        !jobType || job.jobType?.toLowerCase() === jobType.toLowerCase();

      const matchesSalary = !job.salary || job.salary <= salary; // Check salary <= selected salary

      return matchesSearch && matchesLocation && matchesType && matchesSalary;
    });

    console.log("Filtered jobs:", results); // Debug
    setFilteredJobs(results);
  }, [searchText, location, jobType, salary, jobs]);

  // Callback for JobCreateForm to trigger refetch
  const handleJobPosted = () => {
    setRefreshJobs((prev) => prev + 1);
  };

  return (
    <div className="home-container">
      <div className="filter-bar">
        <div className="filter-section">
          <img src={search} alt="search" />
          <input
            type="text"
            className="input-field"
            placeholder="Search by Job Title or Description"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <div className="vertical-divider"></div>
        <div className="filter-section">
          <img src={Location} alt="location" />
          <select
            className="select-field"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="">Preferred Location</option>
            <option>Chennai</option>
            <option>Bangalore</option>
            <option>Mumbai</option>
          </select>
        </div>
        <div className="vertical-divider"></div>
        <div className="filter-section">
          <img src={type} alt="type" />
          <select
            className="select-field"
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
          >
            <option value="">Job Type</option>
            <option>Full Time</option>
            <option>Internship</option>
            <option>Part Time</option>
          </select>
        </div>
        <div className="vertical-divider"></div>
        <div className="salary-range">
          <label>
            Salary Range{" "}
            <span className="salary-value">
              Up to {Math.round(salary / 100000)} LPA
            </span>
          </label>
          <input
            type="range"
            className="custom-range"
            min="100000"
            max="3000000"
            step="100000"
            value={salary}
            onChange={(e) => setSalary(parseInt(e.target.value))}
          />
        </div>
      </div>

      <div className="job-grid">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div className="job-card-wrapper" key={job._id}>
              <JobCard {...job} onJobPosted={handleJobPosted} />
            </div>
          ))
        ) : (
          <p className="no-jobs">No jobs found matching your criteria.</p>
        )}
      </div>
    </div>
  );
};

export default Home;