
import React, { useState } from 'react';
import { EXPERIENCES } from '../constants';
import Section from './Section';

// Distinct Palette: Amber, Orange, Red, Yellow
// Moved outside to prevent re-renders
const BG_COLORS = ['#d97706', '#ea580c', '#b45309', '#f59e0b'];

const Experience: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeExperience = EXPERIENCES[activeIndex];
  
  return (
    <Section id="experience" title="Work Experience" bgColors={BG_COLORS} speed={2}>
      <div 
        className="bg-white/5 p-5 md:p-8 rounded-xl border border-white/10 backdrop-blur-md transition-all duration-300 opacity-0 animate-fade-in-up"
        style={{ animationDelay: `0.1s` }}
      >
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 min-h-[450px]">
          {/* Left side: Company tabs */}
          <div className="md:w-1/3 flex-shrink-0 border-b-2 md:border-b-0 md:border-r-2 border-white/10 pb-2 md:pb-0 md:pr-8 overflow-x-auto">
            <ul className="flex md:flex-col space-x-2 md:space-x-0 md:space-y-2 pb-2 md:pb-0 min-w-max md:min-w-0">
              {EXPERIENCES.map((exp, index) => (
                <li key={index}>
                  <button
                    onClick={() => setActiveIndex(index)}
                    data-interactive="true"
                    className={`text-left px-4 py-2 md:py-3 rounded-md font-medium transition-all duration-300 text-sm md:text-lg whitespace-nowrap ${
                      activeIndex === index
                        ? 'bg-accent/20 text-accent scale-105 shadow'
                        : 'text-gray-400 hover:bg-white/5 hover:text-white'
                    }`}
                    aria-selected={activeIndex === index}
                    role="tab"
                  >
                    {exp.company}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right side: Experience details */}
          <div className="md:w-2/3" role="tabpanel">
            {activeExperience && (
              <div key={activeIndex} className="animate-fade-in">
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {activeExperience.role} <span className="text-accent block md:inline md:ml-2">@ {activeExperience.company}</span>
                </h3>
                <p className="font-mono text-xs md:text-sm font-semibold mt-1 mb-4 md:mb-6 text-accent">
                  {activeExperience.period}
                </p>
                <ul className="space-y-3 md:space-y-4 text-gray-300 text-base md:text-lg">
                  {activeExperience.points.map((point, i) => (
                    <li 
                      key={i} 
                      className="relative pl-5 md:pl-6 leading-relaxed md:leading-loose"
                    >
                      <span className="absolute left-0 top-1.5 md:top-1 text-accent" aria-hidden="true">▹</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Experience;
