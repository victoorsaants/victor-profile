export type NavItem = {
  href: string;
  label: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type Skill = {
  name: string;
};

export type SkillCategory = {
  id: string;
  title: string;
  items: Skill[];
};

export type ProjectStatus = "placeholder" | "in-progress" | "shipped";

export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  status: ProjectStatus;
  featured?: boolean;
  accent: string;
};

export type ExperienceItem = {
  id: string;
  year: string;
  title: string;
  description: string;
};

export type StatItem = {
  id: string;
  value: string;
  label: string;
};
