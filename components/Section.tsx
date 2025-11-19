
import React, { useRef, useEffect, useState } from 'react';
import TechBackground from './TechBackground';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  bgColors?: string[];
  speed?: number; // New prop for animation speed
}

const Section: React.FC<SectionProps> = ({ id, title, children, bgColors, speed = 1 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id={id} 
      ref={sectionRef} 
      className="relative w-full py-16 md:py-32 overflow-hidden"
    >
      {/* Background Layer */}
      <TechBackground colors={bgColors} speed={speed} />

      {/* Content Layer */}
      <div className={`relative z-10 container mx-auto px-6 md:px-10 lg:px-16 xl:px-24 transition-opacity duration-1000 ${isVisible ? 'opacity-100 animate-blur-reveal' : 'opacity-0'}`}>
        <div className="flex items-center mb-8 md:mb-12">
            <h2 
            data-interactive="true"
            className={`group text-3xl md:text-5xl font-graffiti text-white whitespace-nowrap opacity-0 ${isVisible ? 'animate-blur-reveal' : ''} transition-all duration-300 hover:scale-105 cursor-pointer drop-shadow-lg`}
            style={{ animationDelay: '0.1s' }}
            >
            <span className="text-accent font-mono text-2xl md:text-4xl"># </span>
            <span className="transition-colors duration-300 group-hover:text-accent">{title}</span>
            </h2>
            <div className={`w-full h-px bg-white/20 ml-4 md:ml-6 opacity-0 ${isVisible ? 'animate-fade-in' : ''}`} style={{ animationDelay: '0.3s' }}></div>
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;
