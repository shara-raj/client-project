import { supabase } from "./supabaseClient";

export async function getSettings() {
  const { data, error } = await supabase
    .from("settings")
    .select("*")
    .maybeSingle();

  if (error) throw error;

  return data;
}

export const updateSettings = async (updates: {
  maintenance_mode?: boolean;
}) => {
  const { data, error } = await supabase
    .from("settings")
    .update(updates)
    .eq("id", "00000000-0000-0000-0000-000000000000")
    .select()
    .maybeSingle();

  if (error) throw error;

  return data;
};
