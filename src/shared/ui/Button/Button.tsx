import type { AnchorHTMLAttributes, PropsWithChildren } from "react";

type ButtonVariant = "ink" | "gold" | "outlineLight" | "outlineDark";

const variantClassName: Record<ButtonVariant, string> = {
  ink: "button--ink",
  gold: "button--gold",
  outlineLight: "button--outline-light",
  outlineDark: "button--outline-dark",
};

type ButtonProps = PropsWithChildren<
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    variant?: ButtonVariant;
  }
>;

export function Button({
  children,
  variant = "ink",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <a className={`button ${variantClassName[variant]} ${className}`.trim()} {...props}>
      {children}
    </a>
  );
}
