import { useLanguage } from "../i18n/LanguageContext";
import { WHATSAPP_DISPLAY, WHATSAPP_LINKS } from "../data/content";
import { WhatsAppIcon } from "./Icons";

export default function Footer() {
  const { t, lang } = useLanguage();
  const year = new Date().getFullYear();

  const links = [
    { href: "#dyes", label: t.nav.dyes },
    { href: "#industries", label: t.nav.industries },
    { href: "#sourcing", label: t.nav.sourcing },
    { href: "#process", label: t.nav.process },
    { href: "#about", label: t.nav.about },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <footer className="bg-navy">
      <div className="swatch-band h-1" aria-hidden="true" />
      {/* Extra mobile bottom padding keeps footer links and the copyright
          line clear of the floating WhatsApp button (56px + offsets). */}
      <div className="mx-auto max-w-[1400px] px-4 pt-14 pb-[calc(7rem+env(safe-area-inset-bottom))] sm:px-6 md:pb-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <span className="inline-block rounded-lg bg-white px-2.5 py-1.5 shadow-sm">
              <img src={`${import.meta.env.BASE_URL}logo.png`} alt={t.brand.logoAlt} className="h-9 w-auto" />
            </span>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              {t.footer.tagline}
            </p>
          </div>

          {/* Anchor links */}
          <nav aria-label={t.footer.linksLabel}>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/80">
              {t.footer.linksLabel}
            </p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* WhatsApp contact */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/80">
              {t.footer.contactLabel}
            </p>
            <p dir="ltr" className="text-sm font-semibold tracking-wide text-white">
              {WHATSAPP_DISPLAY}
            </p>
            <a
              href={WHATSAPP_LINKS[lang]}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#25d366]/40 bg-[#25d366]/10 px-5 py-2.5 text-sm font-semibold text-[#25d366] transition-all duration-300 hover:bg-[#25d366] hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25d366]"
            >
              <WhatsAppIcon className="h-4 w-4" />
              <span>{t.footer.cta}</span>
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-center text-xs text-white/50">
            © {year} {t.brand.name} — {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
