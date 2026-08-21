import {
  siClaude,
  siCss,
  siCursor,
  siDocker,
  siFastapi,
  siGit,
  siGithub,
  siHtml5,
  siJavascript,
  siMysql,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siPython,
  siReact,
  siSupabase,
  siTypescript,
} from "simple-icons";

const vsCode = {
  hex: "007ACC",
  path: "M23.15 2.587 18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z",
};

const catalog: Record<string, { hex: string; path: string }> = {
  React: siReact,
  "Next.js": siNextdotjs,
  TypeScript: siTypescript,
  JavaScript: siJavascript,
  HTML: siHtml5,
  CSS: siCss,
  Python: siPython,
  FastAPI: siFastapi,
  "Node.js": siNodedotjs,
  PostgreSQL: siPostgresql,
  MySQL: siMysql,
  Supabase: siSupabase,
  Git: siGit,
  GitHub: siGithub,
  Docker: siDocker,
  "VS Code": vsCode,
  Cursor: siCursor,
  "Claude Code": siClaude,
};

function fillFor(hex: string) {
  const value = Number.parseInt(hex, 16);
  const red = (value >> 16) & 255;
  const green = (value >> 8) & 255;
  const blue = value & 255;
  const luminance = (0.299 * red + 0.587 * green + 0.114 * blue) / 255;

  return luminance < 0.18 ? "currentColor" : `#${hex}`;
}

export function SkillIcon({ name }: { name: string }) {
  const icon = catalog[name];

  if (!icon) {
    return null;
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill={fillFor(icon.hex)} d={icon.path} />
    </svg>
  );
}
