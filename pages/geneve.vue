<script setup lang="ts">
import { lawyers } from '~/data/team'

useLocalSeo(
  'Avocat à Genève | Clegal Avocats Acacias – Dès 155.- le 1er RDV',
  'Avocat à Genève (Acacias). Sept avocats au Barreau de Genève. Droit pénal, famille, travail, étrangers, bail, affaires, administratif. Premier rendez-vous d\'analyse à CHF 155.-.',
  {
    city: 'geneve',
    breadcrumbs: [{ name: 'Avocat à Genève', url: 'https://clegal-avocats.ch/geneve' }],
    lawyerSlugs: lawyers.map((l) => l.slug),
    faq: [
      {
        question: 'Où se trouve votre cabinet d\'avocats à Genève ?',
        answer: 'Notre cabinet est situé Route des Jeunes 9, 1227 Les Acacias, dans le quartier d\'affaires de Lancy-Pont-Rouge. Accès en 5 minutes depuis le centre-ville de Genève par tram (lignes 12, 15, 17, 18 — arrêts Pont-Rouge ou Acacias), Léman Express (gare Lancy-Pont-Rouge), bus ou voiture (parking visiteurs Centre Commercial La Praille).',
      },
      {
        question: 'Combien coûte un avocat à Genève ?',
        answer: 'Les tarifs horaires des avocats à Genève varient entre CHF 300 et CHF 500. Chez Clegal Avocats, le premier rendez-vous d\'analyse est forfaitaire à CHF 155.- (60 minutes). Pour les procédures prévisibles, des forfaits sont possibles. L\'aide juridictionnelle (art. 117 CPC) est acceptée pour les clients éligibles.',
      },
      {
        question: 'Quels domaines du droit pratiquez-vous à Genève ?',
        answer: 'Tous les domaines du droit suisse pertinents : droit de la famille (divorce, séparation, garde, pension, succession), droit pénal (Ministère public, Tribunal correctionnel, défense LAVI), droit du travail (Tribunal des prud\'hommes), droit des étrangers (OCPM, permis B/C), droit immobilier (bail), droit des affaires (Sàrl, SA, contrats), droit administratif et droit des assurances.',
      },
      {
        question: 'Êtes-vous inscrits au Barreau de Genève ?',
        answer: 'Oui. Tous les avocats associés du cabinet sont inscrits au Barreau de Genève (Ordre des avocats de Genève — ODA). Me Tano Barth est même membre suppléant de la Commission du barreau (autorité de surveillance des avocats). Me Rémy Bucheler a été élu juge suppléant au Tribunal civil de Genève en 2025.',
      },
      {
        question: 'Quels quartiers et communes du canton desservez-vous ?',
        answer: 'Notre cabinet d\'avocats à Genève accueille les clients de tout le canton : Genève centre, Plainpalais, Eaux-Vives, Champel, Carouge, Lancy, Vernier, Meyrin, Onex, Versoix, Plan-les-Ouates, Chêne-Bougeries, Cologny, Veyrier. Pages dédiées : /avocat-carouge, /avocat-eaux-vives.',
      },
    ],
  },
)
</script>

