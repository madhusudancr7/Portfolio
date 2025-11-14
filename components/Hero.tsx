
import React, { useState, MouseEvent } from 'react';
import { NAME, TITLE, LINKEDIN_URL, GITHUB_URL, INSTAGRAM_URL, EMAIL, PHONE, LOCATION } from '../constants';
import LinkedInIcon from './icons/LinkedInIcon';
import GitHubIcon from './icons/GitHubIcon';
import InstagramIcon from './icons/InstagramIcon';
import MailIcon from './icons/MailIcon';
import PhoneIcon from './icons/PhoneIcon';
import LocationIcon from './icons/LocationIcon';

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

    const moveX = (clientX / width - 0.5) * 40; // Max move 20px
    const moveY = (clientY / height - 0.5) * 40; // Max move 20px
    setOffset({ x: moveX, y: moveY });
  };

  const bgImageStyle = {
    transform: `translate3d(${-offset.x}px, ${-offset.y}px, 0)`,
    backgroundImage: "url('https://images.pexels.com/photos/18285166/pexels-photo-18285166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
  };
  
  const textStyle = {
     transform: `translate3d(${offset.x * 0.5}px, ${offset.y * 0.5}px, 0)`,
  }

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-dark-background"
      onMouseMove={handleMouseMove}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-out"
        style={bgImageStyle}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 text-center px-4" style={textStyle}>
        <h1 className="font-display text-7xl sm:text-9xl md:text-[10rem] lg:text-[12rem] font-bold text-white uppercase tracking-tighter leading-none mix-blend-difference opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {NAME}
        </h1>
        <p 
          className="font-mono text-xl sm:text-2xl md:text-3xl text-gray-300 mt-4 tracking-widest opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.8s' }}
        >
          // {TITLE}
        </p>

        {/* Social Icons */}
        <div 
          className="flex items-center justify-center gap-6 mt-12 opacity-0 animate-fade-in-up"
          style={{ animationDelay: '1s' }}
        >
           {socialLinks.map(({ href, icon: Icon, name }, index) => (
             <React.Fragment key={name}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  aria-label={name}
                  data-interactive="true"
                  title={name}
                >
                  <Icon className="w-8 h-8 text-gray-400 transition-all duration-300 group-hover:text-white group-hover:scale-125" />
                </a>
               {index < socialLinks.length - 1 && (
                 <div className="w-px h-8 bg-gray-600" />
               )}
             </React.Fragment>
           ))}
        </div>
        
        {/* Contact Details */}
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-x-8 gap-y-4 mt-8 opacity-0 animate-fade-in-up"
          style={{ animationDelay: '1.2s' }}
        >
          {contactDetails.map(({ href, icon: Icon, name, isStatic }) => (
            <a
              key={name}
              href={isStatic ? undefined : href}
              className="group flex items-center gap-3"
              aria-label={name}
              data-interactive="true"
              title={name}
            >
              <Icon className="w-7 h-7 text-gray-400 transition-colors duration-300 group-hover:text-white" />
              <span className="font-mono text-gray-400 transition-colors duration-300 group-hover:text-white">{name}</span>
            </a>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Hero;