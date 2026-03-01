interface LegalHeaderProps {
  title: string;
}

const LegalHeader = ({ title }: LegalHeaderProps) => {
  return (
    <div className="mb-12 text-center">
      <h1 className="text-4xl md:text-5xl font-semibold text-foreground">
        {title}
      </h1>
    </div>
  );
};

export default LegalHeader;
