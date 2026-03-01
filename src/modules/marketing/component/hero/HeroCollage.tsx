import HeroBadge from "./HeroBadge";
const HeroCollage = () => {
  return (
    <div className="hidden lg:block relative pt-5" aria-hidden="true">
      <div
        className="relative w-full max-w-[500px] h-[600px] mx-auto animate-fade-in"
        style={{ animationDelay: "0.2s" }}
      >
        {/* Meditation */}
        <div className="absolute top-0 left-0 w-64 h-80 rounded-full overflow-hidden shadow-medium">
          <img
            src="/images/hero/woman-meditating.jpg"
            alt="Woman meditating"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Yoga */}
        <div className="absolute top-[100px] left-[260px] w-72 h-96 rounded-3xl overflow-hidden shadow-medium">
          <img
            src="/images/hero/woman-yoga.jpg"
            alt="Woman practicing yoga"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Mudra */}
        <div className="absolute top-[325px] left-12 w-64 h-80 rounded-3xl overflow-hidden shadow-medium">
          <img
            src="/images/hero/mudra-hands.jpg"
            alt="Healing mudra hand gesture"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
        </div>
        <HeroBadge />
      </div>
    </div>
  );
};

export default HeroCollage;
