import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { INFO, IMAGES } from "../../data/imperfetto";

export const Hero = () => {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section data-testid="imp-hero" className="relative min-h-screen flex items-center overflow-hidden bg-[#0E0E0E]">
      <div className="absolute inset-0">
        <motion.img
          src={IMAGES.hero}
          alt="Piatto gourmet Imperfetto Restaurant"
          className="w-full h-full object-cover"
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 6, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E0E0E] via-[#0E0E0E]/70 to-[#0E0E0E]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-transparent to-[#0E0E0E]/40" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="font-mont text-[#C9A24B] text-[11px] sm:text-xs uppercase tracking-[0.4em] mb-7"
          >
            Cantalupo nel Sannio · Molise
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35 }}
            className="font-heading font-light text-[#F2ECDD] text-5xl sm:text-7xl lg:text-8xl leading-[0.95] tracking-tight"
          >
            Imperfetto<br />
            <span className="italic text-[#C9A24B]">Restaurant</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.55 }}
            className="mt-8 space-y-1"
          >
            <p className="font-heading italic text-[#F2ECDD] text-2xl sm:text-3xl">{INFO.tagline}</p>
            <p className="font-mont text-[#F2ECDD]/70 text-sm sm:text-base tracking-wide">{INFO.subtagline}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.75 }}
            className="flex flex-col sm:flex-row items-start gap-4 mt-11"
          >
            <button
              data-testid="imp-hero-menu-btn"
              onClick={() => go("menu")}
              className="font-mont w-full sm:w-auto bg-[#C9A24B] text-[#0E0E0E] text-[11px] uppercase tracking-[0.25em] font-medium px-9 py-4 hover:bg-[#d8b25c] active:scale-[0.98] transition-all"
            >
              Scopri il Menu
            </button>
            <button
              data-testid="imp-hero-reserve-btn"
              onClick={() => go("contatti")}
              className="font-mont w-full sm:w-auto border border-[#F2ECDD]/40 text-[#F2ECDD] text-[11px] uppercase tracking-[0.25em] px-9 py-4 hover:border-[#C9A24B] hover:text-[#C9A24B] active:scale-[0.98] transition-all"
            >
              Prenota un Tavolo
            </button>
          </motion.div>
        </div>
      </div>

      <motion.button
        onClick={() => go("storia")}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#C9A24B]/70 z-10"
        aria-label="Scorri"
      >
        <ChevronDown size={28} />
      </motion.button>
    </section>
  );
};
