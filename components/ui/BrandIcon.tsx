import { siWhatsapp } from "simple-icons";

const catalog = {
  whatsapp: siWhatsapp,
};

type BrandIconProps = {
  name: keyof typeof catalog;
  size?: number;
};

export function BrandIcon({ name, size = 18 }: BrandIconProps) {
  const icon = catalog[name];

  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-hidden="true"
      focusable="false"
      style={{ flexShrink: 0 }}
    >
      <path fill="currentColor" d={icon.path} />
    </svg>
  );
}
