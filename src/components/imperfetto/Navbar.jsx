import { useEffect, useState } from "react";
import { Menu as MenuIcon, X } from "lucide-react";
import { NAV_LINKS } from "../../data/imperfetto";

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
      data-testid="imp-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-[#0E0E0E]/95 backdrop-blur-md border-b border-[#C9A24B]/15 py-3" : "bg-transparent py-5"
      }`}
    >
      <nav className="w-full max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        <button
          data-testid="imp-nav-brand"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-heading text-2xl lg:text-3xl tracking-wide text-[#F2ECDD]"
        >
          Imperfetto<span className="text-[#C9A24B]">.</span>
        </button>

        <div className="hidden lg:flex items-center gap-9">
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              data-testid={`imp-nav-link-${l.id}`}
              onClick={() => go(l.id)}
              className="font-mont text-[11px] uppercase tracking-[0.22em] font-light text-[#F2ECDD]/80 hover:text-[#C9A24B] transition-colors"
            >
              {l.label}
            </button>
          ))}
          <button
            data-testid="imp-nav-reserve-btn"
            onClick={() => go("contatti")}
            className="font-mont border border-[#C9A24B] text-[#C9A24B] text-[11px] uppercase tracking-[0.22em] px-6 py-3 hover:bg-[#C9A24B] hover:text-[#0E0E0E] active:scale-[0.98] transition-all"
          >
            Prenota
          </button>
        </div>

        <button
          data-testid="imp-nav-mobile-toggle"
          className="lg:hidden text-[#F2ECDD]"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={26} /> : <MenuIcon size={26} />}
        </button>
      </nav>

      {open && (
        <div data-testid="imp-mobile-menu" className="lg:hidden bg-[#0E0E0E] border-t border-[#C9A24B]/15 px-6 py-6 flex flex-col gap-5">
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              data-testid={`imp-mobile-nav-link-${l.id}`}
              onClick={() => go(l.id)}
              className="font-mont text-left text-xs uppercase tracking-[0.22em] text-[#F2ECDD]/80"
            >
              {l.label}
            </button>
          ))}
          <button
            data-testid="imp-mobile-reserve-btn"
            onClick={() => go("contatti")}
            className="font-mont border border-[#C9A24B] text-[#C9A24B] text-xs uppercase tracking-[0.22em] px-6 py-3 mt-2"
          >
            Prenota un Tavolo
          </button>
        </div>
      )}
    </header>
  );
};
