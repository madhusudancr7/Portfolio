
import React from 'react';
import { SKILLS } from '../constants';
import Section from './Section';

// Matte Red/Earthy Palette (Darker, less vivid than before)
// Moved outside to prevent re-renders
const BG_COLORS = ['#7f1d1d', '#9a3412', '#78350f', '#881337'];

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Technical Skills" bgColors={BG_COLORS} speed={0.5}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {SKILLS.map((category, index) => (
          <div 
            key={category.title} 
            data-interactive="true" 
            className="bg-white/5 p-5 md:p-8 rounded-xl border border-white/10 backdrop-blur-md transition-transform duration-300 hover:-translate-y-2 opacity-0 animate-fade-in-up"
            style={{ animationDelay: `${0.1 * index}s` }}
          >
            {/* Orange Heading for Visibility */}
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-accent drop-shadow-sm tracking-wide uppercase font-display">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <span 
                  key={skill.name}
                  data-interactive="true"
                  className="relative group bg-white/5 border border-white/20 text-gray-200 font-semibold px-3 py-1.5 rounded-lg font-mono text-xs md:text-sm transition-all duration-300 cursor-pointer overflow-hidden
                  hover:scale-125 hover:bg-accent/20 hover:border-accent hover:text-white hover:shadow-[0_0_20px_rgba(249,115,22,0.6)] hover:z-10 hover:-rotate-1"
                >
                  <span className="relative z-10">{skill.name}</span>
                  {/* Alien Scan Effect overlay */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite]"></span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
