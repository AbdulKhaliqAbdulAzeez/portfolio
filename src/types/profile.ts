export type ContactLink = {
  label: string;
  href: string;
  type?: "github" | "linkedin" | "email" | "resume" | "demo" | "docs";
};

export type Education = {
  school: string;
  degree: string;
  expectedGraduation: string;
  coursework: string[];
};

export type Certification = {
  name: string;
  issuer: string;
  date: string;
};

export type Project = {
  name: string;
  category: "revised-midterm" | "job-technology" | "supporting";
  courseLabel: string;
  description: string;
  cloudRelevance: string;
  tools: string[];
  problem: string;
  built: string;
  decisions: string[];
  security: string[];
  learned: string;
  status: Record<string, string>;
  links: ContactLink[];
};

export type Profile = {
  name: string;
  title: string;
  professionalIdentity: string;
  targetWorkStatement: string;
  targetAudience: string;
  visualDirection: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  resume: string;
  summary: string;
  headlineBullets: string[];
  cloudFocus: string[];
  contactLinks: ContactLink[];
  education: Education;
  certifications: Certification[];
  skills: Record<string, string[]>;
  projects: Project[];
};
