import type { PricingPlan } from "@/modules/pricing/domain/pricing.types";
import type {
  RegionCode,
  BillingInterval,
} from "@/modules/pricing/domain/pricing.types";

import PlanCard from "./PlanCard";

interface PricingGridProps {
  plans: PricingPlan[];
  region: RegionCode;
  interval: BillingInterval;
  variant: "preview" | "full";
  onSelect?: (planId: string) => void;
}

export default function PricingGrid({
  plans,
  region,
  interval,
  variant,
  onSelect,
}: PricingGridProps) {
  if (!plans.length) return null;

  return (
    <div
      className="
        grid
        gap-8
        md:grid-cols-2
        lg:grid-cols-3
      "
    >
      {plans.map((plan) => (
        <PlanCard
          key={plan.id}
          plan={plan}
          region={region}
          interval={interval}
          variant={variant}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}
