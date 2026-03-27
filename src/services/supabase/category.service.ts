import { supabase } from "./supabaseClient";

export const createCategory = async (name: string, slug: string) => {
  //check for existing categories
  const { data, error } = await supabase
    .from("categories")
    .insert([{ name, slug }])
    .select()
    .maybeSingle();

  if (error) {
    if (error.code === "23505") {
      throw new Error("Category already exists");
    }
    throw error;
  }
  return data;
};

export const getCategories = async () => {
  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;

  return data;
};
