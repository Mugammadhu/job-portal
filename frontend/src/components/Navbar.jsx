import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="Logo" height="30" />
        </NavLink>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/find-talents">Find Talents</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/about-us">About Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/testimonials">Testimonials</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link btn btn-primary" to="/create-job">Create Jobs</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;