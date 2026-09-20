# Analyse SEO local — clegal-avocats.ch

**Date** : 20 septembre 2026
**Type d'établissement** : Brick-and-mortar, multi-sites (2 bureaux)
**Secteur détecté** : Juridique (avocat, domaines de pratique, barreau, premier rendez-vous)
**Priorité déclarée** : Genève (gros du chiffre d'affaires), Lausanne en croissance

---

## Score SEO local : 48/100

| Dimension | Poids | Score | Pondéré |
|---|---|---|---|
| Signaux fiche Google (GBP) | 25 % | 50/100 | 12.5 |
| Avis et réputation | 20 % | 35/100 | 7.0 |
| SEO local on-page | 20 % | 65/100 | 13.0 |
| Cohérence NAP et citations | 15 % | 40/100 | 6.0 |
| Schema local | 10 % | 75/100 | 7.5 |
| Liens et autorité locale | 10 % | 20/100 | 2.0 |
| **Total** | | | **48/100** |

Le site est techniquement au-dessus de la moyenne du secteur ; ce qui plafonne le score, c'est
**tout ce qui vit en dehors du site** — avis, citations, autorité locale — et un défaut de
structure sur les pages de quartier.

---

## 1. Signaux fiche Google — 50/100

Les deux fiches existent (Genève `/g/11kr80wp4s`, Lausanne `/g/11zb49qxb_`). C'est l'acquis.

**Ce qui manque, par ordre d'impact :**

- **La catégorie principale n'est pas vérifiée.** C'est le facteur n°1 du pack local
  (Whitespark 2026, score 193) et une catégorie incorrecte est aussi le **premier facteur
  négatif** (score 176). Aucune optimisation ne compense une catégorie mal réglée.
- **Catégories secondaires** : l'optimum mesuré est de 4 catégories additionnelles. À vérifier
  sur les deux fiches.
- **Aucun signal de fiche détectable depuis le site** — corrigé dans le code en attente de
  déploiement (liens vers les fiches, `hasMap`, `sameAs` vers les entités Knowledge Graph).
- **Horaires** : « ouvert 24h/24 » est un avantage de classement réel — les établissements
  ouverts au moment de la recherche remontent (facteur n°5). Ta permanence le justifie.
- **Photos** : +45 % de demandes d'itinéraire avec photos (Agency Jet).

**Nuance sur le lien du site** (Sterling Sky, Diversity Update) : ne pas faire pointer la fiche
vers la page la plus forte du site, au risque de supprimer ses positions organiques. Pointer
la fiche Lausanne vers `/lausanne` et la fiche Genève vers `/geneve` reste donc le bon choix —
la page d'accueil est la plus forte, on l'évite.

## 2. Avis et réputation — 35/100

C'est le poste le plus faible par rapport à son poids (20 % du classement, en hausse).

- **Lausanne est à 7 avis — juste en dessous du seuil de 10** identifié par Sterling Sky comme
  le palier où une fiche commence à peser. Trois avis séparent cette fiche du déclic.
- **La règle des 18 jours** (Sterling Sky) : les positions décrochent quand aucun avis nouveau
  n'arrive pendant trois semaines. Ce n'est donc pas un objectif de volume mais **une cadence
  à ne jamais interrompre** — un avis toutes les deux semaines vaut mieux que dix d'un coup.
- **74 % des consommateurs ne regardent que les avis des trois derniers mois.**
- **Aucune présence multi-plateformes** : les consommateurs consultent en moyenne six sites
  d'avis. Ni Yelp, ni Trustpilot, ni annuaire juridique avec avis.

**Avertissement déontologique — important pour un avocat.** Répondre publiquement à un avis
expose au secret professionnel (art. 13 LLCA). Une réponse ne doit ni confirmer que la personne
a été cliente, ni évoquer le dossier. Cela reste compatible avec l'insertion de mots-clés —
mais sur le mode impersonnel : « Notre étude intervient régulièrement devant le Tribunal
d'arrondissement de Lausanne en droit pénal » plutôt que « merci pour votre confiance lors de
votre divorce ». Cette nuance corrige le conseil donné précédemment.

**Interdiction formelle** : tout filtrage préalable de satisfaction avant d'orienter vers
Google (« review gating ») est prohibé — politique Google sur l'engagement factice, et côté
FTC une amende par infraction.

## 3. SEO local on-page — 65/100

**Les fondamentaux sont bons** : ville dans le title et le H1, NAP visible, 36 liens `tel:`
cliquables, pages de service dédiées (facteur n°1 du local organique **et** n°2 de la
visibilité IA selon Whitespark 2026), cartes intégrées, maillage correct.

**Deux problèmes structurels, en revanche :**

### a) Cinq pages de quartier sont des doorway pages — confirmé par le test du swap

Le test consiste à remplacer le nom de la ville : si le reste tient encore debout, la page
est une coquille. Mesuré sur le rendu réel :

| Paire | Mots en commun |
|---|---|
| avocat-morges ~ avocat-renens | 76 % |
| avocat-champel ~ avocat-plainpalais | 73 % |
| avocat-champel ~ avocat-lancy | 71 % |
| avocat-plainpalais ~ avocat-renens | 70 % |

**Unicité réelle : 32 %**, pour un seuil de sécurité à 60-70 %. Ces cinq pages partagent le
composant `QuartierPage` et ne diffèrent que par leurs props. C'est exactement le motif qui a
coûté 80 % de positions et 63 % de trafic à une entreprise après la mise à jour de mars 2024.

Les trois pages écrites à la main (Carouge, Eaux-Vives, Pully) sont saines : 27 % de similarité.

L'ajout des FAQ visibles améliore la situation d'environ 90 mots uniques par page, mais ne
suffit pas : il faut du contenu réellement local (une affaire anonymisée de la commune, les
spécificités de la juridiction, un repère géographique concret) ou une consolidation.

### b) Aucune page de service n'est ancrée dans le canton de Vaud

| Page | Mentions Genève | Mentions Vaud |
|---|---|---|
| droit-penal | 25 | 0 |
| droit-famille | 27 | 0 |
| droit-travail | 18 | 0 |
| droit-etrangers | 15 | 0 |
| droit-bail | 12 | 0 |
| droit-immobilier | 19 | 0 |
| droit-affaires | 21 | 0 |
| droit-assurance | 16 | 0 |

Sur « avocat divorce lausanne », il n'existe aucune page à proposer. Giorgini, lui, a une page
par domaine **et** par ville. C'est le trou structurel n°1 côté vaudois — et il n'entre pas en
conflit avec la priorité genevoise, puisqu'il s'agit d'ajouter, pas de déplacer.

## 4. Cohérence NAP et citations — 40/100

**Cohérence interne : parfaite.** Adresse, téléphone et nom identiques entre le HTML visible,
le schema et le pied de page, sur les deux bureaux. C'est rare et c'est un acquis.

**Citations externes : quasi inexistantes.**

| Source | Genève | Lausanne |
|---|---|---|
| local.ch / search.ch | Oui (sous « Avocats Clegal », nom incorrect) | Non |
| Moneyhouse / registre du commerce | Non (aucune entité) | Non |
| Yelp, Trustpilot, Branchenbuch, Pagesdor, Tupalo, Foursquare, OpenStreetMap | Non | Non |
| Ordre des avocats vaudois | — | Non inscrit |

**Point devenu central** : ChatGPT n'accède pas aux fiches Google. Il puise dans l'index Bing,
Yelp, TripAdvisor, BBB et Reddit. Or **45 % des consommateurs utilisent désormais l'IA pour
des recommandations locales** (contre 6 % l'an dernier), et le trafic issu de ChatGPT convertit
à **15,9 % contre 1,76 % pour l'organique Google**. Bing Places et Yelp cessent d'être des
options secondaires : ce sont les portes d'entrée du canal qui convertit le mieux.

## 5. Schema local — 75/100

**Bien fait** : type `LegalService` (le bon — `Attorney` est déprécié), deux entités distinctes
avec adresse, téléphone, horaires 24h/24, `areaServed`, `priceRange`, `hasOfferCatalog`,
`employee`. Rendu côté serveur, donc lisible sans JavaScript.

**Corrections déjà faites, en attente de déploiement** : URL canonique par entité, `hasMap`
pointant vers une vraie carte, `sameAs` dédoublonné, suppression de l'`aggregateRating`
auto-attribué, référence `Organization` résolue sur la page avis.

**Reste à corriger** : les coordonnées `geo` n'ont que 4 décimales (46.1871 / 6.1296), le
minimum recommandé est 5. Sur une adresse urbaine, 4 décimales représentent une imprécision
d'une dizaine de mètres — suffisant pour placer le point du mauvais côté de la rue.

## 6. Liens et autorité locale — 20/100

Le poste le plus faible en valeur absolue. Les liens représentent ~26 % du classement local
organique (facteur n°2 par groupe).

Aucun signal détecté : pas de chambre de commerce (CCIG à Genève, CVCI dans le canton de Vaud),
pas d'inscription à l'ordre vaudois, pas de presse locale, pas de sponsoring, aucune présence
dans une liste « meilleurs avocats de… ».

Deux repères utiles :
- Les placements dans des listes « best of » sont le **premier facteur de citation en
  visibilité IA** (Whitespark 2026).
- Les mentions de marque corrèlent **trois fois plus fortement** avec la visibilité IA que les
  backlinks classiques (Ahrefs : 0,664 contre 0,218). Être cité compte plus qu'être lié.

---

## Dix actions prioritaires

| # | Action | Gravité |
|---|---|---|
| 1 | Vérifier et corriger la **catégorie principale** des deux fiches | Critique |
| 2 | Porter Lausanne de 7 à **10+ avis**, puis tenir la cadence des 18 jours | Critique |
| 3 | Déployer les corrections en attente (liens fiches, schema assaini, FAQ visibles) | Critique |
| 4 | Réécrire ou consolider les **5 pages doorway** (32 % d'unicité) | Élevée |
| 5 | Créer les pages **domaine × Vaud** (divorce, pénal, travail à Lausanne) | Élevée |
| 6 | Bing Places + Yelp — les portes d'entrée de ChatGPT, qui convertit 9× mieux | Élevée |
| 7 | Compléter les deux fiches à 100 % (catégories secondaires, services, photos, attributs) | Élevée |
| 8 | Inscription à l'ordre vaudois + chambre de commerce | Moyenne |
| 9 | Corriger « Avocats Clegal » → « Clegal Avocats » sur local.ch et search.ch | Moyenne |
| 10 | Passer les coordonnées `geo` à 5 décimales | Faible |

---

## Ce que cette analyse n'a pas pu mesurer

- **Position réelle dans le pack local** selon le point de départ de la recherche (geo-grid) —
  nécessite un outil de suivi géolocalisé.
- **Contenu réel des fiches Google** : catégories, attributs, photos, posts, questions-réponses.
  Ces données ne sont visibles que depuis le tableau de bord.
- **Cadence réelle des avis** et taux de réponse.
- **Profil de backlinks** et autorité de domaine.
- **Données GBP Insights** : appels, demandes d'itinéraire, vues.

Pour combler ces angles morts : `seo-maps` (suivi geo-grid, audit de fiche par API) et
`seo-google` (Search Console, CrUX, GA4) si les accès sont connectés.
