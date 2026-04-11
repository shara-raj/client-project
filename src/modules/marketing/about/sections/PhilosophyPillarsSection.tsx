import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { aboutContent } from "../content/about.content";

const PhilosophyPillarsSection = () => {
  return (
    <Section>
      <Container>
        <div className="grid gap-12 md:grid-cols-3 text-center ">
          {aboutContent.philosophyPillars.map((pillar) => (
            <div
              key={pillar.title}
              className="space-y-3 p-5 border rounded-lg border-black bg-card-sand/80"
            >
              <h3 className="font-semibold text-lg">{pillar.title}</h3>
              <p className="text-sm  leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default PhilosophyPillarsSection;
