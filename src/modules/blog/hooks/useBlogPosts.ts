import { useEffect, useState } from "react";
import type { BlogPost } from "../types/blog.types";
import { blogService } from "../api/blog.service";
import type { BlogPostQuery } from "../types/blog.query";

interface UseBlogPostsResult {
  posts: BlogPost[];
  totalPages: number;
  loading: boolean;
  error: string | null;
}

export const useBlogPosts = (
  query: BlogPostQuery,
): UseBlogPostsResult => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const mode = query.mode;
  const page = mode === "all" ? (query.page ?? 1) : 1;
  const pageSize = mode === "all" ? (query.pageSize ?? 6) : 0;
  const limit = mode === "recent" ? (query.limit ?? 3) : 0;

  useEffect(() => {
    let isMounted = true;

    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);

        const stableQuery: BlogPostQuery = mode === "all"
          ? { mode: "all", page, pageSize }
          : mode === "recent"
          ? { mode: "recent", limit }
          : { mode: "featured" };

        const result = await blogService.getPosts(stableQuery);

        if (!isMounted) return;

        setPosts(result.data);
        setTotalPages(result.totalPages);
      } catch (err) {
        if (!isMounted) return;

        console.error(err);
        setError("Failed to load posts");
        setPosts([]);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchPosts();

    return () => {
      isMounted = false;
    };
  }, [mode, page, pageSize, limit]);

  return { posts, totalPages, loading, error };
};
