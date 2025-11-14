import React from 'react';

const TelescopeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <title>Astrophile</title>
    <path d="m10.06 10.8-3.72 3.72" />
    <path d="M12.27 13 8.55 9.28" />
    <path d="m16.09 7.31-2.58 2.59" />
    <path d="M12.91 9.9 9.32 6.31" />
    <path d="m20.24 12-2.2-2.2" />
    <path d="M17.15 8.85 15.15 6.85" />
    <path d="m14 17-1.76-1.76" />
    <path d="m4.22 18.32 1.41-1.41" />
    <path d="M2 22 8 16" />
    <path d="M16 8 22 2" />
    <path d="M18 6 16 8" />
    <path d="M10 14 8 16" />
  </svg>
);

export default TelescopeIcon;