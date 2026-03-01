import LegalPageLayout from "../layouts/LegalPageLayout";
import { returnsPolicyDocument } from "../content/returns.content";

const ReturnPolicyPage = () => {
  return <LegalPageLayout document={returnsPolicyDocument} />;
};

export default ReturnPolicyPage;
