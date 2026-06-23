import { Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import { INFO } from "../../data/imperfetto";

export const Footer = () => {
  return (
    <footer data-testid="imp-footer" className="bg-[#080808] text-[#F2ECDD] py-16 lg:py-20 border-t border-[#C9A24B]/15">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-[#F2ECDD]/10">
          <div className="lg:col-span-6">
            <h3 className="font-heading text-5xl lg:text-7xl font-light leading-none">
              Imperfetto<span className="text-[#C9A24B]">.</span>
            </h3>
            <p className="font-mont font-light text-[#F2ECDD]/55 mt-6 max-w-md leading-relaxed italic">
              "L'imperfezione come filosofia: ingredienti veri, sapori autentici, nessuna finzione."
            </p>
          </div>
          <div className="lg:col-span-3">
            <p className="font-mont text-[10px] uppercase tracking-[0.25em] text-[#C9A24B] mb-4">Dove siamo</p>
            <p className="font-mont font-light text-[#F2ECDD]/65 text-sm leading-relaxed">{INFO.address}</p>
            <p className="font-mont font-light text-[#F2ECDD]/65 text-sm mt-3">{INFO.phone}</p>
            <p className="font-mont font-light text-[#F2ECDD]/65 text-sm mt-1">{INFO.hours}</p>
          </div>
          <div className="lg:col-span-3">
            <p className="font-mont text-[10px] uppercase tracking-[0.25em] text-[#C9A24B] mb-4">Seguici</p>
            <div className="flex gap-4">
              <a data-testid="imp-social-instagram" href="https://www.instagram.com/imperfetto_restaurant/" target="_blank" rel="noopener noreferrer" className="border border-[#F2ECDD]/20 p-3 hover:bg-[#C9A24B] hover:text-[#0E0E0E] hover:border-[#C9A24B] transition-colors" aria-label="Instagram">
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a data-testid="imp-social-facebook" href="https://www.facebook.com/imperfettorestaurant/?locale=it_IT" target="_blank" rel="noopener noreferrer" className="border border-[#F2ECDD]/20 p-3 hover:bg-[#C9A24B] hover:text-[#0E0E0E] hover:border-[#C9A24B] transition-colors" aria-label="Facebook">
                <Facebook size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="font-mont text-[#F2ECDD]/45 text-xs">© {new Date().getFullYear()} Imperfetto Restaurant — Cantalupo nel Sannio (IS)</p>
          <Link data-testid="imp-privacy-link" to="/imperfetto/privacy" className="font-mont text-[#F2ECDD]/45 text-xs hover:text-[#C9A24B] transition-colors uppercase tracking-[0.15em]">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};
