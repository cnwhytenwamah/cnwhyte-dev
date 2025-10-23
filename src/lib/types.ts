export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  demo: string;
  image: string;
  github?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'mobile' | 'backend' | 'tools';
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
}