import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import WhatsAppButton from "./WhatsAppButton";
import { ArrowIcon } from "./Icons";

/**
 * Scroll-driven truck-journey hero.
 *
 * 48 compressed JPG frames (public/frames/truck-journey-jpg/01.jpg … 48.jpg)
 * are scrubbed on a canvas as the visitor scrolls through a tall section.
 * The truck is a storytelling device for dependable industrial dye supply —
 * all copy stays focused on textile dyes, not logistics.
 *
 * - Frame paths go through import.meta.env.BASE_URL so they resolve under
 *   the GitHub Pages base ("/SaudTraders/").
 * - Scroll → frame mapping runs inside requestAnimationFrame and mutates the
 *   canvas directly; React never re-renders during scrolling.
 * - Frames preload with priority (first, last, then sequential, small
 *   concurrency). Until a target frame arrives, the nearest loaded frame is
 *   drawn, so scrubbing degrades gracefully on slow connections.
 * - prefers-reduced-motion: no scrubbing, no tall section — a static premium
 *   hero using 01.jpg, with `children` (the dye range) fully visible below it.
 * - If frames fail to load entirely, a styled paper/navy backdrop keeps the
 *   hero looking intentional; the HTML text overlay is always real text.
 *
 * Scroll handoff: `children` (DyeRange) render inside the sticky viewport.
 * Over progress 0 → 0.51 (frames 01 → 25) the hero copy fades out and the
 * products fade/slide in; from 0.51 → 1.0 (frames 25 → 48) they stay settled
 * over the journey. All child motion is driven by a single `--pp` CSS
 * variable written in the same rAF scroll loop — see index.css.
 */

const FRAME_COUNT = 48;

const frameSrc = (n: number) =>
  `${import.meta.env.BASE_URL}frames/truck-journey-jpg/${String(n).padStart(2, "0")}.jpg`;

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(
    () =>
      typeof window !== "undefined" &&
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    if (typeof window.matchMedia !== "function") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

/** Text overlay — real HTML/CSS on top of the journey visual. */
function HeroContent({ showScrollHint }: { showScrollHint: boolean }) {
  const { t } = useLanguage();

  return (
    <div className="relative mx-auto w-full max-w-[1400px] px-4 pb-8 sm:px-6 sm:pb-12 lg:px-8">
      <div className="me-auto max-w-2xl rounded-2xl border border-white/60 bg-white/85 p-6 shadow-xl shadow-navy/10 backdrop-blur-md sm:p-8 md:p-10">
        <div className="swatch-band mb-5 h-1 w-24 rounded-full" aria-hidden="true" />

        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-dye-indigo sm:text-sm">
          {t.hero.badge}
        </p>

        <h1 className="text-3xl font-bold tracking-tight text-ink-strong sm:text-4xl lg:text-5xl">
          {t.hero.headline} <span className="text-dye-indigo">{t.hero.headlineAccent}</span>
        </h1>

        <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
          {t.hero.sub}
        </p>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
          <WhatsAppButton label={t.hero.ctaPrimary} className="w-full sm:w-auto" />
          <a
            href="#dyes"
            className="inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-line bg-white px-7 py-3.5 text-base font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-dye-indigo/40 hover:text-dye-indigo focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dye-indigo sm:w-auto"
          >
            <span>{t.hero.ctaSecondary}</span>
            <ArrowIcon className="h-5 w-5 rtl:-scale-x-100" />
          </a>
        </div>

        <ul className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-soft sm:text-xs">
          {t.hero.roles.map((role, i) => (
            <li key={role} className="flex items-center gap-3">
              {i > 0 && <span className="h-1 w-1 rounded-full bg-line" aria-hidden="true" />}
              {role}
            </li>
          ))}
        </ul>

        {showScrollHint && (
          <p className="mt-6 flex items-center gap-2 text-xs font-medium text-ink-soft">
            <ArrowIcon className="h-4 w-4 rotate-90 text-dye-indigo" />
            {t.hero.scrollHint}
          </p>
        )}
      </div>
    </div>
  );
}

/** Static hero for reduced-motion users: frame 01, no scrubbing, no tall
 *  scroll. Children (the dye range) sit below it as a normal, fully visible
 *  section — no slide-in. */
function StaticHero({ children }: { children?: ReactNode }) {
  const { t } = useLanguage();
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <>
      <section id="home" className="relative flex min-h-svh items-end overflow-hidden pt-24">
        <div className="absolute inset-0" role="img" aria-label={t.hero.visualAlt}>
          <FallbackBackdrop />
          {!imgFailed && (
            <img
              src={frameSrc(1)}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              onError={() => setImgFailed(true)}
            />
          )}
        </div>
        <HeroContent showScrollHint={false} />
      </section>
      {children && (
        <div id="dyes" className="scroll-mt-24 bg-paper-soft py-20 md:py-28">
          {/* #products alias — empty, non-focusable, invisible to AT. */}
          <span id="products" className="block scroll-mt-24" />
          {children}
        </div>
      )}
    </>
  );
}

