import { useParams } from "react-router-dom";
import LegalPageLayout from "../layouts/LegalPageLayout";
import { legalDocuments } from "../content/legal.registry";
import type { LegalDocument } from "../content/legal.types";

const LegalDynamicPage = () => {
  const { slug } = useParams<{ slug: string }>();

  const document: LegalDocument | undefined = slug
    ? legalDocuments[slug]
    : undefined;

  if (!document) {
    return (
      <div className="pt-32 text-center">
        <h1 className="text-3xl font-semibold">Document Not Found</h1>
      </div>
    );
  }

  return <LegalPageLayout document={document} />;
};

export default LegalDynamicPage;
