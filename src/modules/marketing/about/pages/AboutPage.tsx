import AboutHeroSection from "../sections/AboutHeroSection";
import PhilosophyIntroSection from "../sections/PhilosophyIntroSection";
import PhilosophyPillarsSection from "../sections/PhilosophyPillarsSection";
import AboutClosingSection from "../sections/AboutClosingSection";

const AboutPage = () => {
  return (
    <div className="bg-[url(/images/app-bg/pattern.png)]">
      <AboutHeroSection />
      <PhilosophyIntroSection />
      <PhilosophyPillarsSection />
      <AboutClosingSection />
    </div>
  );
};

export default AboutPage;
