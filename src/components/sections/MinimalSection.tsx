import type { HealingSection } from "@/modules/healing-paths/types/healing.types";

interface MinimalSectionProps {
  section: HealingSection;
}

export default function MinimalSection({ section }: MinimalSectionProps) {
  return (
    <section className="relative py-24 ">
      <div className="mx-auto max-w-3xl text-center flex flex-col gap-5">
        <h2 className="text-4xl font-light tracking-wide ">{section.title}</h2>

        {section.content && (
          <p className="mt-8 text-lg leading-8 ">{section.content}</p>
        )}

        {section.points && (
          <div className="mt-10 space-y-5 text-left">
            {section.points.map((point, index) => (
              <div
                key={index}
                className="flex gap-4 rounded-2xl border border-white/20 bg-white/70 px-5 py-4 backdrop-blur-sm items-center"
              >
                <div className="mt-1 h-2 w-2 rounded-full bg-[#D6B98C] " />

                <p className="text-base leading-7 ">{point}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
