import { useState } from "react";
import { Reveal } from "./Reveal";
import { INFO } from "../../data/content";
import { MapPin, Clock, Car, Phone, Check } from "lucide-react";
import { toast } from "sonner";

export const Contact = () => {
  const [form, setForm] = useState({ name: "", date: "", people: "2", message: "" });
  const [sent, setSent] = useState(false);

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.date) {
      toast.error("Inserisci almeno nome e data.");
      return;
    }
    setSent(true);
    toast.success("Richiesta inviata! Ti ricontatteremo a breve.");
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", date: "", people: "2", message: "" });
    }, 4000);
  };

  const inputCls =
    "w-full bg-transparent border-b border-sienna/25 py-3 text-dark placeholder:text-text-secondary/60 focus:outline-none focus:border-sienna transition-colors";

  return (
    <section data-testid="contact" id="contatti" className="bg-cream-alt py-24 lg:py-36">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
          <Reveal>
            <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-gold font-semibold mb-5">Prenota</p>
            <h2 className="font-heading font-light text-4xl lg:text-5xl text-dark leading-tight mb-6">
              Riserva il tuo tavolo
            </h2>
            <p className="text-text-secondary mb-9 leading-relaxed">
              Raccontaci quando vorresti farci visita. Roberta ti ricontatterà per confermare la tua prenotazione.
            </p>

            <form data-testid="booking-form" onSubmit={submit} className="space-y-7">
              <div>
                <label className="text-xs uppercase tracking-[0.15em] text-text-secondary">Nome</label>
                <input data-testid="form-name" value={form.name} onChange={update("name")} placeholder="Il tuo nome" className={inputCls} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                <div>
                  <label className="text-xs uppercase tracking-[0.15em] text-text-secondary">Data</label>
                  <input data-testid="form-date" type="date" value={form.date} onChange={update("date")} className={inputCls} />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.15em] text-text-secondary">Persone</label>
                  <input data-testid="form-people" type="number" min="1" value={form.people} onChange={update("people")} className={inputCls} />
                </div>
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.15em] text-text-secondary">Messaggio</label>
                <textarea data-testid="form-message" value={form.message} onChange={update("message")} rows={3} placeholder="Richieste particolari, allergie, orario..." className={`${inputCls} resize-none`} />
              </div>
              <button
                data-testid="form-submit"
                type="submit"
                disabled={sent}
                className="w-full bg-sienna text-cream text-xs uppercase tracking-[0.2em] font-semibold px-8 py-4 hover:bg-sienna-hover active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-80"
              >
                {sent ? <><Check size={16} /> Richiesta Inviata</> : "Invia Richiesta"}
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.15} className="flex flex-col gap-8">
            <div className="space-y-6">
              <div className="flex gap-4" data-testid="info-address">
                <MapPin className="text-gold shrink-0 mt-1" size={22} strokeWidth={1.5} />
                <div>
                  <p className="text-dark font-semibold">{INFO.address}</p>
                  <p className="text-sm text-text-secondary mt-1">{INFO.addressNote}</p>
                </div>
              </div>
              <div className="flex gap-4" data-testid="info-hours">
                <Clock className="text-gold shrink-0 mt-1" size={22} strokeWidth={1.5} />
                <p className="text-dark font-semibold">{INFO.hours}</p>
              </div>
              <div className="flex gap-4" data-testid="info-parking">
                <Car className="text-gold shrink-0 mt-1" size={22} strokeWidth={1.5} />
                <p className="text-text-secondary">Parcheggio disponibile, anche per camper</p>
              </div>
              <div className="flex gap-4" data-testid="info-phone">
                <Phone className="text-gold shrink-0 mt-1" size={22} strokeWidth={1.5} />
                <p className="text-text-secondary">Chiamaci per informazioni e prenotazioni</p>
              </div>
            </div>

            <div className="flex-1 min-h-[300px] border border-sienna/15">
              <iframe
                data-testid="map-embed"
                title="Mappa Il Boccaccio Osteria"
                src={INFO.mapEmbed}
                className="w-full h-full min-h-[300px]"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
