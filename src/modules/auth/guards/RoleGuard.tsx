import { Navigate } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
import { useUserRole } from "../hooks/useUserRole";
import { useUserProfile } from "../hooks/useUserProfile";
import { getDashboardRouteByRole } from "../utils/roleRedirect";

type Props = {
  children: React.ReactNode;
  allowedRole: string;
};

export default function RoleGuard({ children, allowedRole }: Props) {
  const { user } = useAuth();
  const { role, loading: roleLoading } = useUserRole();
  const { profile, loading: profileLoading } = useUserProfile();

  if (!user) {
    return <Navigate to="/auth/login" replace />;
  }

  // Loading state
  if (roleLoading || profileLoading) {
    return <div className="p-6">Checking permissions...</div>;
  }

  //Profile is null
  if (!profile) {
    return <Navigate to="/auth/login" replace />;
  }

  // Role mismatch
  if (role !== allowedRole) {
    const redirectPath = getDashboardRouteByRole(role);
    return <Navigate to={redirectPath || "/"} replace />;
  }

  // PASSWORD RESET LOGIC (ONLY EDITORS)
  if (role === "editor" && profile && !profile.password_set) {
    return <Navigate to="/auth/set-password" replace />;
  }

  return <>{children}</>;
}
