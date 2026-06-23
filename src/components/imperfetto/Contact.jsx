import { useState } from "react";
import { Reveal } from "../site/Reveal";
import { INFO } from "../../data/imperfetto";
import { MapPin, Clock, Car, Phone, Check, Compass } from "lucide-react";
import { toast } from "sonner";

export const Contact = () => {
  const [form, setForm] = useState({ name: "", date: "", time: "", people: "2", notes: "" });
  const [sent, setSent] = useState(false);

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.date) {
      toast.error("Inserisci almeno nome e data.");
      return;
    }
    setSent(true);
    toast.success("Richiesta inviata! Ti ricontatteremo per confermare.");
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", date: "", time: "", people: "2", notes: "" });
    }, 4000);
  };

  const inputCls =
    "w-full bg-transparent border-b border-[#C9A24B]/25 py-3 text-[#F2ECDD] placeholder:text-[#F2ECDD]/35 focus:outline-none focus:border-[#C9A24B] transition-colors font-mont font-light";
  const labelCls = "font-mont text-[10px] uppercase tracking-[0.2em] text-[#F2ECDD]/50";

  return (
    <section data-testid="imp-contact" id="contatti" className="bg-[#0E0E0E] py-24 lg:py-36">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
          <Reveal>
            <p className="font-mont text-[11px] uppercase tracking-[0.3em] text-[#C9A24B] mb-6">Prenota</p>
            <h2 className="font-heading font-light text-4xl lg:text-5xl text-[#F2ECDD] leading-tight mb-6">
              Riserva la tua esperienza
            </h2>
            <p className="font-mont font-light text-[#F2ECDD]/65 mb-9 leading-relaxed">
              Indicaci i dettagli e segnalaci eventuali allergie o intolleranze: prepareremo per te un percorso su misura.
            </p>

            <form data-testid="imp-booking-form" onSubmit={submit} className="space-y-7">
              <div>
                <label className={labelCls}>Nome</label>
                <input data-testid="imp-form-name" value={form.name} onChange={update("name")} placeholder="Il tuo nome" className={inputCls} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-7">
                <div>
                  <label className={labelCls}>Data</label>
                  <input data-testid="imp-form-date" type="date" value={form.date} onChange={update("date")} className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>Ora</label>
                  <input data-testid="imp-form-time" type="time" value={form.time} onChange={update("time")} className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>Persone</label>
                  <input data-testid="imp-form-people" type="number" min="1" value={form.people} onChange={update("people")} className={inputCls} />
                </div>
              </div>
              <div>
                <label className={labelCls}>Allergie / Intolleranze / Note</label>
                <textarea data-testid="imp-form-notes" value={form.notes} onChange={update("notes")} rows={3} placeholder="Segnalaci tutto ciò che dobbiamo sapere..." className={`${inputCls} resize-none`} />
              </div>
              <button
                data-testid="imp-form-submit"
                type="submit"
                disabled={sent}
                className="font-mont w-full bg-[#C9A24B] text-[#0E0E0E] text-[11px] uppercase tracking-[0.25em] font-medium px-8 py-4 hover:bg-[#d8b25c] active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-80"
              >
                {sent ? <><Check size={16} /> Richiesta Inviata</> : "Invia Richiesta"}
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.15} className="flex flex-col gap-7">
            <div className="border border-[#C9A24B]/25 p-6 flex gap-4" data-testid="imp-find-note">
              <Compass className="text-[#C9A24B] shrink-0 mt-1" size={24} strokeWidth={1.4} />
              <div>
                <p className="font-heading text-xl text-[#F2ECDD] mb-1">Come trovarci</p>
                <p className="font-mont font-light text-sm text-[#F2ECDD]/65 leading-relaxed">{INFO.findUsNote}</p>
              </div>
            </div>

            <div className="space-y-5">
              <div className="flex gap-4" data-testid="imp-info-address">
                <MapPin className="text-[#C9A24B] shrink-0 mt-1" size={20} strokeWidth={1.5} />
                <p className="font-mont text-[#F2ECDD]/80">{INFO.address}</p>
              </div>
              <a href={INFO.phoneHref} className="flex gap-4 group" data-testid="imp-info-phone">
                <Phone className="text-[#C9A24B] shrink-0 mt-1" size={20} strokeWidth={1.5} />
                <p className="font-mont text-[#F2ECDD]/80 group-hover:text-[#C9A24B] transition-colors">{INFO.phone}</p>
              </a>
              <div className="flex gap-4" data-testid="imp-info-hours">
                <Clock className="text-[#C9A24B] shrink-0 mt-1" size={20} strokeWidth={1.5} />
                <p className="font-mont text-[#F2ECDD]/80">{INFO.hours}</p>
              </div>
              <div className="flex gap-4" data-testid="imp-info-parking">
                <Car className="text-[#C9A24B] shrink-0 mt-1" size={20} strokeWidth={1.5} />
                <p className="font-mont font-light text-[#F2ECDD]/65">{INFO.parking}</p>
              </div>
            </div>

            <div className="flex-1 min-h-[260px] border border-[#C9A24B]/15">
              <iframe
                data-testid="imp-map-embed"
                title="Mappa Imperfetto Restaurant"
                src={INFO.mapEmbed}
                className="w-full h-full min-h-[260px] grayscale contrast-125"
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
