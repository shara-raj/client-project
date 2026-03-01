export type AuthRole = "user" | "admin" | "editor";

export type AuthAuthProvider = "email" | "google";

//user model
export interface AuthUser {
  id: string;
  email: string;
  role: AuthRole;
  provider: AuthAuthProvider;
}

//Auth state
export interface AuthState {
  user: AuthUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

//Credentials
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupCredentials {
  email: string;
  password: string;
  confirmPassword: string;
}

//password reset
export interface ResetPasswordPayload {
  email: string;
}

//Auth Context Contract
export interface AuthContextValue extends AuthState {
  login: (credentials: LoginCredentials) => Promise<AuthUser>;
  signup: (credentials: SignupCredentials) => Promise<AuthUser>;
  signInWithGoogle: () => Promise<AuthUser>;
  logout: () => Promise<void>;
  resetPassword: (payload: ResetPasswordPayload) => Promise<void>;
}
