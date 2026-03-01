// Public exports for auth module

// Routes
export { AuthRoutes } from "./routes/auth.routes";

// Provider & Hook
export { AuthProvider } from "./context/AuthContext";
export { useAuth } from "./hooks/useAuth";

// Guards
export { ProtectedRoute } from "./guards/ProtectedRoute";

// Types
export type {
  AuthUser,
  AuthRole,
  AuthAuthProvider,
  AuthState,
  AuthContextValue,
  LoginCredentials,
  SignupCredentials,
  ResetPasswordPayload,
} from "./types/auth.types";
