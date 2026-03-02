import AdminCard from "@/modules/dashboard/components/admin/ui-primitives/AdminCard";
import AdminTable from "@/modules/dashboard/components/admin/ui-primitives/AdminTable";
import AdminBadge from "@/modules/dashboard/components/admin/ui-primitives/AdminBadge";
import AdminButton from "@/modules/dashboard/components/admin/ui-primitives/AdminButton";
import AdminSearchInput from "@/modules/dashboard/components/admin/ui-primitives/AdminSearchInput";

export default function AdminPendingSubmissionsPage() {
  const mockSubmissions = [
    {
      id: "POST-101",
      title: "Understanding React Performance",
      editor: "Sarah K",
      submittedAt: "2026-03-01",
      status: "Submitted",
      remark: "-",
    },
    {
      id: "POST-102",
      title: "SEO Best Practices 2026",
      editor: "John D",
      submittedAt: "2026-03-02",
      status: "Submitted",
      remark: "-",
    },
    {
      id: "POST-099",
      title: "Tailwind Layout Patterns",
      editor: "Michael T",
      submittedAt: "2026-02-28",
      status: "Rejected",
      remark: "Needs better examples",
    },
  ];

  return (
    <section className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Pending Review</h1>
      </div>

      {/* Search + Filters */}
      <AdminCard>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <AdminSearchInput placeholder="Search submissions..." />
          <div className="flex gap-3">
            <AdminButton variant="secondary">Filter</AdminButton>
            <AdminButton variant="secondary">Sort</AdminButton>
          </div>
        </div>
      </AdminCard>

      {/* Submissions Table */}
      <AdminCard>
        <AdminTable
          headers={[
            "Post ID",
            "Title",
            "Editor",
            "Submitted Date",
            "Status",
            "Remark",
            "Actions",
          ]}
        >
          {mockSubmissions.map((post) => (
            <tr key={post.id} className="hover:bg-neutral-50">
              <td className="px-4 py-3">{post.id}</td>
              <td className="px-4 py-3">{post.title}</td>
              <td className="px-4 py-3">{post.editor}</td>
              <td className="px-4 py-3">{post.submittedAt}</td>
              <td className="px-4 py-3">
                <AdminBadge
                  variant={
                    post.status === "Submitted"
                      ? "warning"
                      : post.status === "Rejected"
                        ? "danger"
                        : "success"
                  }
                >
                  {post.status}
                </AdminBadge>
              </td>
              <td className="px-4 py-3 text-sm text-neutral-600">
                {post.remark}
              </td>
              <td className="px-4 py-3">
                <div className="flex gap-2">
                  <AdminButton variant="secondary">View</AdminButton>

                  {post.status === "Submitted" && (
                    <>
                      <AdminButton>Approve</AdminButton>
                      <AdminButton variant="danger">Reject</AdminButton>
                    </>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </AdminTable>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-6 text-sm text-neutral-600">
          <span>Showing 1–3 of 18 submissions</span>
          <div className="flex gap-2">
            <AdminButton variant="secondary">Previous</AdminButton>
            <AdminButton variant="secondary">Next</AdminButton>
          </div>
        </div>
      </AdminCard>
    </section>
  );
}
