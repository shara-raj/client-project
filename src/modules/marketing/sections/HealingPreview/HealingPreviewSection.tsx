import HealingGrid from "../../../healing-paths/components/HealingGrid";
import { healingPaths } from "../../../healing-paths/config/healing.config";

export default function HealingPreviewSection() {
  return (
    <section className="py-28 pattern-bg">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-3xl font-semibold ">Explore Our Healing Paths</h2>
        <p className=" max-w-2xl mx-auto">
          Discover transformative experiences designed to restore balance,
          clarity, and inner peace.
        </p>
      </div>

      <HealingGrid items={healingPaths} />
    </section>
  );
}
