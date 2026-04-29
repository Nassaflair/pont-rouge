<script setup lang="ts">
import { getLawyersByCity } from '~/data/team'

// Avocats avec connexion Lausanne (UNIL, expérience VD, etc.)
const lausanneLawyers = getLawyersByCity('lausanne')

useLocalSeo(
  'Avocat à Lausanne (Rue Saint-Pierre 2) | Clegal Avocats – Dès 155.-',
  'Avocat à Lausanne — Rue Saint-Pierre 2, 1003 Lausanne. Notre équipe pour le canton de Vaud : pénal, famille, travail, étrangers, bail. 1er RDV CHF 155.-.',
  {
    city: 'lausanne',
    breadcrumbs: [{ name: 'Lausanne', url: 'https://clegal-avocats.ch/lausanne' }],
    lawyerSlugs: lausanneLawyers.map((l) => l.slug),
    services: [
      {
        name: 'Avocat à Lausanne',
        serviceType: 'Conseil et représentation juridique',
        description: 'Cabinet d\'avocats à Lausanne (Rue Saint-Pierre 2, 1003 Lausanne). Représentation devant le Tribunal cantonal vaudois, le Tribunal d\'arrondissement de Lausanne, la Justice de paix, la Cour de droit administratif et public (CDAP) et le Tribunal des baux vaudois.',
        url: 'https://clegal-avocats.ch/lausanne',
        category: 'Services juridiques',
      },
    ],
    faq: [
      {
        question: 'Où se trouve Clegal Avocats à Lausanne ?',
        answer: 'Clegal Avocats Lausanne est situé Rue Saint-Pierre 2, 1003 Lausanne — au cœur du centre-ville, à 5 minutes à pied de la gare de Lausanne. Téléphone 022 512 10 50. Premier rendez-vous d\'analyse à CHF 155.-.',
      },
      {
        question: 'Quelles juridictions vaudoises couvrez-vous depuis Lausanne ?',
        answer: 'Tribunal cantonal vaudois, Cour civile, Cour d\'appel pénale, Cour de droit administratif et public (CDAP), Tribunal d\'arrondissement de Lausanne, Justice de paix de Lausanne, Tribunal des baux, Tribunal de prud\'hommes du canton de Vaud, Chambre des avocats du canton de Vaud.',
      },
      {
        question: 'Vos avocats connaissent-ils le droit vaudois ?',
        answer: 'Oui. Me Mansour Cheema, qui pratique au bureau de Lausanne, est titulaire d\'un Bachelor en droit délivré par l\'Université de Lausanne (UNIL) ainsi que d\'un Master conjoint UNIL/Université de Zurich avec mention magna cum laude. Il maîtrise les juridictions vaudoises et la pratique cantonale.',
      },
      {
        question: 'Quel tarif pour un avocat à Lausanne ?',
        answer: 'Les tarifs des avocats vaudois et genevois sont similaires : CHF 300 à CHF 500 de l\'heure. Clegal Avocats propose un premier rendez-vous d\'analyse forfaitaire à CHF 155.-, des forfaits pour les procédures prévisibles (divorce amiable, dépôts administratifs) et accepte l\'assistance judiciaire vaudoise.',
      },
    ],
  },
)
</script>

