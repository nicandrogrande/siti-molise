import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { INFO } from "../data/content";

const Section = ({ title, children }) => (
  <div className="mb-10">
    <h2 className="font-heading text-2xl lg:text-3xl text-sienna mb-4">{title}</h2>
    <div className="space-y-3 text-text-secondary leading-relaxed text-base">{children}</div>
  </div>
);

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div data-testid="privacy-page" className="min-h-screen bg-cream bg-grain">
      <header className="bg-dark text-cream py-8">
        <div className="w-full max-w-3xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          <Link
            data-testid="privacy-back-link"
            to="/"
            className="inline-flex items-center gap-2 text-cream/80 hover:text-gold transition-colors text-sm uppercase tracking-[0.18em]"
          >
            <ArrowLeft size={18} /> Torna al sito
          </Link>
          <span className="font-heading text-xl lg:text-2xl text-gold">Il Boccaccio</span>
        </div>
      </header>

      <main className="w-full max-w-3xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <p className="text-xs uppercase tracking-[0.25em] text-gold font-semibold mb-4">Informativa</p>
        <h1 className="font-heading font-light text-4xl lg:text-5xl text-dark mb-3">Privacy Policy</h1>
        <p className="text-sm text-text-secondary mb-12">Ultimo aggiornamento: {new Date().toLocaleDateString("it-IT", { year: "numeric", month: "long", day: "numeric" })}</p>

        <Section title="1. Titolare del trattamento">
          <p>
            Il titolare del trattamento dei dati è <strong className="text-dark font-normal">Il Boccaccio Osteria</strong>, con sede in {INFO.address}.
            Per qualsiasi richiesta relativa ai tuoi dati personali puoi contattarci direttamente presso l'osteria.
          </p>
        </Section>

        <Section title="2. Dati raccolti">
          <p>
            Attraverso il modulo di prenotazione presente sul sito raccogliamo esclusivamente i dati che ci fornisci volontariamente:
            nome, data desiderata, numero di persone ed eventuale messaggio. Questi dati vengono utilizzati al solo scopo di gestire
            e confermare la tua richiesta di prenotazione.
          </p>
          <p>
            Il presente sito non utilizza cookie di profilazione. Eventuali contenuti incorporati da terze parti (ad esempio la mappa
            di Google Maps) possono installare cookie tecnici gestiti direttamente da tali fornitori.
          </p>
        </Section>

        <Section title="3. Finalità e base giuridica">
          <p>
            I dati sono trattati per dare seguito alla tua richiesta di prenotazione o di contatto (base giuridica: esecuzione di
            misure precontrattuali su tua richiesta) e non vengono utilizzati per finalità di marketing senza il tuo consenso esplicito.
          </p>
        </Section>

        <Section title="4. Conservazione dei dati">
          <p>
            I dati di prenotazione vengono conservati per il tempo strettamente necessario a gestire la richiesta e adempiere a
            eventuali obblighi di legge, dopodiché vengono cancellati.
          </p>
        </Section>

        <Section title="5. Condivisione dei dati">
          <p>
            I tuoi dati non vengono ceduti né venduti a terzi. Possono essere trattati da soggetti che forniscono servizi tecnici al
            sito (ad esempio hosting), nel rispetto della normativa vigente.
          </p>
        </Section>

        <Section title="6. I tuoi diritti">
          <p>
            In conformità al Regolamento UE 2016/679 (GDPR) hai diritto di accedere ai tuoi dati, richiederne la rettifica o la
            cancellazione, limitarne il trattamento e opporti allo stesso. Per esercitare questi diritti è sufficiente contattare
            l'osteria.
          </p>
        </Section>

        <Section title="7. Modifiche alla presente informativa">
          <p>
            Ci riserviamo il diritto di aggiornare questa informativa per riflettere eventuali modifiche normative o operative. Ti
            invitiamo a consultarla periodicamente.
          </p>
        </Section>

        <Link
          data-testid="privacy-home-btn"
          to="/"
          className="inline-flex items-center gap-2 bg-sienna text-cream text-xs uppercase tracking-[0.2em] font-semibold px-8 py-4 hover:bg-sienna-hover transition-colors mt-4"
        >
          <ArrowLeft size={16} /> Torna alla Home
        </Link>
      </main>
    </div>
  );
}
