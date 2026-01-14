<script setup lang="ts">
</script>

<template>
  <NuxtLink to="/" aria-label="Pont-Rouge by Clegal-Avocats" class="flex items-center gap-3 group">
    <!-- Red Bar -->
    <div class="h-6 w-1 rounded-full bg-red-900 group-hover:bg-red-800 transition-colors"></div>
    
    <!-- Text -->
    <div class="flex items-baseline gap-1.5 font-sans leading-none">
      <span class="text-base font-bold text-slate-900 uppercase tracking-tight group-hover:text-red-900 transition-colors">Pont-Rouge</span>
      <span class="text-base font-normal text-slate-400">by Clegal-Avocats</span>
    </div>
  </NuxtLink>
</template>