<template>
    <main class="bg-slate-50">
      <!-- Hero -->
      <section class="relative pt-32 pb-16 bg-white border-b border-slate-200 overflow-hidden">
        <div class="absolute inset-0 bg-grid-slate opacity-50" />
        <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb :links="[{ name: 'Lausanne', path: '/lausanne' }]" />

          <div class="mt-6 inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span class="text-xs font-semibold text-emerald-900 uppercase tracking-wider">Bureau ouvert · Canton de Vaud</span>
          </div>

          <h1 class="text-4xl lg:text-6xl font-semibold text-slate-900 tracking-tight mt-6">
            Avocat à Lausanne
          </h1>
          <p class="text-lg lg:text-xl text-slate-600 mt-6 max-w-3xl">
            Me Mansour Cheema reçoit les clients vaudois <strong>Rue Saint-Pierre 2, 1003 Lausanne</strong>.
            Conseil et représentation en droit pénal, droit de la famille, droit du travail, droit des étrangers, droit
            du bail et droit des affaires. Premier rendez-vous d'analyse à <strong>CHF 155.-</strong>.
          </p>

          <!-- NAP highlight bar -->
          <div class="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <span class="inline-flex items-center gap-1.5 text-slate-700">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-red-900"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <strong>Rue Saint-Pierre 2, 1003 Lausanne</strong>
            </span>
            <span class="inline-flex items-center gap-1.5 text-slate-700">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-red-900"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <a href="tel:0225121050" class="hover:text-red-900"><strong>022 512 10 50</strong></a>
            </span>
            <span class="inline-flex items-center gap-1.5 text-slate-700">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-red-900"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <strong>Lundi-Vendredi 8h30-18h00</strong>
            </span>
          </div>

          <div class="mt-10 flex flex-col sm:flex-row gap-3">
            <NuxtLink
              to="/contact"
              class="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-slate-900 hover:bg-red-900 rounded-md transition-all shadow-sm"
            >
              Prendre rendez-vous à Lausanne
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

      <!-- NAP Lausanne -->
      <section class="py-16 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 class="text-3xl font-semibold text-slate-900 tracking-tight mb-6">
                Un cabinet d'avocats ancré dans la Suisse romande
              </h2>
              <p class="text-slate-700 leading-relaxed">
                La Suisse romande forme un seul bassin de vie — mais le droit cantonal varie. Le Tribunal cantonal vaudois,
                la Justice de paix, la Cour de droit administratif et public, le Tribunal d'arrondissement de Lausanne ont
                leurs propres règles, leurs propres délais, leurs propres pratiques.
              </p>
              <p class="text-slate-700 leading-relaxed mt-4">
                Plusieurs de nos avocats ont étudié à l'<strong>Université de Lausanne (UNIL)</strong>, pratiqué dans des
                études vaudoises ou été greffiers dans les juridictions du canton de Vaud.
              </p>
            </div>

            <div>
              <h2 class="text-xs uppercase tracking-widest font-bold text-red-900 mb-4">Bureau de Lausanne</h2>
              <LocalNAP city="lausanne" variant="card" />
              <a
                href="https://www.google.com/maps?q=Rue+Saint-Pierre+2+1003+Lausanne"
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

      <!-- Maps embed (signal local fort) -->
      <section class="border-y border-slate-200">
        <div class="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto">
          <div class="p-8 md:p-12 bg-white flex flex-col justify-center">
            <p class="text-xs uppercase tracking-widest text-red-900 font-bold mb-3">Notre bureau de Lausanne</p>
            <h2 class="text-2xl font-semibold text-slate-900 mb-4">Comment nous trouver à Lausanne</h2>
            <address class="not-italic text-slate-700 space-y-2" itemscope itemtype="https://schema.org/LegalService">
              <meta itemprop="name" content="Clegal Avocats Lausanne" />
              <p itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
                <span itemprop="streetAddress">Rue Saint-Pierre 2</span><br>
                <span itemprop="postalCode">1003</span> <span itemprop="addressLocality">Lausanne</span>
                <meta itemprop="addressRegion" content="Vaud" />
                <meta itemprop="addressCountry" content="CH" />
              </p>
              <p>
                Tél : <a :href="'tel:0225121050'" class="text-red-900 hover:underline" itemprop="telephone">022 512 10 50</a>
              </p>
              <p>
                Email : <a href="mailto:info@clegal-avocats.ch" class="text-red-900 hover:underline" itemprop="email">info@clegal-avocats.ch</a>
              </p>
              <p class="text-sm text-slate-500 pt-2">Lundi-Vendredi · 8h30-18h00</p>
            </address>
            <p class="text-sm text-slate-600 mt-4">
              À 5 minutes à pied de la gare de Lausanne (CFF + métro M2). Centre-ville, accès direct depuis l'autoroute A1
              (sortie Lausanne-Sud) et l'ensemble du canton de Vaud.
            </p>
            <a href="https://www.google.com/maps?q=Rue+Saint-Pierre+2+1003+Lausanne" target="_blank" rel="noopener" class="inline-flex items-center gap-2 mt-4 text-sm font-medium text-red-900 hover:text-red-700">
              Itinéraire sur Google Maps →
            </a>
          </div>
          <div class="aspect-[16/9] md:aspect-auto bg-slate-100 grayscale hover:grayscale-0 transition-all duration-500">
            <iframe
              src="https://www.google.com/maps?q=Rue+Saint-Pierre+2+1003+Lausanne&output=embed"
              width="100%"
              height="100%"
              style="border:0; min-height: 360px;"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Carte du bureau Clegal Avocats Lausanne — Rue Saint-Pierre 2, 1003 Lausanne"
            />
          </div>
        </div>
      </section>

      <!-- Domaines couverts -->
      <section class="py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-2xl font-semibold text-slate-900 mb-8">Domaines couverts à Lausanne</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div
              v-for="domain in [
                { title: 'Droit de la famille', desc: 'Divorce, séparation, garde, pension, succession' },
                { title: 'Droit pénal', desc: 'Défense, victimes, ordonnances pénales' },
                { title: 'Droit du travail', desc: 'Licenciement, conflits employeur-employé' },
                { title: 'Droit des étrangers', desc: 'Permis B, regroupement familial, recours' },
                { title: 'Droit du bail', desc: 'Loyer, résiliation, expulsion (Tribunal des baux VD)' },
                { title: 'Droit des affaires', desc: 'Sociétés, contrats, contentieux' },
                { title: 'Droit administratif', desc: 'Décisions cantonales, recours CDAP' },
                { title: 'Droit des assurances', desc: 'Contentieux LAA, AI, prévoyance' },
              ]"
              :key="domain.title"
              class="bg-white border border-slate-200 rounded-xl p-5 hover:border-red-900/30 hover:shadow-sm transition-all"
            >
              <h3 class="text-sm font-semibold text-slate-900">{{ domain.title }}</h3>
              <p class="text-xs text-slate-500 mt-2">{{ domain.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Avocat du bureau de Lausanne -->
      <section v-if="lausanneLawyers.length" class="py-16 bg-white border-y border-slate-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-2xl font-semibold text-slate-900 mb-3">Votre avocat à Lausanne</h2>
          <p class="text-slate-600 mb-8 max-w-3xl">
            Me Mansour Cheema reçoit les clients vaudois Rue Saint-Pierre 2, 1003 Lausanne. Formation à l'Université de Lausanne (UNIL) et expertise reconnue en droit pénal, droit de la famille et droit des étrangers.
          </p>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <LawyerCard
              v-for="lawyer in lausanneLawyers"
              :key="lawyer.slug"
              :lawyer="lawyer"
              variant="compact"
            />
          </div>
        </div>
      </section>

      <!-- Juridictions vaudoises -->
      <section class="py-16">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-2xl font-semibold text-slate-900 mb-6">Juridictions vaudoises où nous intervenons</h2>
          <ul class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <li
              v-for="court in [
                'Tribunal cantonal vaudois (Lausanne)',
                'Cour civile',
                'Cour d\'appel pénale',
                'Cour de droit administratif et public (CDAP)',
                'Tribunal d\'arrondissement de Lausanne',
                'Justice de paix de Lausanne',
                'Chambre des avocats du canton de Vaud',
                'Tribunal des baux',
                'Tribunal de prud\'hommes du canton de Vaud',
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

      <!-- Communes desservies -->
      <section class="py-16 bg-white border-t border-slate-200">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-2xl font-semibold text-slate-900 mb-6">Communes desservies dans le canton de Vaud</h2>
          <p class="text-slate-700 mb-6">
            Nos avocats reçoivent les clients de l'ensemble du canton de Vaud, avec une couverture prioritaire sur :
          </p>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="commune in [
                'Lausanne',
                'Pully',
                'Renens',
                'Ecublens',
                'Prilly',
                'Morges',
                'Vevey',
                'Montreux',
                'Yverdon-les-Bains',
                'Nyon',
              ]"
              :key="commune"
              class="px-3 py-1.5 bg-slate-100 text-slate-700 text-sm rounded-full"
            >
              {{ commune }}
            </span>
          </div>
        </div>
      </section>

      <!-- CTA final -->
      <section class="py-20 bg-slate-900 text-white">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-3xl lg:text-4xl font-semibold tracking-tight">
            Avocat à Lausanne — premier rendez-vous d'analyse à CHF 155.-
          </h2>
          <p class="mt-4 text-slate-300">
            Soixante minutes avec un avocat de l'équipe. Évaluation chiffrée du dossier, identification des points
            faibles, stratégie procédurale recommandée.
          </p>
          <div class="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <NuxtLink
              to="/contact"
              class="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-slate-900 bg-white hover:bg-slate-100 rounded-md"
            >
              Prendre rendez-vous
            </NuxtLink>
            <a
              href="tel:0225121050"
              class="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white border border-white/20 hover:bg-white/10 rounded-md"
            >
              022 512 10 50
            </a>
          </div>
        </div>
      </section>
    </main>
</template>
