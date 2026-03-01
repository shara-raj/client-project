import { useState } from "react";

import { AuthCard } from "../components/AuthCard";
import { AuthInput } from "../components/AuthInput";
import { AuthButton } from "../components/AuthButton";
import { AuthFooterLink } from "../components/AuthFooterLink";
import { useAuth } from "../hooks/useAuth";

export default function ForgotPasswordPage() {
  const { resetPassword, isLoading } = useAuth();
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await resetPassword({ email });
  };

  return (
    <AuthCard
      title="Reset your password"
      subtitle="We’ll send you a reset link"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <AuthInput
          label="Email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <AuthButton type="submit" disabled={isLoading}>
          Send reset link
        </AuthButton>
      </form>

      <AuthFooterLink
        text="Remembered your password?"
        linkText="Back to login"
        to="/auth/login"
      />
    </AuthCard>
  );
}
