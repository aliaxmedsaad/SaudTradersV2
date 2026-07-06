import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { content } from "../data/content";
import type { Content, Lang } from "../data/content";

type Dir = "ltr" | "rtl";

interface LanguageContextValue {
  lang: Lang;
  dir: Dir;
  /** Current language's content tree. */
  t: Content;
  setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const LANG_STORAGE_KEY = "saud-traders-lang";

/**
 * Restore the visitor's saved language. Guarded so environments without
 * storage (SSR, blocked cookies/storage, private modes) fall back to English.
 */
function getInitialLang(): Lang {
  try {
    if (typeof window === "undefined" || !window.localStorage) return "en";
    const stored = window.localStorage.getItem(LANG_STORAGE_KEY);
    return stored === "ur" || stored === "en" ? stored : "en";
  } catch {
    return "en";
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(getInitialLang);
  const dir: Dir = lang === "ur" ? "rtl" : "ltr";

  // Persist the choice; best-effort only, never block the UI on storage.
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(LANG_STORAGE_KEY, lang);
    } catch {
      // Storage unavailable — the in-memory state still works for the session.
    }
  }, [lang]);

  // Keep <html lang dir> in sync so RTL layout, fonts and assistive
  // technology all follow the selected language.
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    document.title =
      lang === "ur"
        ? "سعود ٹریڈرز — صنعتی خریداروں کے لیے ٹیکسٹائل ڈائی سپلائی"
        : "Saud Traders — Textile Dye Supply for Industrial Buyers";
  }, [lang, dir]);

  return (
    <LanguageContext.Provider value={{ lang, dir, t: content[lang], setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
