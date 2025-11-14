import React from 'react';

const ChessIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <title>Chess</title>
    <path d="M12 22a5 5 0 0 0 5-5h-2a3 3 0 0 1-3 3 3 3 0 0 1-3-3H7a5 5 0 0 0 5 5z"></path>
    <path d="M12 2v7"></path>
    <path d="M9 9h6"></path>
    <path d="M10 6a2 2 0 1 1 4 0"></path>
    <path d="M8 17a2 2 0 0 1-2-2V9h12v6a2 2 0 0 1-2 2z"></path>
  </svg>
);

export default ChessIcon;
