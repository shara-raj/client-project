import type { LegalDocument } from "./legal.types";

export const privacyPolicyDocument: LegalDocument = {
  id: "privacy-policy",
  slug: "privacy-policy",
  title: "Privacy Policy",
  version: "1.0.0",
  effectiveDate: "2025-01-01",
  lastUpdated: "2025-01-01",
  sections: [
    {
      id: "intro",
      blocks: [
        {
          type: "paragraph",
          content:
            "At WellMoon Veda, we are committed to maintaining the accuracy, confidentiality, and security of your personally identifiable information (“Personal Information”). As part of this commitment, this Privacy Policy governs our actions as they relate to the collection, use, and disclosure of Personal Information.",
        },
      ],
    },
    {
      id: "introduction",
      heading: "Introduction",
      blocks: [
        {
          type: "paragraph",
          content:
            "We are responsible for maintaining and protecting the Personal Information under our control. We have designated an individual or individuals who are responsible for compliance with this Privacy Policy.",
        },
      ],
    },
    {
      id: "identifying-purposes",
      heading: "Identifying Purposes",
      blocks: [
        {
          type: "paragraph",
          content:
            "We collect, use, and disclose Personal Information to provide you with the products or services you have requested and to offer you additional products and services we believe you might be interested in.",
        },
        {
          type: "paragraph",
          content:
            "The purposes for which we collect Personal Information will be identified before or at the time we collect the information. In certain circumstances, the purposes for which information is collected may be clear and consent may be implied, such as where your name, address, and payment information are provided as part of the order process.",
        },
      ],
    },
    {
      id: "consent",
      heading: "Consent",
      blocks: [
        {
          type: "paragraph",
          content:
            "Knowledge and consent are required for the collection, use, or disclosure of Personal Information except where required or permitted by law.",
        },
        {
          type: "paragraph",
          content:
            "Providing us with your Personal Information is always your choice. However, your decision not to provide certain information may limit our ability to provide you with our products or services.",
        },
        {
          type: "paragraph",
          content:
            "We will not require you to consent to the collection, use, or disclosure of information as a condition to the supply of a product or service, except as required to be able to supply that product or service.",
        },
      ],
    },
    {
      id: "limiting-collection",
      heading: "Limiting Collection",
      blocks: [
        {
          type: "paragraph",
          content:
            "The Personal Information collected will be limited to those details necessary for the purposes identified by us.",
        },
        {
          type: "paragraph",
          content:
            "With your consent, we may collect Personal Information from you in person, over the telephone, or by corresponding with you via mail, email, or the Internet.",
        },
      ],
    },
    {
      id: "limiting-use-disclosure-retention",
      heading: "Limiting Use, Disclosure, and Retention",
      blocks: [
        {
          type: "paragraph",
          content:
            "Personal Information may only be used or disclosed for the purpose for which it was collected unless you have otherwise consented, or when it is required or permitted by law.",
        },
        {
          type: "paragraph",
          content:
            "Personal Information will only be retained for the period of time required to fulfill the purpose for which we collected it or as may be required by law.",
        },
      ],
    },
    {
      id: "accuracy-and-access",
      heading: "Accuracy and Customer Access",
      blocks: [
        {
          type: "paragraph",
          content:
            "Personal Information will be maintained in as accurate, complete, and up-to-date a form as is necessary to fulfill the purposes for which it is to be used.",
        },
        {
          type: "paragraph",
          content:
            "Upon request, you will be informed of the existence, use, and disclosure of your Personal Information and will be given access to it.",
        },
        {
          type: "paragraph",
          content:
            "You may verify the accuracy and completeness of your Personal Information and may request that it be amended if appropriate. However, in certain circumstances permitted by law, we may not be able to disclose certain information to you.",
        },
      ],
    },
    {
      id: "safeguarding-information",
      heading: "Safeguarding Customer Information",
      blocks: [
        {
          type: "paragraph",
          content:
            "Personal Information will be protected by security safeguards that are appropriate to the sensitivity level of the information.",
        },
        {
          type: "paragraph",
          content:
            "We take all reasonable precautions to protect your Personal Information from any loss or unauthorized use, access, or disclosure.",
        },
      ],
    },
    {
      id: "openness",
      heading: "Openness",
      blocks: [
        {
          type: "paragraph",
          content:
            "We will make information available to you about our policies and practices with respect to the management of your Personal Information.",
        },
      ],
    },
    {
      id: "cookies",
      heading: "Cookies",
      blocks: [
        {
          type: "paragraph",
          content:
            "A cookie is a small computer file or piece of information that may be stored on your computer's hard drive when you visit our website.",
        },
        {
          type: "paragraph",
          content:
            "We may use cookies to improve our website's functionality and, in some cases, to provide visitors with a customized online experience.",
        },
        {
          type: "paragraph",
          content:
            "You may change your Internet browser settings to prevent your computer from accepting cookies or to notify you when you receive a cookie so that you may decline its acceptance.",
        },
        {
          type: "paragraph",
          content:
            "Please note that if you disable cookies, you may not experience optimal performance of our website.",
        },
      ],
    },
    {
      id: "other-websites",
      heading: "Other Websites",
      blocks: [
        {
          type: "paragraph",
          content:
            "Our website may contain links to other third-party sites that are not governed by this Privacy Policy.",
        },
        {
          type: "paragraph",
          content:
            "Although we endeavour to only link to sites with high privacy standards, our Privacy Policy will no longer apply once you leave our website.",
        },
        {
          type: "paragraph",
          content:
            "We are not responsible for the privacy practices of third-party websites, and we encourage you to review their privacy statements.",
        },
      ],
    },
    {
      id: "contact",
      heading: "Contact Us / Handling Complaints and Suggestions",
      blocks: [
        {
          type: "paragraph",
          content:
            "You may direct any questions, enquiries, or complaints with respect to this Privacy Policy or our practices by contacting: privacy@wellmoonveda.com",
        },
      ],
    },
  ],
};
