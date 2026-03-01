import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { aboutContent } from "../content/about.content";

const PhilosophyIntroSection = () => {
  const { philosophyIntro } = aboutContent;

  return (
    <Section>
      <Container>
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <h2 className="text-2xl font-semibold">{philosophyIntro.title}</h2>
          <p className="text-muted-foreground leading-relaxed">
            {philosophyIntro.description}
          </p>
        </div>
      </Container>
    </Section>
  );
};

export default PhilosophyIntroSection;
