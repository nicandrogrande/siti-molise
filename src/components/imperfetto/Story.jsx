import { Reveal } from "../site/Reveal";
import { IMAGES } from "../../data/imperfetto";

export const Story = () => {
  return (
    <section data-testid="imp-story" id="storia" className="bg-[#0E0E0E] py-24 lg:py-36">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <Reveal className="lg:col-span-6">
            <p className="font-mont text-[11px] uppercase tracking-[0.3em] text-[#C9A24B] mb-6">La Nostra Storia</p>
            <h2 className="font-heading font-light text-4xl lg:text-5xl text-[#F2ECDD] leading-tight mb-8">
              L'imperfezione come filosofia.
            </h2>
            <div className="space-y-5 font-mont font-light text-[#F2ECDD]/70 text-base lg:text-lg leading-relaxed">
              <p>
                Imperfetto nasce dalle mani di due fratelli: <strong className="text-[#F2ECDD] font-normal">Simone Petti</strong> in
                cucina e <strong className="text-[#F2ECDD] font-normal">Alfredo Petti</strong> in sala, accompagnati da
                <strong className="text-[#F2ECDD] font-normal"> Giusy</strong>, l'anima leggendaria del servizio.
              </p>
              <p>
                Il nostro nome è una dichiarazione: nessuna finzione, nessuna perfezione artificiosa. Solo ingredienti veri,
                <strong className="text-[#C9A24B] font-normal"> a Km 0</strong>, una carta vini <strong className="text-[#C9A24B] font-normal">esclusivamente molisana</strong> e
                il coraggio di elevare la tradizione a cucina d'autore.
              </p>
              <p>
                Ci trovi a Taverna, piccola frazione di Cantalupo nel Sannio: un luogo difficile da trovare,
                <span className="text-[#F2ECDD] italic"> impossibile da dimenticare</span>.
              </p>
            </div>

            <div className="mt-9 border-l-2 border-[#C9A24B] pl-6">
              <p className="font-heading italic text-[#C9A24B] text-2xl lg:text-3xl">
                "Imperfetto per nome. Perfetto per natura."
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              <img src={IMAGES.chefs} alt="I fratelli Petti" className="w-full h-[420px] object-cover col-span-1" />
              <div className="flex flex-col gap-4">
                <img src={IMAGES.sphere} alt="Sfera di cipolla fondente" className="w-full h-[202px] object-cover" />
                <img src={IMAGES.interior} alt="Sala intima Imperfetto" className="w-full h-[202px] object-cover" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
