import React from 'react';
import { Link } from 'react-router-dom'; // if you are using react-router for navigation

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        {/* Your dad's service logo here */}
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/calculator">Pricing</Link></li>
        <li><Link to="/testimonials">Testimonials</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
