import React, { useState, useEffect } from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  const [activeElement, setActiveElement] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);

  const handleTouch = (index: number) => {
    if (isMobile) {
      setActiveElement(activeElement === index ? null : index);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Jan 2025 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <div onClick={() => handleTouch(0)} className={isMobile ? '' : 'hoverable'}>
              <h3 className="vertical-timeline-element-title">Software Developer Intern</h3>
              <h4 className="vertical-timeline-element-company">Stingray Digital</h4>
              <h5 className="vertical-timeline-element-subtitle">Montreal, QC, CA</h5>
              <p>
                Develop ETL jobs, Create data marts, Build new features, Investigate data issues
              </p>
              {activeElement === 0 && (
                <div className="details-box">
                  <p>Tasks:</p>
                  <ul>
                    <li>Develop ETL jobs</li>
                    <li>Create data marts</li>
                    <li>Build new features</li>
                    <li>Investigate data issues</li>
                  </ul>
                  <p>Technologies:</p>
                  <ul>
                    <li>Python</li>
                    <li>SQL</li>
                    <li>React</li>
                  </ul>
                </div>
              )}
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="May 2024 - Dec 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <div onClick={() => handleTouch(1)} className={isMobile ? '' : 'hoverable'}>
              <h3 className="vertical-timeline-element-title">Data Analyst</h3>
              <h4 className="vertical-timeline-element-company">Shared Services Canada</h4>
              <h5 className="vertical-timeline-element-subtitle">Montreal, QC, CA</h5>
              <p>
                Data migration, Automation, Data visualization
              </p>
              {activeElement === 1 && (
                <div className="details-box">
                  <p>Tasks:</p>
                  <ul>
                    <li>Data migration</li>
                    <li>Automation</li>
                    <li>Data visualization</li>
                  </ul>
                  <p>Technologies:</p>
                  <ul>
                    <li>Python</li>
                    <li>SQL</li>
                    <li>Tableau</li>
                  </ul>
                </div>
              )}
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Jan 2023 - Aug 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <div onClick={() => handleTouch(2)} className={isMobile ? '' : 'hoverable'}>
              <h3 className="vertical-timeline-element-title">Research and Development Technician</h3>
              <h4 className="vertical-timeline-element-company">Matrox</h4>
              <h5 className="vertical-timeline-element-subtitle">Montreal, QC, CA</h5>
              <p>
                Develop New Features, Resolved bugs, Perform Tests
              </p>
              {activeElement === 2 && (
                <div className="details-box">
                  <p>Tasks:</p>
                  <ul>
                    <li>Develop New Features</li>
                    <li>Resolved bugs</li>
                    <li>Perform Tests</li>
                  </ul>
                  <p>Technologies:</p>
                  <ul>
                    <li>C++</li>
                    <li>Python</li>
                    <li>JIRA</li>
                  </ul>
                </div>
              )}
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Jun 2022 - Aug 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <div onClick={() => handleTouch(3)} className={isMobile ? '' : 'hoverable'}>
              <h3 className="vertical-timeline-element-title">Technical Support Technician</h3>
              <h4 className="vertical-timeline-element-company">Addatech</h4>
              <h5 className="vertical-timeline-element-subtitle">Montreal, QC, CA</h5>
              <p>
                Technical Support, Software Installation, Troubleshooting, User Assistance
              </p>
              {activeElement === 3 && (
                <div className="details-box">
                  <p>Tasks:</p>
                  <ul>
                    <li>Technical Support</li>
                    <li>Software Installation</li>
                    <li>Troubleshooting</li>
                    <li>User Assistance</li>
                  </ul>
                  <p>Technologies:</p>
                  <ul>
                    <li>Windows</li>
                    <li>Linux</li>
                    <li>Remote Desktop</li>
                  </ul>
                </div>
              )}
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;