
import React, { useState, MouseEvent, useEffect, useRef } from 'react';
import { NAME, TITLE, LINKEDIN_URL, GITHUB_URL, INSTAGRAM_URL, EMAIL, PHONE, LOCATION, TWITTER_URL, MEDIUM_URL, LOCATION_URL } from '../constants';
import LinkedInIcon from './icons/LinkedInIcon';
import GitHubIcon from './icons/GitHubIcon';
import InstagramIcon from './icons/InstagramIcon';
import MailIcon from './icons/MailIcon';
import TwitterIcon from './icons/TwitterIcon';
import MediumIcon from './icons/MediumIcon';
import TechBackground from './TechBackground';

// Socials for Hero
const socialLinks = [
  { href: LINKEDIN_URL, icon: LinkedInIcon, name: 'LinkedIn' },
  { href: GITHUB_URL, icon: GitHubIcon, name: 'GitHub' },
  { href: TWITTER_URL, icon: TwitterIcon, name: 'Twitter' },
  { href: MEDIUM_URL, icon: MediumIcon, name: 'Medium' },
  { href: INSTAGRAM_URL, icon: InstagramIcon, name: 'Instagram' },
  { href: `mailto:${EMAIL}`, icon: MailIcon, name: 'Email' },
];

// Scramble Text Helper
const ScrambleText: React.FC<{ text: string; className?: string }> = ({ text, className }) => {
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
                        if (index < iteration) return text[index];
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
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {displayText}
        </span>
    );
};

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden bg-[#050505] flex flex-col justify-center items-center">
      
      {/* Background Layer - Fluid Artifact Behind Text */}
      <div className="absolute inset-0 z-0">
         <TechBackground variant="central-orb" interactive forceActive />
      </div>

      {/* --- MAIN CENTERED CONTENT --- */}
      <div className="relative z-10 text-center cursor-default group">
         {/* Name: Single Line, White (visible on dark), Hover Effect */}
         <h1 
            className="font-display font-black text-white tracking-tighter leading-none whitespace-nowrap relative inline-block"
            style={{ fontSize: 'clamp(3rem, 10vw, 12rem)' }}
         >
            {NAME}
            
            {/* Liquid Oil Underline Effect */}
            <span className="absolute -bottom-2 left-0 w-full h-[10px] md:h-[20px] bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 rounded-full origin-left transform scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-x-100 opacity-80 blur-[2px]"></span>
            <span className="absolute -bottom-2 left-0 w-full h-[10px] md:h-[20px] bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 rounded-full origin-left transform scale-x-0 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-x-100 mix-blend-overlay"></span>
         </h1>
      </div>

      {/* --- CORNER ANCHORS --- */}
      
      {/* Bottom Left: Location / Contact */}
      <div className="absolute bottom-8 left-6 md:bottom-12 md:left-12 z-20 flex flex-col gap-3 pointer-events-auto text-left">
         <a href={LOCATION_URL} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
            <span className="font-mono text-sm md:text-base uppercase tracking-widest border-b border-transparent group-hover:border-accent pb-0.5 transition-all">
                {LOCATION}
            </span>
         </a>
         {/* Phone Number - Big & Bold */}
         <a href={`tel:${PHONE}`} className="text-gray-100 hover:text-accent font-mono text-2xl md:text-4xl font-black tracking-tight transition-colors">
            {PHONE}
         </a>
      </div>

      {/* Bottom Right: Job Title */}
      <div className="absolute bottom-8 right-6 md:bottom-12 md:right-12 z-20 text-right pointer-events-auto">
         <p className="text-gray-500 font-mono text-xs mb-2 uppercase tracking-widest">Current Role</p>
         <div className="relative group cursor-default">
            {/* Updated Font to Mono for Data Engineer vibe */}
            <h2 className="font-mono font-bold text-2xl md:text-4xl text-white leading-tight tracking-tighter">
               <span className="text-accent">&lt;</span> 
               <ScrambleText text={TITLE} className="mx-1" /> 
               <span className="text-accent">/&gt;</span>
            </h2>
            {/* Shiny Underline */}
            <div className="absolute bottom-0 right-0 w-full h-[2px] bg-white/10 group-hover:bg-accent/50 transition-colors duration-500"></div>
            <div className="absolute bottom-0 right-0 w-0 h-[2px] bg-accent shadow-[0_0_15px_rgba(249,115,22,1)] transition-all duration-700 group-hover:w-full"></div>
         </div>
      </div>

      {/* Top Left: Social Links */}
      <div className="absolute top-32 left-6 md:top-1/2 md:-translate-y-1/2 md:left-12 z-20 flex flex-row md:flex-col gap-6 pointer-events-auto">
         {socialLinks.map(({ href, icon: Icon, name }) => (
            <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2 text-gray-500 hover:text-white transition-colors duration-300 flex items-center"
                aria-label={name}
            >
                <div className="relative">
                    <Icon className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 group-hover:scale-110 group-hover:text-accent" />
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[3px] bg-accent rounded-full shadow-[0_0_12px_rgba(249,115,22,0.8)] transition-all duration-300 group-hover:w-full"></div>
                </div>
                <span className="absolute left-full ml-4 top-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-md border border-gray-700 text-white text-sm font-bold px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap hidden md:block shadow-sm">
                    {name}
                </span>
            </a>
         ))}
      </div>

    </section>
  );
};

export default Hero;
