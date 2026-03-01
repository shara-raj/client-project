interface AdminSectionProps {
  title?: string;
  children?: React.ReactNode;
}

export default function AdminSection({ title, children }: AdminSectionProps) {
  return (
    <div className="bg-white border rounded-xl p-6">
      {title && (
        <h2 className="mb-4 text-sm font-semibold text-neutral-700">{title}</h2>
      )}
      {children ?? <div className="h-24 rounded-md bg-neutral-100" />}
    </div>
  );
}
