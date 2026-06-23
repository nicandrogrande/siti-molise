import { Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import { INFO } from "../../data/content";

export const Footer = () => {
  return (
    <footer data-testid="footer" className="bg-dark text-cream py-16 lg:py-20">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-cream/10">
          <div className="lg:col-span-6">
            <h3 className="font-heading text-5xl lg:text-7xl font-light leading-none">
              Il Boccaccio<br /><span className="italic text-gold">Osteria</span>
            </h3>
            <p className="text-cream/60 mt-6 max-w-md leading-relaxed">{INFO.tagline}</p>
          </div>
          <div className="lg:col-span-3">
            <p className="text-xs uppercase tracking-[0.2em] text-gold font-semibold mb-4">Dove siamo</p>
            <p className="text-cream/70 text-sm leading-relaxed">{INFO.address}</p>
            <p className="text-cream/70 text-sm mt-3">{INFO.hours}</p>
          </div>
          <div className="lg:col-span-3">
            <p className="text-xs uppercase tracking-[0.2em] text-gold font-semibold mb-4">Seguici</p>
            <div className="flex gap-4">
              <a data-testid="social-instagram" href="https://www.instagram.com/ilboccaccio/" target="_blank" rel="noopener noreferrer" className="border border-cream/20 p-3 hover:bg-gold hover:text-dark hover:border-gold transition-colors" aria-label="Instagram">
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a data-testid="social-facebook" href="https://www.facebook.com/ilboccaccioosteria/?locale=it_IT" target="_blank" rel="noopener noreferrer" className="border border-cream/20 p-3 hover:bg-gold hover:text-dark hover:border-gold transition-colors" aria-label="Facebook">
                <Facebook size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-cream/50 text-xs">© {new Date().getFullYear()} Il Boccaccio Osteria — San Pietro Avellana (IS)</p>
          <Link data-testid="privacy-link" to="/privacy" className="text-cream/50 text-xs hover:text-gold transition-colors uppercase tracking-[0.15em]">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};
