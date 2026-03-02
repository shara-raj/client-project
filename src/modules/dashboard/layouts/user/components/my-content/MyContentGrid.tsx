import MyHealingPathCard from "./MyHealingPathCard";

export default function MyContentGrid() {
  return (
    <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <MyHealingPathCard />
      <MyHealingPathCard />
      <MyHealingPathCard />
    </section>
  );
}
