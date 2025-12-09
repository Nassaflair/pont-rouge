<template>
  <div>
        <!-- Hero Section -->
        <section id="etude" class="lg:pt-40 lg:pb-28 overflow-hidden pt-32 pb-20 relative">
            <div class="absolute inset-0 -z-20 h-full w-full">
                <!-- Updated Hero Image -->
                <img src="/images/landing_hero.png" alt="Pont-Rouge Avocats Office" class="h-full w-full object-cover opacity-20 grayscale-[20%]">
                <div class="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/95 to-slate-50/40"></div>
                <div class="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-slate-50"></div>
            </div>

            <div class="absolute inset-0 -z-10 h-full w-full bg-grid-slate [mask-image:radial-gradient(ellipse_at_left,transparent_10%,black)] opacity-60"></div>
            
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid lg:grid-cols-2 gap-12 lg:gap-8 items-start">
                    
                    <!-- Left Content -->
                    <div class="flex flex-col justify-center relative z-10 text-left">
                        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 border border-slate-200 w-fit mb-6 backdrop-blur-sm shadow-sm">
                            <span class="flex h-2 w-2 rounded-full bg-red-700"></span>
                            <span class="text-xs font-medium text-slate-600 uppercase tracking-wide">Avocats à Genève</span>
                        </div>
                        
                        <!-- Title -->
                        <h1 class="lg:text-5xl leading-tight text-4xl font-semibold text-slate-900 tracking-tight mb-6">
                            Avocats à Genève : Conseil Juridique &amp; <br> 
                            <span class="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-700 to-slate-800">Stratégie Contentieuse</span>
                        </h1>
                        
                        <div class="w-24 h-1 bg-red-900 mb-6"></div>

                        <p class="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed mix-blend-multiply text-left">
                             <NuxtLink to="/" class="font-semibold text-slate-900 hover:text-red-900 transition-colors">Pont-Rouge by Clegal-Avocats</NuxtLink> vous accompagne avec rigueur et pragmatisme. Nous transformons la complexité juridique en solutions claires pour sécuriser vos intérêts personnels et professionnels.
                        </p>

                        <div class="flex flex-col sm:flex-row gap-4">
                            <!-- Button to Form -->
                            <a href="#formulaire" class="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-red-900 hover:bg-red-800 rounded-md shadow-md hover:shadow-lg transition-all">
                                <i data-lucide="calendar" class="w-4 h-4 mr-2"></i>
                                Réserver une consultation
                            </a>
                            <NuxtLink to="#domaines" class="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-slate-700 bg-white/80 border border-slate-200 hover:bg-white rounded-md transition-all backdrop-blur-sm">
                                Découvrir nos domaines
                            </NuxtLink>
                        </div>
                    </div>

                    <!-- Right Content (Conversion Card) -->
                    <div class="relative group mt-8 lg:mt-0" id="honoraires">
                        <div class="absolute -inset-1 bg-gradient-to-r from-slate-200 to-red-100 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                        <div class="relative bg-white/95 backdrop-blur-sm ring-1 ring-slate-200 rounded-xl shadow-xl p-8">
                            <div class="flex justify-between items-start mb-6 border-b border-slate-100 pb-4">
                                <div class="">
                                    <h3 class="text-lg font-semibold text-slate-900">Premier Rendez-vous</h3>
                                    <p class="text-sm text-slate-500 mt-1">Analyse et Conseil</p>
                                </div>
                                <div class="text-right">
                                    <span class="block text-2xl font-semibold text-slate-900 tracking-tight">CHF 155.-</span>
                                    <span class="text-xs font-medium text-red-700">Défendez vos droits !</span>
                                </div>
                            </div>
                            
                            <ul class="space-y-3 mb-8">
                                <li class="flex items-start text-sm text-slate-600">
                                    <i data-lucide="check-circle" class="w-4 h-4 text-emerald-600 mr-2 mt-0.5 shrink-0"></i>
                                    <span class="">Évaluation préliminaire de votre dossier</span>
                                </li>
                                <li class="flex items-start text-sm text-slate-600">
                                    <i data-lucide="check-circle" class="w-4 h-4 text-emerald-600 mr-2 mt-0.5 shrink-0"></i>
                                    <span class="">Identification des enjeux juridiques</span>
                                </li>
                                <li class="flex items-start text-sm text-slate-600">
                                    <i data-lucide="check-circle" class="w-4 h-4 text-emerald-600 mr-2 mt-0.5 shrink-0"></i>
                                    <span class="">Orientation stratégique immédiate</span>
                                </li>
                            </ul>
                            
                            <!-- Link to Form Section -->
                            <a href="#formulaire" class="block hover:bg-slate-800 transition-all text-sm font-medium text-white text-center bg-slate-900 w-full rounded-md pt-3 pr-4 pb-3 pl-4 shadow-sm">Prendre rendez-vous avec votre avocat</a>
                            <p class="text-center text-xs text-slate-400 mt-3">Sans engagement ultérieur obligatoire.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Services Section -->
        <section class="border-y bg-slate-50 border-slate-200 pt-20 pb-20" id="domaines">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-2xl mx-auto mb-16">
                    <h2 class="text-base text-red-800 font-semibold tracking-wide uppercase">Nos Domaines d'Intervention</h2>
                    <p class="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Expertise juridique globale à Genève</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <!-- Droit pénal -->
                    <NuxtLink to="/droit-penal" class="group p-6 bg-white rounded-lg border border-slate-200 hover:border-red-900/20 hover:shadow-md transition-all duration-300">
                        <div class="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                            <i data-lucide="gavel" class="w-5 h-5 text-slate-700"></i>
                        </div>
                        <h3 class="text-base font-semibold text-slate-900 mb-1">Droit pénal</h3>
                        <p class="text-xs text-slate-600 leading-relaxed">Défense pénale, représentation des victimes, instruction.</p>
                    </NuxtLink>

                    <!-- Droit de la famille -->
                    <NuxtLink to="/droit-famille" class="group p-6 bg-white rounded-lg border border-slate-200 hover:border-red-900/20 hover:shadow-md transition-all duration-300">
                        <div class="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                            <i data-lucide="heart-handshake" class="w-5 h-5 text-slate-700"></i>
                        </div>
                        <h3 class="text-base font-semibold text-slate-900 mb-1">Droit de la famille</h3>
                        <p class="text-xs text-slate-600 leading-relaxed">Divorce, séparation, garde d'enfants, successions.</p>
                    </NuxtLink>

                    <!-- Droit des étrangers -->
                    <NuxtLink to="/droit-etrangers" class="group p-6 bg-white rounded-lg border border-slate-200 hover:border-red-900/20 hover:shadow-md transition-all duration-300">
                        <div class="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                            <i data-lucide="globe" class="w-5 h-5 text-slate-700"></i>
                        </div>
                        <h3 class="text-base font-semibold text-slate-900 mb-1">Droit des étrangers</h3>
                        <p class="text-xs text-slate-600 leading-relaxed">Permis de séjour, regroupement familial, naturalisation.</p>
                    </NuxtLink>

                    <!-- Droit du travail -->
                    <NuxtLink to="/droit-travail" class="group p-6 bg-white rounded-lg border border-slate-200 hover:border-red-900/20 hover:shadow-md transition-all duration-300">
                        <div class="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                            <i data-lucide="briefcase" class="w-5 h-5 text-slate-700"></i>
                        </div>
                        <h3 class="text-base font-semibold text-slate-900 mb-1">Droit du travail</h3>
                        <p class="text-xs text-slate-600 leading-relaxed">Licenciements, certificats de travail, harcèlement.</p>
                    </NuxtLink>

                    <!-- Droit du bail -->
                    <NuxtLink to="/droit-bail" class="group p-6 bg-white rounded-lg border border-slate-200 hover:border-red-900/20 hover:shadow-md transition-all duration-300">
                        <div class="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                            <i data-lucide="key" class="w-5 h-5 text-slate-700"></i>
                        </div>
                        <h3 class="text-base font-semibold text-slate-900 mb-1">Droit du bail</h3>
                        <p class="text-xs text-slate-600 leading-relaxed">Loyer, résiliation, évacuation, litiges locataires.</p>
                    </NuxtLink>

                    <!-- Droit des affaires -->
                    <NuxtLink to="/droit-affaires" class="group p-6 bg-white rounded-lg border border-slate-200 hover:border-red-900/20 hover:shadow-md transition-all duration-300">
                        <div class="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                            <i data-lucide="building-2" class="w-5 h-5 text-slate-700"></i>
                        </div>
                        <h3 class="text-base font-semibold text-slate-900 mb-1">Droit des affaires</h3>
                        <p class="text-xs text-slate-600 leading-relaxed">Contrats commerciaux, sociétés, fusions, litiges.</p>
                    </NuxtLink>

                    <!-- Droit des assurances - Made Clickable -->
                    <NuxtLink to="/contact" class="group p-6 bg-white rounded-lg border border-slate-200 hover:border-red-900/20 hover:shadow-md transition-all duration-300">
                        <div class="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                            <i data-lucide="shield" class="w-5 h-5 text-slate-700"></i>
                        </div>
                        <h3 class="text-base font-semibold text-slate-900 mb-1">Droit des assurances</h3>
                        <p class="text-xs text-slate-600 leading-relaxed">Assurances sociales, privées, responsabilité civile.</p>
                    </NuxtLink>

                    <!-- Droit administratif - Made Clickable -->
                    <NuxtLink to="/contact" class="group p-6 bg-white rounded-lg border border-slate-200 hover:border-red-900/20 hover:shadow-md transition-all duration-300">
                        <div class="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                            <i data-lucide="file-text" class="w-5 h-5 text-slate-700"></i>
                        </div>
                        <h3 class="text-base font-semibold text-slate-900 mb-1">Droit administratif</h3>
                        <p class="text-xs text-slate-600 leading-relaxed">Recours contre l'État, autorisations, fonction publique.</p>
                    </NuxtLink>
                </div>
            </div>
        </section>

        <!-- STRONG BOTTOM CTA Block Replaced/Enhanced with Form -->
        <section class="bg-slate-900 py-24 relative overflow-hidden" id="formulaire">
            <!-- decorative bg elements -->
            <div class="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-red-900/10 blur-3xl"></div>
            <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-900/10 blur-3xl"></div>

            <div class="relative max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
                <div class="text-left">
                    <h2 class="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-6">Ne laissez pas le doute s'installer.</h2>
                    <p class="text-slate-300 mb-10 max-w-xl text-base leading-relaxed">
                        Une situation juridique complexe demande une réaction immédiate. Nous proposons une première consultation d'orientation claire, sans jargon, pour définir votre stratégie.
                    </p>
                    
                    <div class="flex flex-col gap-4 text-slate-300">
                         <div class="flex items-center gap-3">
                             <div class="p-2 bg-slate-800 rounded-lg">
                                 <i data-lucide="phone" class="w-5 h-5 text-red-500"></i>
                             </div>
                             <div>
                                 <p class="text-sm font-medium text-white">Par téléphone</p>
                                 <a href="tel:0225121050" class="hover:text-white transition-colors">022 512 10 50</a>
                             </div>
                         </div>
                         <div class="flex items-center gap-3">
                             <div class="p-2 bg-slate-800 rounded-lg">
                                 <i data-lucide="mail" class="w-5 h-5 text-red-500"></i>
                             </div>
                             <div>
                                 <p class="text-sm font-medium text-white">Par email</p>
                                 <a href="mailto:info@clegal-avocats.ch" class="hover:text-white transition-colors">info@clegal-avocats.ch</a>
                             </div>
                         </div>
                    </div>
                    
                    <p class="mt-8 text-xs text-slate-500 uppercase tracking-widest font-medium">Réponse sous 24h ouvrables</p>
                </div>

                <!-- Form Component -->
                <div class="w-full">
                    <ContactForm />
                </div>
            </div>
        </section>
  </div>
</template>

<script setup lang="ts">
// Page component logic if needed
</script>