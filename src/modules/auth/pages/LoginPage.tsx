import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthCard } from "../components/AuthCard";
import { AuthInput } from "../components/AuthInput";
import { PasswordField } from "../components/PasswordField";
import { AuthButton } from "../components/AuthButton";
import { AuthFooterLink } from "../components/AuthFooterLink";
import { useAuth } from "../providers/AuthProvider";
import { getDashboardRouteByRole } from "../utils/roleRedirect";
import toast from "react-hot-toast";

export default function LoginPage() {
  const { login, signInWithGoogle, isLoading, user, loading, role } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    console.log("🧠 useEffect triggered");

    console.log("➡ loading:", loading);
    console.log("➡ user:", user);
    console.log("➡ role:", role);
    if (loading) return;

    if (!user) return;

    if (!role) return;

    console.log("Navigating Now...");

    const redirectPath = getDashboardRouteByRole(role);

    navigate(redirectPath);
  }, [user, loading, role, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    //Validation
    if (!email || !password) {
      toast.error("Please enter email and password");
      return;
    }

    try {
      await login({
        email: email.trim().toLowerCase(),
        password,
      });

      toast.success("Login Successful");
    } catch (error: any) {
      toast.error(
        error?.message?.includes("Invalid login")
          ? "Invalid email or password"
          : error.message || "Login failed",
      );
    }
    console.log("🟡 Login success, waiting for auth state...");
  };

  const hangleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
    } catch (err) {
      toast.error("Google Login Failed");
    }
  };

  return (
    <AuthCard title="Welcome back" subtitle="Sign in to your account">
      <form onSubmit={handleSubmit} className="space-y-4">
        <AuthInput
          label="Email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <PasswordField
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <AuthButton type="submit" disabled={isLoading}>
          {isLoading ? "Signing in..." : "Sign In"}
        </AuthButton>
      </form>

      <div className="my-4 text-center text-sm text-gray-500">or</div>

      <AuthButton
        type="button"
        onClick={hangleGoogleLogin}
        disabled={isLoading}
      >
        Continue with Google
      </AuthButton>

      <AuthFooterLink
        text="Forgot your password?"
        linkText="Reset it"
        to="/auth/forgot-password"
      />

      <AuthFooterLink
        text="Don’t have an account?"
        linkText="Sign up"
        to="/auth/signup"
      />
    </AuthCard>
  );
}
