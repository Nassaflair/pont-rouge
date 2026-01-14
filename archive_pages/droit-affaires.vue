<template>
  <div>
        <!-- SEO/SEA Optimized Hero Section -->
        <section class="lg:pt-32 lg:pb-24 overflow-hidden pt-28 pb-20 relative bg-white border-b border-slate-100">
            <!-- Background effects -->
            <div class="absolute inset-0 -z-20 h-full w-full bg-white">
                <div class="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-slate-100 rounded-full blur-3xl opacity-50"></div>
                <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-red-50/30 rounded-full blur-3xl opacity-40"></div>
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
                            <span class="text-red-900">Entreprise &amp; Commercial</span>
                        </div>

                        <h1 class="text-3xl md:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight mb-6 leading-[1.1] text-balance">
                            Avocat Droit des Affaires Genève – Sécurisez la Croissance de votre PME.
                        </h1>
                        
                        <p class="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                            De la création de votre SA/SARL à la gestion des litiges commerciaux, notre expertise est votre meilleur bouclier légal pour entreprendre à Genève.
                        </p>

                        <div class="flex flex-col sm:flex-row gap-4 items-start">
                             <a href="#formulaire" class="inline-flex items-center justify-center hover:bg-red-800 shadow-red-900/20 hover:shadow-xl transition-all text-sm font-medium text-white bg-red-900 rounded-md pt-4 pr-8 pb-4 pl-8 shadow-lg w-full sm:w-auto">Réserver ma consultation stratégique (CHF 155.-)</a>
                        </div>

                        <div class="mt-10 flex flex-wrap gap-6 text-xs text-slate-500 font-medium">
                            <span class="flex items-center gap-1.5"><i data-lucide="shield-check" class="w-4 h-4 text-emerald-600"></i> Protection Juridique</span>
                            <span class="flex items-center gap-1.5"><i data-lucide="users" class="w-4 h-4 text-slate-600"></i> Accompagnement PME</span>
                            <span class="flex items-center gap-1.5"><i data-lucide="trending-up" class="w-4 h-4 text-slate-600"></i> Vision Long-terme</span>
                        </div>
                    </div>

                    <!-- Image Right: Strategy/Chess/Blueprint -->
                    <div class="relative hidden lg:block">
                        <div class="absolute inset-0 bg-slate-900/5 rounded-2xl transform translate-x-4 translate-y-4"></div>
                        <div class="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
                            <!-- Image: Strategy/Chess - High quality, representing planning and foresight -->
                            <img src="https://images.unsplash.com/photo-1611095790444-1dfa35e37b52?auto=format&amp;fit=crop&amp;q=80&amp;w=1600" alt="Stratégie juridique et planification d'affaires" class="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out grayscale-[10%]">
                            
                            <!-- Floating Badge -->
                            <div class="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm border border-slate-200 p-4 rounded-lg shadow-lg max-w-xs">
                                <div class="flex items-center gap-3 mb-2">
                                    <div class="p-2 bg-slate-50 rounded-full text-slate-900">
                                        <i data-lucide="compass" class="w-4 h-4"></i>
                                    </div>
                                    <span class="text-xs font-semibold text-slate-900">Anticipation des risques</span>
                                </div>
                                <p class="text-[11px] leading-snug text-slate-500">Une structure juridique solide est la clé de la pérennité.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <!-- Core Services -->
        <section class="bg-slate-50 border-slate-200 border-t pt-20 pb-20" id="services">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="mb-16 text-center max-w-3xl mx-auto">
                    <h2 class="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Nos piliers d'expertise pour les entrepreneurs</h2>
                    <p class="text-slate-600 text-lg">Nous intervenons à chaque étape clé de la vie de votre entreprise, de la constitution au développement commercial.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <!-- 1. Création et Structure d'Entreprise -->
                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-slate-100 transition-colors">
                            <i data-lucide="building" class="w-6 h-6 text-slate-900"></i>
                        </div>
                        <h3 class="text-xl font-semibold text-slate-900 mb-3">Création et Structure d'Entreprise</h3>
                        <p class="leading-relaxed text-slate-600 mb-4">
                            Choix de la forme juridique optimale (SA, SARL) et rédaction des statuts sur mesure pour protéger les fondateurs. Nous gérons les pactes d'actionnaires pour anticiper les conflits futurs.
                        </p>
                        <ul class="text-sm text-slate-500 space-y-2">
                            <li class="flex items-center gap-2"><div class="w-1 h-1 bg-red-900 rounded-full"></div>Constitution SA / SARL</li>
                            <li class="flex items-center gap-2"><div class="w-1 h-1 bg-red-900 rounded-full"></div>Gouvernance et administration</li>
                        </ul>
                    </div>

                    <!-- 2. Contrats Commerciaux -->
                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-slate-100 transition-colors">
                            <i data-lucide="scroll-text" class="w-6 h-6 text-slate-900"></i>
                        </div>
                        <h3 class="text-xl font-semibold text-slate-900 mb-3">Contrats Commerciaux</h3>
                        <p class="text-slate-600 leading-relaxed mb-4">
                            Rédaction, négociation et revue de vos contrats essentiels (prestation de services, distribution, confidentialité/NDA). Nous sécurisons vos relations d'affaires pour limiter votre responsabilité.
                        </p>
                        <ul class="text-sm text-slate-500 space-y-2">
                            <li class="flex items-center gap-2"><div class="w-1 h-1 bg-red-900 rounded-full"></div>Conditions Générales (CGV)</li>
                            <li class="flex items-center gap-2"><div class="w-1 h-1 bg-red-900 rounded-full"></div>Baux commerciaux</li>
                        </ul>
                    </div>

                    <!-- 3. Litiges et Contentieux -->
                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-slate-100 transition-colors">
                            <i data-lucide="gavel" class="w-6 h-6 text-slate-900"></i>
                        </div>
                        <h3 class="text-xl font-semibold text-slate-900 mb-3">Litiges et Contentieux Commercial</h3>
                        <p class="text-slate-600 leading-relaxed mb-4">
                            Défense de vos intérêts devant les Tribunaux de Commerce de Genève. Nous intervenons en recouvrement de créances (poursuites) et lors de conflits entre associés ou avec des fournisseurs.
                        </p>
                        <ul class="text-sm text-slate-500 space-y-2">
                            <li class="flex items-center gap-2"><div class="w-1 h-1 bg-red-900 rounded-full"></div>Recouvrement &amp; Faillites</li>
                            <li class="flex items-center gap-2"><div class="w-1 h-1 bg-red-900 rounded-full"></div>Médiation commerciale</li>
                        </ul>
                    </div>

                    <!-- 4. Droit des PME et Transactions -->
                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-slate-100 transition-colors">
                            <i data-lucide="arrow-right-left" class="w-6 h-6 text-slate-900"></i>
                        </div>
                        <h3 class="text-xl font-semibold text-slate-900 mb-3">Droit des PME et Transactions</h3>
                        <p class="text-slate-600 leading-relaxed mb-4">
                            Accompagnement dans les phases de croissance externe ou de cession. Nous réalisons les due diligences juridiques et encadrons les fusions et acquisitions (M&amp;A) pour les PME locales.
                        </p>
                        <ul class="text-sm text-slate-500 space-y-2">
                            <li class="flex items-center gap-2"><div class="w-1 h-1 bg-red-900 rounded-full"></div>Cession d'entreprise</li>
                            <li class="flex items-center gap-2"><div class="w-1 h-1 bg-red-900 rounded-full"></div>Partenariats stratégiques</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQ -->
        <section id="faq" class="py-16 bg-white border-t border-slate-100">
            <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h3 class="text-xl font-semibold text-slate-900 mb-8 text-center">Questions fréquentes - Entrepreneurs</h3>
                <div class="space-y-6">
                    <div class="border-b border-slate-100 pb-4">
                        <h4 class="text-sm font-semibold text-slate-900 mb-2 flex items-start gap-2">
                            <i data-lucide="help-circle" class="w-4 h-4 text-slate-400 mt-0.5 shrink-0"></i>
                            Quelle est la meilleure forme juridique (SA ou SARL) pour mon projet ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-6">Le choix dépend du capital disponible (CHF 20k pour SARL vs 100k pour SA) et de l'anonymat souhaité. La SA offre plus de flexibilité pour les investisseurs, tandis que la SARL est souvent plus adaptée aux structures familiales ou petites équipes.</p>
                    </div>
                    <div class="border-b border-slate-100 pb-4">
                        <h4 class="text-sm font-semibold text-slate-900 mb-2 flex items-start gap-2">
                             <i data-lucide="globe" class="w-4 h-4 text-slate-400 mt-0.5 shrink-0"></i>
                            Comment sécuriser un contrat de distribution à l'international ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-6">Il est crucial de définir le droit applicable (suisse ou étranger), le for juridique (tribunal compétent) et les conditions de résiliation. Une clause d'arbitrage peut aussi être envisagée pour éviter les tribunaux étatiques étrangers.</p>
                    </div>
                    <div class="pb-4">
                        <h4 class="text-sm font-semibold text-slate-900 mb-2 flex items-start gap-2">
                             <i data-lucide="alert-triangle" class="w-4 h-4 text-slate-400 mt-0.5 shrink-0"></i>
                            Que faire si mon client ne paie pas sa facture ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-6">Nous commençons par une mise en demeure formelle d'avocat, souvent suffisante pour déclencher le paiement. Si nécessaire, nous initions une procédure de poursuite rapide et efficace pour récupérer vos créances.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Use Form Component -->
        <section id="formulaire" class="py-20 bg-slate-50 border-t border-slate-200">
            <div class="max-w-3xl mx-auto px-4">
                 <div class="mb-12 text-center">
                    <h2 class="text-2xl font-semibold text-slate-900 tracking-tight mb-4">Contactez votre avocat dès maintenant</h2>
                    <p class="text-slate-600">Réponse sous 24h. Assurez l'avenir de votre entreprise.</p>
                </div>
                <ContactForm />
            </div>
        </section>
  </div>
</template>

<script setup lang="ts">
// Page specific logic
</script>