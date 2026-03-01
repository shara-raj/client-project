interface AdminEmptyStateProps {
  title: string;
  description?: string;
}

export default function AdminEmptyState({
  title,
  description,
}: AdminEmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-12 px-6 border border-dashed rounded-xl bg-neutral-50">
      <div className="h-12 w-12 rounded-full bg-neutral-200 mb-4" />

      <h3 className="text-sm font-semibold text-neutral-700">{title}</h3>

      {description && (
        <p className="mt-1 text-sm text-neutral-500 max-w-sm">{description}</p>
      )}
    </div>
  );
}
