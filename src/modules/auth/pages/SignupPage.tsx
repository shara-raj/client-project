import { useState } from "react";

import { AuthCard } from "../components/AuthCard";
import { AuthInput } from "../components/AuthInput";
import { PasswordField } from "../components/PasswordField";
import { AuthButton } from "../components/AuthButton";
import { AuthFooterLink } from "../components/AuthFooterLink";
import { useAuth } from "../hooks/useAuth";

export default function SignupPage() {
  const { signup, signInWithGoogle, isLoading } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signup({ email, password, confirmPassword });
  };

  return (
    <AuthCard
      title="Create an account"
      subtitle="Get started in just a few seconds"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <AuthInput
          label="Email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <PasswordField
          label="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <PasswordField
          label="Confirm password"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <AuthButton type="submit" disabled={isLoading}>
          Sign up
        </AuthButton>
      </form>

      <div className="my-4 text-center text-sm text-gray-500">or</div>

      <AuthButton type="button" onClick={signInWithGoogle} disabled={isLoading}>
        Continue with Google
      </AuthButton>

      <AuthFooterLink
        text="Already have an account?"
        linkText="Sign in"
        to="/auth/login"
      />
    </AuthCard>
  );
}
