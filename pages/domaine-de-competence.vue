<template>
        <!-- SEO/SEA Optimized Hero Section -->
        <section class="lg:pt-40 lg:pb-28 overflow-hidden pt-32 pb-20 relative">
            <div class="absolute inset-0 -z-20 h-full w-full bg-white">
                <div class="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-slate-100 rounded-full blur-3xl opacity-50"></div>
                <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-red-50 rounded-full blur-3xl opacity-40"></div>
            </div>
            <div class="absolute inset-0 -z-10 h-full w-full bg-grid-slate [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
            
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-4xl mx-auto flex flex-col items-center">
                    <Breadcrumb :links="[{ name: 'Expertises', path: '/domaine-de-competence' }]" />
                    <div class="inline-flex bg-red-50 w-fit border-red-100 border rounded-full mr-auto mb-8 ml-auto pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center">
                        <span class="flex h-2 w-2 rounded-full bg-red-600 animate-pulse"></span>
                        <span class="uppercase text-xs font-medium text-red-900 tracking-wide">Urgence Juridique ? Téléphone 24/24h</span>
                    </div>
                    
                    <h1 class="text-4xl md:text-6xl font-semibold text-slate-900 tracking-tight mb-6 leading-[1.1]">
                        Cabinet d'Avocats à Genève. <br>
                        <span class="text-slate-400">Expertise ciblée. Résultats concrets.</span>
                    </h1>
                    
                    <p class="text-lg text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Ne restez pas seul face à vos problèmes juridiques. Que ce soit pour un <strong class="text-slate-900 font-medium">permis de séjour</strong>, un <strong class="text-slate-900 font-medium">divorce</strong> ou un <strong class="text-slate-900 font-medium">litige pénal</strong>, nous définissons immédiatement la stratégie gagnante.
                    </p>

                    <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a href="#contact" class="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white bg-red-900 hover:bg-red-800 rounded-md shadow-lg shadow-red-900/20 hover:shadow-xl transition-all">
                            Réserver une consultation (CHF 155.-)
                        </a>
                        <a href="#expertises" class="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded-md transition-all">
                            Voir nos domaines d'intervention
                        </a>
                    </div>
                    
                    <div class="mt-10 pt-8 border-t border-slate-100 flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs font-medium text-slate-500 uppercase tracking-widest">
                        <span class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-check text-emerald-600"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg> Secret Professionnel</span>
                        <span class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scale text-emerald-600"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="M7 21h10"></path><path d="M12 3v18"></path><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path></svg> Barreau de Genève</span>
                        <span class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock text-emerald-600"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> Réactivité Immédiate</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- Detailed Practice Areas -->
        <section id="expertises" class="py-24 bg-white relative">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="mb-16 md:flex md:items-end md:justify-between">
                    <div class="max-w-2xl">
                        <h2 class="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Domaines de Compétence</h2>
                        <p class="text-slate-600 text-lg">Nous concentrons notre activité sur les contentieux qui impactent votre vie personnelle et professionnelle. Sélectionnez votre situation :</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <NuxtLink to="/droit-etrangers">
                        <!-- 1. Droit des Étrangers -->
                    <div class="group relative bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-red-900/30 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
                        <div class="absolute top-8 right-8 text-slate-200 group-hover:text-red-100 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe-2"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path><path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"></path><path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path><circle cx="12" cy="12" r="10"></circle></svg>
                        </div>
                        <h3 class="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
                            Droit des Étrangers
                        </h3>
                        <p class="text-sm font-medium text-red-800 mb-4 uppercase tracking-wide text-[11px]">Permis &amp; Naturalisation</p>
                        <p class="text-slate-600 mb-6 leading-relaxed">
                            Nous vous aidons à régulariser votre situation ou à obtenir la nationalité suisse. Recours contre les décisions négatives de l'OCPM.
                        </p>
                        <ul class="space-y-2 mb-8">
                            <li class="flex items-center text-sm text-slate-700">
                                <span class="w-1.5 h-1.5 rounded-full bg-red-600 mr-2"></span>Permis de séjour (B, C, L)
                            </li>
                            <li class="flex items-center text-sm text-slate-700">
                                <span class="w-1.5 h-1.5 rounded-full bg-red-600 mr-2"></span>Regroupement familial
                            </li>
                            <li class="flex items-center text-sm text-slate-700">
                                <span class="w-1.5 h-1.5 rounded-full bg-red-600 mr-2"></span>Naturalisation facilitée/ordinaire
                            </li>
                        </ul>
                        <a href="#contact" class="inline-flex items-center text-sm font-medium text-slate-900 hover:text-red-800 transition-colors">
                            Consulter un avocat immigration <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right ml-2"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                        </a>
                    </div>
                    </NuxtLink>
                    
                    <NuxtLink to="/droit-famille">
                    <!-- 2. Droit de la Famille -->
                    <div class="group relative bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-red-900/30 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
                        <div class="absolute top-8 right-8 text-slate-200 group-hover:text-red-100 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-crack"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path><path d="m12 13-3-3"></path><path d="m12 18 3-3"></path></svg>
                        </div>
                        <h3 class="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
                            Divorce &amp; Famille
                        </h3>
                        <p class="text-sm font-medium text-red-800 mb-4 uppercase tracking-wide text-[11px]">Séparations &amp; Enfants</p>
                        <p class="text-slate-600 mb-6 leading-relaxed">
                            Vous envisagez une séparation ? Nous protégeons vos intérêts financiers et vos liens parentaux. Procédures à l'amiable ou contentieuses.
                        </p>
                        <ul class="space-y-2 mb-8">
                            <li class="flex items-center text-sm text-slate-700">
                                <span class="w-1.5 h-1.5 rounded-full bg-red-600 mr-2"></span>Divorce (unilatéral ou accord)
                            </li>
                            <li class="flex items-center text-sm text-slate-700">
                                <span class="w-1.5 h-1.5 rounded-full bg-red-600 mr-2"></span>Garde des enfants &amp; Visite
                            </li>
                            <li class="flex items-center text-sm text-slate-700">
                                <span class="w-1.5 h-1.5 rounded-full bg-red-600 mr-2"></span>Contribution d'entretien
                            </li>
                        </ul>
                        <a href="#contact" class="inline-flex items-center text-sm font-medium text-slate-900 hover:text-red-800 transition-colors">
                            Consulter un avocat divorce <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right ml-2"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                        </a>
                    </div>
                    </NuxtLink>

                    <NuxtLink to="/droit-penal">
                    <!-- 3. Droit Pénal -->
                    <div class="group relative bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-red-900/30 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
                        <div class="absolute top-8 right-8 text-slate-200 group-hover:text-red-100 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gavel"><path d="m14 13-8.381 8.38a1 1 0 0 1-3.001-3l8.384-8.381"></path><path d="m16 16 6-6"></path><path d="m21.5 10.5-8-8"></path><path d="m8 8 6-6"></path><path d="m8.5 7.5 8 8"></path></svg>
                        </div>
                        <h3 class="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
                            Droit Pénal
                        </h3>
                        <p class="text-sm font-medium text-red-800 mb-4 uppercase tracking-wide text-[11px]">Défense &amp; Plaintes</p>
                        <p class="text-slate-600 mb-6 leading-relaxed">
                            Prévenu ou victime, l'assistance d'un avocat est souvent cruciale dès la première audition de police. Nous intervenons 24/7 pour les urgences.
                        </p>
                        <ul class="space-y-2 mb-8">
                            <li class="flex items-center text-sm text-slate-700">
                                <span class="w-1.5 h-1.5 rounded-full bg-red-600 mr-2"></span>Défense pénale (Police, MP)
                            </li>
                            <li class="flex items-center text-sm text-slate-700">
                                <span class="w-1.5 h-1.5 rounded-full bg-red-600 mr-2"></span>Crimes économiques &amp; LCR
                            </li>
                            <li class="flex items-center text-sm text-slate-700">
                                <span class="w-1.5 h-1.5 rounded-full bg-red-600 mr-2"></span>Dépôt de plainte &amp; Victimes
                            </li>
                        </ul>
                        <a href="#contact" class="inline-flex items-center text-sm font-medium text-slate-900 hover:text-red-800 transition-colors">
                            Consulter un pénaliste <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right ml-2"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                        </a>
                    </div>
                    </NuxtLink>

                    <!-- 4. Droit du Travail -->
                    <NuxtLink to="/droit-travail">
                    <div class="group relative bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-red-900/30 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
                        <div class="absolute top-8 right-8 text-slate-200 group-hover:text-red-100 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-briefcase"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect width="20" height="14" x="2" y="6" rx="2"></rect></svg>
                        </div>
                        <h3 class="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
                            Droit du Travail
                        </h3>
                        <p class="text-sm font-medium text-red-800 mb-4 uppercase tracking-wide text-[11px]">Employés &amp; Employeurs</p>
                        <p class="text-slate-600 mb-6 leading-relaxed">
                            Licenciement abusif ou immédiat ? Harcèlement ou heures supplémentaires non payées ? Nous intervenons devant le Tribunal des Prud'hommes.
                        </p>
                        <ul class="space-y-2 mb-8">
                            <li class="flex items-center text-sm text-slate-700">
                                <span class="w-1.5 h-1.5 rounded-full bg-red-600 mr-2"></span>Contestation de licenciement
                            </li>
                            <li class="flex items-center text-sm text-slate-700">
                                <span class="w-1.5 h-1.5 rounded-full bg-red-600 mr-2"></span>Négociation de départ
                            </li>
                            <li class="flex items-center text-sm text-slate-700">
                                <span class="w-1.5 h-1.5 rounded-full bg-red-600 mr-2"></span>Conflits salariaux
                            </li>
                        </ul>
                        <a href="#contact" class="inline-flex items-center text-sm font-medium text-slate-900 hover:text-red-800 transition-colors">
                            Consulter un avocat droit du travail <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right ml-2"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                        </a>
                    </div>
                    </NuxtLink>

                    <!-- 5. Droit du Bail -->
                    <NuxtLink to="/droit-immobilier/avocat-droit-bail">
                    <div class="group relative bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-red-900/30 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
                        <div class="absolute top-8 right-8 text-slate-200 group-hover:text-red-100 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-key-round"><path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z"></path><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle></svg>
                        </div>
                        <h3 class="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
                            Droit du Bail
                        </h3>
                        <p class="text-sm font-medium text-red-800 mb-4 uppercase tracking-wide text-[11px]">Locataires &amp; Régies</p>
                        <p class="text-slate-600 mb-6 leading-relaxed">
                            Litiges liés au logement ou locaux commerciaux. Nous vous représentons devant la Commission de conciliation et le Tribunal des baux et loyers.
                        </p>
                        <ul class="space-y-2 mb-8">
                            <li class="flex items-center text-sm text-slate-700">
                                <span class="w-1.5 h-1.5 rounded-full bg-red-600 mr-2"></span>Contestation de résiliation
                            </li>
                            <li class="flex items-center text-sm text-slate-700">
                                <span class="w-1.5 h-1.5 rounded-full bg-red-600 mr-2"></span>Baisse de loyer / Défauts
                            </li>
                            <li class="flex items-center text-sm text-slate-700">
                                <span class="w-1.5 h-1.5 rounded-full bg-red-600 mr-2"></span>Expulsion (recours)
                            </li>
                        </ul>
                        <a href="#contact" class="inline-flex items-center text-sm font-medium text-slate-900 hover:text-red-800 transition-colors">
                            Consulter un avocat bail <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right ml-2"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                        </a>
                    </div>
                    </NuxtLink>

                    <!-- 6. Droit des Affaires -->
                    <NuxtLink to="/droit-affaires">
                    <div class="group relative bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-red-900/30 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
                        <div class="absolute top-8 right-8 text-slate-200 group-hover:text-red-100 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-building-2"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg>
                        </div>
                        <h3 class="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
                            Droit des Affaires
                        </h3>
                        <p class="text-sm font-medium text-red-800 mb-4 uppercase tracking-wide text-[11px]">PME &amp; Entrepreneurs</p>
                        <p class="text-slate-600 mb-6 leading-relaxed">
                            Conseil juridique stratégique pour les entreprises genevoises. De la constitution à la gestion des litiges commerciaux complexes.
                        </p>
                        <ul class="space-y-2 mb-8">
                            <li class="flex items-center text-sm text-slate-700">
                                <span class="w-1.5 h-1.5 rounded-full bg-red-600 mr-2"></span>Contrats commerciaux
                            </li>
                            <li class="flex items-center text-sm text-slate-700">
                                <span class="w-1.5 h-1.5 rounded-full bg-red-600 mr-2"></span>Poursuites et Faillites (LP)
                            </li>
                            <li class="flex items-center text-sm text-slate-700">
                                <span class="w-1.5 h-1.5 rounded-full bg-red-600 mr-2"></span>Création de SA/SARL
                            </li>
                        </ul>
                        <a href="#contact" class="inline-flex items-center text-sm font-medium text-slate-900 hover:text-red-800 transition-colors">
                            Consulter un avocat affaires <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right ml-2"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                        </a>
                    </div>
                    </NuxtLink>

                    <!-- 7. Droit des Assurances (New) -->
                    <NuxtLink to="/contact">
                    <div class="group relative bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-red-900/30 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
                        <div class="absolute top-8 right-8 text-slate-200 group-hover:text-red-100 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-alert"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>
                        </div>
                        <h3 class="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
                            Droit des Assurances
                        </h3>
                        <p class="text-sm font-medium text-red-800 mb-4 uppercase tracking-wide text-[11px]">Assurés &amp; Sinistres</p>
                        <p class="text-slate-600 mb-6 leading-relaxed">
                            Conflits avec les assurances privées ou sociales (AI, LAA, LAMal). Nous contestons les refus de prestations injustifiés et défendons vos droits.
                        </p>
                        <ul class="space-y-2 mb-8">
                            <li class="flex items-center text-sm text-slate-700">
                                <span class="w-1.5 h-1.5 rounded-full bg-red-600 mr-2"></span>Rentes invalidité (AI) / LAA
                            </li>
                            <li class="flex items-center text-sm text-slate-700">
                                <span class="w-1.5 h-1.5 rounded-full bg-red-600 mr-2"></span>Refus de prise en charge
                            </li>
                            <li class="flex items-center text-sm text-slate-700">
                                <span class="w-1.5 h-1.5 rounded-full bg-red-600 mr-2"></span>Responsabilité civile (RC)
                            </li>
                        </ul>
                        <a href="#contact" class="inline-flex items-center text-sm font-medium text-slate-900 hover:text-red-800 transition-colors">
                            Consulter un avocat assurances <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right ml-2"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                        </a>
                    </div>
                    </NuxtLink>

                    <!-- 8. Droit Administratif (New) -->
                    <NuxtLink to="/contact">
                    <div class="group relative bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-red-900/30 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
                        <div class="absolute top-8 right-8 text-slate-200 group-hover:text-red-100 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-landmark"><line x1="3" x2="21" y1="22" y2="22"></line><line x1="6" x2="6" y1="18" y2="11"></line><line x1="10" x2="10" y1="18" y2="11"></line><line x1="14" x2="14" y1="18" y2="11" class=""></line><line x1="18" x2="18" y1="18" y2="11"></line><polygon points="12 2 20 7 4 7"></polygon></svg>
                        </div>
                        <h3 class="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
                            Droit Administratif
                        </h3>
                        <p class="text-sm font-medium text-red-800 mb-4 uppercase tracking-wide text-[11px]">Citoyens &amp; État</p>
                        <p class="text-slate-600 mb-6 leading-relaxed">
                            Recours contre les décisions des autorités cantonales ou communales. Permis de construire et droit de la fonction publique.
                        </p>
                        <ul class="space-y-2 mb-8">
                            <li class="flex items-center text-sm text-slate-700">
                                <span class="w-1.5 h-1.5 rounded-full bg-red-600 mr-2"></span>Recours administratifs
                            </li>
                            <li class="flex items-center text-sm text-slate-700">
                                <span class="w-1.5 h-1.5 rounded-full bg-red-600 mr-2"></span>Autorisations de construire
                            </li>
                            <li class="flex items-center text-sm text-slate-700">
                                <span class="w-1.5 h-1.5 rounded-full bg-red-600 mr-2"></span>Fonction publique
                            </li>
                        </ul>
                        <a href="#contact" class="inline-flex items-center text-sm font-medium text-slate-900 hover:text-red-800 transition-colors">
                            Consulter un avocat administratif <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right ml-2"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                        </a>
                    </div>
                    </NuxtLink>
                </div>
            </div>
        </section>

        <!-- "Why Us" Section -->
        <section id="methodologie" class="py-20 bg-slate-900 text-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid md:grid-cols-2 gap-12 items-center">
                    <div class="">
                        <h2 class="text-3xl font-semibold tracking-tight mb-6">Pourquoi choisir Clegal Avocats ?</h2>
                        <div class="space-y-8">
                            <div class="flex gap-4">
                                <div class="flex-shrink-0 h-10 w-10 rounded-lg bg-red-900/50 flex items-center justify-center border border-red-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap text-red-200"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                                </div>
                                <div class="">
                                    <h3 class="text-lg font-medium text-white mb-2">Pragmatisme &amp; Efficacité</h3>
                                    <p class="text-slate-400 leading-relaxed">Nous ne multiplions pas les procédures inutiles. Notre objectif est de trouver la solution la plus rapide et la moins coûteuse pour vous.</p>
                                </div>
                            </div>
                            <div class="flex gap-4">
                                <div class="flex-shrink-0 h-10 w-10 rounded-lg bg-red-900/50 flex items-center justify-center border border-red-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-coins text-red-200"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7 .71-2.82 2.82"></path></svg>
                                </div>
                                <div class="">
                                    <h3 class="text-lg font-medium text-white mb-2">Transparence des Honoraires</h3>
                                    <p class="text-slate-400 leading-relaxed">Pas de mauvaise surprise. Dès le premier rendez-vous, nous convenons d'un mode de facturation clair (forfait ou taux horaire adapté).</p>
                                </div>
                            </div>
                            <div class="flex gap-4">
                                <div class="flex-shrink-0 h-10 w-10 rounded-lg bg-red-900/50 flex items-center justify-center border border-red-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-crosshair text-red-200"><circle cx="12" cy="12" r="10"></circle><line x1="22" x2="18" y1="12" y2="12"></line><line x1="6" x2="2" y1="12" y2="12"></line><line x1="12" x2="12" y1="6" y2="2"></line><line x1="12" x2="12" y1="22" y2="18"></line></svg>
                                </div>
                                <div class="">
                                    <h3 class="text-lg font-medium text-white mb-2">Stratégie Contentieuse</h3>
                                    <p class="text-slate-400 leading-relaxed">Si la négociation échoue, nous plaidons avec force et détermination devant toutes les juridictions genevoises et fédérales.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden">
                        <div class="absolute top-0 right-0 -mt-4 -mr-4 text-white/5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="currentColor" class="lucide lucide-quote"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path></svg>
                        </div>
                        <p class="z-10 text-xl italic text-slate-200 mb-6 relative">"Professionnel et compétent, le cabinet a su parfaitement œuvrer. Je recommande et leur accorde toute ma confiance." </p>
                        <div class="flex items-center gap-3">
                            <div class="flex text-sm font-bold text-white bg-gradient-to-br from-red-800 to-slate-800 w-10 h-10 rounded-full items-center justify-center">PM</div>
                            <div class="">
                                <p class="font-medium text-white">PM</p>
                                <p class="text-xs text-slate-400">Droit du Travail, Genève</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Main Conversion Section (Lead Gen Form) -->
        <ContactForm />

        <!-- FAQ -->
        <section id="faq" class="py-16 bg-white border-t border-slate-100">
            <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h3 class="text-xl font-semibold text-slate-900 mb-8 text-center">Questions fréquentes à Genève</h3>
                <div class="space-y-6">
                    <div class="border-b border-slate-100 pb-4">
                        <h4 class="text-sm font-medium text-slate-900 mb-2">Combien coûte un avocat à Genève ?</h4>
                        <p class="text-sm text-slate-600">Notre premier rendez-vous d'orientation est facturé forfaitairement CHF 155.-. Ensuite, nous travaillons soit au temps passé (tarif horaire usuel à Genève), soit au forfait selon la complexité du dossier. Nous acceptons l'Assistance Juridique (AJ) sous conditions.</p>
                    </div>
                    <div class="border-b border-slate-100 pb-4">
                        <h4 class="text-sm font-medium text-slate-900 mb-2">Que faire en cas de licenciement immédiat ?</h4>
                        <p class="text-sm text-slate-600">Vous devez agir très vite. Vous disposez d'un délai de 2 à 3 jours pour faire opposition par écrit. Contactez-nous immédiatement pour rédiger ce courrier et sauvegarder vos droits aux indemnités.</p>
                    </div>
                    <div class="pb-4">
                        <h4 class="text-sm font-medium text-slate-900 mb-2">Puis-je divorcer sans passer devant le juge ?</h4>
                        <p class="text-sm text-slate-600">Non, en Suisse le divorce doit être prononcé par un Tribunal. Cependant, si vous êtes d'accord sur tout (divorce à l'amiable), la procédure est simplifiée, rapide et moins coûteuse. Nous rédigeons votre convention de divorce complète.</p>
                    </div>
                </div>
            </div>
        </section>


</template>
<script lang="ts" setup>
useLocalSeo(
  'Domaines de Compétence | Avocat Genève – Clegal Avocats',
  'Nos expertises : pénal, famille, travail, immigration, bail, affaires, assurances, administratif. Avocats spécialisés à Genève. Clegal Avocats.',
  {
    type: 'LegalService',
    priceRange: 'Dès CHF 155.-'
  }
)
</script>