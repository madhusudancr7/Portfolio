
import React from 'react';
import { GITHUB_URL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-8">
      <div className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-24 text-center text-text-secondary dark:text-dark-text-secondary">
        <p className="font-mono text-sm">
          <a href={GITHUB_URL} data-interactive="true" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
            Designed & Built by Madhusudan R S
          </a>
        </p>
        <p className="text-xs mt-2">
          &copy; {new Date().getFullYear()} Madhusudan R S. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;