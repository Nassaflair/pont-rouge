<script setup lang="ts">
const route = useRoute()
const config = useRuntimeConfig()
const baseUrl = config.public.siteUrl || 'https://clegal-avocats.ch'

useHead({
  link: [
    {
      rel: 'canonical',
      href: computed(() => `${baseUrl}${route.path}`.replace(/\/$/, '') || baseUrl)
    }
  ]
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>