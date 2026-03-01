import { selectPricingPlans } from "@/modules/pricing/domain/pricing.selectors";

export function usePricingPreview() {
  return selectPricingPlans({
    mode: "preview",
    region: "IN",
    interval: "monthly",
    limit: 3,
  });
}
