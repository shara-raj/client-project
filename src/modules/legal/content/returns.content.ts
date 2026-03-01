import type { LegalDocument } from "./legal.types";

export const returnsPolicyDocument: LegalDocument = {
  id: "refund-and-returns-policy",
  slug: "returns",
  title: "Refund and Returns Policy",
  version: "1.0.0",
  effectiveDate: "2025-01-01",
  lastUpdated: "2025-01-01",
  sections: [
    {
      id: "refund-policy",
      heading: "Refund Policy",
      blocks: [
        {
          type: "paragraph",
          content:
            "Any participant who pays the package amount for any program offered by WellMoon Veda and wishes to withdraw or request a refund before the program commences is eligible for a refund.",
        },
        {
          type: "paragraph",
          content:
            "After the commencement of the program, no refund of the fee will be made under any circumstances whatsoever.",
        },
        {
          type: "paragraph",
          content:
            "The package amount once paid is non-refundable and non-transferable irrespective of the mode of payment, unless a written request for cancellation or refund is made by the participant before program commencement.",
        },
      ],
    },
    {
      id: "returns-policy",
      heading: "Returns Policy",
      blocks: [
        {
          type: "paragraph",
          content:
            "As our offerings primarily consist of wellness services, live programs, and digital content such as courses, sessions, and retreats, there are no returns of physical goods.",
        },
        {
          type: "paragraph",
          content:
            "All requests related to changes, cancellations, or refunds are governed strictly by the Refund Policy stated above.",
        },
      ],
    },
    {
      id: "contact-refunds",
      heading: "Contact for Refunds and Queries",
      blocks: [
        {
          type: "paragraph",
          content:
            "Please send all questions, comments, refund requests, and feedback to us at: info@wellmoonveda.com",
        },
      ],
    },
  ],
};
