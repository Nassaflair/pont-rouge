<script setup lang="ts">
import { lawyers, getLawyersByCity } from '~/data/team'

// Avocats avec connexion Lausanne (UNIL, expérience VD, etc.)
const lausanneLawyers = getLawyersByCity('lausanne')

useLocalSeo(
  'Avocat à Lausanne | Clegal Avocats – Bientôt à Lausanne',
  'Clegal Avocats arrive à Lausanne. Cabinet généraliste : droit pénal, famille, travail, étrangers, bail. Premier rendez-vous d\'analyse à CHF 155.-. Avocats formés à l\'UNIL.',
  {
    city: 'lausanne',
    breadcrumbs: [{ name: 'Lausanne', url: 'https://clegal-avocats.ch/lausanne' }],
    lawyerSlugs: lausanneLawyers.map((l) => l.slug),
    aggregateRating: false,
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
          <Breadcrumb
            :links="[
              { name: 'Lausanne', path: '/lausanne' },
            ]"
          />

          <div class="mt-6 inline-flex items-center gap-2 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span class="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
            </span>
            <span class="text-xs font-semibold text-amber-900 uppercase tracking-wider">Bientôt à Lausanne</span>
          </div>

          <h1 class="text-4xl lg:text-6xl font-semibold text-slate-900 tracking-tight mt-6">
            Clegal Avocats arrive à Lausanne
          </h1>
          <p class="text-lg lg:text-xl text-slate-600 mt-6 max-w-3xl">
            Sept avocats au service du canton de Vaud. La même rigueur, la même approche humaine, le même premier
            rendez-vous d'analyse à CHF 155.-, désormais aussi à Lausanne.
          </p>

          <div class="mt-10 flex flex-col sm:flex-row gap-3">
            <NuxtLink
              to="/contact"
              class="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-slate-900 hover:bg-red-900 rounded-md transition-all shadow-sm"
            >
              Prendre contact maintenant
            </NuxtLink>
            <a
              href="tel:0225121050"
              class="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-md transition-all"
            >
              022 512 10 50 — Genève
            </a>
          </div>

          <p class="text-sm text-slate-500 mt-4">
            En attendant l'ouverture officielle de notre antenne lausannoise, nos avocats reçoivent déjà des clients vaudois à Genève.
          </p>
        </div>
      </section>

      <!-- Pourquoi Lausanne -->
      <section class="py-16 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-semibold text-slate-900 tracking-tight mb-6">
            Pourquoi un cabinet d'avocats à Lausanne ?
          </h2>
          <p class="text-slate-700 leading-relaxed">
            La Suisse romande forme un seul bassin de vie — mais le droit cantonal varie. Tribunal cantonal vaudois,
            Justice de paix, Cour de droit administratif et public, Tribunal d'arrondissement de Lausanne&nbsp;: les
            juridictions vaudoises ont leurs propres règles, leurs propres délais, leurs propres pratiques.
          </p>
          <p class="text-slate-700 leading-relaxed mt-4">
            Plusieurs de nos avocats ont étudié à l'<strong>Université de Lausanne (UNIL)</strong>, pratiqué dans des études
            vaudoises ou été greffiers dans les juridictions du canton de Vaud. Ouvrir une antenne à Lausanne est un
            prolongement naturel de notre activité, pas une expansion opportuniste.
          </p>
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

      <!-- Équipe avec connexion VD -->
      <section v-if="lausanneLawyers.length" class="py-16 bg-white border-y border-slate-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-2xl font-semibold text-slate-900 mb-3">Nos avocats avec une connexion vaudoise</h2>
          <p class="text-slate-600 mb-8 max-w-3xl">
            Plusieurs membres de notre équipe ont une formation ou une expérience directe dans le canton de Vaud.
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
          <p class="text-sm uppercase tracking-widest font-bold text-red-300">Avant l'ouverture officielle</p>
          <h2 class="text-3xl lg:text-4xl font-semibold tracking-tight mt-3">
            Vous avez besoin d'un avocat à Lausanne maintenant&nbsp;?
          </h2>
          <p class="mt-4 text-slate-300">
            Nos avocats reçoivent déjà les clients vaudois à Genève (à 35 minutes en train) et peuvent intervenir devant
            les juridictions du canton de Vaud. Premier rendez-vous d'analyse à CHF 155.-.
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
  </NuxtLayout>
</template>
