import { healingPaths } from "@/modules/healing-paths/config/healing.config";
import HealingPathDiscoveryCard from "./HealingPathDiscoveryCard";

export default function HealingPathsGrid() {
  return (
    <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {healingPaths.map((healing) => (
        <HealingPathDiscoveryCard key={healing.slug} healing={healing} />
      ))}
    </section>
  );
}
