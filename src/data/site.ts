// Source unique des informations de marque, contacts et prestations.
// Tout ce qui est marqué "À CONFIRMER" doit être validé par Nefsy avant mise en production.

export const SITE = {
  name: 'Nefsy',
  legalName: 'SMHRJU',
  url: (import.meta.env.PUBLIC_SITE_URL as string | undefined) || 'https://nefsy.fr', // À CONFIRMER (domaine)
  tagline: "Guides religieux pour votre Omra et vos visites à La Mecque et Médine",
  email: 'contact@nefsy.fr',
  supportEmail: 'support@nefsy.app',
  // Numéro visible sur le gilet "Guide Nefsy" de la photo officielle. À CONFIRMER.
  whatsapp: '33745533776',
  whatsappDisplay: '+33 7 45 53 77 76',
  address: '78 Avenue des Champs Élysées, 75008 Paris, France',
  rcs: '100957091',
  appStore: 'https://apps.apple.com/fr/app/nefsy/id6763761659',
  playStore: 'https://play.google.com/store/apps/details?id=com.marwann7.guideomra',
  instagram: 'https://www.instagram.com/nefsy2026?igsh=MWFyenRwNjd3aG1pZQ==',
  tiktok: 'https://www.tiktok.com/@nefsy2026?_r=1&_t=ZG-94hCTpQVcfI',
  // Formulaire : endpoint optionnel (Formspree, Web3Forms…). Sinon Netlify Forms.
  formEndpoint: (import.meta.env.PUBLIC_FORM_ENDPOINT as string | undefined) || '',
};

export const whatsappLink = (text = "Bonjour Nefsy, j'aimerais avoir des informations.") =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;

export type ServiceKey = 'omra' | 'omra-badal' | 'visite-mecque' | 'visite-medine' | 'masjid-nabawi';

export const SERVICES: {
  key: ServiceKey;
  path: string;
  title: string;
  short: string;
  nav: string;
  cta: string;
}[] = [
  {
    key: 'omra',
    path: '/omra',
    title: 'Accompagnement Omra',
    nav: 'Omra',
    short: "Un guide religieux à vos côtés pour accomplir chaque rite de la Omra dans les règles.",
    cta: 'Réserver un guide pour ma Omra',
  },
  {
    key: 'omra-badal',
    path: '/omra-badal',
    title: 'Omra Badal',
    nav: 'Omra Badal',
    short: "Faites accomplir une Omra pour un proche, avec une vidéo à l'entrée en Ihram et à la fin.",
    cta: 'Demander une Omra Badal',
  },
  {
    key: 'visite-mecque',
    path: '/visites-mecque',
    title: 'Visites de La Mecque',
    nav: 'Visites de La Mecque',
    short: "Jabal Nour, Jabal Thawr, Arafat, Mina, Muzdalifa : l'histoire des lieux, racontée par un guide.",
    cta: 'Réserver une visite à La Mecque',
  },
  {
    key: 'visite-medine',
    path: '/visites-medine',
    title: 'Visites de Médine',
    nav: 'Visites de Médine',
    short: "Quba, Uhud, Qiblatayn, Baqi : un parcours sur les traces du Prophète ﷺ.",
    cta: 'Réserver une visite à Médine',
  },
  {
    key: 'masjid-nabawi',
    path: '/visite-masjid-nabawi',
    title: 'Visite du Masjid Nabawi',
    nav: 'Masjid Nabawi',
    short: "La mosquée du Prophète ﷺ expliquée pas à pas : Rawda, histoire et étiquette.",
    cta: 'Réserver la visite du Masjid Nabawi',
  },
];

export const NAV = [
  { label: 'Prestations', href: '/prestations', children: SERVICES.map((s) => ({ label: s.nav, href: s.path })) },
  { label: 'Blog', href: '/blog' },
  { label: 'À propos', href: '/a-propos' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export const LEGAL = [
  { id: 'mentions', title: 'Mentions légales', href: '/mentionslegales' },
  { id: 'cgvu', title: 'Conditions générales (CGVU)', href: '/CGVU' },
  { id: 'privacy', title: 'Politique de confidentialité', href: '/politiquedeconfidentialite' },
  { id: 'cancellation', title: "Politique d'annulation", href: '/politiquedannulation' },
  { id: 'charter', title: 'Chartes éthiques', href: '/chartesethiques' },
  { id: 'delete', title: 'Suppression de compte', href: '/delete-account' },
];

export const FAQ_GLOBAL = [
  {
    q: "Qu'est-ce que Nefsy ?",
    a: "Nefsy est une application de mise en relation entre des pèlerins et des guides religieux présents à La Mecque et à Médine. Vous y réservez un accompagnement pour votre Omra, une Omra Badal ou une visite guidée des lieux saints.",
  },
  {
    q: 'Comment réserver une prestation ?',
    a: "La réservation se fait dans l'application Nefsy, disponible sur l'App Store et Google Play : vous choisissez la prestation, puis un guide, et vous réglez en ligne via une plateforme de paiement externe sécurisée. Les prix sont affichés dans l'application au moment de la réservation.",
  },
  {
    q: 'Comment sont choisis les guides ?',
    a: "Chaque guide s'engage à respecter le Règlement des guides religieux et le Code de conduite de Nefsy (consultables sur la page Chartes éthiques) : fidélité au Coran et à la Sounna authentique, ponctualité, interdiction de prêter son compte, port du gilet officiel.",
  },
  {
    q: 'Comment fonctionne la Omra Badal avec Nefsy ?',
    a: "Le guide accomplit la Omra à votre intention et vous transmet une courte vidéo à l'entrée en état de sacralisation (Ihram), puis une seconde vidéo une fois la Omra terminée.",
  },
  {
    q: 'Où se retrouve-t-on avec le guide ?',
    a: "Si votre hôtel est à moins de 500 mètres du Masjid Al-Haram, le guide vient vous chercher à l'hôtel. Au-delà, le point de rendez-vous est fixé d'un commun accord via la messagerie de l'application. Pour les personnes à mobilité réduite, le guide se rend directement à la chambre.",
  },
  {
    q: 'Puis-je annuler ma réservation ?',
    a: "Oui. Annulation sans frais jusqu'à 48 heures avant la prestation (remboursement intégral). Moins de 48 heures avant, une retenue de 25 % du montant total s'applique. Le détail figure dans la Politique d'annulation.",
  },
  {
    q: 'Nefsy organise-t-il mon voyage, mon visa ou mon hôtel ?',
    a: "Non. Nefsy propose des prestations de guidage sur place. Le transport, l'hébergement et le visa restent à votre charge ; renseignez-vous auprès des canaux officiels saoudiens (plateforme Nusuk, portail des visas).",
  },
  {
    q: "Mes données sont-elles protégées ?",
    a: "Aucune donnée bancaire n'est stockée par l'application et aucune géolocalisation en temps réel n'est collectée. Les échanges avec le guide sont limités au cadre de la mission. Voir la Politique de confidentialité.",
  },
];
