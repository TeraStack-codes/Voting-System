import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
    <div className="hero">
      <div className="hero-overlay">
        <div className="hero-bg"></div>
      </div>
      <div className="hero-content">
        <h1 className="hero-title">Make Your Voice Heard</h1>
        <p className="hero-subtitle">
          Vote for your favorite candidates in this year's student council elections.
        </p>
        <button className="hero-cta"><Link to="/vote" className="vote-btn">Vote Now</Link></button>
      </div>
    </div>
    </>
  );
};

export default Home;
