
import React, { useState, MouseEvent } from 'react';
import { NAME, TITLE, LINKEDIN_URL, GITHUB_URL, INSTAGRAM_URL, EMAIL, PHONE, LOCATION, TWITTER_URL, MEDIUM_URL, LOCATION_URL } from '../constants';
import LinkedInIcon from './icons/LinkedInIcon';
import GitHubIcon from './icons/GitHubIcon';
import InstagramIcon from './icons/InstagramIcon';
import MailIcon from './icons/MailIcon';
import PhoneIcon from './icons/PhoneIcon';
import LocationIcon from './icons/LocationIcon';
import TwitterIcon from './icons/TwitterIcon';
import MediumIcon from './icons/MediumIcon';
import TechBackground from './TechBackground';
import { useEffect, useRef } from 'react';

const socialLinks = [
  { href: LINKEDIN_URL, icon: LinkedInIcon, name: 'LinkedIn' },
  { href: GITHUB_URL, icon: GitHubIcon, name: 'GitHub' },
  { href: TWITTER_URL, icon: TwitterIcon, name: 'Twitter' },
  { href: MEDIUM_URL, icon: MediumIcon, name: 'Medium' },
  { href: INSTAGRAM_URL, icon: InstagramIcon, name: 'Instagram' },
  { href: `mailto:${EMAIL}`, icon: MailIcon, name: 'Email' },
];

const contactDetails = [
  { href: `tel:${PHONE}`, icon: PhoneIcon, name: PHONE },
  { href: LOCATION_URL, icon: LocationIcon, name: LOCATION, isLocation: true },
];

// Hero Palette: Vibrant Golden, Amber, Orange + Crimson, Bright Yellow, Clumsy Colors
const HERO_PALETTE = ['#FFD700', '#FF8C00', '#FF4500', '#DAA520', '#DC143C', '#FFB700', '#e11d48', '#ffff00'];

// Helper component for Scrambling Text
const ScrambleText: React.FC<{ text: string; className?: string; style?: React.CSSProperties }> = ({ text, className, style }) => {
    const [displayText, setDisplayText] = useState(text);
    const [isHovered, setIsHovered] = useState(false);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const chars = '01<>/_!@#%^&*()[]{};:';

    useEffect(() => {
        if (isHovered) {
            let iteration = 0;
            if (intervalRef.current) clearInterval(intervalRef.current);

            intervalRef.current = setInterval(() => {
                setDisplayText(prev => 
                    prev.split('').map((char, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return chars[Math.floor(Math.random() * chars.length)];
                    }).join('')
                );

                if (iteration >= text.length) {
                    if (intervalRef.current) clearInterval(intervalRef.current);
                }
                
                iteration += 1 / 3;
            }, 30);
        } else {
             setDisplayText(text);
             if (intervalRef.current) clearInterval(intervalRef.current);
        }

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isHovered, text]);

    return (
        <span 
            className={className}
            style={style}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {displayText}
        </span>
    );
};

const Hero: React.FC = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = e;
    const { innerWidth: width, innerHeight: height } = window;

    const moveX = (clientX / width - 0.5) * 20; 
    const moveY = (clientY / height - 0.5) * 20;
    setOffset({ x: moveX, y: moveY });
  };
  
  const containerStyle = {
     transform: `translate3d(${offset.x * -0.5}px, ${offset.y * -0.5}px, 0)`,
  }

  const renderName = () => {
    return NAME.split('').map((char, charIndex) => (
        <span
        key={charIndex}
        className="hover-char inline-block transition-all duration-200 ease-out cursor-default hover:text-accent select-none"
        style={{ 
            animationDelay: `${0.2 + charIndex * 0.05}s`,
            marginRight: char === ' ' ? '1rem' : '0' 
        }}
        >
        {char === ' ' ? '\u00A0' : char}
        </span>
    ));
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-dark-background"
      onMouseMove={handleMouseMove}
    >
      {/* Full screen background for hero with forceActive to ensure it shows on load */}
      {/* Added interactive={true} to enable hover effect only in Hero */}
      {/* Set speed=1.0 for faster animation than before */}
      <TechBackground 
        colors={HERO_PALETTE} 
        forceActive={true} 
        interactive={true} 
        interactionStrength={0.3}
        speed={1.0} 
      />
      
      <div className="absolute inset-0 bg-dark-background/20 z-0 pointer-events-none"></div>

      <div 
        className="relative z-10 w-full max-w-[95%] flex items-center justify-center"
        style={containerStyle}
      >
        <div className="
            w-full
            p-4 sm:p-10
            flex flex-col items-center text-center
            transition-all duration-500
        ">
            
            {/* Name - HUGE */}
            <div className="relative group pointer-events-auto mb-8 w-full overflow-visible">
                <h1 
                    className="font-display font-bold text-white uppercase tracking-tighter leading-none opacity-0 animate-fade-in whitespace-nowrap drop-shadow-2xl"
                    style={{ 
                        animationDelay: '0.1s',
                        fontSize: 'clamp(2.5rem, 8vw, 9rem)' 
                    }}
                >
                {renderName()}
                </h1>
            </div>

            {/* Title - No Box, Glassy Underline */}
            <div className="mb-12 pointer-events-auto relative group">
                <p 
                    className="font-mono text-lg sm:text-xl md:text-3xl text-accent tracking-[0.15em] opacity-0 animate-fade-in-up py-2"
                    style={{ animationDelay: '0.6s' }}
                >
                    &lt; <ScrambleText text={TITLE} /> /&gt;
                </p>
                {/* Modern Glassy Underline */}
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent group-hover:via-accent transition-all duration-500"></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-accent blur-[2px] group-hover:w-1/2 transition-all duration-700 opacity-0 group-hover:opacity-100"></div>
            </div>

            {/* Social Icons - Smooth Pop-in Zoom */}
            <div 
            className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 mb-12 opacity-0 animate-fade-in-up pointer-events-auto"
            style={{ animationDelay: '0.8s' }}
            >
            {socialLinks.map(({ href, icon: Icon, name }) => (
                    <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-3 transition-transform duration-300 hover:scale-125 cursor-pointer"
                    aria-label={name}
                    data-interactive="true"
                    >
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400 transition-colors duration-300 group-hover:text-accent" />
                    {/* Icon Expanding Underline */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-accent rounded-full transition-all duration-300 group-hover:w-full"></div>
                    </a>
            ))}
            </div>
            
            {/* Contact Details - Modern Text with Underline */}
            <div 
            className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 opacity-0 animate-fade-in-up pointer-events-auto"
            style={{ animationDelay: '1s' }}
            >
            {contactDetails.map(({ href, icon: Icon, name, isLocation }) => (
                <a
                key={name}
                href={href}
                target={isLocation ? "_blank" : undefined}
                rel={isLocation ? "noopener noreferrer" : undefined}
                className="group relative flex items-center gap-3 py-2"
                aria-label={name}
                data-interactive="true"
                >
                <Icon className="w-6 h-6 text-accent transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                <span className="font-display text-lg sm:text-xl text-gray-300 group-hover:text-white tracking-wide transition-colors">{name}</span>
                
                {/* Shiny Glassy Underline */}
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10 group-hover:bg-accent/50 transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent shadow-[0_0_10px_rgba(249,115,22,0.8)] transition-all duration-500 group-hover:w-full"></div>
                </a>
            ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
