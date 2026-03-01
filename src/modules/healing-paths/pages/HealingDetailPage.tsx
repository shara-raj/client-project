import { useParams } from "react-router-dom";
import { healingPaths } from "../config/healing.config";

import HealingLayout from "../components/HealingLayout";
import HealingHero from "../components/HealingHero";
import HealingIntro from "../components/HealingIntro";
import HealingDosAndDonts from "../components/HealingDosDonts";
import HealingCTA from "../components/HealingCTA";

export default function HealingDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  const healing = healingPaths.find((item) => item.slug === slug);

  if (!healing) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-semibold">Healing Path Not Found</h1>
      </div>
    );
  }

  return (
    <HealingLayout>
      <HealingHero healing={healing} />
      <HealingIntro intro={healing.intro} />
      <HealingDosAndDonts dos={healing.dos} donts={healing.donts} />
      <HealingCTA />
    </HealingLayout>
  );
}
