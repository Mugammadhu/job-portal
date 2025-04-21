import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Nav.css';

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left - Logo */}
        <div className="logo">Logo</div>

        {/* Center - Navigation Links */}
        <ul className="nav-links">
          <li>
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Right - Button */}
        <div className="btn-wrapper">
          <button className="create-btn">Create Form</button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
