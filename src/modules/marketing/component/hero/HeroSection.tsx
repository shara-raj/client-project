import HeroBackground from "./HeroBackground";
import HeroCollage from "./HeroCollage";
import HeroContent from "./HeroContent";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen pb-16 lg:pb-24 overflow-hidden z-10 pt-32"
    >
      <HeroBackground />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <HeroContent />
          <HeroCollage />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
