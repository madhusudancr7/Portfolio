import React from 'react';

const BookIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
     <title>Learning about History</title>
     <path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h10v2a2 2 0 0 0 2 2h2v-2a2 2 0 0 0-2-2H4a2 2 0 1 1 0-4h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2Z"/>
  </svg>
);

export default BookIcon;
