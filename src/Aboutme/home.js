import React from "react";
import './home.css'
import mypic from './mypic.jpg'

const Home = () => {
  return (
    <div className="about-container">
      <img src={mypic} alt="Vedant" className="about-image" />
      <div className="about-text">
        <h2>Hey, I'm <span className="highlight">Rann Abhay</span> 👋</h2>
        <p>
          A passionate <span className="highlight">web developer</span> on a journey to master 
          frontend and backend technologies. I love bringing ideas to life through code, 
          solving challenges, and building sleek, functional applications. Every day is 
          a step forward in learning, innovating, and pushing limits. Let’s create something 
          amazing together! 🚀
        </p>
      </div>
    </div>
  );
};

export default Home;
