import React from "react";
import "./projects.css";
import gamepic from "./gamepic.png";
import drake from "./drakepic.webp";

const handleClick1 = () => {
    window.open("https://rannabhay.github.io/Space-Invader-Remake/", "_blank");
};


const handleClick2 = () => {
    window.open("https://rannabhay.github.io/DrakeGame/", "_blank");
};

const Projects = () => {
  return (
    <div className="container">
      <div className="box" onClick={handleClick1}>
        <div className="img-div">
          <img src={gamepic} alt="Space Invader" className="game-img" />
        </div>
        <div>
          <h2 className="game-title">Space Invader</h2>
          <p className="game-desc">
                Space Invader is a classic arcade shooter where you control a spaceship 
                and defend against waves of alien invaders. Built using HTML, CSS, and JavaScript, 
                this game features smooth movement, shooting mechanics, and increasing difficulty. 
                Can you survive the invasion?
          </p>
        </div>
      </div>
      <div className="box" onClick={handleClick2}>
        <div className="img-div">
            <img src={drake} alt="Space Invader" className="game-img" />
        </div>
        <div>
            <h2 className="game-title">Drake Game</h2>
            <p className="game-desc">
                Drake Game is a fast-paced arcade challenge where you control Drake, navigating through a
                dynamic world filled with obstacles. The goal? Touch the minors before time runs out! With
                increasing difficulty, smooth controls, and engaging gameplay, this game tests your reflexes
                and precision. Can you master the challenge and set a new high score?
            </p>
            </div>
      </div>
    </div>
  );
};

export default Projects;
