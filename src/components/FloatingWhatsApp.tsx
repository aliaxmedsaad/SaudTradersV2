import { useLanguage } from "../i18n/LanguageContext";
import { WHATSAPP_LINKS } from "../data/content";
import { WhatsAppIcon } from "./Icons";

/**
 * Always-available floating WhatsApp launcher, pinned to the trailing edge
 * (bottom-right in LTR, bottom-left in RTL). Primary mobile conversion path.
 *
 * Safe-area-aware placement: the bottom offset clears the iOS home bar, and
 * the logical `end` offset (taking the larger of both notch insets) keeps
 * the button on the trailing edge in LTR and RTL alike. The footer reserves
 * matching bottom padding on mobile so no links sit underneath it.
 */
export default function FloatingWhatsApp() {
  const { t, lang } = useLanguage();

  return (
    <a
      href={WHATSAPP_LINKS[lang]}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.whatsapp.floating}
      className="animate-wa-pulse fixed bottom-[calc(1.25rem+env(safe-area-inset-bottom))] end-[max(1.25rem,env(safe-area-inset-right),env(safe-area-inset-left))] z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-navy shadow-xl transition-transform duration-300 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25d366]"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