<template>
  <NuxtLayout>
    <main class="bg-slate-50">
      <!-- Hero -->
      <section class="relative pt-32 pb-16 bg-white border-b border-slate-200 overflow-hidden">
        <div class="absolute inset-0 bg-grid-slate opacity-50" />
        <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb :links="[{ name: 'Avocat à Genève', path: '/geneve' }]" />

          <div class="mt-6 inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span class="text-xs font-semibold text-emerald-900 uppercase tracking-wider">Cabinet historique · Acacias</span>
          </div>

          <h1 class="text-4xl lg:text-6xl font-semibold text-slate-900 tracking-tight mt-6">
            Avocat à Genève
          </h1>
          <p class="text-lg lg:text-xl text-slate-600 mt-6 max-w-3xl">
            Clegal Avocats — sept avocats au Barreau de Genève. Cabinet généraliste situé aux Acacias, à 5 minutes du
            centre-ville. Droit pénal, famille, travail, étrangers, bail, affaires, administratif.
            <strong>Premier rendez-vous d'analyse à CHF 155.-</strong>.
          </p>

          <div class="mt-10 flex flex-col sm:flex-row gap-3">
            <NuxtLink
              to="/contact"
              class="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-slate-900 hover:bg-red-900 rounded-md transition-all shadow-sm"
            >
              Prendre rendez-vous à Genève
            </NuxtLink>
            <a
              href="tel:0225121050"
              class="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-md transition-all"
            >
              022 512 10 50
            </a>
          </div>
        </div>
      </section>

      <!-- NAP Genève -->
      <section class="py-16 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 class="text-3xl font-semibold text-slate-900 tracking-tight mb-6">
                Un cabinet d'avocats au cœur de Genève
              </h2>
              <p class="text-slate-700 leading-relaxed">
                Trouver un <strong>avocat à Genève</strong> qui maîtrise à la fois le droit fédéral suisse et la pratique
                cantonale n'est pas anodin. Chaque juridiction du canton — Tribunal de première instance, Cour de
                justice, Ministère public, Prud'hommes, TAPI — a ses propres règles, ses propres délais, ses propres
                pratiques.
              </p>
              <p class="text-slate-700 leading-relaxed mt-4">
                Notre étude réunit sept avocats inscrits au <strong>Barreau de Genève</strong>, formés à l'UNIGE,
                l'UNIL et Zurich. Trois exercent des responsabilités institutionnelles à Genève (juge suppléant au
                Tribunal civil, Commission du barreau, École d'avocature de l'UNIGE). Tous partagent une approche
                humaine et combative du droit.
              </p>
            </div>

            <div>
              <h2 class="text-xs uppercase tracking-widest font-bold text-red-900 mb-4">Bureau de Genève</h2>
              <LocalNAP city="geneve" variant="card" />
              <a
                href="https://www.google.com/maps?q=Route+des+Jeunes+9+1227+Les+Acacias"
                target="_blank"
                rel="noopener"
                class="inline-flex items-center gap-2 mt-4 text-sm text-red-900 hover:text-red-700 font-medium"
              >
                Voir sur Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Domaines à Genève -->
      <section class="py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-2xl font-semibold text-slate-900 mb-8">Domaines couverts à Genève</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <NuxtLink to="/droit-famille" class="block bg-white border border-slate-200 rounded-xl p-5 hover:border-red-900/30 hover:shadow-sm transition-all">
              <h3 class="text-sm font-semibold text-slate-900">Avocat famille à Genève</h3>
              <p class="text-xs text-slate-500 mt-2">Divorce, séparation, garde, pension, succession.</p>
            </NuxtLink>
            <NuxtLink to="/droit-penal" class="block bg-white border border-slate-200 rounded-xl p-5 hover:border-red-900/30 hover:shadow-sm transition-all">
              <h3 class="text-sm font-semibold text-slate-900">Avocat pénaliste à Genève</h3>
              <p class="text-xs text-slate-500 mt-2">Défense, victimes LAVI, ordonnances pénales.</p>
            </NuxtLink>
            <NuxtLink to="/droit-travail" class="block bg-white border border-slate-200 rounded-xl p-5 hover:border-red-900/30 hover:shadow-sm transition-all">
              <h3 class="text-sm font-semibold text-slate-900">Avocat travail à Genève</h3>
              <p class="text-xs text-slate-500 mt-2">Licenciement, prud'hommes (gratuit < 75k).</p>
            </NuxtLink>
            <NuxtLink to="/droit-etrangers" class="block bg-white border border-slate-200 rounded-xl p-5 hover:border-red-900/30 hover:shadow-sm transition-all">
              <h3 class="text-sm font-semibold text-slate-900">Avocat étrangers à Genève</h3>
              <p class="text-xs text-slate-500 mt-2">Permis B/C, regroupement, OCPM, recours.</p>
            </NuxtLink>
            <NuxtLink to="/droit-immobilier/avocat-droit-bail" class="block bg-white border border-slate-200 rounded-xl p-5 hover:border-red-900/30 hover:shadow-sm transition-all">
              <h3 class="text-sm font-semibold text-slate-900">Avocat bail à Genève</h3>
              <p class="text-xs text-slate-500 mt-2">Loyer, résiliation, expulsion.</p>
            </NuxtLink>
            <NuxtLink to="/droit-affaires" class="block bg-white border border-slate-200 rounded-xl p-5 hover:border-red-900/30 hover:shadow-sm transition-all">
              <h3 class="text-sm font-semibold text-slate-900">Avocat des affaires à Genève</h3>
              <p class="text-xs text-slate-500 mt-2">Sàrl, SA, contrats, contentieux commercial.</p>
            </NuxtLink>
            <NuxtLink to="/droit-administratif" class="block bg-white border border-slate-200 rounded-xl p-5 hover:border-red-900/30 hover:shadow-sm transition-all">
              <h3 class="text-sm font-semibold text-slate-900">Avocat administratif à Genève</h3>
              <p class="text-xs text-slate-500 mt-2">Recours TAPI, Cour de justice, État.</p>
            </NuxtLink>
            <NuxtLink to="/droit-assurance" class="block bg-white border border-slate-200 rounded-xl p-5 hover:border-red-900/30 hover:shadow-sm transition-all">
              <h3 class="text-sm font-semibold text-slate-900">Avocat assurances à Genève</h3>
              <p class="text-xs text-slate-500 mt-2">LAA, AI, LPP, responsabilité civile.</p>
            </NuxtLink>
          </div>
        </div>
      </section>

      <!-- Quartiers desservis -->
      <section class="py-16 bg-white border-y border-slate-200">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-2xl font-semibold text-slate-900 mb-6">Quartiers et communes desservis à Genève</h2>
          <p class="text-slate-700 mb-6">
            Notre cabinet aux Acacias accueille les clients de tout le canton de Genève. Pages dédiées pour les quartiers
            les plus consultés.
          </p>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
            <NuxtLink to="/avocat-carouge" class="bg-slate-50 border border-slate-200 rounded-lg p-4 hover:border-red-900/30 transition-all">
              <p class="text-sm font-semibold text-slate-900">Avocat à Carouge</p>
              <p class="text-xs text-slate-500 mt-1">Page dédiée</p>
            </NuxtLink>
            <NuxtLink to="/avocat-eaux-vives" class="bg-slate-50 border border-slate-200 rounded-lg p-4 hover:border-red-900/30 transition-all">
              <p class="text-sm font-semibold text-slate-900">Avocat aux Eaux-Vives</p>
              <p class="text-xs text-slate-500 mt-1">Page dédiée</p>
            </NuxtLink>
            <div class="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <p class="text-sm font-semibold text-slate-900">Genève centre, Plainpalais</p>
            </div>
            <div class="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <p class="text-sm font-semibold text-slate-900">Champel, Florissant</p>
            </div>
            <div class="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <p class="text-sm font-semibold text-slate-900">Lancy, Onex, Plan-les-Ouates</p>
            </div>
            <div class="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <p class="text-sm font-semibold text-slate-900">Vernier, Meyrin, Versoix</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Juridictions -->
      <section class="py-16">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-2xl font-semibold text-slate-900 mb-6">Juridictions genevoises où nous intervenons</h2>
          <ul class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <li
              v-for="court in [
                'Tribunal de première instance de Genève',
                'Cour de justice de Genève',
                'Ministère public',
                'Tribunal correctionnel & Tribunal de police',
                'Tribunal des prud\'hommes de Genève',
                'Tribunal des baux et loyers',
                'Tribunal administratif de première instance (TAPI)',
                'Chambre administrative de la Cour de justice',
                'Conseil d\'État de Genève',
                'Chambre des assurances sociales du Tribunal cantonal',
                'Tribunal des mesures de contrainte (TMC)',
                'Tribunal fédéral (Lausanne) — recours fédéral',
              ]"
              :key="court"
              class="flex items-start gap-3 bg-white border border-slate-200 rounded-lg p-4"
            >
              <span class="text-red-900 mt-0.5">›</span>
              <span class="text-sm text-slate-700">{{ court }}</span>
            </li>
          </ul>
        </div>
      </section>

      <!-- CTA -->
      <section class="py-20 bg-slate-900 text-white">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-3xl lg:text-4xl font-semibold tracking-tight">
            Avocat à Genève — premier rendez-vous d'analyse à CHF 155.-
          </h2>
          <p class="mt-4 text-slate-300">
            Soixante minutes avec un avocat de l'équipe. Évaluation chiffrée du dossier, identification des points
            faibles, stratégie procédurale recommandée.
          </p>
          <div class="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <NuxtLink to="/contact" class="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-slate-900 bg-white hover:bg-slate-100 rounded-md">Prendre rendez-vous</NuxtLink>
            <a href="tel:0225121050" class="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white border border-white/20 hover:bg-white/10 rounded-md">022 512 10 50</a>
          </div>
        </div>
      </section>
    </main>
  </NuxtLayout>
</template>
