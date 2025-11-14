import React from 'react';
import { LANGUAGES_KNOWN } from '../constants';
import Section from './Section';

const Languages: React.FC = () => {
  return (
    <Section id="languages" title="Languages">
      <div className="flex flex-wrap justify-center gap-8 md:gap-12">
        {LANGUAGES_KNOWN.map((language, index) => (
          <div
            key={language.name}
            data-interactive="true"
            className="group relative"
            style={{ animationDelay: `${0.1 * index}s` }}
          >
            <div 
              className="bg-card-bg dark:bg-dark-card-bg border border-border-color dark:border-dark-border-color text-text-primary dark:text-dark-text-primary text-2xl font-medium px-8 py-4 rounded-xl backdrop-blur-sm transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:bg-accent/10 group-hover:text-accent group-hover:border-accent/50 group-hover:shadow-lg group-hover:shadow-accent/20 cursor-pointer"
            >
              {language.name}
            </div>
            {/* Tooltip with native script */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-max px-4 py-2 bg-text-primary dark:bg-dark-text-primary text-background dark:text-dark-background rounded-md text-xl font-semibold opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 pointer-events-none">
              {language.native}
              {/* Tooltip arrow */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-text-primary dark:border-t-dark-text-primary"></div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Languages;
