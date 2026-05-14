import type { HealingSection } from "@/modules/healing-paths/types/healing.types";

interface ImmersiveSectionProps {
  section: HealingSection;
}

export default function ImmersiveSection({ section }: ImmersiveSectionProps) {
  return (
    <section className="relative overflow-hidden py-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(214,185,140,0.18),_transparent_70%)]" />

      <div className="relative mx-auto max-w-4xl text-center">
        <h2 className="text-5xl font-light tracking-wide text-[#8F6A4C]">
          {section.title}
        </h2>

        {section.content && (
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#5F5145]">
            {section.content}
          </p>
        )}

        <div className="mt-16 overflow-hidden rounded-[36px] border border-white/20 bg-white/20 shadow-[0_20px_80px_rgba(214,185,140,0.15)] backdrop-blur-sm">
          <div className="aspect-video w-full bg-[#EFE3D2]" />
        </div>

        {section.points && (
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {section.points.map((point, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/20 bg-white/20 px-6 py-5 backdrop-blur-sm"
              >
                <p className="text-base leading-7 text-[#5F5145]">{point}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
