import type { ReactNode } from "react";
import { useVisibility } from "./useVisibility";

type RevealOnScrollProps = {
  children: ReactNode;
  className?: string;
  threshold?: number;
};

export function RevealOnScroll({
  children,
  className = "",
  threshold = 0.2,
}: RevealOnScrollProps) {
  const { ref, isVisible } = useVisibility<HTMLDivElement>({ threshold });

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out will-change-transform
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        ${className}`}
    >
      {children}
    </div>
  );
}
