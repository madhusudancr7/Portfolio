import React, { useState, useEffect } from 'react';
import UpArrowIcon from './icons/UpArrowIcon';

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          data-interactive="true"
          className="bg-accent text-white p-3 rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300 animate-fade-in-up focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background dark:focus:ring-offset-dark-background focus:ring-accent"
          aria-label="Go to top"
        >
          <UpArrowIcon className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;