<script setup lang="ts">
/**
 * Rend visiblement les questions déclarées en JSON-LD.
 *
 * Le balisage FAQPage doit refléter du contenu réellement présent sur la page : un schema
 * sans équivalent visible est du "structured data spam" au sens des consignes Google. En
 * passant le MÊME tableau à `useLocalSeo({ faq })` et à ce composant, les deux ne peuvent
 * plus diverger — c'était la cause du problème, pas l'oubli ponctuel d'une section.
 *
 * <details> est natif : le contenu est dans le HTML, accessible au clavier et lisible sans
 * JavaScript, donc indexable même replié.
 */
defineProps<{
  items: { question: string; answer: string }[]
  title?: string
}>()
</script>

<template>
  <section v-if="items?.length" class="py-14 bg-white border-t border-slate-200">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-2xl font-semibold text-slate-900 tracking-tight mb-6">
        {{ title || 'Questions fréquentes' }}
      </h2>

      <div class="divide-y divide-slate-200 border-y border-slate-200">
        <details
          v-for="(item, i) in items"
          :key="i"
          class="group py-4"
          :open="i === 0"
        >
          <summary
            class="flex items-start justify-between gap-4 cursor-pointer list-none text-left font-medium text-slate-900 hover:text-red-900 transition-colors"
          >
            <span>{{ item.question }}</span>
            <svg
              class="w-5 h-5 shrink-0 mt-0.5 text-slate-400 transition-transform group-open:rotate-180"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clip-rule="evenodd"
              />
            </svg>
          </summary>
          <p class="mt-3 text-slate-600 leading-relaxed">
            {{ item.answer }}
          </p>
        </details>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Masque le triangle natif de <details> sur Safari et Chrome */
summary::-webkit-details-marker {
  display: none;
}
</style>
