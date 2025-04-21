import React from 'react';
import '../styles/FindTalents.css';

const candidates = [
  {
    name: "Aisha Verma",
    role: "Full Stack Developer",
    image: "https://i.pravatar.cc/150?img=3",
    skills: ["React", "Node.js", "MongoDB", "TypeScript"],
    location: "Bengaluru, India",
    experience: "3+ years",
  },
  {
    name: "Rahul Mehta",
    role: "Frontend Developer",
    image: "https://i.pravatar.cc/150?img=5",
    skills: ["HTML", "CSS", "JavaScript", "Vue.js"],
    location: "Pune, India",
    experience: "2 years",
  },
  {
    name: "Sneha Kapoor",
    role: "UI/UX Designer",
    image: "https://i.pravatar.cc/150?img=10",
    skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
    location: "Remote",
    experience: "4+ years",
  },
  {
    name: "Vikram Iyer",
    role: "DevOps Engineer",
    image: "https://i.pravatar.cc/150?img=11",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    location: "Hyderabad, India",
    experience: "5+ years",
  }
];

const FindTalents = () => {
  return (
    <section className="talent-section">
      <h2 className="section-title">Find Top Talent</h2>
      <div className="talent-grid">
        {candidates.map((candidate, index) => (
          <div className="talent-card" key={index}>
            <img src={candidate.image} alt={candidate.name} className="talent-avatar" />
            <h3 className="talent-name">{candidate.name}</h3>
            <p className="talent-role">{candidate.role}</p>
            <p className="talent-location">{candidate.location} • {candidate.experience}</p>
            <div className="talent-skills">
              {candidate.skills.map((skill, i) => (
                <span className="skill-badge" key={i}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FindTalents;
