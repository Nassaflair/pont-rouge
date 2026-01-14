<template>
    <div>
        <!-- SEO/SEA Optimized Hero Section -->
        <section class="lg:pt-32 lg:pb-24 overflow-hidden pt-28 pb-20 relative bg-white border-b border-slate-100">
            <!-- Background effects -->
            <div class="absolute inset-0 -z-20 h-full w-full bg-white">
                <div
                    class="absolute top-0 left-0 -ml-20 -mt-20 w-[600px] h-[600px] bg-slate-50 rounded-full blur-3xl opacity-50">
                </div>
                <div
                    class="absolute bottom-0 right-0 -mr-20 -mb-20 w-[500px] h-[500px] bg-red-50/50 rounded-full blur-3xl opacity-40">
                </div>
            </div>
            <div
                class="absolute inset-0 -z-10 h-full w-full bg-grid-slate [mask-image:linear-gradient(to_bottom,white,transparent)]">
            </div>

            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    <!-- Content Left -->
                    <div class="text-left relative z-10">
                        <!-- Breadcrumb -->
                        <Breadcrumb :links="[
                            { name: 'Droit des Étrangers', path: '/droit-etrangers' }
                        ]" />

                        <h1
                            class="text-3xl md:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight mb-6 leading-[1.1] text-balance">
                            Avocat Droit des Étrangers et Immigration à Genève<br>
                        </h1>

                        <p class="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                            Permis de séjour, regroupement familial et naturalisation. Nous facilitons vos démarches auprès de l'OCPM et défendons vos droits au Tribunal administratif.
                        </p>

                        <div class="flex flex-col sm:flex-row gap-4 items-start">
                            <a href="#formulaire"
                                class="inline-flex items-center justify-center hover:bg-red-800 shadow-red-900/20 hover:shadow-xl transition-all text-sm font-medium text-white bg-red-900 rounded-md pt-4 pr-8 pb-4 pl-8 shadow-lg w-full sm:w-auto">Prendre
                                rendez-vous (CHF 155.-)</a>
                            <NuxtLink to="/#domaines"
                                class="inline-flex items-center justify-center px-6 py-4 text-sm font-medium text-slate-600 bg-white hover:bg-slate-50 border border-slate-200 rounded-md transition-all w-full sm:w-auto">
                                Nos services
                            </NuxtLink>
                        </div>

                        <div class="mt-10 flex flex-wrap gap-6 text-xs text-slate-500 font-medium">
                            <span class="flex items-center gap-1.5"><i data-lucide="check-circle"
                                    class="w-4 h-4 text-emerald-600"></i> Permis B / C / L / G</span>
                            <span class="flex items-center gap-1.5"><i data-lucide="check-circle"
                                    class="w-4 h-4 text-emerald-600"></i> Recours Refus OCPM</span>
                            <span class="flex items-center gap-1.5"><i data-lucide="check-circle"
                                    class="w-4 h-4 text-emerald-600"></i> Naturalisation</span>
                        </div>
                    </div>

                    <!-- Image Right -->
                    <div class="relative hidden lg:block">
                        <div class="absolute inset-0 bg-red-900/5 rounded-2xl transform translate-x-4 translate-y-4">
                        </div>
                        <div class="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
                            <!-- Using landing_hero.png as generic legal image -->
                            <NuxtImg format="webp" src="/images/landing_hero.png" alt="Avocat Immigration Genève"
                                class="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" />
                            <div
                                class="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm border border-slate-200 p-4 rounded-lg shadow-lg max-w-xs">
                                <div class="flex items-center gap-3 mb-2">
                                    <div class="p-2 bg-red-50 rounded-full text-red-900">
                                        <i data-lucide="globe" class="w-4 h-4"></i>
                                    </div>
                                    <span class="text-xs font-semibold text-slate-900">Expertise OCPM</span>
                                </div>
                                <p class="text-[11px] leading-snug text-slate-500">Recours Tribunal administratif (Rue Ami-Lullin).</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Authority Section: Pourquoi choisir au Avocat à Genève ? -->
        <section class="py-20 bg-slate-50 border-b border-slate-200">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-3xl mx-auto mb-16">
                    <h2 class="text-3xl font-bold tracking-tight text-slate-900 mb-4">Pourquoi choisir un Avocat à Genève ?</h2>
                    <p class="text-lg text-slate-600">Une expertise locale indispensable pour réussir vos démarches.</p>
                </div>
                
                <div class="grid md:grid-cols-2 gap-12 items-center">
                    <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                        <div class="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900">
                            <i data-lucide="map-pin" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-4">Connaissance approfondie du système juridique</h3>
                        <p class="text-slate-600 leading-relaxed">
                            La maîtrise des spécificités du <strong>Tribunal administratif de première instance de Genève</strong> (Rue Ami-Lullin 4) est essentielle pour influencer positivement les résultats des recours. La connaissance des tendances des juges locaux est déterminante.
                        </p>
                    </div>

                    <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                        <div class="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900">
                            <i data-lucide="users" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-4">Interaction efficace avec l'OCPM</h3>
                        <p class="text-slate-600 leading-relaxed">
                            Un avocat genevois est mieux placé pour naviguer dans le système légal complexe et interagir efficacement avec l'<strong>Office cantonal de la population et des migrations (OCPM)</strong>. Nous anticipons les obstacles bureaucratiques.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Process Section: La Procédure -->
        <section class="py-20 bg-white border-b border-slate-100 overflow-hidden">
             <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-3xl mx-auto mb-16">
                    <h2 class="text-3xl font-bold tracking-tight text-slate-900 mb-4">La Procédure de Permis de Travail / Séjour</h2>
                    <p class="text-slate-500 font-medium tracking-wide uppercase text-sm">Étape par Étape</p>
                </div>

                <div class="relative">
                    <!-- Connector Line (Desktop) -->
                    <div class="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>

                    <div class="grid md:grid-cols-3 gap-8 relative z-10">
                        <!-- Step 1 -->
                        <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative group hover:-translate-y-1 transition-transform duration-300">
                            <div class="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold mb-4 mx-auto md:mx-0 shadow-lg shadow-slate-900/20">1</div>
                            <h4 class="text-lg font-bold text-slate-900 mb-3">Préparation & Dépôt</h4>
                            <p class="text-sm text-slate-600 leading-relaxed">
                                Compilation rigoureuse du dossier selon les critères LEI ou ALCP. Soumission de la demande motivée à l'OCPM.
                            </p>
                        </div>

                        <!-- Step 2 -->
                        <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative group hover:-translate-y-1 transition-transform duration-300">
                            <div class="w-10 h-10 bg-white text-slate-900 border-2 border-slate-900 rounded-full flex items-center justify-center font-bold mb-4 mx-auto md:mx-0">2</div>
                            <h4 class="text-lg font-bold text-slate-900 mb-3">Examen OCPM</h4>
                            <p class="text-sm text-slate-600 leading-relaxed">
                                Délai moyen de 3 à 6 mois. L'OCPM vérifie les qualifications, l'offre d'emploi et la conformité aux règlements cantonaux.
                            </p>
                        </div>

                        <!-- Step 3 -->
                        <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative group hover:-translate-y-1 transition-transform duration-300">
                            <div class="w-10 h-10 bg-red-900 text-white rounded-full flex items-center justify-center font-bold mb-4 mx-auto md:mx-0 shadow-lg shadow-red-900/20">3</div>
                            <h4 class="text-lg font-bold text-slate-900 mb-3">Recours (Si Refus)</h4>
                            <p class="text-sm text-slate-600 leading-relaxed">
                                En cas de décision négative, nous déposons un recours au <strong>Tribunal administratif de première instance</strong> pour faire valoir vos droits.
                            </p>
                        </div>
                    </div>
                </div>
             </div>
        </section>

        <!-- "Enjeux Clés" Services Grid -->
        <section id="features" class="py-20 bg-slate-50 border-t border-slate-200">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="mb-16 text-center max-w-3xl mx-auto">
                    <h2 class="text-3xl font-bold tracking-tight text-slate-900 mb-4">Enjeux Clés & Cadre Légal</h2>
                    <p class="text-lg text-slate-600">Loi sur les Étrangers (LEI) et Accords Bilatéraux (ALCP).</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <!-- 1. Permis Séjour -->
                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="file-check" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Obtention de Permis</h3>
                        <p class="text-slate-600 leading-relaxed mb-4">
                            L'<strong>Article 30 LEI</strong> détaille les conditions pour les ressortissants d'Etats tiers (cas de rigueur). Pour les européens, l'<strong>ALCP</strong> facilite l'accès mais requiert un dossier solide.
                        </p>
                    </div>

                    <!-- 2. Renouvellement -->
                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="refresh-cw" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Renouvellement & C -> B</h3>
                        <p class="text-slate-600 leading-relaxed mb-4">
                            Les défis incluent la compréhension des critères de renouvellement (intégration, économie) et le risque de rétrogradation du Permis C au Permis B.
                        </p>
                    </div>

                    <!-- 3. Naturalisation -->
                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="flag" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Naturalisation Suisse</h3>
                        <p class="text-slate-600 leading-relaxed overflow-hidden">
                            Un processus long et exigeant. Nous vous préparons aux exigences fédérales, cantonales et communales pour devenir suisse.
                        </p>
                    </div>

                    <!-- 4. Recours OCPM -->
                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="alert-triangle" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Recours en cas de Refus</h3>
                        <p class="text-slate-600 leading-relaxed">
                            Contre une décision de renvoi ou de refus de permis, nous saisissons le <strong>Tribunal administratif de première instance</strong> pour faire annuler la décision.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQ -->
        <section id="faq" class="py-16 bg-white border-t border-slate-100">
            <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h3 class="text-xl font-bold text-slate-900 mb-8 text-center">FAQ (Immigration Genève)</h3>
                <div class="space-y-6">
                    <div class="border-b border-slate-100 pb-4">
                        <h4 class="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                            <i data-lucide="help-circle" class="w-5 h-5 text-red-800 mt-0.5 shrink-0"></i>
                            Quel délai pour une réponse de l'OCPM ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-7">Comptez une moyenne de <strong>3 à 6 mois</strong>, selon la complexité du dossier et la charge actuelle de l'office.</p>
                    </div>
                    <div class="border-b border-slate-100 pb-4">
                        <h4 class="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                            <i data-lucide="help-circle" class="w-5 h-5 text-red-800 mt-0.5 shrink-0"></i>
                            Quels critères pour un permis de séjour ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-7">Principalement : une offre d'emploi valide, les qualifications professionnelles adéquates, l'absence de condamnations pénales et les moyens financiers.</p>
                    </div>
                    <div class="pb-4">
                        <h4 class="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                            <i data-lucide="help-circle" class="w-5 h-5 text-red-800 mt-0.5 shrink-0"></i>
                            Que faire en cas de refus ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-7">Contactez-nous immédiatement. Un recours doit être déposé rapidement (souvent 30 jours) au Tribunal administratif pour contester la décision.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Internal Linking Section -->
        <section class="py-16 bg-white border-t border-slate-100">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-3xl mx-auto mb-12">
                    <h2 class="text-2xl font-bold text-slate-900 tracking-tight mb-4">Accès Rapide : Immigration</h2>
                    <p class="text-slate-600">Vos démarches simplifiées.</p>
                </div>
                
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
                     <!-- Self Link -->
                     <div class="p-6 bg-white rounded-xl border border-slate-100 shadow-sm opacity-50 cursor-not-allowed">
                        <div class="flex items-center gap-3 mb-3">
                            <div class="p-2 bg-slate-100 rounded-lg text-slate-400">
                                <i data-lucide="globe" class="w-5 h-5"></i>
                            </div>
                            <h3 class="font-bold text-slate-400">Droit des Étrangers</h3>
                        </div>
                        <p class="text-sm text-slate-400">Page actuelle.</p>
                    </div>

                    <NuxtLink to="/droit-etrangers/avocat-permis-sejour" class="group block p-6 bg-slate-50 rounded-xl border border-slate-200 hover:border-red-900/30 hover:shadow-md transition-all">
                        <div class="flex items-center gap-3 mb-3">
                            <div class="p-2 bg-white rounded-lg text-red-900 shadow-sm group-hover:bg-red-900 group-hover:text-white transition-colors">
                                <i data-lucide="id-card" class="w-5 h-5"></i>
                            </div>
                            <h3 class="font-bold text-slate-900">Permis de Séjour</h3>
                        </div>
                        <p class="text-sm text-slate-600">Permis B, C, G et Naturalisation.</p>
                    </NuxtLink>
                </div>
            </div>
        </section>

        <!-- Use Form Component -->
        <section id="formulaire" class="py-20 bg-slate-50 border-t border-slate-200">
            <div class="max-w-3xl mx-auto px-4">
                <div class="mb-12 text-center">
                    <h2 class="text-2xl font-bold text-slate-900 tracking-tight mb-4">Besoin d'aide pour vos papiers ?</h2>
                    <p class="text-slate-600">Nous défendons votre droit de vivre et travailler à Genève.</p>
                </div>
                <ContactForm />
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">


useHead({
  title: 'Avocat Droit des Étrangers Genève | Permis & Immigration',
  meta: [
    { name: 'description', content: 'Avocat Spécialiste Droit des Étrangers à Genève. Aide pour Permis B/C, Recours OCPM et Naturalisation. Tribunal administratif (TAPI). 1er RDV : CHF 155.-' }
  ]
})
</script>
