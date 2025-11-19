
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
      className={`py-16 md:py-32 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
       <div className={isVisible ? 'animate-fade-in-up' : ''}>
         <p className="font-mono text-accent mb-4 text-base md:text-lg">// Intro</p>
         <h2 className="text-2xl md:text-5xl font-bold leading-tight text-text-primary dark:text-dark-text-primary max-w-5xl mb-6 md:mb-8">
           Results-oriented <span className="text-accent">Senior Data Engineer</span> with 4 years of experience designing and delivering <span className="text-accent">end-to-end data solutions</span> in cloud-native environments.
         </h2>
         <p className="text-base md:text-lg text-text-secondary dark:text-dark-text-secondary max-w-4xl mb-8 md:mb-12 leading-relaxed">
            Proficient in designing scalable data pipelines and reusable, metadata-driven ETL frameworks using PySpark and Apache Airflow. Expert in performance tuning, CI/CD automation, and transforming complex business requirements into high-performance data systems.
         </p>
      </div>
    </section>
  );
};

export default About;
