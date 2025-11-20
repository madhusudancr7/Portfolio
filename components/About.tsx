
import React, { useRef, useEffect, useState } from 'react';
import Section from './Section';

// Distinct Palette: Cyan, Teal, Blue, Navy
// Moved outside component to prevent re-renders
const BG_COLORS = ['#0891b2', '#06b6d4', '#1e3a8a', '#164e63'];

const About: React.FC = () => {
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
      { root: null, rootMargin: '0px', threshold: 0.2 }
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
    <Section id="about" title="About Me" bgColors={BG_COLORS} speed={0.5}>
       <div ref={sectionRef} className="relative">
         <p 
           className={`font-mono text-accent mb-6 text-base md:text-lg opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`}
           style={{ animationDelay: '0.1s' }}
         >
           // Intro
         </p>
         
         <h2 
           className={`text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-white max-w-5xl mb-8 opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`}
           style={{ animationDelay: '0.3s' }}
         >
           Results-oriented <span className="inline-block text-accent relative">Senior Data Engineer
             <span className="absolute bottom-0 left-0 w-full h-2 bg-accent/20 -z-10 transform skew-x-12"></span>
           </span> with 4 years of experience designing and delivering <span className="text-accent">end-to-end data solutions</span> in cloud-native environments.
         </h2>
         
         <p 
           className={`text-lg md:text-xl text-gray-300 max-w-4xl leading-relaxed opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`}
           style={{ animationDelay: '0.5s' }}
         >
            Proficient in designing scalable data pipelines and reusable, metadata-driven ETL frameworks using <span className="text-white font-semibold">PySpark</span> and <span className="text-white font-semibold">Apache Airflow</span>. Expert in performance tuning, CI/CD automation, and transforming complex business requirements into high-performance data systems.
         </p>
      </div>
    </Section>
  );
};

export default About;
