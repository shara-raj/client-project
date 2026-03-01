import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import ContactForm from "../components/ContactForm";
import ContactInfoSection from "./ContactInfoSection";

const ContactFormSection = () => {
  return (
    <Section>
      <Container>
        <div className="grid gap-16 md:grid-cols-2">
          <ContactInfoSection />
          <ContactForm />
        </div>
      </Container>
    </Section>
  );
};

export default ContactFormSection;
