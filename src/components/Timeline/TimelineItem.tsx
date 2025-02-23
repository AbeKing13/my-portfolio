import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TimelineItemProps from "./TimelineItemProps";
import {
  faBriefcase,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

function TimelineItem({
  index,
  activeElement,
  setActiveElement,
  isMobile,
  date,
  title,
  company,
  city,
  details,
  logo,
  icon = <FontAwesomeIcon icon={faBriefcase} />,
}: TimelineItemProps) {
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
      intersectionObserverProps={{
        rootMargin: "-100px 0px -200px 0px",
        triggerOnce: true,
      }}
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

export default TimelineItem;
