import { useEffect, useState } from "react";
import type { BlogPost } from "../types/blog.types";
import { blogService } from "../api/blog.service";
import type { BlogPostQuery } from "../types/blog.query";

// interface UseBlogPostsOptions {
//   contentType?: ContentType;
//   limit?: number;
// }

export const useBlogPosts = (query: BlogPostQuery) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const mode = query.mode;
  const page = mode === "all" ? (query.page ?? 1) : 1;
  const pageSize = mode === "all" ? (query.pageSize ?? 6) : 0;
  const limit = mode === "recent" ? (query.limit ?? 3) : 0;

  useEffect(() => {
    setLoading(true);

    const stableQuery: BlogPostQuery =
      mode === "all"
        ? { mode: "all", page, pageSize }
        : mode === "recent"
          ? { mode: "recent", limit }
          : { mode: "featured" };

    blogService
      .getPosts(stableQuery)
      .then((result) => {
        setPosts(result.data);
        setTotalPages(result.totalPages);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [mode, page, pageSize, limit]);

  return { posts, totalPages, loading };
};
