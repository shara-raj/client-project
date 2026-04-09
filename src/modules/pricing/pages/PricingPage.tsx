import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

import PricingGrid from "@/modules/marketing/component/pricing/PricingGrid";
import { selectPricingPlans } from "@/modules/pricing/domain/pricing.selectors";

export default function PricingPage() {
  const plans = selectPricingPlans({
    mode: "full",
    region: "IN",
    interval: "monthly",
  });

  function handleSelect(planId: string) {
    // Future:
    // 1. Check auth
    // 2. Redirect to checkout
    // 3. Attach Stripe price ID

    console.log("Selected plan:", planId);
  }

  return (
    <Section className="bg-[url(/images/app-bg/pattern2.png)] py-16">
      <Container>
        {/* Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <h1 className="text-4xl font-medium tracking-tight text-neutral-900 sm:text-5xl">
            Simple & Transparent Pricing
          </h1>
          <p className="mt-6 text-lg text-neutral-600">
            Choose the plan that aligns with your journey. Upgrade or cancel
            anytime.
          </p>
        </div>

        {/* Pricing Grid */}
        <PricingGrid
          plans={plans}
          region="IN"
          interval="monthly"
          variant="full"
          onSelect={handleSelect}
        />
      </Container>
    </Section>
  );
}
