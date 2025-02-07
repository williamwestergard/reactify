import { Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const [clickHere, setClickHere] = useState("Klicka här!");

  return (
    <>
      <div
        className="main-content-container"
        style={{
          background: darkMode ? "#121212" : "#f9f9f9",
          color: darkMode ? "#ffffff" : "#000000",
          transition: "background 0.3s ease, color 0.3s ease",
        }}
      >
        <ThemeToggle />
        <svg
          className="background-svg"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns:svgjs="http://svgjs.dev/svgjs"
          viewBox="0 0 700 800"
          opacity="0.42"
        >
          <defs>
            <filter
              id="bbblurry-filter"
              x="-100%"
              y="-100%"
              width="400%"
              height="400%"
              filterUnits="objectBoundingBox"
              primitiveUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feGaussianBlur
                stdDeviation="104"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
                in="SourceGraphic"
                edgeMode="none"
                result="blur"
              ></feGaussianBlur>
            </filter>
          </defs>
          <g filter="url(#bbblurry-filter)">
            <ellipse
              rx="141.5"
              ry="144.5"
              cx="401.8759712898295"
              cy="511.88974254668074"
              fill="hsl(37, 99%, 67%)"
            ></ellipse>
            <ellipse
              rx="141.5"
              ry="144.5"
              cx="485.1952720761924"
              cy="286.80040609150035"
              fill="hsl(316, 73%, 52%)"
            ></ellipse>
            <ellipse
              rx="141.5"
              ry="144.5"
              cx="312.1462667575057"
              cy="338.3105328145452"
              fill="hsl(185, 100%, 57%)"
            ></ellipse>
          </g>
        </svg>
        <nav className="nav">
          <Link to="/">
            <button
              style={{
                background: darkMode ? "none" : "black",
                border: darkMode ? "1px solid white" : "none",
                color: darkMode ? "white" : "rgb(255, 255, 255)",
                transition: "background 0.3s ease, color 0.3s ease",
              }}
            >
              Start
            </button>
          </Link>
          <Link to="/about">
            <button
              style={{
                background: darkMode ? "none" : "black",
                border: darkMode ? "1px solid white" : "none",
                color: darkMode ? "white" : "rgb(255, 255, 255)",
                transition: "background 0.3s ease, color 0.3s ease",
              }}
            >
              Om mig
            </button>
          </Link>
          <Link to="/contact">
            <button className="button-white">Kontakt</button>
          </Link>
        </nav>
        <section className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </section>
        <span
          onClick={() => setClickHere("Texten ändrades med useState!")}
          className="footer"
        >
          {clickHere}
        </span>
      </div>
    </>
  );
}

export default App;
