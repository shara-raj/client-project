import { privacyPolicyDocument } from "./privacyPolicy.content";
import { termsDocument } from "./terms.content";
import { returnsPolicyDocument } from "./returns.content";
import type { LegalDocument } from "./legal.types";

export const legalDocuments: Record<string, LegalDocument> = {
  "privacy-policy": privacyPolicyDocument,
  terms: termsDocument,
  returns: returnsPolicyDocument,
};
