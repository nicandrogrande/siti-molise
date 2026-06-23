export const NAV_LINKS = [
  { id: "chi-siamo", label: "Chi Siamo" },
  { id: "menu", label: "Il Menu" },
  { id: "territorio", label: "Il Territorio" },
  { id: "recensioni", label: "Recensioni" },
  { id: "contatti", label: "Contatti" },
];

export const MENU = [
  {
    category: "Antipasti",
    items: [
      { name: "Salumi e Formaggi del Molise", desc: "Selezione di prodotti caseari e insaccati del territorio" },
      { name: "Caciocavallo al Tartufo Riscaldato", desc: "Caciocavallo fuso profumato al tartufo nero", signature: true },
      { name: "Tartare di Black Angus", desc: "Aceto agli agrumi e gin tonic sferificato" },
      { name: "Tagliere di Prodotti Locali", desc: "Il meglio dell'Alto Molise in un solo morso" },
    ],
  },
  {
    category: "Primi Piatti",
    items: [
      { name: "Risotto Carnaroli BIO al Tartufo Nero", desc: "Tartufo nero di San Pietro Avellana, il nostro piatto firma", signature: true },
      { name: "Cavatelli, Salsiccia e Burrata", desc: "Crema di melanzane e burrata fresca" },
      { name: "Cavatelli ai Funghi Porcini", desc: "Funghi porcini e salsiccia del contadino" },
      { name: "Cavatelli, Fave e Pecorino", desc: "Crema di fave e pecorino stagionato" },
      { name: "Gnocchi Ripieni", desc: "Fatti a mano, ripieni della tradizione" },
      { name: "Ravioli Fatti in Casa", desc: "Sfoglia tirata a mano ogni mattina" },
      { name: "Tagliatella Bianca al Capriolo", desc: "Sugo di capriolo lentamente brasato" },
      { name: "Tortino", desc: "La sorpresa calda dello chef" },
    ],
  },
  {
    category: "Secondi Piatti",
    items: [
      { name: "Carni a Bassa Temperatura", desc: "Cotture lente che esaltano il sapore" },
      { name: "Baccalà", desc: "Secondo stagionale secondo disponibilità" },
      { name: "Selvaggina Locale", desc: "Piatti di cacciagione dei boschi molisani" },
    ],
  },
  {
    category: "Dolci",
    items: [
      { name: "Brioche Ripiena di Gelato", desc: "Frutti di bosco freschi dell'Alto Molise" },
      { name: "Gelati Artigianali", desc: "Delicatissimi, mantecati in casa" },
    ],
  },
  {
    category: "Sera con Pinsa",
    items: [
      { name: "Pinsa ai 5 Cereali", desc: "Impasto leggero, lunga lievitazione, con selezione di birre artigianali", signature: true },
    ],
  },
  {
    category: "Bevande & Bottiglieria",
    items: [
      { name: "Vini Molisani Regionali", desc: "Una carta vini che racconta il territorio" },
      { name: "Birre Artigianali", desc: "Selezione curata per la sera" },
      { name: "Liquori della Casa", desc: "Prodotti direttamente dall'osteria — acquistabili", signature: true },
    ],
  },
];

export const REVIEWS = [
  { quote: "Al di sopra di ogni più rosea aspettativa. Prezzo più che onesto.", author: "Ospite in moto", source: "Google" },
  { quote: "Come entrare in paradiso: personale meraviglioso, cibo fatto con amore.", author: "Raymond D.", source: "Google" },
  { quote: "Un menù che rispetta la tradizione molisana legata al tartufo, rivisitata in chiave moderna.", author: "Cliente", source: "TripAdvisor" },
  { quote: "Gnocco ripieno e tagliatella al sugo di capriolo: le nostre papille gustative hanno festeggiato.", author: "Cliente", source: "Google" },
  { quote: "Locale pulito, personale attento, cibo abbondante e raffinato. Food 5/5, Service 5/5, Atmosphere 5/5.", author: "Cliente Google", source: "Google" },
  { quote: "Il Molise esiste ed è bellissimo.", author: "Un motociclista", source: "TripAdvisor" },
];

export const IMAGES = {
  hero: "https://images.pexels.com/photos/2773940/pexels-photo-2773940.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
  chef: "https://images.pexels.com/photos/36430150/pexels-photo-36430150.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200",
  ambiance: "https://images.pexels.com/photos/31771954/pexels-photo-31771954.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1000",
  territory: "https://images.pexels.com/photos/4147191/pexels-photo-4147191.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920",
  truffle: "https://images.pexels.com/photos/9698110/pexels-photo-9698110.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1000",
  risotto: "https://images.pexels.com/photos/17237177/pexels-photo-17237177.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1000",
  antipasto: "https://images.pexels.com/photos/29068725/pexels-photo-29068725.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1000",
  pinsa: "https://images.pexels.com/photos/21753110/pexels-photo-21753110.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1000",
};

export const INFO = {
  name: "Il Boccaccio Osteria",
  tagline: "Cucina di territorio. Sapori autentici. Tartufo nero dell'Alto Molise.",
  address: "Via Roma 82/A — 86088 San Pietro Avellana (IS), Molise",
  addressNote: "A 2 km dal centro · Parcheggio disponibile, anche per camper",
  hours: "Pranzo e Cena · Chiuso il Martedì",
  chef: "Ermes Colecchia",
  host: "Roberta",
  mapEmbed: "https://www.google.com/maps?q=Il+Boccaccio+osteria+San+Pietro+Avellana&output=embed",
};
