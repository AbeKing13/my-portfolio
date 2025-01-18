import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { Link } from 'react-router-dom';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'


function Timeline() {
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
            <Link to="/software-developer">
            <h3 className="vertical-timeline-element-title">Software Developer Intern</h3>
            <h4 className="vertical-timeline-element-company">Stingray Digital</h4>
            <h5 className="vertical-timeline-element-subtitle">Montreal, QC, CA</h5>
            <p>
              Develop ETL jobs, Create data marts, Build new features, Investigate data issues
            </p>
            </Link>
            </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2024 - Dec 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <Link to="/data-analyst">
            <h3 className="vertical-timeline-element-title">Data Analyst</h3>
            <h4 className="vertical-timeline-element-company">Shared Services Canada</h4>
            <h5 className="vertical-timeline-element-subtitle">Montreal, QC, CA</h5>
            <p>
              Data migration, Automation, Data visualization
            </p>
            </Link>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2023 - Aug 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <Link to="/rnd-technician">
            <h3 className="vertical-timeline-element-title">Research and Development Technician</h3>
            <h4 className="vertical-timeline-element-company">Matrox</h4>
            <h5 className="vertical-timeline-element-subtitle">Montreal, QC, CA</h5>
            <p>
              Develop New Features, Resolved bugs, Perform Tests
            </p>
            </Link>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jun 2022 - Aug 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <Link to="/tech-support">
            <h3 className="vertical-timeline-element-title">Technical Support Technician</h3>
            <h4 className="vertical-timeline-element-company">Addatech</h4>
            <h5 className="vertical-timeline-element-subtitle">Montreal, QC, CA</h5>
            <p>
              Technical Support, Software Installation, Troubleshooting, User Assistance
            </p>
            </Link>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;