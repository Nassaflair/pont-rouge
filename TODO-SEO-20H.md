# Plan SEO — 10 actions, ~18 h 30

Établi le 17 septembre 2026, à partir de l'audit du 3 juillet (`GEO-AUDIT-REPORT.md`) et de
l'audit de citations des deux bureaux.

**Logique de priorisation.** Répartition du poids du classement local en 2026 : fiche Google
32 %, site 19 %, avis 16 %, liens 15 %, comportement 8 %, citations 7 %. Les actions sont
classées par rendement réel, pas par facilité. Lausanne est traité en priorité partout : Rue
Saint-Pierre 2 est en plein centre (la proximité pèse ~55 % et joue en ta faveur là-bas),
la fiche a déjà 7 avis, et presque rien n'a encore été fait autour.

| # | Action | Temps | Coût | Où |
|---|---|---|---|---|
| 1 | Déployer les 2 commits en attente | 0 h 30 | — | technique |
| 2 | Compléter les 2 fiches Google à 100 % + connecter les réseaux | 3 h 00 | — | off-site |
| 3 | Créer et connecter LinkedIn + Facebook | 2 h 00 | — | off-site |
| 4 | Répondre à tous les avis + installer un rythme de collecte | 2 h 00 | ~0-200 CHF | off-site |
| 5 | Corriger les 3 erreurs juridiques + page honoraires | 2 h 00 | — | on-site |
| 6 | Rendre la permanence 24h/24 visible + section garde à vue | 2 h 30 | — | on-site |
| 7 | Fiche localsearch Lausanne + renommer Genève | 1 h 00 | — | citations |
| 8 | OpenStreetMap + Foursquare pour les 2 bureaux | 1 h 30 | — | citations |
| 9 | Photos professionnelles des 2 bureaux | 2 h 00 | 800-1500 CHF | off-site |
| 10 | 5 backlinks amis + inscription Ordre des avocats vaudois | 2 h 00 | cotisation | off-site |

---

## 1. Déployer les 2 commits en attente — 0 h 30

Rien d'autre ne compte tant que ce n'est pas fait : les corrections (fiches Google câblées,
schema assaini, avis réattribués, redirection corrigée) sont sur GitHub depuis juillet et ne
sont **pas en ligne**. Le site pèse 19 % du classement ; ces corrections ne comptent pas tant
qu'elles dorment dans le dépôt.

- [ ] SSH Infomaniak → `cd /srv/customer/sites/clegal-avocats.ch && git pull`
- [ ] Dashboard Infomaniak → Node.js → **Construire** puis **Exécuter**
- [ ] Cloudflare → Caching → **Purge Everything**
- [ ] Vérifier : ouvrir `/contact` et voir les deux cartes + les liens vers les fiches Google

## 2. Compléter les deux fiches Google à 100 % + connecter les réseaux — 3 h 00

C'est l'action au meilleur rendement de toute la liste. Deux raisons, toutes deux récentes :
depuis mars 2026 la complétude est un facteur renforcé — **une fiche complète a 7 fois plus de
chances d'apparaître dans le pack local** — et Google dispose désormais d'un champ officiel
« Profils sociaux » que presque aucun concurrent ne remplit.

Sur **chaque** fiche (Genève et Lausanne) :

- [ ] **Catégorie principale** : « Avocat ». Secondaires : avocat pénaliste, avocat spécialisé
      en droit de la famille, avocat en droit du travail, avocat en droit des étrangers.
      C'est le levier de pertinence le plus puissant qui existe — mal réglé, il annule le reste.
- [ ] **Services** : une entrée par domaine du droit, avec une description propre à chacune
      (ne pas copier-coller la même partout)
- [ ] **Description** (750 car.) commençant par « Cabinet d'avocats à Lausanne… » / « …à Genève… »,
      avec la permanence 24h/24 et le premier rendez-vous dès 155 CHF
- [ ] **Horaires : ouvert 24h/24** — justifié par la permanence, et ça te fait sortir sur les
      recherches du soir et du week-end quand les concurrents affichent « fermé »
- [ ] **Attributs** : tous ceux qui s'appliquent (accessibilité, parking, langues parlées,
      rendez-vous en ligne, paiements acceptés)
- [ ] **Profils sociaux** (Modifier le profil → Contact → Profils sociaux) : Instagram, YouTube,
      TikTok — ils existent déjà et ne sont connectés nulle part
- [ ] **Lien du site** : fiche Genève → `/geneve?utm_source=google&utm_medium=organic&utm_campaign=gbp-geneve`
      · fiche Lausanne → `/lausanne?utm_source=google&utm_medium=organic&utm_campaign=gbp-lausanne`

## 3. Créer et connecter LinkedIn + Facebook — 2 h 00

Deux emplacements sociaux restent vides parce que les pages n'existent pas. Et il y a un enjeu
plus large : `linkedin.com/company/clegal` appartient à une **marketplace juridique française
homonyme**. Tant que tu n'as pas ta propre page, les moteurs et les IA peuvent confondre les
deux entités — c'est déjà le cas aujourd'hui.

