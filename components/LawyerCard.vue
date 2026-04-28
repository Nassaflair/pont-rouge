<script setup lang="ts">
import type { Lawyer } from '~/data/team'

defineProps<{
  lawyer: Lawyer
  variant?: 'compact' | 'full'
}>()
</script>

<template>
  <article
    :itemscope="true"
    itemtype="https://schema.org/Person"
    class="group relative flex flex-col bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-red-900/30 hover:shadow-lg transition-all duration-300"
  >
    <link itemprop="url" :href="`https://clegal-avocats.ch/equipe#${lawyer.slug}`" />

    <div class="relative aspect-[3/4] overflow-hidden bg-slate-100">
      <NuxtImg
        v-if="lawyer.image"
        :src="lawyer.image.replace('.png', '.jpg')"
        :alt="`${lawyer.name} – ${lawyer.jobTitle}`"
        format="webp"
        width="300"
        height="400"
        loading="lazy"
        itemprop="image"
        class="w-full h-full object-cover filter saturate-0 group-hover:saturate-100 group-hover:scale-105 transition-all duration-500"
      />
    </div>

    <div class="p-4 flex-1 flex flex-col">
      <h3 class="text-sm font-semibold text-slate-900" itemprop="name">{{ lawyer.name }}</h3>
      <p class="text-xs text-slate-500 mt-1" itemprop="jobTitle">{{ lawyer.jobTitle }}</p>

      <p v-if="variant === 'full'" class="text-sm text-slate-600 mt-3 line-clamp-4" itemprop="description">
        {{ lawyer.bio }}
      </p>

      <div v-if="variant === 'full' && lawyer.languages" class="mt-3 text-xs text-slate-400">
        <span class="font-medium text-slate-500">Langues :</span>
        <span itemprop="knowsLanguage">{{ lawyer.languages }}</span>
      </div>

      <a
        v-if="lawyer.email"
        :href="`mailto:${lawyer.email}`"
        class="mt-auto pt-4 text-xs text-red-900 hover:text-red-700 font-medium"
        itemprop="email"
      >
        {{ lawyer.email }}
      </a>
    </div>

    <meta v-for="alma in lawyer.alumniOf" :key="alma" itemprop="alumniOf" :content="alma" />
    <meta v-for="topic in lawyer.knowsAbout" :key="topic" itemprop="knowsAbout" :content="topic" />
  </article>
</template>
