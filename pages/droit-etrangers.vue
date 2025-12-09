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
                            <span class="text-red-900">Immigration &amp; Nationalité</span>
                        </div>

                        <h1 class="text-3xl md:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight mb-6 leading-[1.1] text-balance">
                            Avocat Droit des Étrangers à Genève <br>
                            <span class="text-slate-500">Permis, Naturalisation et Recours.</span>
                        </h1>
                        
                        <p class="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                            L'administration suisse est complexe. Ne laissez pas un refus ou un délai compromettre votre avenir. Obtenez une stratégie claire dès aujourd'hui.
                        </p>

                        <div class="flex flex-col sm:flex-row gap-4 items-start">
                            <a href="#formulaire" class="inline-flex items-center justify-center hover:bg-red-800 shadow-red-900/20 hover:shadow-xl transition-all text-sm font-medium text-white bg-red-900 rounded-md pt-4 pr-8 pb-4 pl-8 shadow-lg w-full sm:w-auto">Prendre rendez-vous (CHF 155.-)</a>
                            <NuxtLink to="/#domaines" class="inline-flex items-center justify-center px-6 py-4 text-sm font-medium text-slate-600 bg-white hover:bg-slate-50 border border-slate-200 rounded-md transition-all w-full sm:w-auto">
                                Nos services
                            </NuxtLink>
                        </div>

                        <div class="mt-10 flex flex-wrap gap-6 text-xs text-slate-500 font-medium">
                            <span class="flex items-center gap-1.5"><i data-lucide="check-circle" class="w-4 h-4 text-emerald-600"></i> Expertises OCPM</span>
                            <span class="flex items-center gap-1.5"><i data-lucide="check-circle" class="w-4 h-4 text-emerald-600"></i> Recours SEM</span>
                            <span class="flex items-center gap-1.5"><i data-lucide="check-circle" class="w-4 h-4 text-emerald-600"></i> Naturalisation</span>
                        </div>
                    </div>

                    <!-- Image Right -->
                    <div class="relative hidden lg:block">
                        <div class="absolute inset-0 bg-red-900/5 rounded-2xl transform translate-x-4 translate-y-4"></div>
                        <div class="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
                            <!-- Image related to Immigration/Law (Swiss Passport/Legal Documents vibe) -->
                            <img src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=2000&auto=format&fit=crop" alt="Bureau avocat droit des étrangers" class="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out">
                            
                            <!-- Floating Badge -->
                            <div class="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm border border-slate-200 p-4 rounded-lg shadow-lg max-w-xs">
                                <div class="flex items-center gap-3 mb-2">
                                    <div class="p-2 bg-red-50 rounded-full text-red-900">
                                        <i data-lucide="shield-check" class="w-4 h-4"></i>
                                    </div>
                                    <span class="text-xs font-semibold text-slate-900">Dossiers complexes</span>
                                </div>
                                <p class="text-[11px] leading-snug text-slate-500">Nous gérons les refus et les situations délicates impactant votre titre de séjour.</p>
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
                    <h2 class="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Nos domaines d'expertise en Droit des Migrations</h2>
                    <p class="text-slate-600 text-lg">Nous intervenons à chaque étape de votre vie en Suisse, de l'arrivée sur le territoire jusqu'à l'obtention du passeport rouge.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <!-- 1. Permis de Séjour -->
                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="id-card" class="w-6 h-6 text-red-900"></i>
                        </div>
                        <h3 class="text-xl font-semibold text-slate-900 mb-3">Permis de Séjour et d'Établissement (B &amp; C)</h3>
                        <p class="text-slate-600 leading-relaxed mb-4">
                            Assistance complète pour l'obtention, le renouvellement ou la transformation de vos autorisations. Nous gérons les dossiers complexes pour ressortissants UE/AELE et États tiers directement auprès de l'OCPM.
                        </p>
                        <ul class="text-sm text-slate-500 space-y-2">
                            <li class="flex items-center gap-2"><div class="w-1 h-1 bg-red-900 rounded-full"></div>Transformation B en C (Permis d'établissement)</li>
                            <li class="flex items-center gap-2"><div class="w-1 h-1 bg-red-900 rounded-full"></div>Permis avec activité lucrative ou indépendant</li>
                        </ul>
                    </div>

                    <!-- 2. Regroupement Familial -->
                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="users" class="w-6 h-6 text-red-900"></i>
                        </div>
                        <h3 class="text-xl font-semibold text-slate-900 mb-3">Regroupement Familial</h3>
                        <p class="text-slate-600 leading-relaxed mb-4">
                            Faites venir votre conjoint(e) et vos enfants en Suisse. Nous analysons rigoureusement vos conditions de logement et vos capacités financières pour garantir le succès de la demande et éviter les séparations prolongées.
                        </p>
                        <ul class="text-sm text-slate-500 space-y-2">
                            <li class="flex items-center gap-2"><div class="w-1 h-1 bg-red-900 rounded-full"></div>Calcul des normes financières</li>
                            <li class="flex items-center gap-2"><div class="w-1 h-1 bg-red-900 rounded-full"></div>Demande de visa D pour entrée en Suisse</li>
                        </ul>
                    </div>

                    <!-- 3. Naturalisation -->
                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="flag" class="w-6 h-6 text-red-900"></i>
                        </div>
                        <h3 class="text-xl font-semibold text-slate-900 mb-3">Naturalisation Suisse</h3>
                        <p class="text-slate-600 leading-relaxed mb-4">
                            Devenez citoyen suisse. Nous vous guidons à travers la procédure ordinaire ou facilitée à Genève. Préparation du dossier, vérification des critères d'intégration et coaching pour les entretiens de naturalisation.
                        </p>
                        <ul class="text-sm text-slate-500 space-y-2">
                            <li class="flex items-center gap-2"><div class="w-1 h-1 bg-red-900 rounded-full"></div>Naturalisation facilitée (conjoint suisse / 3e génération)</li>
                            <li class="flex items-center gap-2"><div class="w-1 h-1 bg-red-900 rounded-full"></div>Préparation aux tests de connaissances</li>
                        </ul>
                    </div>

                    <!-- 4. Recours & Contentieux -->
                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="gavel" class="w-6 h-6 text-red-900"></i>
                        </div>
                        <h3 class="text-xl font-semibold text-slate-900 mb-3">Recours et Refus de l'OCPM/SEM</h3>
                        <p class="text-slate-600 leading-relaxed mb-4">
                            Décision négative ? Menace de renvoi ? Le temps est compté. Nous déposons immédiatement les recours nécessaires auprès du Tribunal administratif fédéral ou cantonal pour défendre votre droit de rester.
                        </p>
                        <ul class="text-sm text-slate-500 space-y-2">
                            <li class="flex items-center gap-2"><div class="w-1 h-1 bg-red-900 rounded-full"></div>Opposition aux décisions de renvoi</li>
                            <li class="flex items-center gap-2"><div class="w-1 h-1 bg-red-900 rounded-full"></div>Levée d'interdiction d'entrée</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQ -->
        <section id="faq" class="py-16 bg-white border-t border-slate-100">
            <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h3 class="text-xl font-semibold text-slate-900 mb-8 text-center">Questions fréquentes Immigration Genève</h3>
                <div class="space-y-6">
                    <div class="border-b border-slate-100 pb-4">
                        <h4 class="text-sm font-semibold text-slate-900 mb-2 flex items-start gap-2">
                            <i data-lucide="help-circle" class="w-4 h-4 text-slate-400 mt-0.5 shrink-0"></i>
                            Combien de temps faut-il pour obtenir un permis B à Genève ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-6">Les délais varient selon la nationalité (UE vs États tiers) et la charge de travail de l'OCPM. Comptez généralement entre 3 et 6 mois pour un dossier complet. Un dossier mal préparé peut doubler ce temps d'attente.</p>
                    </div>
                    <div class="border-b border-slate-100 pb-4">
                        <h4 class="text-sm font-semibold text-slate-900 mb-2 flex items-start gap-2">
                             <i data-lucide="help-circle" class="w-4 h-4 text-slate-400 mt-0.5 shrink-0"></i>
                            Puis-je faire venir ma famille si je suis au bénéfice d'une admission provisoire (Permis F) ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-6">C'est possible, mais sous conditions strictes (délai d'attente, indépendance financière, logement adéquat). C'est une procédure complexe où l'assistance d'un avocat est fortement recommandée pour prouver que les conditions sont remplies.</p>
                    </div>
                    <div class="pb-4">
                        <h4 class="text-sm font-semibold text-slate-900 mb-2 flex items-start gap-2">
                             <i data-lucide="help-circle" class="w-4 h-4 text-slate-400 mt-0.5 shrink-0"></i>
                            Que faire si ma demande de naturalisation est refusée ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-6">Vous disposez d'un délai de 30 jours pour recourir contre la décision. Ne refaites pas une demande immédiatement sans comprendre le motif du refus. Contactez-nous pour analyser la décision et préparer le recours.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Use Form Component -->
        <section id="formulaire" class="py-20 bg-slate-50 border-t border-slate-200">
            <div class="max-w-3xl mx-auto px-4">
                 <div class="mb-12 text-center">
                    <h2 class="text-2xl font-semibold text-slate-900 tracking-tight mb-4">Contactez votre avocat dès maintenant</h2>
                    <p class="text-slate-600">Réponse sous 24h. Nous facilitons vos démarches administratives.</p>
                </div>
                <ContactForm />
            </div>
        </section>
  </div>
</template>

<script setup lang="ts">
// Page specific logic
</script>