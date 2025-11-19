
import React from 'react';
import { EDUCATION } from '../constants';
import Section from './Section';

// Distinct Palette: Blue, Slate, Sky, Indigo
// Moved outside to prevent re-renders
const BG_COLORS = ['#2563eb', '#3b82f6', '#0ea5e9', '#6366f1'];

const Education: React.FC = () => {
  return (
    <Section id="education" title="Education" bgColors={BG_COLORS} speed={2}>
      <div className="space-y-6">
        {EDUCATION.map((item) => (
          <div 
            key={item.institution} 
            data-interactive="true"
            className="bg-white/5 p-5 md:p-8 rounded-xl border border-white/10 backdrop-blur-md group transition-all duration-300 hover:border-accent hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-2"
          >
            <h3 className="text-xl md:text-2xl font-bold text-white transition-colors duration-300 group-hover:text-accent">{item.degree}</h3>
            <p className="text-accent mt-1 font-semibold text-base md:text-lg">{item.institution}</p>
            <p className="text-gray-300 mt-2 text-base md:text-lg">{item.details}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Education;
