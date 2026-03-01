import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { aboutContent } from "../content/about.content";

const AboutClosingSection = () => {
  const { closing } = aboutContent;

  return (
    <Section className="bg-[#efece7]">
      <Container>
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <h2 className="text-2xl font-semibold">{closing.title}</h2>
          <p className="text-muted-foreground leading-relaxed">
            {closing.description}
          </p>
        </div>
      </Container>
    </Section>
  );
};

export default AboutClosingSection;
