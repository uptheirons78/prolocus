import cosaVedereImg from "../images/nepi/nepi-cavatera-02.jpg";
import doveDormireImg from "../images/dove-dormire.jpg";
import doveMangiareImg from "../images/dove-mangiare.jpg";
import eccellenzeImg from "../images/nepi/eccellenze-locali.jpg";
import eventiImg from "../images/nepi/nepi-palio-dei-borgia.jpg";
import convenzioniImg from "../images/nepi/nepi-fontana-piazza.jpg";

const items = [
  {
    title: "cosa vedere",
    text:
      'La Rocca dei Borgia, i Bastioni Farnesiani, le Catacombe di Santa Savinilla o le Vie Cave detti "Cavoni" sono solo alcuni dei meravigliosi luoghi da visitare sul nostro territorio.',
    url: "/cosa-vedere",
    img: cosaVedereImg,
  },
  {
    title: "dove mangiare",
    text:
      "Nepi offre una varietà di trattorie e ristoranti dove potrete degustare la nostra cucina locale e soddisfare il vostro palato.",
    url: "/dove-mangiare",
    img: doveMangiareImg,
  },
  {
    title: "dove dormire",
    text:
      "Qualora voleste prolungare il vostro soggiorno a Nepi potrete usufruire delle strutture ricettive presenti sul territorio.",
    url: "/dove-dormire",
    img: doveDormireImg,
  },
  {
    title: "eccellenze locali",
    text:
      "Salame Cotto, Pecorino Romano e la nostra Cipolla di Nepi sono soltanto alcune delle eccellenze enogastronomiche che potrete gustare sul nostro territorio.",
    url: "/eccellenze-locali",
    img: eccellenzeImg,
  },
  {
    title: "prossimi eventi",
    text:
      "Molti sono gli eventi culturali ed enogastronomici che si tengono sul nostro territorio durante l'anno, qui potrai scoprire quali saranno i prossimi",
    url: "/eventi",
    img: eventiImg,
  },
  {
    title: "le nostre convenzioni",
    text:
      "La Proloco Nepi ha stipulato convenzioni con diversi esercizi ed attività locali che permettono ai suoi tesserati di ottenere sconti e vantaggi.",
    url: "/convenzioni",
    img: convenzioniImg,
  },
];

export { items };
