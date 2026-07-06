/**
 * Centralized bilingual content for the Saud Traders website.
 *
 * Every user-facing string lives here with an English (`en`) and Urdu (`ur`)
 * version. The Urdu tree is typed against the English tree, so a missing
 * translation is a compile-time error.
 */

export type Lang = "en" | "ur";

// TODO: Placeholder WhatsApp number. Must be replaced with the real number before production.
export const WHATSAPP_DISPLAY = "+92 300 1234567";
const WHATSAPP_NUMBER = "923001234567";

const URDU_GREETING =
  "السلام علیکم سعود ٹریڈرز، مجھے ٹیکسٹائل ڈائز کی کوٹیشن درکار ہے۔";

/** Language-appropriate pre-filled WhatsApp chat links. */
export const WHATSAPP_LINKS: Record<Lang, string> = {
  en: `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20Saud%20Traders%2C%20I%20would%20like%20to%20request%20a%20quote%20for%20textile%20dyes.`,
  ur: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(URDU_GREETING)}`,
};

const en = {
  brand: {
    name: "Saud Traders",
    logoAlt: "Saud Traders logo",
  },
  nav: {
    home: "Home",
    dyes: "Dye Categories",
    industries: "Who We Supply",
    process: "Enquiry Process",
    sourcing: "Sourcing",
    about: "About",
    contact: "Contact",
    menuOpen: "Open navigation menu",
    menuClose: "Close navigation menu",
    mainLabel: "Main navigation",
    mobileLabel: "Mobile navigation",
  },
  langToggle: {
    label: "Switch language",
    english: "English",
    urdu: "اردو",
  },
  whatsapp: {
    header: "WhatsApp Quote",
    floating: "Chat with Saud Traders on WhatsApp",
  },
  hero: {
    badge: "B2B Textile Dye Importer • Exporter • Distributor",
    headline: "Industrial Textile Dye Supply",
    headlineAccent: "for B2B Buyers",
    sub: "Saud Traders is a Pakistan-based importer, exporter, distributor and sourcing partner for industrial textile dyes — reactive, disperse, acid, vat, sulphur and pigment ranges for mills, dyeing units, garment factories, exporters and wholesalers.",
    ctaPrimary: "Send Procurement Enquiry",
    ctaSecondary: "View Dye Categories",
    roles: ["Importer", "Exporter", "Distributor", "Sourcing Partner"],
    scrollHint: "Scroll to continue",
    visualAlt:
      "A white cargo truck travels along a sunlit road and arrives at a textile factory — a picture of dependable textile dye supply.",
  },
  benefits: {
    eyebrow: "Why Saud Traders",
    title: "Built for Industrial Buyers",
    sub: "A trading partner made for procurement teams — focused, straightforward and easy to reach.",
    cards: [
      {
        title: "Textile-Dye Focused",
        body: "One clear specialisation: industrial textile dyes. No unrelated product lines — just colour supply for textile production.",
      },
      {
        title: "Pakistan-Based B2B Supply",
        body: "Based in Pakistan and built for industrial buyers — mills, dyeing units, garment factories, exporters and wholesalers.",
      },
      {
        title: "Import, Export, Distribution & Sourcing",
        body: "A single trading partner covering import, export, distribution, trading and sourcing of textile dye solutions.",
      },
      {
        title: "WhatsApp-First Enquiries",
        body: "Send your requirement on WhatsApp and receive a clear response on quantity, packing and supply — no forms, no waiting.",
      },
    ],
  },
  dyeRange: {
    eyebrow: "Products",
    title: "Dye Categories",
    sub: "Core industrial dye classes supplied for textile applications. Share your shade card or requirement for availability and pricing.",
    items: [
      {
        name: "Reactive Dyes",
        use: "Cotton, viscose & cellulosic fibres",
        desc: "Widely used for cotton knits and wovens where bright shades and good wet fastness are required.",
      },
      {
        name: "Disperse Dyes",
        use: "Polyester & synthetic fibres",
        desc: "The standard choice for polyester dyeing and printing across apparel and home-textile production.",
      },
      {
        name: "Acid Dyes",
        use: "Wool, silk & nylon",
        desc: "Used on protein and polyamide fibres where levelness and depth of shade matter.",
      },
      {
        name: "Vat Dyes",
        use: "High-fastness cellulosic dyeing",
        desc: "Preferred for workwear, uniforms and applications demanding strong wash and light fastness.",
      },
      {
        name: "Sulphur Dyes",
        use: "Deep, economical dark shades",
        desc: "An economical route to deep blacks, blues and browns on cotton, including denim applications.",
      },
      {
        name: "Pigment Emulsions",
        use: "Printing & padding applications",
        desc: "Versatile colour systems for textile printing and pad application across fibre types.",
      },
    ],
    note: "Availability varies by shade and quantity — message us on WhatsApp for current stock.",
  },
  industries: {
    eyebrow: "Our Customers",
    title: "Who We Supply",
    sub: "Procurement-ready dye supply for colour-critical operations across Pakistan, with selected international customers.",
    items: [
      {
        name: "Textile Mills",
        desc: "Volume dye supply for spinning-to-finishing operations, with dependable repeat orders.",
      },
      {
        name: "Garment Factories",
        desc: "Shade-matched colour supply supporting garment dyeing and washing programmes.",
      },
      {
        name: "Dyeing Units",
        desc: "Dependable dye classes for commission dyeing houses running daily production.",
      },
      {
        name: "Exporters",
        desc: "Supply planning aligned with export order timelines and buyer shade requirements.",
      },
      {
        name: "Wholesalers",
        desc: "Trade quantities and repeat availability for dye wholesalers and distributors.",
      },
      {
        name: "Fabric Processors",
        desc: "Dye supply for fabric processing and finishing lines, matched to your production specification.",
      },
    ],
  },
  process: {
    eyebrow: "How It Works",
    title: "Get a Quote in Four Simple Steps",
    sub: "Designed for busy procurement teams — no forms, no waiting rooms.",
    steps: [
      {
        title: "Send a Message on WhatsApp",
        desc: "Start the conversation with a simple hello — no registration needed.",
      },
      {
        title: "Share Your Requirement",
        desc: "Tell us the dye type, shade, quantity and application.",
      },
      {
        title: "Receive Your Quote",
        desc: "Get clear pricing along with packing and delivery details.",
      },
      {
        title: "Confirm Your Order",
        desc: "Approve the quote and we arrange supply and dispatch.",
      },
    ],
    cta: "Start on WhatsApp",
  },
  sourcing: {
    eyebrow: "Procurement & Sourcing",
    title: "Procurement & Sourcing Support",
    sub: "From import to distribution, Saud Traders supports B2B buyers across the textile dye supply chain — with clear, WhatsApp-first enquiry handling.",
    pillars: [
      {
        title: "Import & Export",
        desc: "Textile dye ranges imported and exported through established trading relationships in Pakistan and selected international markets.",
      },
      {
        title: "Distribution & Trading",
        desc: "Trade and volume supply for industrial buyers, wholesalers and processors, planned around your production schedule.",
      },
      {
        title: "Sourcing & Enquiry Support",
        desc: "Tell us the dye class, shade and quantity — we source against your requirement and respond with a clear quotation.",
      },
    ],
  },
  about: {
    eyebrow: "Who We Are",
    title: "About Saud Traders",
    p1: "Saud Traders is a Pakistan-based B2B trading company focused on textile dyes. We import, export, distribute and source industrial dye ranges for colour-critical businesses.",
    p2: "Our customers include textile mills, garment factories, dyeing units, exporters, wholesalers and fabric processors. Supply is centred on Pakistan, with selected international customers served on request.",
    facts: [
      "Based in Pakistan",
      "B2B industrial focus",
      "Import • Export • Distribution",
      "Selected international supply",
    ],
  },
  contact: {
    eyebrow: "Get In Touch",
    title: "Send Your Procurement Enquiry",
    sub: "Message us on WhatsApp with the details below, and our team will respond with a clear quote.",
    checklistLabel: "Include in your message:",
    checklist: [
      "Dye type (e.g. reactive, disperse)",
      "Shade or colour reference",
      "Required quantity",
      "Application, fabric or end use",
    ],
    numberLabel: "WhatsApp",
    cta: "Chat on WhatsApp",
  },
  footer: {
    tagline: "Pakistan-based B2B importer, exporter, distributor and sourcing partner for premium textile dyes.",
    linksLabel: "Quick Links",
    contactLabel: "Contact",
    cta: "WhatsApp Us",
    rights: "All rights reserved.",
  },
};

const ur: typeof en = {
  brand: {
    name: "سعود ٹریڈرز",
    logoAlt: "سعود ٹریڈرز کا لوگو",
  },
  nav: {
    home: "ہوم",
    dyes: "ڈائی کیٹیگریز",
    industries: "ہمارے صارفین",
    process: "انکوائری کا طریقہ",
    sourcing: "سورسنگ",
    about: "ہمارے بارے میں",
    contact: "رابطہ",
    menuOpen: "نیویگیشن مینیو کھولیں",
    menuClose: "نیویگیشن مینیو بند کریں",
    mainLabel: "مرکزی نیویگیشن",
    mobileLabel: "موبائل نیویگیشن",
  },
  langToggle: {
    label: "زبان تبدیل کریں",
    english: "English",
    urdu: "اردو",
  },
  whatsapp: {
    header: "واٹس ایپ کوٹیشن",
    floating: "سعود ٹریڈرز سے واٹس ایپ پر رابطہ کریں",
  },
  hero: {
    badge: "بی ٹو بی ٹیکسٹائل ڈائی امپورٹر • ایکسپورٹر • ڈسٹری بیوٹر",
    headline: "بی ٹو بی خریداروں کے لیے",
    headlineAccent: "صنعتی ٹیکسٹائل ڈائی سپلائی",
    sub: "سعود ٹریڈرز صنعتی ٹیکسٹائل ڈائیز کے لیے پاکستان میں قائم امپورٹر، ایکسپورٹر، ڈسٹری بیوٹر اور سورسنگ پارٹنر ہے — ملز، ڈائینگ یونٹس، گارمنٹ فیکٹریوں، ایکسپورٹرز اور ہول سیلرز کے لیے ری ایکٹو، ڈسپرس، ایسڈ، ویٹ، سلفر اور پگمنٹ رینجز۔",
    ctaPrimary: "پروکیورمنٹ انکوائری بھیجیں",
    ctaSecondary: "ڈائی کیٹیگریز دیکھیں",
    roles: ["امپورٹر", "ایکسپورٹر", "ڈسٹری بیوٹر", "سورسنگ پارٹنر"],
    scrollHint: "جاری رکھنے کے لیے اسکرول کریں",
    visualAlt:
      "ایک سفید کارگو ٹرک دھوپ والی سڑک پر سفر کرتے ہوئے ٹیکسٹائل فیکٹری پہنچتا ہے — قابلِ اعتماد ٹیکسٹائل ڈائی سپلائی کی عکاسی۔",
  },
  benefits: {
    eyebrow: "سعود ٹریڈرز کیوں",
    title: "صنعتی خریداروں کے لیے تیار",
    sub: "پروکیورمنٹ ٹیموں کے لیے بنایا گیا تجارتی پارٹنر — مرکوز، سیدھا اور رابطے میں آسان۔",
    cards: [
      {
        title: "ٹیکسٹائل ڈائی پر مرکوز",
        body: "ایک واضح تخصص: صنعتی ٹیکسٹائل ڈائز۔ کوئی غیر متعلقہ پروڈکٹ لائنز نہیں — صرف ٹیکسٹائل پروڈکشن کے لیے کلر سپلائی۔",
      },
      {
        title: "پاکستان میں قائم بی ٹو بی سپلائی",
        body: "پاکستان میں قائم اور صنعتی خریداروں کے لیے تیار — ملز، ڈائینگ یونٹس، گارمنٹ فیکٹریاں، ایکسپورٹرز اور ہول سیلرز۔",
      },
      {
        title: "امپورٹ، ایکسپورٹ، ڈسٹری بیوشن اور سورسنگ",
        body: "ٹیکسٹائل ڈائی سلوشنز کی امپورٹ، ایکسپورٹ، ڈسٹری بیوشن، ٹریڈنگ اور سورسنگ کے لیے ایک ہی تجارتی پارٹنر۔",
      },
      {
        title: "واٹس ایپ فرسٹ انکوائری",
        body: "اپنی ضرورت واٹس ایپ پر بھیجیں اور مقدار، پیکنگ اور سپلائی پر واضح جواب حاصل کریں — نہ فارم، نہ انتظار۔",
      },
    ],
  },
  dyeRange: {
    eyebrow: "مصنوعات",
    title: "ڈائی کیٹیگریز",
    sub: "ٹیکسٹائل ایپلی کیشنز کے لیے فراہم کی جانے والی بنیادی صنعتی ڈائی کلاسز۔ دستیابی اور قیمت کے لیے اپنا شیڈ کارڈ یا ضرورت شیئر کریں۔",
    items: [
      {
        name: "ری ایکٹو ڈائز",
        use: "کاٹن، وسکوز اور سیلولوزک فائبرز کے لیے",
        desc: "کاٹن نِٹس اور بُنے ہوئے کپڑوں کے لیے وسیع پیمانے پر استعمال، جہاں شوخ شیڈز اور اچھی ویٹ فاسٹنس درکار ہو۔",
      },
      {
        name: "ڈسپرس ڈائز",
        use: "پولی ایسٹر اور مصنوعی فائبرز کے لیے",
        desc: "ملبوسات اور ہوم ٹیکسٹائل پروڈکشن میں پولی ایسٹر کی ڈائینگ اور پرنٹنگ کے لیے معیاری انتخاب۔",
      },
      {
        name: "ایسڈ ڈائز",
        use: "اون، ریشم اور نائلون کے لیے",
        desc: "پروٹین اور پولی امائیڈ فائبرز کے لیے، جہاں یکساں رنگت اور شیڈ کی گہرائی اہم ہو۔",
      },
      {
        name: "ویٹ ڈائز",
        use: "اعلیٰ فاسٹنس سیلولوزک ڈائینگ کے لیے",
        desc: "ورک ویئر، یونیفارم اور ایسی ایپلی کیشنز کے لیے موزوں جہاں مضبوط واش اور لائٹ فاسٹنس درکار ہو۔",
      },
      {
        name: "سلفر ڈائز",
        use: "گہرے اور کفایتی ڈارک شیڈز کے لیے",
        desc: "کاٹن پر گہرے سیاہ، نیلے اور بھورے شیڈز کا کفایتی ذریعہ، بشمول ڈینم ایپلی کیشنز۔",
      },
      {
        name: "پگمنٹ ایمولشنز",
        use: "پرنٹنگ اور پیڈنگ ایپلی کیشنز کے لیے",
        desc: "مختلف فائبر اقسام پر ٹیکسٹائل پرنٹنگ اور پیڈ ایپلی کیشن کے لیے ہمہ گیر کلر سسٹمز۔",
      },
    ],
    note: "دستیابی شیڈ اور مقدار کے لحاظ سے مختلف ہو سکتی ہے — موجودہ اسٹاک کے لیے ہمیں واٹس ایپ پر پیغام بھیجیں۔",
  },
  industries: {
    eyebrow: "ہمارے صارفین",
    title: "ہم کن کو سپلائی کرتے ہیں",
    sub: "پاکستان بھر میں رنگوں پر انحصار کرنے والے اداروں کے لیے صنعتی خریداری کے تقاضوں کے مطابق ڈائی سپلائی، اور منتخب بین الاقوامی صارفین کے لیے بھی۔",
    items: [
      {
        name: "ٹیکسٹائل ملز",
        desc: "اسپننگ سے فنشنگ تک کے یونٹس کے لیے بڑی مقدار میں ڈائی سپلائی، قابلِ اعتماد ریپیٹ آرڈرز کے ساتھ۔",
      },
      {
        name: "گارمنٹ فیکٹریاں",
        desc: "گارمنٹ ڈائینگ اور واشنگ پروگرامز کے لیے شیڈ کے مطابق کلر سپلائی۔",
      },
      {
        name: "ڈائینگ یونٹس",
        desc: "روزانہ پروڈکشن چلانے والے کمیشن ڈائینگ ہاؤسز کے لیے قابلِ اعتماد ڈائی کلاسز۔",
      },
      {
        name: "ایکسپورٹرز",
        desc: "ایکسپورٹ آرڈر کے شیڈول اور خریدار کے شیڈ تقاضوں سے ہم آہنگ سپلائی پلاننگ۔",
      },
      {
        name: "ہول سیلرز",
        desc: "ڈائی ہول سیلرز اور ڈسٹری بیوٹرز کے لیے تجارتی مقدار اور مسلسل دستیابی۔",
      },
      {
        name: "فیبرک پروسیسرز",
        desc: "فیبرک پروسیسنگ اور فنشنگ لائنز کے لیے ڈائی سپلائی، آپ کی پروڈکشن کی طے شدہ تفصیلات کے مطابق۔",
      },
    ],
  },
  process: {
    eyebrow: "طریقہ کار",
    title: "چار آسان مراحل میں کوٹیشن حاصل کریں",
    sub: "مصروف پروکیورمنٹ ٹیموں کے لیے — نہ فارم، نہ انتظار۔",
    steps: [
      {
        title: "واٹس ایپ پر پیغام بھیجیں",
        desc: "سادہ سے سلام سے آغاز کریں — کسی رجسٹریشن کی ضرورت نہیں۔",
      },
      {
        title: "اپنی ضرورت بتائیں",
        desc: "ڈائی کی قسم، شیڈ، مقدار اور ایپلی کیشن بتائیں۔",
      },
      {
        title: "اپنی کوٹیشن حاصل کریں",
        desc: "پیکنگ اور ڈیلیوری کی تفصیلات کے ساتھ واضح قیمت حاصل کریں۔",
      },
      {
        title: "اپنا آرڈر کنفرم کریں",
        desc: "کوٹیشن منظور کریں، ہم سپلائی اور ترسیل کا انتظام کرتے ہیں۔",
      },
    ],
    cta: "واٹس ایپ پر آغاز کریں",
  },
  sourcing: {
    eyebrow: "پروکیورمنٹ اور سورسنگ",
    title: "پروکیورمنٹ اور سورسنگ سپورٹ",
    sub: "امپورٹ سے ڈسٹری بیوشن تک، سعود ٹریڈرز ٹیکسٹائل ڈائی سپلائی چین میں بی ٹو بی خریداروں کی معاونت کرتا ہے — واضح اور واٹس ایپ فرسٹ انکوائری کے ساتھ۔",
    pillars: [
      {
        title: "امپورٹ اور ایکسپورٹ",
        desc: "پاکستان اور منتخب بین الاقوامی منڈیوں میں قائم تجارتی تعلقات کے ذریعے ٹیکسٹائل ڈائی رینج کی امپورٹ اور ایکسپورٹ۔",
      },
      {
        title: "ڈسٹری بیوشن اور ٹریڈنگ",
        desc: "صنعتی خریداروں، ہول سیلرز اور پروسیسرز کے لیے تجارتی اور بڑی مقدار میں سپلائی، آپ کے پروڈکشن شیڈول کے مطابق۔",
      },
      {
        title: "سورسنگ اور انکوائری سپورٹ",
        desc: "ہمیں ڈائی کلاس، شیڈ اور مقدار بتائیں — ہم آپ کی ضرورت کے مطابق سورس کرتے ہیں اور واضح کوٹیشن کے ساتھ جواب دیتے ہیں۔",
      },
    ],
  },
  about: {
    eyebrow: "ہمارا تعارف",
    title: "سعود ٹریڈرز کے بارے میں",
    p1: "سعود ٹریڈرز پاکستان میں قائم ایک بی ٹو بی تجارتی کمپنی ہے جس کی توجہ ٹیکسٹائل ڈائز پر ہے۔ ہم رنگوں پر انحصار کرنے والے کاروباروں کے لیے صنعتی ڈائی رینج امپورٹ، ایکسپورٹ، ڈسٹری بیوٹ اور سورس کرتے ہیں۔",
    p2: "ہمارے صارفین میں ٹیکسٹائل ملز، گارمنٹ فیکٹریاں، ڈائینگ یونٹس، ایکسپورٹرز، ہول سیلرز اور فیبرک پروسیسرز شامل ہیں۔ سپلائی کا مرکز پاکستان ہے، جبکہ درخواست پر منتخب بین الاقوامی صارفین کو بھی خدمات فراہم کی جاتی ہیں۔",
    facts: [
      "پاکستان میں قائم",
      "بی ٹو بی صنعتی توجہ",
      "امپورٹ • ایکسپورٹ • ڈسٹری بیوشن",
      "منتخب بین الاقوامی سپلائی",
    ],
  },
  contact: {
    eyebrow: "رابطہ کریں",
    title: "اپنی پروکیورمنٹ انکوائری بھیجیں",
    sub: "نیچے دی گئی تفصیلات کے ساتھ ہمیں واٹس ایپ پر پیغام بھیجیں، ہماری ٹیم واضح کوٹیشن کے ساتھ جواب دے گی۔",
    checklistLabel: "اپنے پیغام میں شامل کریں:",
    checklist: [
      "ڈائی کی قسم (مثلاً ری ایکٹو، ڈسپرس)",
      "شیڈ یا کلر ریفرنس",
      "مطلوبہ مقدار",
      "ایپلی کیشن، فیبرک یا استعمال",
    ],
    numberLabel: "واٹس ایپ",
    cta: "واٹس ایپ پر بات کریں",
  },
  footer: {
    tagline: "پریمیم ٹیکسٹائل ڈائز کے لیے پاکستان میں قائم بی ٹو بی امپورٹر، ایکسپورٹر، ڈسٹری بیوٹر اور سورسنگ پارٹنر۔",
    linksLabel: "فوری لنکس",
    contactLabel: "رابطہ",
    cta: "ہمیں واٹس ایپ کریں",
    rights: "جملہ حقوق محفوظ ہیں۔",
  },
};

export const content: Record<Lang, typeof en> = { en, ur };

/** Shape of one language's content tree — what components consume via `t`. */
export type Content = typeof en;
