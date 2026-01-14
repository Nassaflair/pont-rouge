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
                            Avocat Garde d'Enfant à Genève<br>
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
                            <NuxtImg format="webp" src="/images/landing_hero.png" alt="Avocat Garde Enfant Genève"
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
                    <h2 class="text-3xl font-bold tracking-tight text-slate-900 mb-4">L'Intérêt Supérieur de l'Enfant</h2>
                    <p class="text-lg text-slate-600">Notre priorité absolue dans chaque dossier.</p>
                </div>
                
                <div class="grid md:grid-cols-2 gap-12 items-center">
                    <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                         <div class="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900">
                            <i data-lucide="landmark" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-4">Tribunal & SPMi</h3>
                        <p class="text-slate-600 leading-relaxed">
                            Nous collaborons avec le **Service de Protection des Mineurs (SPMi)** et plaidons devant la Chambre des Tutelles pour assurer que les décisions prises (garde, domiciliation) respectent le bien-être de vos enfants.
                        </p>
                    </div>

                    <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                        <div class="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900">
                            <i data-lucide="heart" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-4">Garde Alternée</h3>
                        <p class="text-slate-600 leading-relaxed">
                            La **garde alternée** est le modèle privilégié en Suisse (Art 298 CC). Nous vous aidons à mettre en place un calendrier équilibré et viable pour les deux parents.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Service Grid / Key Issues -->
        <section class="py-20 bg-white border-b border-slate-100">
             <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="mb-16 text-center max-w-3xl mx-auto">
                    <h2 class="text-3xl font-bold tracking-tight text-slate-900 mb-4">Vos Droits Parentaux</h2>
                    <p class="text-lg text-slate-600">Questions de garde et d'éducation.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                         <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="users" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Autorité Parentale</h3>
                        <p class="text-slate-600 text-sm leading-relaxed">
                            L'autorité parentale conjointe est la règle (Art 296 CC). Elle implique que les parents décident ensemble des points majeurs (éducation, religion, santé).
                        </p>
                    </div>

                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                         <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="calendar" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Droit de Visite (Relations Personnelles)</h3>
                        <p class="text-slate-600 text-sm leading-relaxed">
                            Le parent qui n'a pas la garde a le droit et le devoir d'entretenir des relations personnelles. Nous fixons ces modalités de manière claire.
                        </p>
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
                            À quel âge l'enfant peut-il choisir ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-7">L'enfant est entendu dès environ 6 ans. Son avis prend plus de poids vers 12 ans, mais le juge décide *in fine* selon son intérêt supérieur.</p>
                     </div>
                    <div class="border-b border-slate-200 pb-4">
                        <h4 class="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                            <i data-lucide="help-circle" class="w-5 h-5 text-red-800 mt-0.5 shrink-0"></i>
                            Puis-je déménager avec mon enfant ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-7">Un déménagement affectant le droit de visite de l'autre parent nécessite son accord ou une décision du tribunal (Art 301a CC).</p>
                    </div>
                </div>
            </div>
        </section>

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
  'Avocat Garde Enfant Genève | Autorité Parentale & Visite',
  'Avocat Expert Garde d\'Enfant à Genève. Garde alternée, autorité parentale, droit de visite. Défense de l\'intérêt de l\'enfant. SPMi et Tribunal.',
  {
    type: 'LegalService',
    priceRange: 'Dès CHF 155.-'
  }
)
</script>