- [ ] Page LinkedIn entreprise « Clegal Avocats » : les deux adresses, les deux numéros,
      description avec Genève et Lausanne
- [ ] Page Facebook avec l'**adresse complète** renseignée (sans adresse, elle ne compte pas
      comme citation)
- [ ] Connecter les deux aux deux fiches Google (champ Profils sociaux)
- [ ] Ajouter les deux URLs dans le `sameAs` du site — `composables/useLocalSeo.ts`, constante
      `SAME_AS_DEFAULT`

## 4. Répondre à tous les avis + installer un rythme de collecte — 2 h 00

Le changement le plus important de 2026 : **la régularité des avis est passée du rang 93 au
rang 11** des facteurs de classement — la plus forte progression jamais mesurée. Un cabinet
qui reçoit 2 avis par mois de façon continue bat un cabinet qui en a eu 15 d'un coup l'an
dernier puis plus rien.

Attention, correction d'une idée répandue : une étude contrôlée montre que **les mots-clés
dans le texte des avis n'ont aucun effet direct**. Ce qui est indexé, c'est **ta réponse**.
Donc ne demande rien de spécial à tes clients — mais soigne tes réponses.

- [ ] Répondre aux 7 avis de Lausanne et à ceux de Genève, en plaçant naturellement dans
      **tes réponses** : « avocat à Lausanne », « droit pénal », « Tribunal d'arrondissement
      de Lausanne », « Tribunal de première instance de Genève »
