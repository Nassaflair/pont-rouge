<template>
    <div>
        <!-- SEO/SEA Optimized Hero Section -->
        <section class="lg:pt-32 lg:pb-24 overflow-hidden pt-28 pb-20 relative bg-white border-b border-slate-100">
            <!-- Background effects -->
            <div class="absolute inset-0 -z-20 h-full w-full bg-white">
                <div class="absolute top-0 left-0 -ml-20 -mt-20 w-[600px] h-[600px] bg-slate-50 rounded-full blur-3xl opacity-50"></div>
                <div class="absolute bottom-0 right-0 -mr-20 -mb-20 w-[500px] h-[500px] bg-red-50/50 rounded-full blur-3xl opacity-40"></div>
            </div>
            <div class="absolute inset-0 -z-10 h-full w-full bg-grid-slate [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>

            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <!-- Content Left -->
                    <div class="text-left relative z-10">
                        <Breadcrumb :links="[
                            { name: 'Droit des Étrangers', path: '/droit-etrangers' },
                            { name: 'Permis de Séjour', path: '/droit-etrangers/avocat-permis-sejour' }
                        ]" />

                        <h1 class="text-3xl md:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight mb-6 leading-[1.1] text-balance">
                            Avocat Permis de Séjour à Genève<br>
                        </h1>

                        <p class="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                            Obtention de Permis B, C, L ou Frontalier G. Nous facilitons vos démarches auprès de l'OCPM et traitons les dossiers complexes.
                        </p>

                        <div class="flex flex-col sm:flex-row gap-4 items-start">
                            <a href="#formulaire"
                                class="inline-flex items-center justify-center hover:bg-red-800 shadow-red-900/20 hover:shadow-xl transition-all text-sm font-medium text-white bg-red-900 rounded-md pt-4 pr-8 pb-4 pl-8 shadow-lg w-full sm:w-auto">Prendre rendez-vous (CHF 155.-)</a>
                            <NuxtLink to="/#domaines"
                                class="inline-flex items-center justify-center px-6 py-4 text-sm font-medium text-slate-600 bg-white hover:bg-slate-50 border border-slate-200 rounded-md transition-all w-full sm:w-auto">
                                Nos services
                            </NuxtLink>
                        </div>

                        <div class="mt-10 flex flex-wrap gap-6 text-xs text-slate-500 font-medium">
                            <span class="flex items-center gap-1.5"><i data-lucide="check-circle" class="w-4 h-4 text-emerald-600"></i> Permis B / C</span>
                            <span class="flex items-center gap-1.5"><i data-lucide="check-circle" class="w-4 h-4 text-emerald-600"></i> Permis Frontalier G</span>
                            <span class="flex items-center gap-1.5"><i data-lucide="check-circle" class="w-4 h-4 text-emerald-600"></i> Recours Refus</span>
                        </div>
                    </div>

                    <!-- Image Right -->
                    <div class="relative hidden lg:block">
                        <div class="absolute inset-0 bg-red-900/5 rounded-2xl transform translate-x-4 translate-y-4"></div>
                        <div class="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
                            <NuxtImg format="webp" src="/images/landing_hero.png" alt="Avocat Permis de Séjour Genève"
                                class="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" />
                            <div class="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm border border-slate-200 p-4 rounded-lg shadow-lg max-w-xs">
                                <div class="flex items-center gap-3 mb-2">
                                    <div class="p-2 bg-red-50 rounded-full text-red-900">
                                        <i data-lucide="globe" class="w-4 h-4"></i>
                                    </div>
                                    <span class="text-xs font-semibold text-slate-900">OCPM & SEM</span>
                                </div>
                                <p class="text-[11px] leading-snug text-slate-500">Expertise Loi sur les Étrangers (LEI) et ALCP.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Authority Section -->
        <section class="py-20 bg-slate-50 border-b border-slate-200">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-3xl mx-auto mb-16">
                    <h2 class="text-3xl font-bold tracking-tight text-slate-900 mb-4">Pourquoi un avocat pour son permis ?</h2>
                    <p class="text-lg text-slate-600">L'administration ne pardonne pas les dossiers incomplets.</p>
                </div>
                
                <div class="grid md:grid-cols-2 gap-12 items-center">
                    <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                        <div class="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900">
                            <i data-lucide="file-check" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-4">Dossier Parfait (OCPM)</h3>
                        <p class="text-slate-600 leading-relaxed">
                            Nous préparons des dossiers complets et argumentés pour l'Office cantonal de la population et des migrations. Un dossier solide dès le départ réduit les délais et les risques de refus.
                        </p>
                    </div>

                    <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                        <div class="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900">
                            <i data-lucide="shield-alert" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-4">Cas Difficiles & Recours</h3>
                        <p class="text-slate-600 leading-relaxed">
                            Cas de rigueur, regroupement familial complexe ou risque de renvoi : nous intervenons avec force juridique pour défendre votre droit de vivre en Suisse.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Process Section -->
        <section class="py-20 bg-white border-b border-slate-100 overflow-hidden">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-3xl mx-auto mb-16">
                    <h2 class="text-3xl font-bold tracking-tight text-slate-900 mb-4">Obtenir un Permis à Genève</h2>
                    <p class="text-slate-500 font-medium tracking-wide uppercase text-sm">Le processus standard</p>
                </div>

                <div class="relative">
                    <div class="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>
                     <div class="grid md:grid-cols-3 gap-6 relative z-10 max-w-4xl mx-auto">
                        <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                            <div class="w-9 h-9 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold mb-3 text-sm">1</div>
                            <h4 class="text-base font-bold text-slate-900 mb-2">Analyse Éligibilité</h4>
                            <p class="text-xs text-slate-600">UE/AELE vs États Tiers. Permis B, C, L ou G.</p>
                        </div>
                        <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                            <div class="w-9 h-9 bg-white text-slate-900 border-2 border-slate-900 rounded-full flex items-center justify-center font-bold mb-3 text-sm">2</div>
                            <h4 class="text-base font-bold text-slate-900 mb-2">Dépôt OCPM</h4>
                            <p class="text-xs text-slate-600">Formulaires M, E, K et annexes (emploi, logis, casier).</p>
                        </div>
                        <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                            <div class="w-9 h-9 bg-red-900 text-white rounded-full flex items-center justify-center font-bold mb-3 text-sm">3</div>
                            <h4 class="text-base font-bold text-slate-900 mb-2">Décision / Recours</h4>
                            <p class="text-xs text-slate-600">Attente 3-6 mois. Si refus, recours au TAPI.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Service Grid / Key Issues -->
        <section class="py-20 bg-slate-50 border-b border-slate-200">
             <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="mb-16 text-center max-w-3xl mx-auto">
                    <h2 class="text-3xl font-bold tracking-tight text-slate-900 mb-4">Types de Permis</h2>
                    <p class="text-lg text-slate-600">Comprendre les catégories.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                         <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="briefcase" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Permis B (Séjour)</h3>
                        <p class="text-slate-600 text-sm leading-relaxed">
                            Autorisation de séjour de longue durée (généralement 1 ou 5 ans). Liée à un contrat de travail de plus d'un an ou durée indéterminée.
                        </p>
                    </div>

                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                         <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="award" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Permis C (Établissement)</h3>
                        <p class="text-slate-600 text-sm leading-relaxed">
                            Droit de séjour illimité. Obtenu après 5 ou 10 ans de séjour ininterrompu. Requiert une bonne intégration (langue, casier vierge, pas de dettes).
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Legal Framework -->
        <section id="features" class="py-20 bg-white border-t border-slate-200">
             <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="mb-16 text-center max-w-3xl mx-auto">
                    <h2 class="text-3xl font-bold tracking-tight text-slate-900 mb-4">Cadre Légal</h2>
                    <p class="text-lg text-slate-600">LEI et ALCP.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="book-open" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">ALCP (Accord Libre Circulation)</h3>
                        <p class="text-slate-600 text-sm leading-relaxed">
                            Pour les ressortissants UE/AELE. Facilite l'accès au marché du travail et au séjour, mais exige des moyens financiers suffisants si inactif.
                        </p>
                    </div>

                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="globe" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">LEI (Loi Étrangers Intégration)</h3>
                        <p class="text-slate-600 text-sm leading-relaxed">
                            Pour les États Tiers (Hors UE). Critères stricts : qualifications spécifiques, intérêt économique pour la Suisse, contingents annuels.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQ -->
        <section id="faq" class="py-16 bg-slate-50 border-t border-slate-100">
             <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h3 class="text-xl font-bold text-slate-900 mb-8 text-center">FAQ Permis Séjour Genève</h3>
                <div class="space-y-6">
                    <div class="border-b border-slate-200 pb-4">
                         <h4 class="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                            <i data-lucide="help-circle" class="w-5 h-5 text-red-800 mt-0.5 shrink-0"></i>
                            Comment passer du Permis B au C ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-7">Après 5 ans (UE/USA/Canada) ou 10 ans. Il faut prouver l'intégration (Niveau français A2/B1) et l'absence de condamnations.</p>
                     </div>
                    <div class="border-b border-slate-200 pb-4">
                        <h4 class="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                            <i data-lucide="help-circle" class="w-5 h-5 text-red-800 mt-0.5 shrink-0"></i>
                            Puis-je travailler avec un Permis L ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-7">Oui, c'est un permis de courte durée (moins d'un an), généralement lié à une mission déterminée.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Form Section -->
        <section id="formulaire" class="py-20 bg-white border-t border-slate-200">
            <div class="max-w-3xl mx-auto px-4">
                <div class="mb-12 text-center">
                    <h2 class="text-2xl font-bold text-slate-900 tracking-tight mb-4">Besoin d'un permis de séjour ?</h2>
                    <p class="text-slate-600">Nous gérons vos démarches administratives de A à Z.</p>
                </div>
                <ContactForm />
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
useLocalSeo(
  'Avocat Permis de Séjour Genève | B, C, L & Frontalier',
  'Avocat Spécialiste Permis de Séjour à Genève. Aide obtention Permis B, C, L, G. Recours refus OCPM. UE/AELE et États Tiers.',
  {
    type: 'LegalService',
    priceRange: 'Dès CHF 155.-'
  }
)
</script>
