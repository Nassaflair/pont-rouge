<script setup lang="ts">
defineProps<{
  label?: string
}>()
</script>

<template>
  <aside class="bg-red-50 border-l-4 border-red-900 p-6 rounded-r-xl my-8">
    <p class="text-xs uppercase tracking-widest text-red-900 font-bold mb-3">{{ label || 'Réponse rapide' }}</p>
    <div class="text-slate-800 leading-relaxed prose prose-slate max-w-none prose-strong:text-slate-900 prose-strong:font-semibold">
      <slot />
    </div>
  </aside>
</template>
