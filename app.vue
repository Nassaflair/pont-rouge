<script setup lang="ts">
const route = useRoute()
const config = useRuntimeConfig()
const baseUrl = (config.public as any).siteUrl || 'https://clegal-avocats.ch'

const canonicalHref = computed(() => `${baseUrl}${route.path}`.replace(/\/$/, '') || baseUrl)

useHead({
  htmlAttrs: { lang: 'fr-CH' },
  link: [
    { rel: 'canonical', href: canonicalHref },
    { rel: 'alternate', hreflang: 'fr-CH', href: canonicalHref },
    { rel: 'alternate', hreflang: 'fr', href: canonicalHref },
    { rel: 'alternate', hreflang: 'x-default', href: canonicalHref },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>