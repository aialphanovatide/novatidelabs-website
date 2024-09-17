import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home"; // Your Home component
import Projects from "./components/Projects/Projects"; // Your Projects component
import Careers from "./components/Careers/Careers"; // Your Careers component
import Contact from "./components/Contact/Contact"; // Your Contact component
import Footer from "./components/Footer/Footer"; // Your Footer component

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
