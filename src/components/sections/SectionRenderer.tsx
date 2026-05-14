import type { HealingSection } from "@/modules/healing-paths/types/healing.types";

import MinimalSection from "./MinimalSection";
import FloatingPointsSection from "./FloatingPointsSection";
import EnergyGridSection from "./EnergyGridSection";
import TimelineSection from "./TimelineSection";
import ImmersiveSection from "./ImmersiveSection";
import GentleNoteSection from "./GentleNoteSection";
import JourneySection from "./JourneySection";

interface SectionRendererProps {
  section: HealingSection;
}

export default function SectionRenderer({ section }: SectionRendererProps) {
  switch (section.variant) {
    case "floating-points":
      return <FloatingPointsSection section={section} />;

    case "energy-grid":
      return <EnergyGridSection section={section} />;

    case "timeline":
      return <TimelineSection section={section} />;

    case "immersive":
      return <ImmersiveSection section={section} />;

    case "gentle-note":
      return <GentleNoteSection section={section} />;

    case "journey":
      return <JourneySection section={section} />;

    case "minimal":
    default:
      return <MinimalSection section={section} />;
  }
}
