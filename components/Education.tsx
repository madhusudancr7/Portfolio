import React from 'react';
import { EDUCATION } from '../constants';
import Section from './Section';

const Education: React.FC = () => {
  return (
    <Section id="education" title="Education">
      <div className="space-y-6">
        {EDUCATION.map((item) => (
          <div key={item.institution} className="bg-card-bg/20 p-8 rounded-xl border border-border-color backdrop-blur-sm">
            <h3 className="text-xl font-bold text-text-primary">{item.degree}</h3>
            <p className="text-accent mt-1 font-semibold">{item.institution}</p>
            <p className="text-text-secondary mt-2">{item.details}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Education;