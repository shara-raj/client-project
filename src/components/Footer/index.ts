export { default as Footer } from "./Footer";
export { default as FooterBrand } from "./FooterBrand";
export { default as FooterNav } from "./FooterNav";
export { default as FooterColumn } from "./FooterColumn";
export { default as FooterSocial } from "./FooterSocial";

// types & config (explicit exports, no wildcards)
export type {
  FooterData,
  FooterColumn as FooterColumnType,
  FooterLink,
  FooterSocialLink,
} from "./footer.types";

export { footerConfig } from "./footer.config";
