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
                            { name: 'Succession', path: '/droit-famille/avocat-succession' }
                        ]" />

                        <h1 class="text-3xl md:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight mb-6 leading-[1.1] text-balance">
                            Avocat Succession Genève - Votre Expert en Droit des Successions<br>
                        </h1>
                        <h2 class="text-xl md:text-2xl text-slate-700 font-medium mb-6">
                            Pour une gestion sereine et efficace de votre héritage
                        </h2>

                        <p class="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                            Organiser une succession peut être complexe. Qu'il s'agisse de rédiger un testament, de contester un héritage ou de gérer un partage difficile, notre expertise vous assure sécurité et apaisement.
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
                            <span class="flex items-center gap-1.5"><i data-lucide="check-circle" class="w-4 h-4 text-emerald-600"></i> Testament & Pacte</span>
                            <span class="flex items-center gap-1.5"><i data-lucide="check-circle" class="w-4 h-4 text-emerald-600"></i> Partage Successoral</span>
                            <span class="flex items-center gap-1.5"><i data-lucide="check-circle" class="w-4 h-4 text-emerald-600"></i> Hérédité</span>
                        </div>
                    </div>

                    <!-- Image Right -->
                    <div class="relative hidden lg:block">
                        <div class="absolute inset-0 bg-red-900/5 rounded-2xl transform translate-x-4 translate-y-4"></div>
                        <div class="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
                            <NuxtImg format="webp" src="/images/landing_hero.png" alt="Avocat Succession Genève"
                                class="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" />
                            <div class="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm border border-slate-200 p-4 rounded-lg shadow-lg max-w-xs">
                                <div class="flex items-center gap-3 mb-2">
                                    <div class="p-2 bg-red-50 rounded-full text-red-900">
                                        <i data-lucide="feather" class="w-4 h-4"></i>
                                    </div>
                                    <span class="text-xs font-semibold text-slate-900">Justice de Paix</span>
                                </div>
                                <p class="text-[11px] leading-snug text-slate-500">Ouverture et liquidation de succession à Genève.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Why Choose Us Section -->
        <section class="py-20 bg-slate-50 border-b border-slate-200">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-3xl mx-auto mb-16">
                    <h2 class="text-3xl font-bold tracking-tight text-slate-900 mb-4">Pourquoi choisir un Avocat à Genève ?</h2>
                    <p class="text-lg text-slate-600">Une expertise locale stratégique pour vos intérêts.</p>
                </div>
                
                <div class="grid md:grid-cols-2 gap-12 items-center">
                    <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                        <div class="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900">
                            <i data-lucide="map-pin" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-4">Connaissance du système juridique local</h3>
                        <p class="text-slate-600 leading-relaxed">
                            La maîtrise des spécificités du <strong>Tribunal de première instance de Genève</strong>, situé à la Rue de l'Athénée, est cruciale. Ce tribunal gère la majorité des litiges civils, y compris les affaires de succession, et nous y intervenons régulièrement.
                        </p>
                    </div>

                    <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                        <div class="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900">
                            <i data-lucide="shield-check" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-4">Avantage stratégique local</h3>
                        <p class="text-slate-600 leading-relaxed">
                            Un avocat genevois connaît les tendances des juges locaux et peut adapter sa stratégie en conséquence. Cela offre un avantage significatif tant en matière de négociation amiable que lors d'un litige contentieux.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Process Section -->
        <section class="py-20 bg-white border-b border-slate-100 overflow-hidden">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-3xl mx-auto mb-16">
                    <h2 class="text-3xl font-bold tracking-tight text-slate-900 mb-4">La Procédure de Succession à Genève (Étape par Étape)</h2>
                    <p class="text-slate-500 font-medium tracking-wide uppercase text-sm">Un accompagnement complet</p>
                </div>

                <div class="relative">
                    <div class="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>
                     <div class="grid md:grid-cols-2 gap-6 relative z-10 max-w-4xl mx-auto">
                        <div class="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                            <div class="w-9 h-9 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold mb-3 text-sm">1</div>
                            <h4 class="text-base font-bold text-slate-900 mb-2">Consultation initiale et examen</h4>
                            <p class="text-sm text-slate-600 leading-relaxed">Collecte des documents nécessaires, analyse du testament éventuel et compréhension précise de l'étendue de la succession.</p>
                        </div>
                        <div class="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                            <div class="w-9 h-9 bg-red-900 text-white rounded-full flex items-center justify-center font-bold mb-3 text-sm">2</div>
                            <h4 class="text-base font-bold text-slate-900 mb-2">Représentation au tribunal</h4>
                            <p class="text-sm text-slate-600 leading-relaxed">En cas de litige, nous défendons vos intérêts devant le <strong>Tribunal de première instance de Genève</strong>, veillant à ce que chaque aspect légal soit scrupuleusement respecté.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Key Issues (Enjeux Clés) Section -->
        <section class="py-20 bg-slate-50 border-b border-slate-200">
             <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="mb-16 text-center max-w-3xl mx-auto">
                    <h2 class="text-3xl font-bold tracking-tight text-slate-900 mb-4">Enjeux Clés et Thématiques Locales</h2>
                    <p class="text-lg text-slate-600">Votre avocat gère la complexité pour vous.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                         <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="globe" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Particularités des successions à Genève</h3>
                        <p class="text-slate-600 text-sm leading-relaxed">
                            Nous gérons spécifiquement les successions incluant des biens situés dans plusieurs cantons ou pays, ce qui nécessite une expertise locale approfondie et un réseau solide.
                        </p>
                    </div>

                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                         <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="briefcase" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Gestion de biens transfrontaliers</h3>
                        <p class="text-slate-600 text-sm leading-relaxed">
                            Compte tenu de la position unique de Genève, nous sommes particulièrement compétents pour traiter les questions d'héritage transfrontalier (comptes à l'étranger, immobilier en France voisine, etc.).
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
                    <p class="text-lg text-slate-600">Les bases juridiques essentielles du Code Civil (CC).</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="book-open" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Article 469 CC</h3>
                        <p class="text-slate-600 text-sm leading-relaxed">
                            <strong>Action en rectification du testament</strong> : Permet de corriger un testament qui contient des erreurs évidentes dues à une erreur, une menace ou un dol.
                        </p>
                    </div>

                     <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="scale" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Article 522 CC</h3>
                        <p class="text-slate-600 text-sm leading-relaxed">
                            <strong>Action en réduction</strong> : Permet aux héritiers réservataires (enfants, conjoint) de récupérer leur part minimale si le défunt a trop donné à des tiers.
                        </p>
                    </div>

                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="gavel" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Articles 539-541 CC</h3>
                        <p class="text-slate-600 text-sm leading-relaxed">
                            <strong>Action en pétition d'hérédité</strong> : Permet à l'héritier légitime de faire reconnaître sa qualité d'héritier contre celui qui détient les biens sans droit.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQ -->
        <section id="faq" class="py-16 bg-slate-50 border-t border-slate-100">
             <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h3 class="text-xl font-bold text-slate-900 mb-8 text-center">FAQ Succession Genève</h3>
                <div class="space-y-6">
                    <div class="border-b border-slate-200 pb-4">
                         <h4 class="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                            <i data-lucide="help-circle" class="w-5 h-5 text-red-800 mt-0.5 shrink-0"></i>
                            Quelles sont les implications fiscales de l'héritage à Genève ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-7">Les implications fiscales varient selon le degré de parenté. À Genève, les héritiers en ligne directe (parents, enfants) et les conjoints sont souvent exonérés, mais une consultation spécifique est recommandée pour les autres cas.</p>
                     </div>
                    <div class="border-b border-slate-200 pb-4">
                        <h4 class="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                            <i data-lucide="help-circle" class="w-5 h-5 text-red-800 mt-0.5 shrink-0"></i>
                            Combien de temps prend le processus de succession à Genève ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-7">Le processus peut prendre de quelques mois à plusieurs années (1 à 3 ans), dépendant fortement de la complexité du dossier et de l'entente entre les héritiers.</p>
                    </div>
                    <div class="border-b border-slate-200 pb-4">
                        <h4 class="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                            <i data-lucide="help-circle" class="w-5 h-5 text-red-800 mt-0.5 shrink-0"></i>
                            Peut-on contester un testament à Genève ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-7">Oui, principalement sur la base des articles <strong>469 ou 470 CC</strong>. C'est le cas si le testateur n'avait plus sa capacité de discernement au moment de la rédaction ou s'il a été forcé.</p>
                    </div>
                </div>
            </div>
        </section>


        <!-- Related Services -->
        <SiloLinks silo="famille" currentPath="/droit-famille/avocat-succession" />

        <!-- Form Section -->
        <section id="formulaire" class="py-20 bg-white border-t border-slate-200">
            <div class="max-w-3xl mx-auto px-4">
                <div class="mb-12 text-center">
                    <h2 class="text-2xl font-bold text-slate-900 tracking-tight mb-4">Besoin d'aide pour une succession ?</h2>
                    <p class="text-slate-600">Nous vous accompagnons avec tact et fermeté.</p>
                </div>
                <ContactForm />
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
useLocalSeo(
  'Avocat Succession Genève | Héritage & Testament | Dès 155.-',
  'Besoin d\'un avocat spécialisé en succession à Genève ? Gestion de testament, partage d\'héritage et litiges. Expertise au Tribunal (Rue de l\'Athénée). 1er RDV : CHF 155.-',
  {
    type: 'LegalService',
    priceRange: 'Dès CHF 155.-'
  }
)
</script>
