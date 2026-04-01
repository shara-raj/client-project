import { useEffect, useState } from "react";
import {
  fetchAdminPosts,
  type PostFilter,
} from "../services/adminPosts.service";
import type { AdminPostListItem } from "../../post/types/post.types";
import {
  approvePostAdmin,
  deletePost,
  publishPostAdmin,
  rejectPostAdmin,
  requestEditAdmin,
} from "../services/adminPosts.service";

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

  const handleDelete = async (postId: string) => {
    try {
      await deletePost(postId);
      await fetchPosts(page, filter); // refresh list
    } catch (error) {
      console.error("Delete failed", error);
    }
  };

  const handleApprove = async (postId: string) => {
    await approvePostAdmin(postId);
    await fetchPosts(page, filter);
  };

  const handlePublish = async (postId: string) => {
    await publishPostAdmin(postId);
    await fetchPosts(page, filter);
  };

  const handleReject = async (postId: string, feedback: string) => {
    await rejectPostAdmin(postId, feedback);
    await fetchPosts(page, filter);
  };

  const handleRequestEdit = async (postId: string, feedback: string) => {
    await requestEditAdmin(postId, feedback);
    await fetchPosts(page, filter);
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
    handleDelete,
    handleApprove,
    handlePublish,
    handleReject,
    handleRequestEdit,
  };
};
