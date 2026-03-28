import type { AdminPostListItem } from "@/modules/dashboard/post/types/post.types";

export type PostAction =
  | "view"
  | "edit"
  | "approve"
  | "reject"
  | "publish"
  | "request_edit"
  | "delete"
  | "request_delete";

export const getPostActions = (post: AdminPostListItem): PostAction[] => {
  // ADMIN POSTS
  if (post.role === "admin") {
    return ["view", "edit", "delete"];
  }

  // EDITOR POSTS
  if (post.role === "editor") {
    switch (post.status) {
      case "published":
        return ["view", "request_edit", "request_delete"];

      case "review_requested":
        return ["view", "approve", "reject", "request_delete"];

      case "approved":
        return ["publish", "request_delete"];

      case "rejected":
        return ["view", "request_delete"];

      case "needs_revision":
        return ["view", "request_delete"];

      default:
        return ["view", "request_delete"];
    }
  }

  return ["view"];
};
