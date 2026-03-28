type Props = {
  label: string;
  className: string;
};

export const StatusBadge = ({ label, className }: Props) => {
  return (
    <span className={`px-3 py-1 text-xs font-medium rounded-full ${className}`}>
      {label}
    </span>
  );
};
