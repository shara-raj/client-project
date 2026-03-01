import FooterSocial from "./FooterSocial";
import type { FooterSocialLink } from "./footer.types";

interface FooterBrandProps {
  brand: {
    name: string;
    description: string;
    taglineImage: {
      src: string;
      alt: string;
    };
  };
  socialLinks: FooterSocialLink[];
}

function FooterBrand({ brand, socialLinks }: FooterBrandProps) {
  return (
    <div className="space-y-6">
      {/* Brand Identity */}
      <div className="space-y-2">
        <p className="text-lg font-medium text-neutral-900"></p>

        <img
          src={brand.taglineImage.src}
          alt={brand.taglineImage.alt}
          className="h-10 w-auto"
          loading="lazy"
        />
      </div>

      {/* Brand Description */}
      <p className="max-w-sm text-sm leading-relaxed text-neutral-700">
        {brand.description}
      </p>

      {/* Social Links */}
      {socialLinks.length > 0 && <FooterSocial links={socialLinks} />}
    </div>
  );
}

export default FooterBrand;
