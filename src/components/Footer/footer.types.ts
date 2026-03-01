export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterColumn {
  id: string;
  title: string;
  links: FooterLink[];
}

export interface FooterSocialLink {
  platform: "facebook" | "instagram" | "twitter" | "youtube" | "linkedin";
  href: string;
}

export interface FooterData {
  brand: {
    name: string;
    description: string;
    taglineImage: {
      src: string;
      alt: string;
    };
  };
  columns: FooterColumn[];
  socialLinks: FooterSocialLink[];
  copyright: string;
}
