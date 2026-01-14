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
                            { name: 'Droit de la Famille', path: '/droit-famille' },
                            { name: 'Avocat Divorce', path: '/droit-famille/avocat-divorce' }
                        ]" />

                        <h1 class="text-3xl md:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight mb-6 leading-[1.1] text-balance">
                            Avocat Expert en Divorce à Genève<br>
                        </h1>

                        <p class="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                            Conseil juridique expert pour votre procédure de divorce. Nous protégeons vos intérêts et ceux de vos enfants devant le Tribunal de Première Instance.
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
                            <span class="flex items-center gap-1.5"><i data-lucide="check-circle" class="w-4 h-4 text-emerald-600"></i> Divorce Amiable</span>
                            <span class="flex items-center gap-1.5"><i data-lucide="check-circle" class="w-4 h-4 text-emerald-600"></i> Divorce Contentieux</span>
                            <span class="flex items-center gap-1.5"><i data-lucide="check-circle" class="w-4 h-4 text-emerald-600"></i> MPUC</span>
                        </div>
                    </div>

                    <!-- Image Right -->
                    <div class="relative hidden lg:block">
                        <div class="absolute inset-0 bg-red-900/5 rounded-2xl transform translate-x-4 translate-y-4"></div>
                        <div class="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
                            <NuxtImg format="webp" src="/images/landing_hero.png" alt="Avocat Divorce Genève"
                                class="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" />
                            <div class="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm border border-slate-200 p-4 rounded-lg shadow-lg max-w-xs">
                                <div class="flex items-center gap-3 mb-2">
                                    <div class="p-2 bg-red-50 rounded-full text-red-900">
                                        <i data-lucide="heart-handshake" class="w-4 h-4"></i>
                                    </div>
                                    <span class="text-xs font-semibold text-slate-900">Droit de la Famille</span>
                                </div>
                                <p class="text-[11px] leading-snug text-slate-500">Tribunal de Première Instance, Genève.</p>
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
                    <h2 class="text-3xl font-bold tracking-tight text-slate-900 mb-4">Pourquoi choisir un Avocat à Genève ?</h2>
                    <p class="text-lg text-slate-600">Une expertise locale indispensable pour réussir votre procédure.</p>
                </div>
                
                <div class="grid md:grid-cols-2 gap-12 items-center">
                    <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                        <div class="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900">
                            <i data-lucide="landmark" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-4">Connaissance du Tribunal</h3>
                        <p class="text-slate-600 leading-relaxed">
                            La connaissance des spécificités du <strong>Tribunal de Première Instance de Genève</strong> et des tendances des juges locaux est cruciale pour la stratégie de votre cas et l'obtention du meilleur résultat.
                        </p>
                    </div>

                    <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                        <div class="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900">
                            <i data-lucide="shield" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-4">Stratégie MPUC</h3>
                        <p class="text-slate-600 leading-relaxed">
                            Un avocat local est mieux placé pour naviguer dans les complexités des <strong>Mesures Protectrices de l'Union Conjugale (MPUC)</strong>, une étape souvent décisive dans la procédure de divorce.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Process Section -->
        <section class="py-20 bg-white border-b border-slate-100 overflow-hidden">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-3xl mx-auto mb-16">
                    <h2 class="text-3xl font-bold tracking-tight text-slate-900 mb-4">La Procédure de Divorce à Genève</h2>
                    <p class="text-slate-500 font-medium tracking-wide uppercase text-sm">Les Étapes Clés</p>
                </div>

                <div class="relative">
                    <div class="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>
                    <div class="grid md:grid-cols-3 gap-6 relative z-10 max-w-4xl mx-auto">
                        <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                            <div class="w-9 h-9 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold mb-3 text-sm">1</div>
                            <h4 class="text-base font-bold text-slate-900 mb-2">Dépôt de la Requête</h4>
                            <p class="text-xs text-slate-600">Certificat de mariage, résidence, et situation financière.</p>
                        </div>
                        <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                            <div class="w-9 h-9 bg-white text-slate-900 border-2 border-slate-900 rounded-full flex items-center justify-center font-bold mb-3 text-sm">2</div>
                            <h4 class="text-base font-bold text-slate-900 mb-2">Audience de Conciliation</h4>
                            <p class="text-xs text-slate-600">Tentative d'accord amiable au Tribunal.</p>
                        </div>
                        <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                            <div class="w-9 h-9 bg-red-900 text-white rounded-full flex items-center justify-center font-bold mb-3 text-sm">3</div>
                            <h4 class="text-base font-bold text-slate-900 mb-2">Jugement de Divorce</h4>
                            <p class="text-xs text-slate-600">Accord ou après délai de séparation (Art 114 CC).</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Service Grid / Key Issues -->
        <section class="py-20 bg-slate-50 border-b border-slate-200">
             <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="mb-16 text-center max-w-3xl mx-auto">
                    <h2 class="text-3xl font-bold tracking-tight text-slate-900 mb-4">Enjeux Clés du Divorce</h2>
                    <p class="text-lg text-slate-600">Garde des enfants, patrimoine et pensions.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                         <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="baby" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Garde des Enfants</h3>
                        <p class="text-slate-600 text-sm leading-relaxed">
                            La <strong>Chambre des tutelles</strong> gère les arrangements de garde, en privilégiant l'intérêt supérieur de l'enfant pour garantir son équilibre et sa stabilité.
                        </p>
                    </div>

                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                         <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="coins" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Pension Alimentaire</h3>
                        <p class="text-slate-600 text-sm leading-relaxed">
                            Le calcul de la pension alimentaire suit les normes de l'<strong>Office des Poursuites</strong>, incluant le strict calcul du 'Minimum Vital' pour chaque époux.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Legal Framework -->
        <section id="features" class="py-20 bg-white border-t border-slate-200">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="mb-16 text-center max-w-3xl mx-auto">
                    <h2 class="text-3xl font-bold tracking-tight text-slate-900 mb-4">cadre Légal (Code Civil)</h2>
                    <p class="text-lg text-slate-600">Les bases juridiques du divorce en Suisse (CC).</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="book-open" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Articles 111 & 112 CC</h3>
                        <ul class="space-y-2 text-slate-600 text-sm">
                            <li><strong>Art 111 CC</strong> : Divorce sur requête commune.</li>
                            <li><strong>Art 112 CC</strong> : Accord complet ou partiel.</li>
                        </ul>
                    </div>

                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="scale" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Article 114 CC</h3>
                        <ul class="space-y-2 text-slate-600 text-sm">
                            <li><strong>Art 114 CC</strong> : Divorce sur demande unilatérale.</li>
                            <li>Possible après <strong>deux ans</strong> de vie séparée.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQ -->
        <section id="faq" class="py-16 bg-slate-50 border-t border-slate-100">
            <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h3 class="text-xl font-bold text-slate-900 mb-8 text-center">FAQ Divorce Genève</h3>
                <div class="space-y-6">
                    <div class="border-b border-slate-200 pb-4">
                        <h4 class="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                            <i data-lucide="help-circle" class="w-5 h-5 text-red-800 mt-0.5 shrink-0"></i>
                            Combien coûte un divorce à Genève ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-7">Pour une affaire simple à l'amiable, comptez entre <strong>CHF 2'000 et 4'000</strong>. En cas de contentieux, le tarif horaire est d'environ CHF 350.-.</p>
                    </div>
                    <div class="border-b border-slate-200 pb-4">
                        <h4 class="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                            <i data-lucide="help-circle" class="w-5 h-5 text-red-800 mt-0.5 shrink-0"></i>
                            Quels sont les délais pour divorcer ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-7">Pour une requête commune : 3 à 5 mois. Pour une demande unilatérale, il faut souvent attendre le délai de <strong>2 ans</strong> de séparation (Art 114 CC).</p>
                    </div>
                    <div class="pb-4">
                         <h4 class="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                            <i data-lucide="help-circle" class="w-5 h-5 text-red-800 mt-0.5 shrink-0"></i>
                             La garde alternée est-elle automatique ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-7">Elle est privilégiée mais pas automatique. L'intérêt de l'enfant prime, évalué par la Chambre des tutelles ou le Tribunal.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Form Section -->
        <section id="formulaire" class="py-20 bg-white border-t border-slate-200">
            <div class="max-w-3xl mx-auto px-4">
                <div class="mb-12 text-center">
                    <h2 class="text-2xl font-bold text-slate-900 tracking-tight mb-4">Besoin d'un avocat pour votre divorce ?</h2>
                    <p class="text-slate-600">Nous défendons vos droits avec empathie et fermeté.</p>
                </div>
                <ContactForm />
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
useLocalSeo(
  'Avocat Divorce Genève | Séparation & Garde d\'Enfants',
  'Avocat Spécialiste Divorce à Genève. Divorce amiable ou contentieux, garde d\'enfants, pension alimentaire. Assistance au Tribunal de Première Instance. 1er RDV : CHF 155.-',
  {
    type: 'LegalService',
    priceRange: 'Dès CHF 155.-',
    faq: [
      {
        question: 'Combien coûte un divorce à Genève ?',
        answer: 'Pour une affaire simple à l\'amiable, le tarif est généralement forfaitaire (dès CHF 2\'000). En cas de contentieux, le tarif horaire usuel s\'applique (environ CHF 350.-/heure). Un devis précis est établi lors du premier rendez-vous.'
      },
      {
        question: 'Quels sont les délais pour divorcer ?',
        answer: 'Pour une requête commune avec accord complet, le jugement peut être rendu en 3 à 5 mois. Pour une demande unilatérale, la procédure est plus longue et peut nécessiter d\'attendre le délai de séparation de 2 ans.'
      },
      {
        question: 'La garde alternée est-elle automatique ?',
        answer: 'La garde alternée est le principe privilégié par la loi suisse, mais elle n\'est pas automatique. Le juge décidera toujours en fonction de l\'intérêt supérieur de l\'enfant et des capacités organisationnelles des parents.'
      }
    ]
  }
)
</script>
