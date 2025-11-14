import React from 'react';
import { HOBBIES } from '../constants';
import Section from './Section';

const Hobbies: React.FC = () => {
  return (
    <Section id="hobbies" title="Hobbies">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {HOBBIES.map((hobby) => (
          <div 
            key={hobby.name} 
            data-interactive="true"
            className="bg-card-bg dark:bg-dark-card-bg p-8 rounded-xl border border-border-color dark:border-dark-border-color flex flex-col items-center justify-center transition-all duration-300 group hover:border-accent backdrop-blur-sm"
          >
            <hobby.icon className="w-16 h-16 text-text-secondary dark:text-dark-text-secondary mb-4 transition-colors duration-300 group-hover:text-accent" />
            <h3 className="text-lg font-bold text-text-primary dark:text-dark-text-primary">{hobby.name}</h3>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Hobbies;