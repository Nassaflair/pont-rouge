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
                        <!-- Breadcrumb-like indicator -->
                        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[10px] font-semibold uppercase tracking-widest text-slate-600 mb-8">
                            <span>Expertise</span>
                            <i data-lucide="chevron-right" class="w-3 h-3 text-slate-400"></i>
                            <span class="text-red-900">Droit du Bail &amp; Logement</span>
                        </div>

                        <h1 class="text-3xl md:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight mb-6 leading-[1.1] text-balance">
                            Avocat Droit du Bail Genève – Contestation de Loyer et Résiliation
                        </h1>
                        
                        <p class="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                            Vous faites face à une augmentation de loyer, une expulsion ou un litige locatif ? Le temps presse. Protégez votre logement et vos droits sans attendre.
                        </p>

                        <div class="flex flex-col sm:flex-row gap-4 items-start">
                             <a href="#formulaire" class="inline-flex items-center justify-center hover:bg-red-800 shadow-red-900/20 hover:shadow-xl transition-all text-sm font-medium text-white bg-red-900 rounded-md pt-4 pr-8 pb-4 pl-8 shadow-lg w-full sm:w-auto">Vérifier mon délai légal (CHF 155.-)</a>
                            <NuxtLink to="/#domaines" class="inline-flex items-center justify-center px-6 py-4 text-sm font-medium text-slate-600 bg-white hover:bg-slate-50 border border-slate-200 rounded-md transition-all w-full sm:w-auto">
                                Nos services
                            </NuxtLink>
                        </div>

                        <div class="mt-10 flex flex-wrap gap-6 text-xs text-slate-500 font-medium">
                            <span class="flex items-center gap-1.5"><i data-lucide="alert-circle" class="w-4 h-4 text-red-600"></i> Attention aux délais</span>
                            <span class="flex items-center gap-1.5"><i data-lucide="check-circle" class="w-4 h-4 text-emerald-600"></i> Commission de Conciliation</span>
                            <span class="flex items-center gap-1.5"><i data-lucide="building-2" class="w-4 h-4 text-slate-600"></i> Tribunal des Baux</span>
                        </div>
                    </div>

                    <!-- Image Right: Stability/Keys/Contract -->
                    <div class="relative hidden lg:block">
                        <div class="absolute inset-0 bg-red-900/5 rounded-2xl transform translate-x-4 translate-y-4"></div>
                        <div class="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
                            <!-- Image: Keys on contract - High quality, representing security/signing -->
                            <img src="/exp/bail.png" alt="Clés sur contrat de bail et sécurité juridique" class="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out">
                            
                            <!-- Floating Badge -->
                            <div class="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm border border-slate-200 p-4 rounded-lg shadow-lg max-w-xs">
                                <div class="flex items-center gap-3 mb-2">
                                    <div class="p-2 bg-red-50 rounded-full text-red-900">
                                        <i data-lucide="clock-3" class="w-4 h-4"></i>
                                    </div>
                                    <span class="text-xs font-semibold text-slate-900">Urgence Procédurale</span>
                                </div>
                                <p class="text-[11px] leading-snug text-slate-500">Attention aux délais en droit du bail</p>
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
                    <h2 class="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Une expertise reconnue devant le Tribunal des Baux</h2>
                    <p class="text-slate-600 text-lg">Nous intervenons pour protéger les locataires face aux régies et propriétaires, de la conciliation au jugement.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <!-- 1. Contestation de Loyer -->
                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="percent" class="w-6 h-6 text-red-900"></i>
                        </div>
                        <h3 class="text-xl font-semibold text-slate-900 mb-3">Contestation de Loyer</h3>
                        <p class="leading-relaxed text-slate-600 mb-4">Nous contestons les loyers initiaux abusifs (à la signature du bail) et nous opposons aux notifications de hausse de loyer injustifiées. 
