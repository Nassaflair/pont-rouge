# Audit SEO/GEO complet : Clegal Avocats

**Date de l'audit :** 3 juillet 2026
**URL :** https://clegal-avocats.ch
**Type d'activité :** Cabinet d'avocats (Local Business / Services, secteur YMYL)
**Pages analysées :** 48 URLs sitemap, ~25 pages analysées en profondeur
**Méthode :** 6 agents parallèles (production + code local Nuxt + recherches web publiques)

---

## Résumé exécutif

**Score GEO global : 62/100 (Fair — Moyen)**
**Score SEO local Lausanne : 28/100 (Critique)**

Le site est techniquement excellent (SSG intégral, robots.txt GEO exemplaire, llms.txt, schema riche, Cloudflare) et son contenu blog est un modèle de citabilité IA. Mais trois failles majeures plombent le résultat : (1) le bureau de Lausanne est **invisible hors du site** — pas de fiche Google Business Profile détectable, zéro citation locale ; (2) l'**autorité de marque est quasi nulle** (28/100) — sameAs vide, pas de LinkedIn entreprise, collision d'entité avec l'homonyme français « CLegal » ; (3) des **problèmes de confiance** sérieux pour un cabinet YMYL — avis clients aux attributions permutées, 3 erreurs juridiques de fond, schema d'avis auto-attribué en violation des guidelines Google.

### Détail du score

| Catégorie | Score | Poids | Pondéré |
|---|---|---|---|
| AI Citability | 72/100 | 25% | 18.0 |
| Brand Authority | 28/100 | 20% | 5.6 |
| Content E-E-A-T | 60/100 | 20% | 12.0 |
| Technical GEO | 92/100 | 15% | 13.8 |
| Schema & données structurées | 57/100 | 10% | 5.7 |
| Platform Optimization | 69/100 | 10% | 6.9 |
| **Score GEO global** | | | **62/100** |

Sous-scores plateformes : Google AI Overviews 79 · ChatGPT Search 73 · Gemini 69 · Perplexity 63 · Bing Copilot 63.

---

## Problèmes CRITIQUES (corriger immédiatement)

