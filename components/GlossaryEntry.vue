<script setup lang="ts">
defineProps<{
  category: string
  term: string
  slug: string
  quickDef: string
  body: { heading: string; content: string }[]
  relatedLink?: { label: string; url: string }
}>()
</script>

<template>
    <main class="bg-slate-50">
      <section class="pt-32 pb-8 bg-white border-b border-slate-200">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb :links="[
            { name: 'Glossaire', path: '/glossaire' },
            { name: term, path: `/glossaire/${slug}` },
          ]" />
          <p class="text-xs uppercase tracking-widest text-red-900 font-semibold mt-6">Glossaire · {{ category }}</p>
          <h1 class="text-4xl font-semibold text-slate-900 tracking-tight mt-3 mb-4">{{ term }}</h1>
        </div>
      </section>

      <section class="py-12">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuickAnswer label="Définition rapide">
            <p v-html="quickDef" />
          </QuickAnswer>

          <div class="prose prose-slate prose-lg">
            <template v-for="(b, i) in body" :key="i">
              <h2>{{ b.heading }}</h2>
              <p v-html="b.content" />
            </template>

            <p v-if="relatedLink">
              Voir aussi&nbsp;:
              <NuxtLink :to="relatedLink.url" class="text-red-900 hover:underline">{{ relatedLink.label }}</NuxtLink>.
            </p>
          </div>
        </div>
      </section>
    </main>
</template>
