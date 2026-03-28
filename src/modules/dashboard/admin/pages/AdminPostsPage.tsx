import { useAdminPosts } from "../hooks/useAdminPosts";
import {
  Table,
  TableHead,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
} from "@/shared/components/ui/Table";
import { getStatusConfig } from "../utils/postStatus.util";
import { StatusBadge } from "@/shared/components/ui/StatusBadge";
import { ActionButton } from "@/shared/components/ui/ActionButton";
import { getPostActions } from "../utils/postActions.util";

export default function AdminPostsPage() {
  const { posts, loading, filter, setFilter } = useAdminPosts();

  return (
    <div className="p-6 space-y-6 dashboard-theme">
      <h1 className="text-2xl font-semibold text-main">Posts Management</h1>

      <div className="flex gap-3">
        {["all", "admin", "editor"].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type as "all" | "admin" | "editor")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition
        ${
          filter === type
            ? "bg-[#708090] text-white"
            : "bg-soft text-main hover-soft"
        }`}
          >
            {type === "all"
              ? "All Posts"
              : type === "admin"
                ? "My Posts"
                : "Editor Posts"}
          </button>
        ))}
      </div>

      <div className="card p-6">
        {loading ? (
          <p className="text-sub">Loading posts...</p>
        ) : posts.length === 0 ? (
          <p className="text-sub">No posts found.</p>
        ) : (
          <Table>
            <TableHead>
              <tr>
                <TableHeaderCell>Title</TableHeaderCell>
                <TableHeaderCell>Author</TableHeaderCell>
                <TableHeaderCell>Status</TableHeaderCell>
                <TableHeaderCell>Created</TableHeaderCell>
                <TableHeaderCell>Actions</TableHeaderCell>
              </tr>
            </TableHead>

            <TableBody>
              {posts.map((post) => {
                const config = getStatusConfig(post.status);
                return (
                  <TableRow key={post.id}>
                    <TableCell>{post.title}</TableCell>

                    <TableCell>
                      {post.role === "admin" ? "Admin" : "Editor"}
                    </TableCell>

                    <TableCell>
                      <StatusBadge
                        label={config.label}
                        className={config.className}
                      />
                    </TableCell>

                    <TableCell>
                      {new Date(post.created_at).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2 flex-wrap">
                        {getPostActions(post).map((action) => (
                          <ActionButton
                            key={action}
                            label={formatActionLabel(action)}
                            variant={action === "delete" ? "danger" : "default"}
                          />
                        ))}
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        )}
      </div>
    </div>
  );
}

const formatActionLabel = (action: string) => {
  switch (action) {
    case "view":
      return "View";
    case "edit":
      return "Edit";
    case "approve":
      return "Approve";
    case "reject":
      return "Reject";
    case "publish":
      return "Publish";
    case "request_edit":
      return "Request Edit";
    case "delete":
      return "Delete";
    case "request_delete":
      return "Request Delete";
    default:
      return action;
  }
};
