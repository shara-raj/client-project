import { Link } from "react-router-dom";
import { healingPaths } from "@/modules/healing-paths/config/healing.config";
import HealingPathDiscoveryCard from "../healing-paths/HealingPathDiscoveryCard";

export default function HealingDiscoveryPreview() {
  return (
    <section className="space-y-6">
      {/* Header + CTA Row */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-neutral-900">
          Explore Healing Paths
        </h3>

        <Link
          to="/dashboard/user/healing-paths"
          className="text-sm font-medium text-blue-600 hover:text-blue-700"
        >
          View All
        </Link>
      </div>

      {/* First 3 Healing Paths */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {healingPaths.slice(0, 3).map((healing) => (
          <HealingPathDiscoveryCard key={healing.slug} healing={healing} />
        ))}
      </div>
    </section>
  );
}
