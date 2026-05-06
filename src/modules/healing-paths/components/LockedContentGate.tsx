import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@/components/ui/Button";

interface Props {
  isUnlocked: boolean;
  children: ReactNode;
}

export default function LockedContentGate({ isUnlocked, children }: Props) {
  const navigate = useNavigate();

  if (isUnlocked) return <>{children}</>;

  return (
    <div className="relative mt-16 bg-white">
      <div className="blur-md pointer-events-none">{children}</div>

      <div className="absolute inset-0 flex flex-col items-center mx-auto mt-8 rounded-lg text-center p-8 w-fit h-fit bg-card-sand/70 ">
        <h3 className="text-lg font-semibold text-main">
          Continue your healing journey
        </h3>

        <p className="text-muted mt-2">
          Subscribe to unlock the full healing program
        </p>

        <Button
          onClick={() => navigate("/pricing")}
          variant="secondary"
          className="mt-4 "
        >
          Subscribe Now
        </Button>
      </div>
    </div>
  );
}
