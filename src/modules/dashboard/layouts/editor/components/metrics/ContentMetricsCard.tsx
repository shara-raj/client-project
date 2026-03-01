import MetricsSkeleton from "../skeletons/MetricsSkeleton";

function ContentMetricsCard() {
  return (
    <div className="xl:col-span-12 rounded-xl border bg-white p-6">
      <h3 className="text-sm font-medium text-neutral-600">
        My Content Metrics
      </h3>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <MetricsSkeleton />
        <MetricsSkeleton />
        <MetricsSkeleton />
      </div>
    </div>
  );
}

export default ContentMetricsCard;
