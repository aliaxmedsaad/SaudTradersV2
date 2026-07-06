import { useLanguage } from "../i18n/LanguageContext";
import Reveal from "./Reveal";
import { CheckCircleIcon } from "./Icons";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-dye-cyan">
              {t.about.eyebrow}
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-ink-strong sm:text-4xl">
              {t.about.title}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink sm:text-lg">{t.about.p1}</p>
            <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">{t.about.p2}</p>
          </Reveal>

          <Reveal delay={150}>
            <div className="rounded-2xl border border-line bg-white p-8 shadow-sm md:p-10">
              <div className="swatch-band mb-8 h-1.5 w-24 rounded-full" aria-hidden="true" />
              <ul className="flex flex-col gap-5">
                {t.about.facts.map((fact) => (
                  <li key={fact} className="flex items-center gap-3.5">
                    <CheckCircleIcon className="h-6 w-6 shrink-0 text-dye-emerald" />
                    <span className="text-base font-medium text-ink">{fact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
