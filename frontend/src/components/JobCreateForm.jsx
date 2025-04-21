/* eslint-disable no-unused-vars */
import React, { useState, useRef } from "react";
import axios from "axios";
import "../styles/JobCreateForm.css";

const JobCreateForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    jobType: "",
    minSalary: "",
    maxSalary: "",
    experienceMin: "",
    experienceMax: "",
    workMode: "",
    deadline: "",
    description: "",
    image: null,
  });

  const [previewImage, setPreviewImage] = useState(null);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image" && files && files[0]) {
      const file = files[0];
      setFormData((prev) => ({ ...prev, [name]: file }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        data.append(key, value);
      });

      const response = await axios.post(`${import.meta.env.VITE_SERVER}/api/jobs`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setSuccessMsg("Job posted successfully!");
      setErrorMsg("");
      setFormData({
        title: "",
        company: "",
        location: "",
        jobType: "",
        minSalary: "",
        maxSalary: "",
        experienceMin: "",
        experienceMax: "",
        workMode: "",
        deadline: "",
        description: "",
        image: null,
      });
      setPreviewImage(null);
    } catch (error) {
      setErrorMsg("Failed to post job.");
      setSuccessMsg("");
    }
  };

  const handleSaveDraft = () => {
    setSuccessMsg("Draft saved successfully!");
    setErrorMsg("");
  };

  return (
    <div className="job-create-form">
      <button className="form-close" onClick={onClose}>
        X
      </button>
      {successMsg && <p className="success-msg">{successMsg}</p>}
      {errorMsg && <p className="error-msg">{errorMsg}</p>}
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        {/* Row with 3 inputs */}
        <div className="form-row">
          <div className="form-group">
            <label>Job Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              placeholder="Full Stack Developer"
            />
          </div>
          <div className="form-group">
            <label>Company Name</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              placeholder="Amazon"
            />
          </div>
          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              placeholder="Chennai"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Job Type</label>
            <select name="jobType" value={formData.jobType} onChange={handleChange} required>
              <option value="">Select Job Type</option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Internship">Internship</option>
            </select>
          </div>
          <div className="form-group">
            <label>Work Mode</label>
            <select name="workMode" value={formData.workMode} onChange={handleChange} required>
              <option value="">Select Work Mode</option>
              <option value="Remote">Remote</option>
              <option value="On-site">On-site</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>
          <div className="form-group">
            <label>Deadline</label>
            <input
              type="date"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Min Salary (₹)</label>
            <input
              type="number"
              name="minSalary"
              value={formData.minSalary}
              onChange={handleChange}
              required
              placeholder="0"
            />
          </div>
          <div className="form-group">
            <label>Max Salary (₹)</label>
            <input
              type="number"
              name="maxSalary"
              value={formData.maxSalary}
              onChange={handleChange}
              required
              placeholder="120000"
            />
          </div>
          <div className="form-group">
            <label>Experience (Years)</label>
            <div className="experience-range">
              <input
                type="number"
                name="experienceMin"
                value={formData.experienceMin}
                onChange={handleChange}
                required
                placeholder="0"
              />
              <span>to</span>
              <input
                type="number"
                name="experienceMax"
                value={formData.experienceMax}
                onChange={handleChange}
                required
                placeholder="5"
              />
            </div>
          </div>
        </div>

        <div className="row_4">


        <div className="form-group image-upload-group">
          <label>Company Logo</label>
          <div className="image-upload-container">
            <div 
              className="image-preview" 
              onClick={handleImageClick}
              style={previewImage ? { backgroundImage: `url(${previewImage})` } : null}
            >
              {!previewImage && <span>Click to upload</span>}
            </div>
            <input
              ref={fileInputRef}
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="file-input"
            />
          </div>
        </div>

        <div className="form-group">
          <label className="description">Job Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            placeholder="Please share a description to let the candidate know..."
          ></textarea>
        </div>
        
        </div>



        <div className="form-actions">
          <button type="button" onClick={handleSaveDraft} className="btn save-draft">
            Save Draft
          </button>
          <button type="submit" className="btn publish">
            Publish
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobCreateForm;