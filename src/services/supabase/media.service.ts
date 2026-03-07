import { supabase } from "./supabaseClient";

export const getMedia = async () => {
  const { data, error } = await supabase
    .from("media")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;

  return data ?? [];
};

export const uploadMedia = async (
  file: File,
  title: string,
  category: string,
  userId: string,
) => {
  const fileName = `${Date.now()}-${file.name}`;

  const { error: uploadError } = await supabase.storage
    .from("media")
    .upload(fileName, file);

  if (uploadError) throw uploadError;

  const { data } = supabase.storage.from("media").getPublicUrl(fileName);

  const publicUrl = data.publicUrl;

  const { error: insertError } = await supabase.from("media").insert({
    title,
    category,
    url: publicUrl,
    uploaded_by: userId,
  });

  if (insertError) throw insertError;

  return publicUrl;
};

export const deleteMedia = async (id: string, url: string) => {
  const fileName = url.split("/").pop();

  if (fileName) {
    await supabase.storage.from("media").remove([fileName]);
  }

  const { error } = await supabase.from("media").delete().eq("id", id);

  if (error) throw error;
};
