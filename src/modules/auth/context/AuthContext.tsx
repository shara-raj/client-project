import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import type {
  AuthContextValue,
  AuthState,
  LoginCredentials,
  SignupCredentials,
  ResetPasswordPayload,
} from "../types/auth.types";

import {
  mockLogin,
  mockSignup,
  mockGoogleSignIn,
  mockLogout,
  mockResetPassword,
} from "../mocks/auth.mock";

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
};

type AuthProviderProps = {
  children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [state, setState] = useState<AuthState>(initialState);

  const setLoading = (isLoading: boolean) => {
    setState((prev) => ({ ...prev, isLoading }));
  };

  const login = async (credentials: LoginCredentials) => {
    setLoading(true);
    try {
      const user = await mockLogin(credentials);
      setState({
        user,
        isAuthenticated: true,
        isLoading: false,
      });
      return user;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  const signup = async (credentials: SignupCredentials) => {
    setLoading(true);
    try {
      const user = await mockSignup(credentials);
      setState({
        user,
        isAuthenticated: true,
        isLoading: false,
      });
      return user;
    } catch {
      setLoading(false);
      throw new Error("Signup failed");
    }
  };

  const signInWithGoogle = async () => {
    setLoading(true);
    try {
      const user = await mockGoogleSignIn();
      setState({
        user,
        isAuthenticated: true,
        isLoading: false,
      });
      return user;
    } catch {
      setLoading(false);
      throw new Error("Google sign-in failed");
    }
  };

  const logout = async () => {
    setLoading(true);
    await mockLogout();
    setState(initialState);
  };

  const resetPassword = async (payload: ResetPasswordPayload) => {
    setLoading(true);
    try {
      await mockResetPassword(payload);
    } finally {
      setLoading(false);
    }
  };

  const value = useMemo<AuthContextValue>(
    () => ({
      ...state,
      login,
      signup,
      signInWithGoogle,
      logout,
      resetPassword,
    }),
    [state],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

/* =========================
   Internal Hook (used by useAuth)
   ========================= */

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
