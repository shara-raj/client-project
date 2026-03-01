import HealingCard from "./HealingCard";
import type { HealingPath } from "../types/healing.types";

interface HealingGridProps {
  items: HealingPath[];
}

export default function HealingGrid({ items }: HealingGridProps) {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((healing) => (
          <HealingCard key={healing.slug} healing={healing} />
        ))}
      </div>
    </div>
  );
}