- [ ] Objectif : répondre à tout nouvel avis sous 24 h (signal d'activité)
- [ ] Mettre en place la demande systématique en fin de dossier : le lien court de la fiche
      envoyé par SMS ou dans le courriel de clôture — viser 2 à 3 avis par mois, en continu,
      **pas** une campagne groupée
- [ ] Un support de rendez-vous avec QR code vers la fiche, posé sur le bureau (~100-200 CHF
      d'impression si tu veux quelque chose de propre)

## 5. Corriger les 3 erreurs juridiques + la page honoraires — 2 h 00

Sur un site juridique, l'exactitude est un signal de confiance autant qu'une question de
responsabilité. Ces trois erreurs sont vérifiables par n'importe quel confrère.

- [ ] `/droit-famille/avocat-divorce` : l'entretien après divorce relève de l'**art. 125 CC**,
      pas de l'art. 163 CC (qui vise l'entretien pendant le mariage)
- [ ] `/droit-famille/avocat-divorce` : supprimer l'étape « phase de conciliation » — le divorce
      est **exempté** de conciliation préalable (art. 198 let. c CPC). La remplacer par
      l'audition des époux
- [ ] `/glossaire/ordonnance-penale-geneve` : retirer « opposition par e-mail » — la forme
      écrite de l'art. 110 CPP l'exclut, et sur un délai de déchéance de 10 jours ce conseil
      peut coûter un droit à un lecteur
- [ ] `/honoraires` : harmoniser la durée du 1er rendez-vous (60 min partout, contre « 30-45 min »
      actuellement sur cette seule page) et ajouter un **tableau de tarifs** (155.- le premier
      rendez-vous / 300-500 CHF/h / forfaits). C'est la page qui doit convertir sur les
      recherches de prix, et elle n'affiche aujourd'hui aucun tarif horaire.

## 6. Rendre la permanence 24h/24 visible + section garde à vue — 2 h 30

Ton différenciateur numéro un est **invisible là où il compte le plus** : ni sur `/droit-penal`,
ni sur la page d'accueil, ni dans l'article sur la procédure pénale. C'est exactement là que
quelqu'un cherche « avocat garde à vue Genève » à 2 h du matin.

- [ ] Bloc « Urgence pénale — 022 512 10 50, 24h/24 7j/7 » en haut de `/droit-penal`,
      de `/blog/procedure-penale-geneve` et de la page d'accueil
- [ ] Section garde à vue sur `/droit-penal` : droits de la personne entendue (art. 158 et 159
      CPP), que faire dans l'heure, quand appeler — avec une réponse directe de deux phrases en
      tête de section
- [ ] Même bloc sur `/lausanne` avec le 021 512 10 25

## 7. Fiche localsearch Lausanne + renommer Genève — 1 h 00

local.ch répond « Clegal dans toutes les régions — **1 résultat** », et c'est Genève. Ton
bureau de Lausanne n'existe pas sur l'annuaire suisse le plus consulté (local.ch et search.ch
touchent environ un adulte sur quatre). L'**entrée de base est gratuite** : si un commercial te
propose un pack à plusieurs milliers, la citation qui compte pour le pack local, tu l'as déjà
pour rien.

- [ ] Créer la fiche Lausanne : Clegal Avocats · Rue Saint-Pierre 2 · 1003 Lausanne · 021 512 10 25
- [ ] Corriger la fiche de Genève : elle s'appelle « **Avocats Clegal** » au lieu de
      « Clegal Avocats », et n'a pas de lien vers le site
- [ ] Une seule inscription alimente local.ch, search.ch et localcities.ch

## 8. OpenStreetMap + Foursquare pour les deux bureaux — 1 h 30

Vérifié par l'API Nominatim : **aucun point « Clegal » sur OpenStreetMap**, alors que les deux
immeubles sont cartographiés. Même constat sur Foursquare. Ces deux absences expliquent en
partie pourquoi tu n'apparais nulle part côté navigation — Foursquare alimente notamment les
lieux de Waze, qui n'a plus de page entreprise propre.

- [ ] Ajouter les deux bureaux sur OpenStreetMap avec les bons tags : `name`, `addr:street`,
      `addr:housenumber`, `addr:postcode`, `phone`, `website`, `office=lawyer`.
      Pas de langage promotionnel : c'est une communauté, une contribution publicitaire se fait annuler.
- [ ] Créer les deux lieux sur Foursquare
- [ ] Effet lent mais durable : ces données irriguent d'autres services pendant des années

## 9. Photos professionnelles des deux bureaux — 2 h 00 + 800-1500 CHF

C'est là que l'argent est le mieux investi. Les photos alimentent directement la complétude
(facteur 7) et les signaux comportementaux — passés de la 6ᵉ à la 4ᵉ place en 2026 : le temps
passé sur la fiche, les appels, les demandes d'itinéraire.

- [ ] Photographe pour une demi-journée : façade des deux immeubles (avec la rue reconnaissable),
      intérieur, salle de réunion, portraits de l'équipe
- [ ] Charger sur chaque fiche Google, puis sur LinkedIn, Facebook et le site
- [ ] Remplacer au passage le « Photo à venir » de Me Rodrigues sur `/equipe`
- [ ] Bonus technique : créer une image 1200×630 pour l'`og:image` — aujourd'hui c'est un SVG,
      donc **aucune image ne s'affiche** quand on partage le site sur WhatsApp, LinkedIn ou
      Facebook (`nuxt.config.ts`, lignes 85 et 89)

## 10. Cinq backlinks amis + inscription à l'Ordre vaudois — 2 h 00 + cotisation

Les liens pèsent 15 %, et tu n'as aujourd'hui aucune stratégie. Tes cinq contacts (FryBurger,
Hôtel de la Poste Martigny, Hôtel du Stand, Seepark Morat, Hôtel des Alpes Bulle) sont des
entreprises suisses réelles : des liens légitimes, à condition d'éviter le motif « réseau ».

- [ ] Un lien par site, **jamais dans le pied de page** — une page partenaires ou infos pratiques
- [ ] Ancres variées : 4× la marque (« Clegal Avocats », « clegal-avocats.ch »), 1× descriptive
      (« cabinet d'avocats à Genève et Lausanne »)
- [ ] Cibles variées : 4× la page d'accueil, 1× `/lausanne`
- [ ] Étalés dans le temps — environ un par semaine, pas les cinq le même jour
- [ ] **Inscription au registre cantonal vaudois / Ordre des avocats vaudois** : ni « Cheema »
      ni « Clegal » n'y figurent. C'est la citation la plus autoritaire du canton, doublée d'un
      argument commercial — et pour un bureau qui se présente comme lausannois, c'est un trou
      de crédibilité que ni le site ni les annuaires ne comblent.

---

## Où ne PAS mettre d'argent

- **Les packs annuaires à plusieurs milliers par an.** L'entrée de base localsearch est gratuite
  et c'est elle qui produit la citation. Le pack achète de la visibilité publicitaire, pas du SEO.
- **Les offres « 200 annuaires suisses » ou « 500 citations garanties ».** Réseaux sans
  modération que Google identifie : ignorés au mieux, sanctionnés au pire. Les citations ne
  pèsent que 7 % — et plusieurs annuaires recommandés par ces prestataires sont morts
  (gelbeseiten.ch, firmen-verzeichnis.ch, swissguide.ch : vérifiés, ils ne répondent plus).
- **Wikidata.** Présenté partout comme un gain rapide, c'est l'inverse : la notabilité y est
  exigée, un élément sans couverture indépendante est supprimé, et il faut 3 à 6 mois avant
  tout effet.

## Ce que ce plan ne changera pas

La proximité du chercheur pèse environ 55 % du classement local. Route des Jeunes 9 est aux
Acacias, pas au centre de Genève : sur « avocat genève » cherché depuis le centre-ville, le
handicap est structurel et aucune optimisation ne le compense. D'où deux conséquences
assumées : les pages de quartier gardent leur utilité, et **Lausanne est la vraie opportunité
de croissance** — adresse centrale, fiche déjà active, concurrence à prendre de vitesse.

## Après ces 20 heures

Dans l'ordre de rendement : enrichir les pages minces (`/avocat-pully` 229 mots,
`/avocat-renens` 251 mots) ou les consolider ; publier du contenu vaudois (« procédure pénale
dans le canton de Vaud », « divorce dans le canton de Vaud ») pour attaquer les requêtes où
dominent Giorgini, Penalex et Brodard ; rendre visibles les FAQ qui n'existent aujourd'hui que
dans le code (risque de pénalité « structured data spam »).
