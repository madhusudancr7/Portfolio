
import React from 'react';
import { HOBBIES } from '../constants';
import Section from './Section';

// Distinct Palette: Fuchsia, Gold, Purple, Yellow
// Moved outside to prevent re-renders
const BG_COLORS = ['#a21caf', '#d946ef', '#eab308', '#86198f'];

const Hobbies: React.FC = () => {
  return (
    <Section id="hobbies" title="Hobbies" bgColors={BG_COLORS} speed={2}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
        {HOBBIES.map((hobby, index) => (
          <div
            key={hobby.name}
            data-interactive="true"
            className="group relative"
            style={{ animationDelay: `${0.1 * index}s` }}
            tabIndex={0}
          >
            <div
              className="bg-white/5 p-4 md:p-8 rounded-xl border border-white/10 flex flex-col items-center justify-center transition-all duration-300 group-hover:border-accent backdrop-blur-md cursor-pointer group-hover:scale-105 md:group-hover:scale-110 group-focus-within:scale-105 md:group-focus-within:scale-110 group-focus-within:border-accent h-full"
            >
              <hobby.icon className="w-10 h-10 md:w-16 md:h-16 text-gray-400 mb-3 md:mb-4 transition-colors duration-300 group-hover:text-accent group-focus-within:text-accent" />
              <h3 className="text-sm md:text-lg font-bold text-white">{hobby.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Hobbies;
