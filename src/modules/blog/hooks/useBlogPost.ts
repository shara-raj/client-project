import { useEffect, useState } from "react";
import { blogService } from "../api/blog.service";
import type { BlogPost } from "../types/blog.types";

interface UseBlogPostResult {
  post: BlogPost | null;
  loading: boolean;
  error: string | null;
}

export const useBlogPost = (
  slug?: string,
  categorySlug?: string,
): UseBlogPostResult => {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) {
      setLoading(false);
      return;
    }

    let isMounted = true;

    const fetchPost = async () => {
      try {
        setLoading(true);
        setError(null);

        const result = await blogService.getPostBySlug(slug);

        if (!isMounted) return;

        if (!result) {
          setPost(null);
          setError("Post not found");
          return;
        }

        setPost(result);
      } catch (err) {
        if (!isMounted) return;

        console.error("Error fetching post:", err);
        setError("Failed to load post");
        setPost(null);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchPost();

    return () => {
      isMounted = false;
    };
  }, [slug, categorySlug]);

  return { post, loading, error };
};
