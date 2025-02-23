import React from 'react';

interface TimelineItemProps {
  index: number;
  activeElement: number | null;
  setActiveElement: (i: number | null) => void;
  isMobile: boolean;
  date: string;
  title: string;
  company: string;
  city: string;
  details: React.ReactNode;
  logo?: React.ReactNode;
}

export default TimelineItemProps;