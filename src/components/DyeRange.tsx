import type { CSSProperties, ReactNode } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { content } from "../data/content";
import SectionHeading from "./SectionHeading";
import { DropletIcon } from "./Icons";

/**
 * One dye accent per class, in content order. Each card carries a "shade
 * strip" — descending tints of its accent, like a dyer's sample card.
 */
const SWATCHES = [
  { bar: "bg-dye-crimson", label: "text-dye-crimson" }, // Reactive
  { bar: "bg-dye-cyan", label: "text-dye-cyan" }, // Disperse
  { bar: "bg-dye-amber", label: "text-dye-amber" }, // Acid
  { bar: "bg-dye-indigo", label: "text-dye-indigo" }, // Vat
  { bar: "bg-navy", label: "text-ink" }, // Sulphur — deep darks
  { bar: "bg-dye-violet", label: "text-dye-violet" }, // Pigment emulsions
];

const TINT_STEPS = ["opacity-100", "opacity-70", "opacity-45", "opacity-20"];

// SWATCHES pairs with t.dyeRange.items by position. Fail loudly in dev if
// the content array changes length without a matching swatch.
if (import.meta.env.DEV && SWATCHES.length !== content.en.dyeRange.items.length) {
  console.error(
    "DyeRange: SWATCHES must have one entry per item in data/content.ts (dyeRange.items).",
  );
}

/** Scroll-handoff wrapper: fades/slides with the hero's --pp variable,
 *  offset by --stagger (0..1 fraction of the settle window). Outside the
 *  hero (reduced motion) --pp defaults to 1, so content is simply visible. */
function Fade({
  stagger,
  className = "",
  children,
}: {
  stagger: number;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`dye-fade ${className}`} style={{ "--stagger": stagger } as CSSProperties}>
      {children}
    </div>
  );
}

export default function DyeRange() {
  const { t } = useLanguage();

  return (
    <section className="w-full">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Frosted panel: keeps heading + cards readable over the moving
            journey frames without hiding them completely. */}
        <div className="rounded-3xl border border-white/60 bg-white/80 p-5 shadow-2xl shadow-navy/15 backdrop-blur-md sm:p-8 lg:p-10">
          <Fade stagger={0}>
            <SectionHeading
              eyebrow={t.dyeRange.eyebrow}
              title={t.dyeRange.title}
              sub={t.dyeRange.sub}
            />
          </Fade>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {t.dyeRange.items.map((item, i) => {
              const swatch = SWATCHES[i % SWATCHES.length];
              return (
                <Fade key={item.name} stagger={0.15 + i * 0.06} className="h-full">
                  <div className="group h-full rounded-2xl border border-line bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-7">
                    {/* Shade strip — the dye-swatch identity of the card */}
                    <div
                      className="mb-6 flex h-9 overflow-hidden rounded-lg border border-line"
                      aria-hidden="true"
                    >
                      {TINT_STEPS.map((tint) => (
                        <div key={tint} className={`flex-1 ${swatch.bar} ${tint}`} />
                      ))}
                    </div>
                    <h3 className="text-lg font-semibold text-ink-strong">{item.name}</h3>
                    <p className={`mt-1 text-sm font-medium ${swatch.label}`}>{item.use}</p>
                    <p className="mt-3 text-sm leading-relaxed text-ink-soft">{item.desc}</p>
                  </div>
                </Fade>
              );
            })}
          </div>

          <Fade stagger={0.55} className="mt-8">
            <p className="flex items-center justify-center gap-2 text-center text-sm text-ink-soft">
              <DropletIcon className="h-4 w-4 shrink-0 text-dye-cyan" />
              {t.dyeRange.note}
            </p>
          </Fade>
        </div>
      </div>
    </section>
  );
}
