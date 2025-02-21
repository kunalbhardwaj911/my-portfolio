import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about-block">
      <h2 className="about-block-title"> About Me</h2>
      <p className="about-block-text">
        Hey, I'm <span className="highlight-block">Rann Abhay</span>, a passionate{" "}
        <span className="highlight-block">web developer</span> on a mission to build
        sleek, fast, and user-friendly websites. I specialize in{" "}
        <span className="highlight-block">React, JavaScript, HTML, and CSS</span>, and
        I’m currently diving into{" "}
        <span className="highlight-block">backend development and DSA</span> to level
        up my skills.
      </p>
      <p className="about-block-text">
        I love working on creative projects, whether it’s developing{" "}
        <span className="highlight-block">interactive web apps, games</span>, or
        experimenting with new technologies. My goal is to{" "}
        <span className="highlight-block">become a full-stack developer</span> and
        bring innovative ideas to life.
      </p>
      <p className="about-block-text">
        When I’m not coding, you’ll find me exploring{" "}
        <span className="highlight-block">cybersecurity, watching anime</span>, or
        planning my next big project. 🚀
      </p>
    </div>
  );
};

export default About;
