import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/modules/auth";

function getPageTitle(pathname: string) {
  if (pathname.includes("dashboard")) return "Dashboard";
  if (pathname.includes("editors")) return "Editors";
  if (pathname.includes("review")) return "Review Queue";
  if (pathname.includes("media")) return "Media Library";
  if (pathname.includes("analytics")) return "Analytics";
  if (pathname.includes("settings")) return "Settings";

  return "Admin";
}

export default function AdminHeader() {
  const location = useLocation();
  const navigate = useNavigate();

  const { profile, logout } = useAuth();

  const title = getPageTitle(location.pathname);

  const name = profile?.name?.trim() || "Admin";
  const initial = name.charAt(0).toUpperCase();

  const handleLogout = async () => {
    await logout();
    navigate("/auth/login");
  };

  return (
    <header className="border-b border-border-soft px-6 py-4 flex items-center justify-between">
      {/* Page Title */}
      <h1 className="text-lg font-semibold text-main">{title}</h1>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Profile Section */}
        <div className="flex items-center gap-2">
          {/* Avatar */}
          <div className="w-9 h-9 rounded-full bg-soft flex items-center justify-center text-sm font-medium text-main">
            {initial}
          </div>

          {/* Name */}
          <span className="text-sm text-main">{name}</span>
        </div>

        {/* Logout */}
        <button
          className="btn-primary px-3 py-1 rounded-md text-sm hover:opacity-90 transition cursor-pointer"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </header>
  );
}
