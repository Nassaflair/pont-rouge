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
                            { name: 'Droit des Assurances', path: '/droit-assurance' }
                        ]" />

                        <h1 class="text-3xl md:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight mb-6 leading-[1.1] text-balance">
                            Avocat Expert en Droit des Assurances à Genève<br>
                        </h1>

                        <p class="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                            Litiges d'assurance, refus de paiement et contestations. Nous défendons vos droits devant le Tribunal et la Chambre des assurances sociales.
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
                            <span class="flex items-center gap-1.5"><i data-lucide="check-circle" class="w-4 h-4 text-emerald-600"></i> Litiges Assurance</span>
                            <span class="flex items-center gap-1.5"><i data-lucide="check-circle" class="w-4 h-4 text-emerald-600"></i> Refus Indemnisation</span>
                            <span class="flex items-center gap-1.5"><i data-lucide="check-circle" class="w-4 h-4 text-emerald-600"></i> Assurances Sociales</span>
                        </div>
                    </div>

                    <div class="relative hidden lg:block">
                        <div class="absolute inset-0 bg-red-900/5 rounded-2xl transform translate-x-4 translate-y-4"></div>
                        <div class="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
                            <NuxtImg format="webp" src="/images/landing_hero.png" alt="Avocat Assurance Genève"
                                class="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" />
                            <div class="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm border border-slate-200 p-4 rounded-lg shadow-lg max-w-xs">
                                <div class="flex items-center gap-3 mb-2">
                                    <div class="p-2 bg-red-50 rounded-full text-red-900">
                                        <i data-lucide="shield-check" class="w-4 h-4"></i>
                                    </div>
                                    <span class="text-xs font-semibold text-slate-900">Expertise Assurance</span>
                                </div>
                                <p class="text-[11px] leading-snug text-slate-500">Chambre des assurances sociales du Tribunal cantonal.</p>
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
                    <p class="text-lg text-slate-600">Une expertise locale cruciale pour vos litiges d'assurance.</p>
                </div>
                
                <div class="grid md:grid-cols-2 gap-12 items-center">
                    <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                        <div class="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900">
                            <i data-lucide="landmark" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-4">Connaissance du Tribunal de Genève</h3>
                        <p class="text-slate-600 leading-relaxed">
                            Une connaissance approfondie des procédures du <strong>Tribunal de première instance de Genève</strong>, situé à la Place du Bourg-de-Four, est cruciale pour anticiper les décisions des juges.
                        </p>
                    </div>

                    <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                        <div class="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900">
                            <i data-lucide="users" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-4">Expertise Chambre des Assurances</h3>
                        <p class="text-slate-600 leading-relaxed">
                            Un avocat local comprend les pratiques spécifiques de la <strong>Chambre des assurances sociales du Tribunal cantonal</strong>, augmentant significativement vos chances de succès.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Process Section -->
        <section class="py-20 bg-white border-b border-slate-100 overflow-hidden">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-3xl mx-auto mb-16">
                    <h2 class="text-3xl font-bold tracking-tight text-slate-900 mb-4">La Procédure de Litige d'Assurance</h2>
                    <p class="text-slate-500 font-medium tracking-wide uppercase text-sm">Étape par Étape</p>
                </div>

                <div class="relative">
                    <div class="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>
                    <div class="grid md:grid-cols-5 gap-6 relative z-10">
                        <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                            <div class="w-9 h-9 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold mb-3 text-sm">1</div>
                            <h4 class="text-base font-bold text-slate-900 mb-2">Consultation</h4>
                            <p class="text-xs text-slate-600">Évaluation du cas selon <strong>Art. 97 CC</strong>.</p>
                        </div>
                        <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                            <div class="w-9 h-9 bg-white text-slate-900 border-2 border-slate-900 rounded-full flex items-center justify-center font-bold mb-3 text-sm">2</div>
                            <h4 class="text-base font-bold text-slate-900 mb-2">Dépôt Plainte</h4>
                            <p class="text-xs text-slate-600">Plainte rédigée selon <strong>Art. 112 CC</strong>.</p>
                        </div>
                        <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                            <div class="w-9 h-9 bg-white text-slate-900 border-2 border-slate-900 rounded-full flex items-center justify-center font-bold mb-3 text-sm">3</div>
                            <h4 class="text-base font-bold text-slate-900 mb-2">Conciliation</h4>
                            <p class="text-xs text-slate-600">Tentative d'accord sous supervision du tribunal.</p>
                        </div>
                        <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                            <div class="w-9 h-9 bg-white text-slate-900 border-2 border-slate-900 rounded-full flex items-center justify-center font-bold mb-3 text-sm">4</div>
                            <h4 class="text-base font-bold text-slate-900 mb-2">Procès</h4>
                            <p class="text-xs text-slate-600">Défense basée sur <strong>Art. 61 CO</strong>.</p>
                        </div>
                        <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                            <div class="w-9 h-9 bg-red-900 text-white rounded-full flex items-center justify-center font-bold mb-3 text-sm">5</div>
                            <h4 class="text-base font-bold text-slate-900 mb-2">Exécution</h4>
                            <p class="text-xs text-slate-600">Obtention de l'indemnisation due.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Legal Framework -->
        <section id="features" class="py-20 bg-slate-50 border-t border-slate-200">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="mb-16 text-center max-w-3xl mx-auto">
                    <h2 class="text-3xl font-bold tracking-tight text-slate-900 mb-4">Le Cadre Légal</h2>
                    <p class="text-lg text-slate-600">Code des Obligations (CO) et Code Civil (CC).</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="book-open" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Code des Obligations (CO)</h3>
                        <ul class="space-y-2 text-slate-600 text-sm">
                            <li><strong>Article 61 CO</strong> : Responsabilité du fait des auxiliaires.</li>
                            <li><strong>Article 99 CO</strong> : Contrats d'assurance sur la vie.</li>
                        </ul>
                    </div>

                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="file-text" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Code Civil (CC)</h3>
                        <ul class="space-y-2 text-slate-600 text-sm">
                            <li><strong>Article 97 CC</strong> : Obligations du débiteur.</li>
                            <li><strong>Article 112 CC</strong> : Contrat d'assurance.</li>
                        </ul>
                    </div>

                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="building" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Réglementations Locales</h3>
                        <p class="text-slate-600 text-sm">L'<strong>Office cantonal de l'assurance maladie (OCAS)</strong> applique des règles spécifiques pour les litiges d'assurance maladie à Genève.</p>
                    </div>

                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="alert-triangle" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Litiges Fréquents</h3>
                        <p class="text-slate-600 text-sm">Désaccords sur la couverture des sinistres, refus de paiement des indemnisations, et contestation de clauses complexes.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQ -->
        <section id="faq" class="py-16 bg-white border-t border-slate-100">
            <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h3 class="text-xl font-bold text-slate-900 mb-8 text-center">FAQ (Droit des Assurances)</h3>
                <div class="space-y-6">
                    <div class="border-b border-slate-100 pb-4">
                        <h4 class="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                            <i data-lucide="help-circle" class="w-5 h-5 text-red-800 mt-0.5 shrink-0"></i>
                            Quel délai pour résoudre un litige d'assurance ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-7">Le délai moyen varie de <strong>6 mois à 2 ans</strong>, selon la complexité du cas et la charge du tribunal.</p>
                    </div>
                    <div class="border-b border-slate-100 pb-4">
                        <h4 class="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                            <i data-lucide="help-circle" class="w-5 h-5 text-red-800 mt-0.5 shrink-0"></i>
                            Quels sont mes droits en tant qu'assuré ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-7">Vous avez droit à une couverture conforme aux termes de votre contrat et à contester toute décision incorrecte (<strong>Art. 112 CC</strong>).</p>
                    </div>
                    <div class="pb-4">
                        <h4 class="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                            <i data-lucide="help-circle" class="w-5 h-5 text-red-800 mt-0.5 shrink-0"></i>
                            Comment contester une décision d'assureur ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-7">Consultez un avocat spécialisé qui initiera une procédure basée sur les articles du Code Civil et du Code des Obligations.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Form Section -->
        <section id="formulaire" class="py-20 bg-slate-50 border-t border-slate-200">
            <div class="max-w-3xl mx-auto px-4">
                <div class="mb-12 text-center">
                    <h2 class="text-2xl font-bold text-slate-900 tracking-tight mb-4">Litige avec votre assurance ?</h2>
                    <p class="text-slate-600">Nous faisons valoir vos droits avec rigueur et expertise.</p>
                </div>
                <ContactForm />
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Avocat Droit des Assurances Genève | Litiges & Indemnisation',
  meta: [
    { name: 'description', content: 'Avocat Expert Droit des Assurances à Genève. Litiges, refus de paiement, Chambre des assurances sociales. Art. 61 CO, 112 CC. 1er RDV : CHF 155.-' }
  ]
})
</script>
