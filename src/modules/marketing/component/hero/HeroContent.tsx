import { Play } from "lucide-react";
import { scrollToId } from "../../../../utils/scrollToId";
import Button from "@/components/ui/Button";

const HeroContent = () => {
  const avatars = [
    "/images/hero/avatar-1.png",
    "/images/hero/avatar-2.png",
    "/images/hero/avatar-3.png",
  ];
  return (
    <div className="px-5 space-y-8 animate-fade-in">
      <div className="space-y-4">
        <p className="text-lg font-medium tracking-wider uppercase text-foreground">
          Holistic Woman's Wellness
        </p>
        <h1
          className="text-2xl lg:text-4xl xl:text-5xl font-semibold text-foreground leading-tight"
          style={{
            fontFamily: "'Lexend', system-ui, sans-serif",
          }}
        >
          Yogic Care for Menstrual Comfort and Balance
        </h1>
        <p className=" max-w-xl">
          Yoga, Pranayama, and Mudra for Menstrual Comfort Gentle yogic
          practices can help ease menstrual cramps and discomfort, often within
          10–15 minutes. Explore natural yogic techniques to support menstrual
          wellbeing.
        </p>
      </div>

      {/* Video Pill */}
      <Button
        variant="secondary"
        className="inline-flex items-center font-medium gap-2 !rounded-full text-black !text-base cursor-pointer"
        aria-label="Watch introduction video"
      >
        <Play size={18} />
        Watch Intro
      </Button>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          variant="secondary"
          className="!rounded-full text-black !text-base cursor-pointer"
          onClick={() => {
            scrollToId("subscribe");
          }}
        >
          Subscribe Now
        </Button>
        <Button
          variant="secondary"
          className="!rounded-full text-black !text-base cursor-pointer"
          onClick={() => {
            scrollToId("healing-paths");
          }}
        >
          Know More
        </Button>
      </div>

      {/* Social Proof */}
      <div className="flex items-center space-x-4 pt-4">
        <div className="flex -space-x-3">
          {avatars.map((avatar, index) => (
            <img
              key={index}
              src={avatar}
              alt={`Customer ${index + 1}`}
              className="w-10 h-10 rounded-full border-2 border-background"
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>
        <p className="text-lg text-[#000000]">
          <span className="font-semibold text-[#000000]">332+</span> Happy
          Customers
        </p>
      </div>
    </div>
  );
};

export default HeroContent;
