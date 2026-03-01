import EmptyDrafts from "@/modules/dashboard/layouts/editor/components/empty-states/EmptyDrafts";

export function DraftsPage() {
  return (
    <div className="rounded-xl border bg-white p-6">
      <EmptyDrafts />
    </div>
  );
}
