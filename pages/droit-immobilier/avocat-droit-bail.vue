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
                            { name: 'Droit Immobilier', path: '/droit-immobilier' },
                            { name: 'Droit du Bail', path: '/droit-immobilier/avocat-droit-bail' }
                        ]" />

                        <h1 class="text-3xl md:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight mb-6 leading-[1.1] text-balance">
                            Avocat Droit du Bail à Genève<br>
                        </h1>

                        <p class="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                            Résiliation de bail, hausse de loyer ou défauts du logement ? Nous défendons locataires et bailleurs devant le Tribunal des Baux et Loyers.
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
                            <span class="flex items-center gap-1.5"><i data-lucide="check-circle" class="w-4 h-4 text-emerald-600"></i> Contestation Résiliation</span>
                            <span class="flex items-center gap-1.5"><i data-lucide="check-circle" class="w-4 h-4 text-emerald-600"></i> Baisse de Loyer</span>
                            <span class="flex items-center gap-1.5"><i data-lucide="check-circle" class="w-4 h-4 text-emerald-600"></i> Expulsion</span>
                        </div>
                    </div>

                    <!-- Image Right -->
                    <div class="relative hidden lg:block">
                        <div class="absolute inset-0 bg-red-900/5 rounded-2xl transform translate-x-4 translate-y-4"></div>
                        <div class="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
                            <NuxtImg format="webp" src="/exp/bail.png" alt="Avocat Droit du Bail Genève"
                                class="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" />
                            <div class="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm border border-slate-200 p-4 rounded-lg shadow-lg max-w-xs">
                                <div class="flex items-center gap-3 mb-2">
                                    <div class="p-2 bg-red-50 rounded-full text-red-900">
                                        <i data-lucide="home" class="w-4 h-4"></i>
                                    </div>
                                    <span class="text-xs font-semibold text-slate-900">Tribunal des Baux</span>
                                </div>
                                <p class="text-[11px] leading-snug text-slate-500">Rue du Stand 26, 1204 Genève.</p>
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
                    <h2 class="text-3xl font-bold tracking-tight text-slate-900 mb-4">Pourquoi faire appel à un avocat en droit du bail ?</h2>
                    <p class="text-lg text-slate-600">Le droit du bail est formel et strict. Une erreur de délai peut être fatale.</p>
                </div>
                
                <div class="grid md:grid-cols-2 gap-12 items-center">
                    <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                        <div class="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900">
                            <i data-lucide="calendar-clock" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-4">Respect des Délais (30 jours)</h3>
                        <p class="text-slate-600 leading-relaxed">
                            Pour contester une résiliation de bail ou une hausse de loyer, vous avez impérativement **30 jours** pour saisir la Commission de conciliation. Passé ce délai, la décision de la régie devient définitive.
                        </p>
                    </div>

                    <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                        <div class="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900">
                            <i data-lucide="scale" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-4">Expertise Tribunal des Baux</h3>
                        <p class="text-slate-600 leading-relaxed">
                            Nous connaissons parfaitement la jurisprudence genevoise en matière de calcul de rendement (pour les loyers) et les motifs d'annulation de congé. Nous plaidons devant le Tribunal des Baux et Loyers.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Process Section -->
        <section class="py-20 bg-white border-b border-slate-100 overflow-hidden">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-3xl mx-auto mb-16">
                    <h2 class="text-3xl font-bold tracking-tight text-slate-900 mb-4">La Procédure en Droit du Bail</h2>
                    <p class="text-slate-500 font-medium tracking-wide uppercase text-sm">Commission de Conciliation</p>
                </div>

                <div class="relative">
                    <div class="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>
                     <div class="grid md:grid-cols-3 gap-6 relative z-10 max-w-4xl mx-auto">
                        <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                            <div class="w-9 h-9 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold mb-3 text-sm">1</div>
                            <h4 class="text-base font-bold text-slate-900 mb-2">Requête en Conciliation</h4>
                            <p class="text-xs text-slate-600">Saisie de la Commission (Gratuit). Obligatoire avant tout procès.</p>
                        </div>
                        <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                            <div class="w-9 h-9 bg-white text-slate-900 border-2 border-slate-900 rounded-full flex items-center justify-center font-bold mb-3 text-sm">2</div>
                            <h4 class="text-base font-bold text-slate-900 mb-2">Audience de Conciliation</h4>
                            <p class="text-xs text-slate-600">Tentative d'accord entre locataire et bailleur (régie).</p>
                        </div>
                        <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                            <div class="w-9 h-9 bg-red-900 text-white rounded-full flex items-center justify-center font-bold mb-3 text-sm">3</div>
                            <h4 class="text-base font-bold text-slate-900 mb-2">Tribunal des Baux</h4>
                            <p class="text-xs text-slate-600">Si échec, nous portons l'affaire devant le Tribunal pour jugement.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Service Grid / Key Issues -->
        <section class="py-20 bg-slate-50 border-b border-slate-200">
             <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="mb-16 text-center max-w-3xl mx-auto">
                    <h2 class="text-3xl font-bold tracking-tight text-slate-900 mb-4">Domaines d'Intervention</h2>
                    <p class="text-lg text-slate-600">Locataires et Bailleurs.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                         <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="file-warning" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Résiliation de Bail</h3>
                        <p class="text-slate-600 text-sm leading-relaxed">
                            Nous contestons les résiliations ordinaires ou extraordinaires (pour défaut de paiement) si elles violent les règles de bonne foi (Art 271 CO) ou si elles sont abusives.
                        </p>
                    </div>

                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                         <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="trending-down" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Loyer & Charges</h3>
                        <p class="text-slate-600 text-sm leading-relaxed">
                            Demandes de baisse de loyer (baisse du taux hypothécaire) ou contestation de hausse initiale (Art 270 CO). Vérification des décomptes de chauffage/frais accessoires.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Legal Framework -->
        <section id="features" class="py-20 bg-white border-t border-slate-200">
             <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="mb-16 text-center max-w-3xl mx-auto">
                    <h2 class="text-3xl font-bold tracking-tight text-slate-900 mb-4">Bases Légales</h2>
                    <p class="text-lg text-slate-600">Code des Obligations (CO) et OBLF.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="book-open" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Article 271 CO</h3>
                        <p class="text-slate-600 text-sm leading-relaxed">
                            Le congé est annulable s'il contrevient aux règles de la bonne foi. Par exemple, un congé représailles après avoir demandé une réparation est abusif.
                        </p>
                    </div>

                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="shield" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Article 259a CO</h3>
                        <p class="text-slate-600 text-sm leading-relaxed">
                            En cas de défauts de la chose louée (moisissures, bruit, panne), le locataire a droit à une remise en état, une réduction de loyer et des dommages-intérêts.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQ -->
        <section id="faq" class="py-16 bg-slate-50 border-t border-slate-100">
             <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h3 class="text-xl font-bold text-slate-900 mb-8 text-center">FAQ Droit du Bail Genève</h3>
                <div class="space-y-6">
                    <div class="border-b border-slate-200 pb-4">
                         <h4 class="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                            <i data-lucide="help-circle" class="w-5 h-5 text-red-800 mt-0.5 shrink-0"></i>
                            J'ai reçu mon congé, que faire ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-7">Vous avez <strong>30 jours</strong> dès la réception pour saisir la Commission de conciliation en annulation de congé ou prolongation de bail. Agissez vite.</p>
                     </div>
                    <div class="border-b border-slate-200 pb-4">
                        <h4 class="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                            <i data-lucide="help-circle" class="w-5 h-5 text-red-800 mt-0.5 shrink-0"></i>
                            Puis-je sous-louer mon appartement ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-7">Oui, avec le consentement du bailleur (Art 262 CO). Le bailleur ne peut refuser que pour des justes motifs (conditions abusives, désavantage majeur).</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Form Section -->
        <section id="formulaire" class="py-20 bg-white border-t border-slate-200">
            <div class="max-w-3xl mx-auto px-4">
                <div class="mb-12 text-center">
                    <h2 class="text-2xl font-bold text-slate-900 tracking-tight mb-4">Problème avec votre régie ?</h2>
                    <p class="text-slate-600">Nous protégeons votre logement et vos droits de locataire.</p>
                </div>
                <ContactForm />
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
useLocalSeo(
  'Avocat Droit du Bail Genève | Résiliation & Loyer',
  'Avocat Spécialiste Droit du Bail à Genève. Contestation résiliation, baisse de loyer, expulsion. Tribunal des Baux et Loyers. 1er RDV : CHF 155.-',
  {
    type: 'LegalService',
    priceRange: 'Dès CHF 155.-'
  }
)
</script>