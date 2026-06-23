import { Reveal } from "./Reveal";
import { INFO, IMAGES } from "../../data/content";
import { Award } from "lucide-react";

export const About = () => {
  return (
    <section data-testid="about" id="chi-siamo" className="bg-cream py-24 lg:py-36 bg-grain">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <Reveal className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <img
                src={IMAGES.chef}
                alt="Chef Ermes Colecchia impiatta"
                className="w-full h-[520px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 hidden sm:block w-44 border-l-2 border-b-2 border-gold p-5 bg-cream">
                <p className="font-heading text-4xl text-sienna leading-none">4.7</p>
                <p className="text-xs uppercase tracking-[0.18em] text-text-secondary mt-2">Google Reviews</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-6 lg:col-start-7 order-1 lg:order-2">
            <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-gold font-semibold mb-5">Chi Siamo</p>
            <h2 className="font-heading font-light text-4xl lg:text-5xl text-dark leading-tight mb-8">
              Un'osteria di montagna dove ogni piatto è una storia del Molise.
            </h2>
            <div className="space-y-5 text-text-secondary text-base lg:text-lg leading-relaxed">
              <p>
                Tra i boschi dell'Alto Molise, <strong className="text-dark font-normal">Il Boccaccio</strong> nasce dalle
                mani dello chef pluripremiato <strong className="text-dark font-normal">Ermes Colecchia</strong> e
                dall'accoglienza di <strong className="text-dark font-normal">Roberta</strong>, che cura la sala con il
                calore di una casa di famiglia.
              </p>
              <p>
                Qui la tradizione molisana viene rivisitata in chiave moderna, con un ingrediente che è anche identità del
                luogo: il <strong className="text-sienna font-normal">tartufo nero di San Pietro Avellana</strong>.
                Materie prime del territorio, pasta tirata a mano e cotture lente raccontano una terra autentica e generosa.
              </p>
              <p>
                Produciamo anche i nostri <strong className="text-dark font-normal">liquori artigianali</strong>, nati in
                osteria e disponibili all'acquisto: un piccolo souvenir di Molise da portare a casa.
              </p>
            </div>

            <div className="flex items-center gap-4 mt-9 border border-gold/40 p-5">
              <Award className="text-gold shrink-0" size={32} strokeWidth={1.4} />
              <p className="text-sm text-text-secondary">
                <span className="text-dark font-semibold">Travellers' Choice</span> — riconoscimento TripAdvisor, con
                valutazione 5.0/5 dai nostri ospiti.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
