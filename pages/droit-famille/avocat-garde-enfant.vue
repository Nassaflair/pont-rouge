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
                            { name: 'Droit de la Famille', path: '/droit-famille' },
                            { name: 'Garde d\'Enfant', path: '/droit-famille/avocat-garde-enfant' }
                        ]" />

                        <h1 class="text-3xl md:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight mb-6 leading-[1.1] text-balance">
                            Avocat Spécialiste en Droit de Garde d'Enfant à Genève<br>
                        </h1>

                        <p class="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                            Nous défendons l'intérêt de vos enfants. Garde partagée, autorité parentale et droits de visite à Genève.
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
                            <span class="flex items-center gap-1.5"><i data-lucide="check-circle" class="w-4 h-4 text-emerald-600"></i> Garde Alternée</span>
                            <span class="flex items-center gap-1.5"><i data-lucide="check-circle" class="w-4 h-4 text-emerald-600"></i> Autorité Parentale</span>
                            <span class="flex items-center gap-1.5"><i data-lucide="check-circle" class="w-4 h-4 text-emerald-600"></i> Droit de Visite</span>
                        </div>
                    </div>
                     <!-- Image Right -->
                    <div class="relative hidden lg:block">
                        <div class="absolute inset-0 bg-red-900/5 rounded-2xl transform translate-x-4 translate-y-4"></div>
                        <div class="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
                            <img src="/images/landing_hero_optimized.jpg" loading="lazy" width="800" height="600" alt="Avocat Garde Enfant Genève"
                                class="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" />
                            <div class="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm border border-slate-200 p-4 rounded-lg shadow-lg max-w-xs">
                                <div class="flex items-center gap-3 mb-2">
                                    <div class="p-2 bg-red-50 rounded-full text-red-900">
                                        <i data-lucide="baby" class="w-4 h-4"></i>
                                    </div>
                                    <span class="text-xs font-semibold text-slate-900">Protection de l'Enfant</span>
                                </div>
                                <p class="text-[11px] leading-snug text-slate-500">Chambre des Tutelles & Tribunal, Genève.</p>
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
                    <p class="text-lg text-slate-600">Expertise locale et stratégique.</p>
                </div>
                
                <div class="grid md:grid-cols-3 gap-8 items-start">
                    <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 h-full">
                         <div class="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900">
                            <i data-lucide="landmark" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-4">Connaissance approfondie des tribunaux locaux</h3>
                        <p class="text-slate-600 leading-relaxed text-sm">
                            Un avocat local est essentiel pour naviguer avec succès dans les complexités du <strong>Tribunal de première instance de Genève</strong>, situé à la rue de l'Athénée. La familiarité avec les procédures spécifiques de ce tribunal peut influencer positivement les décisions de garde.
                        </p>
                    </div>

                    <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 h-full">
                        <div class="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900">
                            <i data-lucide="book-open" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-4">Expertise régionale spécifique</h3>
                        <p class="text-slate-600 leading-relaxed text-sm">
                            Les avocats de Genève comprennent les nuances du <strong>Code Civil Suisse (CC)</strong>, du <strong>Tribunal de première instance</strong> et du <strong>Tribunal de protection de l'adulte et de l'enfant</strong>, ce qui est crucial pour défendre efficacement vos droits et ceux de votre enfant.
                        </p>
                    </div>

                     <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 h-full">
                        <div class="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900">
                            <i data-lucide="clock" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-4">Avantages de l'assistance locale</h3>
                        <p class="text-slate-600 leading-relaxed text-sm">
                            Travailler avec un avocat de Genève garantit une réactivité et une disponibilité accrues, permettant une communication rapide et efficace, essentielle dans les affaires de garde d'enfants où les circonstances peuvent évoluer rapidement.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Process Section -->
        <section class="py-20 bg-white border-b border-slate-100 overflow-hidden">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-3xl mx-auto mb-16">
                    <h2 class="text-3xl font-bold tracking-tight text-slate-900 mb-4">La Procédure de Droit de Garde à Genève (Étape par Étape)</h2>
                    <p class="text-slate-500 font-medium tracking-wide uppercase text-sm">Votre parcours</p>
                </div>

                     <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10 max-w-6xl mx-auto">
                        <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                            <div class="w-9 h-9 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold mb-3 text-sm">1</div>
                            <h4 class="text-base font-bold text-slate-900 mb-2">Consultation initiale et évaluation du cas</h4>
                            <p class="text-sm text-slate-600">Lors de la première rencontre, l'avocat évalue les détails de votre situation familiale et discute des stratégies possibles en vertu des <strong>Article 301 et suivants CC</strong>, qui pose les principes contenu dans l'autorité parentale.</p>
                        </div>
                        <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                            <div class="w-9 h-9 bg-white text-slate-900 border-2 border-slate-900 rounded-full flex items-center justify-center font-bold mb-3 text-sm">2</div>
                            <h4 class="text-base font-bold text-slate-900 mb-2">Dépôt de la demande de garde</h4>
                            <p class="text-sm text-slate-600">Votre avocat déposera une demande au <strong>Tribunal de première instance de Genève</strong> ou au <strong>Tribunal de protection de l'adulte et de l'enfant</strong> selon votre situation.</p>
                        </div>
                        <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                            <div class="w-9 h-9 bg-white text-slate-900 border-2 border-slate-900 rounded-full flex items-center justify-center font-bold mb-3 text-sm">3</div>
                            <h4 class="text-base font-bold text-slate-900 mb-2">Phase de conciliation</h4>
                            <p class="text-sm text-slate-600">Selon la procédure, celle-ci peut commencée par une phase de conciliation dans laquelle les parents peuvent arriver à un accord.</p>
                        </div>
                         <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                            <div class="w-9 h-9 bg-white text-slate-900 border-2 border-slate-900 rounded-full flex items-center justify-center font-bold mb-3 text-sm">4</div>
                            <h4 class="text-base font-bold text-slate-900 mb-2">Audition et évaluation par le tribunal</h4>
                            <p class="text-sm text-slate-600">Le tribunal évalue toutes les preuves et témoignages. Il est parfois nécessaire de faire intervenir le <strong>Service de protection des mineurs (SPMi)</strong> afin de faire établire un rapport.</p>
                        </div>
                         <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform duration-300 lg:col-span-2 lg:w-1/2 lg:mx-auto">
                            <div class="w-9 h-9 bg-red-900 text-white rounded-full flex items-center justify-center font-bold mb-3 text-sm">5</div>
                            <h4 class="text-base font-bold text-slate-900 mb-2">Décision du tribunal et mise en œuvre</h4>
                            <p class="text-sm text-slate-600">La décision finale revient au juge qui doit prendre en compte l'<strong>intérêt supérieur de l'enfant</strong>. Le <strong>Service de protection des mineurs (SPMi)</strong> peut jouer un rôle clé dans la mise en œuvre de la décision de garde.</p>
                        </div>
                    </div>
                </div>
        </section>

        <!-- Key Issues (Enjeux Clés) -->
        <section class="py-20 bg-slate-50 border-b border-slate-200">
             <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="mb-16 text-center max-w-3xl mx-auto">
                    <h2 class="text-3xl font-bold tracking-tight text-slate-900 mb-4">Enjeux Clés (Thématiques locales)</h2>
                    <p class="text-lg text-slate-600">Comprendre le contexte genevois.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                         <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="trending-up" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Impact de la séparation</h3>
                        <p class="text-slate-600 text-sm leading-relaxed">
                            La séparation des parents peut complexifier la détermination de la garde, rendant l'expertise d'un avocat local indispensable pour naviguer dans ces eaux troubles.
                        </p>
                    </div>

                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                         <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="refresh-cw" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Modifications de la garde</h3>
                        <p class="text-slate-600 text-sm leading-relaxed">
                            Les changements dans les conditions de vie ou les besoins de l'enfant peuvent nécessiter des ajustements de la garde. Il est ainsi possible de faire <strong>modifier</strong> une décision antérieure si les faits ont changés.
                        </p>
                    </div>

                     <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="shield" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Protection de l'intérêt supérieur</h3>
                        <p class="text-slate-600 text-sm leading-relaxed">
                            L'accent est mis sur le bien-être de l'enfant, avec des décisions prises en tenant compte de son intérêt supérieur et cela conformément au droit.
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
                    <p class="text-lg text-slate-600">Articles du Code Civil Suisse (CC) relatifs à la garde.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                        <h3 class="font-bold text-slate-900 mb-2">Article 133 (CC)</h3>
                        <p class="text-sm text-slate-600">Droit de déterminer le lieu de résidence de l'enfant.</p>
                    </div>

                     <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                        <h3 class="font-bold text-slate-900 mb-2">Article 273 (CC)</h3>
                        <p class="text-sm text-slate-600">Droit aux relations personnels des parents.</p>
                    </div>

                     <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                        <h3 class="font-bold text-slate-900 mb-2">Article 301 (CC)</h3>
                        <p class="text-sm text-slate-600">Détermination du lieu de résidence de l'enfant.</p>
                    </div>

                     <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                        <h3 class="font-bold text-slate-900 mb-2">Article 302 (CC)</h3>
                        <p class="text-sm text-slate-600">Education de l'enfant.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQ -->
        <section id="faq" class="py-16 bg-slate-50 border-t border-slate-100">
             <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h3 class="text-xl font-bold text-slate-900 mb-8 text-center">FAQ Garde d'Enfant Genève</h3>
                <div class="space-y-6">
                    <div class="border-b border-slate-200 pb-4">
                         <h4 class="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                            <i data-lucide="help-circle" class="w-5 h-5 text-red-800 mt-0.5 shrink-0"></i>
                            Quels sont mes droits en tant que parent non gardien ?
                        </h4>
                        <ul class="text-sm text-slate-600 pl-7 list-disc space-y-2">
                            <li><strong>Droit de visite :</strong> En principe le parent non-gardien a droit aux relations personnelles avec l'enfant comme en dispose l'<strong>article 273 CC</strong>.</li>
                            <li>En principe, et si l'autorité parentale a été maintenue, le parent non-gardien a un droit de regard sur les décisions importantes pour l'enfant.</li>
                        </ul>
                     </div>
                    <div class="border-b border-slate-200 pb-4">
                        <h4 class="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                            <i data-lucide="help-circle" class="w-5 h-5 text-red-800 mt-0.5 shrink-0"></i>
                             Comment le tribunal détermine-t-il la garde principale ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-7">Le principe est la garde alternée mais le Tribunal jugera en fonction de l'intérêt supérieur de l'enfant.</p>
                    </div>
                    <div class="border-b border-slate-200 pb-4">
                        <h4 class="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                            <i data-lucide="help-circle" class="w-5 h-5 text-red-800 mt-0.5 shrink-0"></i>
                            Puis-je modifier les arrangements de garde ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-7">Oui, en cas de changement significatif des circonstances.</p>
                    </div>
                    <div class="border-b border-slate-200 pb-4">
                        <h4 class="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                            <i data-lucide="help-circle" class="w-5 h-5 text-red-800 mt-0.5 shrink-0"></i>
                            Que faire en cas de non-respect des accords de garde ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-7">Contactez immédiatement votre avocat. Le <strong>SPMi</strong> peut également intervenir pour assurer l'exécution des décisions de garde.</p>
                    </div>
                </div>
            </div>
        </section>


        <!-- Related Services -->
        <SiloLinks silo="famille" currentPath="/droit-famille/avocat-garde-enfant" />

        <!-- Form Section -->
        <section id="formulaire" class="py-20 bg-white border-t border-slate-200">
            <div class="max-w-3xl mx-auto px-4">
                <div class="mb-12 text-center">
                    <h2 class="text-2xl font-bold text-slate-900 tracking-tight mb-4">Questions sur la garde de vos enfants ?</h2>
                    <p class="text-slate-600">Protégez leur avenir avec un avocat expert.</p>
                </div>
                <ContactForm />
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
useLocalSeo(
  'Avocat Garde d\'Enfant Genève | Autorité Parentale – Clegal Avocats',
  'Avocat garde d\'enfant à Genève. Garde alternée, droit de visite, autorité parentale. Défense de l\'intérêt de l\'enfant. 1er RDV à 155.-. Clegal Avocats.',
  {
    type: 'LegalService',
    priceRange: 'Dès CHF 155.-',
    breadcrumbs: [
      { name: 'Droit de la Famille', url: 'https://clegal-avocats.ch/droit-famille' },
      { name: 'Avocat Garde d\'Enfant', url: 'https://clegal-avocats.ch/droit-famille/avocat-garde-enfant' }
    ]
  }
)
</script>
