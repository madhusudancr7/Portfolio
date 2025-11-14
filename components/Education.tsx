import React from 'react';
import { EDUCATION } from '../constants';
import Section from './Section';

const Education: React.FC = () => {
  return (
    <Section id="education" title="Education">
      <div className="space-y-6">
        {EDUCATION.map((item) => (
          <div 
            key={item.institution} 
            data-interactive="true"
            className="bg-card-bg dark:bg-dark-card-bg p-8 rounded-xl border border-border-color dark:border-dark-border-color backdrop-blur-sm group transition-all duration-300 hover:border-accent hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-2"
          >
            <h3 className="text-2xl font-bold text-text-primary dark:text-dark-text-primary transition-colors duration-300 group-hover:text-accent">{item.degree}</h3>
            <p className="text-accent mt-1 font-semibold text-lg">{item.institution}</p>
            <p className="text-text-secondary dark:text-dark-text-secondary mt-2 text-lg">{item.details}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Education;