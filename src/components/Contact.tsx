import { useLanguage } from "../i18n/LanguageContext";
import { WHATSAPP_DISPLAY } from "../data/content";
import Reveal from "./Reveal";
import WhatsAppButton from "./WhatsAppButton";
import { CheckIcon, WhatsAppIcon } from "./Icons";

/** Final CTA — a deep navy panel with a strong WhatsApp-first enquiry path. */
export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl">
          <div className="relative overflow-hidden rounded-3xl bg-navy p-8 text-center shadow-xl sm:p-10 md:p-14">
            <div className="swatch-band absolute inset-x-0 top-0 h-1" aria-hidden="true" />

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
              {t.contact.eyebrow}
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {t.contact.title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              {t.contact.sub}
            </p>

            <div className="mx-auto mt-9 max-w-lg rounded-2xl border border-white/15 bg-white/5 p-6 text-start">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/80">
                {t.contact.checklistLabel}
              </p>
              <ul className="grid gap-3 sm:grid-cols-2">
                {t.contact.checklist.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckIcon className="mt-0.5 h-4.5 w-4.5 shrink-0 text-[#25d366]" />
                    <span className="text-sm leading-relaxed text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-9 flex flex-col items-center gap-5">
              <p className="flex items-center gap-2.5 text-white/80">
                <WhatsAppIcon className="h-5 w-5 text-[#25d366]" />
                <span className="text-sm font-medium">{t.contact.numberLabel}:</span>
                {/* Force LTR so the phone number never reverses under RTL */}
                <span dir="ltr" className="text-base font-semibold tracking-wide text-white">
                  {WHATSAPP_DISPLAY}
                </span>
              </p>
              <WhatsAppButton label={t.contact.cta} className="w-full sm:w-auto" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
