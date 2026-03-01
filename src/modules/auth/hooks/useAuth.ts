import { useAuthContext } from "../context/AuthContext";
import type { AuthContextValue } from "../types/auth.types";

export function useAuth(): AuthContextValue {
  return useAuthContext();
}
