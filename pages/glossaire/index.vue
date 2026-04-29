<script setup lang="ts">
useLocalSeo(
  'Glossaire juridique Genève | Termes du droit suisse – Clegal Avocats',
  'Glossaire juridique pour comprendre le droit suisse à Genève : ordonnance pénale, MPUC, assistance judiciaire, OCPM, prud\'hommes. Définitions claires.',
  {
    city: 'geneve',
    breadcrumbs: [{ name: 'Glossaire juridique', url: 'https://clegal-avocats.ch/glossaire' }],
  },
)

const entries = [
  {
    slug: 'ordonnance-penale-geneve',
    title: 'Ordonnance pénale',
    summary: 'Décision écrite du Ministère public statuant sur la culpabilité et la peine sans procès. Opposition possible dans les 10 jours (art. 354 CPP).',
  },
  {
    slug: 'mpuc-geneve',
    title: 'MPUC — Mesures protectrices de l\'union conjugale',
    summary: 'Décision du Tribunal de première instance organisant la séparation provisoire des époux : domicile, garde, contributions.',
  },
  {
    slug: 'assistance-judiciaire-geneve',
    title: 'Assistance judiciaire',
    summary: 'Aide étatique aux personnes sans moyens suffisants pour couvrir les honoraires d\'avocat et frais de justice (art. 117 CPC).',
  },
  {
    slug: 'ocpm-geneve',
    title: 'OCPM',
    summary: 'Office cantonal de la population et des migrations à Genève. Délivre les permis B, C, L et traite les demandes de regroupement familial.',
  },
  {
    slug: 'prud-hommes-geneve',
    title: 'Tribunal des prud\'hommes',
    summary: 'Juridiction genevoise spécialisée en droit du travail. Gratuit jusqu\'à CHF 75\'000 de valeur litigieuse (art. 114 CPC).',
  },
]
</script>

<template>
    <main class="bg-slate-50">
      <section class="pt-32 pb-12 bg-white border-b border-slate-200">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb :links="[{ name: 'Glossaire juridique', path: '/glossaire' }]" />
          <h1 class="text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight mt-6 mb-4">
            Glossaire juridique — droit suisse à Genève
          </h1>
          <p class="text-lg text-slate-600 max-w-3xl">
            Comprendre les termes du droit suisse les plus utilisés dans les procédures genevoises et vaudoises. Définitions
            claires, références aux articles de loi, exemples concrets.
          </p>
        </div>
      </section>

      <section class="py-16">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <NuxtLink
            v-for="e in entries"
            :key="e.slug"
            :to="`/glossaire/${e.slug}`"
            class="block bg-white border border-slate-200 rounded-xl p-6 hover:border-red-900/30 hover:shadow-sm transition-all"
          >
            <h2 class="text-xl font-semibold text-slate-900 group-hover:text-red-900">{{ e.title }}</h2>
            <p class="text-sm text-slate-600 mt-2">{{ e.summary }}</p>
            <p class="text-xs text-red-900 font-medium mt-3">Lire la définition complète →</p>
          </NuxtLink>
        </div>
      </section>
    </main>
</template>
