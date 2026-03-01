import type { AboutContent } from "../types/about.types";

export const aboutContent: AboutContent = {
  hero: {
    label: "ABOUT US",
    titleLines: ["Who", "we", "are."],
    description:
      "We guide women toward balance and inner wellbeing through mindful practices, natural wisdom, and gentle healing experiences.",
    imageSrc: "/images/about-hero.jpg",
    imageAlt: "Women smiling together",
  },

  philosophyIntro: {
    title: "Our Philosophy",
    description:
      "Healing is not about fixing what is broken, but reconnecting with what already exists within. We believe in slow, conscious, compassionate wellness.",
  },

  philosophyPillars: [
    {
      title: "Mind",
      description:
        "Practices that calm the nervous system and create mental clarity.",
    },
    {
      title: "Body",
      description:
        "Gentle movement and herbs to support balance and physical health.",
    },
    {
      title: "Energy",
      description: "Subtle healing techniques that restore energetic harmony.",
    },
  ],

  closing: {
    title: "A Gentle Path Forward",
    description:
      "Whether you are beginning your wellness journey or deepening an existing practice, we are here to walk beside you — slowly, mindfully, with care.",
  },
};
