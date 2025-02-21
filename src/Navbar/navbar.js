import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css"; 
import logo from "./logo.png";

const Navbar = ({ setAcceleration }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();

  const handleClick = (index, path) => {
    setActiveIndex(index);
    setAcceleration(30);

    setTimeout(() => {
      setAcceleration(0);
      navigate(path); // Navigate after delay
    }, 1500); // Delay before navigating
  };

  return (
    <div className="navbar">
      <div className="logo" onClick={() => navigate("/")}>
        <img src={logo} alt="Logo" />
      </div>
      <div className="navbar-menu">
        {[
          { name: "Projects", path: "/projects" },
          { name: "About Me", path: "/about" },
          { name: "Contact", path: "/contact" }
        ].map((item, index) => (
          <p
            key={index}
            className={`menu-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => handleClick(index, item.path)}
          >
            {item.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
