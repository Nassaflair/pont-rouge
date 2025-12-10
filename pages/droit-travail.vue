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
                            <span class="text-red-900">Droit du Travail</span>
                        </div>

                        <h1 class="text-3xl md:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight mb-6 leading-[1.1] text-balance">
                            Avocat Droit du Travail Genève – Défense Efficace Contre le Licenciement Abusif
                        </h1>
                        
                        <p class="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                            Vous faites face à un licenciement, un litige sur salaire ou un problème de contrat ? Nos experts protègent vos droits et intérêts financiers sans délai.
                        </p>

                        <div class="flex flex-col sm:flex-row gap-4 items-start">
                            <a href="#formulaire" class="inline-flex items-center justify-center hover:bg-red-800 shadow-red-900/20 hover:shadow-xl transition-all text-sm font-medium text-white bg-red-900 rounded-md pt-4 pr-8 pb-4 pl-8 shadow-lg w-full sm:w-auto">Vérifier mon licenciement (CHF 155.-)</a>
                            <NuxtLink to="/#domaines" class="inline-flex items-center justify-center px-6 py-4 text-sm font-medium text-slate-600 bg-white hover:bg-slate-50 border border-slate-200 rounded-md transition-all w-full sm:w-auto">
                                Nos services
                            </NuxtLink>
                        </div>

                        <div class="mt-10 flex flex-wrap gap-6 text-xs text-slate-500 font-medium">
                            <span class="flex items-center gap-1.5"><i data-lucide="alert-circle" class="w-4 h-4 text-red-600"></i> Délais de 30 jours</span>
                            <span class="flex items-center gap-1.5"><i data-lucide="check-circle" class="w-4 h-4 text-emerald-600"></i> Contestation immédiate</span>
                            <span class="flex items-center gap-1.5"><i data-lucide="check-circle" class="w-4 h-4 text-emerald-600"></i> Tribunal Prud'hommes</span>
                        </div>
                    </div>

                    <!-- Image Right -->
                    <div class="relative hidden lg:block">
                        <div class="absolute inset-0 bg-red-900/5 rounded-2xl transform translate-x-4 translate-y-4"></div>
                        <div class="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
                            <!-- Image: Abstract/Contract/Strategy - No handshakes -->
                            <img src="/exp/work.png" alt="Stratégie juridique et négociation contractuelle" class="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out">
                            
                            <!-- Floating Badge -->
                            <div class="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm border border-slate-200 p-4 rounded-lg shadow-lg max-w-xs">
                                <div class="flex items-center gap-3 mb-2">
                                    <div class="p-2 bg-red-50 rounded-full text-red-900">
                                        <i data-lucide="shield-alert" class="w-4 h-4"></i>
                                    </div>
                                    <span class="text-xs font-semibold text-slate-900">Urgence Juridique</span>
                                </div>
                                <p class="text-[11px] leading-snug text-slate-500">Les délais de contestation sont courts. Agissez avant de signer une "quittance pour solde de tout compte".</p>
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
                    <h2 class="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Votre défense stratégique devant le Tribunal des Prud'hommes</h2>
                    <p class="text-slate-600 text-lg">Nous intervenons à tous les stades du conflit, de la négociation confidentielle à la procédure contentieuse.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <!-- 1. Contestation Licenciement -->
                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="briefcase" class="w-6 h-6 text-red-900"></i>
                        </div>
                        <h3 class="text-xl font-semibold text-slate-900 mb-3">Contestation de Licenciement</h3>
                        <p class="text-slate-600 leading-relaxed mb-4">
                            Stratégie immédiate pour contester les licenciements abusifs ou avec effet immédiat. Nous sécurisons vos droits aux indemnités (jusqu'à 6 mois de salaire) et veillons au respect des délais impératifs d'opposition.
                        </p>
                        <ul class="text-sm text-slate-500 space-y-2">
                            <li class="flex items-center gap-2"><div class="w-1 h-1 bg-red-900 rounded-full"></div>Opposition écrite formelle (Délai court)</li>
                            <li class="flex items-center gap-2"><div class="w-1 h-1 bg-red-900 rounded-full"></div>Négociation des indemnités de départ</li>
                        </ul>
                    </div>

                    <!-- 2. Litiges Salariaux -->
                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="coins" class="w-6 h-6 text-red-900"></i>
                        </div>
                        <h3 class="text-xl font-semibold text-slate-900 mb-3">Litiges Financiers et Salariaux</h3>
                        <p class="text-slate-600 leading-relaxed mb-4">
                            Récupération de salaires impayés, indemnisation des heures supplémentaires non compensées, litiges sur les bonus de performance et paiement des vacances non prises à la fin des rapports de travail.
                        </p>
                        <ul class="text-sm text-slate-500 space-y-2">
                            <li class="flex items-center gap-2"><div class="w-1 h-1 bg-red-900 rounded-full"></div>Calcul précis des arriérés de salaire</li>
                            <li class="flex items-center gap-2"><div class="w-1 h-1 bg-red-900 rounded-full"></div>Mise en demeure de l'employeur</li>
                        </ul>
                    </div>

                    <!-- 3. Contrats -->
                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="file-signature" class="w-6 h-6 text-red-900"></i>
                        </div>
                        <h3 class="text-xl font-semibold text-slate-900 mb-3">Rédaction et Révision de Contrats</h3>
                        <p class="text-slate-600 leading-relaxed mb-4">
                            Analyse préventive de vos contrats de travail avant signature. Nous examinons la validité des clauses de non-concurrence, les délais de congé et les conditions salariales complexes pour sécuriser votre position.
                        </p>
                        <ul class="text-sm text-slate-500 space-y-2">
                            <li class="flex items-center gap-2"><div class="w-1 h-1 bg-red-900 rounded-full"></div>Audit de clause de non-concurrence</li>
                            <li class="flex items-center gap-2"><div class="w-1 h-1 bg-red-900 rounded-full"></div>Mandat et Cahier des charges</li>
                        </ul>
                    </div>

                    <!-- 4. Tribunal -->
                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="gavel" class="w-6 h-6 text-red-900"></i>
                        </div>
                        <h3 class="text-xl font-semibold text-slate-900 mb-3">Procédure Tribunal des Prud'hommes</h3>
                        <p class="text-slate-600 leading-relaxed mb-4">
                            Représentation pugnace devant le Tribunal des Prud'hommes de Genève. Nous vous assistons lors de l'audience de conciliation obligatoire et plaidons votre dossier lors de la phase de jugement si aucun accord n'est trouvé.
                        </p>
                        <ul class="text-sm text-slate-500 space-y-2">
                            <li class="flex items-center gap-2"><div class="w-1 h-1 bg-red-900 rounded-full"></div>Préparation du dossier de plaidoirie</li>
                            <li class="flex items-center gap-2"><div class="w-1 h-1 bg-red-900 rounded-full"></div>Assistance en audience de conciliation</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQ -->
        <section id="faq" class="py-16 bg-white border-t border-slate-100">
            <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h3 class="text-xl font-semibold text-slate-900 mb-8 text-center">Questions Urgentes Droit du Travail</h3>
                <div class="space-y-6">
                    <div class="border-b border-slate-100 pb-4">
                        <h4 class="text-sm font-semibold text-slate-900 mb-2 flex items-start gap-2">
                            <i data-lucide="clock" class="w-4 h-4 text-red-500 mt-0.5 shrink-0"></i>
                            Quel est le délai maximal pour contester mon licenciement ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-6">Vous devez faire opposition par écrit à votre employeur avant la fin du délai de congé. Une fois les rapports de travail terminés, vous avez ensuite 180 jours pour saisir le Tribunal des Prud'hommes. Agissez vite pour ne pas perdre vos droits.</p>
                    </div>
                    <div class="border-b border-slate-100 pb-4">
                        <h4 class="text-sm font-semibold text-slate-900 mb-2 flex items-start gap-2">
                             <i data-lucide="help-circle" class="w-4 h-4 text-slate-400 mt-0.5 shrink-0"></i>
                            Ai-je droit à une indemnité en cas de licenciement immédiat ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-6">Si le licenciement immédiat est injustifié ("sans justes motifs"), vous avez droit au salaire que vous auriez gagné jusqu'à la fin du délai de congé ordinaire, plus une indemnité pouvant aller jusqu'à 6 mois de salaire.</p>
                    </div>
                    <div class="pb-4">
                        <h4 class="text-sm font-semibold text-slate-900 mb-2 flex items-start gap-2">
                             <i data-lucide="activity" class="w-4 h-4 text-slate-400 mt-0.5 shrink-0"></i>
                            Puis-je être licencié pendant mon arrêt maladie ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-6">En règle générale, non. Vous êtes protégé contre le licenciement pendant une certaine période (30, 90 ou 180 jours selon l'ancienneté). Un licenciement prononcé durant cette période est nul. Si le licenciement a été donné avant la maladie, le délai de congé est suspendu.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Use Form Component -->
        <section id="formulaire" class="py-20 bg-slate-50 border-t border-slate-200">
            <div class="max-w-3xl mx-auto px-4">
                 <div class="mb-12 text-center">
                    <h2 class="text-2xl font-semibold text-slate-900 tracking-tight mb-4">Contactez votre avocat dès maintenant</h2>
                    <p class="text-slate-600">Réponse sous 24h. Nous défendons vos droits de salarié.</p>
                </div>
                <ContactForm />
            </div>
        </section>
  </div>
</template>

<script setup lang="ts">
// Page specific logic
</script>