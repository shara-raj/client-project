import { getAllPostsPaginatedForAdmin } from "@/services/supabase/post.service";
import type { AdminPostListItem } from "../../post/types/post.types";
import { softDeletePost } from "@/services/supabase/post.service";
import { getPostById } from "@/services/supabase/post.service";

export type PostFilter = "all" | "admin" | "editor";

export const fetchAdminPosts = async (
  page: number,
  limit: number,
  filter: PostFilter,
): Promise<{ data: AdminPostListItem[]; total: number }> => {
  const res = await getAllPostsPaginatedForAdmin(page, limit);

  let filteredData: AdminPostListItem[] = res.data;

  if (filter === "admin") {
    filteredData = res.data.filter((post) => post.role === "admin");
  }
  if (filter === "editor") {
    filteredData = res.data.filter((post) => post.role === "editor");
  }

  console.log("Service filter: ", filter);

  return {
    data: filteredData,
    total: filteredData.length,
  };
};

export const deletePost = async (postId: string) => {
  await softDeletePost(postId);
};

export const fetchPostById = async (postId: string) => {
  return await getPostById(postId);
};
