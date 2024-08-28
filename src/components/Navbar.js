import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Custom styles for Navbar

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">Waste Segregator</Link>
        <ul className="navbar-nav">
          <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
          <li className="nav-item"><Link to="/features" className="nav-link">Features</Link></li>
          <li className="nav-item"><Link to="/profile" className="nav-link">Profile</Link></li>
          <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
