import type { ReactNode } from "react";

interface AdminCardProps {
  title?: string;
  actions?: ReactNode;
  children: ReactNode;
}

export default function AdminCard({
  title,
  actions,
  children,
}: AdminCardProps) {
  return (
    <div className="bg-white border rounded-xl p-6">
      {(title || actions) && (
        <div className="flex items-center justify-between mb-4">
          {title && (
            <h2 className="text-sm font-semibold text-neutral-700">{title}</h2>
          )}
          {actions}
        </div>
      )}
      {children}
    </div>
  );
}
