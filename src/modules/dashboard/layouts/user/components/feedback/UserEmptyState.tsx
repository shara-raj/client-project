export default function UserEmptyState({
  title = "Nothing to show yet",
  description = "Content will appear here once available.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <div className="rounded-xl border border-dashed border-neutral-200 p-10 text-center">
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="mt-2 text-sm text-neutral-600">{description}</p>
    </div>
  );
}
