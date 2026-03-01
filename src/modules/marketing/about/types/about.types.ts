export type AboutHeroContent = {
  label: string;
  titleLines: string[];
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export type PhilosophyPillar = {
  title: string;
  description: string;
};

export type AboutContent = {
  hero: AboutHeroContent;
  philosophyIntro: {
    title: string;
    description: string;
  };
  philosophyPillars: PhilosophyPillar[];
  closing: {
    title: string;
    description: string;
  };
};
