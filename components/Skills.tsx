
import React from 'react';
import { SKILLS } from '../constants';
import Section from './Section';

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Technical Skills">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SKILLS.map((category, index) => (
          <div 
            key={category.title} 
            data-interactive="true" 
            className="bg-card-bg dark:bg-dark-card-bg p-8 rounded-xl border border-border-color dark:border-dark-border-color backdrop-blur-sm transition-transform duration-300 hover:-translate-y-2 opacity-0 animate-fade-in-up"
            style={{ animationDelay: `${0.1 * index}s` }}
          >
            <h3 className="text-xl font-bold text-text-primary dark:text-dark-text-primary mb-6">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span 
                  key={skill.name}
                  data-interactive="true"
                  className="bg-accent/10 text-accent px-3 py-1 rounded-full font-mono text-sm transition-all duration-300 hover:bg-accent hover:text-white hover:scale-110 cursor-pointer"
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