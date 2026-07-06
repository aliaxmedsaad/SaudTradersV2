import { useLanguage } from "../i18n/LanguageContext";
import { WHATSAPP_LINKS } from "../data/content";
import { WhatsAppIcon } from "./Icons";

interface WhatsAppButtonProps {
  label: string;
  size?: "sm" | "lg";
  className?: string;
}

/**
 * Primary conversion CTA. Opens a language-appropriate pre-filled
 * WhatsApp chat in a new tab.
 */
export default function WhatsAppButton({ label, size = "lg", className = "" }: WhatsAppButtonProps) {
  const { lang } = useLanguage();
  const sizing =
    size === "lg" ? "px-7 py-3.5 text-base gap-2.5" : "px-4 py-2 text-sm gap-2";

  return (
    <a
      href={WHATSAPP_LINKS[lang]}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-full bg-[#25d366] font-semibold text-navy shadow-lg shadow-[#25d366]/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#30e574] hover:shadow-xl hover:shadow-[#25d366]/35 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25d366] ${sizing} ${className}`}
    >
      <WhatsAppIcon className={size === "lg" ? "h-5 w-5" : "h-4 w-4"} />
      <span>{label}</span>
    </a>
  );
}
