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
                            Avocat Expert en Droit du Bail à Genève<br>
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
                            <i data-lucide="book-open" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-4">Connaissance approfondie du cadre juridique local</h3>
                        <p class="text-slate-600 leading-relaxed">
                            Un avocat spécialisé en droit du bail à Genève possède une connaissance approfondie des <strong>articles 253 et suivants du Code des Obligations (CO)</strong>, qui régissent spécifiquement les contrats de bail à loyer. Cette expertise est cruciale pour naviguer efficacement dans les complexités des lois et obtenir les meilleurs résultats pour les clients.
                        </p>
                    </div>

                    <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                        <div class="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900">
                            <i data-lucide="scale" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-4">Avantages d'un avocat local pour les litiges de bail</h3>
                        <p class="text-slate-600 leading-relaxed">
                            Choisir un avocat local offre un avantage stratégique significatif, notamment une familiarité avec les tendances des juges du <strong>Tribunal des baux et loyers</strong>. Cette connaissance peut influencer positivement l'issue des litiges de bail.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Process Section -->
        <section class="py-20 bg-white border-b border-slate-100 overflow-hidden">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-3xl mx-auto mb-16">
                    <h2 class="text-3xl font-bold tracking-tight text-slate-900 mb-4">La Procédure de Conciliation à Genève (Étape par Étape)</h2>
                    <p class="text-slate-500 font-medium tracking-wide uppercase text-sm">Commission de Conciliation</p>
                </div>

                <div class="relative">
                    <div class="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>
                     <div class="grid md:grid-cols-3 gap-6 relative z-10 max-w-4xl mx-auto">
                        <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                            <div class="w-9 h-9 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold mb-3 text-sm">1</div>
                            <h4 class="text-base font-bold text-slate-900 mb-2">Préparation et dépôt</h4>
                            <p class="text-xs text-slate-600">La demande de conciliation doit être déposée auprès de la <strong>Commission de conciliation en matière de baux et loyer</strong>, situé à la Rue de l'Athénée 6/8, 1205 Genève. Ce processus est le premier pas obligatoire.</p>
                        </div>
                        <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                            <div class="w-9 h-9 bg-white text-slate-900 border-2 border-slate-900 rounded-full flex items-center justify-center font-bold mb-3 text-sm">2</div>
                            <h4 class="text-base font-bold text-slate-900 mb-2">La séance de conciliation</h4>
                            <p class="text-xs text-slate-600">Durant la séance, les parties tentent de parvenir à un accord sous la supervision d'un juge-conciliateur. Cette étape est cruciale et peut éviter une procédure judiciaire prolongée.</p>
                        </div>
                        <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                            <div class="w-9 h-9 bg-red-900 text-white rounded-full flex items-center justify-center font-bold mb-3 text-sm">3</div>
                            <h4 class="text-base font-bold text-slate-900 mb-2">Issue de la conciliation</h4>
                            <p class="text-xs text-slate-600">Si la conciliation échoue, l'affaire peut être portée devant le <strong>Tribunal des baux et loyers</strong> pour une décision judiciaire dans un délai de trente jours.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Service Grid / Key Issues -->
        <section class="py-20 bg-slate-50 border-b border-slate-200">
             <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="mb-16 text-center max-w-3xl mx-auto">
                    <h2 class="text-3xl font-bold tracking-tight text-slate-900 mb-4">Enjeux Clés</h2>
                    <p class="text-lg text-slate-600">Thématiques locales</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                         <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="trending-up" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Augmentation des loyers</h3>
                        <p class="text-slate-600 text-sm leading-relaxed">
                            À Genève, les augmentations de loyer doivent respecter les critères établis par les <strong>articles 269d CO</strong>. Ainsi, une augmentation de loyer qui n'a pas été faite au moyen de la formule officielle est nulle.
                        </p>
                    </div>

                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                         <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="file-warning" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Résiliation du bail</h3>
                        <p class="text-slate-600 text-sm leading-relaxed">
                            Les locataires bénéficient de protections spécifiques en cas de résiliation du bail, comme en disposent les <strong>articles 271 et suivants CO</strong>. Ces protections sont essentielles pour éviter les résiliations injustifiées.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Legal Framework -->
        <section id="features" class="py-20 bg-white border-t border-slate-200">
             <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="mb-16 text-center max-w-3xl mx-auto">
                    <h2 class="text-3xl font-bold tracking-tight text-slate-900 mb-4">Le Cadre Légal (Articles Spécifiques)</h2>
                    <p class="text-lg text-slate-600">Code des Obligations (CO).</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="book-open" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Code des Obligations (CO)</h3>
                        <p class="text-slate-600 text-sm leading-relaxed">
                            Les articles <strong>253 et suivants CO</strong> détaillent les droits et obligations des locataires et des bailleurs, incluant les conditions de résiliation.
                        </p>
                    </div>

                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="shield" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Protection contre les loyers abusifs</h3>
                        <p class="text-slate-600 text-sm leading-relaxed">
                            Règles de protection contre les loyers abusifs et autres prétentions abusives du bailleur en matière de baux d'habitations et de locaux commerciaux.
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
                            Quels sont mes droits en tant que locataire à Genève ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-7">En tant que locataire à Genève, vous êtes protégé par les articles <strong>253 et suivants CO</strong>, qui offrent un cadre pour la résiliation du bail, la protection contre les loyers excessifs, et plus encore.</p>
                     </div>
                    <div class="border-b border-slate-200 pb-4">
                        <h4 class="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                            <i data-lucide="help-circle" class="w-5 h-5 text-red-800 mt-0.5 shrink-0"></i>
                            Comment un avocat peut-il m'aider avec un litige de bail ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-7">Un avocat peut vous représenter devant les tribunaux, négocier des accords de conciliation, et vous conseiller sur vos droits et obligations selon les <strong>articles 257-273 CO</strong> et <strong>253-274b CC</strong>.</p>
                    </div>
                </div>
            </div>
        </section>


        <!-- Related Services -->
        <SiloLinks silo="immobilier" currentPath="/droit-immobilier/avocat-droit-bail" />

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
  'Avocat Droit du Bail Genève | Litiges & Loyers | Dès 155.-',
  'Avocat expert Droit du Bail à Genève. Litiges loyers, résiliation, expulsion & défauts. Commission de conciliation & Tribunal des Baux. 1er RDV : CHF 155.-',
  {
    type: 'LegalService',
    priceRange: 'Dès CHF 155.-'
  }
)
</script>