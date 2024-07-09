import React from 'react'
import { useEffect } from 'react'
import '../css/Home.css';
import axios from 'axios';

const Home = () => {
  
  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="hero-text">COURSE MANAGEMENT</h1>
        <br></br>
        <p className="hero-description">
          Welcome to our COURSE SHOP, where learning is just a click away. 
          Explore, engage, and excel with our diverse range of courses designed to empower your education journey.
        </p>
      </div>
      <div className="hero-image"></div>
    </div>
  );
}

export default Home;