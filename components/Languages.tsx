import React from 'react';
import { LANGUAGES_KNOWN } from '../constants';
import Section from './Section';

const Languages: React.FC = () => {
  return (
    <Section id="languages" title="Languages">
      <div className="flex flex-wrap justify-center gap-6">
        {LANGUAGES_KNOWN.map((language) => (
          <div 
            key={language} 
            className="bg-card-bg/20 border border-border-color text-text-primary text-xl font-medium px-8 py-4 rounded-xl backdrop-blur-sm"
          >
            {language}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Languages;