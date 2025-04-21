import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Testimonials.css';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/testimonials')
      .then(response => setTestimonials(response.data))
      .catch(error => console.error('Error fetching testimonials:', error));
  }, []);

  return (
    <div className="container mt-4">
      <div className="card testimonials-card">
        <div className="card-body">
          <h2 className="card-title">Testimonials</h2>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card mb-3 testimonial-item">
              <div className="card-body">
                <p className="card-text">{testimonial.text}</p>
                <h6 className="card-subtitle mb-2 text-muted">{testimonial.name}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;