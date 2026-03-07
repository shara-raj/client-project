import { useEffect, useState } from "react";
import {
  getEditors,
  createEditor,
  disableEditor,
} from "@/services/supabase/user.service";

export const useEditors = () => {
  const [editors, setEditors] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchEditors = async () => {
    try {
      setLoading(true);
      const data = await getEditors();
      setEditors(data);
    } catch (error) {
      console.error("Failed to load editors", error);
    } finally {
      setLoading(false);
    }
  };

  const addEditor = async (
    name: string,
    email: string,
    tempPassword: string,
  ) => {
    await createEditor(name, email, tempPassword);
    await fetchEditors();
  };

  const removeEditor = async (editorId: string) => {
    await disableEditor(editorId);
    await fetchEditors();
  };

  useEffect(() => {
    fetchEditors();
  }, []);

  return {
    editors,
    loading,
    addEditor,
    removeEditor,
  };
};
