// Fix: Import ComponentType from react to resolve 'React' namespace error.
import type { ComponentType } from 'react';

export interface Skill {
  name: string;
  level: number;
  // Fix: Use ComponentType instead of React.ComponentType.
  icon?: ComponentType<{ className?: string }>;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  points: string[];
}

export interface Project {
  title: string;
  description: string;
  points?: string[];
  technologies: string[];
  category: string;
  links: {
    github?: string;
    live?: string;
  };
}

export interface EducationItem {
  degree: string;
  institution: string;
  details: string;
}

export interface Hobby {
  name: string;
  // Fix: Use ComponentType instead of React.ComponentType.
  icon: ComponentType<{ className?: string }>;
}

export interface Language {
  name: string;
  native: string;
}