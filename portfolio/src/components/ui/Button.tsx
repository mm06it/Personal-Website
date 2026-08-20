import Link from "next/link";
import { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  className?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
  ...rest
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-150 focus-visible:outline-offset-4";
  const styles =
    variant === "primary"
      ? "bg-ink text-bg hover:bg-accent hover:text-accent-ink"
      : "border border-border text-ink hover:border-accent hover:text-accent";

  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  if (external) {
    return (
      <a href={href} className={`${base} ${styles} ${className}`} {...externalProps} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}
