import { Project, Skill, SocialLink } from './types';

export const projects: Project[] = [
  {
    id: "1",
    title: 'Pepend Blog',
    description:
      'A modern blogging platform featuring rich text editing, authentication, SEO optimization, and a clean UI for reading and writing posts.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
    github: 'https://github.com/nwamahclinton/pepend-blog',
    demo: 'https://pepend.vercel.app',
    image: '/images/projects/pepend.png',
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