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
                            { name: 'Droit du Travail', path: '/droit-travail' }
                        ]" />

                        <h1
                            class="text-3xl md:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight mb-6 leading-[1.1] text-balance">
                            Avocat Droit du Travail Genève : <br>
                            <span class="text-slate-500">Expert Employés et Employeurs.</span>
                        </h1>

                        <p class="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                            Licenciement abusif, conflit salarial ou harcèlement ? Nous défendons vos droits devant le Tribunal des Prud'hommes avec une expertise pointue du Code des Obligations.
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
                                    class="w-4 h-4 text-emerald-600"></i> Licenciement Injustifié</span>
                            <span class="flex items-center gap-1.5"><i data-lucide="check-circle"
                                    class="w-4 h-4 text-emerald-600"></i> Harcèlement & Discrimination</span>
                            <span class="flex items-center gap-1.5"><i data-lucide="check-circle"
                                    class="w-4 h-4 text-emerald-600"></i> Certificat de Travail</span>
                        </div>
                    </div>

                    <!-- Image Right -->
                    <div class="relative hidden lg:block">
                        <div class="absolute inset-0 bg-red-900/5 rounded-2xl transform translate-x-4 translate-y-4">
                        </div>
                        <div class="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
                            <NuxtImg format="webp" src="/exp/work.png" alt="Avocat Droit du Travail Genève"
                                class="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" />
                            <div
                                class="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm border border-slate-200 p-4 rounded-lg shadow-lg max-w-xs">
                                <div class="flex items-center gap-3 mb-2">
                                    <div class="p-2 bg-red-50 rounded-full text-red-900">
                                        <i data-lucide="briefcase" class="w-4 h-4"></i>
                                    </div>
                                    <span class="text-xs font-semibold text-slate-900">Prud'hommes Genève</span>
                                </div>
                                <p class="text-[11px] leading-snug text-slate-500">Maîtrise des audiences de conciliation à la Rue des Glacis-de-Rive.</p>
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
                    <p class="text-lg text-slate-600">Une stratégie juridique adaptée aux réalités locales genevoises.</p>
                </div>
                
                <div class="grid md:grid-cols-2 gap-12 items-center">
                    <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                        <div class="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900">
                            <i data-lucide="landmark" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-4">Connaissance du Tribunal des Prud'hommes</h3>
                        <p class="text-slate-600 leading-relaxed">
                            Choisir un avocat local est essentiel car il comprend les spécificités du <strong>Tribunal des Prud'hommes de Genève</strong>, dont la commission de conciliation siège à la <strong class="text-slate-900">Rue des Glacis-de-Rive 6, 1207 Genève</strong>. Connaître les tendances des juges locaux est un atout décisif pour votre dossier.
                        </p>
                    </div>

                    <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                        <div class="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900">
                            <i data-lucide="book-open" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-4">Maîtrise du Code des Obligations (CO)</h3>
                        <p class="text-slate-600 leading-relaxed">
                            Nous possédons une connaissance approfondie des <strong>Articles 319 à 362 du Code des Obligations (CO)</strong> qui régissent les contrats de travail. Cette expertise technique est cruciale pour naviguer efficacement dans l'écosystème juridique complexe de Genève.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Process Section: La Procédure de Conciliation -->
        <section class="py-20 bg-white border-b border-slate-100 overflow-hidden">
             <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-3xl mx-auto mb-16">
                    <h2 class="text-3xl font-bold tracking-tight text-slate-900 mb-4">La Procédure de Conciliation à Genève</h2>
                    <p class="text-slate-500 font-medium tracking-wide uppercase text-sm">Étape par Étape</p>
                </div>

                <div class="relative">
                    <!-- Connector Line (Desktop) -->
                    <div class="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>

                    <div class="grid md:grid-cols-4 gap-8 relative z-10">
                        <!-- Step 1 -->
                        <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative group hover:-translate-y-1 transition-transform duration-300">
                            <div class="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold mb-4 mx-auto md:mx-0 shadow-lg shadow-slate-900/20">1</div>
                            <h4 class="text-lg font-bold text-slate-900 mb-3">Analyse & Stratégie</h4>
                            <p class="text-sm text-slate-600 leading-relaxed">
                                Évaluation de la situation (Art. 335-337 CO). 1er RDV à <strong class="text-red-900">CHF 155.-</strong> pour estimer vos chances de succès et les coûts en toute transparence.
                            </p>
                        </div>

                        <!-- Step 2 -->
                        <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative group hover:-translate-y-1 transition-transform duration-300">
                            <div class="w-10 h-10 bg-white text-slate-900 border-2 border-slate-900 rounded-full flex items-center justify-center font-bold mb-4 mx-auto md:mx-0">2</div>
                            <h4 class="text-lg font-bold text-slate-900 mb-3">Dépôt de la Requête</h4>
                            <p class="text-sm text-slate-600 leading-relaxed">
                                Dépôt d'une requête de conciliation auprès du Tribunal des prud'hommes. Elle contient les conclusions formelles de la partie requérante.
                            </p>
                        </div>

                        <!-- Step 3 -->
                        <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative group hover:-translate-y-1 transition-transform duration-300">
                            <div class="w-10 h-10 bg-white text-slate-900 border-2 border-slate-900 rounded-full flex items-center justify-center font-bold mb-4 mx-auto md:mx-0">3</div>
                            <h4 class="text-lg font-bold text-slate-900 mb-3">Audience de Conciliation</h4>
                            <p class="text-sm text-slate-600 leading-relaxed">
                                Devant un juge conciliateur. Le but est d'éviter un procès. Si échec, une "autorisation de procéder" est délivrée.
                            </p>
                        </div>

                        <!-- Step 4 -->
                        <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative group hover:-translate-y-1 transition-transform duration-300">
                            <div class="w-10 h-10 bg-red-900 text-white rounded-full flex items-center justify-center font-bold mb-4 mx-auto md:mx-0 shadow-lg shadow-red-900/20">4</div>
                            <h4 class="text-lg font-bold text-slate-900 mb-3">Le Procès</h4>
                            <p class="text-sm text-slate-600 leading-relaxed">
                                L'affaire est jugée au fond par le Tribunal. Nous plaidons votre dossier avec vigueur pour faire valoir vos droits.
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
                    <h2 class="text-3xl font-bold tracking-tight text-slate-900 mb-4">Enjeux Clés & Protection Juridique</h2>
                    <p class="text-lg text-slate-600">Défense stricte de vos droits selon le Code des Obligations.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <!-- 1. Conflits Contrats -->
                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="file-warning" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Violations du Contrat de Travail</h3>
                        <p class="text-slate-600 leading-relaxed mb-4">
                            Non-paiement des salaires, heures supplémentaires impayées ou modification unilatérale du contrat. Nous intervenons sur la base des <strong>Articles 319-362 CO</strong>.
                        </p>
                    </div>

                    <!-- 2. Licenciement -->
                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="door-open" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Licenciement Abusif / Injustifié</h3>
                        <p class="text-slate-600 leading-relaxed mb-4">
                            Les <strong>Articles 335-337 CO</strong> vous protègent. Que ce soit un licenciement immédiat sans justes motifs ou une résiliation abusive, nous contestons la décision pour obtenir une indemnité.
                        </p>
                    </div>

                    <!-- 3. Discrimination -->
                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="users" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Discrimination & Harcèlement</h3>
                        <p class="text-slate-600 leading-relaxed overflow-hidden">
                            La loi protège l'intégrité de la personnalité du travailleur (Art. 328 CO). Nous agissons contre le harcèlement psychologique (mobbing) ou sexuel et les inégalités de traitement.
                        </p>
                    </div>

                    <!-- 4. Cadre Légal Specifique -->
                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="scale" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Textes de Loi Fondamentaux</h3>
                        <ul class="space-y-3">
                            <li class="flex items-start gap-2 text-sm text-slate-600">
                                <span class="font-bold text-slate-900 whitespace-nowrap">Art. 319-362 CO :</span>
                                <span>Le socle du droit du travail suisse (salaires, vacances, résiliation).</span>
                            </li>
                            <li class="flex items-start gap-2 text-sm text-slate-600">
                                <span class="font-bold text-slate-900 whitespace-nowrap">Code Civil :</span>
                                <span>Protection de la personnalité et droits fondamentaux.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQ -->
        <section id="faq" class="py-16 bg-white border-t border-slate-100">
            <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h3 class="text-xl font-bold text-slate-900 mb-8 text-center">FAQ (Droit du Travail Genève)</h3>
                <div class="space-y-6">
                    <div class="border-b border-slate-100 pb-4">
                        <h4 class="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                            <i data-lucide="help-circle" class="w-5 h-5 text-red-800 mt-0.5 shrink-0"></i>
                            Quels sont mes droits en tant qu'employé ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-7">Vous êtes protégé par les <strong>Articles 319-362 CO</strong> garantissant le paiement du salaire, la protection contre le licenciement en temps inopportun (maladie, accident) et le droit aux vacances.</p>
                    </div>
                    <div class="border-b border-slate-100 pb-4">
                        <h4 class="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                            <i data-lucide="help-circle" class="w-5 h-5 text-red-800 mt-0.5 shrink-0"></i>
                            Comment contester un licenciement ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-7">C'est urgent. Vous devez faire <strong>opposition par écrit</strong> auprès de votre employeur pendant le délai de congé et offrir vos services. Sans cela, vous perdez le droit d'agir pour licenciement abusif.</p>
                    </div>
                    <div class="pb-4">
                        <h4 class="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                            <i data-lucide="help-circle" class="w-5 h-5 text-red-800 mt-0.5 shrink-0"></i>
                            Quel est le rôle de l'avocat ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-7">Nous défendons vos droits selon les Art. 335-337 CO, nous rédigeons la requête aux Prud'hommes et nous vous assistons lors de l'audience de conciliation pour maximiser vos indemnités.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Use Form Component -->
        <section id="formulaire" class="py-20 bg-slate-50 border-t border-slate-200">
            <div class="max-w-3xl mx-auto px-4">
                <div class="mb-12 text-center">
                    <h2 class="text-2xl font-bold text-slate-900 tracking-tight mb-4">Besoin d'aide immédiate ?</h2>
                    <p class="text-slate-600">Employé ou Employeur, nous vous défendons avec rigueur.</p>
                </div>
                <ContactForm />
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
await navigateTo('/droit-travail/avocat-licenciement');

useHead({
  title: 'Avocat Droit du Travail Genève | Licenciement & Prud\'hommes',
  meta: [
    { name: 'description', content: 'Avocat expert Droit du Travail à Genève. Défense Employés et Employeurs aux Prud\'hommes. Contestation licenciement, salaire. 1er RDV : CHF 155.-' }
  ]
})
</script>
