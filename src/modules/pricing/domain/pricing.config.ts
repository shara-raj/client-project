import type { PricingPlan } from "./pricing.types";

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "starter_v1",
    slug: "starter",
    name: "Starter",
    description: "Begin your healing journey",
    version: 1,
    isActive: true,
    isFeatured: false,
    prices: [
      {
        id: "price_starter_in_monthly",
        amount: 50000,
        currency: "INR",
        interval: "monthly",
        region: "IN",
      },
    ],
    features: [
      { id: "f1", label: "Access to core healing paths" },
      { id: "f2", label: "Weekly guidance" },
    ],
    metadata: {
      requiresAuth: true,
      dashboardAccess: true,
    },
  },
  {
    id: "guided_v1",
    slug: "guided",
    name: "Guided",
    description: "Personalized guidance and practices.",
    version: 1,
    isActive: true,
    isFeatured: true,
    prices: [
      {
        id: "price_guided_in_monthly",
        amount: 99900,
        currency: "INR",
        interval: "monthly",
        region: "IN",
      },
    ],
    features: [
      { id: "f1", label: "All Starter features" },
      { id: "f2", label: "Guided sessions" },
      { id: "f3", label: "Exclusive resources" },
    ],
  },

  {
    id: "inner_circle_v1",
    slug: "inner-circle",
    name: "Inner Circle",
    description: "Deep, ongoing support for your journey.",
    version: 1,
    isActive: true,
    isFeatured: false,
    prices: [
      {
        id: "price_inner_in_monthly",
        amount: 249900,
        currency: "INR",
        interval: "monthly",
        region: "IN",
      },
    ],
    features: [
      { id: "f1", label: "All Guided features" },
      { id: "f2", label: "1:1 sessions" },
      { id: "f3", label: "Priority support" },
    ],
  },
];
