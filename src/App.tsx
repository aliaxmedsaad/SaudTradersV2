import { LanguageProvider } from "./i18n/LanguageContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import DyeRange from "./components/DyeRange";
import Industries from "./components/Industries";
import Sourcing from "./components/Sourcing";
import Benefits from "./components/Benefits";
import QuoteProcess from "./components/QuoteProcess";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-paper text-ink antialiased">
        <Header />
        <main>
          {/* DyeRange rides inside Hero's sticky viewport: the truck journey
              (frames 01→48) and the product cards share one scroll handoff. */}
          <Hero>
            <DyeRange />
          </Hero>
          <Industries />
          <Sourcing />
          <Benefits />
          <QuoteProcess />
          <About />
          <Contact />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </LanguageProvider>
  );
}