/** Premium paper/navy backdrop shown while frames load or if they are missing. */
function FallbackBackdrop() {
  return (
    <div className="absolute inset-0 bg-paper-soft" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(36,60,143,0.14),transparent_60%)]" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-line/60 to-transparent" />
    </div>
  );
}

function ScrubHero({ children }: { children?: ReactNode }) {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);
  // Sticky viewport: receives the --pp custom property each scroll frame.
  const stickyRef = useRef<HTMLDivElement | null>(null);
  const heroCopyRef = useRef<HTMLDivElement | null>(null);
  const productsRef = useRef<HTMLDivElement | null>(null);
  // First frame drawn — the canvas has real pixels, hide the fallback <img>.
  const [ready, setReady] = useState(false);
  // First frame failed to load — keep the styled backdrop, never look broken.
  const [firstFrameFailed, setFirstFrameFailed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      setFirstFrameFailed(true);
      return;
    }

    let disposed = false;
    const images: (HTMLImageElement | undefined)[] = new Array(FRAME_COUNT + 1);
    const loaded: boolean[] = new Array(FRAME_COUNT + 1).fill(false);
    let currentDrawn = 0; // frame number currently on the canvas
    let targetFrame = 1;
    let rafId = 0;
    let ticking = false;
    let anyLoaded = false;
    // setReady must fire exactly once — draw() runs inside the 60fps scroll
    // loop, and repeated setState calls there would churn React needlessly.
    let readyAnnounced = false;

    const sizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { clientWidth, clientHeight } = canvas;
      canvas.width = Math.round(clientWidth * dpr);
      canvas.height = Math.round(clientHeight * dpr);
    };

    /** Nearest loaded frame to `n` (frames may still be downloading). */
    const nearestLoaded = (n: number): number => {
      if (loaded[n]) return n;
      for (let d = 1; d < FRAME_COUNT; d++) {
        if (n - d >= 1 && loaded[n - d]) return n - d;
        if (n + d <= FRAME_COUNT && loaded[n + d]) return n + d;
      }
      return 0;
    };

    const draw = (force = false) => {
      const n = nearestLoaded(targetFrame);
      if (n === 0 || (n === currentDrawn && !force)) return;
      const img = images[n];
      if (!img) return;
      // cover-fit: fill the viewport, crop overflow, keep aspect ratio
      const cw = canvas.width;
      const ch = canvas.height;
      const scale = Math.max(cw / img.naturalWidth, ch / img.naturalHeight);
      const dw = img.naturalWidth * scale;
      const dh = img.naturalHeight * scale;
      ctx.drawImage(img, (cw - dw) / 2, (ch - dh) / 2, dw, dh);
      currentDrawn = n;
      if (!readyAnnounced) {
        readyAnnounced = true;
        setReady(true);
      }
    };

    const update = (force = false) => {
      const rect = section.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const progress =
        scrollable > 0 ? Math.min(1, Math.max(0, -rect.top / scrollable)) : 0;
      targetFrame = 1 + Math.round(progress * (FRAME_COUNT - 1));
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`;
      }
      // Products settle over the first 51% of the journey (frames 01 → 25);
      // index.css derives all child opacity/translate motion from --pp, so
      // this stays a single style write per frame — scroll-bound, no lag.
      const productProgress = Math.min(progress / 0.51, 1);
      if (stickyRef.current) {
        stickyRef.current.style.setProperty("--pp", productProgress.toFixed(4));
      }
      if (heroCopyRef.current) {
        // Fully faded copy must also leave the tab order / AT tree.
        heroCopyRef.current.classList.toggle("is-passed", progress > 0.5);
      }
      if (productsRef.current) {
        // Cards become hoverable/scrollable only once settled, so the
        // overlay never intercepts input meant for the hero copy.
        productsRef.current.classList.toggle("is-settled", productProgress >= 0.995);
      }
      draw(force);
    };

    const requestUpdate = () => {
      if (ticking) return;
      ticking = true;
      rafId = requestAnimationFrame(() => {
        ticking = false;
        update();
      });
    };

    const onResize = () => {
      if (ticking) return;
      ticking = true;
      rafId = requestAnimationFrame(() => {
        ticking = false;
        sizeCanvas();
        update(true);
      });
    };

    const loadFrame = (n: number, onSettled: () => void) => {
      const img = new Image();
      img.decoding = "async";
      img.onload = () => {
        if (disposed) return;
        loaded[n] = true;
        anyLoaded = true;
        // Redraw if this frame is closer to the target than what's on screen.
        if (
          currentDrawn === 0 ||
          Math.abs(n - targetFrame) < Math.abs(currentDrawn - targetFrame)
        ) {
          draw(true);
        }
        onSettled();
      };
      img.onerror = () => {
        if (disposed) return;
        if (n === 1 && !anyLoaded) setFirstFrameFailed(true);
        onSettled();
      };
      img.src = frameSrc(n);
      images[n] = img;
    };

    // Staggered preload. Phase 1: only the frames the visitor sees first —
    // 01 (opening visual) and 48 (arrival visual) — so they don't compete
    // with the page's own critical requests. Phase 2: the remaining sequence
    // in the background with limited concurrency, started once the priority
    // frames settle or after a short safety delay, whichever comes first.
    const rest: number[] = [];
    for (let i = 2; i < FRAME_COUNT; i++) rest.push(i);
    let restIndex = 0;
    let restStarted = false;

    const loadNextRest = () => {
      if (disposed || restIndex >= rest.length) return;
      loadFrame(rest[restIndex++], loadNextRest);
    };

    const startRest = () => {
      if (restStarted || disposed) return;
      restStarted = true;
      const CONCURRENCY = 3;
      for (let i = 0; i < CONCURRENCY; i++) loadNextRest();
    };

    let prioritySettled = 0;
    const onPrioritySettled = () => {
      if (++prioritySettled >= 2) startRest();
    };

    sizeCanvas();
    update(true);
    loadFrame(1, onPrioritySettled);
    loadFrame(FRAME_COUNT, onPrioritySettled);
    // Safety net: if the priority requests stall, still begin the sequence.
    const restTimer = window.setTimeout(startRest, 1500);

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      disposed = true;
      window.clearTimeout(restTimer);
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    // Tall scroll runway: the sticky viewport inside scrubs frames 01 → 48.
    <section ref={sectionRef} id="home" className="relative h-[250vh] md:h-[300vh]">
      <div
        ref={stickyRef}
        className="sticky top-0 flex h-svh items-end overflow-hidden"
        // Products start hidden; the scroll loop overwrites this every frame.
        style={{ "--pp": 0 } as CSSProperties}
      >
        <div className="absolute inset-0" role="img" aria-label={t.hero.visualAlt}>
          <FallbackBackdrop />
          {/* Frame 01 as an <img> under the canvas: instant first visual and a
              safety net until the canvas has drawn (hidden if it 404s). */}
          {!firstFrameFailed && !ready && (
            <img
              src={frameSrc(1)}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              onError={() => setFirstFrameFailed(true)}
            />
          )}
          <canvas
            ref={canvasRef}
            className={`absolute inset-0 h-full w-full transition-opacity duration-300 ${
              ready ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden="true"
          />
        </div>

        <div ref={heroCopyRef} className="hero-copy relative z-[5] w-full">
          <HeroContent showScrollHint />
        </div>

        {children && (
          <>
            {/* Soft paper scrim keeps the settling cards readable over the
                moving journey; its opacity follows --pp. */}
            <div className="hero-products-scrim absolute inset-0 z-10" aria-hidden="true" />
            {/* overflow-y-auto is a safety valve: if the dye range is taller
                than a short viewport, it scrolls internally once settled and
                then chains back to normal page scrolling. */}
            <div ref={productsRef} className="hero-products absolute inset-0 z-20 overflow-y-auto">
              <div className="flex min-h-full flex-col py-24 sm:py-28">
                <div className="my-auto w-full">{children}</div>
              </div>
            </div>
          </>
        )}

        {/* Journey progress line along the bottom edge of the sticky view */}
        <div
          className="absolute inset-x-0 bottom-0 z-30 h-[3px] bg-navy/10"
          aria-hidden="true"
        >
          <div
            ref={progressRef}
            className="h-full w-full origin-left bg-dye-indigo rtl:origin-right"
            style={{ transform: "scaleX(0)" }}
          />
        </div>
      </div>

      {/* #dyes anchor: the last viewport-height of the runway, where
          progress = 1 (frame 48, products fully settled). Nav links land on
          the finished handoff instead of a mid-animation state. #products is
          an external-friendly alias for the same spot (kept as a separate
          element — one element can't carry two ids). */}
      {children && (
        <>
          <div id="dyes" className="pointer-events-none absolute inset-x-0 bottom-0 h-svh" />
          <div id="products" className="pointer-events-none absolute inset-x-0 bottom-0 h-svh" />
        </>
      )}
    </section>
  );
}

export default function Hero({ children }: { children?: ReactNode }) {
  const prefersReducedMotion = usePrefersReducedMotion();
  return prefersReducedMotion ? (
    <StaticHero>{children}</StaticHero>
  ) : (
    <ScrubHero>{children}</ScrubHero>
  );
}
