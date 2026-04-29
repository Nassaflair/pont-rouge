<script setup lang="ts">
import { lawyers } from '~/data/team'

const cheema = lawyers.find((l) => l.slug === 'mansour-cheema')!

useLocalSeo(
  'Me Mansour Cheema | Avocat fondateur Clegal Avocats Genève',
  'Me Mansour Cheema, avocat au Barreau de Genève, associé fondateur de Clegal Avocats. Expertise en droit pénal, droit de la famille et droit des étrangers. UNIL & Université de Zurich.',
  {
    city: 'geneve',
    breadcrumbs: [
      { name: 'Équipe', url: 'https://clegal-avocats.ch/equipe' },
      { name: 'Me Mansour Cheema', url: 'https://clegal-avocats.ch/auteur/mansour-cheema' },
    ],
    lawyerSlugs: ['mansour-cheema'],
  },
)

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        '@id': 'https://clegal-avocats.ch/auteur/mansour-cheema#person',
        name: cheema.name,
        jobTitle: cheema.jobTitle,
        url: 'https://clegal-avocats.ch/auteur/mansour-cheema',
        image: `https://clegal-avocats.ch${cheema.image}`,
        email: cheema.email,
        worksFor: { '@type': 'LegalService', name: 'Clegal Avocats Genève' },
        alumniOf: cheema.alumniOf?.map((a) => ({ '@type': 'EducationalOrganization', name: a })),
        knowsAbout: cheema.knowsAbout,
        knowsLanguage: cheema.knowsLanguage,
        description: cheema.bio,
      }),
    },
  ],
})

const articles = [
  {
    title: 'Coût d\'un divorce à Genève en 2026',
    url: '/blog/cout-divorce-geneve',
    date: '28 avril 2026',
  },
  {
    title: 'Procédure pénale à Genève : guide complet',
    url: '/blog/procedure-penale-geneve',
    date: '28 avril 2026',
  },
  {
    title: 'Permis B à Genève : conditions, durée, renouvellement',
    url: '/blog/permis-b-geneve',
    date: '28 avril 2026',
  },
  {
    title: 'Travailler en Suisse hors UE-AELE',
    url: '/blog/travailler-suisse-hors-ue',
    date: '29 janvier 2025',
  },
]
</script>

<template>
  <NuxtLayout>
    <main class="bg-slate-50">
      <section class="pt-32 pb-12 bg-white border-b border-slate-200">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            :links="[
              { name: 'Équipe', path: '/equipe' },
              { name: 'Me Mansour Cheema', path: '/auteur/mansour-cheema' },
            ]"
          />

          <div class="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8">
            <div class="md:col-span-1">
              <NuxtImg
                :src="cheema.image.replace('.png', '.jpg')"
                :alt="`${cheema.name} – ${cheema.jobTitle} – Clegal Avocats Genève`"
                format="webp"
                width="400"
                height="500"
                class="w-full aspect-[4/5] object-cover rounded-xl border border-slate-200"
              />
            </div>
            <div class="md:col-span-2">
              <p class="text-xs uppercase tracking-widest text-red-900 font-semibold">Avocat fondateur · Barreau de Genève</p>
              <h1 class="text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight mt-3">
                Me Mansour Cheema
              </h1>
              <p class="text-lg text-red-900 font-medium mt-2">{{ cheema.jobTitle }}</p>

              <p class="text-slate-700 leading-relaxed mt-6 whitespace-pre-line">{{ cheema.bio }}</p>

              <dl class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <dt class="font-semibold text-slate-500 uppercase tracking-wider text-xs">Formation</dt>
                  <dd class="text-slate-700 mt-1">{{ cheema.alumniOf?.join(', ') }}</dd>
                </div>
                <div>
                  <dt class="font-semibold text-slate-500 uppercase tracking-wider text-xs">Domaines</dt>
                  <dd class="text-slate-700 mt-1">{{ cheema.knowsAbout?.join(', ') }}</dd>
                </div>
                <div>
                  <dt class="font-semibold text-slate-500 uppercase tracking-wider text-xs">Langues</dt>
                  <dd class="text-slate-700 mt-1">{{ cheema.languages }}</dd>
                </div>
                <div>
                  <dt class="font-semibold text-slate-500 uppercase tracking-wider text-xs">Email</dt>
                  <dd class="text-slate-700 mt-1">
                    <a :href="`mailto:${cheema.email}`" class="text-red-900 hover:underline">{{ cheema.email }}</a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section class="py-16 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-2xl font-semibold text-slate-900 mb-8">Articles publiés par Me Cheema</h2>
          <ul class="space-y-3">
            <li v-for="article in articles" :key="article.url">
              <NuxtLink :to="article.url" class="block bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-red-900/30 hover:shadow-sm transition-all">
                <p class="text-base font-semibold text-slate-900">{{ article.title }}</p>
                <p class="text-xs text-slate-500 mt-1">{{ article.date }}</p>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </section>

      <section class="py-16 bg-slate-50 border-y border-slate-200">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-2xl font-semibold text-slate-900 mb-6">Domaines d'intervention de Me Cheema à Genève</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <NuxtLink to="/droit-penal" class="block bg-white border border-slate-200 rounded-xl p-5 hover:border-red-900/30 transition-all">
              <h3 class="font-semibold text-slate-900">Droit pénal</h3>
              <p class="text-sm text-slate-600 mt-2">Défense, victimes, ordonnances pénales.</p>
            </NuxtLink>
            <NuxtLink to="/droit-famille" class="block bg-white border border-slate-200 rounded-xl p-5 hover:border-red-900/30 transition-all">
              <h3 class="font-semibold text-slate-900">Droit de la famille</h3>
              <p class="text-sm text-slate-600 mt-2">Divorce, séparation, garde, pension.</p>
            </NuxtLink>
            <NuxtLink to="/droit-etrangers" class="block bg-white border border-slate-200 rounded-xl p-5 hover:border-red-900/30 transition-all">
              <h3 class="font-semibold text-slate-900">Droit des étrangers</h3>
              <p class="text-sm text-slate-600 mt-2">Permis B/C, OCPM, asile (ex-SAJE et Caritas).</p>
            </NuxtLink>
          </div>
        </div>
      </section>

      <section class="py-16 bg-slate-900 text-white">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-3xl font-semibold tracking-tight">Prendre rendez-vous avec Me Cheema</h2>
          <p class="mt-3 text-slate-300">
            Premier rendez-vous d'analyse à CHF 155.- — 60 minutes pour évaluer le dossier et proposer un plan d'action.
          </p>
          <div class="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <NuxtLink to="/contact" class="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-slate-900 bg-white hover:bg-slate-100 rounded-md">Demander un rendez-vous</NuxtLink>
            <a href="tel:0225121050" class="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white border border-white/20 hover:bg-white/10 rounded-md">022 512 10 50</a>
          </div>
        </div>
      </section>
    </main>
  </NuxtLayout>
</template>
