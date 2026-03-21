import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthCard } from "../components/AuthCard";
import { AuthInput } from "../components/AuthInput";
import { PasswordField } from "../components/PasswordField";
import { AuthButton } from "../components/AuthButton";
import { AuthFooterLink } from "../components/AuthFooterLink";
import { useAuth } from "../providers/AuthProvider";
import { getUserRole } from "@/services/supabase/role.service";
import toast from "react-hot-toast";

export default function LoginPage() {
  const { login, signInWithGoogle, isLoading } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { user, loading } = useAuth();

  useEffect(() => {
    if (loading) return;

    const redirectUser = async () => {
      if (!user?.id) return;

      try {
        const role = await getUserRole(user.id);

        if (role === "admin") {
          navigate("/admin/dashboard");
        } else if (role === "editor") {
          navigate("/editor/dashboard");
        } else {
          navigate("/user/dashboard");
        }
      } catch (err) {
        console.error("Role fetch failed", err);
      }
    };
    redirectUser();
  }, [user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    //Validation
    if (!email || !password) {
      toast.error("Please enter email and password");
      return;
    }

    try {
      const user = await login({ email: email.trim().toLowerCase(), password });
      toast.success("Login Successful");

      let role;

      try {
        role = await getUserRole(user.id);
      } catch (err) {
        console.error("Role fetch failed", err);
        toast.error("Failed to determine user role");
        return;
      }

      if (role === "admin") {
        navigate("/admin/dashboard");
      } else if (role === "editor") {
        navigate("/editor/dashboard");
      } else {
        navigate("/user/dashboard");
      }
    } catch (error: any) {
      toast.error(
        error?.message?.includes("Invalid login")
          ? "Invalid email or password"
          : error.message || "Login failed",
      );
    }
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
