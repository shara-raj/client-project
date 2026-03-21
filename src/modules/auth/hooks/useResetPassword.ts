import { useState } from "react";
import { updatePassword } from "@/services/supabase/auth.service";

export const useResetPassword = () => {
  const [loading, setLoading] = useState(false);

  const handleResetPassword = async (password: string) => {
    try {
      setLoading(true);
      await updatePassword(password);
      return true;
    } finally {
      setLoading(false);
    }
  };

  return { handleResetPassword, loading };
};
