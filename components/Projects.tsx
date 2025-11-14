import React from 'react';
import { PROJECTS } from '../constants';
import Section from './Section';
import GitHubIcon from './icons/GitHubIcon';
import ExternalLinkIcon from './icons/ExternalLinkIcon';

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Personal Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.length > 0 ? PROJECTS.map((project) => (
          <div key={project.title} className="bg-card-bg/20 p-8 rounded-xl border border-border-color flex flex-col justify-between group hover:border-accent transition-all duration-300 backdrop-blur-sm hover:shadow-lg hover:shadow-accent/20">
            <div>
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold text-text-primary group-hover:text-accent transition-colors duration-300">{project.title}</h3>
                    <div className="flex space-x-4">
                        {project.links.github && (
                            <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors"><GitHubIcon className="w-6 h-6" /></a>
                        )}
                        {project.links.live && (
                            <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors"><ExternalLinkIcon className="w-6 h-6" /></a>
                        )}
                    </div>
                </div>
                <ul className="space-y-3 list-disc list-inside text-text-secondary mb-6">
                    {project.points.map((point, i) => (
                      <li key={i} className="relative pl-6 leading-relaxed">
                        <span className="absolute left-0 top-1 text-accent">▹</span>
                        {point}
                      </li>
                    ))}
                  </ul>
            </div>
            <div className="flex flex-wrap gap-2 font-mono text-sm text-accent mt-auto">
              {project.technologies.map((tech) => (
                <span key={tech} className="bg-accent/10 text-accent px-3 py-1 rounded-full">{tech}</span>
              ))}
            </div>
          </div>
        )) : (
          <p className="text-text-secondary md:col-span-2 text-center">No projects to display.</p>
        )}
      </div>
    </Section>
  );
};

export default Projects;