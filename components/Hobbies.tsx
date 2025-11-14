import React from 'react';
import { HOBBIES } from '../constants';
import Section from './Section';

const Hobbies: React.FC = () => {
  return (
    <Section id="hobbies" title="Hobbies">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {HOBBIES.map((hobby, index) => (
          <div
            key={hobby.name}
            data-interactive="true"
            className="group relative"
            style={{ animationDelay: `${0.1 * index}s` }}
            tabIndex={0} // Make it focusable for keyboard navigation
          >
            {/* Main Hobby Card */}
            <div
              className="bg-card-bg dark:bg-dark-card-bg p-8 rounded-xl border border-border-color dark:border-dark-border-color flex flex-col items-center justify-center transition-all duration-300 group-hover:border-accent backdrop-blur-sm cursor-pointer group-hover:scale-110 group-focus-within:scale-110 group-focus-within:border-accent"
            >
              <hobby.icon className="w-16 h-16 text-text-secondary dark:text-dark-text-secondary mb-4 transition-colors duration-300 group-hover:text-accent group-focus-within:text-accent" />
              <h3 className="text-lg font-bold text-text-primary dark:text-dark-text-primary">{hobby.name}</h3>
            </div>

            {/* Animated GIF Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-48 p-2 bg-card-bg dark:bg-dark-card-bg rounded-lg border-2 border-accent/50 shadow-lg shadow-accent/20 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 group-hover:-translate-y-2 group-focus-within:-translate-y-2 transition-all duration-300 pointer-events-none z-10">
               <img src={hobby.gifUrl} alt={`${hobby.name} GIF`} className="w-full h-auto rounded-md object-cover" loading="lazy" />
               {/* Tooltip Arrow */}
               <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-accent/50"></div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Hobbies;
