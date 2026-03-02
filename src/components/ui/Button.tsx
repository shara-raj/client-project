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
    "inline-flex items-center justify-center rounded-xl px-5 py-2 text-lg font-medium transition-all duration-200";

  const variantStyles =
    variant === "primary"
      ? "bg-[#d4af37]/70 hover:bg-[#d4af37]/40 text-primary-foreground"
      : "bg-[#d4af37]/70 hover:bg-neutral-200 border border-neutral-200 text-black cursor-pointer";

  const widthStyles = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${widthStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
