import type { HealingSection } from "@/modules/healing-paths/types/healing.types";

interface EnergyGridSectionProps {
  section: HealingSection;
}

export default function EnergyGridSection({ section }: EnergyGridSectionProps) {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-6xl flex flex-col gap-5">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-light tracking-wide ">
            {section.title}
          </h2>

          {section.content && (
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 ">
              {section.content}
            </p>
          )}
        </div>

        {section.points && (
          <div className="grid gap-6 md:grid-cols-2">
            {section.points.map((point, index) => (
              <div
                key={index}
                className="flex gap-5 items-center rounded-[28px] border border-white/30 bg-gradient-to-br from-white/70 via-[#F8F2EA]/70 to-[#EEDCC3]/70 p-8 shadow-[0_10px_40px_rgba(214,185,140,0.12)] backdrop-blur-sm"
              >
                <div className=" mb-5 h-10 w-10 rounded-full border border-[#D6B98C]/40 bg-[#F7F3EE]" />

                <p className="text-lg leading-8 ">{point}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
