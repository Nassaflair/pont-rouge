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
                            Trouvez Votre Expert en Droit Administratif à Genève<br>
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
                            <img src="/images/landing_hero_optimized.jpg" loading="lazy" width="800" height="600" alt="Avocat Administratif Genève"
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
                        <h3 class="text-xl font-bold text-slate-900 mb-4">Connaissance approfondie des juridictions locales</h3>
                        <p class="text-slate-600 leading-relaxed">
                            Un avocat spécialisé en droit administratif à Genève possède une connaissance précise des procédures et des attentes spécifiques des tribunaux locaux, tels que le <strong>Tribunal administratif de première instance de Genève</strong>, situé à la Place du Bourg-de-Four. Cette expertise est cruciale pour naviguer efficacement dans le système juridique complexe et optimiser les chances de succès de votre dossier.
                        </p>
                    </div>

                    <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                        <div class="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900">
                            <i data-lucide="scale" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-4">Avantages d'un spécialiste local en droit administratif</h3>
                        <p class="text-slate-600 leading-relaxed">
                            Engager un avocat local est essentiel car il comprend les nuances des réglementations administratives spécifiques à Genève. Il a également l'avantage de connaître les tendances décisionnelles des juges de la <strong>Cour de justice de Genève, Chambre administrative</strong>, ce qui peut influencer positivement le résultat des affaires administratives.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Procedure Conciliation -->
        <section class="py-20 bg-white border-b border-slate-100 overflow-hidden">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-3xl mx-auto mb-16">
                    <h2 class="text-3xl font-bold tracking-tight text-slate-900 mb-4">La Procédure de Conciliation à Genève (Étape par Étape)</h2>
                    <p class="text-slate-500 font-medium tracking-wide uppercase text-sm">Résolution amiable</p>
                </div>

                <div class="relative">
                    <div class="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>
                    <div class="grid md:grid-cols-3 gap-8 relative z-10">
                        <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                            <div class="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold mb-4">1</div>
                            <h4 class="text-lg font-bold text-slate-900 mb-3">Préparation et dépôt</h4>
                            <p class="text-sm text-slate-600">Collecte des documents et rédaction de la demande de conciliation, déposée auprès du <strong>Tribunal administratif de première instance</strong>. Précision cruciale pour éviter tout retard.</p>
                        </div>
                        <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                            <div class="w-10 h-10 bg-white text-slate-900 border-2 border-slate-900 rounded-full flex items-center justify-center font-bold mb-4">2</div>
                            <h4 class="text-lg font-bold text-slate-900 mb-3">La séance de conciliation</h4>
                            <p class="text-sm text-slate-600">Tenue Place du Bourg-de-Four. Opportunité pour les parties de parvenir à un accord avant un procès complet, économisant temps et ressources.</p>
                        </div>
                        <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                            <div class="w-10 h-10 bg-red-900 text-white rounded-full flex items-center justify-center font-bold mb-4">3</div>
                            <h4 class="text-lg font-bold text-slate-900 mb-3">Décisions et suites</h4>
                            <p class="text-sm text-slate-600">Si accord : ratification contraignante. Sinon : affaire portée devant la <strong>Cour de justice de Genève, Chambre administrative</strong>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Procedure Prud'hommes -->
        <section class="py-20 bg-slate-50 border-b border-slate-200">
             <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-3xl mx-auto mb-16">
                    <h2 class="text-3xl font-bold tracking-tight text-slate-900 mb-4">La Procédure Prud'hommes à Genève (Étape par Étape)</h2>
                    <p class="text-slate-500 font-medium tracking-wide uppercase text-sm">Secteur Public</p>
                </div>

                <div class="grid md:grid-cols-3 gap-8">
                     <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <div class="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold mb-4">1</div>
                        <h4 class="text-lg font-bold text-slate-900 mb-3">Introduction</h4>
                        <p class="text-sm text-slate-600">Traitement des conflits de travail du secteur public selon les <strong>Art 335-337 CO</strong>. Compréhension de vos droits et obligations.</p>
                    </div>
                    <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <div class="w-10 h-10 bg-white text-slate-900 border-2 border-slate-900 rounded-full flex items-center justify-center font-bold mb-4">2</div>
                        <h4 class="text-lg font-bold text-slate-900 mb-3">Déroulement de l'audience</h4>
                        <p class="text-sm text-slate-600">Audience au <strong>Tribunal des Prud'hommes</strong> à Genève. Présentation des faits et défense des droits du client conformément à la loi.</p>
                    </div>
                    <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <div class="w-10 h-10 bg-red-900 text-white rounded-full flex items-center justify-center font-bold mb-4">3</div>
                        <h4 class="text-lg font-bold text-slate-900 mb-3">Jugement et recours</h4>
                        <p class="text-sm text-slate-600">Jugement rendu par le tribunal. Les recours sont traités par la <strong>Cour de justice de Genève, Chambre administrative</strong>.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Procedure Urbanisme -->
        <section class="py-20 bg-white border-b border-slate-100">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-3xl mx-auto mb-16">
                    <h2 class="text-3xl font-bold tracking-tight text-slate-900 mb-4">La Procédure d'Urbanisme à Genève (Étape par Étape)</h2>
                    <p class="text-slate-500 font-medium tracking-wide uppercase text-sm">Permis de Construire</p>
                </div>

                <div class="grid md:grid-cols-3 gap-8">
                    <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <div class="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold mb-4">1</div>
                        <h4 class="text-lg font-bold text-slate-900 mb-3">Dépôt du dossier</h4>
                        <p class="text-sm text-slate-600">Dépôt à l'<strong>Office de l'urbanisme de Genève</strong>. Conformité stricte aux réglementations locales exigée.</p>
                    </div>
                    <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <div class="w-10 h-10 bg-white text-slate-900 border-2 border-slate-900 rounded-full flex items-center justify-center font-bold mb-4">2</div>
                        <h4 class="text-lg font-bold text-slate-900 mb-3">Examen et approbation</h4>
                        <p class="text-sm text-slate-600">L'Office examine et peut demander des modifications. L'avocat aide à ajuster les plans pour répondre aux exigences légales.</p>
                    </div>
                    <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <div class="w-10 h-10 bg-red-900 text-white rounded-full flex items-center justify-center font-bold mb-4">3</div>
                        <h4 class="text-lg font-bold text-slate-900 mb-3">Contestations</h4>
                        <p class="text-sm text-slate-600">Représentation devant le <strong>Conseil d'État de Genève</strong> ou la <strong>Cour de justice, Chambre administrative</strong> pour défendre le projet ou contester les décisions.</p>
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

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                         <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="building" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Réglementations spécifiques à Genève</h3>
                        <p class="text-slate-600 text-sm leading-relaxed">
                            Connaître les réglementations locales est crucial pour tout projet de construction ou de développement à Genève.
                        </p>
                    </div>

                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                         <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="alert-triangle" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Défis dans les procédures administratives</h3>
                        <p class="text-slate-600 text-sm leading-relaxed">
                            Les défis incluent la navigation dans un système complexe et la compréhension des exigences spécifiques des autorités locales.
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
                    <p class="text-lg text-slate-600">Code Civil (CC) et Code des Obligations (CO).</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="book-open" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Code Civil (CC)</h3>
                        <p class="text-slate-600 text-sm">Les articles du CC sont essentiels pour comprendre les droits et obligations en matière de propriété et aux biens à Genève.</p>
                    </div>

                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="scale" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Code des Obligations (CO)</h3>
                        <p class="text-slate-600 text-sm">Les articles du CO fournissent le cadre légal pour les contrats administratifs, essentiels dans les procédures de droit administratif.</p>
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
                            Quel est le délai moyen d'une procédure de conciliation à Genève ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-7">Le délai moyen est généralement de 3 à 6 mois, selon la complexité du cas.</p>
                    </div>
                    <div class="border-b border-slate-200 pb-4">
                        <h4 class="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                            <i data-lucide="help-circle" class="w-5 h-5 text-red-800 mt-0.5 shrink-0"></i>
                            Comment contester une décision d'urbanisme ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-7">Pour contester, il faut déposer un recours auprès du <strong>Conseil d'État de Genève</strong> dans un délai de 30 jours suivant la notification de la décision.</p>
                    </div>
                    <div class="pb-4">
                        <h4 class="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                            <i data-lucide="help-circle" class="w-5 h-5 text-red-800 mt-0.5 shrink-0"></i>
                            Quels sont mes droits en tant qu'employé du secteur public à Genève ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-7">Les droits sont régis par les <strong>Art 335-337 CO</strong>, qui détaillent les conditions de travail et de licenciement.</p>
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
useLocalSeo(
  'Avocat Droit Administratif Genève | Recours – Clegal Avocats',
  'Avocat droit administratif à Genève. Permis de construire, recours TAPI, expropriation, urbanisme. Défense face à l\'État. Clegal Avocats.',
  {
    type: 'LegalService',
    priceRange: 'Dès CHF 155.-',
    faq: [
      {
        question: 'Quel est le délai moyen d\'une procédure de conciliation à Genève ?',
        answer: 'Le délai moyen est généralement de 3 à 6 mois, selon la complexité du cas.'
      },
      {
        question: 'Comment contester une décision d\'urbanisme ?',
        answer: 'Pour contester, il faut déposer un recours auprès du Conseil d\'État de Genève dans un délai de 30 jours suivant la notification de la décision.'
      },
      {
        question: 'Quels sont mes droits en tant qu\'employé du secteur public à Genève ?',
        answer: 'Les droits sont régis par les Art 335-337 CO, qui détaillent les conditions de travail et de licenciement.'
      }
    ],
    breadcrumbs: [{ name: 'Droit Administratif', url: 'https://clegal-avocats.ch/droit-administratif' }]
  }
)
</script>
