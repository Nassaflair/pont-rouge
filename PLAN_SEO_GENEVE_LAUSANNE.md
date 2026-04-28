# Plan d'action SEO/GEO — Clegal Avocats
## Genève (renforcement) + Lausanne (lancement)

> Audit du 28 avril 2026 — Plan opérationnel sur 6 mois (Mai → Octobre 2026)
> Cible : top 3 SERP Google + top 3 citations IA (ChatGPT, Perplexity, Google AI Overviews)

---

## 1. Résumé exécutif (TL;DR)

### Ce qui va bien
- Site rapide (TTFB 76ms, pré-rendu statique Nuxt 4)
- Note Google 5.0/5 (capital social fort)
- Contenu correct : 1500+ mots/page sur la majorité des pages
- Schema `LegalService` présent sur toutes les pages
- Architecture URL propre (`/droit-famille/avocat-divorce`)
- Sitemap valide (23 URLs)
- Sept avocats — autorité crédible

### Ce qui bloque la croissance
| Problème | Sévérité | Impact |
|----------|----------|--------|
| `/droit-penal` & `/droit-administratif` cassées (boucle redirect) | **CRITIQUE** | 2 pages stratégiques invisibles à Google depuis le déploiement |
| Cloudflare AI Bot Block actif | **CRITIQUE** | Invisible à ChatGPT, Claude, Perplexity, Google AI Overviews |
| `sameAs` vide dans le schema | **HAUTE** | Pas d'autorité E-A-T pour les avocats |
| Pas de schema Person/Attorney pour l'équipe | **HAUTE** | Les avocats sont du texte plat pour Google |
| Pas de schema AggregateRating (alors que 5.0/5) | **HAUTE** | Pas d'étoiles dans la SERP |
| Architecture mono-ville (Genève hardcodé) | **CRITIQUE** | Lausanne impossible à ranker sans refactoring |
| 1 seul article de blog | **MOYENNE** | Manque de contenu top-of-funnel |
| Anciennes URLs WP encore en SERP Google | **MOYENNE** | Fondateur-clegal-avocat/, foire-aux-questions/ |
| Pas de Google Business Profile Lausanne | **CRITIQUE** | Pas de visibilité locale Lausanne |

### Stratégie globale
1. **Mois 1** — Fondations : fixer tout ce qui est cassé, refondre le schema multi-ville, créer le composable City
2. **Mois 2** — Lausanne : URLs `/lausanne/*`, NAP local, Google Business Profile, premier contenu
3. **Mois 3** — Moteur de contenu : 12 articles de blog (6 par ville), FAQ schemas partout
4. **Mois 4** — Autorité : backlinks suisses, ODA/FSA/registre vaudois, partenariats locaux
5. **Mois 5** — GEO : llms.txt enrichi, contenu cité dans les IA, Wikipédia
6. **Mois 6** — Conversion : A/B test CTA, optimisation Core Web Vitals, scaling

---

## 2. Bugs corrigés cette nuit (déjà déployés)

### 2.1 Pages cassées (boucle de redirection infinie)

