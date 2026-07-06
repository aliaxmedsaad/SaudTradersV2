import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import WhatsAppButton from "./WhatsAppButton";
import { CloseIcon, MenuIcon } from "./Icons";

function LangToggle() {
  const { lang, setLang, t } = useLanguage();
  const base = "rounded-full px-3 py-1.5 transition-colors duration-200";
  const active = "bg-navy text-white";
  const idle = "text-ink-soft hover:text-ink";

  return (
    <div
      role="group"
      aria-label={t.langToggle.label}
      className="flex items-center rounded-full border border-line bg-white p-1 text-xs font-semibold"
    >
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`${base} ${lang === "en" ? active : idle}`}
      >
        {t.langToggle.english}
      </button>
      <button
        type="button"
        onClick={() => setLang("ur")}
        aria-pressed={lang === "ur"}
        lang="ur"
        className={`${base} ${lang === "ur" ? active : idle}`}
      >
        {t.langToggle.urdu}
      </button>
    </div>
  );
}

export default function Header() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mobile menu focus management: focus moves into the menu on open, Escape
  // closes it and returns focus to the hamburger. The cleanup removes the
  // listener, so StrictMode's double effect run cannot stack duplicates.
  //
  // Intentional distinction: only Escape (a pure "dismiss") restores focus to
  // the hamburger. Selecting a nav link is navigation — the menu just closes
  // and the browser's normal anchor focus/scroll behavior takes over, which
  // reads less awkwardly than yanking focus back to the header.
  useEffect(() => {
    if (!menuOpen) return;
    firstLinkRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const links = [
    { href: "#home", label: t.nav.home },
    { href: "#dyes", label: t.nav.dyes },
    { href: "#industries", label: t.nav.industries },
    { href: "#sourcing", label: t.nav.sourcing },
    { href: "#process", label: t.nav.process },
    { href: "#about", label: t.nav.about },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || menuOpen
          ? "border-b border-line bg-white/90 backdrop-blur-md"
          : "bg-gradient-to-b from-white/80 to-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-4 px-4 sm:px-6 md:h-20 lg:px-8">
        {/* Logo — white chip keeps the mark crisp over the hero imagery */}
        <a
          href="#home"
          className="flex shrink-0 items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dye-indigo"
        >
          <span className="rounded-lg border border-line bg-white px-2 py-1 shadow-sm">
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt={t.brand.logoAlt} className="h-8 w-auto md:h-9" />
          </span>
        </a>

        {/* Desktop navigation */}
        <nav aria-label={t.nav.mainLabel} className="hidden items-center gap-6 xl:gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-soft transition-colors duration-200 hover:text-dye-indigo"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LangToggle />
          <WhatsAppButton label={t.whatsapp.header} size="sm" />
        </div>

        {/* Mobile: language toggle + hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <LangToggle />
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? t.nav.menuClose : t.nav.menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-white text-ink transition-colors hover:bg-paper-soft"
          >
            {menuOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div id="mobile-menu" className="border-t border-line bg-white/95 lg:hidden">
          <nav
            aria-label={t.nav.mobileLabel}
            className="mx-auto flex max-w-[1400px] flex-col gap-1 px-4 py-4 sm:px-6"
          >
            {links.map((link, i) => (
              <a
                key={link.href}
                ref={i === 0 ? firstLinkRef : undefined}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-base font-medium text-ink transition-colors hover:bg-paper-soft hover:text-dye-indigo"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 px-3">
              <WhatsAppButton label={t.whatsapp.header} className="w-full" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
