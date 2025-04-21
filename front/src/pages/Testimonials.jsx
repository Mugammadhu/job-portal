import React from 'react';
import '../styles/Testimonials.css';

const testimonials = [
  {
    name: "Aisha Verma",
    title: "Software Engineer @ Google",
    image: "https://i.pravatar.cc/150?img=3",
    quote: "This portal helped me land my dream job! The UI is clean and the opportunities are endless."
  },
  {
    name: "Rahul Mehta",
    title: "Frontend Developer @ Flipkart",
    image: "https://i.pravatar.cc/150?img=5",
    quote: "The experience was seamless. Highly recommend for job seekers!"
  },
  {
    name: "Karan Shah",
    title: "UX Designer @ Adobe",
    image: "https://i.pravatar.cc/150?img=7",
    quote: "The portal's design and user flow are exceptional. Kudos to the team!"
  },
  {
    name: "Neha Sharma",
    title: "Data Analyst @ Amazon",
    image: "https://i.pravatar.cc/150?img=8",
    quote: "I got connected with amazing companies. Highly effective job matching!"
  },
  {
    name: "Ankit Rao",
    title: "Backend Developer @ Microsoft",
    image: "https://i.pravatar.cc/150?img=9",
    quote: "The job alerts and resume builder features are game-changers."
  },
  {
    name: "Sneha Kapoor",
    title: "HR Manager @ TCS",
    image: "https://i.pravatar.cc/150?img=10",
    quote: "As a recruiter, this is my go-to platform for finding top tech talent."
  },
  {
    name: "Vikram Iyer",
    title: "DevOps Engineer @ Infosys",
    image: "https://i.pravatar.cc/150?img=11",
    quote: "Fast, reliable, and tailored job recommendations. Found my current role through this!"
  }
];

const Testimonials = () => {
  return (
    <section className="testimonial-section">
      <h2 className="section-title">What Our Users Say</h2>
      <div className="testimonial-grid">
        {testimonials.map((user, idx) => (
          <div className="testimonial-card" key={idx}>
            <img src={user.image} alt={user.name} className="avatar" />
            <h3 className="name">{user.name}</h3>
            <p className="title">{user.title}</p>
            <p className="quote">“{user.quote}”</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
