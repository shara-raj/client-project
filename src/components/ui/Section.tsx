import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  container?: boolean;
  containerClassName?: string;
};

export function Section({
  children,
  id,
  className = "",
  container = true,
  containerClassName = "",
}: SectionProps) {
  return (
    <section id={id} className={` ${className}`}>
      {container ? (
        <div className={`mx-auto max-w-6xl px-6 ${containerClassName}`}>
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
}
