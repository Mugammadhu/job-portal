import React from "react";
import "../styles/AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1 className="about-title">Who We Are</h1>
        <p className="about-subtitle">
          Bridging talent and opportunity with technology
        </p>
      </div>

      <div className="about-content card fade-in">
        <h2>🚀 Our Mission</h2>
        <p>
          We aim to transform the hiring experience by creating a platform that
          is intuitive, inclusive, and impactful. We help job seekers find the
          right roles and assist companies in discovering top talent efficiently.
        </p>
      </div>

      <div className="about-content card fade-in delay-1">
        <h2>🌟 Our Vision</h2>
        <p>
          To be the most trusted and user-friendly job platform globally,
          empowering every individual with opportunities that match their passion and skills.
        </p>
      </div>

      <div className="about-content card fade-in delay-2">
        <h2>👥 Meet Our Team</h2>
        <p>
          We are a passionate team of developers, designers, and dreamers who
          believe in the power of technology to change lives. Collaboration and
          innovation are at the heart of everything we do.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
