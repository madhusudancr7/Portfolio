import React from 'react';
import { SUMMARY } from '../constants';
import Section from './Section';

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me">
      <div className="bg-card-bg backdrop-blur-sm border border-border-color rounded-xl p-8 md:p-12">
        <p className="text-text-secondary text-lg leading-relaxed">
            {SUMMARY}
        </p>
      </div>
    </Section>
  );
};

export default About;