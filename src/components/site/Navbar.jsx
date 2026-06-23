import { useEffect, useState } from "react";
import { Menu as MenuIcon, X } from "lucide-react";
import { NAV_LINKS } from "../../data/content";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-cream/95 backdrop-blur-md border-b border-sienna/10 py-3" : "bg-transparent py-5"
      }`}
    >
      <nav className="w-full max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        <button
          data-testid="nav-brand"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`font-heading text-2xl lg:text-3xl tracking-tight transition-colors ${
            scrolled ? "text-sienna" : "text-cream text-shadow-soft"
          }`}
        >
          Il Boccaccio
        </button>

        <div className="hidden lg:flex items-center gap-9">
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              data-testid={`nav-link-${l.id}`}
              onClick={() => go(l.id)}
              className={`text-xs uppercase tracking-[0.18em] font-semibold transition-colors hover:text-gold ${
                scrolled ? "text-text-secondary" : "text-cream/90 text-shadow-soft"
              }`}
            >
              {l.label}
            </button>
          ))}
          <button
            data-testid="nav-reserve-btn"
            onClick={() => go("contatti")}
            className="bg-sienna text-cream text-xs uppercase tracking-[0.18em] font-semibold px-6 py-3 hover:bg-sienna-hover active:scale-[0.98] transition-all"
          >
            Prenota
          </button>
        </div>

        <button
          data-testid="nav-mobile-toggle"
          className={`lg:hidden ${scrolled ? "text-sienna" : "text-cream"}`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={26} /> : <MenuIcon size={26} />}
        </button>
      </nav>

      {open && (
        <div data-testid="mobile-menu" className="lg:hidden bg-cream border-t border-sienna/10 px-6 py-6 flex flex-col gap-5">
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              data-testid={`mobile-nav-link-${l.id}`}
              onClick={() => go(l.id)}
              className="text-left text-sm uppercase tracking-[0.18em] font-semibold text-text-secondary"
            >
              {l.label}
            </button>
          ))}
          <button
            data-testid="mobile-reserve-btn"
            onClick={() => go("contatti")}
            className="bg-sienna text-cream text-sm uppercase tracking-[0.18em] font-semibold px-6 py-3 mt-2"
          >
            Prenota un Tavolo
          </button>
        </div>
      )}
    </header>
  );
};
