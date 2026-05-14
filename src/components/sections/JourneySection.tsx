import type { HealingSection } from "@/modules/healing-paths/types/healing.types";

interface JourneySectionProps {
  section: HealingSection;
}

export default function JourneySection({ section }: JourneySectionProps) {
  return (
    <section className="relative overflow-hidden py-40">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(214,185,140,0.22),transparent_70%)]" />

      <div className="relative mx-auto max-w-4xl text-center">
        <div className="mx-auto mb-8 h-px w-28 bg-[#D6B98C]/40" />

        <h2 className="text-5xl font-light tracking-wide text-[#8F6A4C]">
          {section.title}
        </h2>

        {section.content && (
          <p className="mx-auto mt-10 max-w-3xl text-xl leading-9 text-[#5F5145]">
            {section.content}
          </p>
        )}

        <button
          className="
            mt-14
            rounded-full
            border
            border-[#D6B98C]/40
            bg-white/30
            px-8
            py-4
            text-base
            tracking-wide
            text-[#8F6A4C]
            backdrop-blur-sm
            transition-all
            duration-300
            hover:bg-white/50
          "
        >
          Begin Healing
        </button>
      </div>
    </section>
  );
}
