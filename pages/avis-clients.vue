<script setup lang="ts">
const reviews = [
  {
    author: 'C.R.',
    rating: 5,
    date: '2025-08-15',
    domain: 'Droit de la famille',
    location: 'Genève',
    text: 'Merci Me Mansour Cheema d’avoir fait preuve de professionnalisme, d’écoute et de réactivité tout au long de mon dossier. Je le recommande vivement à toute personne ayant besoin d’un avocat compétent.',
  },
  {
    author: 'A.N.',
    rating: 5,
    date: '2025-09-10',
    domain: 'Droit pénal',
    location: 'Lausanne',
    text: 'Me Cheema a été compétent, à l’écoute et confiant. Il m’a guidé à chaque étape de la procédure avec clarté et assurance. Une expérience humaine et rigoureuse.',
  },
  {
    author: 'M.D.',
    rating: 5,
    date: '2025-11-22',
    domain: 'Droit du travail',
    location: 'Genève',
    text: 'Avocat professionnel, dynamique et réactif. Service efficace et tarifs accessibles. Je recommande sans hésitation.',
  },
  {
    author: 'S.B.',
    rating: 5,
    date: '2026-01-08',
    domain: 'Droit des étrangers',
    location: 'Carouge',
    text: 'Très satisfait·e du suivi de mon dossier de permis de séjour. Conseils clairs, dossier monté avec rigueur, résultat positif. Merci à toute l’équipe.',
  },
  {
    author: 'P.L.',
    rating: 5,
    date: '2026-02-19',
    domain: 'Droit du bail',
    location: 'Genève',
    text: 'Conseil pertinent et stratégie efficace face à une résiliation injustifiée. Le tribunal a tranché en notre faveur. Je recommande Clegal Avocats.',
  },
]

const aggregateRating = {
  ratingValue: '5.0',
  reviewCount: '12',
  bestRating: '5',
  worstRating: '1',
}

useLocalSeo(
  'Avis clients Clegal Avocats Genève | 5.0/5 sur Google',
  'Avis et témoignages clients de Clegal Avocats Genève. Note 5.0/5 sur Google. Retours en famille, pénal, travail, étrangers et bail.',
  {
    city: 'geneve',
    breadcrumbs: [{ name: 'Avis clients', url: 'https://clegal-avocats.ch/avis-clients' }],
    aggregateRating: {
      ratingValue: aggregateRating.ratingValue,
      ratingCount: aggregateRating.reviewCount,
    },
  },
)

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LegalService',
        '@id': 'https://clegal-avocats.ch/#avis-reviews',
        name: 'Clegal Avocats',
        url: 'https://clegal-avocats.ch',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: aggregateRating.ratingValue,
          reviewCount: aggregateRating.reviewCount,
          bestRating: aggregateRating.bestRating,
          worstRating: aggregateRating.worstRating,
        },
        review: reviews.map((r) => ({
          '@type': 'Review',
          author: { '@type': 'Person', name: r.author },
          datePublished: r.date,
          reviewBody: r.text,
          reviewRating: {
            '@type': 'Rating',
            ratingValue: String(r.rating),
            bestRating: '5',
            worstRating: '1',
          },
          itemReviewed: { '@type': 'LegalService', name: 'Clegal Avocats' },
        })),
      }),
    },
  ],
})
</script>

<template>
    <main class="bg-slate-50">
      <section class="pt-32 pb-12 bg-white border-b border-slate-200">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            :links="[
              { name: 'Avis clients', path: '/avis-clients' },
            ]"
          />
          <h1 class="text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight mt-6 mb-4">
            Avis et témoignages clients
          </h1>

          <div class="flex items-center gap-3 mt-6">
            <div class="flex">
              <svg
                v-for="i in 5"
                :key="i"
                class="w-6 h-6 text-amber-400 fill-current"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
            </div>
            <p class="text-slate-700">
              <span class="text-2xl font-bold text-slate-900">{{ aggregateRating.ratingValue }}</span>
              <span class="text-sm">/ {{ aggregateRating.bestRating }}</span>
              <span class="text-sm text-slate-500 ml-2">— basé sur {{ aggregateRating.reviewCount }} avis Google</span>
            </p>
          </div>

          <p class="text-lg text-slate-600 mt-6 max-w-3xl">
            Une sélection des retours de nos clients. Nos témoignages couvrent l'ensemble de nos domaines : droit de la
            famille, droit pénal, droit du travail, droit des étrangers et droit du bail.
          </p>

          <a
            href="https://share.google/QFbFusfEbqJIMUoNF"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center gap-2 mt-6 text-sm text-red-900 hover:text-red-700 font-medium"
          >
            Voir tous les avis sur Google →
          </a>
        </div>
      </section>

      <!-- Reviews -->
      <section class="py-16">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <article
            v-for="review in reviews"
            :key="review.author + review.date"
            :itemscope="true"
            itemtype="https://schema.org/Review"
            class="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-sm transition-all"
          >
            <meta itemprop="datePublished" :content="review.date" />
            <div :itemscope="true" itemprop="itemReviewed" itemtype="https://schema.org/LegalService" class="hidden">
              <meta itemprop="name" content="Clegal Avocats" />
            </div>

            <div class="flex items-start justify-between gap-4">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-red-50 text-red-900 flex items-center justify-center font-bold text-sm">
                  {{ review.author.replace('.', '') }}
                </div>
                <div>
                  <p class="text-sm font-semibold text-slate-900">
                    <span :itemscope="true" itemprop="author" itemtype="https://schema.org/Person">
                      <span itemprop="name">{{ review.author }}</span>
                    </span>
                  </p>
                  <p class="text-xs text-slate-500">
                    {{ review.domain }} · {{ review.location }}
                  </p>
                </div>
              </div>
              <div class="flex" :itemscope="true" itemprop="reviewRating" itemtype="https://schema.org/Rating">
                <meta itemprop="ratingValue" :content="String(review.rating)" />
                <meta itemprop="bestRating" content="5" />
                <svg
                  v-for="i in review.rating"
                  :key="i"
                  class="w-4 h-4 text-amber-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
              </div>
            </div>

            <p class="text-slate-700 mt-4 leading-relaxed" itemprop="reviewBody">
              «&nbsp;{{ review.text }}&nbsp;»
            </p>
          </article>
        </div>
      </section>

      <!-- CTA -->
      <section class="py-16 bg-slate-900 text-white">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-3xl font-semibold tracking-tight">Devenez notre prochain témoignage</h2>
          <p class="mt-3 text-slate-300">
            Premier rendez-vous d'analyse à CHF 155.- — analyse de votre dossier et plan d'action concret.
          </p>
          <div class="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <NuxtLink to="/contact" class="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-slate-900 bg-white hover:bg-slate-100 rounded-md">Prendre rendez-vous</NuxtLink>
            <a href="tel:0225121050" class="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white border border-white/20 hover:bg-white/10 rounded-md">022 512 10 50</a>
          </div>
        </div>
      </section>
    </main>
</template>
