import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonVariant = "primary" | "secondary" | "ghost";

type CommonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
};

function classesFor(variant: ButtonVariant, className?: string) {
  return [styles.button, styles[variant], className].filter(Boolean).join(" ");
}

export function Button(props: ButtonAsButton | ButtonAsLink) {
  if (props.href) {
    const classes = classesFor(props.variant ?? "primary", props.className);
    const isExternal = props.external ?? props.href.startsWith("http");

    if (isExternal) {
      return (
        <a
          className={classes}
          href={props.href}
          target="_blank"
          rel="noreferrer noopener"
        >
          {props.children}
        </a>
      );
    }

    return (
      <Link className={classes} href={props.href}>
        {props.children}
      </Link>
    );
  }

  const { children, variant = "primary", className, type = "button", ...rest } =
    props as ButtonAsButton;

  return (
    <button className={classesFor(variant, className)} type={type} {...rest}>
      {children}
    </button>
  );
}
