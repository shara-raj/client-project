import { HeroSection } from "../component/hero";
import HealingPreviewSection from "../sections/HealingPreview/HealingPreviewSection";
import { WellnessInvitationSection } from "../sections/WellnessInvitationSection/WellnessInvitationSection";
import Subscribe from "../sections/Subscribe";
import { WellnessInsight } from "../sections/WellnessInsight/WellnessInsight";
import PricingPreviewSection from "../sections/pricing-preview/PricingPreviewSection";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export default function HomePage() {
  return (
    <main className="pattern-bg">
      <HeroSection />
      <RevealOnScroll>
        <HealingPreviewSection />
      </RevealOnScroll>

      <RevealOnScroll>
        <WellnessInvitationSection />
      </RevealOnScroll>

      <RevealOnScroll>
        <WellnessInsight />
      </RevealOnScroll>

      <RevealOnScroll>
        <PricingPreviewSection />
      </RevealOnScroll>

      <RevealOnScroll>
        <Subscribe />
      </RevealOnScroll>
    </main>
  );
}
