
import React from 'react';
import { LANGUAGES_KNOWN } from '../constants';
import Section from './Section';

// Distinct Palette: Rose, Pink, Red, Orange
// Moved outside to prevent re-renders
const BG_COLORS = ['#e11d48', '#db2777', '#f43f5e', '#fb7185'];

const Languages: React.FC = () => {
  return (
    <Section id="languages" title="Languages" bgColors={BG_COLORS} speed={2}>
      <div className="flex flex-wrap justify-center gap-6 md:gap-12">
        {LANGUAGES_KNOWN.map((language, index) => (
          <div
            key={language.name}
            data-interactive="true"
            className="group relative"
            style={{ animationDelay: `${0.1 * index}s` }}
          >
            <div 
              className="bg-white/5 border border-white/10 text-white text-lg md:text-2xl font-medium px-6 py-3 md:px-8 md:py-4 rounded-xl backdrop-blur-md transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:bg-accent/10 group-hover:text-accent group-hover:border-accent/50 group-hover:shadow-lg group-hover:shadow-accent/20 cursor-pointer"
            >
              {language.name}
            </div>
            {/* Tooltip with native script */}
            <div className="absolute -top-10 md:-top-12 left-1/2 -translate-x-1/2 w-max px-3 py-1 md:px-4 md:py-2 bg-white text-black rounded-md text-base md:text-xl font-semibold opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 pointer-events-none z-20 shadow-lg">
              {language.native}
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 md:border-8 border-transparent border-t-white"></div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Languages;
