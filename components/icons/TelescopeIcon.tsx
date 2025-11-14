import React from 'react';

const TelescopeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <title>Astrophile</title>
    <path d="M18.83 18.83a4 4 0 1 1-5.66-5.66"/>
    <path d="m12 12 6-6"/>
    <path d="M21.17 21.17a4 4 0 1 1-5.66-5.66"/>
    <path d="M12 12 18 6"/>
    <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-45 12 12)"/>
  </svg>
);

export default TelescopeIcon;
