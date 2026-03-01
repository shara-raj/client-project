import type {
  AuthUser,
  LoginCredentials,
  SignupCredentials,
  ResetPasswordPayload,
} from "../types/auth.types";

const MOCK_DELAY = 600;

const mockUser: AuthUser = {
  id: "mock-user-1",
  email: "user@example.com",
  role: "user",
  provider: "email",
};

// export async function mockLogin(
//   _credentials: LoginCredentials,
// ): Promise<AuthUser> {
//   await delay();
//   return mockUser;
// }

export async function mockLogin(
  credentials: LoginCredentials,
): Promise<AuthUser> {
  await delay();

  if (
    credentials.email === "admin@example.com" &&
    credentials.password === "admin123"
  ) {
    return {
      id: "admin-1",
      email: credentials.email,
      role: "admin",
      provider: "email",
    };
  }

  if (
    credentials.email === "editor@example.com" &&
    credentials.password === "editor123"
  ) {
    return {
      id: "editor-1",
      email: credentials.email,
      role: "editor",
      provider: "email",
    };
  }

  if (
    credentials.email === "user@example.com" &&
    credentials.password === "user123"
  ) {
    return {
      id: "user-1",
      email: credentials.email,
      role: "user",
      provider: "email",
    };
  }

  throw new Error("Invalid email or password");
}

export async function mockSignup(
  credentials: SignupCredentials,
): Promise<AuthUser> {
  await delay();
  return {
    ...mockUser,
    email: credentials.email,
  };
}

export async function mockGoogleSignIn(): Promise<AuthUser> {
  await delay();
  return {
    id: "google-user-1",
    email: "googleuser@gmail.com",
    role: "user",
    provider: "google",
  };
}

export async function mockLogout(): Promise<void> {
  await delay();
}

export async function mockResetPassword(
  _payload: ResetPasswordPayload,
): Promise<void> {
  await delay();
}

function delay(ms: number = MOCK_DELAY): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
