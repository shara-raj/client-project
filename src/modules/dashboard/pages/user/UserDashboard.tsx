import ContinueContentBlock from "../../layouts/user/components/overview/ContinueContentBlock";
import HealingDiscoveryPreview from "../../layouts/user/components/overview/HealingDiscoveryPreview";
import SubscriptionSummaryBlock from "../../layouts/user/components/overview/SubscriptionSummaryBlock";

export default function UserDashboard() {
  return (
    <div className="space-y-10">
      {/* Subscription Summary */}
      <SubscriptionSummaryBlock />

      {/* Continue / My Content Preview */}
      <ContinueContentBlock />

      <HealingDiscoveryPreview />
    </div>
  );
}
