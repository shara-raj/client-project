import { supabase } from "./supabaseClient";

export const getSubscriberCount = async () => {
  const { count, error } = await supabase
    .from("subscribers")
    .select("*", { count: "exact", head: true });

  if (error) throw error;

  return count ?? 0;
};

export const getHealingPathUsage = async () => {
  const { data, error } = await supabase
    .from("healing_path_usage")
    .select("path_slug, views");

  if (error) throw error;

  return data ?? [];
};

export const getEditorActivity = async () => {
  const { data, error } = await supabase
    .from("posts")
    .select("title, updated_at, author_id")
    .order("updated_at", { ascending: false })
    .limit(5);

  if (error) throw error;

  return data ?? [];
};
