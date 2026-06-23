import { Reveal } from "../site/Reveal";
import { MENU, IMAGES } from "../../data/imperfetto";
import { Sparkles } from "lucide-react";

const MenuItem = ({ item }) => (
  <div data-testid="imp-menu-item" className="group cursor-default transition-transform duration-300 hover:translate-x-1">
    <div className="flex items-baseline gap-2 flex-wrap">
      <h4 className="font-heading text-xl lg:text-2xl text-[#F2ECDD] group-hover:text-[#C9A24B] transition-colors">
        {item.name}
      </h4>
      {item.signature && (
        <span className="inline-flex items-center gap-1 font-mont text-[9px] uppercase tracking-[0.2em] text-[#C9A24B]">
          <Sparkles size={11} /> Signature
        </span>
      )}
    </div>
    <p className="font-mont font-light text-sm text-[#F2ECDD]/55 mt-1.5 leading-relaxed">{item.desc}</p>
  </div>
);

export const Menu = () => {
  return (
    <section data-testid="imp-menu" id="menu" className="bg-[#141210] py-24 lg:py-36 bg-grain">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        <Reveal className="max-w-3xl mb-16">
          <p className="font-mont text-[11px] uppercase tracking-[0.3em] text-[#C9A24B] mb-6">Il Menu</p>
          <h2 className="font-heading font-light text-4xl lg:text-6xl text-[#F2ECDD] leading-tight mb-6">
            Un percorso sensoriale
          </h2>
          <p className="font-mont font-light text-[#F2ECDD]/65 text-base lg:text-lg leading-relaxed">
            La tradizione molisana diventa emozione. Disponibili anche <strong className="text-[#C9A24B] font-normal">tre menu
            degustazione</strong> per lasciarsi guidare interamente dagli chef.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7 space-y-14">
            {MENU.map((cat) => (
              <Reveal key={cat.category}>
                <div data-testid={`imp-menu-category-${cat.category}`}>
                  <div className="mb-7">
                    <div className="flex items-center gap-4">
                      <h3 className="font-heading text-2xl lg:text-3xl text-[#C9A24B] italic">{cat.category}</h3>
                      <span className="flex-1 h-px bg-[#C9A24B]/20" />
                    </div>
                    {cat.subtitle && (
                      <p className="font-mont text-[10px] uppercase tracking-[0.25em] text-[#F2ECDD]/40 mt-2">{cat.subtitle}</p>
                    )}
                  </div>
                  <div className="space-y-6">
                    {cat.items.map((item) => (
                      <MenuItem key={item.name} item={item} />
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="lg:col-span-5 lg:sticky lg:top-28 space-y-5">
            <div className="relative">
              <img src={IMAGES.sphere} alt="Sfera di cipolla fondente" className="w-full h-80 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0E0E0E] to-transparent p-5">
                <p className="font-heading text-2xl text-[#F2ECDD]">La Sfera di Cipolla</p>
                <p className="font-mont text-xs text-[#F2ECDD]/70">Il piatto della vita, secondo i nostri ospiti</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <img src={IMAGES.venison} alt="Cervo alla genziana" className="w-full h-44 object-cover" />
              <img src={IMAGES.dessert} alt="Cupmisu" className="w-full h-44 object-cover" />
            </div>
            <div className="border-l-2 border-[#C9A24B] pl-5 py-1">
              <p className="font-heading text-2xl text-[#F2ECDD] italic">Cervo alla Genziana</p>
              <p className="font-mont font-light text-sm text-[#F2ECDD]/60 mt-2 leading-relaxed">
                Amarene e patata viola: un secondo poetico, dove il bosco del Molise incontra la tecnica d'autore.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
