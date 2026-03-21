import { useState } from "react";
import { logoutUser } from "@/services/supabase/auth.service";

export const useLogout = () => {
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    try {
      setLoading(true);
      await logoutUser();
    } finally {
      setLoading(false);
    }
  };

  return { handleLogout, loading };
};
