import { courseGroups } from "@/data/courses";
import { skillCategories } from "@/data/skills";
import type { StatItem } from "@/lib/types";

const CAREER_START = "2024-07";

function yearsSince(start: string) {
  const [year, month] = start.split("-").map(Number);
  const today = new Date();
  const months = (today.getFullYear() - year) * 12 + (today.getMonth() + 1 - month);

  return Math.floor(months / 12);
}

const technologies = skillCategories.reduce(
  (total, category) => total + category.items.length,
  0,
);

const courseHours = courseGroups.reduce(
  (total, group) =>
    total + group.courses.reduce((sum, course) => sum + Number.parseInt(course.hours, 10), 0),
  0,
);

export const stats: StatItem[] = [
  {
    id: "experience",
    value: `+${yearsSince(CAREER_START)}`,
    label: "Anos de experiência em TI",
  },
  {
    id: "tech",
    value: `${technologies}`,
    label: "Tecnologias e ferramentas",
  },
  {
    id: "courses",
    value: `${courseHours}h`,
    label: "Em cursos concluídos",
  },
];
