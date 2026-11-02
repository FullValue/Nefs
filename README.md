# Site Nefsy

Site multipage statique (Astro 5) : accueil, 5 prestations, blog, À propos, FAQ, contact, pages légales.

## Démarrer

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # génère dist/
npm run preview
```

## Où modifier quoi

| Besoin | Fichier |
|---|---|
| Contacts, liens stores, WhatsApp, FAQ globale | `src/data/site.ts` |
| Contenu des pages de prestations | `src/data/services.ts` |
| Design (couleurs, typo, composants) | `src/styles/global.css` |
| Ajouter un article | un fichier `.md` dans `src/content/blog/` (nom du fichier = URL) |
| Textes légaux | `src/pages/CGVU.astro`, `chartesethiques.astro`, etc. |

Front-matter d'un article : voir `src/content.config.ts` (titre ≤ 70 car., description 80-165 car., catégorie, date, cover, `cta`, `faq`, `related`, `draft`, `reviewed`). Mettre `draft: true` pour ne pas publier.

## SEO en place

URLs propres, title/description par page, canonical, Open Graph, sitemap (`/sitemap-index.xml`), robots.txt, fil d'Ariane, JSON-LD (Organization, WebSite, Service, Article, BreadcrumbList, FAQPage, ItemList, Blog, ContactPage), images WebP via `astro:assets`, polices auto-hébergées, 1 seul H1 par page, JavaScript minimal.

Les anciennes URLs légales sont conservées (`/CGVU`, `/mentionslegales`, `/politiquedeconfidentialite`, `/politiquedannulation`, `/chartesethiques`, `/delete-account`) car elles sont probablement référencées dans les stores. Les variantes sont redirigées par `public/_redirects`.

Stratégie éditoriale et base documentaire : `docs/seo-base-editoriale.md`.

## À configurer / valider avant mise en ligne

1. **Domaine** : `nefsy.fr` supposé (variable `PUBLIC_SITE_URL`, `public/robots.txt`). Corriger si différent.
2. **WhatsApp** : `+33 7 45 53 77 76`, lu sur le gilet de la photo officielle. À confirmer.
3. **Formulaires** : fonctionnent avec Netlify Forms (détection au déploiement). Alternative : `PUBLIC_FORM_ENDPOINT` (Formspree, Web3Forms…). Sans envoi possible, un lien e-mail de secours s'affiche. À tester après déploiement.
4. **Prix, durées, nombre de guides, dates de création** : aucune valeur inventée. Les tarifs renvoient à l'application. Zones `todo` à compléter dans `/a-propos` et `/mentionslegales` (directeur de publication, hébergeur).
5. **Avis clients** : aucun faux avis. Ajouter de vrais témoignages vérifiés.
6. **Hero d'accueil conservé à l'identique** (demande du client) : il reprend les allégations de l'ancien site (« application n°1 », « guides certifiés / vérifiés & certifiés », « 100 % sécurisé »). Aucune preuve n'est fournie dans le projet : à justifier ou à retirer (`src/components/HeroOriginal.astro`). Ailleurs sur le site, ces allégations ne sont pas utilisées (« support 24/7 » et « garantie de remboursement » retirés ; remplacés par la politique d'annulation publiée).
7. **Images** : `omra-badal.jpg` porte un filigrane « Faisal Althaqfi » : vérifier les droits ou le remplacer. `guides-nefsy.jpeg` semble être une image générée : à confirmer ; elle sert d'image Open Graph par défaut.
8. **Relecture religieuse** : les 5 articles et les pages de prestations doivent être relus par un référent avant promotion.
9. **Données structurées** : `LocalBusiness` volontairement omis (pas d'adresse d'accueil du public). `Organization` utilise le siège légal.
10. `payment-status` : l'ancien fichier était vide ; la page actuelle renvoie vers l'application (noindex). Adapter si une redirection de paiement l'utilise.
