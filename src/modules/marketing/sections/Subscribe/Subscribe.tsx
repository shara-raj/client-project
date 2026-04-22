import { useState, useEffect } from "react";
import { MarketingCTAButton } from "@/components/ui/MarketingCTAButton";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { useVisibility } from "@/components/ui/useVisibility";

type SubscribeStatus = "idle" | "loading" | "success" | "error";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<SubscribeStatus>("idle");

  /**
   * Visibility state is used ONLY to trigger the typing placeholder animation.
   * Scroll reveal animation itself is handled by <RevealOnScroll />.
   */
  const { ref, isVisible } = useVisibility<HTMLDivElement>({
    threshold: 0.4,
  });

  // ---------- Typing Placeholder Animation ----------
  const fullText = "Enter your email for gentle reminders";
  const [placeholder, setPlaceholder] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!isVisible || status === "success") return;
    if (index >= fullText.length) return;

    const timeout = setTimeout(() => {
      setPlaceholder(fullText.slice(0, index + 1));
      setIndex(index + 1);
    }, 60);

    return () => clearTimeout(timeout);
  }, [index, isVisible, status]);

  // ---------- Submit Handler ----------
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      setStatus("loading");

      // FUTURE: Replace with real API call
      await new Promise((resolve) => setTimeout(resolve, 800));

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="py-24 lg:py-32 ">
      <div className="container mx-auto px-6">
        <RevealOnScroll>
          <div ref={ref} className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-semibold mb-6">
              Begin Your Healing Journey
            </h2>

            <p className="text-lg max-w-2xl mx-auto leading-relaxed mb-10">
              Subscribe to receive gentle reminders, healing stories, guided
              practices, and updates from WellMoon Veda. Join our community of
              women finding balance and clarity.
            </p>

            {/* SUCCESS STATE */}
            {status === "success" ? (
              <div className="animate-fade-in">
                <p className="text-lg font-medium mb-2">You're in. 🌿</p>
                <p className="text-sm ">
                  Thank you for joining the WellMoon Veda community.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={placeholder}
                    disabled={status === "loading"}
                    className="flex-1 px-4 py-3 rounded-lg shadow-sm bg-white outline-none ring-accent ring-1
                      focus:ring-1 focus:ring-primary transition disabled:opacity-60"
                  />

                  <MarketingCTAButton
                    type="submit"
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? "Subscribing..." : "Subscribe"}
                  </MarketingCTAButton>
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-500 mt-3">
                    Something went wrong. Please try again.
                  </p>
                )}

                <p className="text-xs text-muted-foreground mt-4">
                  By subscribing, you agree to receive emails from WellMoon
                  Veda. Unsubscribe anytime.
                </p>
              </form>
            )}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default Subscribe;
