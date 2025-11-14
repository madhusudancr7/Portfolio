import React, { useRef, useEffect, useState } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
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
      className={`py-20 md:py-24 transition-opacity duration-1000 ${isVisible ? 'opacity-100 animate-fade-in-up' : 'opacity-0'}`}
    >
      <div className="flex items-center mb-12">
        <h2 
          data-interactive="true"
          className={`group text-3xl md:text-4xl font-bold text-text-primary dark:text-dark-text-primary whitespace-nowrap opacity-0 ${isVisible ? 'animate-fade-in' : ''} transition-all duration-300 hover:scale-105 cursor-pointer`}
        >
          <span className="text-accent font-mono text-2xl md:text-3xl"># </span>
          <span className="transition-colors duration-300 group-hover:text-accent">{title}</span>
        </h2>
        <div className={`w-full h-px bg-border-color dark:bg-dark-border-color ml-6 opacity-0 ${isVisible ? 'animate-fade-in' : ''}`} style={{ animationDelay: '0.2s' }}></div>
      </div>
      {children}
    </section>
  );
};

export default Section;