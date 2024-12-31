import "./App.css";
import HomePage from "./components/homePage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import React, { useEffect } from "react";
import Navbar from "./components/Navbar/index.jsx";
import Footer from "./components/Footer/index.jsx";
import Aboutus from "./components/Aboutus/Aboutus";
import Philosophy from "./components/Philosophy/Philosophy";
import Methodology from "./components/Methodology/Methodology";
import Joinourteam from "./components/Joinourteam/Joinourteam";
import { useLocation } from "react-router-dom";
function App() {
  const [slideIndex, setSlideIndex] = React.useState(0);
  const location = useLocation();

  const sliderPaths = [
    "/aboutus",
    "/philosophy",
    "/methodology",
    "/joinourteam",
  ];

  useEffect(() => {
    if (sliderPaths.includes(location.pathname)) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="App">
      <Navbar slideIndex={slideIndex} setSlideIndex={setSlideIndex} />
      <Routes>
        <Route
          path="*"
          element={
            <HomePage slideIndex={slideIndex} setSlideIndex={setSlideIndex} />
          }
        />
        <Route
          path="/*"
          element={
            <HomePage slideIndex={slideIndex} setSlideIndex={setSlideIndex} />
          }
        />
        <Route
          path="/aboutus"
          element={<Aboutus setSlideIndex={setSlideIndex} />}
        />
        <Route
          path="/philosophy"
          element={<Philosophy setSlideIndex={setSlideIndex} />}
        />
        <Route
          path="/methodology"
          element={<Methodology setSlideIndex={setSlideIndex} />}
        />
        <Route
          path="/joinourteam"
          element={<Joinourteam setSlideIndex={setSlideIndex} />}
        />
      </Routes>
      <Footer slideIndex={slideIndex} setSlideIndex={setSlideIndex} />
    </div>
  );
}

function AppWithRouter() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default AppWithRouter;
