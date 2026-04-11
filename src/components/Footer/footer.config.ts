import type { FooterData } from "./footer.types";

export const footerConfig: FooterData = {
  brand: {
    name: "Wellmoon Veda",
    description:
      "Blending ancient Vedic wisdom with modern science for women's holistic wellness.",
    taglineImage: {
      src: "/images/site/Letter Logo.png",
      alt: "Ancient wisdom, modern wellness",
    },
  },
  columns: [
    {
      id: "healing",
      title: "Healing Paths",
      links: [
        { label: "Wellness Yoga", href: "/healing-paths/yoga" },
        { label: "Mudra Healing", href: "/healing-paths/mudra" },
        { label: "Aura Healing", href: "/healing-paths/aura" },
        { label: "Virtual Nature Healing", href: "/healing-paths/nature" },
        { label: "Sound Healing", href: "/healing-paths/sound" },
      ],
    },
    {
      id: "company",
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Blog", href: "/blog" },
        { label: "Plans & Pricing", href: "/pricing" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      id: "legal",
      title: "Legal",
      links: [
        { label: "Terms & Conditions", href: "/legal/terms" },
        { label: "Privacy Policy", href: "/legal/privacy-policy" },
        { label: "Return Policy", href: "/legal/returns" },
      ],
    },
  ],
  socialLinks: [
    { platform: "facebook", href: "#" },
    { platform: "instagram", href: "#" },
    { platform: "twitter", href: "#" },
    { platform: "youtube", href: "#" },
  ],
  copyright: "© 2026 WellMoon Veda. All rights reserved.",
};
