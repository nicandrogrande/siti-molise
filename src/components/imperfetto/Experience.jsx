import { Reveal } from "../site/Reveal";
import { IMAGES } from "../../data/imperfetto";
import { Wine, Sparkles, Heart, Users } from "lucide-react";

const features = [
  { icon: Sparkles, title: "Il Benvenuto", text: "Ogni cena inizia con un prosecco offerto dalla casa e un'entrée omaggio: il nostro modo di darti il benvenuto." },
  { icon: Wine, title: "Solo Vini Molisani", text: "Una carta vini coerente con il territorio, con la Tintilia del Molise in evidenza. Coerenza, non compromesso." },
  { icon: Heart, title: "Atmosfera Intima", text: "Luci soffuse, ambiente minimal, calore umano. Elegante ma mai pretenzioso." },
  { icon: Users, title: "Ogni Occasione", text: "Perfetto per coppie, compleanni, occasioni speciali e gruppi. Menu dedicato per allergie e intolleranze." },
];

export const Experience = () => {
  return (
    <section data-testid="imp-experience" id="esperienza" className="relative bg-[#0E0E0E] py-24 lg:py-36 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <Reveal className="lg:col-span-5">
            <img src={IMAGES.wine} alt="Calice di vino molisano a lume di candela" className="w-full h-[520px] object-cover" />
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-7">
            <p className="font-mont text-[11px] uppercase tracking-[0.3em] text-[#C9A24B] mb-6">L'Esperienza</p>
            <h2 className="font-heading font-light text-4xl lg:text-5xl text-[#F2ECDD] leading-tight mb-10">
              Una scoperta segreta nel cuore del Molise
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((f) => (
                <div key={f.title} data-testid={`imp-feature-${f.title}`} className="flex flex-col gap-3">
                  <f.icon className="text-[#C9A24B]" size={28} strokeWidth={1.3} />
                  <h3 className="font-heading text-2xl text-[#F2ECDD]">{f.title}</h3>
                  <p className="font-mont font-light text-sm text-[#F2ECDD]/60 leading-relaxed">{f.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
