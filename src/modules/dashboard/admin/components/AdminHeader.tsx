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

  const title = getPageTitle(location.pathname);

  const navigate = useNavigate();
  function handleLogout() {
    // Clear auth state and redirect to login
    navigate("/auth/login");
  }

  return (
    <header className="bg-page border-b border-main px-6 py-4 flex items-center justify-between">
      {/* Page Title */}
      <h1 className="text-lg font-semibold text-main">{title}</h1>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Notifications Placeholder */}
        <button className="text-sub hover:text-main transition">🔔</button>

        {/* Admin Avatar */}
        <div className="w-9 h-9 rounded-full bg-soft flex items-center justify-center text-sm font-medium">
          A
        </div>

        {/* Logout */}
        <button
          className="text-sm text-sub hover:text-main transition cursor-pointer"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </header>
  );
}
