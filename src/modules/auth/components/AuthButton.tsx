import type { ButtonHTMLAttributes } from "react";

type AuthButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  fullWidth?: boolean;
};

export function AuthButton({
  fullWidth = true,
  children,
  ...props
}: AuthButtonProps) {
  return (
    <button
      {...props}
      className={`
        ${fullWidth ? "w-full" : ""}
        rounded-lg bg-black px-4 py-2 text-sm font-medium text-white
        hover:bg-black/90 disabled:opacity-60
      `}
    >
      {children}
    </button>
  );
}
