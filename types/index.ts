export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  image: string;
}

export interface Skill {
  name: string;
  category: string;
  level: number;
}

export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  siteUrl: string;
  whatsapp: string;
  avatar: string;
  location: string;
  cvUrl: string;
  fullBio: string;
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
  skills: Skill[];
}