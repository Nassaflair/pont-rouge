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
                            { name: 'Avocat Divorce', path: '/droit-famille/avocat-divorce' }
                        ]" />

                        <h1 class="text-3xl md:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight mb-6 leading-[1.1] text-balance">
                            Trouver le Meilleur Avocat pour Votre Divorce à Genève<br>
                        </h1>

                        <p class="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                            Conseil juridique expert pour votre procédure de divorce. Nous protégeons vos intérêts et ceux de vos enfants devant le Tribunal de Première Instance.
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
                            <span class="flex items-center gap-1.5"><i data-lucide="check-circle" class="w-4 h-4 text-emerald-600"></i> Divorce Amiable</span>
                            <span class="flex items-center gap-1.5"><i data-lucide="check-circle" class="w-4 h-4 text-emerald-600"></i> Divorce Contentieux</span>
                            <span class="flex items-center gap-1.5"><i data-lucide="check-circle" class="w-4 h-4 text-emerald-600"></i> MPUC</span>
                        </div>
                    </div>

                    <!-- Image Right -->
                    <div class="relative hidden lg:block">
                        <div class="absolute inset-0 bg-red-900/5 rounded-2xl transform translate-x-4 translate-y-4"></div>
                        <div class="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
                            <img src="/images/landing_hero_optimized.jpg" loading="lazy" width="800" height="600" alt="Avocat Divorce Genève"
                                class="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" />
                            <div class="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm border border-slate-200 p-4 rounded-lg shadow-lg max-w-xs">
                                <div class="flex items-center gap-3 mb-2">
                                    <div class="p-2 bg-red-50 rounded-full text-red-900">
                                        <i data-lucide="heart-handshake" class="w-4 h-4"></i>
                                    </div>
                                    <span class="text-xs font-semibold text-slate-900">Droit de la Famille</span>
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
                    <p class="text-lg text-slate-600">Une expertise locale indispensable pour réussir votre procédure.</p>
                </div>
                
                <div class="grid md:grid-cols-2 gap-12 items-center">
                    <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                        <div class="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900">
                            <i data-lucide="landmark" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-4">Connaissance approfondie du système juridique local</h3>
                        <p class="text-slate-600 leading-relaxed">
                            Les avocats spécialisés en divorce à Genève possèdent une connaissance précise des procédures et des juges du <strong>Tribunal de première instance de Genève</strong>, situé à la rue de l'Athénée. Cette expertise locale est cruciale pour naviguer efficacement dans le système juridique complexe de la région.
                        </p>
                    </div>

                    <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                        <div class="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900">
                            <i data-lucide="shield" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-4">Avantages stratégiques de choisir un avocat local</h3>
                        <p class="text-slate-600 leading-relaxed">
                            Travailler avec un avocat genevois permet une meilleure coordination et réactivité lors des comparutions devant le <strong>Tribunal civil</strong>, optimisant ainsi les stratégies légales adaptées aux spécificités locales.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Process Section -->
        <section class="py-20 bg-white border-b border-slate-100 overflow-hidden">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-3xl mx-auto mb-16">
                    <h2 class="text-3xl font-bold tracking-tight text-slate-900 mb-4">La Procédure de Divorce à Genève (Étape par Étape)</h2>
                    <p class="text-slate-500 font-medium tracking-wide uppercase text-sm">Les Étapes Clés</p>
                </div>

                <div class="relative">
                    <div class="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>
                    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 max-w-6xl mx-auto">
                        <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                            <div class="w-9 h-9 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold mb-3 text-sm">1</div>
                            <h4 class="text-base font-bold text-slate-900 mb-2">Première Consultation</h4>
                            <p class="text-xs text-slate-600">Évaluation de votre cas et préparation de la documentation selon l'<strong>Article 111 CC</strong> ou l'<strong>article 114 CC</strong>.</p>
                        </div>
                        <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                            <div class="w-9 h-9 bg-white text-slate-900 border-2 border-slate-900 rounded-full flex items-center justify-center font-bold mb-3 text-sm">2</div>
                            <h4 class="text-base font-bold text-slate-900 mb-2">Dépôt de la Demande</h4>
                            <p class="text-xs text-slate-600">Dépôt officiel au <strong>Tribunal de première instance de Genève</strong> conformément au Code de procédure civile.</p>
                        </div>
                        <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                            <div class="w-9 h-9 bg-white text-slate-900 border-2 border-slate-900 rounded-full flex items-center justify-center font-bold mb-3 text-sm">3</div>
                            <h4 class="text-base font-bold text-slate-900 mb-2">Phase de Conciliation</h4>
                            <p class="text-xs text-slate-600">Tentative de réconciliation ou de séparation amiable prévue par le <strong>Code de procédure civile (CPC)</strong>.</p>
                        </div>
                        <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                            <div class="w-9 h-9 bg-red-900 text-white rounded-full flex items-center justify-center font-bold mb-3 text-sm">4</div>
                            <h4 class="text-base font-bold text-slate-900 mb-2">Jugement de Divorce</h4>
                            <p class="text-xs text-slate-600">Si la conciliation échoue, la procédure suit sa voie et le juge tranche le litige.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Service Grid / Key Issues -->
        <section class="py-20 bg-slate-50 border-b border-slate-200">
             <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="mb-16 text-center max-w-3xl mx-auto">
                    <h2 class="text-3xl font-bold tracking-tight text-slate-900 mb-4">Enjeux Clés (Thématiques locales)</h2>
                    <p class="text-lg text-slate-600">Garde des enfants, patrimoine et pensions.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                         <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="coins" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Division des Biens et Pensions Alimentaires</h3>
                        <p class="text-slate-600 text-sm leading-relaxed">
                            Dans le régime ordinaire, les biens sont divisés en acquêts et en biens propres. Seuls les acquêts sont partagés. S'agissant de la pension alimentaire, on parle de contribution d'entretien et elle est prononcée selon la capacité financière de chaque époux.
                        </p>
                    </div>

                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                         <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="baby" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Garde des Enfants et Droits de Visite</h3>
                        <p class="text-slate-600 text-sm leading-relaxed">
                            Les décisions concernant la garde des enfants sont prises en tenant compte de l'<strong>intérêt supérieur de l'enfant</strong>, qui ne saurait s'effacer devant l'intérêt des parents.
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
                    <p class="text-lg text-slate-600">Articles Pertinents du Code Civil (CC).</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="book-open" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Articles 111 & 114 CC</h3>
                        <ul class="space-y-2 text-slate-600 text-sm">
                            <li><strong>Article 111 CC</strong> : Divorce avec accord complet.</li>
                            <li><strong>Article 114 CC</strong> : Divorce sur demande unilatérale.</li>
                        </ul>
                    </div>

                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="scale" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Articles 276 & 163 CC</h3>
                        <ul class="space-y-2 text-slate-600 text-sm">
                            <li><strong>Article 276 CC</strong> : Obligation d'entretien des pères et mères.</li>
                             <li><strong>Article 163 CC</strong> : Entretien financier pendant et après le divorce.</li>
                        </ul>
                    </div>
                     <div class="md:col-span-2 bg-slate-50 rounded-2xl p-6 border border-slate-200">
                        <h4 class="font-bold text-slate-900 mb-2">Implications Légales et Droits des Parties</h4>
                        <p class="text-sm text-slate-600">Les droits et obligations de chaque partie, pendant et après le divorce, sont régis par les articles mentionnés, assurant une protection équitable des intérêts de tous les individus impliqués.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQ -->
        <section id="faq" class="py-16 bg-slate-50 border-t border-slate-100">
            <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h3 class="text-xl font-bold text-slate-900 mb-8 text-center">FAQ Divorce (Chiffrée & Réaliste)</h3>
                <div class="space-y-6">
                    <div class="border-b border-slate-200 pb-4">
                        <h4 class="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                            <i data-lucide="help-circle" class="w-5 h-5 text-red-800 mt-0.5 shrink-0"></i>
                            Quel est le coût moyen d'un divorce à Genève ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-7">Les frais légaux pour un divorce à Genève varient généralement entre <strong>CHF 3,000 et CHF 5,000</strong>, selon la complexité du cas mais des arrangements de paiement sont possibles.</p>
                    </div>
                    <div class="border-b border-slate-200 pb-4">
                        <h4 class="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                            <i data-lucide="help-circle" class="w-5 h-5 text-red-800 mt-0.5 shrink-0"></i>
                            Combien de temps dure généralement une procédure de divorce à Genève ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-7">La durée d'une procédure de divorce à Genève peut varier de <strong>6 mois à 2 ans</strong>, en fonction de la complexité des enjeux et de la charge de travail du tribunal.</p>
                    </div>
                    <div class="border-b border-slate-200 pb-4">
                         <h4 class="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                            <i data-lucide="help-circle" class="w-5 h-5 text-red-800 mt-0.5 shrink-0"></i>
                             Puis-je demander une pension alimentaire pour mes enfants ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-7">Oui, conformément à l'<strong>Article 276 CC</strong>, vous pouvez demander une pension alimentaire pour couvrir les besoins de vos enfants.</p>
                    </div>
                     <div class="pb-4">
                         <h4 class="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                            <i data-lucide="help-circle" class="w-5 h-5 text-red-800 mt-0.5 shrink-0"></i>
                             Comment est divisé le patrimoine familial ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-7">Il faut commencer par répartir les biens entre les acquêts et les biens propres. Seuls les acquêts sont divisés.</p>
                    </div>
                </div>
            </div>
        </section>


        <!-- Related Services -->
        <SiloLinks silo="famille" currentPath="/droit-famille/avocat-divorce" />

        <!-- Form Section -->
        <section id="formulaire" class="py-20 bg-white border-t border-slate-200">
            <div class="max-w-3xl mx-auto px-4">
                <div class="mb-12 text-center">
                    <h2 class="text-2xl font-bold text-slate-900 tracking-tight mb-4">Besoin d'un avocat pour votre divorce ?</h2>
                    <p class="text-slate-600">Nous défendons vos droits avec empathie et fermeté.</p>
                </div>
                <ContactForm />
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
useLocalSeo(
  'Avocat Divorce Genève | Tribunal & Pension | Clegal',
  'Avocat Spécialiste Divorce à Genève. Procédure amiable (Art 111 CC) ou unilatérale (Art 114 CC). Garde d\'enfants, pension alimentaire et partage des biens.',
  {
    type: 'LegalService',
    priceRange: 'Dès CHF 155.-',
    faq: [
      {
        question: 'Quel est le coût moyen d\'un divorce à Genève ?',
        answer: 'Les frais légaux pour un divorce à Genève varient généralement entre CHF 3,000 et CHF 5,000, selon la complexité du cas.'
      },
      {
        question: 'Combien de temps dure généralement une procédure de divorce à Genève ?',
        answer: 'La durée d\'une procédure de divorce à Genève peut varier de 6 mois à 2 ans, en fonction de la complexité des enjeux et de la charge de travail du tribunal.'
      },
      {
        question: 'Puis-je demander une pension alimentaire pour mes enfants ?',
        answer: 'Oui, conformément à l\'Article 276 CC, vous pouvez demander une pension alimentaire pour couvrir les besoins de vos enfants.'
      }
    ]
  }
)
</script>
