import AdminSection from "./AdminSection";
import AdminSkeletonBlock from "./AdminSkeletonBlock";

export default function SubscriberMetricsSection() {
  return (
    <AdminSection title="Subscriber Metrics">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <AdminSkeletonBlock rows={1} height="h-20" />
        <AdminSkeletonBlock rows={1} height="h-20" />
        <AdminSkeletonBlock rows={1} height="h-20" />
      </div>
    </AdminSection>
  );
}
