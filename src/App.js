import React, { useState, useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Design from "./components/Design/Design";
import Modular from "./components/Modular/Modular";
import Ai from "./components/Ai/Ai";
import Casestudies from "./components/Casestudies/Casestudies";
import Contactus from "./components/Contactus/Contactus";
import Aboutus from "./components/Aboutus/Aboutus";
import Philosophy from "./components/Philosophy/Philosophy";
import Methodology from "./components/Methodology/Methodology";
import Joinourteam from "./components/Joinourteam/Joinourteam";
import Footer from "./components/Footer/Footer";

function App() {
  const [activeItem, setActiveItem] = useState(0); // Start with the first tab
  const navigate = useNavigate();
  const location = useLocation();
  const routes = [
    "/",
    "/design",
    "/modular",
    "/ai",
    "/casestudies",
    "/contactus",
  ];

  const excludedRoutes = [
    "/aboutus",
    "/philosophy",
    "/methodology",
    "/joinourteam",
  ]; // Routes without Footer and without horizontal scrolling

  const rootRef = useRef(null);

  const [touchStartX, setTouchStartX] = useState(null);
  const [isSlidingActive, setIsSlidingActive] = useState(false);

  // Set the active tab based on the current URL path on load
  useEffect(() => {
    const initialIndex = routes.findIndex(
      (route) => route === window.location.pathname
    );
    setActiveItem(initialIndex !== -1 ? initialIndex : 0);
  }, [routes, location.pathname]);

  useEffect(() => {
    // Scroll to the top of the page when activeItem changes
    if (rootRef.current) {
      rootRef.current.scrollTop = 0;
    }
  }, [activeItem]);

  const handleTouchStart = (event) => {
    if (excludedRoutes.includes(location.pathname)) return; // Disable scrolling
    setTouchStartX(event.touches[0].clientX);
    setIsSlidingActive(true);
  };

  const handleTouchEnd = (event) => {
    if (excludedRoutes.includes(location.pathname)) return; // Disable scrolling
    if (!isSlidingActive || touchStartX === null) return;
    const touchEndX = event.changedTouches[0].clientX;
    const deltaX = touchStartX - touchEndX;

    const sensitivity = 50; // Minimum pixel distance for a swipe
    if (deltaX > sensitivity) {
      handleNext();
    } else if (deltaX < -sensitivity) {
      handlePrev();
    }

    setTouchStartX(null);
    setIsSlidingActive(false);
  };

  const handleNext = () => {
    // Prevent going from the last screen to the first
    if (activeItem < routes.length - 1) {
      const newIndex = activeItem + 1;
      navigate(routes[newIndex]);
      setActiveItem(newIndex);
    }
  };

  const handlePrev = () => {
    // Prevent going from the first screen to the last
    if (activeItem > 0) {
      const newIndex = activeItem - 1;
      navigate(routes[newIndex]);
      setActiveItem(newIndex);
    }
  };

  useEffect(() => {
    const rootElement = rootRef.current;
    if (!rootElement) return;

    const handleMouseStart = (event) => {
      if (excludedRoutes.includes(location.pathname)) return; // Disable scrolling
      setTouchStartX(event.clientX);
      setIsSlidingActive(true);
    };

    const handleMouseEnd = (event) => {
      if (excludedRoutes.includes(location.pathname)) return; // Disable scrolling
      if (!isSlidingActive || touchStartX === null) return;
      const mouseEndX = event.clientX;
      const deltaX = touchStartX - mouseEndX;

      const sensitivity = 50; // Minimum pixel distance for a swipe
      if (deltaX > sensitivity) {
        handleNext();
      } else if (deltaX < -sensitivity) {
        handlePrev();
      }

      setTouchStartX(null);
      setIsSlidingActive(false);
    };

    // Add event listeners for both touch and mouse events
    rootElement.addEventListener("touchstart", handleTouchStart);
    rootElement.addEventListener("touchend", handleTouchEnd);
    rootElement.addEventListener("mousedown", handleMouseStart);
    rootElement.addEventListener("mouseup", handleMouseEnd);

    return () => {
      // Clean up event listeners
      rootElement.removeEventListener("touchstart", handleTouchStart);
      rootElement.removeEventListener("touchend", handleTouchEnd);
      rootElement.removeEventListener("mousedown", handleMouseStart);
      rootElement.removeEventListener("mouseup", handleMouseEnd);
    };
  }, [touchStartX, activeItem, location.pathname]); // Add location.pathname to dependencies

  return (
    <div ref={rootRef} className="app-content">
      <Navbar handlePrev={handlePrev} handleNext={handleNext} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/design" element={<Design />} />
        <Route path="/modular" element={<Modular />} />
        <Route path="/ai" element={<Ai />} />
        <Route path="/casestudies" element={<Casestudies />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/philosophy" element={<Philosophy />} />
        <Route path="/methodology" element={<Methodology />} />
        <Route path="/joinourteam" element={<Joinourteam />} />
      </Routes>
      {!excludedRoutes.includes(location.pathname) && <Footer />}
    </div>
  );
}

function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWithRouter;
