import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { contactContent } from "../content/contact.content";

const ContactHeroSection = () => {
  const { title, subtitle } = contactContent.hero;

  return (
    <Section>
      <Container className="py-10">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-5xl font-medium tracking-tight">{title}</h1>
          {subtitle && (
            <p className="text-lg leading-relaxed text-muted-foreground">
              {subtitle}
            </p>
          )}
        </div>
      </Container>
    </Section>
  );
};

export default ContactHeroSection;
