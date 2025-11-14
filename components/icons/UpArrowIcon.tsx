import React from 'react';

const UpArrowIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <title>Back to Top</title>
    <path d="M12 19V5"></path>
    <polyline points="5 12 12 5 19 12"></polyline>
  </svg>
);

export default UpArrowIcon;