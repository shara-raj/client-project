import type { HealingSection } from "@/modules/healing-paths/types/healing.types";

interface FloatingPointsSectionProps {
  section: HealingSection;
}

export default function FloatingPointsSection({
  section,
}: FloatingPointsSectionProps) {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-4xl">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-light tracking-wide text-[#8F6A4C]">
            {section.title}
          </h2>

          {section.content && (
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#5F5145]">
              {section.content}
            </p>
          )}
        </div>

        {section.points && (
          <div className="space-y-6">
            {section.points.map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-5 rounded-3xl border border-white/30 bg-white/25 px-8 py-6 shadow-[0_10px_40px_rgba(214,185,140,0.08)] backdrop-blur-sm"
              >
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#D6B98C]/40 bg-[#F7F3EE]">
                  <div className="h-2 w-2 rounded-full bg-[#D6B98C]" />
                </div>

                <p className="text-lg leading-8 text-[#5F5145]">{point}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