**Fichier** : [server/middleware/redirects.ts:18-23](server/middleware/redirects.ts#L18-L23)

Avant :
```ts
'/droit-administratif': '/droit-administratif',  // boucle !
'/droit-penal': '/droit-penal',                  // boucle !
```

Effet : `/droit-penal` et `/droit-administratif` renvoyaient un meta-refresh vers elles-mêmes — `98 octets` de HTML, pas de title, pas de H1, pas de contenu. **Invisibles à Google depuis le déploiement.**

**Fix** : entrées supprimées. Le middleware générique de trailing slash gère déjà le `/droit-penal/` → `/droit-penal`.

### 2.2 robots.txt — autorisation IA explicite

**Fichier** : [public/robots.txt](public/robots.txt)

Cloudflare injecte automatiquement un blocage des bots IA (`GPTBot`, `ClaudeBot`, `Google-Extended`, etc.) devant votre robots.txt. C'est une feature "AI Bot Block" activée par défaut sur les nouveaux comptes.

**Fix partiel** : robots.txt enrichi avec autorisations explicites (override partiel).

**ACTION MANUELLE REQUISE** :
1. Aller dans [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Choisir le domaine `clegal-avocats.ch`
3. Aller dans **Security → Bots → Configure**
4. Désactiver **"AI Audit"** ou **"Block AI bots"**
5. OU dans **Settings → robots.txt**, désactiver "Cloudflare-managed robots.txt"

**Vérification** : après désactivation, `curl https://clegal-avocats.ch/robots.txt` ne doit plus contenir le bloc Cloudflare avec les `Disallow` pour GPTBot.

### 2.3 llms.txt créé

**Fichier** : [public/llms.txt](public/llms.txt)

Standard émergent ([llmstxt.org](https://llmstxt.org)) qui aide les IA à comprendre votre site. Sera live après le prochain déploiement à `https://clegal-avocats.ch/llms.txt`.

---

## 3. Audit détaillé — État des lieux

### 3.1 SEO technique

| Élément | État | Note |
|---------|------|------|
| HTTPS / HSTS | OK / Manquant | HSTS à ajouter via Cloudflare |
| TTFB | 76ms | Excellent |
| Cache-Control assets | 1 an immutable | Excellent |
| Sitemap.xml | 23 URLs | Bon (depuis fix sitemap d'hier) |
| robots.txt | Conflit Cloudflare | À fixer côté CF |
| llms.txt | Créé | Sera live après deploy |
| Canonical | Présent partout | Bon |
| Mobile-friendly | OUI | Bon |
| Pré-rendu statique | OUI | Excellent (CDN-first) |

### 3.2 Schema markup actuel

**Présent** :
- `LegalService` : sur toutes les pages (centralisé dans [composables/useLocalSeo.ts](composables/useLocalSeo.ts))
- `BreadcrumbList` : sur toutes les pages
- `FAQPage` : sur 4 pages seulement (`/droit-administratif`, `/droit-assurance`, `/droit-affaires`, `/droit-famille/avocat-divorce`)

**Manquant** (priorisé) :
1. `sameAs` — array vide partout (LinkedIn, ODA, GBP)
2. `Person` / `Attorney` pour les 7 avocats
3. `AggregateRating` (vous avez 5.0/5 sur Google)
4. `Review` schemas pour les témoignages
5. `Article` schema sur le blog
6. Multi-`branch` Organization (préparation Lausanne)
7. `LocalBusiness` distinct par succursale

### 3.3 Concurrence Genève (top SERP "avocat genève")

| Position | Cabinet | Force | Faiblesse |
|----------|---------|-------|-----------|
| 1 | [etudeavocat.com](https://www.etudeavocat.com/) (Me Razi) | **Présent Genève + Lausanne** | Site daté, lent |
| 2 | [JordanLex](https://www.jordanlex.ch/) | Famille pure player | Niche |
| 3 | [Green Avocats](https://www.green-avocats.ch/) | Genève + Vaud | Moins moderne |
| 4 | [Choffat](https://choffat-avocat.ch/) | Famille spécialisé | Solo |
| 5 | [Artes Juris](https://artes-juris.ch/) | Tech/Web3 différentié | Pas grand public |
| 6 | [LAVI Avocats](https://www.lavi-avocats.ch/) | Pénal/famille | Site standard |
| 7 | [FR Avocats](https://www.fravocats.ch/) | Étrangers/asile | — |
| 8 | [Question de Droit](https://www.questiondedroit.ch/avocats-geneve/) | **Annuaire — backlink à viser** | — |
| Officiel | [ODA — Ordre des avocats](https://odage.ch/) | **Backlink critique** | — |

**Concurrent direct** : Me Razi (etudeavocat.com) — déjà présent dans les deux villes. C'est le modèle à dépasser.

### 3.4 Concurrence Lausanne (top SERP "avocat lausanne")

| Cabinet | Spécialité | Notes |
|---------|-----------|-------|
| [Vaney Avocat](https://www.vaney-avocat.ch/) | Famille/pénal | Solo, 2021 |
| [Giorgini Avocats](https://giorgini-avocats.ch/) | Privé/admin/pénal | Médiateur |
| [Legalia](https://legalia-avocats.ch/) | Famille/contrats | — |
| [Avopartner](https://avopartner.ch/) | Famille Fribourg+Lausanne | — |
| [Sedlex](https://www.sedlex-avocats.ch/) | — | — |
| [Sitipro](https://www.sitipro.com/avocat-lausanne/) | **Annuaire — backlink à viser** | — |

**Le marché lausannois est moins saturé que Genève — opportunité réelle.**

### 3.5 Juridictions à mentionner par ville

**Genève** (déjà présent dans le contenu, à enrichir) :
- Tribunal de première instance — Rue de l'Athénée 6/8, 1205 Genève
- Cour de justice — Place du Bourg-de-Four
- Ministère public
- Tribunal des prud'hommes
- Tribunal des baux et loyers
- Tribunal administratif de première instance (TAPI)
- Chambre administrative de la Cour de justice
- Conseil d'État de Genève
- Chambre des assurances sociales du Tribunal cantonal

**Lausanne / Vaud** (à intégrer dans le futur contenu) :
- Tribunal cantonal vaudois — Lausanne
- Cour civile (>100'000 CHF)
- Cour d'appel pénale
- Cour de droit administratif et public (CDAP)
- Tribunal d'arrondissement de Lausanne
- Justice de paix de Lausanne (famille)
- Chambre des avocats (autorité de surveillance)
- Tribunal des baux (loyers)
- Tribunal de prud'hommes du canton de Vaud

---

## 4. Plan opérationnel détaillé (M1 → M6)

---

### MOIS 1 — Mai 2026 — FONDATIONS

**Objectif** : nettoyer techniquement, préparer l'architecture multi-ville, dégager les bloqueurs SEO/GEO.

#### Sprint 1 (Semaine 1) — Cette semaine, urgent

| # | Tâche | Type | Impact |
|---|-------|------|--------|
| 1.1 | ✅ Fix bug `/droit-penal` & `/droit-administratif` | Tech | Critique |
| 1.2 | ✅ Fix robots.txt + llms.txt | Tech | Critique |
| 1.3 | **Désactiver Cloudflare AI Bot Block** (manuel) | Config | Critique |
| 1.4 | Activer HSTS via Cloudflare (Always Use HTTPS + HSTS 6 mois) | Config | Sécurité |
| 1.5 | Vérifier indexation `/droit-penal` & `/droit-administratif` dans GSC | QA | Critique |
| 1.6 | Soumettre sitemap.xml dans Google Search Console + Bing | QA | Indexation |
| 1.7 | Soumettre demande de réindexation pour les 23 URLs | QA | Recovery |

#### Sprint 2 (Semaine 2) — Refonte composable Schema multi-ville

**Refactor de** [composables/useLocalSeo.ts](composables/useLocalSeo.ts) pour supporter Genève ET Lausanne :

```ts
// Nouveau signature
useLocalSeo(title, description, {
  city: 'geneve' | 'lausanne' | 'all',  // NEW
  type, image, priceRange, faq, breadcrumbs,
  lawyer?: { name, slug, jobTitle, sameAs[] }  // NEW
})
```

Créer [data/locations.ts](data/locations.ts) avec les 2 succursales :

```ts
export const locations = {
  geneve: {
    name: 'Clegal Avocats Genève',
    streetAddress: 'Route des Jeunes 9',
    addressLocality: 'Les Acacias',
    postalCode: '1227',
    addressRegion: 'Genève',
    addressCountry: 'CH',
    telephone: '+41225121050',
    geo: { latitude: 46.1871, longitude: 6.1296 },
    areaServed: ['Genève', 'Carouge', 'Lancy', 'Vernier', 'Meyrin', 'Versoix', 'Onex'],
    courts: ['Tribunal de première instance', 'Cour de justice', /* etc. */]
  },
  lausanne: {
    name: 'Clegal Avocats Lausanne',
    streetAddress: '<À FOURNIR>',
    addressLocality: 'Lausanne',
    postalCode: '<À FOURNIR>',
    addressRegion: 'Vaud',
    addressCountry: 'CH',
    telephone: '<À FOURNIR>',
    geo: { latitude: 46.5197, longitude: 6.6323 },  // Lausanne center
    areaServed: ['Lausanne', 'Pully', 'Renens', 'Ecublens', 'Prilly', 'Morges'],
    courts: ['Tribunal cantonal vaudois', 'Tribunal d\'arrondissement de Lausanne', /* etc. */]
  }
}
```

#### Sprint 3 (Semaine 3) — Schema enrichment

| # | Tâche | Fichier | Effet |
|---|-------|---------|-------|
| 1.8 | Ajouter `sameAs` (LinkedIn cabinet, ODA, GBP, Facebook) | composables/useLocalSeo.ts | E-A-T |
| 1.9 | Créer composant `<LawyerCard>` avec Person schema | components/LawyerCard.vue | Authority |
| 1.10 | Extraire l'équipe vers [data/team.ts](data/team.ts) | Refactor | Maintenabilité |
| 1.11 | Ajouter `AggregateRating` schema (5.0/5, count Google) | composables/useLocalSeo.ts | Étoiles SERP |
| 1.12 | Ajouter `Review` schema pour 3 témoignages | composables/useLocalSeo.ts | Rich results |
| 1.13 | FAQ schema sur 4 pages restantes (`/droit-penal`, `/droit-affaires`, `/droit-famille/index`, `/honoraires`) | Pages | Rich results |
| 1.14 | `Article` schema sur l'article blog | pages/blog/travailler-suisse-hors-ue.vue | Blog SEO |
| 1.15 | Tester avec [Schema.org Validator](https://validator.schema.org/) | QA | Validation |
| 1.16 | Tester avec [Google Rich Results Test](https://search.google.com/test/rich-results) | QA | Eligibilité |

#### Sprint 4 (Semaine 4) — Quick wins on-page

| # | Tâche | Effet |
|---|-------|-------|
| 1.17 | Enrichir titres/descriptions des 23 pages avec USP (`Dès 155.-`, `7 avocats`, `5.0/5`) | CTR SERP |
| 1.18 | Ajouter section "Avis clients" avec rating GBP intégré | Conversion + schema |
| 1.19 | Page mentions légales + page politique de confidentialité (vraies pages, pas redirect contact) | Conformité |
| 1.20 | Page "Comment se déroule un premier RDV à 155.-" | Conversion |
| 1.21 | Lien Google Business Profile Genève dans footer | Local SEO |

**Livrables M1** :
- ✅ Site techniquement propre
- ✅ Schema multi-ville prêt (architecture)
- ✅ Equipe en JSON, composant LawyerCard
- ✅ Étoiles SERP
- ✅ Toutes les pages indexables

**KPIs M1** :
- 0 erreur GSC critique
- 23/23 pages indexées
- Note de validation schema 100/100

---

### MOIS 2 — Juin 2026 — LANCEMENT LAUSANNE

**Objectif** : ouvrir l'antenne Lausanne en SEO. Indexer les premières pages, NAP local, Google Business Profile.

#### Sprint 1 — Architecture URLs Lausanne

**Décision stratégique** : `/lausanne/<domaine>` plutôt que sous-domaine.
- ✅ Préserve l'autorité du domaine principal
- ✅ Schema `branch` Organization unifié
- ❌ Plus de cannibalisation à gérer (geste différent par ville)

**Création des pages Lausanne** (priorité business) :

| URL | Priorité | Pourquoi |
|-----|----------|----------|
| `/lausanne` | P0 | Hub local, équivalent `/etude` |
| `/lausanne/contact` | P0 | NAP, GBP, formulaire |
| `/lausanne/avocat-divorce` | P1 | Volume haut |
| `/lausanne/avocat-droit-penal` | P1 | Volume haut |
| `/lausanne/droit-famille` | P1 | Hub famille |
| `/lausanne/droit-travail` | P2 | — |
| `/lausanne/droit-etrangers` | P2 | — |
| `/lausanne/avocat-licenciement` | P2 | Volume haut |
| `/lausanne/avocat-bail` | P3 | — |
| `/lausanne/honoraires` | P3 | Peut renvoyer vers /honoraires global |

**Règle anti-cannibalisation** : chaque page Lausanne mentionne :
- Tribunal cantonal vaudois (et pas Cour de justice de Genève)
- Adresse Lausanne (NAP différent)
- Avocat(s) qui couvrent Lausanne (au moins 1 portrait local)
- Communes vaudoises (Pully, Renens, Morges, Ecublens, etc.)
- Articles de droit suisse identiques (CC, CO, CP — pas vaudois-spécifiques)

#### Sprint 2 — NAP Lausanne + Google Business Profile

| # | Tâche | Délai |
|---|-------|-------|
| 2.1 | Récupérer adresse, téléphone, horaires Lausanne | Semaine 1 |
| 2.2 | Créer Google Business Profile Lausanne | Semaine 1 |
| 2.3 | Vérifier le profile (carte postale Google) | 1-2 semaines |
| 2.4 | Photos professionnelles bureau Lausanne (10 min) | Semaine 1 |
| 2.5 | Ajouter Lausanne dans `data/locations.ts` | Semaine 1 |
| 2.6 | Schema `LocalBusiness` distinct par ville (sub-pages) | Semaine 2 |
| 2.7 | Schema `Organization` avec `branch` array (Genève + Lausanne) | Semaine 2 |
| 2.8 | Page `/lausanne` : 1500+ mots, équipe locale, juridictions vaudoises | Semaine 2-3 |
| 2.9 | Page `/lausanne/contact` : NAP Lausanne, carte, horaires | Semaine 3 |
| 2.10 | Inscription [Local.ch](https://local.ch) Lausanne | Semaine 3 |
| 2.11 | Inscription [Search.ch](https://search.ch) Lausanne | Semaine 3 |
| 2.12 | Inscription Pages Jaunes Suisse Lausanne | Semaine 3 |
| 2.13 | Mise à jour [Sitipro](https://sitipro.com/avocat-lausanne/) avec votre fiche | Semaine 4 |
| 2.14 | Inscription Registre cantonal vaudois des avocats (si pas déjà) | Semaine 4 |

#### Sprint 3 — Pages Lausanne P0/P1

| Page | Mots cibles | Sections obligatoires |
|------|-------------|------------------------|
| `/lausanne` | 1800+ | Hero "Avocat Lausanne", équipe locale, juridictions VD, communes desservies, avis, CTA |
| `/lausanne/contact` | 800+ | NAP Lausanne, carte Google, formulaire, GBP Lausanne |
| `/lausanne/avocat-divorce` | 1500+ | Procédure VD (Justice de paix → Tribunal arrondissement), spécificités droit vaudois |
| `/lausanne/avocat-droit-penal` | 1500+ | Cour d'appel pénale Lausanne, MP-VD |
| `/lausanne/droit-famille` | 1500+ | Hub famille avec liens internes vers sous-pages |

**Anti-cannibalisation Genève↔Lausanne** :
- Title patterns différents :
  - `/droit-famille/avocat-divorce` → "Avocat Divorce Genève | …"
  - `/lausanne/avocat-divorce` → "Avocat Divorce Lausanne | …"
- Internal links croisés mesurés (pas 1-pour-1)
- `hreflang` non nécessaire (même langue, même pays)
- `canonical` propre à chaque page (pas de canonical croisé)

#### Sprint 4 — Sitemap & promotion

| # | Tâche |
|---|-------|
| 2.15 | Mettre à jour `nuxt.config.ts` `sitemap.urls` avec les nouvelles URLs Lausanne |
| 2.16 | Soumettre sitemap mis à jour dans GSC |
| 2.17 | Demander indexation des nouvelles pages |
| 2.18 | Linker depuis homepage : "Aussi à Lausanne" (header + footer) |
| 2.19 | Annoncer sur LinkedIn cabinet, Facebook |
| 2.20 | Communiqué de presse (24Heures, Tribune de Genève) |

**KPIs M2** :
- Google Business Profile Lausanne vérifié
- 5 pages Lausanne indexées
- 3 inscriptions annuaires (Local.ch, Search.ch, Sitipro)
- Premier ranking Lausanne (top 30 minimum sur "avocat lausanne")

---

### MOIS 3 — Juillet 2026 — MOTEUR DE CONTENU

**Objectif** : créer un flux régulier de contenu pour capter les longues traînes et alimenter les IA.

#### Backlog blog (12 articles, 6/ville/3 mois = 2 par mois par ville pour M3-M5)

**Genève — Top 6 articles à publier (ordre de priorité)** :

| # | Titre | Mot-clé cible | Volume estimé | Difficulté |
|---|-------|---------------|---------------|------------|
| 1 | Combien coûte un divorce à Genève en 2026 ? Guide complet | coût divorce genève | Élevé | Faible |
| 2 | Délais de procédure pénale à Genève : ce qu'il faut savoir | procédure pénale genève | Moyen | Moyenne |
| 3 | Permis B à Genève : conditions, durée, renouvellement | permis B genève | Élevé | Moyenne |
| 4 | Licenciement abusif à Genève : recours et indemnités | licenciement abusif genève | Moyen | Faible |
| 5 | Garde alternée à Genève : critères du Tribunal | garde alternée genève | Moyen | Faible |
| 6 | Bail à Genève : résiliation, congé, prolongation (LBail GE) | bail genève résiliation | Moyen | Faible |

**Lausanne — Top 6 articles à publier** :

| # | Titre | Mot-clé cible |
|---|-------|---------------|
| 1 | Coût d'un divorce à Lausanne et dans le canton de Vaud | coût divorce lausanne |
| 2 | Procédure devant le Tribunal cantonal vaudois | tribunal cantonal vaudois procédure |
| 3 | Permis B Vaud : différences avec Genève | permis B vaud |
| 4 | Licenciement à Lausanne : démarche au Tribunal des prud'hommes VD | licenciement lausanne |
| 5 | Justice de paix Lausanne : compétences et procédure | justice de paix lausanne |
| 6 | Bail à Lausanne : Tribunal des baux vaudois | bail lausanne |

#### Format type d'un article (1500-2500 mots)

```
H1 : Mot-clé exact + bénéfice ("Combien coûte un divorce à Genève en 2026 ?")
↓
TL;DR encadré (réponse directe en 50 mots) ← OPTIMISATION GEO
↓
H2: État du droit (avec articles CC/CO + arrêt de référence)
↓
H2: Étapes de la procédure (numérotées)
↓
H2: Coûts détaillés (tableau chiffré) ← stat citables = ATOUT GEO
↓
H2: FAQ (5-7 questions) + JSON-LD FAQPage
↓
H2: Citation de l'expert (Me Cheema dit que...) ← EEAT
↓
CTA + Schema Article + auteur Person
```

**Pourquoi ce format est optimisé GEO** : les IA citent en priorité les sources qui contiennent (1) une réponse directe encadrée, (2) des statistiques chiffrées, (3) des citations d'experts identifiés, (4) du schema FAQ.

#### Sprint M3 — Production

| Semaine | Genève | Lausanne |
|---------|--------|----------|
| S1 | Article 1 (divorce coût) | Article 1 (divorce coût VD) |
| S2 | Article 2 (procédure pénale) | Article 2 (Tribunal cantonal VD) |
| S3 | Optimisation pages services existantes (FAQ enrichie) | Page hub `/lausanne/droit-famille` |
| S4 | Featured snippet hunting (analyse SERP, ajustement) | Inscription annuaires manqués |

#### Sprint M3 — Optimisations parallèles

| # | Tâche |
|---|-------|
| 3.1 | Ajouter "Table des matières" aux articles longs (sticky) |
| 3.2 | Ajouter "Last modified" en haut de chaque page (signal de fraîcheur) |
| 3.3 | Lien interne croisé : chaque article relie 3-5 autres pages |
| 3.4 | Schema `Article` complet avec auteur Person |
| 3.5 | Open Graph image custom par article |
| 3.6 | Vidéo TikTok intégrée dans les articles pertinents (vous l'avez sur la home) |
| 3.7 | Implémenter `BreadcrumbList` schema sur articles |

**KPIs M3** :
- 4 articles publiés (2 GE + 2 VD)
- +20% trafic organique vs M1
- 5+ rich results dans GSC
- Premier featured snippet capturé

---

### MOIS 4 — Août 2026 — AUTORITÉ & BACKLINKS

**Objectif** : construire l'autorité du domaine via backlinks suisses qualifiés.

#### Stratégie linkbuilding

**Tier 1 — Annuaires officiels (gratuit, must-have)** :
- [ODA Genève](https://odage.ch/) — fiche cabinet
- [Registre cantonal vaudois des avocats](https://www.vd.ch/justice/registres-professionnels/registre-cantonal-vaudois-des-avocats)
- [FSA — Fédération Suisse des Avocats](https://www.sav-fsa.ch/)
- [Justice.ge.ch](https://justice.ge.ch/apps/dbl/fr/avocats/) — annuaire officiel
- [Local.ch](https://local.ch) (les 2 villes)
- [Search.ch](https://search.ch) (les 2 villes)
- [Pages Jaunes Suisse](https://pagesjaunes.ch)
- [Yelp Suisse](https://yelp.ch)

**Tier 2 — Annuaires juridiques (gratuit ou freemium)** :
- [Question de Droit](https://questiondedroit.ch) — backlink déjà visible en SERP
- [Sitipro](https://sitipro.com)
- [Avocats-CH](https://avocats-ch.ch)
- [Lawyers.com Switzerland](https://lawyers.com)

**Tier 3 — Presse régionale (payant ou gagné via communiqués)** :
- [Tribune de Genève](https://tdg.ch)
- [24 Heures](https://24heures.ch)
- [Le Temps](https://letemps.ch)
- [Bilan](https://bilan.ch)
- Sites locaux de Lausanne (Lausanne Cités, etc.)

**Tier 4 — Partenariats locaux** :
- Notaires partenaires (échange de backlinks éthique)
- Médecins/expertises forensiques
- Coachs parentaux (droit famille)
- Agences immobilières (droit du bail)
- Universités (UNIGE, UNIL — interventions, masterclass)

#### Sprint M4 — Linkbuilding

| Semaine | Action |
|---------|--------|
| S1 | Inventaire complet annuaires Tier 1 + 2 → fiche complète sur chaque |
| S2 | 5 communiqués de presse : ouverture Lausanne, expertise pénal, etc. |
| S3 | Outreach 10 partenaires potentiels (notaires, médecins, agences immo) |
| S4 | Rédaction guest posts pour 2-3 sites juridiques |

#### Sprint M4 — Optimisations contenu (parallèle)

| # | Tâche |
|---|-------|
| 4.1 | 4 nouveaux articles blog (2 GE + 2 VD) |
| 4.2 | Pages "Quartiers desservis" (`/genève/avocat-acacias`, `/genève/avocat-carouge`, `/lausanne/avocat-pully`) — local SEO hyper-local |
| 4.3 | Page `/avis-clients` dédiée avec schema Review |
| 4.4 | Page `/equipe` dédiée avec 7 LawyerCard + schema Person |
| 4.5 | Solliciter 5 nouveaux avis Google (Genève) + 5 (Lausanne) |

**KPIs M4** :
- DR (Domain Rating) +5 points
- 15+ backlinks nouveaux
- 8 articles total publiés
- 10 nouveaux avis Google

---

### MOIS 5 — Septembre 2026 — GEO MASTERY

**Objectif** : devenir une source citée régulièrement dans ChatGPT, Claude, Perplexity, Gemini.

#### Stratégie GEO

**Principes GEO 2026** (basé sur recherche Princeton + observation des modèles) :
1. **Réponses directes** : 50 mots max en haut de page, format question→réponse
2. **Statistiques chiffrées** : les IA citent les sources qui ont des chiffres
3. **Citations d'experts** : "Selon Me Cheema, …" avec attribution claire
4. **Structure scannable** : H2/H3 bien découpés, listes, tableaux
5. **Sources officielles** : références aux articles de loi (CC, CO, CP) avec lien
6. **Mise à jour régulière** : "Dernière mise à jour : XX/2026"
7. **Entité claire** : Wikipédia, Wikidata, knowledge graph

#### Sprint M5 — Optimisation citation IA

| # | Tâche |
|---|-------|
| 5.1 | Ajouter encadré "Réponse rapide" en haut de chaque article + page service |
| 5.2 | Tableau chiffré sur chaque page (coûts, délais, statistiques cantonales) |
| 5.3 | Section "Selon notre expérience" avec citation nominative |
| 5.4 | Enrichir [llms.txt](public/llms.txt) avec contenu de référence (extraits FAQ clés) |
| 5.5 | Créer `llms-full.txt` (version étendue avec tout le contenu) |
| 5.6 | Tester chaque page avec [Google Rich Results Test](https://search.google.com/test/rich-results) |
| 5.7 | Tester apparition dans ChatGPT (search activé) sur 20 requêtes types |
| 5.8 | Tester apparition dans Perplexity sur 20 requêtes types |
| 5.9 | Tester apparition dans Google AI Overviews |
| 5.10 | Tracker mois par mois quels prompts citent clegal-avocats.ch |

#### Sprint M5 — Wikipédia / Wikidata

| # | Tâche |
|---|-------|
| 5.11 | Créer page Wikidata pour Clegal Avocats (entité) |
| 5.12 | Si Me Cheema a un profil notable (ouvrages, presse) → page Wikipédia |
| 5.13 | Créer pages Crunchbase, Glassdoor, LinkedIn cabinet enrichies |

#### Sprint M5 — Contenu evergreen long format

Créer 2 "pillars" (pages piliers) ultra-complètes (3000-5000 mots) :
- `/guide-divorce-suisse` — Guide complet du divorce en Suisse romande (Genève + Vaud)
- `/guide-permis-sejour-suisse` — Guide complet permis de séjour en Suisse

Ces pages servent à :
- Capter les requêtes informationnelles larges
- Être citées par les IA comme sources
- Linker en interne vers les pages services de chaque ville

**KPIs M5** :
- 5+ citations dans Perplexity sur des requêtes ciblées
- 2 mentions dans Google AI Overviews
- llms.txt et llms-full.txt complets
- 2 pages piliers publiées

---

### MOIS 6 — Octobre 2026 — CONVERSION & SCALING

**Objectif** : transformer le trafic en RDV. Optimiser Core Web Vitals. Scaler ce qui marche.

#### Sprint M6 — Conversion

| # | Tâche |
|---|-------|
| 6.1 | A/B test du CTA homepage : "Prendre RDV (155.-)" vs "Analyser mon cas (155.-)" |
| 6.2 | Booker en ligne (Cal.com, Calendly) intégré au formulaire de contact |
| 6.3 | Live chat ou WhatsApp Business (réponse < 2h) |
| 6.4 | Page "Cas clients" anonymisée (storytelling) |
| 6.5 | Email nurture après formulaire (3 emails sur 7 jours) |
| 6.6 | Tracking conversion GA4 + GTM affiné |
| 6.7 | Heatmaps Hotjar sur 5 pages clés |

#### Sprint M6 — Performance

| # | Tâche |
|---|-------|
| 6.8 | Audit Core Web Vitals (PageSpeed, CrUX) |
| 6.9 | Optimiser LCP < 2.5s sur toutes les pages (déjà bon mais à vérifier) |
| 6.10 | Optimiser INP < 200ms (formulaire contact, mega menu) |
| 6.11 | Optimiser CLS < 0.1 |
| 6.12 | Lazy-load des sections sous le fold (équipe, témoignages) |

#### Sprint M6 — Audit complet et bilan

| # | Tâche |
|---|-------|
| 6.13 | Rapport SEO complet : positions, trafic, conversions |
| 6.14 | Comparaison concurrents : nous vs top 5 SERP |
| 6.15 | Plan M7-M12 (suite, expansion 3e ville ?) |

**KPIs M6** :
- Top 3 sur "avocat genève" (objectif principal)
- Top 5 sur "avocat lausanne"
- +50% trafic organique vs M1
- Conversion rate +30%

---

## 5. KPIs et tableau de bord mensuel

### KPIs Core (à tracker chaque mois)

| KPI | M0 (baseline) | Cible M3 | Cible M6 |
|-----|---------------|----------|----------|
| Position "avocat genève" | À mesurer | Top 10 | Top 3 |
| Position "avocat lausanne" | Hors top 100 | Top 30 | Top 5 |
| Trafic organique mensuel | À mesurer | +20% | +50% |
| Pages indexées GSC | 21 (manque 2) | 35+ | 50+ |
| Backlinks domaine (Ahrefs DR) | À mesurer | +5 DR | +10 DR |
| Avis Google (count) | À récupérer | +10 | +25 |
| Note Google moyenne | 5.0 | 4.9+ | 4.9+ |
| Citations IA mesurables | 0 | 5+ | 20+ |
| Conversions formulaire | À mesurer | +20% | +50% |
| RDV pris | À mesurer | +20% | +50% |

### Outils à activer (gratuits sauf mention)

| Outil | Usage | Coût |
|-------|-------|------|
| Google Search Console | Indexation, positions, queries | Gratuit |
| Bing Webmaster | Indexation Bing | Gratuit |
| Google Business Profile | Local SEO | Gratuit |
| Google Analytics 4 | Trafic + conversions | Gratuit (déjà en place) |
| Schema.org Validator | QA schemas | Gratuit |
| Google Rich Results Test | QA SERP features | Gratuit |
| PageSpeed Insights | Core Web Vitals | Gratuit |
| Ahrefs Webmaster Tools | Backlinks, DR | Gratuit (limité) |
| [Plausible / Fathom](https://plausible.io) | Analytics privacy-first | Optionnel ~9€/mois |
| [Search.ch / Local.ch Pro](https://local.ch) | Listing premium Suisse | ~50CHF/mois |
| [SE Ranking](https://seranking.com) ou [Mangools](https://mangools.com) | Suivi positions | ~30-50€/mois |

### Bilan tracking mensuel (template)

À chaque fin de mois, document à produire :
1. Évolution KPIs vs mois précédent
2. Top 10 queries qui amènent du trafic
3. Pages les plus visitées
4. Pages avec CTR le plus bas (à optimiser)
5. Backlinks gagnés/perdus
6. 3 actions correctives pour le mois suivant

---

## 6. Risques et mitigation

| Risque | Probabilité | Impact | Mitigation |
|--------|-------------|--------|------------|
| Cannibalisation Genève↔Lausanne | Moyenne | Haut | Différenciation contenu, NAP distinct, schema branch |
| Cloudflare AI Bot Block réactivé | Moyenne | Critique | Documenter manip, vérifier mensuellement |
| Mises à jour Google (HCU, core updates) | Élevée | Variable | Contenu E-E-A-T solide, pas de tactiques black-hat |
| Faux avis Google | Faible | Moyen | Surveillance Google Alerts, signalement |
| Perte de domain rating sur ouverture Lausanne | Faible | Moyen | Linkbuilding agressif M2-M4 |
| Concurrent qui copie le contenu | Élevée | Faible | Marquer la signature, schema Author solide |

---

## 7. Budget recommandé (mensuel)

| Catégorie | Coût/mois | Notes |
|-----------|-----------|-------|
| Outils SEO (rank tracker, analytics) | 50-80 CHF | Optionnel mais recommandé |
| Listings premium (Local.ch, Sitipro) | 50-100 CHF | Local SEO |
| Photographe (Lausanne, équipe) | 1500 one-shot | M2 |
| Communiqués presse | 500-1500 | M2 + M5 |
| Rédaction freelance (si externalisé) | 800-2000 | 4 articles/mois |
| Backlinks éditoriaux (guest posts payants) | 500-1500 | M4-M5 |
| **Total mensuel récurrent** | **~600-1500 CHF** | |
| **Investissement initial M2** | **~3000 CHF** | Photo + presse |

---

## 8. Annexes

### Annexe A — Mots-clés prioritaires Genève

**Tête (volume haut, difficulté haute)** :
- avocat genève
- cabinet d'avocats genève
- meilleur avocat genève

**Corps (volume moyen, difficulté moyenne)** :
- avocat divorce genève
- avocat droit pénal genève
- avocat permis de séjour genève
- avocat licenciement genève
- avocat famille genève
- avocat bail genève

**Longue traîne (volume bas, difficulté basse, conversion haute)** :
- combien coûte un avocat à genève
- avocat divorce les acacias
- avocat genève premier rendez-vous gratuit (à clarifier — vous facturez 155 CHF)
- avocat divorce amiable genève
- avocat garde alternée genève

### Annexe B — Mots-clés prioritaires Lausanne

**Tête** :
- avocat lausanne
- cabinet d'avocats lausanne

**Corps** :
- avocat divorce lausanne
- avocat droit pénal lausanne
- avocat permis de séjour vaud
- avocat licenciement lausanne
- avocat bail lausanne

**Longue traîne** :
- avocat lausanne premier rendez-vous (USP 155.-)
- avocat famille canton de vaud
- avocat divorce lausanne tarif
- avocat tribunal cantonal vaudois

### Annexe C — Quartiers/communes à mentionner

**Genève (à intégrer dans le contenu existant)** :
Acacias (déjà), Plainpalais, Carouge, Eaux-Vives, Lancy, Meyrin, Vernier, Onex, Versoix, Champel, Cologny, Chêne-Bougeries, Veyrier

**Lausanne et Vaud (à créer)** :
Lausanne (centre, Sous-Gare, Flon), Pully, Renens, Ecublens, Prilly, Morges, Vevey, Montreux, Nyon (limite GE), Yverdon

### Annexe D — Anciennes URLs WordPress encore en SERP (à surveiller)

- `/fondateur-clegal-avocat/` → redirige bien vers /etude (vérifié)
- `/foire-aux-questions/` → redirige bien vers /contact (vérifié)
- `/en/droit-des-assurances/` → redirige bien vers /droit-assurance (vérifié)
- `/en/` → redirige bien vers / (vérifié)

**Action** : demander à Google de ré-indexer pour que ces vieilles URLs disparaissent de la SERP au profit des nouvelles.

### Annexe E — Stack technique recommandée pour Lausanne

```
data/
  ├─ locations.ts        ← Genève + Lausanne configs
  ├─ team.ts             ← 7 avocats avec city: 'geneve' | 'lausanne' | 'both'
  └─ courts.ts           ← Liste juridictions par canton

components/
  ├─ LawyerCard.vue      ← Affichage + Person schema
  ├─ LocalNAP.vue        ← Bloc NAP réutilisable
  └─ CourtList.vue       ← Liste juridictions par ville

composables/
  └─ useLocalSeo.ts      ← Refactoré multi-ville

pages/
  └─ lausanne/
      ├─ index.vue
      ├─ contact.vue
      ├─ honoraires.vue
      ├─ avocat-divorce.vue
      ├─ avocat-droit-penal.vue
      └─ ...

server/middleware/
  └─ redirects.ts        ← (déjà existe)
```

---

## 9. Prochaines étapes immédiates (action plan T+1 semaine)

**À faire cette semaine par vous (utilisateur)** :
1. ☐ Désactiver Cloudflare AI Bot Block
2. ☐ Activer HSTS sur Cloudflare
3. ☐ Vérifier que `/droit-penal` et `/droit-administratif` se chargent bien après le déploiement
4. ☐ Soumettre sitemap dans Google Search Console
5. ☐ Récupérer les infos Lausanne : adresse, téléphone, horaires, photos
6. ☐ Décider qui rédige les articles de blog (vous, Me Cheema, freelance)
7. ☐ Créer (ou me dire de créer) le compte Google Business Profile Lausanne

**À faire cette semaine par l'IA (moi, sur signal vert)** :
1. ☐ Refactor [composables/useLocalSeo.ts](composables/useLocalSeo.ts) pour multi-ville
2. ☐ Créer [data/locations.ts](data/locations.ts) et [data/team.ts](data/team.ts)
3. ☐ Créer composant `<LawyerCard>` avec schema Person
4. ☐ Ajouter `sameAs`, `AggregateRating`, `Review` au schema
5. ☐ Créer la structure `/lausanne/` avec page d'attente

---

**Plan rédigé le 28 avril 2026 — révision M3 le 31 juillet 2026**
