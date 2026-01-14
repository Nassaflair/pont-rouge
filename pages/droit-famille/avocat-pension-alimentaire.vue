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
                        <Breadcrumb :links="[
                            { name: 'Droit de la Famille', path: '/droit-famille' },
                            { name: 'Pension Alimentaire', path: '/droit-famille/avocat-pension-alimentaire' }
                        ]" />

                        <h1 class="text-3xl md:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight mb-6 leading-[1.1] text-balance">
                            Avocat Pension Alimentaire Genève<br>
                        </h1>

                        <p class="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                            Calcul, fixation et recouvrement des contributions d'entretien. Nous défendons vos droits financiers.
                        </p>

                        <div class="flex flex-col sm:flex-row gap-4 items-start">
                            <a href="#formulaire"
                                class="inline-flex items-center justify-center hover:bg-red-800 shadow-red-900/20 hover:shadow-xl transition-all text-sm font-medium text-white bg-red-900 rounded-md pt-4 pr-8 pb-4 pl-8 shadow-lg w-full sm:w-auto">Prendre rendez-vous (CHF 155.-)</a>
                            <NuxtLink to="/#domaines"
                                class="inline-flex items-center justify-center px-6 py-4 text-sm font-medium text-slate-600 bg-white hover:bg-slate-50 border border-slate-200 rounded-md transition-all w-full sm:w-auto">
                                Nos services
                            </NuxtLink>
                        </div>
                    </div>

                    <div class="relative hidden lg:block">
                         <div class="absolute inset-0 bg-red-900/5 rounded-2xl transform translate-x-4 translate-y-4"></div>
                        <div class="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
                            <NuxtImg format="webp" src="/images/landing_hero.png" alt="Avocat Pension Alimentaire Genève"
                                class="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" />
                            <div class="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm border border-slate-200 p-4 rounded-lg shadow-lg max-w-xs">
                                <div class="flex items-center gap-3 mb-2">
                                    <div class="p-2 bg-red-50 rounded-full text-red-900">
                                        <i data-lucide="coins" class="w-4 h-4"></i>
                                    </div>
                                    <span class="text-xs font-semibold text-slate-900">Contributions</span>
                                </div>
                                <p class="text-[11px] leading-snug text-slate-500">Calcul du Minimum Vital & Surplus.</p>
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
                    <h2 class="text-3xl font-bold tracking-tight text-slate-900 mb-4">Calcul Précis & Défense</h2>
                    <p class="text-lg text-slate-600">Le calcul des pensions est complexe et strict.</p>
                </div>
                
                <div class="grid md:grid-cols-2 gap-12 items-center">
                    <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                         <div class="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900">
                            <i data-lucide="calculator" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-4">Méthode du Minimum Vital</h3>
                        <p class="text-slate-600 leading-relaxed">
                            À Genève, le Tribunal et l'**Office des Poursuites** utilisent la méthode du minimum vital avec répartition de l'excédent. Nous veillons à ce que tous vos revenus et charges soient correctement pris en compte.
                        </p>
                    </div>

                    <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                        <div class="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900">
                            <i data-lucide="file-warning" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-4">Revenu Hypothétique</h3>
                        <p class="text-slate-600 leading-relaxed">
                            Attention à la notion de **revenu hypothétique** : le juge peut vous imputer un revenu que vous *pourriez* gagner. Nous vous défendons contre des exigences irréalistes.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Legal Framework -->
        <section id="features" class="py-20 bg-white border-t border-slate-200">
             <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="mb-16 text-center max-w-3xl mx-auto">
                    <h2 class="text-3xl font-bold tracking-tight text-slate-900 mb-4">Le Cadre Légal</h2>
                    <p class="text-lg text-slate-600">Articles clés du Code Civil.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                         <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="baby" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Article 276 CC</h3>
                        <p class="text-slate-600 text-sm leading-relaxed">
                            L'entretien de l'enfant est prioritaire. Les parents doivent subvenir à ses besoins (entretien convenable) jusqu'à sa majorité ou la fin de sa formation.
                        </p>
                    </div>

                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="user-check" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Article 125 CC</h3>
                        <p class="text-slate-600 text-sm leading-relaxed">
                            Concerne la pension entre ex-époux (contribution post-divorce). Elle dépend de la durée du mariage, du niveau de vie et de la capacité de travail.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQ -->
        <section id="faq" class="py-16 bg-slate-50 border-t border-slate-100">
             <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h3 class="text-xl font-bold text-slate-900 mb-8 text-center">FAQ Pension Alimentaire Genève</h3>
                <div class="space-y-6">
                    <div class="border-b border-slate-200 pb-4">
                         <h4 class="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                            <i data-lucide="help-circle" class="w-5 h-5 text-red-800 mt-0.5 shrink-0"></i>
                            Jusqu'à quel âge doit-on payer ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-7">Jusqu'à 18 ans, ou 25 ans si l'enfant est en formation (apprentissage/études) sérieuse et régulière.</p>
                     </div>
                    <div class="border-b border-slate-200 pb-4">
                        <h4 class="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                            <i data-lucide="help-circle" class="w-5 h-5 text-red-800 mt-0.5 shrink-0"></i>
                            Que faire en cas d'impayé ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-7">Vous pouvez vous adresser au **SCARPA** (Service Cantonale d'Avance et de Recouvrement des Pensions Alimentaires) à Genève.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Form Section -->
        <section id="formulaire" class="py-20 bg-white border-t border-slate-200">
            <div class="max-w-3xl mx-auto px-4">
                <div class="mb-12 text-center">
                    <h2 class="text-2xl font-bold text-slate-900 tracking-tight mb-4">Besoin de calculer une pension ?</h2>
                    <p class="text-slate-600">Contactez-nous pour une évaluation précise.</p>
                </div>
                <ContactForm />
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
useLocalSeo(
  'Avocat Pension Alimentaire Genève | Calcul & Recouvrement',
  'Avocat Spécialiste Pension Alimentaire à Genève. Calcul contributions entretien enfant et ex-conjoint. Minimum vital, SCARPA. Art 125, 276 CC.',
  {
    type: 'LegalService',
    priceRange: 'Dès CHF 155.-'
  }
)
</script>
