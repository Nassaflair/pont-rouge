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
                            { name: 'Droit de la Famille', path: '/droit-famille' }
                        ]" />

                        <h1
                            class="text-3xl md:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight mb-6 leading-[1.1] text-balance">
                            Avocat Spécialiste Droit de la Famille à Genève : <br>
                            <span class="text-slate-500">Vos Droits Défendus.</span>
                        </h1>

                        <p class="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                            En choisissant un avocat spécialisé en droit de la famille à Genève, vous assurez une représentation compétente et informée, essentielle pour naviguer efficacement dans les complexités du droit familial suisse.
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
                                    class="w-4 h-4 text-emerald-600"></i> Divorce & Séparation</span>
                            <span class="flex items-center gap-1.5"><i data-lucide="check-circle"
                                    class="w-4 h-4 text-emerald-600"></i> Garde d'enfants</span>
                            <span class="flex items-center gap-1.5"><i data-lucide="check-circle"
                                    class="w-4 h-4 text-emerald-600"></i> Liquidation Régime Matrimonial</span>
                        </div>
                    </div>

                    <!-- Image Right -->
                    <div class="relative hidden lg:block">
                        <div class="absolute inset-0 bg-red-900/5 rounded-2xl transform translate-x-4 translate-y-4">
                        </div>
                        <div class="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
                            <NuxtImg format="webp" src="/exp/famille.png" alt="Avocat Famille Genève"
                                class="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" />
                            <div
                                class="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm border border-slate-200 p-4 rounded-lg shadow-lg max-w-xs">
                                <div class="flex items-center gap-3 mb-2">
                                    <div class="p-2 bg-red-50 rounded-full text-red-900">
                                        <i data-lucide="scale" class="w-4 h-4"></i>
                                    </div>
                                    <span class="text-xs font-semibold text-slate-900">Expertise Locale</span>
                                </div>
                                <p class="text-[11px] leading-snug text-slate-500">Maîtrise des procédures du Tribunal de première instance de Genève.</p>
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
                    <p class="text-lg text-slate-600">Une expertise locale indispensable pour réussir votre procédure.</p>
                </div>
                
                <div class="grid md:grid-cols-2 gap-12 items-center">
                    <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                        <div class="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900">
                            <i data-lucide="landmark" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-4">Connaissance approfondie du système juridique local</h3>
                        <p class="text-slate-600 leading-relaxed">
                            Un avocat localisé à Genève possède une compréhension spécifique des procédures et des exigences du <strong class="text-slate-900">Tribunal de première instance de Genève</strong>, situé à la Rue de l'Athénée 6/8, 1205 Genève. Cette expertise est cruciale, notamment en raison des particularités des juges et des pratiques juridiques propres à cette région.
                        </p>
                    </div>

                    <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                        <div class="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900">
                            <i data-lucide="book-open" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-4">Avantages de l'expertise locale</h3>
                        <p class="text-slate-600 leading-relaxed">
                            Engager un avocat genevois permet de bénéficier d'une connaissance approfondie des réglementations locales et des nuances du <strong class="text-slate-900">Code Civil Suisse (CC)</strong>, essentielles pour la gestion efficace des affaires de droit de la famille.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Process Section: La Procédure de Divorce -->
        <section class="py-20 bg-white border-b border-slate-100 overflow-hidden">
             <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-3xl mx-auto mb-16">
                    <h2 class="text-3xl font-bold tracking-tight text-slate-900 mb-4">La Procédure de Divorce à Genève</h2>
                    <p class="text-slate-500 font-medium tracking-wide uppercase text-sm">Étape par Étape</p>
                </div>

                <div class="relative">
                    <!-- Connector Line (Desktop) -->
                    <div class="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>

                    <div class="grid md:grid-cols-4 gap-8 relative z-10">
                        <!-- Step 1 -->
                        <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative group hover:-translate-y-1 transition-transform duration-300">
                            <div class="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold mb-4 mx-auto md:mx-0 shadow-lg shadow-slate-900/20">1</div>
                            <h4 class="text-lg font-bold text-slate-900 mb-3">Consultation & Dossier</h4>
                            <p class="text-sm text-slate-600 leading-relaxed">
                                Rencontre pour établir votre situation (Art. 111 CC). Chez Clegal, le 1er RDV d'analyse est à <strong class="text-red-900">CHF 155.-</strong> pour une stratégie claire.
                            </p>
                        </div>

                        <!-- Step 2 -->
                        <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative group hover:-translate-y-1 transition-transform duration-300">
                            <div class="w-10 h-10 bg-white text-slate-900 border-2 border-slate-900 rounded-full flex items-center justify-center font-bold mb-4 mx-auto md:mx-0">2</div>
                            <h4 class="text-lg font-bold text-slate-900 mb-3">Dépôt de la demande</h4>
                            <p class="text-sm text-slate-600 leading-relaxed">
                                Votre avocat dépose la demande au **Tribunal de première instance de Genève**, en respectant les exigences formelles strictes.
                            </p>
                        </div>

                        <!-- Step 3 -->
                        <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative group hover:-translate-y-1 transition-transform duration-300">
                            <div class="w-10 h-10 bg-white text-slate-900 border-2 border-slate-900 rounded-full flex items-center justify-center font-bold mb-4 mx-auto md:mx-0">3</div>
                            <h4 class="text-lg font-bold text-slate-900 mb-3">Conciliation</h4>
                            <p class="text-sm text-slate-600 leading-relaxed">
                                Tentative de conciliation par le juge. Un accord sur les effets du divorce ici permet une procédure plus rapide et moins coûteuse.
                            </p>
                        </div>

                        <!-- Step 4 -->
                        <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative group hover:-translate-y-1 transition-transform duration-300">
                            <div class="w-10 h-10 bg-red-900 text-white rounded-full flex items-center justify-center font-bold mb-4 mx-auto md:mx-0 shadow-lg shadow-red-900/20">4</div>
                            <h4 class="text-lg font-bold text-slate-900 mb-3">Jugement Final</h4>
                            <p class="text-sm text-slate-600 leading-relaxed">
                                Le Tribunal tranche sur les effets accessoires : Garde (Art. 298 CC), Pension (Art. 125 CC) et Biens (Art. 120 CC).
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
                    <p class="text-lg text-slate-600">Une maîtrise technique du Code Civil Suisse pour sécuriser vos intérêts.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <!-- 1. Gestion des biens -->
                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="calculator" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Gestion des biens et des dettes</h3>
                        <p class="text-slate-600 leading-relaxed mb-4">
                            Liquidation du régime matrimonial (<strong>Art. 120 CC</strong>). Nous distinguons avec précision les biens propres des acquêts (<strong>Art. 207 CC</strong>) pour assurer un partage juste.
                        </p>
                        <div class="text-xs font-mono text-slate-500 bg-slate-50 p-3 rounded-lg border border-slate-100">
                            Attention aux récompenses entre masses (Art. 209 CC) !
                        </div>
                    </div>

                    <!-- 2. Garde des enfants -->
                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="baby" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Garde des enfants & Visite</h3>
                        <p class="text-slate-600 leading-relaxed mb-4">
                            Régie par l'<strong>Article 298 CC</strong>, la garde est attribuée dans l'intérêt supérieur de l'enfant. À Genève, nous collaborons si nécessaire avec le <strong>Service de protection des mineurs (SPMi)</strong>.
                        </p>
                    </div>

                    <!-- 3. Pension Alimentaire -->
                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="coins" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Pension Alimentaire</h3>
                        <p class="text-slate-600 leading-relaxed overflow-hidden">
                            Selon l'<strong>Article 163 CC</strong>, le calcul des contributions d'entretien est technique. Nous nous assurons que vos charges réelles sont prises en compte pour un montant équitable.
                        </p>
                    </div>

                    <!-- 4. Cadre Légal Specifique -->
                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="scale" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Articles Clés du Code Civil</h3>
                        <ul class="space-y-3">
                            <li class="flex items-start gap-2 text-sm text-slate-600">
                                <span class="font-bold text-slate-900 whitespace-nowrap">Art. 114 CC :</span>
                                <span>Obligations et droits, incluant la séparation de 2 ans.</span>
                            </li>
                            <li class="flex items-start gap-2 text-sm text-slate-600">
                                <span class="font-bold text-slate-900 whitespace-nowrap">Art. 122 CC :</span>
                                <span>Partage impératif de la prévoyance professionnelle (LPP).</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQ -->
        <section id="faq" class="py-16 bg-white border-t border-slate-100">
            <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h3 class="text-xl font-bold text-slate-900 mb-8 text-center">FAQ (Questions fréquentes)</h3>
                <div class="space-y-6">
                    <div class="border-b border-slate-100 pb-4">
                        <h4 class="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                            <i data-lucide="help-circle" class="w-5 h-5 text-red-800 mt-0.5 shrink-0"></i>
                            Quel est le coût moyen d'un divorce à Genève ?
                        </h4>
                        <div class="text-sm text-slate-600 pl-7 space-y-2">
                            <p><strong>Coût global :</strong> Entre CHF 3'000 et CHF 5'000, selon la complexité.</p>
                            <p><strong>Tarif horaire :</strong> Généralement CHF 350-450.-. Chez <strong>Clegal-Avocats</strong>, nous travaillons à <strong>CHF 350.-</strong> pour garantir un accès égal à la justice, sans baisse de qualité. Arrangements de paiement possibles.</p>
                        </div>
                    </div>
                    <div class="border-b border-slate-100 pb-4">
                        <h4 class="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                            <i data-lucide="help-circle" class="w-5 h-5 text-red-800 mt-0.5 shrink-0"></i>
                            Combien de temps dure généralement une procédure ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-7">Environ 6 mois à 2 ans, dépendant de la complexité et de la coopération entre les parties.</p>
                    </div>
                    <div class="pb-4">
                        <h4 class="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                            <i data-lucide="help-circle" class="w-5 h-5 text-red-800 mt-0.5 shrink-0"></i>
                            Comment la garde des enfants est-elle déterminée ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-7">Le critère unique est l'<strong>intérêt supérieur de l'enfant</strong>. Le tribunal évalue la situation, souvent avec le soutien du SPMi si nécessaire.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Internal Linking Section -->
        <section class="py-16 bg-white border-t border-slate-100">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-3xl mx-auto mb-12">
                    <h2 class="text-2xl font-bold text-slate-900 tracking-tight mb-4">Nos Domaines d'Intervention en Droit de la Famille</h2>
                    <p class="text-slate-600">Explorez nos services spécialisés pour chaque situation.</p>
                </div>
                
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <NuxtLink to="/droit-famille/avocat-divorce" class="group block p-6 bg-slate-50 rounded-xl border border-slate-200 hover:border-red-900/30 hover:shadow-md transition-all">
                        <div class="flex items-center gap-3 mb-3">
                            <div class="p-2 bg-white rounded-lg text-red-900 shadow-sm group-hover:bg-red-900 group-hover:text-white transition-colors">
                                <i data-lucide="scissors" class="w-5 h-5"></i>
                            </div>
                            <h3 class="font-bold text-slate-900">Divorce</h3>
                        </div>
                        <p class="text-sm text-slate-600">Procédure à l'amiable ou contentieuse.</p>
                    </NuxtLink>

                    <NuxtLink to="/droit-famille/avocat-separation" class="group block p-6 bg-slate-50 rounded-xl border border-slate-200 hover:border-red-900/30 hover:shadow-md transition-all">
                        <div class="flex items-center gap-3 mb-3">
                            <div class="p-2 bg-white rounded-lg text-red-900 shadow-sm group-hover:bg-red-900 group-hover:text-white transition-colors">
                                <i data-lucide="divide-circle" class="w-5 h-5"></i>
                            </div>
                            <h3 class="font-bold text-slate-900">Séparation (MPUC)</h3>
                        </div>
                        <p class="text-sm text-slate-600">Mesures protectrices de l'union conjugale.</p>
                    </NuxtLink>

                    <NuxtLink to="/droit-famille/avocat-garde-enfant" class="group block p-6 bg-slate-50 rounded-xl border border-slate-200 hover:border-red-900/30 hover:shadow-md transition-all">
                        <div class="flex items-center gap-3 mb-3">
                            <div class="p-2 bg-white rounded-lg text-red-900 shadow-sm group-hover:bg-red-900 group-hover:text-white transition-colors">
                                <i data-lucide="baby" class="w-5 h-5"></i>
                            </div>
                            <h3 class="font-bold text-slate-900">Garde d'Enfants</h3>
                        </div>
                        <p class="text-sm text-slate-600">Autorité parentale et droit de visite.</p>
                    </NuxtLink>

                    <NuxtLink to="/droit-famille/avocat-pension-alimentaire" class="group block p-6 bg-slate-50 rounded-xl border border-slate-200 hover:border-red-900/30 hover:shadow-md transition-all">
                        <div class="flex items-center gap-3 mb-3">
                            <div class="p-2 bg-white rounded-lg text-red-900 shadow-sm group-hover:bg-red-900 group-hover:text-white transition-colors">
                                <i data-lucide="wallet" class="w-5 h-5"></i>
                            </div>
                            <h3 class="font-bold text-slate-900">Pension Alimentaire</h3>
                        </div>
                        <p class="text-sm text-slate-600">Calcul et recouvrement des contributions.</p>
                    </NuxtLink>

                     <NuxtLink to="/droit-famille/avocat-succession" class="group block p-6 bg-slate-50 rounded-xl border border-slate-200 hover:border-red-900/30 hover:shadow-md transition-all">
                        <div class="flex items-center gap-3 mb-3">
                            <div class="p-2 bg-white rounded-lg text-red-900 shadow-sm group-hover:bg-red-900 group-hover:text-white transition-colors">
                                <i data-lucide="scroll" class="w-5 h-5"></i>
                            </div>
                            <h3 class="font-bold text-slate-900">Succession</h3>
                        </div>
                        <p class="text-sm text-slate-600">Testaments et partage d'héritage.</p>
                    </NuxtLink>
                </div>
            </div>
        </section>

        <!-- Use Form Component -->
        <section id="formulaire" class="py-20 bg-slate-50 border-t border-slate-200">
            <div class="max-w-3xl mx-auto px-4">
                <div class="mb-12 text-center">
                    <h2 class="text-2xl font-bold text-slate-900 tracking-tight mb-4">Contactez votre avocat dès
                        maintenant</h2>
                    <p class="text-slate-600">Confidentialité garantie. Nous vous aidons à traverser cette épreuve.</p>
                </div>
                <ContactForm />
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Avocat Spécialiste Droit de la Famille Genève | Divorce & Garde',
  meta: [
    { name: 'description', content: 'Avocat Droit de la Famille Genève expert en Divorce, Garde d\'enfants et Pension. Défense de vos intérêts au Tribunal de 1ère Instance. 1er RDV : CHF 155.-' }
  ]
})
</script>
