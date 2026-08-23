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
  image?: string;
};

export type ExperienceItem = {
  id: string;
  year: string;
  period: string;
  title: string;
  company: string;
  description: string;
  highlights: string[];
  current?: boolean;
};

export type Education = {
  id: string;
  course: string;
  institution: string;
  logo: string;
  period: string;
  status: string;
  description: string;
};

export type StatItem = {
  id: string;
  value: string;
  label: string;
};

export type Course = {
  id: string;
  title: string;
  year: string;
  hours: string;
  description: string;
  partner?: string;
  credential?: string;
  credentialUrl?: string;
};

export type CourseGroup = {
  id: string;
  institution: string;
  logo: string;
  logoTheme?: "dark";
  summary: string;
  courses: Course[];
};
