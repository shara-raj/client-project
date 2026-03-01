interface HealingDosAndDontsProps {
  dos: string[];
  donts: string[];
}

export default function HealingDosAndDonts({
  dos,
  donts,
}: HealingDosAndDontsProps) {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-16">
          Practice Guidance
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
          {/* Do's Card */}
          <div className="bg-[#008000]/30 rounded-3xl p-10 shadow-sm">
            <h3 className="text-2xl font-semibold mb-6 text-[#3E2F23]">Do's</h3>

            <ul className="space-y-4">
              {dos.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-[#5C4A3A]"
                >
                  <span className="mt-2 w-2 h-2 rounded-full bg-[#3E2F23]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Don'ts Card */}
          <div className="bg-[#FF0000]/30 rounded-3xl p-10 shadow-sm">
            <h3 className="text-2xl font-semibold mb-6 text-[#3E2F23]">
              Don'ts
            </h3>

            <ul className="space-y-4">
              {donts.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-[#5C4A3A]"
                >
                  <span className="mt-2 w-2 h-2 rounded-full bg-[#3E2F23]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
