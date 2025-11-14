export interface Skill {
  name: string;
  level: number;
  icon?: React.ComponentType<{ className?: string }>;
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
  icon: React.ComponentType<{ className?: string }>;
}