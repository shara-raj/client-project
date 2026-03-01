import type { ReactNode } from "react";

interface HealingLayoutProps {
  children: ReactNode;
}

export default function HealingLayout({ children }: HealingLayoutProps) {
  return (
    <main
      className="min-h-screen bg-white text-[#3E2F23]"
      style={{
        backgroundImage: "url(/images/app-bg/pattern.png)",
      }}
    >
      {children}
    </main>
  );
}
