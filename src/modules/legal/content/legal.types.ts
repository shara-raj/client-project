export interface LegalDocument {
  id: string;
  slug: string;
  title: string;
  version: string;
  effectiveDate: string; // ISO
  lastUpdated: string; // ISO
  sections: LegalSection[];
}

export interface LegalSection {
  id: string;
  heading?: string;
  blocks: LegalBlock[];
}

export type LegalBlock =
  | { type: "paragraph"; content: string }
  | { type: "list"; items: string[] }
  | { type: "note"; content: string };
