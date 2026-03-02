import type { ButtonHTMLAttributes } from "react";

interface AdminButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
}

export default function AdminButton({
  variant = "primary",
  className = "",
  ...props
}: AdminButtonProps) {
  const styles = {
    primary: "bg-neutral-900 text-white hover:bg-neutral-800",
    secondary: "bg-neutral-100 text-neutral-900 hover:bg-neutral-200",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <button
      {...props}
      className={`px-4 py-2 text-sm rounded-md transition-colors ${styles[variant]} ${className}`}
    />
  );
}
