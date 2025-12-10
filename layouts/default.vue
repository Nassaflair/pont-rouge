<template>
  <div class="bg-slate-50 text-slate-800 antialiased selection:bg-red-900 selection:text-white min-h-screen flex flex-col">
    <!-- Sticky Header -->
    <header class="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 supports-[backdrop-filter]:bg-white/60">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <!-- Logo -->
                <div class="flex items-center gap-2">
                    <div class="h-6 w-1 bg-red-900 rounded-full"></div>
                    <NuxtLink to="/" class="text-base font-semibold tracking-tight text-slate-900 uppercase">
                        Pont-Rouge <span class="text-slate-400 font-normal normal-case">Avocats Genève</span>
                    </NuxtLink>
                </div>

                <!-- Desktop Nav -->
                <nav class="hidden md:flex gap-8 text-sm font-medium text-slate-600">
                    <NuxtLink to="/etude" class="hover:text-red-900 transition-colors">L'Étude</NuxtLink>
                    <div class="relative group">
                        <button class="hover:text-red-900 transition-colors flex items-center gap-1">Expertises</button>
                        <!-- Simple Dropdown for navigation -->
                        <div class="absolute left-0 mt-2 w-48 bg-white border border-slate-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-2">
                            <NuxtLink to="/droit-famille" class="block px-4 py-2 hover:bg-slate-50 hover:text-red-900 rounded">Famille</NuxtLink>
                            <NuxtLink to="/droit-travail" class="block px-4 py-2 hover:bg-slate-50 hover:text-red-900 rounded">Travail</NuxtLink>
                            <NuxtLink to="/droit-penal" class="block px-4 py-2 hover:bg-slate-50 hover:text-red-900 rounded">Pénal</NuxtLink>
                            <NuxtLink to="/droit-bail" class="block px-4 py-2 hover:bg-slate-50 hover:text-red-900 rounded">Bail</NuxtLink>
                            <NuxtLink to="/droit-etrangers" class="block px-4 py-2 hover:bg-slate-50 hover:text-red-900 rounded">Étrangers</NuxtLink>
                            <NuxtLink to="/droit-affaires" class="block px-4 py-2 hover:bg-slate-50 hover:text-red-900 rounded">Affaires</NuxtLink>
                        </div>
                    </div>
                    <NuxtLink to="/honoraires" class="hover:text-red-900 transition-colors">Honoraires</NuxtLink>
                    <NuxtLink to="/blog" class="hover:text-red-900 transition-colors">Blog &amp; Vidéos</NuxtLink>
                    <NuxtLink to="/contact" class="hover:text-red-900 transition-colors">Contact</NuxtLink>
                </nav>

                <!-- CTA Button -->
                <div class="flex items-center gap-4">
                    <a href="tel:0225121050" class="hidden lg:block text-sm font-medium text-slate-600 hover:text-slate-900">022 512 10 50</a>
                    <NuxtLink to="/contact" class="inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-all shadow-sm ring-1 ring-slate-900/5">
                        Consultation 155.-
                    </NuxtLink>
                </div>
            </div>
        </div>
    </header>

    <!-- Page Content -->
    <main class="flex-grow">
        <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                <div class="col-span-1 md:col-span-2">
                    <span class="text-sm font-bold text-slate-900 uppercase tracking-widest">Pont-Rouge Avocats</span>
                    <p class="text-sm text-slate-500 max-w-xs mt-4">
                        Cabinet d'avocats généraliste à Genève. Une approche humaine, des tarifs transparents et une défense d'acier pour tous.
                    </p>
                </div>
                
                <div>
                    <h3 class="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">Informations</h3>
                    <ul class="space-y-2 text-sm text-slate-500">
                        <li><NuxtLink to="/" class="hover:text-red-900">Nos Expertises</NuxtLink></li>
                        <li><NuxtLink to="/honoraires" class="hover:text-red-900">Honoraires</NuxtLink></li>
                        <li><NuxtLink to="/contact" class="hover:text-red-900">Assistance Juridique</NuxtLink></li>
                        <li><NuxtLink to="/contact" class="hover:text-red-900">Contact</NuxtLink></li>
                    </ul>
                </div>

                <div>
                    <h3 class="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">Contact</h3>
                    <address class="not-italic text-sm text-slate-500 space-y-2">
                        <p class="font-medium text-slate-900">Pont-Rouge Avocats</p>
                        <p>Route des Jeunes 9</p>
                        <p>1227 Carouge / Genève</p>
                        <p class="pt-2">Tél : <a href="tel:0225121050" class="hover:text-slate-900 transition-colors underline">022 512 10 50</a></p>
                    </address>
                </div>
            </div>
            
            <div class="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p class="text-xs text-slate-400">© 2026 Pont-Rouge by Clegal-Avocats. Tous droits réservés.</p>
                <div class="flex gap-4 mt-4 md:mt-0 text-xs text-slate-400">
                    <a href="#" class="hover:text-slate-600">Mentions Légales</a>
                    <a href="#" class="hover:text-slate-600">Confidentialité</a>
                </div>
            </div>
        </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUpdated, watch } from 'vue';
import { useRoute } from 'vue-router';

// Declare global variable for the Lucide script loaded via CDN
declare const lucide: any;

const route = useRoute();

const refreshIcons = () => {
  if (typeof lucide !== 'undefined' && lucide.createIcons) {
    lucide.createIcons();
  }
};

// Refresh icons on mount
onMounted(() => {
  setTimeout(refreshIcons, 100);
});

// Refresh icons on route change
watch(
  () => route.path,
  () => {
    setTimeout(refreshIcons, 100);
  }
);
</script>