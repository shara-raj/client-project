export type ContactHeroContent = {
  title: string;
  subtitle?: string;
};

export type ContactInfoItem = {
  label: string;
  value: string;
  href?: string;
};

export type ContactContent = {
  hero: ContactHeroContent;
  info: ContactInfoItem[];
};
