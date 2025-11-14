
import React, { useState } from 'react';
import { EXPERIENCES } from '../constants';
import Section from './Section';

const Experience: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeExperience = EXPERIENCES[activeIndex];

  return (
    <Section id="experience" title="Work Experience">
      <div 
        className="bg-card-bg dark:bg-dark-card-bg p-6 md:p-8 rounded-xl border border-border-color dark:border-dark-border-color backdrop-blur-sm transition-all duration-300 opacity-0 animate-fade-in-up"
        style={{ animationDelay: `0.1s` }}
      >
        <div className="flex flex-col md:flex-row gap-8 min-h-[450px]">
          {/* Left side: Company tabs */}
          <div className="md:w-1/3 flex-shrink-0 border-b-2 md:border-b-0 md:border-r-2 border-border-color dark:border-dark-border-color pb-4 md:pb-0 md:pr-8">
            <ul className="space-y-2">
              {EXPERIENCES.map((exp, index) => (
                <li key={index}>
                  <button
                    onClick={() => setActiveIndex(index)}
                    data-interactive="true"
                    className={`w-full text-left px-4 py-3 rounded-md font-medium transition-all duration-300 text-lg ${
                      activeIndex === index
                        ? 'bg-accent/10 text-accent scale-105 shadow'
                        : 'text-text-secondary dark:text-dark-text-secondary hover:bg-accent/5'
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
                <h3 className="text-2xl font-bold text-text-primary dark:text-dark-text-primary">
                  {activeExperience.role} <span className="text-accent">@ {activeExperience.company}</span>
                </h3>
                <p className="font-mono text-sm font-semibold mt-1 mb-6 text-accent dark:text-accent">
                  {activeExperience.period}
                </p>
                <ul className="space-y-4 text-text-secondary dark:text-dark-text-secondary text-lg">
                  {activeExperience.points.map((point, i) => (
                    <li 
                      key={i} 
                      className="relative pl-6 leading-loose"
                    >
                      <span className="absolute left-0 top-1 text-accent" aria-hidden="true">▹</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;