import { Navigate, Outlet } from "react-router-dom";
import type { AuthRole } from "../types/auth.types";
import { useAuth } from "../hooks/useAuth";

type ProtectedRouteProps = {
  requiredRole?: AuthRole;
};

export function ProtectedRoute({ requiredRole }: ProtectedRouteProps) {
  const { isAuthenticated, isLoading, user } = useAuth();

  if (isLoading) {
    // Later replace with a proper loader component
    return null;
  }

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" replace />;
  }

  if (requiredRole && user?.role !== requiredRole) {
    // Later: replace with 403 page
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
