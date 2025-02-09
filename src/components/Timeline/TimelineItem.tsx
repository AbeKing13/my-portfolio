import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

interface TimelineItemProps {
  index: number;
  activeElement: number | null;
  setActiveElement: (i: number | null) => void;
  isMobile: boolean;
  date: string;
  title: string;
  company: string;
  city: string;
  description: string;
  details: React.ReactNode;
  logo?: React.ReactNode; // new prop for the company logo
  icon?: React.ReactNode;
}

export default TimelineItem;

function TimelineItem(
  {
    index,
    activeElement,
    setActiveElement,
    isMobile,
    date,
    title,
    company,
    city,
    description,
    details,
    logo,
    icon = <FontAwesomeIcon icon={faBriefcase} />,
  }: TimelineItemProps
) {  
  const handleClick = () => {
    if (isMobile) {
      setActiveElement(activeElement === index ? null : index);
    }
  };

  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
      contentArrowStyle={{ borderRight: "7px solid white" }}
      date={date}
      iconStyle={{ background: "#131516", color: "rgb(39, 40, 34)" }}
      icon={icon}
    >
      <div
        onClick={isMobile ? handleClick : undefined}
        onMouseEnter={!isMobile ? () => setActiveElement(index) : undefined}
        onMouseLeave={!isMobile ? () => setActiveElement(null) : undefined}
        className={isMobile ? "mobile-clickable" : "hoverable"}
      >
        {/* Display company logo in the top-right corner if provided */}
        {logo && <div className="company-logo">{logo}</div>}
        <h3 className="vertical-timeline-element-title">{title}</h3>
        <h4 className="vertical-timeline-element-company">{company}</h4>
        <h5 className="vertical-timeline-element-city">{city}</h5>
        <p>{description}</p>
        <div className="click-arrow">
          <FontAwesomeIcon
            icon={activeElement === index ? faChevronUp : faChevronDown}
          />
        </div>
        <div
          className={`details-box ${activeElement === index ? "active" : ""}`}
        >
          {details}
        </div>
      </div>
    </VerticalTimelineElement>
  );
}
