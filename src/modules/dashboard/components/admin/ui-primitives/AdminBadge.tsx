interface AdminBadgeProps {
  children: React.ReactNode;
  variant?: "default" | "success" | "warning" | "danger";
}

export default function AdminBadge({
  children,
  variant = "default",
}: AdminBadgeProps) {
  const styles = {
    default: "bg-neutral-100 text-neutral-700",
    success: "bg-green-100 text-green-700",
    warning: "bg-yellow-100 text-yellow-700",
    danger: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`px-2 py-1 text-xs font-medium rounded-md ${styles[variant]}`}
    >
      {children}
    </span>
  );
}
