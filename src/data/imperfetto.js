export const NAV_LINKS = [
  { id: "storia", label: "La Storia" },
  { id: "menu", label: "Il Menu" },
  { id: "esperienza", label: "L'Esperienza" },
  { id: "recensioni", label: "Recensioni" },
  { id: "contatti", label: "Contatti" },
];

export const MENU = [
  {
    category: "Aspettando gli Chef",
    subtitle: "Entrée di benvenuto",
    items: [
      { name: "Il Benvenuto della Casa", desc: "Prosecco offerto dalla casa e l'entrée del giorno — trippa fritta, giardiniera con porcini", signature: true },
    ],
  },
  {
    category: "Chi Ben Comincia",
    subtitle: "Antipasti",
    items: [
      { name: "Sfera di Cipolla Fondente", desc: "Tartufo, mosto cotto e crema di caciocavallo — il nostro piatto della vita", signature: true },
      { name: "Scamorza in Crosta Aromatica", desc: "Mandorle, miele e mela" },
      { name: "Carciofo alla Campobasso", desc: "Un classico molisano rivisitato" },
      { name: "Carpaccio di Funghi", desc: "Crudo, profumato, essenziale" },
      { name: "Trippa Fritta", desc: "Croccante, di carattere" },
      { name: "Caciocavallo, Mandorle e Mele", desc: "Dolce e sapido in equilibrio" },
    ],
  },
  {
    category: "Primi Piatti",
    items: [
      { name: "Spaghetti ai Pomodori", desc: "In varie consistenze" },
      { name: "Gnocchi del Territorio", desc: "Fatti a mano, sapori di casa" },
      { name: "Bucatini Triangolari", desc: "Pastificio artigianale molisano" },
      { name: "Ciambotta Molisana", desc: "L'orto del Molise in un piatto" },
    ],
  },
  {
    category: "Dalla Padella... alla Brace",
    subtitle: "Secondi",
    items: [
      { name: "Cervo alla Genziana", desc: "Amarene e patata viola — un secondo poetico", signature: true },
      { name: "Filetto di Maiale", desc: "Caciocavallo e scarola arracanata" },
      { name: "Baccalà in Doppia Consistenza", desc: "Due tecniche, un solo mare" },
      { name: "Bollito con Salsette Varie", desc: "La tradizione che scalda" },
      { name: "Agnello con Funghi", desc: "Cotto a vapore, delicatissimo" },
    ],
  },
  {
    category: "Dulcis in Fundo",
    subtitle: "Dolci",
    items: [
      { name: "Cupmisu", desc: "La crema al caffè amata da tutti", signature: true },
      { name: "Dolci del Territorio", desc: "La pasticceria del giorno" },
    ],
  },
  {
    category: "Carta dei Vini & Bevande",
    items: [
      { name: "Vini Esclusivamente Molisani", desc: "Con la Tintilia del Molise in evidenza — bollicine, bianchi, rosati, rossi", signature: true },
      { name: "Birre Artigianali", desc: "Selezione del territorio" },
      { name: "Distillati, Amari e Digestivi", desc: "Oltre 14 referenze da fine pasto" },
      { name: "Caffè", desc: "Il rito finale" },
    ],
  },
];

export const REVIEWS = [
  { quote: "Chi avrebbe pensato che una cena normale si trasformasse in un caleidoscopio di sapori degno di un ristorante stellato Michelin.", author: "Un cliente", source: "Google" },
  { quote: "Imperfetto? Il nome non va bene — è perfetto. I fratelli Petti con la mitica Giusy in sala: spettacolari.", author: "Un viaggiatore", source: "TripAdvisor" },
  { quote: "Sono tornato 3 volte in 5 giorni. La sfera di cipolla è il piatto della vita.", author: "Cliente affezionato", source: "Google" },
  { quote: "Alta cucina ai prezzi di una trattoria, se paragonati a Roma. Piatti mai banali.", author: "Cliente da Roma", source: "Restaurant Guru" },
  { quote: "Un percorso sensoriale. Non vi aspettate i soliti piatti.", author: "Recensione", source: "Google" },
  { quote: "Scoperto quasi per caso — una delle cose più belle capitate in Molise.", author: "Turista straniero", source: "TripAdvisor" },
  { quote: "Ormai Imperfetto è diventato una garanzia: mangiare bene, stare bene, pagare il giusto.", author: "Un habitué", source: "Google" },
];

export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1663530761401-15eefb544889?crop=entropy&cs=srgb&fm=jpg&q=85&w=1920",
  sphere: "https://images.unsplash.com/photo-1621494268492-d01b98eba7e4?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  chefs: "https://images.pexels.com/photos/32683223/pexels-photo-32683223.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200",
  interior: "https://images.unsplash.com/photo-1650490632010-e18cbb694dd1?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600",
  ambiance: "https://images.pexels.com/photos/4091080/pexels-photo-4091080.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600",
  venison: "https://images.pexels.com/photos/16021237/pexels-photo-16021237.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200",
  wine: "https://images.unsplash.com/photo-1658509480122-3381d47ccedb?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  dessert: "https://images.pexels.com/photos/35595680/pexels-photo-35595680.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200",
  plating: "https://images.unsplash.com/photo-1568376794508-ae52c6ab3929?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
};

export const INFO = {
  name: "Imperfetto Restaurant",
  tagline: "Imperfetto per nome. Perfetto per natura.",
  subtagline: "Cucina molisana d'autore.",
  address: "Via Taverna 134, Frazione Taverna — 86092 Cantalupo nel Sannio (IS), Molise",
  phone: "+39 327 688 6366",
  phoneHref: "tel:+393276886366",
  hours: "Pranzo e Cena · Chiuso il Lunedì",
  findUsNote: "Siamo nella frazione Taverna: imposta il navigatore con precisione o chiamaci, ti guidiamo noi. Un luogo segreto per chi sa cercare.",
  parking: "Parcheggio gratuito disponibile · Accessibile in sedia a rotelle",
  mapEmbed: "https://www.google.com/maps?q=Imperfetto+restaurant+Cantalupo+nel+Sannio&output=embed",
};
