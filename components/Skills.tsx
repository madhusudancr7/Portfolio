import React from 'react';
import { SKILLS } from '../constants';
import Section from './Section';

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Technical Skills">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SKILLS.map((category) => (
          <div key={category.title} className="bg-card-bg/20 p-8 rounded-xl border border-border-color backdrop-blur-sm">
            <h3 className="text-xl font-bold text-text-primary mb-6">{category.title}</h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <div 
                  key={skill.name} 
                  className="bg-border-color text-text-secondary text-sm font-semibold px-4 py-2 rounded-full cursor-default"
                >
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;