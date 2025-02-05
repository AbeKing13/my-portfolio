import React, {useState, useEffect} from "react";
import {
  Main,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import Timeline from "./components/Timeline/Timeline";
import FadeIn from './components/FadeIn';
import './index.scss';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";


function App() {
    const [mode, setMode] = useState<string>('dark');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
    <Router>
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
        <FadeIn transitionDuration={700}>
            <Main/>
            <Expertise/>
            <Timeline/>
            <Project/>
            <Contact/>
        </FadeIn>
        <Footer />
        <Routes>
        <Route path="/" element={<Timeline />} />
        </Routes>
    </div>
    </Router>
    );
}

export default App;