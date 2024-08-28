import React from 'react';
import './Home.css'; // Custom styles for Home

function Home() {
  return (
    <div className="home">
      <h2>Welcome to the Waste Segregator</h2>
      <p>Efficient waste management at your fingertips.</p>
      <img src="/assets/waste-segregator.png" alt="Waste Segregator" className="home-image" />
    </div>
  );
}

export default Home;
