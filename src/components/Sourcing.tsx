import { useLanguage } from "../i18n/LanguageContext";
import { content } from "../data/content";
import Reveal from "./Reveal";
import { BoxIcon, ChatIcon, GlobeIcon } from "./Icons";

/** Icon + dye accent per pillar, in content order. */
const PILLAR_STYLES = [
  { Icon: GlobeIcon, color: "text-dye-cyan" },
  { Icon: BoxIcon, color: "text-dye-indigo" },
  { Icon: ChatIcon, color: "text-dye-emerald" },
];

// PILLAR_STYLES pairs with t.sourcing.pillars by position. Fail loudly in dev
// if the content array changes length without a matching style entry.
if (import.meta.env.DEV && PILLAR_STYLES.length !== content.en.sourcing.pillars.length) {
  console.error(
    "Sourcing: PILLAR_STYLES must have one entry per pillar in data/content.ts (sourcing.pillars).",
  );
}

/** Procurement & sourcing support — import, export, distribution, trading. */
export default function Sourcing() {
  const { t } = useLanguage();

  return (
    <section id="sourcing" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-line bg-white shadow-sm">
            <div className="swatch-band absolute inset-x-0 top-0 h-1" aria-hidden="true" />

            <div className="grid gap-10 p-8 md:p-14 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-dye-cyan">
                  {t.sourcing.eyebrow}
                </p>
                <h2 className="text-3xl font-bold tracking-tight text-ink-strong sm:text-4xl">
                  {t.sourcing.title}
                </h2>
                <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
                  {t.sourcing.sub}
                </p>
              </div>

              <ul className="flex flex-col justify-center gap-7">
                {t.sourcing.pillars.map((pillar, i) => {
                  const { Icon, color } = PILLAR_STYLES[i % PILLAR_STYLES.length];
                  return (
                    <li key={pillar.title} className="flex items-start gap-4">
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line bg-paper ${color}`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-ink-strong">{pillar.title}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                          {pillar.desc}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
