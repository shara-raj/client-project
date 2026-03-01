import Button from "@/components/ui/Button";
export default function HealingCTA() {
  return (
    <section className="py-10 text-center space-y-8">
      <h2 className="text-3xl font-semibold">Begin Your Healing Journey</h2>

      <p className="max-w-xl mx-auto text-[#5C4A3A]">
        Take the first step toward balance and inner harmony. Explore sessions
        designed to nurture your mind and spirit.
      </p>

      <Button variant="primary">Start Your Session</Button>
    </section>
  );
}
