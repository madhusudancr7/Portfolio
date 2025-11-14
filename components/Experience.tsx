import React, { useState } from 'react';
import { EXPERIENCES } from '../constants';
import Section from './Section';

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Section id="experience" title="Work Experience">
      <div className="bg-card-bg backdrop-blur-sm border border-border-color rounded-xl p-8">
        <div className="flex flex-col md:flex-row gap-8 min-h-[400px]">
          <div className="flex flex-row md:flex-col md:w-1/4 overflow-x-auto -mb-px border-b-2 md:border-b-0 md:border-l-2 border-border-color/50">
            {EXPERIENCES.map((exp, index) => (
              <button
                key={exp.company}
                onClick={() => setActiveTab(index)}
                className={`text-left p-4 w-full transition-all duration-300 whitespace-nowrap font-medium text-text-secondary relative ${
                  activeTab === index
                    ? 'text-accent'
                    : 'hover:bg-card-bg/30 hover:text-text-primary'
                }`}
              >
                {activeTab === index && <div className="absolute left-[-2px] top-0 h-full w-0.5 bg-accent"></div>}
                {exp.company}
              </button>
            ))}
          </div>
          <div className="md:w-3/4">
            {EXPERIENCES.map((exp, index) => (
              <div key={exp.company} className={`transition-opacity duration-500 ${activeTab === index ? 'opacity-100' : 'opacity-0 absolute invisible'}`}>
                  <div>
                      <h3 className="text-2xl font-bold text-text-primary">
                          {exp.role} <span className="text-accent">@ {exp.company}</span>
                      </h3>
                      <p className="font-mono text-sm mt-1 mb-6 text-text-secondary">{exp.period}</p>
                      <ul className="space-y-4 list-disc list-inside text-text-secondary">
                          {exp.points.map((point, i) => (
                          <li key={i} className="relative pl-6 leading-loose">
                              <span className="absolute left-0 top-1 text-accent">▹</span>
                              {point}
                          </li>
                          ))}
                      </ul>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Experience;