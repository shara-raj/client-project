import AdminSection from "./AdminSection";
import AdminSkeletonBlock from "./AdminSkeletonBlock";

export default function ActivityFeedSection() {
  return (
    <AdminSection title="Recent Activity">
      <AdminSkeletonBlock rows={4} height="h-10" />
    </AdminSection>
  );
}
