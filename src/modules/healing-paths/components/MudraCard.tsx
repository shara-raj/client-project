import { useState } from "react";
import type { Mudra } from "../types/healing.types";

interface Props {
  mudra: Mudra;
  onClick: () => void;
}

export default function MudraCard({ mudra, onClick }: Props) {
  const [showAllConditions, setShowAllConditions] = useState(false);

  const conditions = mudra.conditions || [];

  const primary = conditions[0];
  const extraCount = conditions.length - 1;

  return (
    <div className="card cursor-pointer" onClick={onClick}>
      <img src={mudra.image} alt={mudra.title} className="rounded-md mb-3" />

      {/* CONDITION LABEL */}
      <div className="text-center font-semibold">
        {conditions.length === 0 && "General"}

        {conditions.length > 0 && (
          <>
            {primary}

            {extraCount > 0 && (
              <span
                className="text-blue-500 ml-1 cursor-pointer text-sm hover:underline"
                onClick={(e) => {
                  e.stopPropagation(); // prevents card click
                  setShowAllConditions((prev) => !prev);
                }}
              >
                + {extraCount} more
              </span>
            )}
          </>
        )}
      </div>

      {/* EXPANDED CONDITIONS */}
      {showAllConditions && (
        <div className="grid grid-cols-2 mt-2 text-base text-center border border-accent rounded-lg p-1">
          {conditions.slice(1).map((c: string, index: number) => (
            <div key={index}>{c}</div>
          ))}
        </div>
      )}
    </div>
  );
}
