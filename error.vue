<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})

const statusCode = props.error?.statusCode || 404
const isNotFound = statusCode === 404

useHead({
  title: isNotFound
    ? 'Page introuvable | Clegal Avocats'
    : 'Erreur | Clegal Avocats',
  meta: [
    { name: 'robots', content: 'noindex' }
  ]
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="bg-slate-50 text-slate-800 antialiased selection:bg-red-900 selection:text-white min-h-screen flex flex-col">
    <!-- Header simplifié -->
    <header class="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center h-16">
          <a href="/" class="text-sm font-bold text-slate-900 uppercase tracking-widest">Clegal Avocats</a>
        </div>
      </div>
    </header>

    <!-- Contenu 404 -->
    <main class="flex-grow flex items-center justify-center pt-16">
      <div class="max-w-lg mx-auto px-4 text-center py-24">
        <p class="text-7xl font-bold text-slate-200 mb-4">{{ statusCode }}</p>
        <h1 class="text-2xl font-bold text-slate-900 mb-3">
          {{ isNotFound ? 'Page introuvable' : 'Une erreur est survenue' }}
        </h1>
        <p class="text-slate-500 mb-8">
          {{ isNotFound
            ? 'La page que vous recherchez n\'existe pas ou a été déplacée.'
            : 'Veuillez réessayer ou revenir à l\'accueil.'
          }}
        </p>

        <div class="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            @click="handleError"
            class="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-slate-900 hover:bg-red-900 rounded-md transition-all shadow-sm"
          >
            Retour à l'accueil
          </button>
          <a
            href="/contact"
            class="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-md transition-all"
          >
            Nous contacter
          </a>
        </div>

        <!-- Liens utiles -->
        <div class="mt-12 pt-8 border-t border-slate-200">
          <p class="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Pages principales</p>
          <div class="flex flex-wrap justify-center gap-4 text-sm text-slate-500">
            <a href="/domaine-de-competence" class="hover:text-red-900 transition-colors">Nos expertises</a>
            <a href="/honoraires" class="hover:text-red-900 transition-colors">Honoraires</a>
            <a href="/etude" class="hover:text-red-900 transition-colors">L'Etude</a>
            <a href="/blog" class="hover:text-red-900 transition-colors">Blog</a>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer minimal -->
    <footer class="border-t border-slate-200 py-6">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <p class="text-xs text-slate-400">&copy; 2026 Clegal Avocats. Tous droits réservés.</p>
      </div>
    </footer>
  </div>
</template>
