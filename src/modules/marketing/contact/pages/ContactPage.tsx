import ContactHeroSection from "../sections/ContactHeroSection";
import ContactFormSection from "../sections/ContactFormSection";

const ContactPage = () => {
  return (
    <div className="bg-[url(/images/app-bg/pattern.png)]">
      <ContactHeroSection />
      <ContactFormSection />
    </div>
  );
};

export default ContactPage;
