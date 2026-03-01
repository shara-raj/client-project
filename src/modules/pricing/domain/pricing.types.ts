export type RegionCode = "IN" | "US";
export type CurrencyCode = "INR" | "USD";
export type BillingInterval = "monthly" | "yearly";

export interface Price {
  id: string; // Stripe price ID (future)
  amount: number; // stored as minor unit (e.g., paise)
  currency: CurrencyCode;
  interval: BillingInterval;
  region: RegionCode;
}

export interface PlanFeature {
  id: string;
  label: string;
  highlighted?: boolean;
}

export interface PricingPlan {
  id: string;
  slug: string;

  name: string;
  description: string;

  prices: Price[];
  features: PlanFeature[];

  isFeatured?: boolean;
  isActive: boolean;

  version: number;

  metadata?: {
    requiresAuth?: boolean;
    dashboardAccess?: boolean;
    featureFlags?: string[];
  };
}
