import { useAuth } from "@/modules/auth";
import type { ReactNode } from "react";

interface AdminHeaderProps {
  title?: string;
  breadcrumb?: ReactNode;
  actions?: ReactNode;
  profile?: ReactNode;
  onMobileMenuClick?: () => void;
}

export default function AdminHeader({
  title,
  breadcrumb,
  actions,
  profile,
  onMobileMenuClick,
}: AdminHeaderProps) {
  const { logout } = useAuth();
  return (
    <header className="h-16 bg-white border-b border-neutral-200 px-4 md:px-6 flex items-center justify-between">
      <div className="flex items-center gap-3 min-w-0">
        {/* Mobile menu trigger */}
        <button
          onClick={onMobileMenuClick}
          className="md:hidden h-9 w-9 rounded-md bg-neutral-200 flex items-center justify-center"
        >
          <div className="h-4 w-4 bg-neutral-400 rounded-sm" />
        </button>

        <div className="min-w-0">
          {title && <h1 className="text-lg font-semibold truncate">{title}</h1>}
          {breadcrumb && (
            <div className="text-sm text-neutral-500 truncate">
              {breadcrumb}
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center gap-4">
        {actions}
        {profile}
        <div className="w-8 h-8 rounded-full cursor-pointer bg-neutral-100 hover:bg-neutral-200 flex align-middle justify-center">
          <img
            className="w-5 h-auto"
            src="/images/logout/logout.svg"
            alt="log out"
            onClick={logout}
          />
        </div>
      </div>
    </header>
  );
}
