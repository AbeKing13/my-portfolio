import React, { useState, useEffect } from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../../assets/styles/Timeline.scss";
import TimelineItem from "./TimelineItem";


function Timeline() {
  const [activeElement, setActiveElement] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <TimelineItem
            index={0}
            activeElement={activeElement}
            setActiveElement={setActiveElement}
            isMobile={isMobile}
            date="Jan 2025 - Present"
            title="Software Developer Intern"
            company="Stingray"
            city="Montreal, QC, CA"
            description="Develop ETL jobs, create data marts, build new features, and investigate data issues."
            logo={<img src={require("../../assets/images/logos/stingray.png")} alt="" />}
            details={
              <>
                <p>
                  <strong>Tasks:</strong>
                </p>
                <ul>
                  <li>Develop ETL jobs</li>
                  <li>Create data marts</li>
                  <li>Build new features</li>
                  <li>Investigate data issues</li>
                </ul>
                <p>
                  <strong>Technologies:</strong>
                </p>
                <ul>
                  <li>Python</li>
                  <li>SQL</li>
                  <li>React</li>
                </ul>
              </>
            }
          />

          <TimelineItem
            index={1}
            activeElement={activeElement}
            setActiveElement={setActiveElement}
            isMobile={isMobile}
            date="May 2024 - Dec 2024"
            title="Data Analyst"
            company="Shared Services Canada"
            city="Montreal, QC, CA"
            description="Data migration, automation, and data visualization."
            logo={<img src={require("../../assets/images/logos/ssc.png")} alt="" />}
            details={
              <>
                <p>
                  <strong>Tasks:</strong>
                </p>
                <ul>
                  <li>Data migration</li>
                  <li>Automation</li>
                  <li>Data visualization</li>
                </ul>
                <p>
                  <strong>Technologies:</strong>
                </p>
                <ul>
                  <li>Python</li>
                  <li>SQL</li>
                  <li>Tableau</li>
                </ul>
              </>
            }
          />

          <TimelineItem
            index={2}
            activeElement={activeElement}
            setActiveElement={setActiveElement}
            isMobile={isMobile}
            date="Jan 2023 - Aug 2023"
            title="R&D Technician"
            company="Matrox"
            city="Montreal, QC, CA"
            description="Develop new features, resolve bugs, and perform tests."
            logo={<img src={require("../../assets/images/logos/matrox.png")} alt="" />}
            details={
              <>
                <p>
                  <strong>Tasks:</strong>
                </p>
                <ul>
                  <li>Develop new features</li>
                  <li>Bug resolution</li>
                  <li>Conduct tests &amp; quality assurance</li>
                </ul>
                <p>
                  <strong>Technologies:</strong>
                </p>
                <ul>
                  <li>C/C++</li>
                  <li>Python</li>
                  <li>Automation Tools</li>
                </ul>
              </>
            }
          />

          <TimelineItem
            index={3}
            activeElement={activeElement}
            setActiveElement={setActiveElement}
            isMobile={isMobile}
            date="June 2022 - Aug 2022"
            title="Technical Support Technician"
            company="Addatech"
            city="Laval, QC, CA"
            description="Provide technical support, software installation, troubleshooting, and user assistance."
            logo={<img src={require("../../assets/images/logos/addatech.png")} alt="" />}
            details={
              <>
                <p>
                  <strong>Tasks:</strong>
                </p>
                <ul>
                  <li>Technical support</li>
                  <li>Software installation</li>
                  <li>Troubleshooting issues</li>
                  <li>User assistance</li>
                </ul>
              </>
            }
          />
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
