import { useEffect, useRef } from "react";

/**
 * Attaches an IntersectionObserver to a container ref.
 * When the element enters the viewport, it adds the "visible" class
 * to every child that has a reveal class (reveal, reveal-left, reveal-right).
 * Also works on the container itself if it has a reveal class.
 */
export default function useReveal(threshold = 0.15) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = el.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    const allTargets = targets.length > 0 ? targets : [el];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    allTargets.forEach((t) => observer.observe(t));

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
