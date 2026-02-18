<template>
  <div>
        <!-- Hero Section: Trust & Transparency -->
        <section class="pt-32 pb-20 relative overflow-hidden">
            <div class="absolute inset-0 -z-10 h-full w-full bg-grid-slate [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
            
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                <Breadcrumb :links="[{ name: 'Honoraires', path: '/honoraires' }]" />
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 w-fit mb-8 mx-auto">
                    <span class="text-xs font-medium text-slate-600 uppercase tracking-wide">Transparence Totale</span>
                </div>
                
                <h1 class="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-6 leading-tight max-w-4xl mx-auto">
                    Honoraires Transparents et <br class="hidden md:block"> Avocats Accessibles à Genève.
                </h1>
                
                <p class="text-lg text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Nous croyons que la justice doit être accessible à tous. C'est pourquoi nous privilégions une approche financière claire, sans frais cachés, adaptée à vos revenus.
                </p>
            </div>
        </section>

        <!-- Section 1: The Anchor Product (CHF 155) -->
        <section id="consultation" class="py-12 relative">
            <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <!-- Pricing Card -->
                <div class="relative bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200 overflow-hidden">
                    <div class="absolute top-0 w-full h-1 bg-gradient-to-r from-red-900 via-red-600 to-slate-900"></div>
                    
                    <div class="p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center justify-between">
                        <div class="flex-1">
                            <h2 class="text-2xl font-semibold text-slate-900 mb-2">Le Premier Pas</h2>
                            <p class="text-slate-500 mb-6 text-sm">Consultation d'orientation juridique (30-45 min)</p>
                            
                            <ul class="space-y-3">
                                <li class="flex items-start gap-3 text-sm text-slate-700">
                                    <i class="w-5 h-5 text-emerald-500 shrink-0" data-lucide="check"></i>
                                    Analyse complète de votre dossier
                                </li>
                                <li class="flex items-start gap-3 text-sm text-slate-700">
                                    <i class="w-5 h-5 text-emerald-500 shrink-0" data-lucide="check"></i>
                                    Évaluation des chances de succès
                                </li>
                                <li class="flex items-start gap-3 text-sm text-slate-700">
                                    <i class="w-5 h-5 text-emerald-500 shrink-0" data-lucide="check"></i>
                                    Devis clair pour la suite (si nécessaire)
                                </li>
                            </ul>
                        </div>

                        <div class="flex flex-col items-center justify-center bg-slate-50 rounded-xl p-6 border border-slate-100 min-w-[200px] text-center">
                            <span class="text-sm font-medium text-slate-500 uppercase tracking-wide mb-1">Tarif Unique</span>
                            <div class="flex items-baseline gap-1 text-slate-900">
                                <span class="text-4xl font-bold tracking-tight">155.-</span>
                                <span class="text-lg font-medium text-slate-500">CHF</span>
                            </div>
                            <p class="text-xs text-slate-400 mt-2">TTC, sans engagement</p>
                            <a href="#contact" class="mt-4 w-full inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-red-900 hover:bg-red-800 rounded-md transition-all shadow-sm">
                                Réserver
                            </a>
                        </div>
                    </div>
                </div>
                <p class="text-center text-sm text-slate-500 mt-6">
                    Un tarif unique pour savoir exactement où vous allez, sans risque financier.
                </p>
            </div>
        </section>

        <!-- Section 2: Billing Modes -->
        <section id="modes" class="py-24 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-2xl mx-auto mb-16">
                    <h2 class="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Nos Modes de Facturation</h2>
                    <p class="text-slate-600">Pour la suite du dossier, nous convenons ensemble du mode le plus avantageux pour vous.</p>
                </div>

                <div class="grid md:grid-cols-2 gap-8">
                    <!-- Option A: Time based -->
                    <div class="group p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all">
                        <div class="w-10 h-10 bg-white rounded-lg border border-slate-200 flex items-center justify-center mb-6 shadow-sm text-slate-900">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                        </div>
                        <h3 class="text-lg font-semibold text-slate-900 mb-2">Tarif Horaire Adapté</h3>
                        <p class="text-slate-600 text-sm leading-relaxed mb-4">
                            Nous appliquons un taux horaire compétitif, ajusté en fonction de la complexité de l'affaire et de votre situation financière.
                        </p>
                        <ul class="text-sm text-slate-500 space-y-2">
                            <li class="flex items-center gap-2"><div class="w-1 h-1 rounded-full bg-slate-400"></div>Décomptes détaillés fournis régulièrement</li>
                            <li class="flex items-center gap-2"><div class="w-1 h-1 rounded-full bg-slate-400"></div>Pas de frais administratifs cachés</li>
                            <li class="flex items-center gap-2"><div class="w-1 h-1 rounded-full bg-slate-400"></div>Maîtrise des coûts en temps réel</li>
                        </ul>
                    </div>

                    <!-- Option B: Flat fee -->
                    <div class="group p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all">
                        <div class="w-10 h-10 bg-white rounded-lg border border-slate-200 flex items-center justify-center mb-6 shadow-sm text-slate-900">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-package-check"><path d="m16 16 2 2 4-4"></path><path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"></path><path d="m3.27 6.96 12 12.01"></path><path d="m2.3 2.12 19.36 19.36"></path></svg>
                        </div>
                        <h3 class="text-lg font-semibold text-slate-900 mb-2">Forfait (Prix Fixe)</h3>
                        <p class="text-slate-600 text-sm leading-relaxed mb-4">
                            Pour les procédures standardisées (comme le divorce à l'amiable, la création de société ou la rédaction de contrats), nous proposons un prix global fixe.
                        </p>
                        <ul class="text-sm text-slate-500 space-y-2">
                            <li class="flex items-center gap-2"><div class="w-1 h-1 rounded-full bg-slate-400"></div>Budget garanti sans dépassement</li>
                            <li class="flex items-center gap-2"><div class="w-1 h-1 rounded-full bg-slate-400"></div>Idéal pour les divorces par consentement mutuel</li>
                            <li class="flex items-center gap-2"><div class="w-1 h-1 rounded-full bg-slate-400"></div>Payable en plusieurs fois si nécessaire</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 3: Value Proposition (Why Competitive?) -->
        <section class="py-20 bg-slate-900 text-slate-300">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 class="text-3xl font-semibold text-white tracking-tight mb-6">Pourquoi nos tarifs sont compétitifs ?</h2>
                        <p class="text-lg leading-relaxed mb-6 text-slate-400">
                            Contrairement aux études classiques, Clegal Avocats a optimisé ses processus internes pour réduire les tâches administratives inutiles.
                        </p>
                        <div class="space-y-4">
                            <div class="flex gap-4">
                                <span class="text-red-400 font-bold">01.</span>
                                <p>Digitalisation des dossiers pour un traitement plus rapide de l'information.</p>
                            </div>
                            <div class="flex gap-4">
                                <span class="text-red-400 font-bold">02.</span>
                                <p>Structure agile aux Acacias (frais de structure maîtrisés).</p>
                            </div>
                            <div class="flex gap-4">
                                <span class="text-red-400 font-bold">03.</span>
                                <p>Focus sur le résultat : nous évitons les procédures longues si une négociation est possible.</p>
                            </div>
                        </div>
                    </div>
                    <div class="relative bg-slate-800/50 border border-slate-700 rounded-2xl p-8 backdrop-blur-sm">
                        <div class="absolute -top-4 -right-4 bg-red-900 text-white px-4 py-1 text-xs font-bold uppercase rounded shadow-lg">
                            Notre engagement
                        </div>
                        <blockquote class="text-white text-xl font-medium italic mb-4">
                            "L'argent ne doit jamais être un frein à la défense de vos droits. Nous trouvons toujours une solution."
                        </blockquote>
                        <div class="flex items-center gap-3 mt-6">
                            <div class="h-8 w-1 bg-red-600 rounded-full"></div>
                            <span class="text-sm font-medium text-slate-400">L'équipe Clegal Avocats</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section 4: Aids & Insurance (Crucial for accessibility) -->
        <section id="aides" class="py-24 bg-red-50/50 relative overflow-hidden">
            <!-- Background decoration -->
            <div class="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-50"></div>
            
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div class="text-center mb-16">
                    <h2 class="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Aides Étatiques et Assurances</h2>
                    <p class="text-slate-600 max-w-2xl mx-auto">Vous avez peu de moyens ou vous possédez une assurance ? Vos frais d'avocat peuvent être intégralement pris en charge.</p>
                </div>

                <div class="grid md:grid-cols-2 gap-6">
                    <!-- Legal Aid (AJ) -->
                    <div class="bg-white p-8 rounded-xl border border-slate-200 shadow-sm flex flex-col h-full">
                        <div class="flex items-center gap-4 mb-6">
                            <div class="p-3 bg-red-50 text-red-900 rounded-lg">
                                <i data-lucide="landmark" class="w-6 h-6"></i>
                            </div>
                            <h3 class="text-xl font-semibold text-slate-900">Assistance Juridique (AJ)</h3>
                        </div>
                        <p class="text-slate-600 text-sm mb-6 flex-grow">
                            Si vos revenus sont modestes, l'État de Genève peut prendre en charge vos frais d'avocat (avocat d'office). Nous vérifions votre éligibilité dès le premier rendez-vous et remplissons les formulaires pour vous.
                        </p>
                        <div class="pt-6 border-t border-slate-100">
                            <span class="inline-flex items-center text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-1 rounded">
                                <svg class="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                                Acceptée par le cabinet
                            </span>
                        </div>
                    </div>

                    <!-- Insurance -->
                    <div class="bg-white p-8 rounded-xl border border-slate-200 shadow-sm flex flex-col h-full">
                        <div class="flex items-center gap-4 mb-6">
                            <div class="p-3 bg-blue-50 text-blue-900 rounded-lg">
                                <i data-lucide="shield-check" class="w-6 h-6"></i>
                            </div>
                            <h3 class="text-xl font-semibold text-slate-900">Protection Juridique</h3>
                        </div>
                        <p class="text-slate-600 text-sm mb-6 flex-grow">
                            Vous payez une assurance de protection juridique (AXA, TCS, Protekta, Fortuna, etc.) ? Ces assurances couvrent souvent nos honoraires. Nous contactons votre assurance pour valider la prise en charge du dossier (libre choix de l'avocat).
                        </p>
                        <div class="pt-6 border-t border-slate-100">
                            <span class="inline-flex items-center text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-1 rounded">
                                <i data-lucide="check" class="w-3 h-3 mr-1"></i>
                                Toutes assurances acceptées
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Main Conversion Section (Formulaire) -->
        <ContactForm />
  </div>
</template>

<script setup lang="ts">
import ContactForm from '@/components/ContactForm.vue';

useLocalSeo(
  'Tarifs Avocat Genève | Honoraires dès 155.- – Clegal Avocats',
  'Honoraires transparents et accessibles. 1er RDV d\'analyse à 155.-, tarif horaire et forfaits. Aide juridictionnelle acceptée. Clegal Avocats Genève.',
  {
    type: 'LegalService',
    priceRange: 'Dès CHF 155.-',
    breadcrumbs: [{ name: 'Honoraires', url: 'https://clegal-avocats.ch/honoraires' }]
  }
)
</script>