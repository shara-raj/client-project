import SubscriberMetricsSection from "../../layouts/admin/components/SubscriberMetricsSection";
import EditorialMetricsSection from "../../layouts/admin/components/EditorialMetricsSection";
import ModerationPanelSection from "../../layouts/admin/components/ModerationPanelSection";
import SystemAlertsSection from "../../layouts/admin/components/SystemAlertsSection";
import ActivityFeedSection from "../../layouts/admin/components/ActivityFeedSection";

export default function AdminDashboard() {
  return (
    <section className="grid grid-cols-1 xl:grid-cols-12 gap-6">
      <div className="xl:col-span-12">
        <SubscriberMetricsSection />
      </div>

      <div className="xl:col-span-12">
        <EditorialMetricsSection />
      </div>

      <div className="xl:col-span-6">
        <ModerationPanelSection />
      </div>

      <div className="xl:col-span-6">
        <SystemAlertsSection />
      </div>

      <div className="xl:col-span-12">
        <ActivityFeedSection />
      </div>
    </section>
  );
}
