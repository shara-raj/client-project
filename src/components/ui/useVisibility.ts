import { useEffect, useRef, useState } from "react";

type UseVisibilityOptions = {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
};

export function useVisibility<T extends HTMLElement>(
  options: UseVisibilityOptions = {},
) {
  const { threshold = 0.2, rootMargin = "0px", once = true } = options;

  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold, rootMargin, once]);

  return { ref, isVisible };
}
