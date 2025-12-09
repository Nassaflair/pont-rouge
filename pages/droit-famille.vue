<template>
  <div>
        <!-- SEO/SEA Optimized Hero Section with Image -->
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
                        <!-- Breadcrumb-like indicator -->
                        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[10px] font-semibold uppercase tracking-widest text-slate-600 mb-8">
                            <span>Expertise</span>
                            <i data-lucide="chevron-right" class="w-3 h-3 text-slate-400"></i>
                            <span class="text-red-900">Droit de la Famille</span>
                        </div>

                        <h1 class="text-3xl md:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight mb-6 leading-[1.1] text-balance">
                            Avocat Divorce et Droit de la Famille à Genève <br>
                            <span class="text-slate-500">Solutions Humaines et Fermes.</span>
                        </h1>
                        
                        <p class="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                            Séparation ou conflit familial sont des épreuves. Nous privilégions l'apaisement quand c'est possible, et nous défendons vos droits avec vigueur quand c'est nécessaire.
                        </p>

<div class="flex flex-col sm:flex-row gap-4 items-start">
                            <a href="#formulaire" class="inline-flex items-center justify-center hover:bg-red-800 shadow-red-900/20 hover:shadow-xl transition-all text-sm font-medium text-white bg-red-900 rounded-md pt-4 pr-8 pb-4 pl-8 shadow-lg w-full sm:w-auto">Prendre rendez-vous (CHF 155.-)</a>
                            <NuxtLink to="/#domaines" class="inline-flex items-center justify-center px-6 py-4 text-sm font-medium text-slate-600 bg-white hover:bg-slate-50 border border-slate-200 rounded-md transition-all w-full sm:w-auto">
                                Nos services
                            </NuxtLink>
                        </div>

                        <div class="mt-10 flex flex-wrap gap-6 text-xs text-slate-500 font-medium">
                            <span class="flex items-center gap-1.5"><i data-lucide="check-circle" class="w-4 h-4 text-emerald-600"></i> Divorce Amiable</span>
                            <span class="flex items-center gap-1.5"><i data-lucide="check-circle" class="w-4 h-4 text-emerald-600"></i> Garde Alternée</span>
                            <span class="flex items-center gap-1.5"><i data-lucide="check-circle" class="w-4 h-4 text-emerald-600"></i> Mesures Urgentes</span>
                        </div>
                    </div>

                    <!-- Image Right -->
                    <div class="relative hidden lg:block">
                        <div class="absolute inset-0 bg-red-900/5 rounded-2xl transform translate-x-4 translate-y-4"></div>
                        <div class="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
                            <!-- Conceptual Image: Protective/Calm (No gavel/wigs) -->
                            <img src="https://images.unsplash.com/photo-1629853909186-b413242299fd?q=80&w=2000&auto=format&fit=crop" alt="Protection familiale et divorce" class="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out">
                            
                            <!-- Floating Badge -->
                            <div class="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm border border-slate-200 p-4 rounded-lg shadow-lg max-w-xs">
                                <div class="flex items-center gap-3 mb-2">
                                    <div class="p-2 bg-red-50 rounded-full text-red-900">
                                        <i data-lucide="heart-handshake" class="w-4 h-4"></i>
                                    </div>
                                    <span class="text-xs font-semibold text-slate-900">Protection des intérêts</span>
                                </div>
                                <p class="text-[11px] leading-snug text-slate-500">Nous sécurisons votre avenir et celui de vos enfants lors des transitions familiales.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <!-- Core Services -->
        <section id="services" class="py-20 bg-slate-50 border-t border-slate-200">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="mb-16 text-center max-w-3xl mx-auto">
                    <h2 class="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Un accompagnement complet dans les crises familiales</h2>
                    <p class="text-lg text-slate-600">Du simple conseil à la représentation devant les Tribunaux, nous sommes à vos côtés.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <!-- 1. Divorce -->
                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="file-heart" class="w-6 h-6 text-red-900"></i>
                        </div>
                        <h3 class="text-xl font-semibold text-slate-900 mb-3">Divorce (Amiable ou Conflictuel)</h3>
                        <p class="text-slate-600 leading-relaxed mb-4">
                            Expertise en "Divorce sur requête commune" (plus rapide, moins coûteux) et en "Divorce unilatéral". Nous rédigeons la convention pour garantir un jugement équitable pour votre futur.
                        </p>
                        <ul class="text-sm text-slate-500 space-y-2">
                            <li class="flex items-center gap-2"><div class="w-1 h-1 bg-red-900 rounded-full"></div>Convention de divorce complète</li>
                            <li class="flex items-center gap-2"><div class="w-1 h-1 bg-red-900 rounded-full"></div>Partage des avoirs LPP (2ème pilier)</li>
                        </ul>
                    </div>

                    <!-- 2. Séparation & MMP -->
                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="home" class="w-6 h-6 text-red-900"></i>
                        </div>
                        <h3 class="text-xl font-semibold text-slate-900 mb-3">Séparation et Mesures Protectrices</h3>
                        <p class="text-slate-600 leading-relaxed mb-4">
                            Organisation urgente de la vie séparée avant le divorce. Nous gérons les requêtes de "Mesures protectrices de l'union conjugale" concernant l'attribution du logement et les secours financiers immédiats.
                        </p>
                        <ul class="text-sm text-slate-500 space-y-2">
                            <li class="flex items-center gap-2"><div class="w-1 h-1 bg-red-900 rounded-full"></div>Attribution de la jouissance du domicile</li>
                            <li class="flex items-center gap-2"><div class="w-1 h-1 bg-red-900 rounded-full"></div>Fixation de la contribution d'entretien (pension)</li>
                        </ul>
                    </div>

                    <!-- 3. Enfants -->
                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="baby" class="w-6 h-6 text-red-900"></i>
                        </div>
                        <h3 class="text-xl font-semibold text-slate-900 mb-3">Enfants : Garde et Droit de Visite</h3>
                        <p class="text-slate-600 leading-relaxed mb-4">
                            L'intérêt de l'enfant est la priorité. Nous négocions les modalités de l'autorité parentale conjointe, la mise en place d'une garde alternée ou l'organisation d'un droit de visite large et équitable.
                        </p>
                        <ul class="text-sm text-slate-500 space-y-2">
                            <li class="flex items-center gap-2"><div class="w-1 h-1 bg-red-900 rounded-full"></div>Planification parentale (Calendrier)</li>
                            <li class="flex items-center gap-2"><div class="w-1 h-1 bg-red-900 rounded-full"></div>Médiation sur l'éducation et la prise en charge</li>
                        </ul>
                    </div>

                    <!-- 4. Aspects Financiers -->
                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="calculator" class="w-6 h-6 text-red-900"></i>
                        </div>
                        <h3 class="text-xl font-semibold text-slate-900 mb-3">Aspects Financiers et Liquidation</h3>
                        <p class="text-slate-600 leading-relaxed mb-4">
                            Calcul précis de la contribution d'entretien (méthode genevoise) pour enfants et ex-conjoint. Liquidation du régime matrimonial : répartition des biens, comptes bancaires et dettes communes.
                        </p>
                        <ul class="text-sm text-slate-500 space-y-2">
                            <li class="flex items-center gap-2"><div class="w-1 h-1 bg-red-900 rounded-full"></div>Calcul du minimum vital et de l'excédent</li>
                            <li class="flex items-center gap-2"><div class="w-1 h-1 bg-red-900 rounded-full"></div>Partage de la prévoyance professionnelle</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQ -->
        <section id="faq" class="py-16 bg-white border-t border-slate-100">
            <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h3 class="text-xl font-semibold text-slate-900 mb-8 text-center">Questions fréquentes Droit de la Famille</h3>
                <div class="space-y-6">
                    <div class="border-b border-slate-100 pb-4">
                        <h4 class="text-sm font-semibold text-slate-900 mb-2 flex items-start gap-2">
                            <i data-lucide="help-circle" class="w-4 h-4 text-slate-400 mt-0.5 shrink-0"></i>
                            Combien coûte un divorce à l'amiable à Genève ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-6">Le coût dépend de la complexité du patrimoine et des enfants. Si les époux sont d'accord sur tout, nous pouvons souvent proposer un forfait global très compétitif incluant la rédaction de la convention et l'audience. C'est la solution la plus économique.</p>
                    </div>
                    <div class="border-b border-slate-100 pb-4">
                        <h4 class="text-sm font-semibold text-slate-900 mb-2 flex items-start gap-2">
                             <i data-lucide="help-circle" class="w-4 h-4 text-slate-400 mt-0.5 shrink-0"></i>
                            Comment est calculée la pension alimentaire pour les enfants ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-6">Genève applique une méthode de calcul spécifique (méthode du minimum vital avec répartition de l'excédent). Elle prend en compte les revenus réels des parents, le coût direct de l'enfant et parfois le déficit du parent gardien. Nous effectuons ce calcul précis pour vous.</p>
                    </div>
                    <div class="pb-4">
                        <h4 class="text-sm font-semibold text-slate-900 mb-2 flex items-start gap-2">
                             <i data-lucide="help-circle" class="w-4 h-4 text-slate-400 mt-0.5 shrink-0"></i>
                            Puis-je quitter le domicile conjugal avant le jugement ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-6">En principe, non, sauf en cas de violences ou d'accord écrit. Le départ précipité peut être retenu contre vous ("abandon du domicile"). Il est crucial de déposer une requête de Mesures Protectrices pour faire valider la séparation de corps légalement.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Use Form Component -->
        <section id="formulaire" class="py-20 bg-slate-50 border-t border-slate-200">
            <div class="max-w-3xl mx-auto px-4">
                 <div class="mb-12 text-center">
                    <h2 class="text-2xl font-semibold text-slate-900 tracking-tight mb-4">Contactez votre avocat dès maintenant</h2>
                    <p class="text-slate-600">Confidentialité garantie. Nous vous aidons à traverser cette épreuve.</p>
                </div>
                <ContactForm />
            </div>
        </section>
  </div>
</template>

<script setup lang="ts">
// Page specific logic
</script>