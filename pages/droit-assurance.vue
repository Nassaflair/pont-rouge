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
                            <img src="/images/landing_hero_optimized.jpg" loading="lazy" width="800" height="600" alt="Avocat Assurance Genève"
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
                        <h3 class="text-xl font-bold text-slate-900 mb-4">Connaissance approfondie du système juridique local</h3>
                        <p class="text-slate-600 leading-relaxed">
                            Un avocat spécialisé en droit des assurances à Genève possède une connaissance approfondie des procédures et des spécificités du <strong>Tribunal de première instance de Genève</strong>, situé à la Place de l'Athénée. Cette expertise locale est cruciale pour naviguer efficacement dans le système judiciaire et anticiper les décisions potentielles des juges.
                        </p>
                    </div>

                    <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                        <div class="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900">
                            <i data-lucide="users" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-4">Avantages d'un avocat local dans les litiges d'assurance</h3>
                        <p class="text-slate-600 leading-relaxed">
                            Choisir un avocat local permet de bénéficier d'une représentation juridique qui comprend les nuances régionales, y compris les pratiques spécifiques de la <strong>Chambre des assurances sociales du Tribunal cantonal</strong>. Cela augmente significativement les chances de succès dans les litiges d'assurance.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Process Section -->
        <section class="py-20 bg-white border-b border-slate-100 overflow-hidden">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-3xl mx-auto mb-16">
                    <h2 class="text-3xl font-bold tracking-tight text-slate-900 mb-4">La Procédure de Gestion des Litiges d'Assurance à Genève (Étape par Étape)</h2>
                    <p class="text-slate-500 font-medium tracking-wide uppercase text-sm">Gestion des Litiges</p>
                </div>

                <div class="relative">
                    <div class="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>
                    <div class="grid md:grid-cols-5 gap-4 relative z-10">
                        <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                            <div class="w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold mb-3 text-sm">1</div>
                            <h4 class="text-sm font-bold text-slate-900 mb-2">Première Consultation</h4>
                            <p class="text-xs text-slate-600">Évaluation des détails du litige et préparation de la stratégie de défense basée sur la <strong>LPGA</strong> ou la <strong>LAI</strong>.</p>
                        </div>
                        <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                            <div class="w-8 h-8 bg-white text-slate-900 border-2 border-slate-900 rounded-full flex items-center justify-center font-bold mb-3 text-sm">2</div>
                            <h4 class="text-sm font-bold text-slate-900 mb-2">Rédaction de l'opposition</h4>
                            <p class="text-xs text-slate-600">Exposition précise des faits auprès de l'institution concernée pour éviter une procédure longue.</p>
                        </div>
                        <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                            <div class="w-8 h-8 bg-white text-slate-900 border-2 border-slate-900 rounded-full flex items-center justify-center font-bold mb-3 text-sm">3</div>
                            <h4 class="text-sm font-bold text-slate-900 mb-2">Phase de Conciliation</h4>
                            <p class="text-xs text-slate-600">Tentative d'accord amiable sous la supervision d'un conciliateur du tribunal.</p>
                        </div>
                         <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                            <div class="w-8 h-8 bg-white text-slate-900 border-2 border-slate-900 rounded-full flex items-center justify-center font-bold mb-3 text-sm">4</div>
                            <h4 class="text-sm font-bold text-slate-900 mb-2">Procédure Judiciaire</h4>
                            <p class="text-xs text-slate-600">Défense des droits du client devant le tribunal si la conciliation échoue.</p>
                        </div>
                        <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                            <div class="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold mb-3 text-sm">5</div>
                            <h4 class="text-sm font-bold text-slate-900 mb-2">Exécution du Jugement</h4>
                            <p class="text-xs text-slate-600">Obtention de ce qui est dû légalement ou recours contre la décision.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Key Issues (Enjeux Clés) -->
        <section class="py-20 bg-slate-50 border-b border-slate-200">
             <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="mb-16 text-center max-w-3xl mx-auto">
                    <h2 class="text-3xl font-bold tracking-tight text-slate-900 mb-4">Enjeux Clés (Thématiques locales)</h2>
                    <p class="text-lg text-slate-600">Maîtriser les spécificités genevoises.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                     <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                         <div class="h-10 w-10 bg-red-50 rounded-xl flex items-center justify-center mb-4 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="file-text" class="w-5 h-5"></i>
                        </div>
                        <h3 class="text-lg font-bold text-slate-900 mb-2">Comprendre les Polices Complexes</h3>
                        <p class="text-slate-600 text-sm leading-relaxed">
                            Déchiffrer et contester les clauses complexes souvent présentes dans les contrats d'assurance.
                        </p>
                    </div>

                    <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                         <div class="h-10 w-10 bg-red-50 rounded-xl flex items-center justify-center mb-4 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="alert-triangle" class="w-5 h-5"></i>
                        </div>
                        <h3 class="text-lg font-bold text-slate-900 mb-2">Litiges Fréquents</h3>
                        <p class="text-slate-600 text-sm leading-relaxed">
                            Désaccords sur la couverture des sinistres et refus de paiement des indemnisations.
                        </p>
                    </div>

                    <div class="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                         <div class="h-10 w-10 bg-red-50 rounded-xl flex items-center justify-center mb-4 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="landmark" class="w-5 h-5"></i>
                        </div>
                        <h3 class="text-lg font-bold text-slate-900 mb-2">Impact des Lois Locales</h3>
                        <p class="text-slate-600 text-sm leading-relaxed">
                            La connaissance des pratiques de la <strong>Chambre des assurances sociales</strong> est essentielle.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Legal Framework -->
        <section id="features" class="py-20 bg-white border-t border-slate-100">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="mb-16 text-center max-w-3xl mx-auto">
                    <h2 class="text-3xl font-bold tracking-tight text-slate-900 mb-4">Le Cadre Légal (Articles Spécifiques)</h2>
                    <p class="text-lg text-slate-600">LPGA et LAI.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="book-open" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Loi sur la partie générale (LPGA)</h3>
                        <ul class="space-y-2 text-slate-600 text-sm">
                            <li><strong>Article 3 LPGA</strong> : Définition de la maladie.</li>
                            <li><strong>Article 4 LPGA</strong> : Définition de l'accident.</li>
                        </ul>
                    </div>

                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="file-text" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Loi sur l'assurance-invalidité (LAI)</h3>
                        <ul class="space-y-2 text-slate-600 text-sm">
                             <li><strong>Article 8 LAI</strong> : Le droit aux prestations.</li>
                             <li><strong>Article 9 al. 2 LAI</strong> : Les conditions d'assurance.</li>
                        </ul>
                    </div>

                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="building" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Réglementations Spécifiques</h3>
                        <p class="text-slate-600 text-sm">
                            Les réglementations locales, telles que celles appliquées par l'<strong>Office cantonal de l'assurance maladie (OCAS)</strong>, sont cruciales pour les litiges d'assurance maladie.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQ -->
        <section id="faq" class="py-16 bg-slate-50 border-t border-slate-200">
            <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h3 class="text-xl font-bold text-slate-900 mb-8 text-center">FAQ (Chiffrée & Réaliste)</h3>
                <div class="space-y-6">
                    <div class="border-b border-slate-200 pb-4">
                        <h4 class="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                            <i data-lucide="help-circle" class="w-5 h-5 text-red-800 mt-0.5 shrink-0"></i>
                            Quel est le délai moyen pour régler un litige d'assurance à Genève ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-7">Le délai moyen pour résoudre un litige d'assurance peut varier de <strong>6 mois à 2 ans</strong>, dépendant de la complexité du cas et de la charge de travail du tribunal.</p>
                    </div>
                    <div class="border-b border-slate-200 pb-4">
                        <h4 class="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                            <i data-lucide="help-circle" class="w-5 h-5 text-red-800 mt-0.5 shrink-0"></i>
                            Quels sont mes droits en tant qu'assuré à Genève ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-7">En tant qu'assuré, vous avez droit à une couverture conforme aux termes de votre contrat d'assurance, et à contester toute décision que vous jugez incorrecte.</p>
                    </div>
                    <div class="pb-4">
                        <h4 class="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                            <i data-lucide="help-circle" class="w-5 h-5 text-red-800 mt-0.5 shrink-0"></i>
                            Comment puis-je contester une décision de mon assureur ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-7">Pour contester une décision, il est recommandé de consulter un avocat spécialisé qui pourra initier une procédure judiciaire en se basant sur les articles appropriés des lois pertinentes.</p>
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
useLocalSeo(
  'Avocat Assurances Genève | Contentieux – Clegal Avocats',
  'Avocat droit des assurances à Genève. Contentieux, indemnisation, assurances sociales et privées. 1er RDV à 155.-. Clegal Avocats.',
  {
    type: 'LegalService',
    priceRange: 'Dès CHF 155.-',
    faq: [
      {
        question: 'Quel est le délai moyen pour régler un litige d\'assurance à Genève ?',
        answer: 'Le délai moyen pour résoudre un litige d\'assurance peut varier de 6 mois à 2 ans, dépendant de la complexité du cas et de la charge de travail du tribunal.'
      },
      {
        question: 'Quels sont mes droits en tant qu\'assuré à Genève ?',
        answer: 'En tant qu\'assuré, vous avez droit à une couverture conforme aux termes de votre contrat d\'assurance, et à contester toute décision que vous jugez incorrecte.'
      },
      {
        question: 'Comment puis-je contester une décision de mon assureur ?',
        answer: 'Pour contester une décision, il est recommandé de consulter un avocat spécialisé qui pourra initier une procédure judiciaire en se basant sur les articles appropriés des lois pertinentes.'
      }
    ],
    breadcrumbs: [{ name: 'Droit des Assurances', url: 'https://clegal-avocats.ch/droit-assurance' }]
  }
)
</script>
