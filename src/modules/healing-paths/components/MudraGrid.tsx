import MudraCard from "./MudraCard";
import { useState } from "react";
import MudraModal from "./MudraModal";
import type { Mudra } from "../types/healing.types";

interface Props {
  mudras: Mudra[];
}

export default function MudraGrid({ mudras }: Props) {
  const [selectedMudra, setSelectedMudra] = useState<Mudra | null>(null);

  return (
    <>
      <div className="grid md:grid-cols-3 gap-6">
        {mudras.map((mudra) => (
          <MudraCard
            key={mudra.id}
            mudra={mudra}
            onClick={() => setSelectedMudra(mudra)}
          />
        ))}
      </div>
      <MudraModal
        isOpen={!!selectedMudra}
        mudra={selectedMudra}
        onClose={() => setSelectedMudra(null)}
      />
    </>
  );
}
