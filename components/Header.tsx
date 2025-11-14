
import React, { useState, useEffect } from 'react';
import SunIcon from './icons/SunIcon';
import MoonIcon from './icons/MoonIcon';
import { NAME } from '../constants';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [theme, setTheme] = useState(
    () => typeof window !== 'undefined' && localStorage.theme === 'dark' ? 'dark' : 'light'
  );
  const [activeSection, setActiveSection] = useState<string>('');
  const [isScrolled, setIsScrolled] = useState(false);

  // Theme effect
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);
  
  // Scroll visibility effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active section observer effect
  useEffect(() => {
    const sections = navLinks.map(link => document.getElementById(link.href.substring(1))).filter(Boolean);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0,
      }
    );

    sections.forEach(section => {
      if(section) observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        if(section) observer.unobserve(section);
      });
    };
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    
    if (href === '#hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      history.replaceState(null, '', ' ');
      return;
    }

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerOffset = 80; // Offset for the sticky header
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // We prevent default, so we need to update the hash manually
      history.replaceState(null, '', href);
    }
  };

  return (
    <header 
      className={`fixed top-4 left-0 right-0 z-40 transition-all duration-500 ease-in-out ${isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'}`}
    >
      <div className="container mx-auto px-6">
        <div className="w-fit mx-auto flex items-center gap-4 rounded-full p-2 shadow-lg bg-card-bg/80 dark:bg-dark-card-bg/80 backdrop-blur-lg border border-border-color dark:border-dark-border-color">
          <a 
            href="#hero" 
            onClick={(e) => handleNavClick(e, '#hero')} 
            className="font-display text-xl font-bold pl-2 text-text-primary dark:text-dark-text-primary hover:text-accent transition-colors"
          >
            {NAME.split(' ')[0]} <span className="text-accent">{NAME.split(' ')[2]}</span>
          </a>
          
          <div className="w-px h-6 bg-border-color dark:bg-dark-border-color"></div>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  data-interactive="true"
                  className={`relative rounded-full py-2 px-4 text-sm font-medium transition-all duration-300 ${
                    isActive 
                      ? 'bg-accent text-white shadow-md shadow-accent/30' 
                      : 'text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary'
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </nav>
          
          <div className="w-px h-6 bg-border-color dark:bg-dark-border-color"></div>

          <button 
            onClick={handleThemeSwitch} 
            data-interactive="true"
            className={`p-2 rounded-full transition-colors text-text-secondary dark:text-dark-text-secondary hover:text-accent dark:hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent`}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;