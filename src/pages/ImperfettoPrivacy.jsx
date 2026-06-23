import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { INFO } from "../data/imperfetto";

const Section = ({ title, children }) => (
  <div className="mb-10">
    <h2 className="font-heading text-2xl lg:text-3xl text-[#C9A24B] mb-4">{title}</h2>
    <div className="space-y-3 font-mont font-light text-[#F2ECDD]/70 leading-relaxed text-base">{children}</div>
  </div>
);

export default function ImperfettoPrivacy() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Privacy Policy | Imperfetto Restaurant";
  }, []);

  return (
    <div data-testid="imp-privacy-page" className="imperfetto min-h-screen bg-[#0E0E0E] bg-grain">
      <header className="bg-[#080808] text-[#F2ECDD] py-8 border-b border-[#C9A24B]/15">
        <div className="w-full max-w-3xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          <Link
            data-testid="imp-privacy-back-link"
            to="/imperfetto"
            className="font-mont inline-flex items-center gap-2 text-[#F2ECDD]/80 hover:text-[#C9A24B] transition-colors text-xs uppercase tracking-[0.18em]"
          >
            <ArrowLeft size={18} /> Torna al sito
          </Link>
          <span className="font-heading text-xl lg:text-2xl">Imperfetto<span className="text-[#C9A24B]">.</span></span>
        </div>
      </header>

      <main className="w-full max-w-3xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <p className="font-mont text-[11px] uppercase tracking-[0.25em] text-[#C9A24B] mb-4">Informativa</p>
        <h1 className="font-heading font-light text-4xl lg:text-5xl text-[#F2ECDD] mb-3">Privacy Policy</h1>
        <p className="font-mont text-sm text-[#F2ECDD]/50 mb-12">Ultimo aggiornamento: {new Date().toLocaleDateString("it-IT", { year: "numeric", month: "long", day: "numeric" })}</p>

        <Section title="1. Titolare del trattamento">
          <p>
            Il titolare del trattamento dei dati è <strong className="text-[#F2ECDD] font-normal">Imperfetto Restaurant</strong>, con sede in {INFO.address}.
            Per qualsiasi richiesta puoi contattarci al numero {INFO.phone}.
          </p>
        </Section>

        <Section title="2. Dati raccolti">
          <p>
            Tramite il modulo di prenotazione raccogliamo esclusivamente i dati che ci fornisci volontariamente: nome, data, ora,
            numero di persone ed eventuali note su allergie o intolleranze. Tali dati servono unicamente a gestire e confermare la
            tua prenotazione e a prepararti un'esperienza su misura.
          </p>
          <p>
            Il sito non utilizza cookie di profilazione. Contenuti di terze parti (come la mappa di Google Maps) possono installare
            cookie tecnici gestiti dai rispettivi fornitori.
          </p>
        </Section>

        <Section title="3. Finalità e base giuridica">
          <p>
            I dati sono trattati per dare seguito alla tua richiesta di prenotazione (esecuzione di misure precontrattuali su tua
            richiesta) e non sono usati per finalità di marketing senza il tuo consenso esplicito.
          </p>
        </Section>

        <Section title="4. Conservazione dei dati">
          <p>
            I dati vengono conservati per il tempo strettamente necessario a gestire la prenotazione e ad adempiere a eventuali
            obblighi di legge, dopodiché vengono cancellati.
          </p>
        </Section>

        <Section title="5. Condivisione dei dati">
          <p>
            I tuoi dati non vengono ceduti né venduti a terzi. Possono essere trattati da fornitori di servizi tecnici (ad esempio
            hosting) nel rispetto della normativa vigente.
          </p>
        </Section>

        <Section title="6. I tuoi diritti">
          <p>
            Ai sensi del Regolamento UE 2016/679 (GDPR) hai diritto di accedere ai tuoi dati, rettificarli, cancellarli, limitarne il
            trattamento e opporti allo stesso. Per esercitare questi diritti contattaci ai recapiti indicati.
          </p>
        </Section>

        <Section title="7. Modifiche">
          <p>
            Ci riserviamo di aggiornare questa informativa per riflettere modifiche normative o operative. Ti invitiamo a consultarla
            periodicamente.
          </p>
        </Section>

        <Link
          data-testid="imp-privacy-home-btn"
          to="/imperfetto"
          className="font-mont inline-flex items-center gap-2 bg-[#C9A24B] text-[#0E0E0E] text-[11px] uppercase tracking-[0.2em] font-medium px-8 py-4 hover:bg-[#d8b25c] transition-colors mt-4"
        >
          <ArrowLeft size={16} /> Torna alla Home
        </Link>
      </main>
    </div>
  );
}
