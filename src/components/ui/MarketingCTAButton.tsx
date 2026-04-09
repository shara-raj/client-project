import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import Button from "./Button";

type MarketingCTAProps = {
  children: ReactNode;
  to?: string;
  scrollTargetId?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
  disabled?: boolean;
};

export function MarketingCTAButton({
  children,
  to,
  scrollTargetId,
  onClick,
  type = "button",
  className = "",
  disabled = false,
}: MarketingCTAProps) {
  const baseStyles =
    "px-6 py-3 rounded-lg bg-[#d4af37]/70 hover:bg-[#d4af37]/40 transition-colors duration-300 text-base font-medium shadow-soft cursor-pointer";

  //If navigation
  if (to) {
    return (
      <Link to={to} className={`${baseStyles} ${className}`}>
        {children}
      </Link>
    );
  }

  //scroll + custom handler
  function handleClick() {
    if (scrollTargetId) {
      document
        .getElementById(scrollTargetId)
        ?.scrollIntoView({ behavior: "smooth" });
    }

    if (onClick) {
      onClick();
    }
  }

  return (
    <Button
      variant="primary"
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className={`${baseStyles} ${className}`}
    >
      {children}
    </Button>
  );
}
