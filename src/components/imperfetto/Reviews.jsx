import { Reveal } from "../site/Reveal";
import { REVIEWS } from "../../data/imperfetto";
import { Star, Quote } from "lucide-react";

export const Reviews = () => {
  return (
    <section data-testid="imp-reviews" id="recensioni" className="bg-[#141210] py-24 lg:py-36 bg-grain">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-mont text-[11px] uppercase tracking-[0.3em] text-[#C9A24B] mb-6">Recensioni</p>
          <h2 className="font-heading font-light text-4xl lg:text-6xl text-[#F2ECDD] leading-tight mb-8">
            Le voci di chi ci ha scoperto
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <div data-testid="imp-rating-google" className="flex items-center gap-2">
              <div className="flex text-[#C9A24B]">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" strokeWidth={0} />)}
              </div>
              <span className="font-mont text-sm text-[#F2ECDD]/70"><strong className="text-[#F2ECDD]">4.8</strong> · Google</span>
            </div>
            <span className="hidden sm:block w-px h-5 bg-[#C9A24B]/30" />
            <div data-testid="imp-rating-guru" className="flex items-center gap-2">
              <div className="flex text-[#C9A24B]">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" strokeWidth={0} />)}
              </div>
              <span className="font-mont text-sm text-[#F2ECDD]/70"><strong className="text-[#F2ECDD]">4.7</strong> · Restaurant Guru</span>
            </div>
            <span className="hidden sm:block w-px h-5 bg-[#C9A24B]/30" />
            <span className="font-mont text-sm text-[#F2ECDD]/70">TripAdvisor · <strong className="text-[#F2ECDD]">Eccellente</strong></span>
          </div>
        </Reveal>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {REVIEWS.map((r, i) => (
            <Reveal key={i} data-testid={`imp-review-card-${i}`} className="break-inside-avoid border border-[#C9A24B]/15 bg-[#0E0E0E] p-8">
              <Quote className="text-[#C9A24B] mb-4" size={28} strokeWidth={1.2} />
              <p className="font-heading text-xl lg:text-2xl text-[#F2ECDD] leading-snug italic">"{r.quote}"</p>
              <div className="mt-6 pt-4 border-t border-[#C9A24B]/10">
                <p className="font-mont text-sm font-medium text-[#F2ECDD]">{r.author}</p>
                <p className="font-mont text-[10px] uppercase tracking-[0.2em] text-[#F2ECDD]/45 mt-1">{r.source}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
