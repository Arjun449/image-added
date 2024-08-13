import React from 'react';
import Sidebar from './Sidebar.js';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <Sidebar />
      <div className="home-section">
        <div className="background-image"></div>
        <div className="overlay-text">
          <h1>Walmart Sparkathon 2024 hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhbhellllllllllllllllllllllllllhhhhh</h1>

          <p>Supply Chain Dashboard</p>
          <input type="email" placeholder="Email address" />
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
