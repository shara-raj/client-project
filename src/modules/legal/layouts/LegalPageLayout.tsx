import type { LegalDocument } from "../content/legal.types";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import LegalSectionRenderer from "../components/LegalSectionRenderer";
import LegalMeta from "../components/LegalMeta";
import LegalHeader from "../components/LegalHeader";

interface LegalPageLayoutProps {
  document: LegalDocument;
  showMeta?: boolean;
}

const LegalPageLayout = ({
  document,
  showMeta = true,
}: LegalPageLayoutProps) => {
  return (
    <Section className=" bg-[url(/images/app-bg/pattern2.png)]">
      <Container className="max-w-3xl py-10">
        <LegalHeader title={document.title} />

        {showMeta && (
          <LegalMeta
            version={document.version}
            effectiveDate={document.effectiveDate}
            lastUpdated={document.lastUpdated}
          />
        )}

        <LegalSectionRenderer sections={document.sections} />
      </Container>
    </Section>
  );
};

export default LegalPageLayout;
