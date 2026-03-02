interface AdminMetricCardProps {
  label: string;
  value: string | number;
  trend?: string;
}

export default function AdminMetricCard({
  label,
  value,
  trend,
}: AdminMetricCardProps) {
  return (
    <div className="bg-white border rounded-xl p-6">
      <p className="text-sm text-neutral-500">{label}</p>
      <p className="mt-2 text-2xl font-semibold text-neutral-900">{value}</p>
      {trend && <p className="mt-1 text-xs text-neutral-500">{trend}</p>}
    </div>
  );
}
