import React from 'react';
import '../assets/styles/Tooltip.scss';

interface TooltipProps {
  content: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ content }) => {
  return (
    <div className="tooltip">
      {content}
    </div>
  );
};

export default Tooltip;