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
                            Avocat Expert en Permis de Séjour à Genève<br>
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
                            <img src="/images/landing_hero_optimized.jpg" loading="lazy" width="800" height="600" alt="Avocat Permis de Séjour Genève"
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
                            <i data-lucide="map-pin" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-4">Connaissance approfondie du système juridique local</h3>
                        <p class="text-slate-600 leading-relaxed">
                            Un avocat spécialisé dans les permis de séjour à Genève possède une connaissance précise des procédures et des exigences spécifiques de l'<strong>Office cantonal de la population et des migrations (OCPM)</strong>, situé à Genève. Cette expertise locale est cruciale pour naviguer efficacement dans le système complexe des permis de séjour, augmentant ainsi les chances de succès de votre dossier.
                        </p>
                    </div>

                    <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                        <div class="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900">
                            <i data-lucide="shield-check" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-4">Avantages d'un avocat local pour les démarches administratives</h3>
                        <p class="text-slate-600 leading-relaxed">
                            L'avocat local connaît les particularités des processus administratifs de Genève et peut intervenir rapidement en cas de besoin. Il est également familiarisé avec les attentes et les préférences des fonctionnaires et des juges du <strong>Tribunal administratif de première instance</strong>, ce qui peut être déterminant pour le traitement de votre dossier.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Process Section -->
        <section class="py-20 bg-white border-b border-slate-100 overflow-hidden">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-3xl mx-auto mb-16">
                    <h2 class="text-3xl font-bold tracking-tight text-slate-900 mb-4">La Procédure de Permis de Séjour à Genève (Étape par Étape)</h2>
                    <p class="text-slate-500 font-medium tracking-wide uppercase text-sm">Un accompagnement complet</p>
                </div>

                <div class="relative">
                    <div class="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>
                     <div class="grid md:grid-cols-3 gap-6 relative z-10 max-w-4xl mx-auto">
                        <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                            <div class="w-9 h-9 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold mb-3 text-sm">1</div>
                            <h4 class="text-base font-bold text-slate-900 mb-2">Préparation de la demande</h4>
                            <p class="text-xs text-slate-600">Collecte des documents nécessaires tels que preuves de l'intégration et compétences linguistiques, et cela dépendant de la voie choisie au sens des <strong>article 18 et suivants</strong> de la <strong>Loi fédérale sur les étrangers et l'intégration (LEI)</strong> ou de l'<strong>ALCP</strong>. Etablissement d'une stratégie viable.</p>
                        </div>
                        <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                            <div class="w-9 h-9 bg-white text-slate-900 border-2 border-slate-900 rounded-full flex items-center justify-center font-bold mb-3 text-sm">2</div>
                            <h4 class="text-base font-bold text-slate-900 mb-2">Soumission de la demande</h4>
                            <p class="text-xs text-slate-600">Dépôt du dossier auprès de l'<strong>OCPM</strong> à Genève ou au <strong>Secrétariat d'Etat aux migrations</strong> à Berne selon la nature de la procédure. Respect des délais imposés par les réglementations cantonales et fédérale.</p>
                        </div>
                        <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                            <div class="w-9 h-9 bg-red-900 text-white rounded-full flex items-center justify-center font-bold mb-3 text-sm">3</div>
                            <h4 class="text-base font-bold text-slate-900 mb-2">Suivi et interaction</h4>
                            <p class="text-xs text-slate-600">Suivi régulier du statut de la demande. Communication efficace avec les autorités pour résoudre tout problème ou demande de documentation supplémentaire.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Service Grid / Key Issues -->
        <section class="py-20 bg-slate-50 border-b border-slate-200">
             <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="mb-16 text-center max-w-3xl mx-auto">
                    <h2 class="text-3xl font-bold tracking-tight text-slate-900 mb-4">Enjeux Clés</h2>
                    <p class="text-lg text-slate-600">Thématiques locales</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                         <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="briefcase" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Comprendre les quotas de permis à Genève</h3>
                        <p class="text-slate-600 text-sm leading-relaxed">
                            Les quotas pour les permis de séjour à Genève peuvent limiter le nombre de permis disponibles, rendant la compétition pour ces permis intense pour les ressortissants d'Etat tiers (hors UE-AELE).
                        </p>
                    </div>

                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                         <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="award" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Importance de la conformité</h3>
                        <p class="text-slate-600 text-sm leading-relaxed">
                            Une stricte adhérence aux règles et régulations locales est essentielle pour éviter des retards ou des rejets de la demande.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Legal Framework -->
        <section id="features" class="py-20 bg-white border-t border-slate-200">
             <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="mb-16 text-center max-w-3xl mx-auto">
                    <h2 class="text-3xl font-bold tracking-tight text-slate-900 mb-4">Le Cadre Légal (Articles Spécifiques)</h2>
                    <p class="text-lg text-slate-600">LEI et ALCP.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="book-open" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Articles de la Loi sur les étrangers (LEtr)</h3>
                        <p class="text-slate-600 text-sm leading-relaxed">
                            <strong>Articles 19 et suivants</strong> de la LEI : Les différentes conditions pour accéder à un titre de séjour suisse lorsque l'on vient d'un Etat tiers (hors UE-AELE).
                        </p>
                    </div>

                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="globe" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">ALCP</h3>
                        <p class="text-slate-600 text-sm leading-relaxed">
                            Accord sur la Libre Circulation des Personnes : Lorsque l'on est membre de l'UE ou de l'AELE.
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
                            Quel est le délai moyen pour obtenir un permis de séjour à Genève ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-7">Le délai moyen varie entre 3 et 6 mois, dépendant de la complexité du dossier et de la charge de travail de l'<strong>OCPM</strong>.</p>
                     </div>
                    <div class="border-b border-slate-200 pb-4">
                        <h4 class="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                            <i data-lucide="help-circle" class="w-5 h-5 text-red-800 mt-0.5 shrink-0"></i>
                            Quels sont les principaux obstacles rencontrés lors des demandes de permis ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-7">Les obstacles incluent souvent des documents incomplets ou non conformes, ainsi que la méconnaissance des procédures spécifiques à Genève.</p>
                    </div>
                    <div class="border-b border-slate-200 pb-4">
                        <h4 class="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                            <i data-lucide="help-circle" class="w-5 h-5 text-red-800 mt-0.5 shrink-0"></i>
                            Comment un avocat peut-il accélérer mon dossier ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-7">Un avocat peut optimiser la préparation de votre dossier, assurer la conformité des documents et intervenir efficacement en cas de complications, réduisant ainsi les délais de traitement.</p>
                    </div>
                </div>
            </div>
        </section>


        <!-- Related Services -->
        <SiloLinks silo="etrangers" currentPath="/droit-etrangers/avocat-permis-sejour" />

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
  'Avocat Permis de Séjour Genève | B, C & L – Clegal Avocats',
  'Avocat permis de séjour à Genève. Permis B, C, L, regroupement familial, recours OCPM, naturalisation. 1er RDV à 155.-. Clegal Avocats.',
  {
    type: 'LegalService',
    priceRange: 'Dès CHF 155.-',
    breadcrumbs: [
      { name: 'Droit des Étrangers', url: 'https://clegal-avocats.ch/droit-etrangers' },
      { name: 'Avocat Permis de Séjour', url: 'https://clegal-avocats.ch/droit-etrangers/avocat-permis-sejour' }
    ]
  }
)
</script>
