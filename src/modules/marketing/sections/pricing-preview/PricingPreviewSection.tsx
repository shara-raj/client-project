import { useNavigate } from "react-router-dom";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import Button from "@/components/ui/Button";

import PricingGrid from "../../component/pricing/PricingGrid";
import { usePricingPreview } from "./usePricingPreview";

export default function PricingPreviewSection() {
  const navigate = useNavigate();
  const plans = usePricingPreview();

  return (
    <Section>
      <Container>
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-3xl font-medium tracking-tight text-neutral-900 sm:text-4xl">
            Choose Your Path
          </h2>
          <p className="mt-4 text-neutral-600">
            Simple, transparent plans designed to support your healing journey.
          </p>
        </div>

        {/* Pricing Grid */}
        <PricingGrid
          plans={plans}
          region="IN"
          interval="monthly"
          variant="preview"
          onSelect={() => navigate("/pricing")}
        />

        {/* View All CTA */}
        <div className="mt-16 text-center">
          <Button
            variant="secondary"
            onClick={() => navigate("/pricing")}
            className="!text-sm !text-subheading cursor-pointer"
          >
            View full pricing
          </Button>
        </div>
      </Container>
    </Section>
  );
}
