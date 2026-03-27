import { useEffect, useState } from "react";
import {
  fetchAdminPosts,
  type PostFilter,
} from "../services/adminPosts.service";
import type { AdminPostListItem } from "../../post/types/post.types";

export const useAdminPosts = () => {
  const [posts, setPosts] = useState<AdminPostListItem[]>([]);
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState<PostFilter>("all");

  const limit = 10;

  const fetchPosts = async (
    currentPage: number,
    currentFilter: PostFilter,
  ) => {
    setLoading(true);
    try {
      const res = await fetchAdminPosts(currentPage, limit, currentFilter);
      setPosts(res.data);
    } catch (error) {
      console.error("Failed to fetch posts", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts(page, filter);
  }, [page, filter]);

  return {
    posts,
    loading,
    page,
    setPage,
    filter,
    setFilter,
  };
};
