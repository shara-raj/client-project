import { useRef, useEffect } from "react";

const HeroBadge = () => {
  const badgeRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const isReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (
            window.innerWidth >= 1024 &&
            !isReducedMotion &&
            badgeRef.current
          ) {
            const rotation = window.scrollY * 0.2;
            badgeRef.current.style.transform = `rotate(${rotation}deg)`;
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40">
      <div className="relative w-64 h-64">
        <div className="absolute inset-0 m-auto w-[158px] h-[158px] rounded-full bg-white shadow-soft border border-black" />

        <svg
          ref={badgeRef}
          aria-hidden="true"
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 256 256"
          style={{
            transformOrigin: "50% 50%",
            transformBox: "fill-box",
          }}
        >
          <defs>
            <path
              id="circlePath"
              d="M 128,128 m -58,0 a 58,58 0 1,1 116,0 a 58,58 0 1,1 -116,0"
            />
          </defs>

          <text
            fill="currentColor"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
              HOLISTIC CARE FOR BODY, MIND, ENERGY, AND SPIRIT ⭐
            </textPath>
          </text>
        </svg>

        <div className="absolute inset-0 m-auto w-[86px] h-[86px] rounded-full overflow-hidden border border-black">
          <img
            src="/images/hero/meditation-center.png"
            alt="Meditation silhouette"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBadge;
