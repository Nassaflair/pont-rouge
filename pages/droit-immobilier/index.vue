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
                            { name: 'Droit Immobilier', path: '/droit-immobilier' }
                        ]" />

                        <h1
                            class="text-3xl md:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight mb-6 leading-[1.1] text-balance">
                            Avocat Spécialiste Droit Immobilier et Construction à Genève<br>
                        </h1>

                        <p class="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                            Vente, construction ou litige de voisinage ? Nous sécurisons vos transactions et défendons votre propriété devant le Tribunal d'arrondissement.
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
                                    class="w-4 h-4 text-emerald-600"></i> Construction & Vente</span>
                            <span class="flex items-center gap-1.5"><i data-lucide="check-circle"
                                    class="w-4 h-4 text-emerald-600"></i> Litiges Voisinage</span>
                            <span class="flex items-center gap-1.5"><i data-lucide="check-circle"
                                    class="w-4 h-4 text-emerald-600"></i> Droit du Bail</span>
                        </div>
                    </div>

                    <!-- Image Right -->
                    <div class="relative hidden lg:block">
                        <div class="absolute inset-0 bg-red-900/5 rounded-2xl transform translate-x-4 translate-y-4">
                        </div>
                        <div class="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
                            <img src="/exp/bail.jpg" alt="Avocat Immobilier Genève" loading="lazy" width="800" height="600"
                                class="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" />
                            <div
                                class="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm border border-slate-200 p-4 rounded-lg shadow-lg max-w-xs">
                                <div class="flex items-center gap-3 mb-2">
                                    <div class="p-2 bg-red-50 rounded-full text-red-900">
                                        <i data-lucide="building" class="w-4 h-4"></i>
                                    </div>
                                    <span class="text-xs font-semibold text-slate-900">Expertise Genevoise</span>
                                </div>
                                <p class="text-[11px] leading-snug text-slate-500">Maîtrise de la Loi d'application genevoise (Léman & Construction).</p>
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
                    <p class="text-lg text-slate-600">Une parfaite connaissance du marché et des lois locales.</p>
                </div>
                
                <div class="grid md:grid-cols-2 gap-12 items-center">
                    <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                        <div class="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900">
                            <i data-lucide="map-pin" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-4">Avantages d'une représentation locale</h3>
                        <p class="text-slate-600 leading-relaxed">
                            Choisir un avocat local permet de bénéficier d'une représentation qui comprend les nuances du marché immobilier genevois et les spécificités des tribunaux, tels que le <strong class="text-slate-900">Tribunal d'arrondissement de Genève</strong>, situé à la rue de l'Athénée. Cette proximité est déterminante dans la résolution des litiges.
                        </p>
                    </div>

                    <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                        <div class="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900">
                            <i data-lucide="scale" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-4">Connaissance approfondie du système juridique</h3>
                        <p class="text-slate-600 leading-relaxed">
                            Nous maîtrisons les lois locales comme la <strong>Loi d’application genevoise de la loi fédérale sur l’aménagement du territoire</strong>, ainsi que le Code Civil (CC) et le Code des Obligations (CO). Cette expertise est cruciale pour naviguer dans les complexités administratives de Genève.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Process Section: La Procédure -->
        <section class="py-20 bg-white border-b border-slate-100 overflow-hidden">
             <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-3xl mx-auto mb-16">
                    <h2 class="text-3xl font-bold tracking-tight text-slate-900 mb-4">La Procédure de Conciliation à Genève</h2>
                    <p class="text-slate-500 font-medium tracking-wide uppercase text-sm">Étape par Étape</p>
                </div>

                <div class="relative">
                    <!-- Connector Line (Desktop) -->
                    <div class="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>

                    <div class="grid md:grid-cols-4 gap-8 relative z-10">
                        <!-- Step 1 -->
                        <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative group hover:-translate-y-1 transition-transform duration-300">
                            <div class="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold mb-4 mx-auto md:mx-0 shadow-lg shadow-slate-900/20">1</div>
                            <h4 class="text-lg font-bold text-slate-900 mb-3">Analyse & Stratégie</h4>
                            <p class="text-sm text-slate-600 leading-relaxed">
                                Analyse du dossier (Bail, Contrat de vente, Voisinage). 1er RDV à <strong class="text-red-900">CHF 155.-</strong> pour définir la stratégie juridique (arrangement vs procès).
                            </p>
                        </div>

                        <!-- Step 2 -->
                        <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative group hover:-translate-y-1 transition-transform duration-300">
                            <div class="w-10 h-10 bg-white text-slate-900 border-2 border-slate-900 rounded-full flex items-center justify-center font-bold mb-4 mx-auto md:mx-0">2</div>
                            <h4 class="text-lg font-bold text-slate-900 mb-3">Dépôt de la Demande</h4>
                            <p class="text-sm text-slate-600 leading-relaxed">
                                Dépôt de la demande de conciliation auprès du <strong>Tribunal de première instance</strong>, conformément au Code de procédure civile.
                            </p>
                        </div>

                        <!-- Step 3 -->
                        <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative group hover:-translate-y-1 transition-transform duration-300">
                            <div class="w-10 h-10 bg-white text-slate-900 border-2 border-slate-900 rounded-full flex items-center justify-center font-bold mb-4 mx-auto md:mx-0">3</div>
                            <h4 class="text-lg font-bold text-slate-900 mb-3">Séance de Conciliation</h4>
                            <p class="text-sm text-slate-600 leading-relaxed">
                                Tentative d'accord sous la supervision d'un juge. Essentiel pour éviter un procès coûteux. "Un mauvais arrangement vaut souvent mieux qu'un bon procès."
                            </p>
                        </div>

                        <!-- Step 4 -->
                        <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative group hover:-translate-y-1 transition-transform duration-300">
                            <div class="w-10 h-10 bg-red-900 text-white rounded-full flex items-center justify-center font-bold mb-4 mx-auto md:mx-0 shadow-lg shadow-red-900/20">4</div>
                            <h4 class="text-lg font-bold text-slate-900 mb-3">Le Procès (Juge du fond)</h4>
                            <p class="text-sm text-slate-600 leading-relaxed">
                                Si échec de la conciliation, l'affaire est portée devant le Juge du fond avec une autorisation de procéder.
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
                    <p class="text-lg text-slate-600">Une maîtrise technique du Droit Immobilier suisse.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <!-- 1. Contrats Vente -->
                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="file-signature" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Contrats de Vente Immobilière</h3>
                        <p class="text-slate-600 leading-relaxed mb-4">
                            Les <strong>articles 216 et suivants du Code des Obligations (CO)</strong> définissent les obligations légales. Nous sécurisons vos transactions pour éviter les vices cachés et désaccords ultérieurs.
                        </p>
                    </div>

                    <!-- 2. Propriété -->
                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="home" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Propriété & Voisinage</h3>
                        <p class="text-slate-600 leading-relaxed mb-4">
                            Les <strong>articles 641 et suivants du Code Civil (CC)</strong> régissent les droits de propriété. Nous intervenons dans les conflits de voisinage, servitudes et atteintes à la propriété.
                        </p>
                    </div>

                    <!-- 3. Développement -->
                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="hard-hat" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Développement & Zonage</h3>
                        <p class="text-slate-600 leading-relaxed overflow-hidden">
                            Nous vous conseillons sur la <strong>Loi d’application genevoise de la loi fédérale sur l’aménagement du territoire</strong> pour vos projets de construction et questions de zonage à Genève.
                        </p>
                    </div>

                    <!-- 4. Cadre Légal Specifique -->
                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="book-open" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Distinction Clé</h3>
                        <p class="text-slate-600 leading-relaxed">
                            <strong class="text-slate-900">Attention :</strong> Le droit du bail n'est pas du droit immobilier "pur" et dispose d'une procédure spécifique. Nous traitons ces deux domaines avec la même expertise.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQ -->
        <section id="faq" class="py-16 bg-white border-t border-slate-100">
            <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h3 class="text-xl font-bold text-slate-900 mb-8 text-center">FAQ (Droit Immobilier Genève)</h3>
                <div class="space-y-6">
                    <div class="border-b border-slate-100 pb-4">
                        <h4 class="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                            <i data-lucide="help-circle" class="w-5 h-5 text-red-800 mt-0.5 shrink-0"></i>
                            Comment résoudre un litige immobilier ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-7">Toujours commencer par une séance de conciliation au <strong>Tribunal de première instance</strong> pour tenter un accord. Sinon, le litige est tranché par le Juge du fond.</p>
                    </div>
                    <div class="border-b border-slate-100 pb-4">
                        <h4 class="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                            <i data-lucide="help-circle" class="w-5 h-5 text-red-800 mt-0.5 shrink-0"></i>
                            Combien coûte un avocat en immobilier ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-7">La moyenne à Genève est de CHF 450-550/h. Chez <strong>Clegal-Avocats</strong>, nous appliquons un tarif avantageux de <strong>CHF 350.-/h</strong> pour rendre la justice accessible.</p>
                    </div>
                    <div class="pb-4">
                        <h4 class="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                            <i data-lucide="help-circle" class="w-5 h-5 text-red-800 mt-0.5 shrink-0"></i>
                            Quels sont les délais de procédure ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-7">Cela varie de quelques mois (conciliation) à plusieurs années (procès complexe), selon la charge du Tribunal d'arrondissement.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Internal Linking Section -->
        <section class="py-16 bg-white border-t border-slate-100">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-3xl mx-auto mb-12">
                    <h2 class="text-2xl font-bold text-slate-900 tracking-tight mb-4">Nos Services en Droit Immobilier</h2>
                    <p class="text-slate-600">Une expertise complète pour tous vos besoins immobiliers.</p>
                </div>
                
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    <!-- Self Link (Context) -->
                    <div class="p-6 bg-white rounded-xl border border-slate-100 shadow-sm opacity-50 cursor-not-allowed">
                        <div class="flex items-center gap-3 mb-3">
                            <div class="p-2 bg-slate-100 rounded-lg text-slate-400">
                                <i data-lucide="building" class="w-5 h-5"></i>
                            </div>
                            <h3 class="font-bold text-slate-400">Droit de la Construction</h3>
                        </div>
                        <p class="text-sm text-slate-400">Page actuelle.</p>
                    </div>

                    <NuxtLink to="/droit-immobilier/avocat-droit-bail" class="group block p-6 bg-slate-50 rounded-xl border border-slate-200 hover:border-red-900/30 hover:shadow-md transition-all">
                        <div class="flex items-center gap-3 mb-3">
                            <div class="p-2 bg-white rounded-lg text-red-900 shadow-sm group-hover:bg-red-900 group-hover:text-white transition-colors">
                                <i data-lucide="key" class="w-5 h-5"></i>
                            </div>
                            <h3 class="font-bold text-slate-900">Droit du Bail</h3>
                        </div>
                        <p class="text-sm text-slate-600">Résiliation, loyers et litiges régie.</p>
                    </NuxtLink>
                </div>
            </div>
        </section>

        <!-- Use Form Component -->
        <section id="formulaire" class="py-20 bg-slate-50 border-t border-slate-200">
            <div class="max-w-3xl mx-auto px-4">
                <div class="mb-12 text-center">
                    <h2 class="text-2xl font-bold text-slate-900 tracking-tight mb-4">Besoin d'un expert immobilier ?</h2>
                    <p class="text-slate-600">Nous sécurisons votre patrimoine et vos droits.</p>
                </div>
                <ContactForm />
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">


useLocalSeo(
  'Avocat Immobilier Genève | Construction & Litiges – Clegal Avocats',
  'Avocat droit immobilier à Genève. Construction, voisinage, vente, zonage. Tribunal d\'arrondissement. 1er RDV à 155.-. Clegal Avocats.',
  { type: 'LegalService', priceRange: 'Dès CHF 155.-' }
)
</script>
