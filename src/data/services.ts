// Contenu des pages de prestations. Modifiable sans toucher aux composants.
// Aucun prix, durée ni garantie n'est inventé : ils sont affichés dans l'application au moment de la réservation.
import omra from '../assets/omra.jpg';
import omraBadal from '../assets/omra-badal.jpg';
import mecque from '../assets/visite-mecque.jpg';
import medine from '../assets/visite-medine.jpg';
import nabawi from '../assets/masjid-nabawi.jpg';
import type { ServiceKey } from './site';

export interface Place { name: string; ar?: string; text: string }
export interface ServiceContent {
  key: ServiceKey;
  path: string;
  seoTitle: string;
  seoDescription: string;
  h1: string;
  h1em: string;
  kicker: string;
  intro: string;
  heroAlt: string;
  hero: ImageMetadata;
  splitImg: ImageMetadata;
  splitAlt: string;
  whyTitle: string;
  why: string[];
  steps: { t: string; d: string }[];
  placesTitle?: string;
  places?: Place[];
  notes: { title: string; body: string }[];
  faq: { q: string; a: string }[];
  related: string[]; // slugs d'articles
  waText: string;
  schemaType: string;
}

export const CONTENT: Record<ServiceKey, ServiceContent> = {
  omra: {
    key: 'omra',
    path: '/omra',
    seoTitle: 'Guide pour la Omra : accompagnement à La Mecque',
    seoDescription:
      "Faites-vous accompagner par un guide religieux pour accomplir votre Omra : Ihram, Tawaf, Sa'i. Réservation dans l'application Nefsy, prise en charge à l'hôtel.",
    h1: 'Accomplir sa Omra,',
    h1em: 'guidé pas à pas',
    kicker: 'Accompagnement Omra',
    intro:
      "Un guide religieux vous retrouve à La Mecque et vous accompagne dans chaque rite de votre Omra : de l'état de sacralisation jusqu'à la sortie de l'Ihram. Vous vous concentrez sur l'adoration, il s'occupe du cadre.",
    heroAlt: 'Pèlerins en Ihram devant la Kaaba',
    hero: omraBadal,
    splitImg: omra,
    splitAlt: "Vue du Masjid Al-Haram pendant la Omra",
    whyTitle: 'Pourquoi se faire accompagner ?',
    why: [
      "Une première Omra suscite beaucoup de questions : où commencer le Tawaf, comment compter les tours, que faire en cas de doute ? Le guide répond sur le moment.",
      "Le guide s'engage, par le Règlement des guides Nefsy, à enseigner ce qui est établi par le Coran et la Sounna authentique.",
      "Une prise en charge claire : si votre hôtel est à moins de 500 m du Masjid Al-Haram, le guide vient vous y chercher ; au-delà, le rendez-vous est fixé avec vous.",
      "Les personnes à mobilité réduite sont prises en charge dès la chambre, avec fauteuil roulant, puis raccompagnées à la fin de la prestation.",
    ],
    steps: [
      { t: 'Téléchargez l\'application', d: "Disponible sur l'App Store et Google Play. Créez votre compte et choisissez « Omra »." },
      { t: 'Choisissez votre guide', d: "Consultez les guides disponibles à vos dates et sélectionnez celui qui vous convient." },
      { t: 'Réservez et payez en ligne', d: "Le paiement passe par une plateforme sécurisée externe. Aucune donnée bancaire n'est stockée par l'application." },
      { t: 'Convenez du rendez-vous', d: "La messagerie s'ouvre après paiement : vous fixez l'heure et le lieu avec votre guide." },
      { t: 'Accomplissez votre Omra', d: "Le guide vous accompagne tout au long des rites, de la talbiya à la fin du Sa'i." },
    ],
    notes: [
      { title: 'Ce que Nefsy ne fait pas', body: "Nefsy est une prestation de guidage sur place. Le visa, le billet d'avion et l'hébergement ne sont pas inclus." },
      { title: 'Avis religieux', body: "Pour une question de jurisprudence personnelle, le guide vous oriente, mais n'émet pas de fatwa : consultez un savant reconnu pour les cas particuliers." },
    ],
    faq: [
      { q: "La Omra est-elle obligatoire ?", a: "Les écoles juridiques divergent : pour les chaféites et les hanbalites elle est obligatoire une fois dans la vie pour celui qui en a la capacité ; pour les hanafites et les malikites, c'est une Sounna confirmée. Dans tous les cas, c'est une adoration très recommandée." },
      { q: "Faut-il être accompagné pour faire la Omra ?", a: "Non, ce n'est pas obligatoire. L'accompagnement est une aide, notamment pour une première Omra, pour des parents âgés ou pour comprendre le sens des rites." },
      { q: "Comment se déroule la prise en charge ?", a: "Hôtel à moins de 500 m du Masjid Al-Haram : le guide vient vous chercher. Au-delà : rendez-vous convenu ensemble via la messagerie de l'application. Personnes à mobilité réduite : prise en charge directement à la chambre." },
      { q: "Quel est le prix ?", a: "Les tarifs sont affichés dans l'application Nefsy au moment de la réservation, selon la prestation choisie." },
      { q: "Et si je dois annuler ?", a: "Annulation gratuite jusqu'à 48 h avant la prestation ; au-delà, une retenue de 25 % s'applique (politique d'annulation)." },
    ],
    related: ['etapes-de-la-omra', 'omra-badal-conditions-deroulement'],
    waText: "Bonjour Nefsy, je souhaite réserver un guide pour ma Omra.",
    schemaType: 'Accompagnement religieux pour la Omra',
  },

  'omra-badal': {
    key: 'omra-badal',
    path: '/omra-badal',
    seoTitle: 'Omra Badal : faire accomplir une Omra pour un proche',
    seoDescription:
      "Omra Badal pour un parent défunt, malade ou âgé : un guide accomplit la Omra à votre intention et vous envoie une vidéo à l'Ihram et à la fin.",
    h1: 'Omra Badal :',
    h1em: 'une adoration offerte à un proche',
    kicker: 'Omra Badal',
    intro:
      "Vous ne pouvez pas partir, ou la personne à qui vous pensez n'est plus de ce monde ? Un guide Nefsy accomplit la Omra à son intention et vous transmet une vidéo à l'entrée en Ihram, puis une seconde à la fin.",
    heroAlt: 'Foule de pèlerins en Ihram près de la Kaaba',
    hero: omraBadal,
    splitImg: omra,
    splitAlt: 'Pèlerin en prière au Masjid Al-Haram',
    whyTitle: 'Comment cela fonctionne avec Nefsy',
    why: [
      "Vous réservez la prestation « Omra Badal » dans l'application et indiquez la personne pour qui la Omra est accomplie.",
      "Le guide formule l'intention au nom de cette personne et accomplit les rites : Ihram, Tawaf, prière derrière le Maqam, Sa'i, puis rasage ou raccourcissement des cheveux.",
      "Le Règlement des guides leur impose deux vidéos : une à l'entrée en état de sacralisation, une après l'accomplissement complet de la Omra. Elles vous sont transmises pour attester de la bonne exécution.",
      "Le guide s'engage à honorer toute mission acceptée, sauf cas de force majeure dûment justifié.",
    ],
    steps: [
      { t: 'Réservez la prestation', d: "Dans l'application, choisissez « Omra Badal » et un guide." },
      { t: 'Communiquez le nom', d: "Indiquez le nom de la personne pour qui la Omra est accomplie, via la messagerie sécurisée." },
      { t: 'Vidéo à l\'Ihram', d: "Le guide vous envoie une courte vidéo à son entrée en état de sacralisation." },
      { t: 'Accomplissement des rites', d: "Tawaf, prière, Sa'i, puis sortie de l'Ihram." },
      { t: 'Vidéo de fin', d: "Une seconde vidéo vous est transmise après l'accomplissement complet de la Omra." },
    ],
    notes: [
      {
        title: 'Conditions religieuses : un point de vigilance',
        body: "La possibilité d'accomplir une Omra pour autrui est établie par des hadiths rapportés par Abu Dawud, at-Tirmidhi et an-Nasa'i. Les savants précisent généralement qu'elle s'adresse à une personne décédée ou dans l'incapacité durable de voyager, et qu'il est préférable que le mandataire ait déjà accompli sa propre Omra. Des divergences existent sur certains cas, notamment pour une personne vivante et en bonne santé : en cas de doute, demandez l'avis d'un savant avant de réserver. Notre article détaille les avis.",
      },
      { title: 'Données personnelles', body: "Les vidéos et photos sont partagées uniquement entre vous et le guide concerné. Aucune donnée n'est vendue à des tiers (voir la politique de confidentialité)." },
    ],
    faq: [
      { q: "Qui peut bénéficier d'une Omra Badal ?", a: "Selon l'avis le plus répandu chez les savants : une personne décédée, ou une personne vivante qui ne peut pas voyager en raison d'une maladie durable ou de l'âge. Les avis divergent pour d'autres situations ; demandez conseil à un savant si votre cas est particulier." },
      { q: "Puis-je faire une Omra Badal pour mes parents ?", a: "Oui, la pratique est rapportée dans le hadith d'Abu Razin al-'Uqayli (Abu Dawud, at-Tirmidhi, an-Nasa'i) : « Fais le Hajj et la Omra de la part de ton père ». Les conditions mentionnées ci-dessus s'appliquent." },
      { q: "Qu'est-ce que je reçois exactement ?", a: "Deux courtes vidéos : l'une à l'entrée en Ihram, l'autre à la fin de la Omra, transmises par le guide." },
      { q: "Le guide doit-il avoir déjà fait sa propre Omra ?", a: "C'est la condition retenue par la majorité des savants. Si ce point est important pour vous, demandez-le à Nefsy avant de réserver afin de vérifier la situation du guide concerné." },
      { q: "Quel est le tarif ?", a: "Il est affiché dans l'application au moment de la réservation." },
    ],
    related: ['omra-badal-conditions-deroulement', 'etapes-de-la-omra'],
    waText: "Bonjour Nefsy, j'aimerais des informations sur l'Omra Badal.",
    schemaType: 'Omra Badal (Omra par procuration)',
  },

  'visite-mecque': {
    key: 'visite-mecque',
    path: '/visites-mecque',
    seoTitle: 'Visites guidées de La Mecque : Hira, Thawr, Arafat',
    seoDescription:
      "Visite guidée de La Mecque avec un guide religieux : grotte de Hira, Jabal Thawr, Arafat, Mina et Muzdalifa. Réservation dans l'application Nefsy.",
    h1: 'Visites guidées de La Mecque :',
    h1em: "l'histoire des lieux saints",
    kicker: 'Visites de La Mecque',
    intro:
      "Au-delà du Haram, La Mecque garde la trace des débuts de la Révélation et de l'hégire. Un guide vous raconte ces lieux, avec rigueur et sans confusion entre histoire et rites.",
    heroAlt: 'Les plaines sacrées autour de La Mecque',
    hero: mecque,
    splitImg: mecque,
    splitAlt: 'Paysage de montagne près de La Mecque',
    whyTitle: 'Une visite pour comprendre, pas seulement voir',
    why: [
      "Chaque lieu est replacé dans son histoire : la Révélation, l'hégire, les rites du Hajj.",
      "Le guide distingue ce qui relève de l'histoire de ce qui relève des rites : visiter ces sites n'est pas un acte d'adoration, et aucun rite particulier n'y est prescrit en dehors du Hajj.",
      "Une prise en charge organisée : point de rendez-vous convenu via la messagerie, guide identifiable à son gilet officiel Nefsy.",
    ],
    steps: [
      { t: 'Choisissez « Visite de Makkah »', d: "Dans l'application, sélectionnez la prestation et un guide." },
      { t: 'Fixez le rendez-vous', d: "Hôtel à moins de 500 m du Haram : prise en charge sur place. Sinon, point convenu ensemble." },
      { t: 'Suivez le parcours', d: "Le guide commente chaque étape et répond à vos questions." },
    ],
    placesTitle: 'Les lieux au programme',
    places: [
      { name: 'Jabal Nour et la grotte de Hira', ar: 'جبل النور', text: "C'est dans la grotte de Hira que le Prophète ﷺ se retirait et qu'il a reçu les premiers versets du Coran. L'ascension est exigeante : prévoyez de bonnes chaussures et de l'eau." },
      { name: 'Jabal Thawr', ar: 'جبل ثور', text: "Le refuge du Prophète ﷺ et d'Abu Bakr lors de l'hégire, évoqué dans le Coran (sourate At-Tawba, 9:40)." },
      { name: "Arafat", ar: 'عرفات', text: "La plaine où se tient le rite central du Hajj, la station d'Arafat. Hors période de Hajj, on s'y rend pour l'histoire et la contemplation." },
      { name: 'Mina', ar: 'منى', text: "Le lieu des nuits du Hajj et de la lapidation des stèles, aux portes de La Mecque." },
      { name: 'Muzdalifa', ar: 'مزدلفة', text: "L'étape entre Arafat et Mina, où les pèlerins passent la nuit après la station d'Arafat." },
    ],
    notes: [
      { title: 'À savoir', body: "Ces visites ne sont pas des rites de la Omra et ne s'y substituent pas. Les conditions d'accès (horaires, ascensions, restrictions locales) peuvent évoluer : votre guide vous informe le jour de la visite." },
    ],
    faq: [
      { q: "Ces visites font-elles partie des rites de la Omra ?", a: "Non. La Omra se compose de l'Ihram, du Tawaf, du Sa'i et du rasage ou raccourcissement des cheveux. Les visites de lieux historiques sont une démarche complémentaire." },
      { q: "Peut-on monter à la grotte de Hira ?", a: "L'accès à Jabal Nour est possible mais physiquement exigeant. Demandez à votre guide, selon votre condition, ce qui est réaliste." },
      { q: "Combien de temps dure la visite ?", a: "La durée dépend du parcours choisi avec le guide. Elle est précisée dans l'application." },
      { q: "Quel est le tarif ?", a: "Il est affiché dans l'application au moment de la réservation." },
    ],
    related: ['visiter-la-mecque-lieux-historiques', 'etapes-de-la-omra'],
    waText: "Bonjour Nefsy, je souhaite réserver une visite guidée de La Mecque.",
    schemaType: 'Visite guidée de La Mecque',
  },

  'visite-medine': {
    key: 'visite-medine',
    path: '/visites-medine',
    seoTitle: 'Visites guidées de Médine : Quba, Uhud, Baqi',
    seoDescription:
      "Visite guidée de Médine avec un guide religieux : mosquée de Quba, mont Uhud, mosquée des deux Qiblas, cimetière d'al-Baqi. Réservation dans l'application Nefsy.",
    h1: 'Visites guidées de Médine :',
    h1em: 'sur les traces du Prophète ﷺ',
    kicker: 'Visites de Médine',
    intro:
      "Médine est la ville de l'hégire, de la première mosquée et de la bataille d'Uhud. Un guide vous accompagne sur ces lieux et vous en raconte l'histoire, entre palmeraies et mosquées.",
    heroAlt: 'Les parasols du Masjid Nabawi à Médine',
    hero: medine,
    splitImg: medine,
    splitAlt: 'Parasols de la Mosquée du Prophète',
    whyTitle: 'Une immersion dans la première communauté',
    why: [
      "Les lieux sont racontés avec leurs sources : récits authentiques de la Sira et hadiths.",
      "Le guide rappelle aussi les règles de comportement (tenue, silence, étiquette) pour vivre ces visites sereinement.",
      "La prise en charge s'adapte à votre niveau de mobilité ; les personnes à mobilité réduite sont accompagnées de la chambre au retour.",
    ],
    steps: [
      { t: 'Choisissez « Visite de Médine »', d: "Dans l'application, sélectionnez la prestation puis votre guide." },
      { t: 'Fixez le rendez-vous', d: "Le lieu et l'horaire sont convenus avec le guide via la messagerie." },
      { t: 'Parcourez les lieux', d: "Le guide commente chaque étape et répond à vos questions." },
    ],
    placesTitle: 'Les lieux au programme',
    places: [
      { name: 'Mosquée de Quba', ar: 'مسجد قباء', text: "Première mosquée de l'islam, bâtie par le Prophète ﷺ à son arrivée. Un hadith rapporté notamment par Ibn Majah indique que celui qui se purifie chez lui puis y prie obtient une récompense équivalente à celle d'une Omra." },
      { name: 'Mont Uhud et cimetière des martyrs', ar: 'جبل أحد', text: "Théâtre de la bataille d'Uhud (an 3 de l'hégire), où repose notamment Hamza, oncle du Prophète ﷺ. Le Prophète ﷺ a dit : « Uhud est une montagne qui nous aime et que nous aimons » (al-Bukhari, Muslim)." },
      { name: 'Mosquée des deux Qiblas', ar: 'مسجد القبلتين', text: "Lieu associé au changement de direction de la prière, de Jérusalem vers la Kaaba (Coran, 2:144)." },
      { name: "Cimetière d'al-Baqi'", ar: 'البقيع', text: "Cimetière de nombreux Compagnons et membres de la famille du Prophète ﷺ. Les règles d'accès (notamment pour les femmes) sont encadrées localement : votre guide vous renseigne." },
      { name: 'Palmeraies de Médine', text: "Les jardins de dattiers, indissociables de l'identité de la ville, pour clore la visite." },
    ],
    notes: [
      { title: 'À savoir', body: "Les horaires d'ouverture et les règles d'accès sont fixés par les autorités saoudiennes et peuvent évoluer. Le guide vous informe le jour même." },
    ],
    faq: [
      { q: "Quels lieux peut-on visiter à Médine ?", a: "Les principaux sont la mosquée de Quba, le mont Uhud et le cimetière des martyrs, la mosquée des deux Qiblas et le cimetière d'al-Baqi'. Le parcours exact est défini avec votre guide." },
      { q: "La visite de Médine est-elle obligatoire pour la Omra ?", a: "Non. Elle n'appartient pas aux rites de la Omra, mais beaucoup de pèlerins la combinent avec leur séjour." },
      { q: "Peut-on prier dans la mosquée de Quba ?", a: "Oui, et c'est recommandé. La prière à Quba est mentionnée dans plusieurs hadiths." },
      { q: "Quel est le tarif ?", a: "Il est affiché dans l'application au moment de la réservation." },
    ],
    related: ['visiter-medine-lieux-historiques'],
    waText: "Bonjour Nefsy, je souhaite réserver une visite guidée de Médine.",
    schemaType: 'Visite guidée de Médine',
  },

  'masjid-nabawi': {
    key: 'masjid-nabawi',
    path: '/visite-masjid-nabawi',
    seoTitle: 'Visite guidée du Masjid Nabawi à Médine : Rawda',
    seoDescription:
      "Visite guidée de la Mosquée du Prophète ﷺ à Médine : Rawda, histoire, étiquette. Un guide Nefsy vous accompagne, réservation dans l'application.",
    h1: 'Visite du Masjid Nabawi :',
    h1em: 'foi, histoire et émotion',
    kicker: 'Masjid Nabawi',
    intro:
      "Entrer dans la Mosquée du Prophète ﷺ peut être déroutant : foule, zones, accès. Un guide vous aide à comprendre ce que vous voyez et à vivre la visite en toute sérénité.",
    heroAlt: 'Le Masjid Nabawi à Médine',
    hero: nabawi,
    splitImg: nabawi,
    splitAlt: 'Mosquée du Prophète ﷺ',
    whyTitle: 'Ce que le guide vous explique',
    why: [
      "L'histoire de la mosquée, bâtie par le Prophète ﷺ à son arrivée à Médine, puis agrandie au fil des siècles.",
      "La Rawda : le Prophète ﷺ a dit que l'espace entre sa maison et son minbar est « un jardin parmi les jardins du Paradis » (al-Bukhari, Muslim).",
      "L'étiquette de la visite et de la salutation au Prophète ﷺ, selon les pratiques établies.",
    ],
    steps: [
      { t: 'Réservez dans l\'application', d: "Choisissez « Visite du Masjid Nabawi »." },
      { t: 'Rendez-vous avec le guide', d: "Lieu et horaire convenus via la messagerie." },
      { t: 'Visite commentée', d: "Le guide vous accompagne et répond à vos questions." },
    ],
    notes: [
      { title: 'Accès à la Rawda', body: "L'accès à la Rawda est soumis à des autorisations et à des créneaux définis par les autorités saoudiennes, à réserver via l'application officielle Nusuk. Vérifiez les conditions en vigueur avant votre séjour." },
    ],
    faq: [
      { q: "Qu'est-ce que la Rawda ?", a: "C'est l'espace situé entre l'ancienne maison du Prophète ﷺ et son minbar, mentionné dans un hadith authentique comme « un jardin parmi les jardins du Paradis »." },
      { q: "Faut-il réserver pour entrer à la Rawda ?", a: "À ce jour, l'accès est encadré par un système de réservation officiel. Renseignez-vous sur la plateforme Nusuk avant votre arrivée." },
      { q: "Quel est le tarif ?", a: "Il est affiché dans l'application au moment de la réservation." },
    ],
    related: ['visiter-medine-lieux-historiques'],
    waText: "Bonjour Nefsy, je souhaite réserver la visite du Masjid Nabawi.",
    schemaType: 'Visite guidée du Masjid Nabawi',
  },
};
