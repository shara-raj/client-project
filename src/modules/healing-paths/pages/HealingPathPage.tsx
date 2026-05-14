import { useParams } from "react-router-dom";
import { useHealingPath } from "../hooks/useHealingPath";
import { useHealingSessions } from "../hooks/useHealingSessions";
import { useMudras } from "../hooks/useMudras";
import { useSubscription } from "@/modules/dashboard/user/hooks/useSubscription";
import MudraGrid from "../components/MudraGrid";
import VideoSessionList from "../components/VideoSessionList";
import LockedContentGate from "../components/LockedContentGate";
import HealingSkeleton from "../components/HealingSkeleton";
import { useAuth } from "@/modules/auth";
import { useUserActivity } from "@/modules/dashboard/user/hooks/useUserActivity";
import SectionRenderer from "@/components/sections/SectionRenderer";

export default function HealingPathPage() {
  const { slug } = useParams();
  const { path, loading } = useHealingPath(slug!);

  const isMudraPath = slug === "mudra-healing";

  const { sessions, loading: sessionsLoading } = useHealingSessions(
    !isMudraPath ? path?.id : undefined,
  );

  const { mudras, loading: mudrasLoading } = useMudras(
    isMudraPath ? path?.id : undefined,
  );

  const { subscription } = useSubscription();

  const auth = useAuth();
  const user = auth?.user;

  useUserActivity(user?.id, "healing_path", path?.id);

  if (loading) {
    return <div className="p-10">Loading healing path...</div>;
  }

  if (!path) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-xl font-semibold">Healing path not found</h2>
      </div>
    );
  }

  const isSubscribed = subscription?.status === "active";

  const contentLoading = sessionsLoading || mudrasLoading;

  const hasMudras = isMudraPath && mudras.length > 0;
  const hasSessions = !isMudraPath && sessions.length > 0;
  const hasLockedContent = hasMudras || hasSessions;

  return (
    <>
      {/* HERO */}
      <section className="text-center tracking-wide leading-tight min-h-[40vh] bg-[url('/images/healingpath/hero/aurahero.png')] bg-cover bg-center flex flex-col items-center justify-center">
        <h1 className="text-6xl font-light">{path.title}</h1>
        <p className="text-sub mt-2">{path.description}</p>
      </section>

      <div className="max-w-4xl mx-auto space-y-10 py-36 ">
        {/* INTRO */}
        {path.intro && (
          <section className="card text-center tracking-wide leading-tight">
            <h2 className="font-light mb-2 text-4xl">Introduction</h2>
            <p className="text-lg">{path.intro}</p>
          </section>
        )}

        {/* SECTIONS */}
        {path.sections?.map((section, index) => (
          <SectionRenderer key={index} section={section} />
        ))}

        {/* PREMIUM CONTENT */}
        <section>
          {contentLoading ? (
            <HealingSkeleton />
          ) : hasLockedContent ? (
            <LockedContentGate isUnlocked={isSubscribed}>
              {isMudraPath ? (
                <MudraGrid mudras={mudras} />
              ) : (
                <VideoSessionList sessions={sessions} />
              )}
            </LockedContentGate>
          ) : (
            <p className="mt-4 text-base italic text-muted text-center rounded-lg border border-2 border-accent bg-white p-4">
              Session content for {path.title} coming soon...
            </p>
          )}
        </section>
      </div>
    </>
  );
}
