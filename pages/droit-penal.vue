<template>
  <div>
        <!-- SEO/SEA Optimized Hero Section -->
        <section class="lg:pt-32 lg:pb-24 overflow-hidden bg-white border-slate-100 border-b pt-28 pb-20 relative">
            <!-- Background effects -->
            <div class="absolute inset-0 -z-20 h-full w-full bg-white">
                <div class="absolute top-0 left-0 -ml-20 -mt-20 w-[600px] h-[600px] bg-slate-50 rounded-full blur-3xl opacity-50"></div>
                <div class="absolute bottom-0 right-0 -mr-20 -mb-20 w-[500px] h-[500px] bg-red-50/40 rounded-full blur-3xl opacity-40"></div>
            </div>
            <div class="absolute inset-0 -z-10 h-full w-full bg-grid-slate [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
            
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    
                    <!-- Content Left -->
                    <div class="text-left relative z-10">
                        <!-- Breadcrumb-like indicator -->
                        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-[10px] font-semibold uppercase tracking-widest text-red-900 mb-8">
                            <span class="relative flex h-2 w-2">
                                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                            </span>
                            <span>Intervention Immédiate</span>
                        </div>

                        <h1 class="text-3xl md:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight mb-6 leading-[1.1] text-balance">
                            Avocat Droit Pénal Genève <br>
                            <span class="text-slate-500">Défense Rigoureuse et Immédiate.</span>
                        </h1>
                        
                        <p class="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                            Convocation à la police ? Ordonnance pénale reçue ? <strong class="text-slate-900 font-semibold">Ne faites aucune déclaration sans avocat.</strong> Nous protégeons vos droits dès la première minute.
                        </p>

                        <div class="flex flex-col sm:flex-row gap-4 items-start">
                            <a href="#formulaire" class="inline-flex items-center justify-center hover:bg-red-800 shadow-red-900/20 hover:shadow-xl transition-all text-sm font-medium text-white bg-red-900 rounded-md pt-4 pr-8 pb-4 pl-8 shadow-lg w-full sm:w-auto">
                                Prendre rendez-vous (CHF 155.-)
                            </a>
                            <NuxtLink to="/#domaines" class="inline-flex items-center justify-center px-6 py-4 text-sm font-medium text-slate-600 bg-white hover:bg-slate-50 border border-slate-200 rounded-md transition-all w-full sm:w-auto">
                                Nos domaines
                            </NuxtLink>
                        </div>

                        <div class="mt-10 flex flex-wrap gap-6 text-xs text-slate-500 font-medium">
                            <span class="flex items-center gap-1.5"><i data-lucide="shield-alert" class="w-4 h-4 text-red-700"></i> Audition Police</span>
                            <span class="flex items-center gap-1.5"><i data-lucide="gavel" class="w-4 h-4 text-red-700"></i> Tribunaux</span>
                            <span class="flex items-center gap-1.5"><i data-lucide="file-warning" class="w-4 h-4 text-red-700"></i> Ministère public</span>
                        </div>
                    </div>

                    <!-- Image Right -->
                    <div class="relative hidden lg:block">
                        <div class="absolute inset-0 bg-slate-900/5 rounded-2xl transform translate-x-4 translate-y-4"></div>
                        <div class="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
                            <!-- Image related to Criminal Law (Abstract/Serious) -->
                            <img src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop" alt="Palais de Justice Genève" class="w-full h-auto object-cover grayscale-[20%] contrast-110 transform group-hover:scale-105 transition-transform duration-700 ease-out">
                            
                            <!-- Floating Badge -->
                            <div class="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm border border-slate-200 p-4 rounded-lg shadow-lg max-w-xs">
                                <div class="flex items-center gap-3 mb-2">
                                    <div class="p-2 bg-red-50 rounded-full text-red-900">
                                        <i data-lucide="siren" class="w-4 h-4"></i>
                                    </div>
                                    <span class="text-xs font-semibold text-slate-900">Assistance 24/7</span>
                                </div>
                                <p class="text-[11px] leading-snug text-slate-500">A vos côtés même dans les moments difficiles, sans jugement de valeur.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <!-- Core Services -->
        <section id="services" class="py-20 bg-slate-50 border-t border-slate-200">
            <div class="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
                <div class="mb-16 text-center max-w-3xl mx-auto">
                    <h2 class="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Une défense active à tous les stades de la procédure</h2>
                    <p class="text-slate-600 text-lg">Le droit pénal est une course contre la montre. Chaque document signé, chaque mot prononcé a un impact définitif sur votre casier judiciaire et votre avenir.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <!-- 1. Défense du Prévenu -->
                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="user-x" class="w-6 h-6 text-red-900"></i>
                        </div>
                        <h3 class="text-xl font-semibold text-slate-900 mb-3">Défense du Prévenu (Accusé)</h3>
                        <p class="text-slate-600 leading-relaxed mb-4">
                            Nous vous assistons dès les auditions à la police, devant le Ministère Public et lors des débats au Tribunal de Police ou Correctionnel. Notre priorité : garantir le respect de la présomption d'innocence.
                        </p>
                        <ul class="text-sm text-slate-500 space-y-2">
                            <li class="flex items-center gap-2"><div class="w-1 h-1 bg-red-900 rounded-full"></div>Préparation aux interrogatoires de police</li>
                            <li class="flex items-center gap-2"><div class="w-1 h-1 bg-red-900 rounded-full"></div>Plaidoiries et mise en liberté provisoire</li>
                        </ul>
                    </div>

                    <!-- 2. Droit de la Circulation -->
                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="car-front" class="w-6 h-6 text-red-900"></i>
                        </div>
                        <h3 class="text-xl font-semibold text-slate-900 mb-3">Droit de la Circulation Routière (LCR)</h3>
                        <p class="text-slate-600 leading-relaxed mb-4">
                            Excès de vitesse, alcool au volant ou délit de fuite (Via Sicura). Nous gérons la procédure pénale et la procédure administrative parallèle pour limiter ou éviter le retrait du permis de conduire.
                        </p>
                        <ul class="text-sm text-slate-500 space-y-2">
                            <li class="flex items-center gap-2"><div class="w-1 h-1 bg-red-900 rounded-full"></div>Défense contre le retrait de permis</li>
                            <li class="flex items-center gap-2"><div class="w-1 h-1 bg-red-900 rounded-full"></div>Contestation des mesures Via Sicura</li>
                        </ul>
                    </div>

                    <!-- 3. Opposition Ordonnances -->
                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="file-clock" class="w-6 h-6 text-red-900"></i>
                        </div>
                        <h3 class="text-xl font-semibold text-slate-900 mb-3">Opposition aux Ordonnances Pénales</h3>
                        <p class="text-slate-600 leading-relaxed mb-4">
                            Une ordonnance pénale est un jugement. Vous n'avez que 10 jours pour former opposition. Nous agissons dans l'urgence pour stopper l'entrée en force de la condamnation et accéder au dossier.
                        </p>
                        <ul class="text-sm text-slate-500 space-y-2">
                            <li class="flex items-center gap-2"><div class="w-1 h-1 bg-red-900 rounded-full"></div>Rédaction immédiate de l'opposition</li>
                            <li class="flex items-center gap-2"><div class="w-1 h-1 bg-red-900 rounded-full"></div>Négociation avec le Procureur</li>
                        </ul>
                    </div>

                    <!-- 4. Victimes -->
                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="heart-handshake" class="w-6 h-6 text-red-900"></i>
                        </div>
                        <h3 class="text-xl font-semibold text-slate-900 mb-3">Représentation des Victimes</h3>
                        <p class="text-slate-600 leading-relaxed mb-4">
                            Victime d'une infraction ? Nous vous accompagnons pour le dépôt de plainte, la constitution de partie civile (partie plaignante) et la demande de dommages-intérêts et tort moral lors du procès.
                        </p>
                        <ul class="text-sm text-slate-500 space-y-2">
                            <li class="flex items-center gap-2"><div class="w-1 h-1 bg-red-900 rounded-full"></div>Assistance LavI (Loi aide aux victimes)</li>
                            <li class="flex items-center gap-2"><div class="w-1 h-1 bg-red-900 rounded-full"></div>Participation active à l'instruction</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- Authority / Urgency -->
        <section class="py-24 bg-slate-900 text-white relative overflow-hidden">
             <!-- Abstract bg elements -->
             <div class="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-red-900/20 rounded-full blur-3xl opacity-30"></div>

            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div class="grid md:grid-cols-2 gap-16 items-center">
                    <div class="">
                        <h2 class="text-3xl font-semibold tracking-tight mb-6">Pourquoi une intervention rapide est décisive ?</h2>
                        <p class="text-slate-300 text-lg leading-relaxed mb-8">
                            En droit pénal, les premières heures sont critiques. Les déclarations faites à la police sans préparation sont souvent irréversibles et seront utilisées contre vous jusqu'au jugement final.
                        </p>
                        
                        <div class="space-y-6">
                            <div class="flex gap-4">
                                <div class="flex-shrink-0 mt-1">
                                    <i data-lucide="mic-off" class="w-5 h-5 text-red-400"></i>
                                </div>
                                <div class="">
                                    <h4 class="font-medium text-white">Droit au silence</h4>
                                    <p class="text-sm text-slate-400 mt-1">Nous vous expliquons quand parler et quand vous taire pour ne pas vous auto-incriminer avant d'avoir accès au dossier complet.</p>
                                </div>
                            </div>
                            <div class="flex gap-4">
                                <div class="flex-shrink-0 mt-1">
                                    <i data-lucide="file-search" class="w-5 h-5 text-red-400"></i>
                                </div>
                                <div class="">
                                    <h4 class="font-medium text-white">Stratégie de défense</h4>
                                    <p class="text-sm text-slate-400 mt-1">En matière pénale, il est essentielle d'avoir une stratégie de défense dès le départ et de s'y tenir.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                        <div class="text-center">
                            <span class="inline-block p-3 rounded-full bg-red-900/30 text-red-200 mb-4">
                                <i data-lucide="scale" class="w-8 h-8"></i>
                            </span>
                            <h3 class="text-xl font-semibold mb-2">Notre Stratégie de Défense</h3>
                            <p class="text-slate-400 text-sm mb-6">Nous ne laissons rien au hasard. Chaque étape est planifiée.</p>
                            
                            <div class="grid grid-cols-3 gap-2 text-center">
                                <div class="p-3 bg-white/5 rounded-lg border border-white/5">
                                    <span class="block text-lg font-bold text-white mb-1">1</span>
                                    <span class="text-[10px] uppercase tracking-wider text-slate-400">Accès Dossier</span>
                                </div>
                                <div class="p-3 bg-white/5 rounded-lg border border-white/5">
                                    <span class="block text-lg font-bold text-white mb-1">2</span>
                                    <span class="text-[10px] uppercase tracking-wider text-slate-400">Analyse Risques</span>
                                </div>
                                <div class="p-3 bg-white/5 rounded-lg border border-white/5">
                                    <span class="block text-lg font-bold text-white mb-1">3</span>
                                    <span class="text-[10px] uppercase tracking-wider text-slate-400">Plaidoirie</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQ -->
        <section id="faq" class="py-16 bg-white border-t border-slate-100">
            <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h3 class="text-xl font-semibold text-slate-900 mb-8 text-center">Questions fréquentes - Urgence Pénale</h3>
                <div class="space-y-6">
                    <div class="border-b border-slate-100 pb-4">
                        <h4 class="text-sm font-semibold text-slate-900 mb-2 flex items-start gap-2">
                            <i data-lucide="help-circle" class="w-4 h-4 text-slate-400 mt-0.5 shrink-0"></i>
                            J'ai reçu une convocation de la police, dois-je y aller ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-6">Oui, l'obligation de comparaître existe. Cependant, vous avez le droit d'être accompagné d'un avocat. Nous vous conseillons vivement de nous consulter avant pour préparer vos réponses et éviter les pièges de l'interrogatoire.</p>
                    </div>
                    <div class="border-b border-slate-100 pb-4">
                        <h4 class="text-sm font-semibold text-slate-900 mb-2 flex items-start gap-2">
                             <i data-lucide="help-circle" class="w-4 h-4 text-slate-400 mt-0.5 shrink-0"></i>
                            Quel est le délai pour s'opposer à une ordonnance pénale ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-6">Le délai est de 10 jours dès la notification. C'est un délai strict. Passé ce délai, l'ordonnance devient un jugement définitif et la peine est exécutoire. Contactez-nous immédiatement pour former opposition.</p>
                    </div>
                    <div class="pb-4">
                        <h4 class="text-sm font-semibold text-slate-900 mb-2 flex items-start gap-2">
                             <i data-lucide="help-circle" class="w-4 h-4 text-slate-400 mt-0.5 shrink-0"></i>
                            Est-ce que j'aurai un casier judiciaire ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-6">L'inscription dépend de l'infracation et de la peine. Cela peut impacter votre emploi et votre permis de séjour si vous êtes étranger. Notre but est d'éviter l'inscription ou d'obtenir une peine qui ne figure pas sur l'extrait pour particuliers.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Formular -->
        <section id="formulaire" class="py-20 bg-slate-50 border-t border-slate-200">
            <div class="max-w-3xl mx-auto px-4">
                 <div class="mb-12 text-center">
                    <h2 class="text-2xl font-semibold text-slate-900 tracking-tight mb-4">Contactez votre avocat dès maintenant</h2>
                    <p class="text-slate-600">Réponse sous 24h. Confidentialité totale garantie pour toutes les affaires pénales.</p>
                </div>
                <ContactForm />
            </div>
        </section>
  </div>
</template>

<script setup lang="ts">
// Page specific logic
</script>