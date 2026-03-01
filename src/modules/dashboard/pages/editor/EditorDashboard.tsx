import ContentMetricsCard from "../../layouts/editor/components/metrics/ContentMetricsCard";
import DraftStatusCard from "../../layouts/editor/components/metrics/DraftStatusCard";
import SubmissionStatusCard from "../../layouts/editor/components/metrics/SubmissionStatusCard";
import ActivitySkeleton from "../../layouts/editor/components/skeletons/ActivitySkeleton";

export function EditorDashboard() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
      {/* Personal content metrics */}
      <div className="xl:col-span-12">
        <ContentMetricsCard />
      </div>

      {/* Draft status */}
      <div className="xl:col-span-6">
        <DraftStatusCard />
      </div>

      {/* Submission status */}
      <div className="xl:col-span-6">
        <SubmissionStatusCard />
      </div>

      {/* Recent activity */}
      <div className="xl:col-span-12 rounded-xl border bg-white p-6">
        <h3 className="text-sm font-medium text-neutral-600">
          Recent Activity
        </h3>

        <div className="mt-4 space-y-4">
          <ActivitySkeleton />
          <ActivitySkeleton />
          <ActivitySkeleton />
        </div>
      </div>
    </div>
  );
}
