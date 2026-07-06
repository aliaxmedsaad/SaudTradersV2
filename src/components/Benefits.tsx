import { useLanguage } from "../i18n/LanguageContext";
import { content } from "../data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { BoxIcon, ChatIcon, DropletIcon, MillIcon } from "./Icons";

/** Per-card icon + dye accent; copy comes from data/content.ts in card order. */
const CARD_STYLES = [
  { Icon: DropletIcon, accentText: "text-dye-crimson", accentBar: "bg-dye-crimson" },
  { Icon: MillIcon, accentText: "text-dye-indigo", accentBar: "bg-dye-indigo" },
  { Icon: BoxIcon, accentText: "text-dye-cyan", accentBar: "bg-dye-cyan" },
  { Icon: ChatIcon, accentText: "text-dye-emerald", accentBar: "bg-dye-emerald" },
];

// The styles above pair with t.benefits.cards by position. Fail loudly in
// dev if the content array changes length without a matching style entry.
if (import.meta.env.DEV && CARD_STYLES.length !== content.en.benefits.cards.length) {
  console.error(
    "Benefits: CARD_STYLES must have one entry per card in data/content.ts (benefits.cards).",
  );
}

export default function Benefits() {
  const { t } = useLanguage();

  return (
    <section id="why" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t.benefits.eyebrow} title={t.benefits.title} sub={t.benefits.sub} />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.benefits.cards.map((card, i) => {
            const { Icon, accentText, accentBar } = CARD_STYLES[i % CARD_STYLES.length];
            return (
              <Reveal key={card.title} delay={i * 100}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-line bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  <div className={`absolute inset-x-0 top-0 h-1 ${accentBar}`} aria-hidden="true" />
                  <div
                    className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-paper ${accentText}`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-ink-strong">{card.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{card.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
