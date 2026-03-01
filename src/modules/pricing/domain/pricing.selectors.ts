import type { PricingPlan, RegionCode, BillingInterval } from "./pricing.types";
import { PRICING_PLANS } from "./pricing.config";

type SelectPricingOptions = {
  mode: "preview" | "full";
  region: RegionCode;
  interval?: BillingInterval;
  limit?: number;
};

export function selectPricingPlans({
  mode,
  region,
  interval = "monthly",
  limit,
}: SelectPricingOptions): PricingPlan[] {
  let plans = PRICING_PLANS.filter((plan) => {
    if (!plan.isActive) return false;

    const hasRegionPrice = plan.prices.some(
      (price) => price.region === region && price.interval === interval,
    );

    return hasRegionPrice;
  });

  // Future: could sort by displayOrder or price amount
  plans = plans.sort((a, b) => {
    const priceA = getPlanPrice(a, region, interval)?.amount ?? 0;
    const priceB = getPlanPrice(b, region, interval)?.amount ?? 0;
    return priceA - priceB;
  });

  if (mode === "preview" && limit) {
    return plans.slice(0, limit);
  }

  return plans;
}

/**
 * Utility: get price for region + interval
 */
export function getPlanPrice(
  plan: PricingPlan,
  region: RegionCode,
  interval: BillingInterval,
) {
  return plan.prices.find(
    (price) => price.region === region && price.interval === interval,
  );
}
