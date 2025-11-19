
import React, { useState, MouseEvent } from 'react';
import { NAME, TITLE, LINKEDIN_URL, GITHUB_URL, INSTAGRAM_URL, EMAIL, PHONE, LOCATION } from '../constants';
import LinkedInIcon from './icons/LinkedInIcon';
import GitHubIcon from './icons/GitHubIcon';
import InstagramIcon from './icons/InstagramIcon';
import MailIcon from './icons/MailIcon';
import PhoneIcon from './icons/PhoneIcon';
import LocationIcon from './icons/LocationIcon';
import TechBackground from './TechBackground';

const socialLinks = [
  { href: LINKEDIN_URL, icon: LinkedInIcon, name: 'LinkedIn' },
  { href: GITHUB_URL, icon: GitHubIcon, name: 'GitHub' },
  { href: INSTAGRAM_URL, icon: InstagramIcon, name: 'Instagram' },
  { href: `mailto:${EMAIL}`, icon: MailIcon, name: 'Email' },
];

const contactDetails = [
  { href: `tel:${PHONE}`, icon: PhoneIcon, name: PHONE },
  { href: '#', icon: LocationIcon, name: LOCATION, isStatic: true },
];

const Hero: React.FC = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = e;
    const { innerWidth: width, innerHeight: height } = window;

    // Very subtle text parallax to separate layers from background
    const moveX = (clientX / width - 0.5) * 10; 
    const moveY = (clientY / height - 0.5) * 10; 
    setOffset({ x: moveX, y: moveY });
  };
  
  const textStyle = {
     transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
  }

  // Split name by words to ensure proper wrapping on mobile
  const renderName = () => {
    const words = NAME.split(' ');
    return words.map((word, wordIndex) => (
      <span key={wordIndex} className="inline-block whitespace-nowrap mr-2 sm:mr-4 last:mr-0">
        {word.split('').map((char, charIndex) => (
          <span
            key={`${wordIndex}-${charIndex}`}
            className="hover-char inline-block transition-all duration-200 ease-out cursor-default hover:text-accent select-none"
            style={{ animationDelay: `${0.2 + (wordIndex * 5 + charIndex) * 0.05}s` }}
          >
            {char}
          </span>
        ))}
      </span>
    ));
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-dark-background"
      onMouseMove={handleMouseMove}
    >
      {/* Live Tech Background: Deep Space Galaxy */}
      <TechBackground />
      
      {/* Overlay gradient for depth and readability */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-dark-background/20 to-dark-background/80 pointer-events-none z-0"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 w-full max-w-7xl mx-auto select-none pointer-events-none" style={textStyle}>
        <div className="relative inline-block group pointer-events-auto w-full">
            {/* Interactive Letter Wave Animation */}
            <h1 
                className="font-display font-bold text-white uppercase tracking-tighter leading-tight opacity-0 animate-fade-in flex flex-wrap justify-center gap-y-2 text-3xl sm:text-5xl md:text-7xl lg:text-[6rem] xl:text-[7rem]"
                style={{ animationDelay: '0.1s' }}
            >
              {renderName()}
            </h1>
            
            {/* Decorative Underline */}
            <div className="h-1 w-16 sm:w-24 bg-accent mx-auto transition-all duration-500 group-hover:w-1/2 mt-4 shadow-[0_0_15px_rgba(249,115,22,0.8)] rounded-full"></div>
        </div>

        <p 
          className="font-mono text-sm sm:text-lg md:text-2xl lg:text-3xl text-accent mt-6 sm:mt-8 tracking-[0.1em] sm:tracking-[0.2em] opacity-0 animate-fade-in-up pointer-events-auto px-2"
          style={{ animationDelay: '0.8s' }}
        >
          &lt; {TITLE} /&gt;
        </p>

        {/* Social Icons */}
        <div 
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 mt-8 sm:mt-12 opacity-0 animate-fade-in-up pointer-events-auto"
          style={{ animationDelay: '1s' }}
        >
           {socialLinks.map(({ href, icon: Icon, name }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-2 transition-all duration-300 hover:-translate-y-1"
                  aria-label={name}
                  data-interactive="true"
                >
                  <div className="absolute inset-0 bg-accent/0 rounded-full group-hover:bg-accent/10 blur-md transition-all duration-300"></div>
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400 transition-colors duration-300 group-hover:text-accent relative z-10" />
                </a>
           ))}
        </div>
        
        {/* Contact Details */}
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-10 mt-8 sm:mt-10 opacity-0 animate-fade-in-up pointer-events-auto pb-20 sm:pb-0"
          style={{ animationDelay: '1.2s' }}
        >
          {contactDetails.map(({ href, icon: Icon, name, isStatic }) => (
            <a
              key={name}
              href={isStatic ? undefined : href}
              className="group flex items-center gap-3 px-5 py-2 rounded-full border border-white/5 bg-white/5 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 w-full sm:w-auto justify-center"
              aria-label={name}
              data-interactive="true"
            >
              <Icon className="w-4 h-4 text-accent" />
              <span className="font-mono text-xs sm:text-sm text-gray-300 group-hover:text-white tracking-wide truncate max-w-[200px] sm:max-w-none">{name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
