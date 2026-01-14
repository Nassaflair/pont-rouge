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
                            { name: 'Droit du Travail', path: '/droit-travail' },
                            { name: 'Avocat Licenciement', path: '/droit-travail/avocat-licenciement' }
                        ]" />

                        <h1 class="text-3xl md:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight mb-6 leading-[1.1] text-balance">
                            Avocat Licenciement Abusif à Genève<br>
                        </h1>

                        <p class="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                            Licenciement immédiat, abusif ou injustifié ? Nous défendons vos droits et négocions vos indemnités devant le Tribunal des Prud'hommes.
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
                            <span class="flex items-center gap-1.5"><i data-lucide="check-circle" class="w-4 h-4 text-emerald-600"></i> Indemnités (Art. 337c CO)</span>
                            <span class="flex items-center gap-1.5"><i data-lucide="check-circle" class="w-4 h-4 text-emerald-600"></i> Opposition Formelle</span>
                            <span class="flex items-center gap-1.5"><i data-lucide="check-circle" class="w-4 h-4 text-emerald-600"></i> Conciliation</span>
                        </div>
                    </div>

                    <!-- Image Right -->
                    <div class="relative hidden lg:block">
                        <div class="absolute inset-0 bg-red-900/5 rounded-2xl transform translate-x-4 translate-y-4"></div>
                        <div class="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
                            <NuxtImg format="webp" src="/exp/work.png" alt="Avocat Licenciement Genève"
                                class="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" />
                            <div class="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm border border-slate-200 p-4 rounded-lg shadow-lg max-w-xs">
                                <div class="flex items-center gap-3 mb-2">
                                    <div class="p-2 bg-red-50 rounded-full text-red-900">
                                        <i data-lucide="briefcase" class="w-4 h-4"></i>
                                    </div>
                                    <span class="text-xs font-semibold text-slate-900">Droit du Travail</span>
                                </div>
                                <p class="text-[11px] leading-snug text-slate-500">Tribunal des Prud'hommes, Genève.</p>
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
                    <h2 class="text-3xl font-bold tracking-tight text-slate-900 mb-4">Pourquoi contester un licenciement ?</h2>
                    <p class="text-lg text-slate-600">Les délais sont courts (opposition), l'action rapide est cruciale.</p>
                </div>
                
                <div class="grid md:grid-cols-2 gap-12 items-center">
                    <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                        <div class="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900">
                            <i data-lucide="alert-triangle" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-4">Délais de Péremption</h3>
                        <p class="text-slate-600 leading-relaxed">
                            Pour un licenciement abusif (Art 336 CO), vous devez faire **opposition par écrit** avant la fin du délai de congé. Sans cela, tout droit à une indemnité (jusqu'à 6 mois de salaire) est perdu.
                        </p>
                    </div>

                    <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                        <div class="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900">
                            <i data-lucide="coins" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-4">Indemnités Maximisées</h3>
                        <p class="text-slate-600 leading-relaxed">
                            Nous négocions non seulement l'indemnité pour licenciement abusif ou injustifié, mais aussi les arriérés de salaire, les heures supplémentaires, les vacances non prises et le 13ème salaire.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Process Section -->
        <section class="py-20 bg-white border-b border-slate-100 overflow-hidden">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-3xl mx-auto mb-16">
                    <h2 class="text-3xl font-bold tracking-tight text-slate-900 mb-4">Procédure aux Prud'hommes</h2>
                    <p class="text-slate-500 font-medium tracking-wide uppercase text-sm">Le parcours judiciaire</p>
                </div>

                <div class="relative">
                    <div class="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>
                     <div class="grid md:grid-cols-3 gap-6 relative z-10 max-w-4xl mx-auto">
                        <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                            <div class="w-9 h-9 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold mb-3 text-sm">1</div>
                            <h4 class="text-base font-bold text-slate-900 mb-2">Opposition Écrite</h4>
                            <p class="text-xs text-slate-600">Lettre recommandée à l'employeur (Preuve).</p>
                        </div>
                        <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                            <div class="w-9 h-9 bg-white text-slate-900 border-2 border-slate-900 rounded-full flex items-center justify-center font-bold mb-3 text-sm">2</div>
                            <h4 class="text-base font-bold text-slate-900 mb-2">Requête de Conciliation</h4>
                            <p class="text-xs text-slate-600">Dépôt au greffe du Tribunal (Gratuit jusqu'à 30k).</p>
                        </div>
                        <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                            <div class="w-9 h-9 bg-red-900 text-white rounded-full flex items-center justify-center font-bold mb-3 text-sm">3</div>
                            <h4 class="text-base font-bold text-slate-900 mb-2">Audience</h4>
                            <p class="text-xs text-slate-600">Tentative d'accord ou Autorisation de procéder.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Service Grid / Key Issues -->
        <section class="py-20 bg-slate-50 border-b border-slate-200">
             <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="mb-16 text-center max-w-3xl mx-auto">
                    <h2 class="text-3xl font-bold tracking-tight text-slate-900 mb-4">Types de Licenciements</h2>
                    <p class="text-lg text-slate-600">Comprendre votre situation juridique.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                         <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="zap" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Licenciement Immédiat (Art 337 CO)</h3>
                        <p class="text-slate-600 text-sm leading-relaxed">
                            C'est la mesure ultime. Il faut un "juste motif" grave. S'il est injustifié, vous avez droit au salaire jusqu'à la fin du contrat + indemnité (jusqu'à 6 mois).
                        </p>
                    </div>

                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                         <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="shield-off" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Licenciement Abusif (Art 336 CO)</h3>
                        <p class="text-slate-600 text-sm leading-relaxed">
                            Le congé est donné pour une raison inhérente à la personnalité, par représailles, ou en raison d'une appartenance syndicale. Indemnité jusqu'à 6 mois.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Legal Framework -->
        <section id="features" class="py-20 bg-white border-t border-slate-200">
             <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="mb-16 text-center max-w-3xl mx-auto">
                    <h2 class="text-3xl font-bold tracking-tight text-slate-900 mb-4">Cadre Légal (CO)</h2>
                    <p class="text-lg text-slate-600">Code des Obligations Suisse.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="book-open" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Article 337c CO</h3>
                        <p class="text-slate-600 text-sm leading-relaxed">
                            Conséquences du licenciement immédiat injustifié : le juge fixe une indemnité pouvant aller jusqu'à 6 mois de salaire, en plus du salaire dû.
                        </p>
                    </div>

                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="scale" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Article 336c CO</h3>
                        <p class="text-slate-600 text-sm leading-relaxed">
                            Protection contre le licenciement en temps inopportun : maladie, accident, service militaire, grossesse. Le congé donné pendant ces périodes est <strong class="text-red-900">nul</strong>.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQ -->
        <section id="faq" class="py-16 bg-slate-50 border-t border-slate-100">
             <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h3 class="text-xl font-bold text-slate-900 mb-8 text-center">FAQ Licenciement Genève</h3>
                <div class="space-y-6">
                    <div class="border-b border-slate-200 pb-4">
                         <h4 class="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                            <i data-lucide="help-circle" class="w-5 h-5 text-red-800 mt-0.5 shrink-0"></i>
                            Puis-je être licencié pendant un arrêt maladie ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-7">Non, si le délai de protection (Art 336c CO) court toujours (30 à 180 jours selon l'ancienneté). Le congé est nul et doit être redonné après.</p>
                     </div>
                    <div class="border-b border-slate-200 pb-4">
                        <h4 class="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                            <i data-lucide="help-circle" class="w-5 h-5 text-red-800 mt-0.5 shrink-0"></i>
                            Combien coûte une procédure aux Prud'hommes ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-7">À Genève, la procédure est <strong>gratuite</strong> pour les litiges dont la valeur litigieuse ne dépasse pas CHF 30'000.- (Art 113 CPC).</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Form Section -->
        <section id="formulaire" class="py-20 bg-white border-t border-slate-200">
            <div class="max-w-3xl mx-auto px-4">
                <div class="mb-12 text-center">
                    <h2 class="text-2xl font-bold text-slate-900 tracking-tight mb-4">Vous avez reçu votre lettre de congé ?</h2>
                    <p class="text-slate-600">Agissez vite. Le délai d'opposition est court.</p>
                </div>
                <ContactForm />
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
useLocalSeo(
  'Avocat Licenciement Genève | Abusif & Immédiat',
  'Avocat Spécialiste Licenciement à Genève. Contestations licenciement abusif, immédiat, maladie. Prud\'hommes. Indemnités Art 337c CO.',
  {
    type: 'LegalService',
    priceRange: 'Dès CHF 155.-'
  }
)
</script>
