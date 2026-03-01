import type { ReactNode } from "react";
import { Outlet } from "react-router-dom";

type DashboardLayoutProps = {
  children?: ReactNode;
};

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* shared dashboard shell (header/sidebar later) */}
      {children ?? <Outlet />}
    </div>
  );
}
