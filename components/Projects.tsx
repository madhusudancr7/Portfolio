
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import type { Project } from '../types';
import Section from './Section';
import GitHubIcon from './icons/GitHubIcon';
import ExternalLinkIcon from './icons/ExternalLinkIcon';
import Modal from './Modal';

// Distinct Palette: Emerald, Green, Teal, Lime
// Moved outside to prevent re-renders
const BG_COLORS = ['#059669', '#10b981', '#0d9488', '#65a30d'];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  return (
    <Section id="projects" title="Personal Projects" bgColors={BG_COLORS} speed={2}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {PROJECTS.length > 0 ? PROJECTS.map((project, index) => (
          <div 
            key={project.title} 
            data-interactive="true" 
            className="bg-white/5 p-5 md:p-8 rounded-xl border border-white/10 flex flex-col justify-between group hover:border-accent transition-all duration-300 backdrop-blur-md hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-2 hover:scale-[1.02] opacity-0 animate-fade-in-up"
            style={{ animationDelay: `${0.1 * index}s` }}
          >
            <div>
              <div className="flex justify-between items-start mb-3 md:mb-4">
                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-accent transition-colors duration-300">{project.title}</h3>
                <div className="flex space-x-3 md:space-x-4 flex-shrink-0 ml-4">
                  {project.links.github && (
                      <a href={project.links.github} data-interactive="true" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors"><GitHubIcon className="w-5 h-5 md:w-6 md:h-6" /></a>
                  )}
                  {project.links.live && (
                      <a href={project.links.live} data-interactive="true" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors"><ExternalLinkIcon className="w-5 h-5 md:w-6 md:h-6" /></a>
                  )}
                </div>
              </div>
              <p className="text-gray-300 mb-4 md:mb-6 line-clamp-3 md:line-clamp-2 text-base md:text-lg">{project.description}</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-auto gap-4 sm:gap-0">
              <div className="flex flex-wrap gap-2 font-mono text-xs md:text-sm text-accent">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span key={tech} className="inline-block bg-accent/10 text-accent px-2 py-1 md:px-3 md:py-1 rounded-full">{tech}</span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="inline-block bg-accent/10 text-accent px-2 py-1 md:px-3 md:py-1 rounded-full">...</span>
                )}
              </div>
              <button 
                onClick={() => setSelectedProject(project)}
                className="text-sm md:text-base font-semibold text-accent border-2 border-accent/50 rounded-full px-4 py-1.5 transition-all duration-300 hover:bg-accent hover:text-white w-full sm:w-auto text-center"
              >
                View Details
              </button>
            </div>
          </div>
        )) : (
          <p className="text-gray-400 md:col-span-2 text-center">No projects to display.</p>
        )}
      </div>

      {selectedProject && (
        <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
          <div className="p-2">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary dark:text-dark-text-primary mb-2">{selectedProject.title}</h2>
            <p className="text-text-secondary dark:text-dark-text-secondary mb-6 text-base md:text-lg">{selectedProject.description}</p>
            
            <h3 className="text-lg md:text-xl font-bold text-text-primary dark:text-dark-text-primary mb-3 md:mb-4">Key Features</h3>
            <ul className="space-y-2 md:space-y-3 list-disc list-inside text-text-secondary dark:text-dark-text-secondary mb-6 text-base md:text-lg">
              {selectedProject.points?.map((point, i) => (
                <li key={i} className="relative pl-5 md:pl-6 leading-relaxed">
                  <span className="absolute left-0 top-1 text-accent">▹</span>
                  {point}
                </li>
              ))}
            </ul>

            <h3 className="text-lg md:text-xl font-bold text-text-primary dark:text-dark-text-primary mb-3 md:mb-4">Technologies Used</h3>
            <div className="flex flex-wrap gap-2 font-mono text-xs md:text-sm text-accent">
              {selectedProject.technologies.map((tech) => (
                <span key={tech} className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full">{tech}</span>
              ))}
            </div>
          </div>
        </Modal>
      )}
    </Section>
  );
};

export default Projects;
