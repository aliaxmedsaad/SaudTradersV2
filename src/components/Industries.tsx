import { useLanguage } from "../i18n/LanguageContext";
import { content } from "../data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import {
  BoxIcon,
  DropletIcon,
  GlobeIcon,
  LayersIcon,
  MillIcon,
  ShirtIcon,
} from "./Icons";

/** Icon + dye accent per customer type, in content order. */
const INDUSTRY_STYLES = [
  { Icon: MillIcon, color: "text-dye-indigo" },
  { Icon: ShirtIcon, color: "text-dye-crimson" },
  { Icon: DropletIcon, color: "text-dye-cyan" },
  { Icon: GlobeIcon, color: "text-dye-amber" },
  { Icon: BoxIcon, color: "text-dye-violet" },
  { Icon: LayersIcon, color: "text-dye-emerald" },
];

// INDUSTRY_STYLES pairs with t.industries.items by position. Fail loudly in
// dev if the content array changes length without a matching style entry.
if (import.meta.env.DEV && INDUSTRY_STYLES.length !== content.en.industries.items.length) {
  console.error(
    "Industries: INDUSTRY_STYLES must have one entry per item in data/content.ts (industries.items).",
  );
}

export default function Industries() {
  const { t } = useLanguage();

  return (
    <section id="industries" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.industries.eyebrow}
          title={t.industries.title}
          sub={t.industries.sub}
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.industries.items.map((item, i) => {
            const { Icon, color } = INDUSTRY_STYLES[i % INDUSTRY_STYLES.length];
            return (
              <Reveal key={item.name} delay={(i % 3) * 100}>
                <div className="flex h-full items-start gap-4 rounded-2xl border border-line bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line bg-paper ${color}`}
                  >
                    <Icon className="h-5.5 w-5.5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-ink-strong">{item.name}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
