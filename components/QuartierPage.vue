<script setup lang="ts">
import { computed } from 'vue'
import type { LocationKey } from '~/data/locations'

const props = defineProps<{
  city: LocationKey
  quartier: string
  slug: string
  intro: string
  trajet: string
  juridictions: string[]
  proximite?: string
  faq?: { question: string; answer: string }[]
  /**
   * Ce qui rend la page non interchangeable. Sans ces trois props, toutes les pages
   * de quartier racontent la même chose à un nom près — c'est la définition d'une
   * doorway page, et Google la sanctionne comme telle.
   */
  tribunal?: { nom: string; siege: string; precision?: string }
  contexteLocal?: { titre: string; paragraphes: string[] }
  domaines?: { url: string; titre: string; description: string }[]
}>()

// Les domaines mis en avant varient selon le profil de la commune : un quartier
// résidentiel n'a pas les mêmes besoins juridiques qu'un pôle d'affaires.
const domainesAffiches = computed(() => props.domaines ?? [
  { url: '/droit-famille', titre: `Avocat famille à ${props.quartier}`, description: 'Divorce, séparation, garde, pension, succession.' },
  { url: '/droit-penal', titre: `Avocat pénaliste pour ${props.quartier}`, description: 'Défense pénale, victimes, ordonnances pénales.' },
  { url: '/droit-travail', titre: `Avocat travail ${props.quartier}`, description: 'Licenciement, conflits, prud\'hommes.' },
  { url: '/droit-etrangers', titre: `Avocat étrangers ${props.quartier}`, description: 'Permis B/C, regroupement familial, recours.' },
  { url: '/droit-bail', titre: `Avocat bail ${props.quartier}`, description: 'Loyer, résiliation, expulsion.' },
  { url: '/droit-affaires', titre: `Avocat affaires ${props.quartier}`, description: 'Constitution Sàrl/SA, contrats, contentieux.' },
])

const phoneRaw = computed(() => (props.city === 'lausanne' ? '0215121025' : '0225121050'))
const phoneDisplay = computed(() => (props.city === 'lausanne' ? '021 512 10 25' : '022 512 10 50'))
</script>

<template>
    <main class="bg-slate-50">
      <section class="pt-32 pb-12 bg-white border-b border-slate-200">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb :links="[{ name: `Avocat à ${quartier}`, path: `/${slug}` }]" />

          <p class="text-xs uppercase tracking-widest text-red-900 font-semibold mt-6">
            {{ city === 'geneve' ? 'Genève' : 'Vaud' }} · {{ quartier }}
          </p>
          <h1 class="text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight mt-3 mb-4">
            Avocat à {{ quartier }}
          </h1>
          <p class="text-lg text-slate-600 max-w-3xl">{{ intro }}</p>

          <div class="mt-8 flex flex-col sm:flex-row gap-3">
            <NuxtLink to="/contact" class="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-slate-900 hover:bg-red-900 rounded-md transition-all shadow-sm">
              Prendre rendez-vous
            </NuxtLink>
            <a :href="`tel:${phoneRaw}`" class="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-md transition-all">
              {{ phoneDisplay }}
            </a>
          </div>
        </div>
      </section>

      <section v-if="tribunal" class="py-12 bg-white border-b border-slate-100">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="bg-slate-50 border-l-4 border-red-900 rounded-r-xl p-6">
            <p class="text-xs uppercase tracking-widest font-bold text-red-900 mb-2">
              Juridiction compétente pour {{ quartier }}
            </p>
            <p class="text-lg font-semibold text-slate-900">{{ tribunal.nom }}</p>
            <p class="text-sm text-slate-600 mt-1">Siège : {{ tribunal.siege }}</p>
            <p v-if="tribunal.precision" class="text-sm text-slate-700 mt-3 leading-relaxed">
              {{ tribunal.precision }}
            </p>
          </div>
        </div>
      </section>

      <section v-if="contexteLocal" class="py-16 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-2xl font-semibold text-slate-900 mb-6">{{ contexteLocal.titre }}</h2>
          <p
            v-for="(par, i) in contexteLocal.paragraphes"
            :key="i"
            class="text-slate-700 leading-relaxed mb-4"
          >{{ par }}</p>
        </div>
      </section>

      <section class="py-16 bg-white border-t border-slate-100">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-2xl font-semibold text-slate-900 mb-6">Trajet jusqu'à notre cabinet</h2>
          <p class="text-slate-700 leading-relaxed">{{ trajet }}</p>
        </div>
      </section>

      <section class="py-16">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-2xl font-semibold text-slate-900 mb-6">Domaines pour les habitants de {{ quartier }}</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <NuxtLink
              v-for="d in domainesAffiches"
              :key="d.url"
              :to="d.url"
              class="block bg-white border border-slate-200 rounded-xl p-5 hover:border-red-900/30 hover:shadow-sm transition-all"
            >
              <h3 class="font-semibold text-slate-900">{{ d.titre }}</h3>
              <p class="text-sm text-slate-600 mt-2">{{ d.description }}</p>
            </NuxtLink>
          </div>
        </div>
      </section>

      <section class="py-16 bg-white border-y border-slate-200">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-2xl font-semibold text-slate-900 mb-6">{{ quartier }} et le système judiciaire {{ city === 'geneve' ? 'genevois' : 'vaudois' }}</h2>
          <p v-if="proximite" class="text-slate-700 leading-relaxed mb-4">{{ proximite }}</p>
          <ul class="space-y-3 text-slate-700">
            <li v-for="court in juridictions" :key="court" class="flex gap-3">
              <span class="text-red-900 font-bold">›</span>
              <span>{{ court }}</span>
            </li>
          </ul>
        </div>
      </section>

      <section class="py-16 bg-slate-900 text-white">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-3xl font-semibold tracking-tight">
            <template v-if="city === 'geneve'">
              Avocat à <NuxtLink to="/" class="underline hover:text-red-300">Genève</NuxtLink> au service de {{ quartier }}
            </template>
            <template v-else>
              Avocat à <NuxtLink to="/lausanne" class="underline hover:text-red-300">Lausanne</NuxtLink> au service de {{ quartier }}
            </template>
          </h2>
          <p class="mt-3 text-slate-300">Premier rendez-vous d'analyse à CHF 155.-.</p>
          <div class="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <NuxtLink to="/contact" class="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-slate-900 bg-white hover:bg-slate-100 rounded-md">Demander un rendez-vous</NuxtLink>
            <a :href="`tel:${phoneRaw}`" class="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white border border-white/20 hover:bg-white/10 rounded-md">{{ phoneDisplay }}</a>
          </div>
        </div>
      </section>
      <FaqSection v-if="faq" :items="faq" />

    </main>
</template>
