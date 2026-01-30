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
                            { name: 'Avocat Séparation', path: '/droit-famille/avocat-separation' }
                        ]" />

                        <h1 class="text-3xl md:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight mb-6 leading-[1.1] text-balance">
                            Trouver le Meilleur Avocat pour Votre Séparation à Genève<br>
                        </h1>

                        <p class="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                            Conseil juridique pour vos Mesures Protectrices de l'Union Conjugale (MPUC). Nous organisons votre séparation devant le Tribunal de Première Instance.
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
                            <span class="flex items-center gap-1.5"><i data-lucide="check-circle" class="w-4 h-4 text-emerald-600"></i> MPUC et Séparation</span>
                            <span class="flex items-center gap-1.5"><i data-lucide="check-circle" class="w-4 h-4 text-emerald-600"></i> Attribution du Logement</span>
                            <span class="flex items-center gap-1.5"><i data-lucide="check-circle" class="w-4 h-4 text-emerald-600"></i> Pension Provisoire</span>
                        </div>
                    </div>

                    <!-- Image Right -->
                    <div class="relative hidden lg:block">
                        <div class="absolute inset-0 bg-red-900/5 rounded-2xl transform translate-x-4 translate-y-4"></div>
                        <div class="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
                            <img src="/images/landing_hero_optimized.jpg" loading="lazy" width="800" height="600" alt="Avocat Séparation Genève"
                                class="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" />
                            <div class="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm border border-slate-200 p-4 rounded-lg shadow-lg max-w-xs">
                                <div class="flex items-center gap-3 mb-2">
                                    <div class="p-2 bg-red-50 rounded-full text-red-900">
                                        <i data-lucide="home" class="w-4 h-4"></i>
                                    </div>
                                    <span class="text-xs font-semibold text-slate-900">Séparation & MPUC</span>
                                </div>
                                <p class="text-[11px] leading-snug text-slate-500">Tribunal de Première Instance, Genève.</p>
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
                    <p class="text-lg text-slate-600">Expertise locale et stratégique pour votre séparation.</p>
                </div>
                
                <div class="grid md:grid-cols-2 gap-12 items-center">
                    <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                         <div class="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900">
                            <i data-lucide="landmark" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-4">Connaissance approfondie du système judiciaire local</h3>
                        <p class="text-slate-600 leading-relaxed">
                            Un avocat localisé à Genève possède une connaissance précise des procédures et des spécificités du <strong>Tribunal de première instance de Genève</strong>, situé à la Rue de l'Athénée. Cette expertise est cruciale car elle permet d'anticiper les décisions des juges et d'adapter la stratégie juridique en conséquence.
                        </p>
                    </div>

                    <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                        <div class="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900">
                            <i data-lucide="book-open" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-4">Avantages d'un spécialiste en droit de la famille</h3>
                        <p class="text-slate-600 leading-relaxed">
                            Choisir un avocat spécialisé en droit de la famille garantit une maîtrise des articles pertinents du <strong>Code Civil Suisse (CC)</strong>, notamment les <strong>articles 175 et 176 CC</strong> qui régit les conditions de la séparation judiciaire, autrement dit les mesures de protection de l'union conjugal.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Process Section -->
        <section class="py-20 bg-white border-b border-slate-100 overflow-hidden">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-3xl mx-auto mb-16">
                    <h2 class="text-3xl font-bold tracking-tight text-slate-900 mb-4">La Procédure de Séparation à Genève (Étape par Étape)</h2>
                    <p class="text-slate-500 font-medium tracking-wide uppercase text-sm">Votre parcours</p>
                </div>

                     <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10 max-w-6xl mx-auto">
                        <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                            <div class="w-9 h-9 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold mb-3 text-sm">1</div>
                            <h4 class="text-base font-bold text-slate-900 mb-2">Consultation initiale et évaluation de votre cas</h4>
                            <p class="text-sm text-slate-600">Lors de la première rencontre, l'avocat évalue votre situation selon les <strong>articles des mesures de protection de l'union conjugal</strong>, qui détaillent les effets juridiques de la séparation, y compris la répartition des biens et la garde des enfants.</p>
                        </div>
                        <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                            <div class="w-9 h-9 bg-white text-slate-900 border-2 border-slate-900 rounded-full flex items-center justify-center font-bold mb-3 text-sm">2</div>
                            <h4 class="text-base font-bold text-slate-900 mb-2">Rédaction et dépôt de la requête de séparation</h4>
                            <p class="text-sm text-slate-600">Votre avocat rédigera la demande de séparation et la déposera au <strong>Tribunal de première instance de Genève</strong>. Cette étape est cruciale pour exposer avec précision les faits de votre cause au Tribunal.</p>
                        </div>
                        <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                            <div class="w-9 h-9 bg-white text-slate-900 border-2 border-slate-900 rounded-full flex items-center justify-center font-bold mb-3 text-sm">3</div>
                            <h4 class="text-base font-bold text-slate-900 mb-2">La phase de conciliation</h4>
                            <p class="text-sm text-slate-600">Avant le jugement, une phase de conciliation est tentée pour parvenir à un accord amiable, conformément au Code de procédure civil qui lie la procédure standard du <strong>Tribunal de première instance</strong>.</p>
                        </div>
                        <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                            <div class="w-9 h-9 bg-white text-slate-900 border-2 border-slate-900 rounded-full flex items-center justify-center font-bold mb-3 text-sm">4</div>
                            <h4 class="text-base font-bold text-slate-900 mb-2">Jugement de séparation et mesures provisionnelles</h4>
                            <p class="text-sm text-slate-600">Si la conciliation échoue, le tribunal procédera au jugement.</p>
                        </div>
                         <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform duration-300 lg:col-span-2 lg:w-1/2 lg:mx-auto">
                            <div class="w-9 h-9 bg-red-900 text-white rounded-full flex items-center justify-center font-bold mb-3 text-sm">5</div>
                            <h4 class="text-base font-bold text-slate-900 mb-2">La finalisation du divorce</h4>
                            <p class="text-sm text-slate-600">Après deux ans de séparation, conformément à l'<strong>article 114 CC</strong>, le divorce peut être finalisé, marquant la dissolution officielle du mariage et la liquidation du régime matrimonial.</p>
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
                            <i data-lucide="home" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Impact de la séparation sur les biens immobiliers</h3>
                        <p class="text-slate-600 text-sm leading-relaxed">
                            La répartition des biens immobiliers liée au régime matrimonial n'a pas lieu dans le cadre de la séparation (MPUC).
                        </p>
                    </div>

                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                         <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="users" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Garde des enfants</h3>
                        <p class="text-slate-600 text-sm leading-relaxed">
                            Le <strong>Tribunal de première instance</strong> joue un rôle clé dans la détermination de la garde des enfants et des droits de visite, en tenant compte de l'intérêt supérieur de l'enfant. Le <strong>SPMi</strong> peut également être amené à intervenir.
                        </p>
                    </div>

                     <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="coins" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Pension alimentaire</h3>
                        <p class="text-slate-600 text-sm leading-relaxed">
                            Les décisions concernant la pension alimentaire sont guidées par les revenus de chacun et l'attribution des tâches durant le mariage.
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
                    <p class="text-lg text-slate-600">Articles du Code Civil Suisse (CC) relatifs à la séparation.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                         <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="book-open" class="w-6 h-6"></i>
                        </div>
                        <h3 class="font-bold text-slate-900 mb-2">Article 175 (CC) - Les conditions de la séparation</h3>
                        <p class="text-sm text-slate-600">Cet article expose les conditions de la séparation judiciaire (mesures de protection de l'union conjugale). En pratique, le <strong>Tribunal de première instance de Genève</strong> ne requiert que la volonté de se séparer des époux.</p>
                    </div>

                     <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                        <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="scale" class="w-6 h-6"></i>
                        </div>
                        <h3 class="font-bold text-slate-900 mb-2">Article 176 (CC) - Les effets de la séparation</h3>
                        <p class="text-sm text-slate-600">Cet article expose les effets de la séparation. L'un des époux pourra notamment réclamer une pension alimentaire (contribution d'entretien), l'attribution du logement familial et l'attribution de la garde des enfants.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQ -->
        <section id="faq" class="py-16 bg-slate-50 border-t border-slate-100">
             <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h3 class="text-xl font-bold text-slate-900 mb-8 text-center">FAQ Séparation Genève (Chiffrée & Réaliste)</h3>
                <div class="space-y-6">
                    <div class="border-b border-slate-200 pb-4">
                         <h4 class="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                            <i data-lucide="help-circle" class="w-5 h-5 text-red-800 mt-0.5 shrink-0"></i>
                            Quel est le coût moyen d'un avocat pour une séparation à Genève ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-7">Les frais juridiques varient généralement entre <strong>CHF 350-450 par heure</strong> ou un forfait de <strong>CHF 3k-5k</strong>, selon la complexité du cas. Chez Clegal - Avocats, nous proposons également l'Assistance judiciaire, des arrangements de paiement et des tarifs préférentiels.</p>
                     </div>
                    <div class="border-b border-slate-200 pb-4">
                        <h4 class="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                            <i data-lucide="help-circle" class="w-5 h-5 text-red-800 mt-0.5 shrink-0"></i>
                            Combien de temps dure généralement une procédure de séparation à Genève ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-7">La durée peut varier de quelques mois à deux ans, dépendant de la complexité des enjeux et de la volonté des parties de parvenir à un accord.</p>
                    </div>
                    <div class="border-b border-slate-200 pb-4">
                        <h4 class="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                            <i data-lucide="help-circle" class="w-5 h-5 text-red-800 mt-0.5 shrink-0"></i>
                            Quels sont mes droits en tant qu'expatrié(e) en matière de séparation à Genève ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-7">Les expatriés sont soumis aux mêmes lois que les résidents suisses, mais des considérations spécifiques peuvent s'appliquer, notamment en ce qui concerne la juridiction et le droit applicable.</p>
                    </div>
                </div>
            </div>
        </section>


        <!-- Related Services -->
        <SiloLinks silo="famille" currentPath="/droit-famille/avocat-separation" />

        <!-- Form Section -->
        <section id="formulaire" class="py-20 bg-white border-t border-slate-200">
            <div class="max-w-3xl mx-auto px-4">
                <div class="mb-12 text-center">
                    <h2 class="text-2xl font-bold text-slate-900 tracking-tight mb-4">Besoin d'avocat pour une séparation ?</h2>
                    <p class="text-slate-600">Nous organisons votre séparation dans le respect de vos droits.</p>
                </div>
                <ContactForm />
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
useLocalSeo(
  'Avocat Séparation Genève | MPUC & Divorce | Clegal',
  'Avocat expert en séparation à Genève. Mesures protectrices (MPUC), attribution du logement, garde des enfants et pension. Tribunal de Première Instance. 1er RDV : CHF 155.-',
  {
    type: 'LegalService',
    priceRange: 'Dès CHF 155.-'
  }
)
</script>
