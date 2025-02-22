import { Suspense, useState, useEffect } from "react";
import {
  Main,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import Timeline from "./components/Timeline/Timeline";
import FadeIn from "./components/FadeIn";
import "./index.scss";
import "./i18n";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState<string>(() => {
    // Get saved mode from localStorage, default to 'dark' if none exists
    return localStorage.getItem("colorMode") || "dark";
  });

  const handleModeChange = () => {
    const newMode = mode === "dark" ? "light" : "dark";
    setMode(newMode);
    localStorage.setItem("colorMode", newMode);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <div
          className={`main-container ${
            mode === "dark" ? "dark-mode" : "light-mode"
          }`}
        >
          <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
          <FadeIn transitionDuration={700}>
            <Main />
            <Expertise />
            <Timeline />
            <Project />
            <Contact />
          </FadeIn>
          <Footer />
          <Routes>
            <Route path="/" element={<Timeline />} />
          </Routes>
        </div>
      </Router>
    </Suspense>
  );
}

export default App;
