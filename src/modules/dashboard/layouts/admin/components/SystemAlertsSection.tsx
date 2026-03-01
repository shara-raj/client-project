import AdminSection from "./AdminSection";
import AdminSkeletonBlock from "./AdminSkeletonBlock";

export default function SystemAlertsSection() {
  return (
    <AdminSection title="System Alerts">
      <AdminSkeletonBlock rows={2} height="h-10" />
    </AdminSection>
  );
}
