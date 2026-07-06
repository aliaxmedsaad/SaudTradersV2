import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger delay in milliseconds. */
  delay?: number;
}

/**
 * Fades content up once it scrolls into view. Pure CSS transition driven by
 * an IntersectionObserver — reduced-motion users see content immediately
 * (handled in index.css).
 */
export default function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // No observer support, or the user prefers reduced motion: skip the
    // scroll choreography entirely and show the content immediately.
    const reducedMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (typeof IntersectionObserver === "undefined" || reducedMotion) {
      el.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
