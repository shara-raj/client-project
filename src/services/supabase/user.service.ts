import { supabase } from "./supabaseClient";

export const getEditors = async () => {
  const { data, error } = await supabase
    .from("users")
    .select("id, name, email, password_set")
    .eq("role", "editor")
    .order("created_at", { ascending: false });

  if (error) throw error;

  return data ?? [];
};

export const createEditor = async (
  name: string,
  email: string,
  tempPassword: string,
) => {
  const { data, error } = await supabase.auth.admin.createUser({
    email,
    password: tempPassword,
    email_confirm: true,
    user_metadata: {
      name,
      role: "editor",
    },
  });

  if (error) throw error;

  return data;
};

export const disableEditor = async (editorId: string) => {
  const { error } = await supabase
    .from("users")
    .update({ is_active: false })
    .eq("id", editorId);

  if (error) throw error;
};
