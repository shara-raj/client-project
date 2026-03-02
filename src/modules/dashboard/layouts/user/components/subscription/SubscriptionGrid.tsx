import SubscriptionHeader from "./SubscriptionHeader";
import BillingDetailsBlock from "./BillingDetailsBlock";
import CurrentPlanBlock from "./CurrentPlanBlock";
import SubscriptionActions from "./SubscriptionActions";

function SubscriptionGrid() {
  return (
    <div className="space-y-10">
      <SubscriptionHeader />
      <CurrentPlanBlock />
      <BillingDetailsBlock />
      <SubscriptionActions />
    </div>
  );
}

export default SubscriptionGrid;