</p>
                        <ul class="text-sm text-slate-500 space-y-2">
                            <li class="flex items-center gap-2"><div class="w-1 h-1 bg-red-900 rounded-full"></div>Calcul du rendement admissible</li>
                            <li class="flex items-center gap-2"><div class="w-1 h-1 bg-red-900 rounded-full"></div>Saisine de la Commission de Conciliation</li>
                        </ul>
                    </div>

                    <!-- 2. Résiliation de Bail -->
                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="file-x" class="w-6 h-6 text-red-900"></i>
                        </div>
                        <h3 class="text-xl font-semibold text-slate-900 mb-3">Résiliation de Bail et Congé</h3>
                        <p class="text-slate-600 leading-relaxed mb-4">
                            Défense contre les congés (résiliations) donnés par le bailleur. Nous vérifions la validité formelle de l'avis et agissons en annulation si le motif est contraire à la bonne foi (congé représailles) ou demandons une prolongation de bail.
                        </p>
                        <ul class="text-sm text-slate-500 space-y-2">
                            <li class="flex items-center gap-2"><div class="w-1 h-1 bg-red-900 rounded-full"></div>Contestation du motif du congé</li>
                            <li class="flex items-center gap-2"><div class="w-1 h-1 bg-red-900 rounded-full"></div>Demande de prolongation (jusqu'à 4 ans)</li>
                        </ul>
                    </div>

                    <!-- 3. Procédures d'Expulsion -->
                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="shield-alert" class="w-6 h-6 text-red-900"></i>
                        </div>
                        <h3 class="text-xl font-semibold text-slate-900 mb-3">Procédures d'Expulsion</h3>
                        <p class="text-slate-600 leading-relaxed mb-4">
                            Assistance immédiate en cas de menace d'expulsion ou de procédure en évacuation pour défaut de paiement. Nous négocions des délais de départ et vous représentons lors des audiences urgentes au Tribunal.
                        </p>
                        <ul class="text-sm text-slate-500 space-y-2">
                            <li class="flex items-center gap-2"><div class="w-1 h-1 bg-red-900 rounded-full"></div>Défense en cas sommaire (expulsion)</li>
                            <li class="flex items-center gap-2"><div class="w-1 h-1 bg-red-900 rounded-full"></div>Négociation de délais humanitaires</li>
                        </ul>
                    </div>

                    <!-- 4. Litiges Locatifs -->
                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="home" class="w-6 h-6 text-red-900"></i>
                        </div>
                        <h3 class="text-xl font-semibold text-slate-900 mb-3">Litiges Locatifs (Défauts &amp; Charges)</h3>
                        <p class="text-slate-600 leading-relaxed mb-4">
                            Gestion des litiges liés aux défauts de la chose louée (moisissures, nuisances, travaux). Nous exigeons la remise en état, la réduction de loyer et vérifions l'exactitude des décomptes de charges (chauffage/eau).
                        </p>
                        <ul class="text-sm text-slate-500 space-y-2">
                            <li class="flex items-center gap-2"><div class="w-1 h-1 bg-red-900 rounded-full"></div>Consignation du loyer</li>
                            <li class="flex items-center gap-2"><div class="w-1 h-1 bg-red-900 rounded-full"></div>Audit des charges accessoires</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQ -->
        <section id="faq" class="py-16 bg-white border-t border-slate-100">
            <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h3 class="text-xl font-semibold text-slate-900 mb-8 text-center">Questions Urgentes Droit du Bail</h3>
                <div class="space-y-6">
                    <div class="border-b border-slate-100 pb-4">
                        <h4 class="text-sm font-semibold text-slate-900 mb-2 flex items-start gap-2">
                            <i data-lucide="clock" class="w-4 h-4 text-red-500 mt-0.5 shrink-0"></i>
                            Quel est le délai maximal pour contester mon loyer initial ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-6">Vous avez 30 jours dès la réception des clés pour saisir l'autorité de conciliation si vous estimez le loyer initial abusif (pénurie de logement ou augmentation massive par rapport au précédent locataire).</p>
                    </div>
                    <div class="border-b border-slate-100 pb-4">
                        <h4 class="text-sm font-semibold text-slate-900 mb-2 flex items-start gap-2">
                             <i data-lucide="alert-triangle" class="w-4 h-4 text-slate-400 mt-0.5 shrink-0"></i>
                            Que faire si je reçois un avis d'expulsion ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-6">C'est une situation critique. Si vous avez reçu une résiliation pour défaut de paiement (art. 257d CO), vous devez agir immédiatement. Ne quittez pas le logement sans consulter : nous pouvons souvent négocier des délais supplémentaires devant le Tribunal.</p>
                    </div>
                    <div class="pb-4">
                        <h4 class="text-sm font-semibold text-slate-900 mb-2 flex items-start gap-2">
                             <i data-lucide="help-circle" class="w-4 h-4 text-slate-400 mt-0.5 shrink-0"></i>
                            L'avocat est-il obligatoire devant le Tribunal des Baux ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-6">Il n'est pas strictement obligatoire, mais fortement recommandé. La procédure est complexe et les régies immobilières sont toujours représentées par des professionnels. Se défendre seul réduit considérablement vos chances de succès.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Use Form Component -->
        <section id="formulaire" class="py-20 bg-slate-50 border-t border-slate-200">
            <div class="max-w-3xl mx-auto px-4">
                 <div class="mb-12 text-center">
                    <h2 class="text-2xl font-semibold text-slate-900 tracking-tight mb-4">Contactez votre avocat dès maintenant</h2>
                    <p class="text-slate-600">Réponse sous 24h. Nous agissons pour protéger votre logement.</p>
                </div>
                <ContactForm />
            </div>
        </section>
  </div>
</template>

<script setup lang="ts">
// Page specific logic
</script>