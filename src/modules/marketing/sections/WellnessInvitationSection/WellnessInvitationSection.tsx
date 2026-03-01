import { Container } from "@/components/ui/Container";
import { MarketingCTAButton } from "@/components/ui/MarketingCTAButton";
import { Section } from "@/components/ui/Section";

export function WellnessInvitationSection() {
  return (
    <Section className="bg-gradient-warm">
      <Container>
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />

            <blockquote className="text-2xl lg:text-3xl italic leading-relaxed">
              "Healing begins when you pause and listen to your body."
            </blockquote>

            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Receive weekly wellness notes, guided practices, and ancient wisdom
            delivered to your inbox.
          </p>

          <MarketingCTAButton scrollTargetId="subscribe">
            Subscribe for Weekly Wellness Notes
          </MarketingCTAButton>
        </div>
      </Container>
    </Section>
  );
}
