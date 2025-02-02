import React from 'react';
import '../styles/Homepage.css';

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="banner">
        <h1>Welcome to CheckInCloud</h1>
        <p>Step into a haven of comfort and care</p>
        <button className="btn btn-primary">Book Now</button>
      </div>
    </div>
  );
};

export default Homepage;
