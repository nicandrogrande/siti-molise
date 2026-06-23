import { Reveal } from "./Reveal";
import { REVIEWS } from "../../data/content";
import { Star, Quote } from "lucide-react";

export const Reviews = () => {
  return (
    <section data-testid="reviews" id="recensioni" className="bg-cream py-24 lg:py-36 bg-grain">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-gold font-semibold mb-5">Recensioni</p>
          <h2 className="font-heading font-light text-4xl lg:text-6xl text-dark leading-tight mb-8">
            Le parole dei nostri ospiti
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div data-testid="rating-google" className="flex items-center gap-3">
              <div className="flex text-gold">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" strokeWidth={0} />)}
              </div>
              <span className="text-sm text-text-secondary"><strong className="text-dark">4.7/5</strong> · Google</span>
            </div>
            <span className="hidden sm:block w-px h-6 bg-sienna/20" />
            <div data-testid="rating-tripadvisor" className="flex items-center gap-3">
              <div className="flex text-olive">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" strokeWidth={0} />)}
              </div>
              <span className="text-sm text-text-secondary"><strong className="text-dark">5.0/5</strong> · TripAdvisor — Travellers' Choice</span>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-sienna/10 border border-sienna/10">
          {REVIEWS.map((r, i) => (
            <Reveal key={i} delay={(i % 3) * 0.1} data-testid={`review-card-${i}`} className="bg-cream p-9 flex flex-col">
              <Quote className="text-gold mb-5" size={30} strokeWidth={1.2} />
              <p className="font-heading text-xl lg:text-2xl text-dark leading-snug italic flex-1">
                “{r.quote}”
              </p>
              <div className="mt-7 pt-5 border-t border-sienna/10">
                <p className="text-sm font-semibold text-dark">{r.author}</p>
                <p className="text-xs uppercase tracking-[0.15em] text-text-secondary mt-1">{r.source}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
