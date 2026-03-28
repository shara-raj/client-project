type Props = {
  label: string;
  variant: "default" | "danger";
  onClick?: () => void;
};

export const ActionButton = ({
  label,
  variant = "default",
  onClick,
}: Props) => {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 text-xs rounded-md transition
        ${
          variant === "danger"
            ? "bg-red-100 text-red-700 hover:bg-red-200"
            : "bg-soft text-main hover-soft"
        }`}
    >
      {label}
    </button>
  );
};
