import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import CreateJob from "../pages/CreateJob";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Left - Logo */}
          <div className="logo">
            <img src={logo} alt="Logo" height="30" />
          </div>

          {/* Center - Navigation Links */}
          <ul className="nav-links">
            <li>
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/find-talents">
                Find Talents
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/about-us">
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/testimonials">
                Testimonials
              </NavLink>
            </li>
          </ul>

          {/* Right - Button */}
          <div className="btn-wrapper">
            <button className="create-btn" onClick={() => setModalOpen(true)}>
              Create Form
            </button>
          </div>
        </div>
      </nav>

      <CreateJob isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default Navbar;