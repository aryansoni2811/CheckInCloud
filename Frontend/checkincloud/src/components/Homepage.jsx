import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <img 
          src="https://www.luxuryabode.com/mona/img/hotels.jpg" 
          alt="Luxury Hotel" 
          className="hero-image"
        />
        <div className="overlay">
          <div className="content-card">
            <h1>Welcome to Our Hotel</h1>
            <p>Step into a haven of comfort and care</p>
            <Link to="/hotels" className="book-now-btn">
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
