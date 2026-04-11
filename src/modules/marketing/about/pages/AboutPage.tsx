import AboutHeroSection from "../sections/AboutHeroSection";
import PhilosophyIntroSection from "../sections/PhilosophyIntroSection";
import PhilosophyPillarsSection from "../sections/PhilosophyPillarsSection";
import AboutClosingSection from "../sections/AboutClosingSection";

const AboutPage = () => {
  return (
    <div className="bg-[url(/images/app-bg/pattern2.png)] flex flex-col gap-10 pb-20">
      <AboutHeroSection />
      <PhilosophyIntroSection />
      <PhilosophyPillarsSection />
      <AboutClosingSection />
    </div>
  );
};

export default AboutPage;
