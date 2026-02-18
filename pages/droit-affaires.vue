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
                            { name: 'Droit des Affaires', path: '/droit-affaires' }
                        ]" />

                        <h1
                            class="text-3xl md:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight mb-6 leading-[1.1] text-balance">
                            Avocat Droit des Affaires et Sociétés à Genève<br>
                        </h1>

                        <p class="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                            Conseil stratégique pour PME et entrepreneurs. De la création de société aux litiges commerciaux complexes, nous défendons vos intérêts devant le Tribunal de première instance.
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
                                    class="w-4 h-4 text-emerald-600"></i> Litiges Commerciaux</span>
                            <span class="flex items-center gap-1.5"><i data-lucide="check-circle"
                                    class="w-4 h-4 text-emerald-600"></i> Contrats et Statuts</span>
                            <span class="flex items-center gap-1.5"><i data-lucide="check-circle"
                                    class="w-4 h-4 text-emerald-600"></i> Recouvrement</span>
                        </div>
                    </div>

                    <!-- Image Right -->
                    <div class="relative hidden lg:block">
                        <div class="absolute inset-0 bg-red-900/5 rounded-2xl transform translate-x-4 translate-y-4">
                        </div>
                        <div class="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
                            <img src="/images/landing_hero_optimized.jpg" loading="lazy" width="800" height="600" alt="Avocat Affaires Genève"
                                class="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" />
                            <div
                                class="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm border border-slate-200 p-4 rounded-lg shadow-lg max-w-xs">
                                <div class="flex items-center gap-3 mb-2">
                                    <div class="p-2 bg-red-50 rounded-full text-red-900">
                                        <i data-lucide="briefcase" class="w-4 h-4"></i>
                                    </div>
                                    <span class="text-xs font-semibold text-slate-900">Expertise Tribunal</span>
                                </div>
                                <p class="text-[11px] leading-snug text-slate-500">Défense des entreprises Rue de l'Athénée.</p>
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
                    <p class="text-lg text-slate-600">Une stratégie juridique ancrée dans le tissu économique local.</p>
                </div>
                
                <div class="grid md:grid-cols-2 gap-12 items-center">
                    <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                        <div class="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900">
                            <i data-lucide="landmark" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-4">Connaissance du Tribunal de première instance</h3>
                        <p class="text-slate-600 leading-relaxed">
                            La connaissance spécifique du <strong>Tribunal de première instance de Genève</strong>, situé à la <strong class="text-slate-900">Rue de l'Athénée</strong>, est essentielle. Nous comprenons les nuances des jugements rendus par les magistrats genevois et adaptons notre stratégie contentieuse en conséquence.
                        </p>
                    </div>

                    <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                        <div class="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900">
                            <i data-lucide="trending-up" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-4">Approche pragmatique et négociation</h3>
                        <p class="text-slate-600 leading-relaxed">
                            Un bon avocat d'affaires sait que le procès n'est pas toujours la solution. Nous tentons autant que possible d'aboutir à des accords extra-judiciaires avantageux. Mais si la négociation échoue, nous nous battons avec vigueur devant les autorités judiciaires genevoises.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Process Section: La Procédure -->
        <section class="py-20 bg-white border-b border-slate-100 overflow-hidden">
             <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-3xl mx-auto mb-16">
                    <h2 class="text-3xl font-bold tracking-tight text-slate-900 mb-4">La Procédure de Conciliation Commerciale à Genève</h2>
                    <p class="text-slate-500 font-medium tracking-wide uppercase text-sm">Étape par Étape</p>
                </div>

                <div class="relative">
                    <!-- Connector Line (Desktop) -->
                    <div class="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>

                    <div class="grid md:grid-cols-3 gap-8 relative z-10">
                        <!-- Step 1 -->
                        <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative group hover:-translate-y-1 transition-transform duration-300">
                            <div class="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold mb-4 mx-auto md:mx-0 shadow-lg shadow-slate-900/20">1</div>
                            <h4 class="text-lg font-bold text-slate-900 mb-3">Dépôt de la Demande</h4>
                            <p class="text-sm text-slate-600 leading-relaxed">
                                Saisie du Tribunal de première instance (Code de Procédure Civile). Nous rédigeons une requête précise exposant vos prétentions.
                            </p>
                        </div>

                        <!-- Step 2 -->
                        <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative group hover:-translate-y-1 transition-transform duration-300">
                            <div class="w-10 h-10 bg-white text-slate-900 border-2 border-slate-900 rounded-full flex items-center justify-center font-bold mb-4 mx-auto md:mx-0">2</div>
                            <h4 class="text-lg font-bold text-slate-900 mb-3">Séance de Conciliation</h4>
                            <p class="text-sm text-slate-600 leading-relaxed">
                                Étape obligatoire. Les parties tentent de parvenir à un accord confidentiel sous l'égide du juge, économisant ainsi temps et ressources.
                            </p>
                        </div>

                        <!-- Step 3 -->
                        <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative group hover:-translate-y-1 transition-transform duration-300">
                            <div class="w-10 h-10 bg-red-900 text-white rounded-full flex items-center justify-center font-bold mb-4 mx-auto md:mx-0 shadow-lg shadow-red-900/20">3</div>
                            <h4 class="text-lg font-bold text-slate-900 mb-3">Le Procès (Autorisation de procéder)</h4>
                            <p class="text-sm text-slate-600 leading-relaxed">
                                Si la conciliation échoue, une autorisation de procéder est délivrée. Le demandeur dispose alors d'un délai pour déposer sa demande motivée au fond.
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
                    <p class="text-lg text-slate-600">Conformité et défense selon le Code des Obligations.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <!-- 1. Droit des Sociétés -->
                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="building-2" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Structures Sociétaires (SA, SARL)</h3>
                        <p class="text-slate-600 leading-relaxed mb-4">
                            Création et gestion de sociétés selon le Code des Obligations : Société Anonyme (<strong>Art. 620 et ss CO</strong>) et SARL (<strong>Art. 772 et ss CO</strong>). Nous assurons vos obligations légales.
                        </p>
                    </div>

                    <!-- 2. Litiges Commerciaux -->
                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="gavel" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Litiges & Contrats Commerciaux</h3>
                        <p class="text-slate-600 leading-relaxed mb-4">
                            Les régulations locales à Genève peuvent être complexes. Nous intervenons dans les conflits contractuels (partenariats, fournisseurs) et la responsabilité des organes dirigeants.
                        </p>
                    </div>

                    <!-- 3. Conformité -->
                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="shield-check" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Conformité Réglementaire</h3>
                        <p class="text-slate-600 leading-relaxed overflow-hidden">
                            Les entreprises à Genève font face à des défis réglementaires spécifiques. La conformité est indispensable pour éviter les sanctions et assurer le succès commercial pérenne.
                        </p>
                    </div>

                    <!-- 4. Cadre Légal Specifique -->
                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="book-open" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Code des Obligations (CO)</h3>
                        <ul class="space-y-3">
                            <li class="flex items-start gap-2 text-sm text-slate-600">
                                <span class="font-bold text-slate-900 whitespace-nowrap">Art. 530 CO :</span>
                                <span>Société Simple (souvent la forme par défaut des partenariats).</span>
                            </li>
                            <li class="flex items-start gap-2 text-sm text-slate-600">
                                <span class="font-bold text-slate-900 whitespace-nowrap">Droit des Contrats :</span>
                                <span>Règles générales et spécifiques applicables aux affaires.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQ -->
        <section id="faq" class="py-16 bg-white border-t border-slate-100">
            <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h3 class="text-xl font-bold text-slate-900 mb-8 text-center">FAQ (Droit des Affaires)</h3>
                <div class="space-y-6">
                    <div class="border-b border-slate-100 pb-4">
                        <h4 class="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                            <i data-lucide="help-circle" class="w-5 h-5 text-red-800 mt-0.5 shrink-0"></i>
                            Quels sont les coûts d'un avocat d'affaires ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-7">Nos honoraires horaires sont transparents : entre <strong>CHF 350.- et 450.- / heure</strong>. Pour des mandats forfaits, comptez généralement entre CHF 3'000 et 5'000 selon la complexité du cas.</p>
                    </div>
                    <div class="border-b border-slate-100 pb-4">
                        <h4 class="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                            <i data-lucide="help-circle" class="w-5 h-5 text-red-800 mt-0.5 shrink-0"></i>
                            Comment prévenir les litiges commerciaux ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-7">La prévention passe par des contrats solides (Actionnaires, CGV, Travail). Nous structurons vos accords en amont pour minimiser les risques, grâce à notre connaissance du tissu économique régional.</p>
                    </div>
                    <div class="pb-4">
                        <h4 class="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                            <i data-lucide="help-circle" class="w-5 h-5 text-red-800 mt-0.5 shrink-0"></i>
                            Pourquoi choisir un avocat local à Genève ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-7">Pour la défense efficace de vos intérêts. Comprendre les spécificités du Tribunal de première instance de Genève est un avantage compétitif majeur lors d'un contentieux.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Use Form Component -->
        <section id="formulaire" class="py-20 bg-slate-50 border-t border-slate-200">
            <div class="max-w-3xl mx-auto px-4">
                <div class="mb-12 text-center">
                    <h2 class="text-2xl font-bold text-slate-900 tracking-tight mb-4">Protégez votre entreprise</h2>
                    <p class="text-slate-600">Des conseils juridiques pragmatiques pour entrepreneurs exigeants.</p>
                </div>
                <ContactForm />
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
useLocalSeo(
  'Avocat Droit des Affaires Genève | Entreprises – Clegal Avocats',
  'Avocat droit des affaires à Genève. Conseil aux entreprises, contrats commerciaux, litiges sociétaires. Clegal Avocats.',
  {
    type: 'LegalService',
    priceRange: 'Dès CHF 155.-',
    breadcrumbs: [{ name: 'Droit des Affaires', url: 'https://clegal-avocats.ch/droit-affaires' }]
  }
)
</script>
