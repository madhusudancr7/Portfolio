
import React, { useState, useEffect } from 'react';
import MenuIcon from './icons/MenuIcon';
import CloseIcon from './icons/CloseIcon';
import { NAME } from '../constants';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
];

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Enforce Dark Mode
  useEffect(() => {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, []);
  
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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
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
      <div className="container mx-auto px-4 sm:px-6">
        <div className="w-full md:w-fit mx-auto flex items-center justify-between md:justify-center gap-4 rounded-full p-3 md:p-2 shadow-lg bg-card-bg/90 dark:bg-dark-card-bg/90 backdrop-blur-lg border border-border-color dark:border-dark-border-color pointer-events-auto">
          
          {/* Logo */}
          <a 
            href="#hero" 
            onClick={(e) => handleNavClick(e, '#hero')} 
            className="font-display text-lg md:text-xl font-bold pl-2 text-text-primary dark:text-dark-text-primary hover:text-accent transition-colors"
          >
            {NAME.split(' ')[0]} <span className="text-accent">{NAME.split(' ')[2]}</span>
          </a>
          
          {/* Desktop Divider */}
          <div className="hidden md:block w-px h-6 bg-border-color dark:bg-dark-border-color"></div>

          {/* Desktop Navigation */}
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
          
          {/* Desktop Divider (only visible if we had more items right, keeping for structure if needed later or removing) */}
          {/* <div className="hidden md:block w-px h-6 bg-border-color dark:bg-dark-border-color"></div> */}

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-text-primary dark:text-dark-text-primary focus:outline-none"
                aria-label="Toggle menu"
            >
                {isMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
            <div className="absolute top-full left-4 right-4 mt-2 p-4 bg-card-bg dark:bg-dark-card-bg backdrop-blur-xl rounded-2xl border border-border-color dark:border-dark-border-color shadow-2xl md:hidden animate-fade-in-up pointer-events-auto">
                <nav className="flex flex-col gap-2">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.href.substring(1);
                        return (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className={`py-3 px-4 rounded-xl text-center font-medium transition-all duration-200 ${
                                    isActive 
                                    ? 'bg-accent/20 text-accent' 
                                    : 'text-text-secondary dark:text-dark-text-secondary hover:bg-accent/10 hover:text-accent'
                                }`}
                            >
                                {link.name}
                            </a>
                        );
                    })}
                </nav>
            </div>
        )}
      </div>
    </header>
  );
};

export default Header;
