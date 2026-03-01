import LegalPageLayout from "../layouts/LegalPageLayout";
import { privacyPolicyDocument } from "../content/privacyPolicy.content";

const PrivacyPolicyPage = () => {
  return <LegalPageLayout document={privacyPolicyDocument} />;
};

export default PrivacyPolicyPage;
