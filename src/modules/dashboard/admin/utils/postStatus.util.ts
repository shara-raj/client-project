import type { PostStatus } from "../../post/types/post.types";

export const getStatusConfig = (status: PostStatus) => {
  switch (status) {
    case "draft":
      return { label: "Draft", className: "bg-gray-200 text-gray-700" };

    case "review_requested":
      return { label: "Pending", className: "bg-yellow-200 text-yellow-800" };

    case "approved":
      return { label: "Approved", className: "bg-blue-200 text-blue-800" };

    case "rejected":
      return { label: "Rejected", className: "bg-red-200 text-red-800" };

    case "published":
      return { label: "Published", className: "bg-green-200 text-green-800" };

    case "needs_revision":
      return {
        label: "Needs Revision",
        className: "bg-orange-200 text-orange-800",
      };

    default:
      return { label: "Unknown", className: "bg-gray-100 text-gray-500" };
  }
};
