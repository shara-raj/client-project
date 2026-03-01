import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { aboutContent } from "../content/about.content";

const AboutHeroSection = () => {
  const { hero } = aboutContent;

  return (
    <Section>
      <Container className="pt-30">
        <div className="grid gap-16 md:grid-cols-2 items-center">
          <div className="space-y-6 max-w-md">
            <p className="text-sm tracking-widest uppercase text-muted-foreground">
              {hero.label}
            </p>

            <h1 className="text-5xl font-semibold leading-tight">
              <span className="block underline">Who</span>

              <span className="block pl-[3.2ch] underline">we</span>

              <span className="block pl-[5.2ch] underline">are.</span>
            </h1>

            <p className="text-lg leading-relaxed text-muted-foreground">
              {hero.description}
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src={hero.imageSrc}
              alt={hero.imageAlt}
              className="rounded-2xl max-w-sm"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default AboutHeroSection;
