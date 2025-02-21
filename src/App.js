import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import React from "react";
import Navbar from "./Navbar/navbar";
import Comet from "./Comet/comet";
import Home from "./Aboutme/home";
import Projects from "./projects/projects";
import About from "./About/about";
import Contact from "./contact/contact";

function AnimatedRoutes() {
  const location = useLocation(); // Get current route

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {["/", "/projects", "/about", "/contact"].map((path, index) => (
          <Route
            key={index}
            path={path}
            element={
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }} 
                transition={{ duration: 0.4 }} // 400ms fade
              >
                {path === "/" && <Home />}
                {path === "/projects" && <Projects />}
                {path === "/about" && <About />}
                {path === "/contact" && <Contact />}
              </motion.div>
            }
          />
        ))}
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [acceleration, setAcceleration] = useState(0);

  return (
    <Router>
      <Navbar setAcceleration={setAcceleration} />
      <Comet acceleration={acceleration} />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
