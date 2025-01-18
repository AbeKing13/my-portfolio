import React, {useState, useEffect} from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import TechSupport from "./components/jobs/TechSupport";
import RnDTechnician from './components/jobs/RnDTechnician';
import DataAnalyst from "./components/jobs/DataAnalyst";
import SoftDeveloper from "./components/jobs/SoftDeveloper";
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
        <Route path="/software-developer" element={<SoftDeveloper />} />
        <Route path="/data-analyst" element={<DataAnalyst />} />
        <Route path="/rnd-technician" element={<RnDTechnician />} />
        <Route path="/tech-support" element={<TechSupport />} />
        <Route path="/" element={<Timeline />} />
        </Routes>
    </div>
    </Router>
    );
}

export default App;