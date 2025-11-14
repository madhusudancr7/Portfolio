import React from 'react';

const PlaneIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <title>Travelling</title>
    <path d="M22 12h-4l-6.2-7.8a2 2 0 0 0-3.2 0L2 12h4l2.5-3.1L11 12h2l2.5-3.1L18 12h4zM2 18h20"></path>
    <path d="M12 12v6"></path>
  </svg>
);

export default PlaneIcon;
