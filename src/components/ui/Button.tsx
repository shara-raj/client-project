import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-xl px-4 py-1 text-base font-medium transition-all duration-200";

  const variantStyles =
    variant === "primary"
      ? "bg-primary hover:bg-primary-dark text-white"
      : "border border-accent text-accent bg-white hover:bg-accent hover:text-white";

  const widthStyles = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${widthStyles} ${className} cursor-pointer`}
      {...props}
    >
      {children}
    </button>
  );
}
