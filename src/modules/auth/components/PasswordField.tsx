import type { InputHTMLAttributes } from "react";
import { AuthInput } from "./AuthInput";

type PasswordFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export function PasswordField({
  label = "Password",
  ...props
}: PasswordFieldProps) {
  return (
    <AuthInput
      type="password"
      label={label}
      autoComplete="current-password"
      {...props}
    />
  );
}
