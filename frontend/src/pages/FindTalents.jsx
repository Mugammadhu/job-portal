import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/FindTalents.css';

const FindTalents = () => {
  const [talents, setTalents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/jobs')
      .then(response => setTalents(response.data))
      .catch(error => console.error('Error fetching talents:', error));
  }, []);

  return (
    <div className="container mt-4">
      <div className="card find-talents-card">
        <div className="card-body">
          <h2 className="card-title">Find Talents</h2>
          <p className="card-text">
            Explore a pool of skilled professionals. Use the search filters below to find the perfect match.
          </p>
          <div className="input-group mb-3 filter-bar">
            <input type="text" className="form-control" placeholder="Search by Skill or Role" />
            <select className="form-select">
              <option>Preferred Location</option>
            </select>
            <select className="form-select">
              <option>Experience Level</option>
            </select>
          </div>
          {talents.map((talent, index) => (
            <div key={index} className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">{talent.title}</h5>
                <p className="card-text">{talent.company} | {talent.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FindTalents;