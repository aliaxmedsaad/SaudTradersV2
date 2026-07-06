import { useLanguage } from "../i18n/LanguageContext";
import { content } from "../data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import WhatsAppButton from "./WhatsAppButton";
import { ChatIcon, CheckCircleIcon, ClipboardIcon, TagIcon } from "./Icons";

const STEP_ICONS = [ChatIcon, ClipboardIcon, TagIcon, CheckCircleIcon];

// STEP_ICONS pairs with t.process.steps by position. Fail loudly in dev if
// the content array changes length without a matching icon.
if (import.meta.env.DEV && STEP_ICONS.length !== content.en.process.steps.length) {
  console.error(
    "QuoteProcess: STEP_ICONS must have one entry per step in data/content.ts (process.steps).",
  );
}

export default function QuoteProcess() {
  const { t } = useLanguage();

  return (
    <section id="process" className="scroll-mt-24 bg-paper-soft py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t.process.eyebrow} title={t.process.title} sub={t.process.sub} />

        <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.process.steps.map((step, i) => {
            const Icon = STEP_ICONS[i % STEP_ICONS.length];
            return (
              <Reveal key={step.title} delay={i * 120} className="h-full">
                <li className="relative flex h-full flex-col rounded-2xl border border-line bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <Icon className="h-6 w-6 text-dye-indigo" />
                  </div>
                  <h3 className="text-base font-semibold text-ink-strong">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.desc}</p>
                </li>
              </Reveal>
            );
          })}
        </ol>

        <Reveal className="mt-12 text-center">
          <WhatsAppButton label={t.process.cta} />
        </Reveal>
      </div>
    </section>
  );
}
