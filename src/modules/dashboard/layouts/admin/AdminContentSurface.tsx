import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function AdminContentSurface({ children }: Props) {
  return (
    <main className="flex-1 overflow-y-auto bg-neutral-50 p-6">{children}</main>
  );
}
