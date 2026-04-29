<script setup lang="ts">
import type { LocationKey } from '~/data/locations'

defineProps<{
  city: LocationKey
  quartier: string
  slug: string
  intro: string
  trajet: string
  juridictions: string[]
  proximite?: string
}>()
</script>

<template>
  <NuxtLayout>
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
            <a href="tel:0225121050" class="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-md transition-all">
              022 512 10 50
            </a>
          </div>
        </div>
      </section>

      <section class="py-16 bg-white">
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
              v-for="d in [
                { url: '/droit-famille', t: `Avocat famille à ${quartier}`, d: 'Divorce, séparation, garde, pension, succession.' },
                { url: '/droit-penal', t: `Avocat pénaliste pour ${quartier}`, d: 'Défense pénale, victimes, ordonnances pénales.' },
                { url: '/droit-travail', t: `Avocat travail ${quartier}`, d: 'Licenciement, conflits, prud\'hommes.' },
                { url: '/droit-etrangers', t: `Avocat étrangers ${quartier}`, d: 'Permis B/C, regroupement familial, recours.' },
                { url: '/droit-immobilier/avocat-droit-bail', t: `Avocat bail ${quartier}`, d: 'Loyer, résiliation, expulsion.' },
                { url: '/droit-affaires', t: `Avocat affaires ${quartier}`, d: 'Constitution Sàrl/SA, contrats, contentieux.' },
              ]"
              :key="d.url"
              :to="d.url"
              class="block bg-white border border-slate-200 rounded-xl p-5 hover:border-red-900/30 hover:shadow-sm transition-all"
            >
              <h3 class="font-semibold text-slate-900">{{ d.t }}</h3>
              <p class="text-sm text-slate-600 mt-2">{{ d.d }}</p>
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
            <a href="tel:0225121050" class="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white border border-white/20 hover:bg-white/10 rounded-md">022 512 10 50</a>
          </div>
        </div>
      </section>
    </main>
  </NuxtLayout>
</template>
