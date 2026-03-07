import { supabase } from "./supabaseClient";

// REVIEW QUEUE FUNCTIONS

export const getPostsForReview = async () => {
  const { data, error } = await supabase
    .from("posts")
    .select(
      `
      id,
      title,
      status,
      created_at,
      author_id,
      users(name,email)
    `,
    )
    .eq("status", "review_requested")
    .order("created_at", { ascending: false });

  if (error) throw error;

  return data ?? [];
};

export const approvePost = async (postId: string) => {
  const { error } = await supabase
    .from("posts")
    .update({
      status: "approved",
      updated_at: new Date(),
    })
    .eq("id", postId);

  if (error) throw error;
};

export const rejectPost = async (postId: string, feedback: string) => {
  const { error } = await supabase
    .from("posts")
    .update({
      status: "draft",
      feedback,
      updated_at: new Date(),
    })
    .eq("id", postId);

  if (error) throw error;
};

// POST CREATION FUNCTIONS

export const createPost = async (
  title: string,
  content: any,
  authorId: string,
  slug: string,
) => {
  const { data, error } = await supabase
    .from("posts")
    .insert({
      title,
      slug,
      content,
      author_id: authorId,
      status: "draft",
    })
    .select()
    .single();

  if (error) throw error;

  return data;
};

export const updatePost = async (postId: string, updates: any) => {
  const { error } = await supabase
    .from("posts")
    .update({
      ...updates,
      updated_at: new Date(),
    })
    .eq("id", postId);

  if (error) throw error;
};

export const publishPost = async (postId: string) => {
  const { error } = await supabase
    .from("posts")
    .update({
      status: "published",
      updated_at: new Date(),
    })
    .eq("id", postId);

  if (error) throw error;
};
