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
                    <NuxtLink to="/#equipe" class="hover:text-red-900 transition-colors">Notre équipe</NuxtLink>
                    <div class="relative group">
                        <NuxtLink to="/domaine-de-competence" class="hover:text-red-900 transition-colors flex items-center gap-1">Domaine de compétence</NuxtLink>
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
                    <NuxtLink to="/blog" class="hover:text-red-900 transition-colors">Blog</NuxtLink>
                    <NuxtLink to="/contact" class="hover:text-red-900 transition-colors">Contact</NuxtLink>
                </nav>

                <!-- CTA Button -->
                <div class="flex items-center gap-4">
                    <!-- <a href="tel:0225121050" class="hidden lg:block text-sm font-medium text-slate-600 hover:text-slate-900">022 512 10 50</a> -->
                    <div class="flex items-center gap-2">
                        <NuxtLink to="/contact" class="hidden md:inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-all shadow-sm ring-1 ring-slate-900/5">
                            Prendre rendez-vous
                        </NuxtLink>
                        <!-- Mobile Menu Button -->
                        <button @click="toggleMobileMenu" class="md:hidden p-2 -mr-2 text-slate-600 hover:text-red-900 hover:bg-slate-50 rounded-md focus:outline-none transition-all" aria-label="Menu">
                            <span v-if="!isMobileMenuOpen">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
                            </span>
                            <span v-else>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="M6 6 18 18"/></svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <!-- Mobile Menu Overlay -->
    <div v-if="isMobileMenuOpen" class="fixed inset-0 z-40 bg-white md:hidden pt-20 pb-6 px-4 overflow-y-auto">
        <nav class="flex flex-col gap-6 text-lg font-medium text-slate-600">
            <NuxtLink to="/etude" class="hover:text-red-900 transition-colors py-2 border-b border-slate-100">L'Étude</NuxtLink>
            <NuxtLink to="/#equipe" class="hover:text-red-900 transition-colors py-2 border-b border-slate-100">Notre équipe</NuxtLink>
            
            <div class="space-y-4 py-2 border-b border-slate-100">
                 <div class="font-medium text-slate-900">Domaines de compétence</div>
                 <div class="pl-4 flex flex-col gap-3 text-base">
                    <NuxtLink to="/droit-famille" class="hover:text-red-900">Famille</NuxtLink>
                    <NuxtLink to="/droit-travail" class="hover:text-red-900">Travail</NuxtLink>
                    <NuxtLink to="/droit-penal" class="hover:text-red-900">Pénal</NuxtLink>
                    <NuxtLink to="/droit-bail" class="hover:text-red-900">Bail</NuxtLink>
                    <NuxtLink to="/droit-etrangers" class="hover:text-red-900">Étrangers</NuxtLink>
                    <NuxtLink to="/droit-affaires" class="hover:text-red-900">Affaires</NuxtLink>
                 </div>
            </div>

            <NuxtLink to="/honoraires" class="hover:text-red-900 transition-colors py-2 border-b border-slate-100">Honoraires</NuxtLink>
            <NuxtLink to="/blog" class="hover:text-red-900 transition-colors py-2 border-b border-slate-100">Blog</NuxtLink>
            <NuxtLink to="/contact" class="hover:text-red-900 transition-colors py-2 border-b border-slate-100">Contact</NuxtLink>
        </nav>

        <div class="mt-8">
             <NuxtLink to="/contact" @click="toggleMobileMenu" class="flex items-center justify-center w-full px-4 py-3 text-base font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-all shadow-sm">
                Prendre rendez-vous
            </NuxtLink>
        </div>
    </div>

    <!-- Page Content -->
    <main class="flex-grow">
        <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-white border border-slate-200 pt-16 pb-8 m-4 md:m-8 rounded-3xl shadow-sm">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                <div class="col-span-1 md:col-span-2">
                    <span class="text-sm font-bold text-slate-900 uppercase tracking-widest">Pont-Rouge </span>Avocats By Clegal-Avocats
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

                        <p>Route des Jeunes 9</p>
                        <p>1227 Les Acacias / Genève</p>
                        <p class="pt-2">Mail : <a href="mailto:info@clegal-avocats.ch" class="hover:text-slate-900 transition-colors underline">info@clegal-avocats.ch</a></p>
                        <p>Tél : <a href="tel:0225121050" class="hover:text-slate-900 transition-colors underline">022 512 10 50</a></p>
                    </address>
                </div>
            </div>
            
            <div class="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p class="text-xs text-slate-400">© 2025 Pont-Rouge by Clegal-Avocats. Tous droits réservés.</p>
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
import { onMounted, onUpdated, watch, ref } from 'vue';
import { useRoute } from 'vue-router';

// Declare global variable for the Lucide script loaded via CDN
declare const lucide: any;

const route = useRoute();

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  // Prevent scrolling when menu is open
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
};

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
    // Close menu and restore scrolling on route change
    if (isMobileMenuOpen.value) {
      isMobileMenuOpen.value = false;
      document.body.style.overflow = '';
    }
    setTimeout(refreshIcons, 100);
  }
);
</script>