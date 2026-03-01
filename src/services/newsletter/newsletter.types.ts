export type NewsletterSource =
  | "homepage_wellness"
  | "homepage_footer"
  | "landing_page";

export type SubscribeInput = {
  email: string;
  source: NewsletterSource;
};
