import type { AnchorHTMLAttributes, PropsWithChildren } from "react";

type ButtonVariant = "primary" | "secondary" | "light";

type ButtonProps = PropsWithChildren<
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    variant?: ButtonVariant;
  }
>;

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <a className={`button button--${variant} ${className}`.trim()} {...props}>
      {children}
    </a>
  );
}
