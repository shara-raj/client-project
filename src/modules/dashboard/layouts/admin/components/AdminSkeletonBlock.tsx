interface AdminSkeletonBlockProps {
  rows?: number;
  height?: string;
}

export default function AdminSkeletonBlock({
  rows = 3,
  height = "h-10",
}: AdminSkeletonBlockProps) {
  return (
    <div className="space-y-3 animate-pulse">
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className={`w-full rounded-md bg-neutral-200 ${height}`} />
      ))}
    </div>
  );
}
