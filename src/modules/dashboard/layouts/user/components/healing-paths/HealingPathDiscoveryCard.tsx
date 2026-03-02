import { Link } from "react-router-dom";
import type { HealingPath } from "@/modules/healing-paths/types/healing.types";

export default function HealingPathDiscoveryCard({
  healing,
}: {
  healing: HealingPath;
}) {
  return (
    <div className="group rounded-xl border border-neutral-200 bg-white p-5 transition hover:shadow-sm flex flex-col">
      <div className="mb-4 w-32 h-32 aspect-video overflow-hidden rounded-lg bg-neutral-100 mx-auto">
        <video
          src={healing.videoSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
        />
      </div>

      <h4 className="mb-2 text-base font-semibold text-neutral-900">
        {healing.title}
      </h4>

      <p className="text-sm text-neutral-600">{healing.shortDescription}</p>

      <div className="mt-auto flex justify-center">
        <Link to={`healing-path/${healing.slug}`}></Link>
        <button className=" rounded-md bg-neutral-200 cursor-pointer px-4 py-2 mt-5 text-sm font-medium text-black transition group-hover:bg-neutral-400">
          View Path
        </button>
      </div>
    </div>
  );
}
