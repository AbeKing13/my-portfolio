import React, { useState } from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import Tooltip from './Tooltip';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  const [activeElement, setActiveElement] = useState<number | null>(null);

  const handleTouch = (index: number) => {
    setActiveElement(activeElement === index ? null : index);
  };

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
            <div onClick={() => handleTouch(0)}>
              <h3 className="vertical-timeline-element-title">Software Developer Intern</h3>
              <h4 className="vertical-timeline-element-company">Stingray Digital</h4>
              <h5 className="vertical-timeline-element-subtitle">Montreal, QC, CA</h5>
              <p>
                Develop ETL jobs, Create data marts, Build new features, Investigate data issues
              </p>
              {activeElement === 0 && (
                <Tooltip content={
                  <div>
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
                } />
              )}
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Jun 2023 - Dec 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <div onClick={() => handleTouch(1)}>
              <h3 className="vertical-timeline-element-title">Junior Software Developer</h3>
              <h4 className="vertical-timeline-element-company">Tech Solutions</h4>
              <h5 className="vertical-timeline-element-subtitle">Toronto, ON, CA</h5>
              <p>
                Implemented new features, Fixed bugs, Collaborated with the team, Wrote unit tests
              </p>
              {activeElement === 1 && (
                <Tooltip content={
                  <div>
                    <p>Tasks:</p>
                    <ul>
                      <li>Implemented new features</li>
                      <li>Fixed bugs</li>
                      <li>Collaborated with the team</li>
                      <li>Wrote unit tests</li>
                    </ul>
                    <p>Technologies:</p>
                    <ul>
                      <li>JavaScript</li>
                      <li>React</li>
                      <li>Jest</li>
                    </ul>
                  </div>
                } />
              )}
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Jan 2022 - May 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <div onClick={() => handleTouch(2)}>
              <h3 className="vertical-timeline-element-title">Software Engineer</h3>
              <h4 className="vertical-timeline-element-company">Innovative Apps</h4>
              <h5 className="vertical-timeline-element-subtitle">Vancouver, BC, CA</h5>
              <p>
                Designed and developed web applications, Conducted code reviews, Mentored junior developers
              </p>
              {activeElement === 2 && (
                <Tooltip content={
                  <div>
                    <p>Tasks:</p>
                    <ul>
                      <li>Designed and developed web applications</li>
                      <li>Conducted code reviews</li>
                      <li>Mentored junior developers</li>
                    </ul>
                    <p>Technologies:</p>
                    <ul>
                      <li>TypeScript</li>
                      <li>Angular</li>
                      <li>Node.js</li>
                    </ul>
                  </div>
                } />
              )}
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Sep 2020 - Dec 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <div onClick={() => handleTouch(3)}>
              <h3 className="vertical-timeline-element-title">Frontend Developer</h3>
              <h4 className="vertical-timeline-element-company">Creative Solutions</h4>
              <h5 className="vertical-timeline-element-subtitle">Calgary, AB, CA</h5>
              <p>
                Developed user interfaces, Improved application performance, Collaborated with designers
              </p>
              {activeElement === 3 && (
                <Tooltip content={
                  <div>
                    <p>Tasks:</p>
                    <ul>
                      <li>Developed user interfaces</li>
                      <li>Improved application performance</li>
                      <li>Collaborated with designers</li>
                    </ul>
                    <p>Technologies:</p>
                    <ul>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JavaScript</li>
                    </ul>
                  </div>
                } />
              )}
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;