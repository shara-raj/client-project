import type { LegalDocument } from "./legal.types";

export const termsDocument: LegalDocument = {
  id: "terms-and-conditions",
  slug: "terms",
  title: "Terms and Conditions",
  version: "1.0.0",
  effectiveDate: "2025-01-01",
  lastUpdated: "2025-01-01",
  sections: [
    {
      id: "introduction",
      heading: "1. Introduction",
      blocks: [
        {
          type: "paragraph",
          content:
            "This website is operated by WellMoon Veda. We offer guided forest therapy walks, yoga training, wellness workshops, and retreat packages. All trainings and workshops are conducted by certified instructors associated with WellMoon Veda.",
        },
        {
          type: "paragraph",
          content:
            "The terms “we”, “us”, and “our” refer to WellMoon Veda. Your access and use of our website are governed by these Terms and Conditions along with our Privacy Policy. By using our website, you agree to comply with these Terms. If you do not agree, you are not authorized to use our website or services.",
        },
      ],
    },
    {
      id: "use-of-website",
      heading: "2. Use of Our Website",
      blocks: [
        {
          type: "paragraph",
          content:
            "You agree to use our website only for lawful purposes. You will not engage in actions that violate intellectual property rights, privacy laws, or any applicable regulations. By agreeing to these Terms, you confirm that you are of legal age to enter into a binding contract.",
        },
        {
          type: "paragraph",
          content:
            "You agree not to attempt unauthorized access to our systems or disrupt the security, network integrity, or operations of our website. You also agree to provide accurate and updated personal information whenever required.",
        },
      ],
    },
    {
      id: "general-conditions",
      heading: "3. General Conditions",
      blocks: [
        {
          type: "paragraph",
          content:
            "We reserve the right to refuse service to anyone at any time. We may change, suspend, or discontinue any part of the website without notice. Continued use of our website after modifications implies acceptance of the updated Terms.",
        },
      ],
    },
    {
      id: "products-and-services",
      heading: "4. Products and Services",
      blocks: [
        {
          type: "paragraph",
          content:
            "All purchases made through our website are subject to availability. We may limit or cancel quantities or restrict sales to specific regions or individuals. Prices are shown in INR unless stated otherwise. We reserve the right to decline suspicious or fraudulent orders.",
        },
        {
          type: "paragraph",
          content:
            "While we strive for accuracy, we do not guarantee that product colors, visuals, or design elements displayed on our website are fully accurate due to display variations.",
        },
      ],
    },
    {
      id: "third-party-links",
      heading: "5. Links to Third-Party Websites",
      blocks: [
        {
          type: "paragraph",
          content:
            "Any links to third-party websites are provided for convenience. WellMoon Veda does not endorse, control, or take responsibility for external sites, their content, or their services. Accessing third-party links is at your own risk.",
        },
      ],
    },
    {
      id: "user-content",
      heading: "6. User Content, Feedback & Submissions",
      blocks: [
        {
          type: "paragraph",
          content:
            "You are solely responsible for any content you submit, including comments, feedback, and posts. By submitting content, you grant us permission to edit, modify, publish, or use it in any form. You agree not to upload illegal, abusive, or harmful content.",
        },
        {
          type: "paragraph",
          content:
            "We reserve the right to remove any content that violates these Terms.",
        },
      ],
    },
    {
      id: "personal-information",
      heading: "7. Personal Information",
      blocks: [
        {
          type: "paragraph",
          content:
            "Your submission of personal information is governed by our Privacy Policy. Please review it to understand how we collect, store, and use your data.",
        },
      ],
    },
    {
      id: "errors-omissions",
      heading: "8. Errors and Omissions",
      blocks: [
        {
          type: "paragraph",
          content:
            "Occasionally, our website may contain errors, typographical mistakes, or outdated information. We reserve the right to correct such errors and update information without prior notice.",
        },
      ],
    },
    {
      id: "disclaimer-liability",
      heading: "9. Disclaimer & Limitation of Liability",
      blocks: [
        {
          type: "paragraph",
          content:
            'Our website and services are provided "as is" without warranties of any kind. We do not guarantee uninterrupted, secure, or error-free service. WellMoon Veda is not liable for damages arising from the use or inability to use our website, including indirect or consequential losses.',
        },
      ],
    },
    {
      id: "indemnification",
      heading: "10. Indemnification",
      blocks: [
        {
          type: "paragraph",
          content:
            "You agree to indemnify and hold WellMoon Veda harmless from any claims, liabilities, damages, or expenses arising from your use of our website or violation of these Terms.",
        },
      ],
    },
    {
      id: "entire-agreement",
      heading: "11. Entire Agreement",
      blocks: [
        {
          type: "paragraph",
          content:
            "These Terms constitute the entire agreement between you and WellMoon Veda regarding your use of our website and services, superseding any prior agreements.",
        },
      ],
    },
    {
      id: "waiver",
      heading: "12. Waiver",
      blocks: [
        {
          type: "paragraph",
          content:
            "Failure to enforce any part of the Terms does not constitute a waiver of our rights to enforce them in the future.",
        },
      ],
    },
    {
      id: "severability",
      heading: "13. Severability",
      blocks: [
        {
          type: "paragraph",
          content:
            "If any provision of these Terms is found invalid or unenforceable, the remaining provisions will continue to remain in effect.",
        },
      ],
    },
    {
      id: "governing-law",
      heading: "14. Governing Law",
      blocks: [
        {
          type: "paragraph",
          content:
            "These Terms shall be governed by the laws of India. Any disputes must be resolved in the courts of Kalpetta, India.",
        },
      ],
    },
    {
      id: "contact-information",
      heading: "15. Contact Information",
      blocks: [
        {
          type: "paragraph",
          content:
            "For questions regarding these Terms and Conditions, contact us at: legal@wellmoonveda.com",
        },
      ],
    },
  ],
};
