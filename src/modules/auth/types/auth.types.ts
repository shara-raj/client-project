import type { User } from "@supabase/supabase-js";

// Credentials
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupCredentials {
  email: string;
  password: string;
  confirmPassword: string;
}

// Password reset
export interface ResetPasswordPayload {
  email: string;
}

// Auth Context
export interface AuthContextValue {
  user: User | null;
  profile: UserProfile | null;
  role: AuthRole | null;

  loading: boolean;
  isLoading: boolean;
  isAuthenticated: boolean;

  login: (credentials: LoginCredentials) => Promise<User | null>;

  logout: () => Promise<void>;
  signInWithGoogle: () => Promise<void>;

  refreshProfile: () => Promise<void>;
}

export type AuthRole = "user" | "admin" | "editor";

export interface UserProfile {
  id: string;
  name: string;
  email: string;
}
