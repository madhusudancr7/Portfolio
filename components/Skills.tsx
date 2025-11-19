
import React from 'react';
import { SKILLS } from '../constants';
import Section from './Section';

// Distinct Palette: Violet, Purple, Fuchsia, Indigo
// Moved outside to prevent re-renders
const BG_COLORS = ['#7c3aed', '#c026d3', '#4f46e5', '#9333ea'];

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Technical Skills" bgColors={BG_COLORS} speed={2}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {SKILLS.map((category, index) => (
          <div 
            key={category.title} 
            data-interactive="true" 
            className="bg-white/5 p-5 md:p-8 rounded-xl border border-white/10 backdrop-blur-md transition-transform duration-300 hover:-translate-y-2 opacity-0 animate-fade-in-up"
            style={{ animationDelay: `${0.1 * index}s` }}
          >
            <h3 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span 
                  key={skill.name}
                  data-interactive="true"
                  className="bg-accent/10 text-accent px-3 py-1 rounded-full font-mono text-xs md:text-sm transition-all duration-300 hover:bg-accent hover:text-white hover:scale-110 cursor-pointer"
                >
                  {skill.name}
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
