<template>
  <div class="bg-slate-50 text-slate-800 antialiased selection:bg-red-900 selection:text-white min-h-screen flex flex-col">
    <!-- Sticky Header -->
    <header class="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 supports-[backdrop-filter]:bg-white/60">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center h-16">
                <!-- Logo -->
                <AppLogo />

                <!-- Desktop Nav -->
                <nav class="hidden md:flex ml-10 gap-8 text-sm font-medium text-slate-600 items-center">
                    <NuxtLink to="/etude" class="hover:text-red-900 transition-colors">L'Étude</NuxtLink>
                    <NuxtLink to="/#equipe" class="hover:text-red-900 transition-colors">Notre équipe</NuxtLink>
                    
                    <!-- Mega Menu Trigger -->
                    <div class="relative group">
                        <NuxtLink to="/domaine-de-competence" class="hover:text-red-900 transition-colors flex items-center gap-1 py-5">
                            Domaines de compétence
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 transition-transform group-hover:rotate-180"><path d="m6 9 6 6 6-6"/></svg>
                        </NuxtLink>
                        
                        <!-- Mega Menu Dropdown -->
                        <div class="absolute left-1/2 -translate-x-1/2 mt-0 w-[800px] bg-white border border-slate-200 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top -translate-y-2 group-hover:translate-y-0 p-6 z-50">
                            <div class="grid grid-cols-3 gap-8">
                                <!-- Column 1: Famille -->
                                <div>
                                    <NuxtLink to="/droit-famille" class="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 border-b border-slate-100 pb-2 hover:text-red-900 transition-colors">
                                        Droit de la Famille
                                    </NuxtLink>
                                    <ul class="space-y-3">
                                        <li>
                                            <NuxtLink to="/droit-famille/avocat-divorce" class="flex items-start gap-3 group/link p-2 -mx-2 hover:bg-slate-50 rounded-lg transition-colors">
                                                <div class="p-1.5 bg-red-50 text-red-900 rounded-md group-hover/link:bg-red-100 transition-colors">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>
                                                </div>
                                                <div>
                                                    <span class="block text-sm font-semibold text-slate-900 group-hover/link:text-red-900">Avocat Divorce</span>
                                                    <span class="block text-xs text-slate-500 mt-0.5">Amiable & Contentieux</span>
                                                </div>
                                            </NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/droit-famille/avocat-separation" class="flex items-start gap-3 group/link p-2 -mx-2 hover:bg-slate-50 rounded-lg transition-colors">
                                                <div class="p-1.5 bg-red-50 text-red-900 rounded-md group-hover/link:bg-red-100 transition-colors">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 3h5v5"/><path d="M8 3H3v5"/><path d="M12 22v-8.3"/><path d="m8 8 8 8"/><path d="m16 8-8 8"/></svg>
                                                </div>
                                                <div>
                                                    <span class="block text-sm font-semibold text-slate-900 group-hover/link:text-red-900">Séparation</span>
                                                    <span class="block text-xs text-slate-500 mt-0.5">MPUC & Rupture</span>
                                                </div>
                                            </NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/droit-famille/avocat-garde-enfant" class="flex items-start gap-3 group/link p-2 -mx-2 hover:bg-slate-50 rounded-lg transition-colors">
                                                <div class="p-1.5 bg-red-50 text-red-900 rounded-md group-hover/link:bg-red-100 transition-colors">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="3"/><path d="M6.5 8h11"/><path d="M5.503 16.827 5 22h14l-.503-5.173A9.091 9.091 0 0 0 12 14a9.091 9.091 0 0 0-6.497 2.827Z"/></svg>
                                                </div>
                                                <div>
                                                    <span class="block text-sm font-semibold text-slate-900 group-hover/link:text-red-900">Garde d'enfants</span>
                                                    <span class="block text-xs text-slate-500 mt-0.5">Droit de visite</span>
                                                </div>
                                            </NuxtLink>
                                        </li>
                                         <li>
                                            <NuxtLink to="/droit-famille/avocat-pension-alimentaire" class="flex items-start gap-3 group/link p-2 -mx-2 hover:bg-slate-50 rounded-lg transition-colors">
                                                <div class="p-1.5 bg-red-50 text-red-900 rounded-md group-hover/link:bg-red-100 transition-colors">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg>
                                                </div>
                                                <div>
                                                    <span class="block text-sm font-semibold text-slate-900 group-hover/link:text-red-900">Pension Alimentaire</span>
                                                    <span class="block text-xs text-slate-500 mt-0.5">Calcul & Recouvrement</span>
                                                </div>
                                            </NuxtLink>
                                        </li>
                                         <li>
                                            <NuxtLink to="/droit-famille/avocat-succession" class="flex items-start gap-3 group/link p-2 -mx-2 hover:bg-slate-50 rounded-lg transition-colors">
                                                <div class="p-1.5 bg-red-50 text-red-900 rounded-md group-hover/link:bg-red-100 transition-colors">
                                                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                                                </div>
                                                <div>
                                                    <span class="block text-sm font-semibold text-slate-900 group-hover/link:text-red-900">Successions</span>
                                                    <span class="block text-xs text-slate-500 mt-0.5">Héritage & Testament</span>
                                                </div>
                                            </NuxtLink>
                                        </li>
                                    </ul>
                                </div>

                                <!-- Column 2: Travail / Immo / Etrangers -->
                                <div class="flex flex-col gap-6">
                                    <!-- Droit du Travail -->
                                    <div>
                                        <NuxtLink to="/droit-travail" class="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 hover:text-red-900 transition-colors border-b border-slate-100 pb-1">
                                            Droit du Travail
                                        </NuxtLink>
                                        <ul class="space-y-3">
                                            <li>
                                                <NuxtLink to="/droit-travail/avocat-licenciement" class="flex items-start gap-3 group/link p-2 -mx-2 hover:bg-slate-50 rounded-lg transition-colors">
                                                    <div class="p-1.5 bg-red-50 text-red-900 rounded-md group-hover/link:bg-red-100 transition-colors">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="18" x2="23" y1="8" y2="13"/><line x1="23" x2="18" y1="8" y2="13"/></svg>
                                                    </div>
                                                    <div>
                                                        <span class="block text-sm font-semibold text-slate-900 group-hover/link:text-red-900">Licenciement</span>
                                                        <span class="block text-xs text-slate-500 mt-0.5">Abusif & Départ</span>
                                                    </div>
                                                </NuxtLink>
                                            </li>
                                        </ul>
                                    </div>

                                    <!-- Droit Immobilier -->
                                    <div>
                                        <NuxtLink to="/droit-immobilier" class="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 hover:text-red-900 transition-colors border-b border-slate-100 pb-1">
                                            Droit Immobilier
                                        </NuxtLink>
                                        <ul class="space-y-3">
                                            <li>
                                                <NuxtLink to="/droit-immobilier/avocat-droit-bail" class="flex items-start gap-3 group/link p-2 -mx-2 hover:bg-slate-50 rounded-lg transition-colors">
                                                    <div class="p-1.5 bg-red-50 text-red-900 rounded-md group-hover/link:bg-red-100 transition-colors">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                                                    </div>
                                                    <div>
                                                        <span class="block text-sm font-semibold text-slate-900 group-hover/link:text-red-900">Droit du Bail</span>
                                                        <span class="block text-xs text-slate-500 mt-0.5">Loyer & Expulsion</span>
                                                    </div>
                                                </NuxtLink>
                                            </li>
                                        </ul>
                                    </div>

                                    <!-- Droit des Étrangers -->
                                    <div>
                                        <NuxtLink to="/droit-etrangers" class="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 hover:text-red-900 transition-colors border-b border-slate-100 pb-1">
                                            Droit des Étrangers
                                        </NuxtLink>
                                        <ul class="space-y-3">
                                            <li>
                                                <NuxtLink to="/droit-etrangers/avocat-permis-sejour" class="flex items-start gap-3 group/link p-2 -mx-2 hover:bg-slate-50 rounded-lg transition-colors">
                                                    <div class="p-1.5 bg-red-50 text-red-900 rounded-md group-hover/link:bg-red-100 transition-colors">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                                                    </div>
                                                    <div>
                                                        <span class="block text-sm font-semibold text-slate-900 group-hover/link:text-red-900">Permis de Séjour</span>
                                                        <span class="block text-xs text-slate-500 mt-0.5">Immigration & Naturalisation</span>
                                                    </div>
                                                </NuxtLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <!-- Column 3: Autres Domaines -->
                                <div>
                                    <h3 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">Autres Domaines</h3>
                                    <ul class="space-y-3">
                                        <li>
                                            <NuxtLink to="/droit-penal" class="flex items-start gap-3 group/link p-2 -mx-2 hover:bg-slate-50 rounded-lg transition-colors">
                                                <div class="p-1.5 bg-red-50 text-red-900 rounded-md group-hover/link:bg-red-100 transition-colors">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                                                </div>
                                                <div>
                                                    <span class="block text-sm font-semibold text-slate-900 group-hover/link:text-red-900">Droit Pénal</span>
                                                    <span class="block text-xs text-slate-500 mt-0.5">Défense & Victimes</span>
                                                </div>
                                            </NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink to="/droit-affaires" class="flex items-start gap-3 group/link p-2 -mx-2 hover:bg-slate-50 rounded-lg transition-colors">
                                                <div class="p-1.5 bg-red-50 text-red-900 rounded-md group-hover/link:bg-red-100 transition-colors">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                                                </div>
                                                <div>
                                                    <span class="block text-sm font-semibold text-slate-900 group-hover/link:text-red-900">Droit des Affaires</span>
                                                    <span class="block text-xs text-slate-500 mt-0.5">Sociétés & Contrats</span>
                                                </div>
                                            </NuxtLink>
                                        </li>
                                        <!-- Call to Action in Menu -->
                                        <li class="mt-4 pt-4 border-t border-slate-100">
                                             <NuxtLink to="/contact" class="flex items-center justify-center w-full px-4 py-2 text-xs font-medium text-white bg-slate-900 hover:bg-red-900 rounded-md transition-all">
                                                Voir tous les domaines →
                                            </NuxtLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <NuxtLink to="/honoraires" class="hover:text-red-900 transition-colors">Honoraires</NuxtLink>
                    <NuxtLink to="/blog" class="hover:text-red-900 transition-colors">Blog</NuxtLink>
                    <NuxtLink to="/contact" class="hover:text-red-900 transition-colors">Contact</NuxtLink>
                </nav>

                <!-- CTA Button -->
                <div class="flex items-center gap-4 ml-auto md:ml-8">
                    <!-- <a href="tel:0225121050" class="hidden lg:block text-sm font-medium text-slate-600 hover:text-slate-900">022 512 10 50</a> -->
                    <div class="flex items-center gap-2">
                        <NuxtLink to="/contact" class="hidden md:inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-all shadow-sm ring-1 ring-slate-900/5">
                            Prendre rendez-vous (CHF 155.-)
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
        <nav class="flex flex-col gap-6 text-lg font-medium text-slate-600 items-center">
            <NuxtLink to="/etude" class="hover:text-red-900 transition-colors py-2 border-b border-slate-100">L'Étude</NuxtLink>
            <NuxtLink to="/#equipe" @click="toggleMobileMenu" class="hover:text-red-900 transition-colors py-2 border-b border-slate-100">Notre équipe</NuxtLink>
            
            <div class="space-y-4 py-2 border-b border-slate-100">
                <div class="font-medium text-slate-900 text-lg mb-2">Domaines de compétence</div>
                
                <!-- Mobile Droit Famille -->
                 <div class="pl-4 border-l-2 border-red-100 ml-1">
                    <NuxtLink to="/droit-famille" @click="toggleMobileMenu" class="block text-xs uppercase font-bold text-slate-900 mb-2 hover:text-red-900">
                        Droit de la Famille
                    </NuxtLink>
                    <div class="flex flex-col gap-3 text-base">
                        <NuxtLink to="/droit-famille/avocat-divorce" @click="handleSamePageReload('/droit-famille/avocat-divorce', $event)" class="hover:text-red-900">Avocat Divorce</NuxtLink>
                        <NuxtLink to="/droit-famille/avocat-separation" @click="handleSamePageReload('/droit-famille/avocat-separation', $event)" class="hover:text-red-900">Séparation</NuxtLink>
                        <NuxtLink to="/droit-famille/avocat-garde-enfant" @click="handleSamePageReload('/droit-famille/avocat-garde-enfant', $event)" class="hover:text-red-900">Garde d'enfants</NuxtLink>
                        <NuxtLink to="/droit-famille/avocat-pension-alimentaire" @click="handleSamePageReload('/droit-famille/avocat-pension-alimentaire', $event)" class="hover:text-red-900">Pension Alimentaire</NuxtLink>
                         <NuxtLink to="/droit-famille/avocat-succession" @click="handleSamePageReload('/droit-famille/avocat-succession', $event)" class="hover:text-red-900">Successions</NuxtLink>
                    </div>
                 </div>

                 <!-- Mobile Travail/Immo -->
                 <!-- Mobile Travail (Split) -->
                 <div class="pl-4 border-l-2 border-slate-100 ml-1 mt-4">
                    <NuxtLink to="/droit-travail" @click="toggleMobileMenu" class="block text-xs uppercase font-bold text-slate-900 mb-2 hover:text-red-900">
                        Droit du Travail
                    </NuxtLink>
                    <div class="flex flex-col gap-3 text-base">
                        <NuxtLink to="/droit-travail/avocat-licenciement" @click="handleSamePageReload('/droit-travail/avocat-licenciement', $event)" class="hover:text-red-900">Licenciement</NuxtLink>
                    </div>
                 </div>

                 <!-- Mobile Immobilier (Split) -->
                 <div class="pl-4 border-l-2 border-slate-100 ml-1 mt-4">
                    <NuxtLink to="/droit-immobilier" @click="toggleMobileMenu" class="block text-xs uppercase font-bold text-slate-900 mb-2 hover:text-red-900">
                        Droit Immobilier
                    </NuxtLink>
                    <div class="flex flex-col gap-3 text-base">
                        <NuxtLink to="/droit-immobilier/avocat-droit-bail" @click="handleSamePageReload('/droit-immobilier/avocat-droit-bail', $event)" class="hover:text-red-900">Droit du Bail</NuxtLink>
                    </div>
                 </div>

                 <!-- Mobile Etrangers (Split) -->
                 <div class="pl-4 border-l-2 border-slate-100 ml-1 mt-4">
                    <NuxtLink to="/droit-etrangers" @click="toggleMobileMenu" class="block text-xs uppercase font-bold text-slate-900 mb-2 hover:text-red-900">
                        Droit des Étrangers
                    </NuxtLink>
                    <div class="flex flex-col gap-3 text-base">
                         <NuxtLink to="/droit-etrangers/avocat-permis-sejour" @click="handleSamePageReload('/droit-etrangers/avocat-permis-sejour', $event)" class="hover:text-red-900">Permis de Séjour</NuxtLink>
                    </div>
                 </div>

                 <!-- Mobile Autres -->
                 <div class="pl-4 border-l-2 border-slate-100 ml-1 mt-4">
                    <h4 class="text-xs uppercase font-bold text-slate-400 mb-2">Autres</h4>
                     <div class="flex flex-col gap-3 text-base">
                        <NuxtLink to="/droit-penal" @click="handleSamePageReload('/droit-penal', $event)" class="hover:text-red-900">Droit Pénal</NuxtLink>
                        <NuxtLink to="/droit-affaires" @click="handleSamePageReload('/droit-affaires', $event)" class="hover:text-red-900">Droit des Affaires</NuxtLink>
                     </div>
                 </div>
            </div>

            <NuxtLink to="/honoraires" @click="handleSamePageReload('/honoraires', $event)" class="hover:text-red-900 transition-colors py-2 border-b border-slate-100">Honoraires</NuxtLink>
            <NuxtLink to="/blog" @click="handleSamePageReload('/blog', $event)" class="hover:text-red-900 transition-colors py-2 border-b border-slate-100">Blog</NuxtLink>
            <NuxtLink to="/contact" @click="handleSamePageReload('/contact', $event)" class="hover:text-red-900 transition-colors py-2 border-b border-slate-100">Contact</NuxtLink>
        </nav>

        <div class="mt-8">
             <NuxtLink to="/contact/#contact" @click="toggleMobileMenu" class="flex items-center justify-center w-full px-4 py-3 text-base font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-all shadow-sm">
                Prendre rendez-vous (CHF 155.-)
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
                    <span class="text-sm font-bold text-slate-900 uppercase tracking-widest">Clegal Avocats</span>
                    <p class="text-sm text-slate-500 max-w-xs mt-4">
                        Cabinet d'avocats généraliste à Genève. Une approche humaine, des tarifs transparents et une défense d'acier pour tous.
                    </p>
                </div>
                
                <div>
                    <h3 class="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">Informations</h3>
                    <ul class="space-y-2 text-sm text-slate-500">
                        <li><NuxtLink to="/domaine-de-competence" class="hover:text-red-900">Nos Expertises</NuxtLink></li>
                        <li><NuxtLink to="/honoraires" class="hover:text-red-900">Honoraires</NuxtLink></li>
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
                <p class="text-xs text-slate-400">© 2026 Clegal Avocats. Tous droits réservés.</p>
                <div class="flex gap-4 mt-4 md:mt-0 text-xs text-slate-400">
                    <NuxtLink to="/contact" class="hover:text-slate-600">Mentions Légales</NuxtLink>
                    <NuxtLink to="/contact" class="hover:text-slate-600">Confidentialité</NuxtLink>
                </div>
            </div>
        </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { watch, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const handleSamePageReload = (path: string, event: MouseEvent) => {
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  
  if (route.path === path) {
    event.preventDefault();
    window.location.reload();
  }
};

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

// Close menu on route change
watch(
  () => route.path,
  () => {
    if (isMobileMenuOpen.value) {
      isMobileMenuOpen.value = false;
      document.body.style.overflow = '';
    }
  }
);
</script>