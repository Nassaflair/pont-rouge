<template>
  <nav aria-label="Breadcrumb" class="mb-8 relative z-10">
    <ol role="list" class="inline-flex items-center flex-wrap gap-1.5 px-3 py-1.5 rounded-full bg-slate-50/80 border border-slate-200 backdrop-blur-sm transition-all hover:bg-white hover:shadow-sm hover:border-red-900/10">
      <!-- Home Link -->
      <li>
        <NuxtLink to="/" class="flex items-center text-slate-400 hover:text-red-900 transition-colors">
          <i data-lucide="home" class="w-3.5 h-3.5"></i>
          <span class="sr-only">Accueil</span>
        </NuxtLink>
      </li>

      <!-- Dynamic Links -->
      <li v-for="(link, index) in links" :key="link.path" class="flex items-center">
        <i data-lucide="chevron-right" class="w-3 h-3 text-slate-300 mx-1"></i>
        
        <div v-if="index === links.length - 1" class="flex items-center gap-1.5">
           <!-- Optional Dot for the active item to mimic the user's badge style -->
           <span class="w-1.5 h-1.5 rounded-full bg-red-700"></span>
           <span class="text-[11px] font-bold uppercase tracking-wider text-red-950" aria-current="page">
            {{ link.name }}
          </span>
        </div>
        
        <NuxtLink v-else :to="link.path" class="text-[11px] font-medium uppercase tracking-wider text-slate-500 hover:text-red-900 transition-colors">
          {{ link.name }}
        </NuxtLink>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface BreadcrumbLink {
  name: string;
  path: string;
}

const props = defineProps<{
  links: BreadcrumbLink[]
}>()

// Generate JSON-LD Structured Data
const jsonLd = computed(() => {
  const items = props.links.map((link, index) => ({
    '@type': 'ListItem',
    position: index + 2, // Position 1 is Home
    name: link.name,
    item: `https://clegal-avocats.ch${link.path}`
  }))

  // Add Home as first item
  items.unshift({
    '@type': 'ListItem',
    position: 1,
    name: 'Accueil',
    item: 'https://clegal-avocats.ch'
  })

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items
  }
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(jsonLd.value)
    }
  ]
})
</script>
