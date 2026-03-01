import EmptyPending from "@/modules/dashboard/layouts/editor/components/empty-states/EmptyPending";

export function PendingPage() {
  return (
    <div className="rounded-xl border bg-white p-6">
      <EmptyPending />
    </div>
  );
}
