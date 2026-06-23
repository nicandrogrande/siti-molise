import { Reveal } from "./Reveal";
import { MENU, IMAGES } from "../../data/content";
import { Sparkles } from "lucide-react";

const MenuItem = ({ item }) => (
  <div
    data-testid="menu-item"
    className="group flex items-start justify-between gap-3 cursor-default transition-transform duration-300 hover:translate-x-1"
  >
    <div className="flex-1">
      <div className="flex items-baseline gap-2 flex-wrap">
        <h4 className="font-heading text-xl lg:text-2xl text-dark group-hover:text-sienna transition-colors">
          {item.name}
        </h4>
        {item.signature && (
          <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.15em] text-gold font-semibold">
            <Sparkles size={11} /> Signature
          </span>
        )}
      </div>
      <p className="text-sm text-text-secondary mt-1 leading-relaxed">{item.desc}</p>
    </div>
  </div>
);

export const Menu = () => {
  return (
    <section data-testid="menu" id="menu" className="bg-cream-alt py-24 lg:py-36">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        <Reveal className="max-w-3xl mb-16">
          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-gold font-semibold mb-5">Il Menu</p>
          <h2 className="font-heading font-light text-4xl lg:text-6xl text-dark leading-tight mb-6">
            I sapori dell'Alto Molise
          </h2>
          <p className="text-text-secondary text-base lg:text-lg leading-relaxed">
            Un percorso che intreccia tradizione e creatività. Il tartufo nero di San Pietro Avellana è il filo conduttore
            di una cucina che cambia con le stagioni e con ciò che il territorio offre.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7 space-y-14">
            {MENU.map((cat) => (
              <Reveal key={cat.category}>
                <div data-testid={`menu-category-${cat.category}`}>
                  <div className="flex items-center gap-4 mb-7">
                    <h3 className="font-heading text-2xl lg:text-3xl text-sienna">{cat.category}</h3>
                    <span className="flex-1 h-px bg-sienna/15" />
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
            <img src={IMAGES.risotto} alt="Risotto al tartufo nero" className="w-full h-72 object-cover" />
            <div className="grid grid-cols-2 gap-5">
              <img src={IMAGES.truffle} alt="Tartufo nero fresco" className="w-full h-44 object-cover" />
              <img src={IMAGES.antipasto} alt="Tagliere di salumi e formaggi" className="w-full h-44 object-cover" />
            </div>
            <div className="border-l-2 border-gold pl-5 py-2">
              <p className="font-heading text-2xl text-dark italic">La sera, la Pinsa.</p>
              <p className="text-sm text-text-secondary mt-2 leading-relaxed">
                In alternativa alla cena tradizionale, proponiamo la pinsa ai 5 cereali a lunga lievitazione, accompagnata
                da una selezione di birre artigianali.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
