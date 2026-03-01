interface HealingIntroProps {
  intro: string;
}

export default function HealingIntro({ intro }: HealingIntroProps) {
  return (
    <section className="py-5 max-w-3xl mx-auto px-6">
      <h2 className="text-2xl font-semibold mb-8">About This Healing</h2>

      <p className="text-[#5C4A3A] leading-relaxed text-lg">{intro}</p>
    </section>
  );
}
