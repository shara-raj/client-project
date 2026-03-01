import LegalPageLayout from "../layouts/LegalPageLayout";
import { termsDocument } from "../content/terms.content";

const TermsPage = () => {
  return <LegalPageLayout document={termsDocument} />;
};

export default TermsPage;
