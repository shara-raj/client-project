import { useState } from "react";
import { updatePassword } from "@/services/supabase/auth.service";

export const useChangePassword = () => {
  const [loading, setLoading] = useState(false);

  const handleChangePassword = async (password: string) => {
    try {
      setLoading(true);
      await updatePassword(password);
      return true;
    } finally {
      setLoading(false);
    }
  };

  return { handleChangePassword, loading };
};
