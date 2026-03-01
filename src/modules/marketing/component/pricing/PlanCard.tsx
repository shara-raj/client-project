import type { PricingPlan } from "@/modules/pricing/domain/pricing.types";
import type {
  RegionCode,
  BillingInterval,
} from "@/modules/pricing/domain/pricing.types";
import { getPlanPrice } from "@/modules/pricing/domain/pricing.selectors";
import { formatCurrency } from "@/modules/pricing/domain/pricing.utils";
import Button from "@/components/ui/Button";

type PlanCardVariant = "preview" | "full";

interface PlanCardProps {
  plan: PricingPlan;
  region: RegionCode;
  interval: BillingInterval;
  variant: PlanCardVariant;
  onSelect?: (planId: string) => void;
}

export default function PlanCard({
  plan,
  region,
  interval,
  variant,
  onSelect,
}: PlanCardProps) {
  const price = getPlanPrice(plan, region, interval);

  if (!price) return null;

  return (
    <div
      className="
        group
        rounded-2xl
        border border-neutral-200
        bg-[#c1a88d]/70
        p-8
        transition-all
        duration-300
        hover:shadow-lg
        hover:-translate-y-1
        flex
        flex-col
      "
    >
      <div className="flex flex-col flex-1">
        {/* Plan Header */}
        <div className="mb-6">
          <h3 className="text-xl font-medium text-neutral-900">{plan.name}</h3>
          <p className="mt-2 text-sm text-neutral-600">{plan.description}</p>
        </div>

        {/* Price */}
        <div className="mb-6">
          <span className="text-3xl font-semibold text-neutral-900">
            {formatCurrency(price.amount, price.currency)}
          </span>
          <span className="ml-2 text-sm text-neutral-500">/ {interval}</span>
        </div>

        {/* Features */}
        <ul className="space-y-3 mb-8">
          {plan.features.map((feature) => (
            <li key={feature.id} className="text-sm text-neutral-700">
              {feature.label}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="mt-auto">
        <Button
          variant="secondary"
          fullWidth
          onClick={() => onSelect?.(plan.id)}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}
