import { useEffect } from "react";
import { Navbar } from "../components/imperfetto/Navbar";
import { Hero } from "../components/imperfetto/Hero";
import { Story } from "../components/imperfetto/Story";
import { Menu } from "../components/imperfetto/Menu";
import { Experience } from "../components/imperfetto/Experience";
import { Reviews } from "../components/imperfetto/Reviews";
import { Contact } from "../components/imperfetto/Contact";
import { Footer } from "../components/imperfetto/Footer";

export default function ImperfettoHome() {
  useEffect(() => {
    document.title = "Imperfetto Restaurant | Cucina molisana d'autore — Cantalupo nel Sannio";
  }, []);

  return (
    <div className="imperfetto bg-[#0E0E0E]">
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Menu />
        <Experience />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
