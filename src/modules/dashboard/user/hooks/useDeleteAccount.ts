import { useState } from "react";
import { deleteWebsiteUserAccount } from "@/services/supabase/auth.service";

export const useDeleteAccount = () => {
  const [loading, setLoading] = useState(false);

  const handleDeleteAccount = async () => {
    try {
      setLoading(true);
      await deleteWebsiteUserAccount();
      return true;
    } finally {
      setLoading(false);
    }
  };

  return { handleDeleteAccount, loading };
};
