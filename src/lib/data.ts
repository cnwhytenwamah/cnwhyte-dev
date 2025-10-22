import { Project, Skill, SocialLink } from './types';

export const projects: Project[] = [
  {
    id: '1',
    title: "Your Project Name",
    description: "Brief description",
    longDescription: "Detailed description",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    image: "🚀", // Use emoji or replace with actual images later
    github: "https://github.com/yourusername/project",
    live: "https://yourproject.com",
    featured: true
  },
  // Add more projects...
];

export const skills: Skill[] = [
  { name: "React & Next.js", level: 95, category: 'frontend' },
  { name: "TypeScript", level: 90, category: 'frontend' },
  // Add more skills...
];

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/yourusername', icon: 'github' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', icon: 'linkedin' },
  { name: 'Twitter', url: 'https://twitter.com/yourusername', icon: 'twitter' }
];