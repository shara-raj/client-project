import { useEffect, useState } from "react";
import {
  deletePostService,
  getEditorPosts,
  requestPostDeletion,
  submitPostForReview,
} from "@/services/supabase/post.service";

import type { Post } from "../../post/types/post.types";

export const useEditorPosts = (authorId?: string) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    if (!authorId) return;

    setLoading(true);

    try {
      const data = await getEditorPosts(authorId);
      setPosts(data);
    } catch (error) {
      console.error("Failed to fetch editor posts", error);
    } finally {
      setLoading(false);
    }
  };

  const submitForReview = async (postId: string) => {
    try {
      await submitPostForReview(postId);
      await fetchPosts();
    } catch (error) {
      console.error("Submit for review failed", error);
    }
  };

  const deletePost = async (
    postId: string,
    options: { type: "hard" | "soft"; reason?: string },
  ) => {
    try {
      if (options.type === "hard") {
        await deletePostService(postId);
      } else {
        if (!authorId) {
          throw new Error("User ID is required for deletion requests");
        }
        await requestPostDeletion(
          postId,
          options.reason || "Requested by editor",
          authorId,
        );
      }

      await fetchPosts();
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [authorId]);

  return {
    posts,
    loading,
    submitForReview,
    deletePost,
    refreshPosts: fetchPosts,
  };
};
