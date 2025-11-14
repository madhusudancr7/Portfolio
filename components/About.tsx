
import React, { useRef, useEffect, useState } from 'react';

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
      { root: null, rootMargin: '0px', threshold: 0.1 }
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
      id="about" 
      ref={sectionRef}
      className={`py-20 md:py-32 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
       <div className={isVisible ? 'animate-fade-in-up' : ''}>
         <p className="font-mono text-accent mb-4 text-lg">// Intro</p>
         <h2 className="text-3xl md:text-5xl font-bold leading-tight text-text-primary dark:text-dark-text-primary max-w-4xl mb-8">
           I'm a versatile <span className="text-accent">data engineer</span> who partners with teams to turn <span className="text-accent">complex problems</span> into high-performance data systems that drive <span className="text-accent">analytics and innovation.</span>
         </h2>
         <p className="text-lg text-text-secondary dark:text-dark-text-secondary max-w-2xl mb-12">
            I focus on clear interfaces, sharp decisions, and fast execution—whether it's architecting pipelines, tuning performance, or automating deployments—delivering robust and effective solutions from start to finish.
         </p>
         <a 
            href="#projects" 
            data-interactive="true"
            className="group font-semibold text-lg text-text-primary dark:text-dark-text-primary inline-flex items-center gap-2"
          >
           <span>See My Work</span>
           <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
         </a>
      </div>
    </section>
  );
};

export default About;