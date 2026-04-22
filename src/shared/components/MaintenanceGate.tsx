import { useSettingsContext } from "@/modules/dashboard/admin/context/SettingsContext";
import { useAuth } from "@/modules/auth";
import MaintenancePage from "@/shared/components/MaintenancePage";
import { useLocation } from "react-router-dom";

export default function MaintenanceGate({
  children,
}: {
  children: React.ReactNode;
}) {
  const { settings, loading: settingLoading } = useSettingsContext();
  const { role, loading: authLoading } = useAuth();
  const location = useLocation();

  const isAuthPage = location.pathname.startsWith("/auth");
  const isAdminOrEditor = role === "admin" || role === "editor";
  const isMaintenanceMode = settings?.maintenance_mode ?? false;

  if (!settingLoading && !authLoading) {
    if (isMaintenanceMode && !isAdminOrEditor && !isAuthPage) {
      return <MaintenancePage />;
    }
  }

  return <>{children}</>;
}
