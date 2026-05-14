import type { HealingSection } from "@/modules/healing-paths/types/healing.types";

interface GentleNoteSectionProps {
  section: HealingSection;
}

export default function GentleNoteSection({ section }: GentleNoteSectionProps) {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-[36px] border border-[#E8DCC8]/60 bg-gradient-to-br from-[#FAF8F5] via-[#F4EEE7] to-[#ECE4DA] px-10 py-14 text-center shadow-[0_20px_60px_rgba(0,0,0,0.04)]">
          <div className="mx-auto mb-6 h-px w-20 bg-[#D6B98C]/40" />

          <h2 className="text-3xl font-light tracking-wide text-[#8F6A4C]">
            {section.title}
          </h2>

          {section.content && (
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#5F5145]">
              {section.content}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
