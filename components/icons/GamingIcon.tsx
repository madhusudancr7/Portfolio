import React from 'react';

const GamingIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <title>Gaming</title>
    <path d="M21 12V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h5"></path>
    <path d="M12 18h4v4h-4z"></path>
    <path d="M14 14v4"></path>
    <path d="M6 12h2"></path>
    <path d="M8 10v4"></path>
    <path d="M16 20a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2v4h2z"></path>
    <path d="M18 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
  </svg>
);

export default GamingIcon;
