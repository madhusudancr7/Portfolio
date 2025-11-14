import React from 'react';

const GamingIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <title>Gaming</title>
    <line x1="6" x2="10" y1="12" y2="12"/>
    <line x1="8" x2="8" y1="10" y2="14"/>
    <line x1="15" x2="15.01" y1="13" y2="13"/>
    <line x1="18" x2="18.01" y1="10" y2="10"/>
    <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.01.15v5.52c0 .049.004.098.01.15a4 4 0 0 0 3.978 3.59h10.64a4 4 0 0 0 3.978-3.59c.006-.052.01-.101.01-.15v-5.52c0-.049-.004-.098-.01-.15a4 4 0 0 0-3.978-3.59z"/>
  </svg>
);

export default GamingIcon;
