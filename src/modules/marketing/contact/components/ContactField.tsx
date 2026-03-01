import type { ReactNode } from "react";

type ContactFieldProps = {
  label: string;
  children: ReactNode;
};

const ContactField = ({ label, children }: ContactFieldProps) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">{label}</label>
      {children}
    </div>
  );
};

export default ContactField;
