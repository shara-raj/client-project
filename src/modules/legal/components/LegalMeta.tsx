interface LegalMetaProps {
  version: string;
  effectiveDate: string;
  lastUpdated: string;
}

const LegalMeta = ({ version, effectiveDate, lastUpdated }: LegalMetaProps) => {
  return (
    <div className="mb-16 text-sm text-muted-foreground space-y-1">
      <p>Version: {version}</p>
      <p>Effective Date: {effectiveDate}</p>
      <p>Last Updated: {lastUpdated}</p>
    </div>
  );
};

export default LegalMeta;
