import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Features from './pages/Features';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <div className="logo">Waste Segregator</div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/features">Features</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <header>
          <h1>Welcome to Waste Segregator</h1>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/features" element={<Features />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <footer>
          &copy; 2024 Waste Segregator. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;