### C1. Aucune fiche Google Business Profile Lausanne détectable
Aucun signal public d'une fiche GBP pour le bureau de Lausanne (Rue Saint-Pierre 2). Les liens « Voir sur Google Maps » du site (/lausanne, /contact) sont des **requêtes d'adresse** (`maps?q=Rue+Saint-Pierre+2...`), pas des liens vers une fiche (CID). Sans fiche GBP : invisibilité totale dans le pack local, le canal n°1 pour « avocat lausanne ».
**Fix :** créer et vérifier la fiche GBP Lausanne (voir plan d'action Lausanne, section dédiée).

### C2. Zéro citation locale pour le bureau de Lausanne
Le numéro 021 512 10 25 n'existe **nulle part** sur le web hors clegal-avocats.ch. Ni local.ch, ni search.ch, ni OAV (Ordre des Avocats Vaudois), ni aucun annuaire ne mentionne le bureau de Lausanne. Google n'a aucune confirmation tierce de son existence.
**Fix :** inscriptions localsearch (local.ch + search.ch), annuaires, OAV — NAP strictement identique partout.

### C3. Attributions d'avis clients permutées entre /etude et /avis-clients
Le même verbatim (« ...professionnalisme, d'écoute et de réactivité... ») est attribué à **C.R. · Droit de la famille** sur /avis-clients et à **SB · Droit du travail** sur /etude (et inversement pour un autre avis). Pour un cabinet d'avocats, une manipulation apparente de témoignages — vérifiable par tout prospect via le lien Google — est le pire signal de confiance possible.
**Fix :** une attribution canonique par verbatim, alignée sur l'avis Google source.

### C4. Trois erreurs juridiques de fond (YMYL)
- /droit-famille/avocat-divorce : « Art. 163 CC : entretien pendant **et après** le divorce » → faux, l'entretien post-divorce = **art. 125 CC**.
- /droit-famille/avocat-divorce : « Phase de conciliation prévue par le CPC » → le divorce est **exempté** de conciliation préalable (art. 198 let. c CPC).
- /glossaire/ordonnance-penale-geneve : opposition « par e-mail dans certaines conditions » → dangereux, la forme écrite (art. 110 CPP) exclut l'e-mail simple, sur un délai de déchéance de 10 jours.

### C5. AggregateRating auto-attribué sur tout le site (violation guidelines Google)
`aggregateRating 5.0 / 12 avis` injecté dans le LegalService sur les ~48 pages (y compris /mentions-legales et l'entité **Lausanne** qui n'a aucun avis propre), + avis Google republiés sur /avis-clients. Double violation : avis « self-serving » ignorés depuis 2019, republication d'avis tiers interdite. Incohérence : 12 déclarés / 5 affichés. Risque d'action manuelle « structured data spam ».
**Fix :** `composables/useLocalSeo.ts:166-172` — retirer l'aggregateRating site-wide.

### C6. FAQ « fantômes » — schema FAQPage sans contenu visible
Sur /, /honoraires, /avocat-carouge, /avocat-pully, /avocat-renens, /glossaire/* : les questions du FAQPage n'existent que dans le JSON-LD, introuvables dans le HTML visible. Violation des guidelines (le markup doit refléter du contenu visible).
**Fix :** `useLocalSeo.ts:191-196` — rendre les FAQ visibles (accordéon) ou retirer le markup.

### C7. Permanence 24h/24 invisible là où elle compte le plus
Le différenciateur business n°1 (permanence 24h/24, urgences pénales, gardes à vue) est **absent** de /droit-penal, de /blog/procedure-penale-geneve et de la homepage (visible uniquement sur /geneve, /lausanne et llms.txt). L'article pénal ne traite même pas la garde à vue. C'est exactement là qu'une IA répond à « avocat garde à vue Genève ».
**Fix :** bloc « Urgence pénale — 022 512 10 50, 24h/24 7j/7 » en haut de ces pages + section garde à vue (art. 158/159 CPP).

---

## Problèmes ÉLEVÉS (corriger sous 1 semaine)

1. **sameAs quasi vide + collision d'entité.** Un seul lien (share.google opaque) dans tout le schema. Or linkedin.com/company/clegal appartient à une **marketplace juridique française homonyme** — sans désambiguïsation, les LLM risquent de fusionner les deux entités. Fix : créer la page LinkedIn entreprise « Clegal Avocats », remplir `sameAs` (`useLocalSeo.ts:18`) : ODAGE, justice.ge.ch, LinkedIn, YouTube, TikTok, Instagram, local.ch, fiches Google Maps complètes.
2. **Aucune inscription vaudoise.** Ni Cheema ni Clegal dans l'annuaire OAV/registre vaudois — la citation la plus autoritaire du canton pour un « avocat à Lausanne ».
3. **Incohérence sur l'offre phare :** consultation 155.- = « 60 minutes » partout vs « 30-45 min » sur /honoraires. Les IA pénalisent les contradictions internes. /honoraires n'affiche par ailleurs ni tarif horaire (llms-full.txt dit CHF 300-500/h) ni tableau ni FAQ → la page est ignorée par les synthèses IA sur les requêtes prix.
4. **Erreurs factuelles locales + coquilles :** Renens « 2e commune du canton » (faux, ~4e-5e), « abrite l'EPFL » (Écublens), Carouge « 3e commune » (faux, ~5e) ; « 100% de clients **statisfaits** » (/etude), « **Nos notre équipe** » (/avocat-carouge).
5. **Zéro validation communautaire** (Reddit, forums, plateformes d'avis tierces) — talon d'Achille pour Perplexity.
6. **llms.txt incomplet :** /geneve et /lausanne (les deux pages-mères des mots-clés stratégiques) absents, 3 articles de blog sur 4 manquants, « Juridiction principale : Genève » occulte Vaud.
7. **Empreinte tierce obsolète « Martigny » :** fiche Kompass « Clegal Avocats Martigny », anciens titles indexés « Genève et Martigny », anciennes URLs WordPress (/letude-davocat-clegal/, /fondateur-clegal-avocat/, /foire-aux-questions/) en 200+canonical au lieu de 301.
8. **Person fragmentée :** deux @id pour Me Cheema jamais reliés, `memberOf` (barreau) absent de tous les Person, `employee[]` instable (7 avocats sur /, 6 ailleurs, 1 sur la page auteur).

## Problèmes MOYENS (corriger sous 1 mois)

1. **og:image / twitter:image = logo.svg** (nuxt.config.ts:85,89) — non rendu par Facebook/LinkedIn/WhatsApp/X. Créer un raster 1200×630.
2. **Lastmod sitemap figé** : 48 URLs × la date du dernier build (2026-05-15). Remplacer `autoLastmod: true` par des lastmod réels par URL, ou supprimer.
3. **www en 200 sans 301** vers l'apex (atténué par canonical) ; trailing slash en 200 également.
4. **Pages de quartier minces (pattern doorway modéré)** : /avocat-pully 229 mots, /avocat-renens 251 mots, structure identique sur ~10 pages. Enrichir à 600+ mots (contenu réellement local, FAQ visible, cas anonymisé) ou consolider avec 301.
5. **/droit-famille/avocat-divorce** : page money la plus générique du site (prose type IA, fourchette prix contredisant le blog, ni auteur ni date). Réécrire sur le modèle de /blog/cout-divorce-geneve.
6. **BreadcrumbList dupliqué** sur toutes les pages (Breadcrumb.vue:63 + useLocalSeo.ts:252 — en garder un) ; double Service sur /droit-penal.
7. **Zéro lien sortant vers les sources légales** (fedlex.admin.ch) alors que les articles CC/CO/CPP sont cités partout — signal d'autorité peu coûteux.
8. **Dates visibles absentes hors blog** ; dateModified = datePublished partout.
9. **Department Lausanne incomplet** dans l'Organization homepage (sans streetAddress/telephone/geo/horaires) ; `url` de l'entité #lausanne incohérente.
10. **Title /contact 100% Genève** (aucune mention Lausanne/021) ; title /lausanne à 71 caractères (troncature).
11. **Nom incohérent dans les annuaires** : « Avocats Clegal » (local.ch/search.ch) vs « Clegal Avocats » (site) ; fiche search.ch sans lien site web.
12. **H3 de navigation (« Autres Domaines ») avant le H1** sur toutes les pages — hiérarchie de titres cassée.
13. **Bing/Microsoft :** pas de Bing Places, IndexNow absent, vérification Bing Webmaster non détectée.

## Problèmes FAIBLES (optimiser quand possible)

- CSP absente (seul header de sécurité manquant) — ajouter en Report-Only d'abord.
- Bug redirect : `/politique-de-confidentialite` → `/contact` au lieu de `/confidentialite` (server/middleware/redirects.ts:68-69).
- Hreflang homepage sans slash vs canonical avec slash.
- Coordonnées geo Lausanne approximatives (centre-ville, pas Rue Saint-Pierre 2) ; aucun UTM sur les liens.
- Un bloc JSON-LD sans @type sur /droit-penal ; type `Attorney` non utilisé ; pas de `speakable`.
- « Photo à venir » pour Me Rodrigues (/equipe) ; article janvier 2025 à rafraîchir ; pas d'entité au RC (Zefix) → aucune citation Moneyhouse dérivée.
- Cache HTML Cloudflare 4h — purger à chaque déploiement.

---

## Deep dive par catégorie

### AI Citability (72/100)
Meilleure page : /blog/cout-divorce-geneve (88) — « Réponse rapide » chiffrée, tableau 4 scénarios, auteur+date, FAQ. Pire : /honoraires (55) — vague au-delà de 155.-. Le glossaire et le blog fonctionnent comme source de référence pratique locale. llms.txt : 78/100, llms-full.txt très complet. Manques : tableaux comparatifs extractibles, permanence 24h/24 sur les pages d'urgence, dates visibles.

### Brand Authority (28/100)
Reconnu via ODAGE + justice.ge.ch + site cohérent. Mais : quasi-absence tierce, sameAs vide, homonyme « CLegal » (marketplace FR) qui détient le LinkedIn évident, historique « Martigny » (Kompass), double affiliation Pont-Rouge (swissavocat.ch + title du blog « PONT-ROUGE by Clegal-Avocats »), bureau Lausanne inexistant hors site. Pas de Wikipedia/Wikidata (normal à cette taille).

### Content E-E-A-T (60/100)
Points forts : /equipe très crédible (Docteur en droit, chargé de cours UNIGE, juge suppléant, Commission du barreau), /cas-clients exemplaire (6 dossiers chiffrés + disclaimer art. 13 LLCA), blog signé/daté de très bon niveau. Points faibles : avis permutés (C3), erreurs juridiques (C4), erreurs factuelles locales, aucune corroboration externe des credentials, zéro ATF cité malgré la « veille du Tribunal fédéral » revendiquée.

### Technical GEO (92/100)
SSG intégral (contenu 100% sans JS), sitemap 48/48 aligné au code sans orphelin ni 404, canonicals parfaites, 0 title dupliqué, HSTS+headers complets (sauf CSP), TTFB < 0.2s (Cloudflare), images WebP+alt+lazy, vrai 404, redirections legacy WordPress fonctionnelles. Reste : og:image SVG, lastmod figé, www/trailing slash en 200.

### Schema & données structurées (57/100)
JSON 100% valide, SSR, deux bureaux modélisés en entités distinctes avec 24h/24 (point fort rare). Mais : aggregateRating non conforme (C5), FAQ fantômes (C6), sameAs vide, Person fragmentée, BreadcrumbList dupliqué, department Lausanne incomplet.

### Platform Optimization (69/100)
AIO 79 (structure Q&R quasi exemplaire) ; ChatGPT 73 (accès parfait, entité faible) ; Gemini 69 (GBP Genève OK, pas de GBP Lausanne) ; Perplexity 63 (zéro signal communautaire) ; Bing 63 (indexé, mais écosystème Microsoft inexistant : pas de LinkedIn, pas de Bing Places, pas d'IndexNow).

---

# AUDIT SEO LOCAL « AVOCAT LAUSANNE » — 28/100

### Checklist fiche Google Business Profile

| Élément | Lausanne | Genève |
|---|---|---|
| Fiche existe | **NON détectable publiquement** | Probable (5.0/12 revendiqué par le site, non vérifié indépendamment) |
| Lien site→fiche (CID) | Non — lien = requête adresse | Non — idem |
| UTM tracking | Aucun | Aucun |
| Avis mentionnant « Lausanne » | 0 | — |
| Citations annuaires | **0** (021 introuvable hors site) | local.ch + search.ch (nom « Avocats Clegal », sans site web) |
| OAV / registre vaudois | **Absent** | (Registre genevois : associés inscrits) |

Note : le sameAs `share.google/QFbFusfEbqJIMUoNF` est opaque — **à ouvrir manuellement depuis un navigateur suisse** pour confirmer vers quelle fiche il pointe. L'absence de fiche Lausanne est établie par faisceau d'indices publics (recherche géolocalisée US, Maps inaccessible en fetch).

### Concurrence « avocat lausanne »
Clegal n'apparaît sur **aucune requête générique** testée (avocat lausanne, avocat pénal lausanne, avocat divorce lausanne) — uniquement sur sa marque. Dominants : Giorgini Avocats, Sedlex, Bourgeois Avocats, Gross & Associés, Avocats St-Pierre (avsp.ch — **même rue**), Legalia (Rue Saint-Pierre 3). Pénal : Penalex, Mazou. Divorce : Brodard, PBM.

### Ce qui est déjà bon
La page /lausanne est très bien optimisée (21/25) : title/H1 « Avocat à Lausanne », NAP complet visible, 021 affiché 5×, permanence 24h/24, tribunaux vaudois détaillés, maillage Pully/Renens/Morges, LegalService complet (geo, 24/7, areaServed 30 km). **Le problème n'est pas la page, c'est l'écosystème autour.**

### Plan d'action Lausanne (dans l'ordre)

1. **Créer + vérifier la fiche GBP « Clegal Avocats »** — Rue Saint-Pierre 2, 1003 Lausanne, 021 512 10 25, catégorie principale « Avocat » (+ pénaliste, droit de la famille), horaires 24h/24, site → `https://clegal-avocats.ch/lausanne?utm_source=google&utm_medium=organic&utm_campaign=gbp-lausanne`.
2. **Dès la fiche live :** remplacer les liens `maps?q=` par le lien de la fiche (CID) sur /lausanne et /contact ; mettre à jour `hasMap` et `sameAs` ; ajouter un embed Maps iframe.
3. **Citations NAP identiques** (« Clegal Avocats | Rue Saint-Pierre 2, 1003 Lausanne | 021 512 10 25 ») : localsearch (local.ch + search.ch, gratuit), guidle, trustlocal, cylex, Yelp, questiondedroit.ch, sitipro. Harmoniser les fiches Genève au passage (nom + lien site web).
4. **Inscription au registre vaudois / OAV** pour présence sur oav.ch (citation la plus autoritaire + conformité de l'image « avocat à Lausanne »).
5. **Campagne d'avis vaudois** sur la nouvelle fiche : objectif 10-15, mention de « Lausanne » et du domaine, rythme étalé, réponse systématique.
6. **JSON-LD :** retirer l'aggregateRating de l'entité Lausanne ; compléter le department Lausanne (homepage) ; affiner les coordonnées geo.
7. **On-page :** title /contact avec Lausanne + 021 ; contenu vaudois (« procédure pénale Vaud », « divorce canton de Vaud ») pour attaquer Giorgini/Penalex/Brodard.
8. **GSC :** vérifier l'indexation de /lausanne, suivre les impressions « avocat lausanne ».

### ⚠️ Point à trancher : adresse Genève
Le brief d'audit mentionnait « Rue des Noirettes 32 » — cette adresse est **introuvable** sur le site, dans le code, le git et les annuaires : tout le web public dit « **Route des Jeunes 9, 1227 Les Acacias** » de façon cohérente. **Vérifier manuellement que la fiche Google Genève affiche bien Route des Jeunes 9** ; si elle affiche une autre adresse (Noirettes ou ancienne), la corriger en priorité absolue (mismatch NAP = sabotage du pack local).

---

## Quick wins (cette semaine)

1. Corriger les attributions d'avis permutées (/etude vs /avis-clients) — 30 min, impact confiance majeur.
2. Corriger les 3 erreurs juridiques (art. 125 CC, conciliation, opposition e-mail) — 30 min.
3. Lancer la création de la fiche GBP Lausanne (la vérification par courrier prend 5-14 jours — démarrer tout de suite).
4. Retirer l'aggregateRating site-wide + rendre les FAQ visibles ou retirer le markup (useLocalSeo.ts) — 1-2 h.
5. Bloc « Urgence 24h/24 » sur /droit-penal, /blog/procedure-penale-geneve et homepage — 1 h.
6. Coquilles : « statisfaits », « Nos notre équipe », rangs de communes, EPFL — 30 min.
7. Harmoniser 60 min vs 30-45 min sur /honoraires + y ajouter le tableau tarifs (155.- / 300-500 CHF/h / forfaits) — 1 h.
8. Compléter llms.txt (/geneve, /lausanne, articles blog manquants, « Juridictions : Genève et Vaud ») — 20 min.

## Plan 30 jours

### Semaine 1 : Confiance + fiche Google Lausanne
- [ ] Quick wins 1-8 ci-dessus
- [ ] Créer la fiche GBP Lausanne + demander la vérification
- [ ] Vérifier manuellement la fiche GBP Genève (adresse, lien, catégories) + le lien share.google
- [ ] Créer la page LinkedIn entreprise « Clegal Avocats » (2 bureaux)

### Semaine 2 : Entité + schema
- [ ] Remplir sameAs (Organization + Person) : LinkedIn, ODAGE, justice.ge.ch, YouTube, TikTok, Instagram, Maps
- [ ] Unifier les @id Person (Me Cheema), ajouter memberOf barreau, stabiliser employee[]
- [ ] Compléter le department Lausanne (Organization homepage) ; dédupliquer BreadcrumbList ; corriger le double Service /droit-penal
- [ ] og:image raster 1200×630 ; corriger le redirect /politique-de-confidentialite
- [ ] Inscriptions localsearch (local.ch + search.ch) Lausanne + harmonisation Genève

### Semaine 3 : Citations + Bing + contenu
- [ ] Citations restantes (guidle, trustlocal, cylex, Yelp, questiondedroit.ch) ; corriger/supprimer la fiche Kompass Martigny
- [ ] Bing Places (2 bureaux, import GBP) + Bing Webmaster Tools + IndexNow
- [ ] Réécrire /droit-famille/avocat-divorce sur le modèle du blog (Réponse rapide, tableau amiable vs contentieux, byline, art. 125 CC)
- [ ] Lier les articles de loi vers fedlex.admin.ch sur blog + glossaire + pages domaines
- [ ] Lancer la campagne d'avis (Genève + Lausanne dès fiche vérifiée)

### Semaine 4 : Profondeur locale + fraîcheur
- [ ] Enrichir /avocat-pully et /avocat-renens (600+ mots réellement locaux) ou consolider en 301
- [ ] Dates « Mis à jour le » visibles sur glossaire + pages services ; lastmod réels dans le sitemap
- [ ] Section garde à vue complète sur /droit-penal ; tableau comparatif sur /honoraires
- [ ] 301 www→apex (règle Cloudflare) ; 301 des anciennes URLs WordPress en 200
- [ ] Contenu vaudois : 1er article « procédure pénale dans le canton de Vaud »
- [ ] Inscription registre vaudois / OAV (démarche administrative — initier)

---

## Annexe : sources et données

- Fiches et annuaires : ODAGE (odage.ch/fr/annuaire-des-etudes/clegal-avocats), justice.ge.ch, local.ch, search.ch, Kompass (fiche Martigny obsolète), oav.ch (absent), Zefix (absent)
- Réseaux : TikTok @clegal.avocats, Instagram @clegal.avocats, YouTube (UC0KuCTzq2X4rNpwPLATgOaw), LinkedIn personnel in/clegalavocats (pas de page entreprise)
- Homonyme : linkedin.com/company/clegal = marketplace juridique française (inovallee.com)
- Données brutes des pages analysées : scratchpad de session (`pages/`, `clegal-audit/` avec report.json et matrice de similarité)
- Limites : pack local suisse non observable (recherches géolocalisées US), Google Maps inaccessible en fetch (mur de consentement) — l'absence de fiche GBP Lausanne est un faisceau d'indices, à confirmer en ouvrant Maps depuis la Suisse ; les « 12 avis 5.0 » Genève ne sont vérifiables que sur la fiche elle-même.

Fichiers de correction principaux : `composables/useLocalSeo.ts`, `data/locations.ts`, `components/Breadcrumb.vue`, `nuxt.config.ts` (og:image l.85/89, sitemap l.16-69), `server/middleware/redirects.ts:68-69`, `pages/avis-clients.vue`, `pages/etude.vue`, `pages/droit-penal.vue`, `pages/honoraires.vue`, `public/llms.txt`.
