import { Link } from "react-router-dom";
import type { HealingPath } from "../types/healing.types";

interface HealingCardProps {
  healing: HealingPath;
}

export default function HealingCard({ healing }: HealingCardProps) {
  return (
    <Link to={`/healing-path/${healing.slug}`} className="block group">
      <article className="rounded-3xl bg-[#CBB79E] p-10 text-center space-y-6 transition-all duration-300 group-hover:shadow-xl group-hover:scale-[1.02]">
        {/* Video Circle */}
        <div className="flex justify-center">
          <div className="w-24 h-24 rounded-full overflow-hidden bg-white shadow-md">
            <video
              src={healing.videoSrc}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-[#3E2F23]">
          {healing.title}
        </h3>

        {/* Description */}
        <p className="text-[#5C4A3A] leading-relaxed max-w-xs mx-auto">
          {healing.shortDescription}
        </p>
      </article>
    </Link>
  );
}
