import { useState } from "react";
import { createPost, updatePost } from "@/services/supabase/post.service";

export const usePostEditor = (authorId: string) => {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState<any>(null);

  const [saving, setSaving] = useState(false);

  const generateSlug = (value: string) => {
    return value
      .toLowerCase()
      .replace(/[^\w\s]/gi, "")
      .replace(/\s+/g, "-");
  };

  const handleTitleChange = (value: string) => {
    setTitle(value);
    setSlug(generateSlug(value));
  };

  const saveDraft = async () => {
    setSaving(true);

    try {
      await createPost(title, content, authorId, slug);
    } catch (error) {
      console.error(error);
    }

    setSaving(false);
  };

  const updateDraft = async (postId: string) => {
    setSaving(true);

    try {
      await updatePost(postId, {
        title,
        slug,
        content,
      });
    } catch (error) {
      console.error(error);
    }

    setSaving(false);
  };

  return {
    title,
    slug,
    content,
    saving,

    setContent,
    handleTitleChange,

    saveDraft,
    updateDraft,
  };
};
