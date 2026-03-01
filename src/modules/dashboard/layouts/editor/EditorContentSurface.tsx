import type { ReactNode } from "react";

interface EditorContentSurfaceProps {
  children: ReactNode;
}

export function EditorContentSurface({ children }: EditorContentSurfaceProps) {
  return (
    <main className="flex-1 overflow-y-auto bg-neutral-50 p-6">{children}</main>
  );
}
