<script setup lang="ts">
import { lawyers, getPartners, getInterns } from '~/data/team'

const partners = getPartners()
const interns = getInterns()

useLocalSeo(
  'Notre Équipe d\'Avocats à Genève | 7 Experts – Clegal Avocats',
  'Les 7 avocats de Clegal à Genève : Me Cheema (fondateur), Me Amberger, Me Tano Barth (Dr. en droit), Me Bucheler (juge suppléant), Me Jacot Des Combes.',
  {
    city: 'geneve',
    breadcrumbs: [{ name: 'L\'Équipe', url: 'https://clegal-avocats.ch/equipe' }],
    lawyerSlugs: lawyers.map((l) => l.slug),
  },
)
</script>

<template>
  <NuxtLayout>
    <main class="bg-slate-50">
      <!-- Hero -->
      <section class="pt-32 pb-12 bg-white border-b border-slate-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            :links="[
              { name: 'L\'Équipe', path: '/equipe' },
            ]"
          />
          <h1 class="text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight mt-6 mb-4">
            Notre Équipe d'Avocats à Genève
          </h1>
          <p class="text-lg text-slate-600 max-w-3xl">
            Sept avocats au service de votre cause. Une expertise reconnue, une approche humaine, des résultats concrets.
            Du droit pénal au droit des affaires, en passant par la famille, le travail et les étrangers : nos avocats
            cumulent les distinctions académiques, les responsabilités institutionnelles (juge suppléant, Commission du
            barreau) et l'engagement pédagogique (Université de Genève, École d'avocature).
          </p>
        </div>
      </section>

      <!-- Associés -->
      <section class="py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-baseline justify-between mb-8">
            <h2 class="text-2xl font-semibold text-slate-900">Associés</h2>
            <span class="text-sm text-slate-400">{{ partners.length }} avocats</span>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <LawyerCard
              v-for="lawyer in partners"
              :key="lawyer.slug"
              :lawyer="lawyer"
              variant="compact"
            />
          </div>
        </div>
      </section>

      <!-- Bios détaillées -->
      <section class="py-16 bg-white border-y border-slate-200">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div
            v-for="lawyer in partners"
            :key="lawyer.slug"
            :id="lawyer.slug"
            class="scroll-mt-24"
          >
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              <div class="md:col-span-1">
                <NuxtImg
                  :src="lawyer.image.replace('.png', '.jpg')"
                  :alt="`${lawyer.name} – ${lawyer.jobTitle} – Clegal Avocats Genève`"
                  format="webp"
                  width="300"
                  height="400"
                  loading="lazy"
                  class="w-full aspect-[3/4] object-cover rounded-xl border border-slate-200"
                />
              </div>
              <div class="md:col-span-2">
                <h3 class="text-xl font-semibold text-slate-900">{{ lawyer.name }}</h3>
                <p class="text-sm text-red-900 font-medium mt-1">{{ lawyer.jobTitle }}</p>

                <div v-if="lawyer.honors?.length" class="mt-4 flex flex-wrap gap-2">
                  <span
                    v-for="honor in lawyer.honors"
                    :key="honor"
                    class="text-xs bg-red-50 text-red-900 px-2.5 py-1 rounded-full font-medium"
                  >
                    {{ honor }}
                  </span>
                </div>

                <p class="text-sm text-slate-600 mt-4 leading-relaxed whitespace-pre-line">
                  {{ lawyer.bio }}
                </p>

                <dl class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div v-if="lawyer.languages">
                    <dt class="font-semibold text-slate-500 uppercase tracking-wider">Langues</dt>
                    <dd class="text-slate-700 mt-1">{{ lawyer.languages }}</dd>
                  </div>
                  <div v-if="lawyer.alumniOf?.length">
                    <dt class="font-semibold text-slate-500 uppercase tracking-wider">Formation</dt>
                    <dd class="text-slate-700 mt-1">{{ lawyer.alumniOf.join(', ') }}</dd>
                  </div>
                  <div v-if="lawyer.knowsAbout?.length">
                    <dt class="font-semibold text-slate-500 uppercase tracking-wider">Domaines</dt>
                    <dd class="text-slate-700 mt-1">{{ lawyer.knowsAbout.join(', ') }}</dd>
                  </div>
                  <div v-if="lawyer.affiliations?.length">
                    <dt class="font-semibold text-slate-500 uppercase tracking-wider">Affiliations</dt>
                    <dd class="text-slate-700 mt-1">{{ lawyer.affiliations.join(', ') }}</dd>
                  </div>
                </dl>

                <a
                  v-if="lawyer.email"
                  :href="`mailto:${lawyer.email}`"
                  class="inline-flex items-center mt-6 text-sm text-red-900 hover:text-red-700 font-medium"
                >
                  {{ lawyer.email }} →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Stagiaires -->
      <section class="py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-baseline justify-between mb-8">
            <h2 class="text-2xl font-semibold text-slate-900">Avocat·es-stagiaires</h2>
            <span class="text-sm text-slate-400">{{ interns.length }} stagiaires</span>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
            <LawyerCard
              v-for="lawyer in interns"
              :key="lawyer.slug"
              :lawyer="lawyer"
              variant="compact"
            />
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="py-16 bg-slate-900 text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-3xl font-semibold tracking-tight">Prendre rendez-vous</h2>
          <p class="mt-3 text-slate-300 max-w-xl mx-auto">
            Premier rendez-vous d'analyse à CHF 155.- — analyse de votre dossier et plan d'action concret.
          </p>
          <div class="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <NuxtLink
              to="/contact"
              class="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-slate-900 bg-white hover:bg-slate-100 rounded-md transition-all"
            >
              Demander un rendez-vous
            </NuxtLink>
            <a
              href="tel:0225121050"
              class="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white border border-white/20 hover:bg-white/10 rounded-md transition-all"
            >
              022 512 10 50
            </a>
          </div>
        </div>
      </section>
    </main>
  </NuxtLayout>
</template>
