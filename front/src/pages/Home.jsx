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
  const [salary, setSalary] = useState(100000); // Default to max

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/jobs")
      .then((response) => {
        setJobs(response.data);
        setFilteredJobs(response.data); // Initialize filteredJobs with all jobs
      })
      .catch((error) => console.error("Error fetching jobs:", error));
  }, []);

  useEffect(() => {
    const results = jobs.filter((job) => {
      const matchesSearch =
        (job.title?.toLowerCase().includes(searchText.toLowerCase()) || false) ||
        (job.role?.toLowerCase().includes(searchText.toLowerCase()) || false);

      const matchesLocation =
        !location || job.location?.toLowerCase() === location.toLowerCase();

      const matchesType =
        !jobType || job.type?.toLowerCase() === jobType.toLowerCase();

      // Include jobs without salary data or if salary matches
      const matchesSalary =
        !job.minSalary && !job.maxSalary || // Include if no salary data
        (job.minSalary <= salary && job.maxSalary <= salary);

      return matchesSearch && matchesLocation && matchesType && matchesSalary;
    });

    setFilteredJobs(results);
  }, [searchText, location, jobType, salary, jobs]);

  return (
    <div className="container mt-4">
      <div className="row g-3">
        <div className="col-12">
          <div className="filter-bar">
            <div className="filter-section">
              <img src={search} alt="search" />
              <input
                type="text"
                className="form-control"
                placeholder="Search by Job Title, Role"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </div>

            <div className="vertical-divider"></div>

            <div className="filter-section">
              <img src={Location} alt="location" />
              <select
                className="form-select"
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
                className="form-select"
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
                Salary Per Month{" "}
                <span className="salary-value">₹10k - ₹{Math.round(salary / 1000)}k</span>
              </label>
              <input
                type="range"
                className="custom-range"
                min="10000"
                max="100000"
                step="1000"
                value={salary}
                onChange={(e) => setSalary(parseInt(e.target.value))}
                style={{
                  background: `linear-gradient(to right, black ${(salary - 10000) / 900}% , #ccc ${(salary - 10000) / 900}%)`,
                }}
              />
            </div>
          </div>
        </div>

        {filteredJobs.length > 0 ? (
          filteredJobs.map((job, index) => (
            <div className="col-md-4" key={index}>
              <JobCard {...job} />
            </div>
          ))
        ) : (
          <div className="col-12">
            <p>No jobs found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;