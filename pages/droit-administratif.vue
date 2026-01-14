<template>
    <div>
        <!-- SEO/SEA Optimized Hero Section -->
        <section class="lg:pt-32 lg:pb-24 overflow-hidden pt-28 pb-20 relative bg-white border-b border-slate-100">
            <div class="absolute inset-0 -z-20 h-full w-full bg-white">
                <div class="absolute top-0 left-0 -ml-20 -mt-20 w-[600px] h-[600px] bg-slate-50 rounded-full blur-3xl opacity-50"></div>
                <div class="absolute bottom-0 right-0 -mr-20 -mb-20 w-[500px] h-[500px] bg-red-50/50 rounded-full blur-3xl opacity-40"></div>
            </div>
            <div class="absolute inset-0 -z-10 h-full w-full bg-grid-slate [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>

            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div class="text-left relative z-10">
                        <!-- Breadcrumb -->
                        <Breadcrumb :links="[
                            { name: 'Droit Administratif', path: '/droit-administratif' }
                        ]" />

                        <h1 class="text-3xl md:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight mb-6 leading-[1.1] text-balance">
                            Avocat Expert en Droit Administratif à Genève<br>
                        </h1>

                        <p class="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                            Permis de construire, recours administratifs et contentieux avec l'État. Nous vous représentons devant le Tribunal administratif et la Cour de Justice.
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
                            <span class="flex items-center gap-1.5"><i data-lucide="check-circle" class="w-4 h-4 text-emerald-600"></i> Permis Construire</span>
                            <span class="flex items-center gap-1.5"><i data-lucide="check-circle" class="w-4 h-4 text-emerald-600"></i> Recours Administratif</span>
                            <span class="flex items-center gap-1.5"><i data-lucide="check-circle" class="w-4 h-4 text-emerald-600"></i> Expropriation</span>
                        </div>
                    </div>

                    <div class="relative hidden lg:block">
                        <div class="absolute inset-0 bg-red-900/5 rounded-2xl transform translate-x-4 translate-y-4"></div>
                        <div class="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
                            <NuxtImg format="webp" src="/images/landing_hero.png" alt="Avocat Administratif Genève"
                                class="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" />
                            <div class="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm border border-slate-200 p-4 rounded-lg shadow-lg max-w-xs">
                                <div class="flex items-center gap-3 mb-2">
                                    <div class="p-2 bg-red-50 rounded-full text-red-900">
                                        <i data-lucide="landmark" class="w-4 h-4"></i>
                                    </div>
                                    <span class="text-xs font-semibold text-slate-900">Expertise Tribunal</span>
                                </div>
                                <p class="text-[11px] leading-snug text-slate-500">TAPI, Place du Bourg-de-Four.</p>
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
                    <h2 class="text-3xl font-bold tracking-tight text-slate-900 mb-4">Pourquoi choisir un Avocat à Genève ?</h2>
                    <p class="text-lg text-slate-600">Une connaissance précise des juridictions administratives locales.</p>
                </div>
                
                <div class="grid md:grid-cols-2 gap-12 items-center">
                    <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                        <div class="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900">
                            <i data-lucide="map-pin" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-4">Connaissance du Tribunal Administratif</h3>
                        <p class="text-slate-600 leading-relaxed">
                            Une expertise sur les procédures du <strong>Tribunal administratif de première instance de Genève</strong> (Place du Bourg-de-Four) est cruciale pour optimiser vos chances de succès.
                        </p>
                    </div>

                    <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                        <div class="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900">
                            <i data-lucide="scale" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-4">Chambre Administrative de la Cour</h3>
                        <p class="text-slate-600 leading-relaxed">
                            Nous connaissons les tendances décisionnelles des juges de la <strong>Cour de justice de Genève, Chambre administrative</strong>, ce qui influence positivement vos affaires.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Process Section - Conciliation -->
        <section class="py-20 bg-white border-b border-slate-100 overflow-hidden">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-3xl mx-auto mb-16">
                    <h2 class="text-3xl font-bold tracking-tight text-slate-900 mb-4">La Procédure de Conciliation Administratif</h2>
                    <p class="text-slate-500 font-medium tracking-wide uppercase text-sm">Étape par Étape</p>
                </div>

                <div class="relative">
                    <div class="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>
                    <div class="grid md:grid-cols-3 gap-8 relative z-10">
                        <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                            <div class="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold mb-4">1</div>
                            <h4 class="text-lg font-bold text-slate-900 mb-3">Préparation & Dépôt</h4>
                            <p class="text-sm text-slate-600">Collecte des documents et dépôt auprès du <strong>Tribunal administratif de première instance</strong>.</p>
                        </div>
                        <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                            <div class="w-10 h-10 bg-white text-slate-900 border-2 border-slate-900 rounded-full flex items-center justify-center font-bold mb-4">2</div>
                            <h4 class="text-lg font-bold text-slate-900 mb-3">Séance de Conciliation</h4>
                            <p class="text-sm text-slate-600">Opportunité de parvenir à un accord avant le procès complet, économisant temps et ressources.</p>
                        </div>
                        <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                            <div class="w-10 h-10 bg-red-900 text-white rounded-full flex items-center justify-center font-bold mb-4">3</div>
                            <h4 class="text-lg font-bold text-slate-900 mb-3">Décision ou Cour de Justice</h4>
                            <p class="text-sm text-slate-600">Si accord : décision contraignante. Sinon, affaire portée devant la <strong>Chambre administrative</strong>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Process Section - Urbanisme -->
        <section class="py-20 bg-slate-50 border-b border-slate-200">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-3xl mx-auto mb-16">
                    <h2 class="text-3xl font-bold tracking-tight text-slate-900 mb-4">La Procédure d'Urbanisme</h2>
                    <p class="text-slate-500 font-medium tracking-wide uppercase text-sm">Permis de Construire</p>
                </div>

                <div class="grid md:grid-cols-3 gap-8">
                    <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <div class="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold mb-4">1</div>
                        <h4 class="text-lg font-bold text-slate-900 mb-3">Dépôt Dossier</h4>
                        <p class="text-sm text-slate-600">Dépôt à l'<strong>Office de l'urbanisme de Genève</strong>. Documents conformes aux réglementations.</p>
                    </div>
                    <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <div class="w-10 h-10 bg-white text-slate-900 border-2 border-slate-900 rounded-full flex items-center justify-center font-bold mb-4">2</div>
                        <h4 class="text-lg font-bold text-slate-900 mb-3">Examen & Approbation</h4>
                        <p class="text-sm text-slate-600">L'Office examine et peut demander des modifications. Nous ajustons les plans pour accélérer l'approbation.</p>
                    </div>
                    <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <div class="w-10 h-10 bg-red-900 text-white rounded-full flex items-center justify-center font-bold mb-4">3</div>
                        <h4 class="text-lg font-bold text-slate-900 mb-3">Contestation</h4>
                        <p class="text-sm text-slate-600">En cas de refus, recours au <strong>Conseil d'État</strong> ou à la <strong>Chambre administrative</strong>.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Legal Framework -->
        <section id="features" class="py-20 bg-white border-t border-slate-100">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="mb-16 text-center max-w-3xl mx-auto">
                    <h2 class="text-3xl font-bold tracking-tight text-slate-900 mb-4">Le Cadre Légal</h2>
                    <p class="text-lg text-slate-600">Code Civil (CC) et Code des Obligations (CO).</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Code Civil (CC)</h3>
                        <p class="text-slate-600 text-sm">Articles essentiels pour comprendre les droits et obligations en matière de propriété à Genève.</p>
                    </div>

                    <div class="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Code des Obligations (CO)</h3>
                        <p class="text-slate-600 text-sm">Cadre légal pour les contrats administratifs, essentiel dans les procédures de droit administratif. <strong>Art 335-337 CO</strong> pour le secteur public.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQ -->
        <section id="faq" class="py-16 bg-slate-50 border-t border-slate-200">
            <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h3 class="text-xl font-bold text-slate-900 mb-8 text-center">FAQ (Droit Administratif)</h3>
                <div class="space-y-6">
                    <div class="border-b border-slate-200 pb-4">
                        <h4 class="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                            <i data-lucide="help-circle" class="w-5 h-5 text-red-800 mt-0.5 shrink-0"></i>
                            Quel délai pour une conciliation ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-7">Le délai moyen est de <strong>3 à 6 mois</strong>, selon la complexité du cas.</p>
                    </div>
                    <div class="border-b border-slate-200 pb-4">
                        <h4 class="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                            <i data-lucide="help-circle" class="w-5 h-5 text-red-800 mt-0.5 shrink-0"></i>
                            Comment contester une décision d'urbanisme ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-7">Déposer un recours au <strong>Conseil d'État de Genève</strong> dans un délai de <strong>30 jours</strong> suivant la notification.</p>
                    </div>
                    <div class="pb-4">
                        <h4 class="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                            <i data-lucide="help-circle" class="w-5 h-5 text-red-800 mt-0.5 shrink-0"></i>
                            Droits des employés du secteur public ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-7">Régis par les <strong>Art 335-337 CO</strong>, détaillant les conditions de travail et de licenciement.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Form Section -->
        <section id="formulaire" class="py-20 bg-white border-t border-slate-100">
            <div class="max-w-3xl mx-auto px-4">
                <div class="mb-12 text-center">
                    <h2 class="text-2xl font-bold text-slate-900 tracking-tight mb-4">Problème avec l'administration ?</h2>
                    <p class="text-slate-600">Nous défendons vos droits face aux autorités publiques.</p>
                </div>
                <ContactForm />
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Avocat Droit Administratif Genève | Urbanisme & Recours',
  meta: [
    { name: 'description', content: 'Avocat Expert Droit Administratif à Genève. Permis de construire, recours TAPI, expropriation. Tribunal administratif. 1er RDV : CHF 155.-' }
  ]
})
</script>
