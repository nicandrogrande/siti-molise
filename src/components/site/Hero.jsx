import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { INFO, IMAGES } from "../../data/content";

export const Hero = () => {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section data-testid="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={IMAGES.hero} alt="Tartufo nero e pasta fatta in casa" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-dark/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-dark/30" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gold text-xs sm:text-sm uppercase tracking-[0.35em] font-semibold mb-6"
        >
          San Pietro Avellana · Alto Molise
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35 }}
          className="font-heading font-light text-cream text-5xl sm:text-6xl lg:text-8xl leading-[0.95] tracking-tight text-shadow-soft"
        >
          Il Boccaccio<br />
          <span className="italic text-gold">Osteria</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55 }}
          className="text-cream/90 text-base sm:text-lg max-w-2xl mx-auto mt-8 leading-relaxed text-shadow-soft"
        >
          {INFO.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.75 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
        >
          <button
            data-testid="hero-menu-btn"
            onClick={() => go("menu")}
            className="w-full sm:w-auto bg-sienna text-cream text-xs uppercase tracking-[0.2em] font-semibold px-9 py-4 hover:bg-sienna-hover active:scale-[0.98] transition-all"
          >
            Scopri il Menu
          </button>
          <button
            data-testid="hero-reserve-btn"
            onClick={() => go("contatti")}
            className="w-full sm:w-auto border border-cream/60 text-cream text-xs uppercase tracking-[0.2em] font-semibold px-9 py-4 hover:bg-cream hover:text-dark active:scale-[0.98] transition-all"
          >
            Prenota un Tavolo
          </button>
        </motion.div>
      </div>

      <motion.button
        onClick={() => go("chi-siamo")}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/70 z-10"
        aria-label="Scorri"
      >
        <ChevronDown size={28} />
      </motion.button>
    </section>
  );
};
