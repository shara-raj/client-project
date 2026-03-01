import AdminSection from "./AdminSection";
import AdminSkeletonBlock from "./AdminSkeletonBlock";

export default function ModerationPanelSection() {
  return (
    <AdminSection title="Moderation">
      <AdminSkeletonBlock rows={3} height="h-12" />
    </AdminSection>
  );
}
