<template>
  <div class="antialiased text-slate-800 bg-slate-50 selection:bg-red-900 selection:text-white">
    
    <!-- Hero Section -->
    <section id="etude" class="lg:pt-40 lg:pb-28 overflow-hidden pt-32 pb-20 relative z-0">
      <div class="absolute inset-0 -z-20 h-full w-full">
        <!-- Image from HTML Source -->
        <img 
          src="/hero/landing-hero.png" 
          class="h-full w-full object-cover opacity-20 grayscale-[20%]"
        >
        <div class="absolute inset-0 bg-gradient-to-r from-slate-50/90 via-slate-50/80 to-slate-50/20"></div>
        <div class="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-slate-50"></div>
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
                        
            <h1 class="lg:text-5xl leading-tight text-4xl font-semibold text-slate-900 tracking-tight mb-6">
              Avocats à Genève : Conseil Juridique &amp; <br> 
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-700 to-slate-800">Stratégie Contentieuse</span>
            </h1>
                        
            <div class="w-24 h-1 bg-red-900 mb-6"></div>

            <p class="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed mix-blend-multiply">
              Pont-Rouge by Clegal-Avocats vous accompagne avec rigueur et pragmatisme. Nous transformons la complexité juridique en solutions claires pour sécuriser vos intérêts personnels et professionnels.
            </p>

            <div class="flex flex-col sm:flex-row gap-4">
              <a href="#contact" class="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-red-900 hover:bg-red-800 rounded-md shadow-md hover:shadow-lg transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 mr-2"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>
                Réserver une consultation
              </a>
              <a href="#domaines" class="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-slate-700 bg-white/80 border border-slate-200 hover:bg-white rounded-md transition-all backdrop-blur-sm">
                Découvrir nos domaines
              </a>
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
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 text-emerald-600 mr-2 mt-0.5 shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                  <span class="">Évaluation préliminaire de votre dossier</span>
                </li>
                <li class="flex items-start text-sm text-slate-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 text-emerald-600 mr-2 mt-0.5 shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                  <span class="">Identification des enjeux juridiques</span>
                </li>
                <li class="flex items-start text-sm text-slate-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 text-emerald-600 mr-2 mt-0.5 shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                  <span class="">Orientation stratégique immédiate</span>
                </li>
              </ul>
                            
              <a href="#contact" class="block hover:bg-slate-800 transition-all text-sm font-medium text-white text-center bg-slate-900 w-full rounded-md pt-3 pr-4 pb-3 pl-4 shadow-sm">Prendre rendez-vous avec votre avocat</a>
              <p class="text-center text-xs text-slate-400 mt-3">Sans engagement ultérieur obligatoire.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- NEW PROFILE SECTION -->
    <section id="profil" class="py-24 bg-white relative overflow-hidden border-t border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
                    
          <!-- Image Column (Portrait) -->
          <div class="lg:col-span-5 relative mb-12 lg:mb-0 order-1">
            <div class="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] group border border-slate-100">
              <img src="/images/mansour_cheema.png" alt="Maître Mansour Cheema" class="object-cover w-full h-full transform transition duration-700 group-hover:scale-105 saturate-0 group-hover:saturate-100">
                            
              <!-- Overlay Gradient -->
              <div class="bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
                            
              <div class="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div class="w-12 h-1 bg-red-600 mb-4"></div>
                <p class="text-2xl font-semibold tracking-tight mb-1">Me Mansour Cheema</p>
                <p class="text-sm font-medium text-slate-300 uppercase tracking-wider">Avocat Associé</p>
              </div>
            </div>
                        
            <!-- Decorative background elements -->
            <div class="absolute -top-12 -left-12 w-64 h-64 bg-slate-100 rounded-full blur-3xl -z-10 opacity-60"></div>
            <div class="absolute -bottom-8 -right-8 w-48 h-48 bg-red-50 rounded-full blur-3xl -z-10 opacity-60"></div>
          </div>
        
          <!-- Content Column -->
          <div class="lg:col-span-7 order-2">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 w-fit mb-6">
              <span class="text-xs font-medium text-slate-600 uppercase tracking-wide">Votre Partenaire de Confiance</span>
            </div>
                        
            <h2 class="md:text-4xl leading-tight text-3xl font-semibold text-slate-900 tracking-tight mb-6">"Le Droit est complexe, votre solution doit être simple."</h2>
                        
            <div class="text-base text-slate-600 mb-8 space-y-4 leading-relaxed">
              <p>Le Droit est complexe, et face à l'incertitude juridique, le doute est légitime. À l'Étude Pont-Rouge Avocats à Genève, nous comprenons la lourdeur des procédures et l'impact que cela a sur votre quotidien. Notre équipe a fait de la clarté sa priorité absolue. Notre mission n'est pas de vous vendre des heures de confusion, mais de transformer cette complexité en une feuille de route intelligible. Vous avez besoin d'une stratégie pour avancer, et nous sommes là pour vous la donner.</p>
              <p>Je privilégie une approche humaine et accessible. Mon objectif est d'allier l'excellence de la technicité juridique avec un coût maîtrisé et abordable pour les Genevois. Notre stratégie est toujours sur-mesure, mais nos tarifs sont conçus pour être justes. Que ce soit pour négocier un accord favorable ou plaider avec vigueur, vous méritez un avocat qui respecte votre budget tout en vous offrant une défense d'une rigueur absolue.</p>
            </div>
        
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-8 mb-10 border-t border-slate-100 pt-8">
              <div>
                <div class="flex items-center gap-2 text-slate-900 font-semibold tracking-tight text-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-red-800"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="M7 21h10"></path><path d="M12 3v18"></path><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path></svg>
                  <span>Expertise</span>
                </div>
                <div class="text-xs text-slate-500 mt-1">Droit pénal &amp; civil</div>
              </div>
              <div>
                <div class="flex items-center gap-2 text-slate-900 font-semibold tracking-tight text-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-red-800"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                  <span>Réactivité</span>
                </div>
                <div class="text-xs text-slate-500 mt-1">Suivi personnalisé</div>
              </div>
              <div>
                <div class="flex items-center gap-2 text-slate-900 font-semibold tracking-tight text-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-red-800"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
                  <span>Résultats</span>
                </div>
                <div class="text-xs text-slate-500 mt-1">Orienté solutions</div>
              </div>
            </div>
        
            <a href="#contact" class="inline-flex items-center justify-center hover:bg-slate-800 transition-all group text-sm font-medium text-white bg-slate-900 rounded-md pt-3 pr-6 pb-3 pl-6 shadow-sm">1er rendez-vous à CHF 155.-</a>
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
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-slate-700"><path d="m14 13-8.381 8.38a1 1 0 0 1-3.001-3l8.384-8.381"></path><path d="m16 16 6-6"></path><path d="m21.5 10.5-8-8"></path><path d="m8 8 6-6"></path><path d="m8.5 7.5 8 8"></path></svg>
            </div>
            <h3 class="text-base font-semibold text-slate-900 mb-1">Droit pénal</h3>
            <p class="text-xs text-slate-600 leading-relaxed">Défense pénale, représentation des victimes, instruction.</p>
          </NuxtLink>

          <!-- Droit de la famille -->
          <NuxtLink to="/droit-famille" class="group p-6 bg-white rounded-lg border border-slate-200 hover:border-red-900/20 hover:shadow-md transition-all duration-300">
            <div class="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-slate-700"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762"></path></svg>
            </div>
            <h3 class="text-base font-semibold text-slate-900 mb-1">Droit de la famille</h3>
            <p class="text-xs text-slate-600 leading-relaxed">Divorce, séparation, garde d'enfants, successions.</p>
          </NuxtLink>

          <!-- Droit des étrangers -->
          <NuxtLink to="/droit-etrangers" class="group p-6 bg-white rounded-lg border border-slate-200 hover:border-red-900/20 hover:shadow-md transition-all duration-300">
            <div class="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-slate-700"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
            </div>
            <h3 class="text-base font-semibold text-slate-900 mb-1">Droit des étrangers</h3>
            <p class="text-xs text-slate-600 leading-relaxed">Permis de séjour, regroupement familial, naturalisation.</p>
          </NuxtLink>

          <!-- Droit du travail -->
          <NuxtLink to="/droit-travail" class="group p-6 bg-white rounded-lg border border-slate-200 hover:border-red-900/20 hover:shadow-md transition-all duration-300">
            <div class="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-slate-700"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect width="20" height="14" x="2" y="6" rx="2"></rect></svg>
            </div>
            <h3 class="text-base font-semibold text-slate-900 mb-1">Droit du travail</h3>
            <p class="text-xs text-slate-600 leading-relaxed">Licenciements, certificats de travail, harcèlement.</p>
          </NuxtLink>

          <!-- Droit du bail -->
          <NuxtLink to="/droit-bail" class="group p-6 bg-white rounded-lg border border-slate-200 hover:border-red-900/20 hover:shadow-md transition-all duration-300">
            <div class="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-slate-700"><path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"></path><path d="m21 2-9.6 9.6"></path><circle cx="7.5" cy="15.5" r="5.5"></circle></svg>
            </div>
            <h3 class="text-base font-semibold text-slate-900 mb-1">Droit du bail</h3>
            <p class="text-xs text-slate-600 leading-relaxed">Loyer, résiliation, évacuation, litiges locataires.</p>
          </NuxtLink>

          <!-- Droit des affaires -->
          <NuxtLink to="/droit-affaires" class="group p-6 bg-white rounded-lg border border-slate-200 hover:border-red-900/20 hover:shadow-md transition-all duration-300">
            <div class="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-slate-700"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg>
            </div>
            <h3 class="text-base font-semibold text-slate-900 mb-1">Droit des affaires</h3>
            <p class="text-xs text-slate-600 leading-relaxed">Contrats commerciaux, sociétés, fusions, litiges.</p>
          </NuxtLink>

          <!-- Droit des assurances -->
          <NuxtLink to="/contact" class="group p-6 bg-white rounded-lg border border-slate-200 hover:border-red-900/20 hover:shadow-md transition-all duration-300">
            <div class="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-slate-700"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
            </div>
            <h3 class="text-base font-semibold text-slate-900 mb-1">Droit des assurances</h3>
            <p class="text-xs text-slate-600 leading-relaxed">Assurances sociales, privées, responsabilité civile.</p>
          </NuxtLink>

          <!-- Droit administratif -->
          <NuxtLink to="/contact" class="group p-6 bg-white rounded-lg border border-slate-200 hover:border-red-900/20 hover:shadow-md transition-all duration-300">
            <div class="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-slate-700"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
            </div>
            <h3 class="text-base font-semibold text-slate-900 mb-1">Droit administratif</h3>
            <p class="text-xs text-slate-600 leading-relaxed">Recours contre l'État, autorisations, fonction publique.</p>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- New Team Section -->
    <section class="py-20 bg-white border-b border-slate-200" id="equipe">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-base text-red-800 font-semibold tracking-wide uppercase">L'Équipe Pont-Rouge</h2>
          <p class="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Nos Avocats, Vos partenaires de confiance.</p>
          <p class="mt-4 text-lg text-slate-600">Une équipe structurée pour défendre vos intérêts avec excellence.</p>
        </div>

        <!-- Group 1: Avocats Associés (5 Profiles) -->
        <div class="mb-16">
          <div class="flex items-center justify-center gap-4 mb-10">
            <div class="h-px w-10 bg-slate-300"></div>
            <h3 class="text-sm font-bold text-slate-500 uppercase tracking-widest">Avocats Associés</h3>
            <div class="h-px w-10 bg-slate-300"></div>
          </div>
                    
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <!-- Partner 1 -->
            <div class="group">
              <a href="#equipe-bio" class="block relative mb-4 overflow-hidden rounded-xl bg-slate-200">
                <img src="/images/mansour_cheema.png" alt="Partner" class="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500 filter saturate-0 group-hover:saturate-100">
              </a>
              <div class="text-center">
                <h4 class="text-sm font-semibold text-slate-900">Me Mansour Cheema</h4>
                <p class="text-xs text-slate-500 mt-1">Avocat au Barreau</p>
              </div>
            </div>

            <!-- Partner 2 -->
            <div class="group">
              <a href="#equipe-bio" class="block relative mb-4 overflow-hidden rounded-xl bg-slate-200">
                <img src="/images/cyril_marc.png" alt="Partner" class="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500 filter saturate-0 group-hover:saturate-100">
              </a>
              <div class="text-center">
                <h4 class="text-sm font-semibold text-slate-900">Me Cyril-Marc Amberger</h4>
                <p class="text-xs text-slate-500 mt-1">Avocat au Barreau</p>
              </div>
            </div>

            <!-- Partner 3 -->
            <div class="group">
              <a href="#equipe-bio" class="block relative mb-4 overflow-hidden rounded-xl bg-slate-200">
                <img src="/images/tano_barth.png" alt="Partner" class="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500 filter saturate-0 group-hover:saturate-100">
              </a>
              <div class="text-center">
                <h4 class="text-sm font-semibold text-slate-900">Me Tano Barth</h4>
                <p class="text-xs text-slate-500 mt-1">Avocat au Barreau</p>
              </div>
            </div>

            <!-- Partner 4 -->
            <div class="group">
              <a href="#equipe-bio" class="block relative mb-4 overflow-hidden rounded-xl bg-slate-200">
                <img src="/images/remy_bucheler.png" alt="Partner" class="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500 filter saturate-0 group-hover:saturate-100">
              </a>
              <div class="text-center">
                <h4 class="text-sm font-semibold text-slate-900">Me Rémy Bucheler</h4>
                <p class="text-xs text-slate-500 mt-1">Avocat au Barreau</p>
              </div>
            </div>

            <!-- Partner 5 -->
            <div class="group">
              <a href="#equipe-bio" class="block relative mb-4 overflow-hidden rounded-xl bg-slate-200">
                <img src="/images/olivier_jacot.png" alt="Partner" class="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500 filter saturate-0 group-hover:saturate-100">
              </a>
              <div class="text-center">
                <h4 class="text-sm font-semibold text-slate-900">Me Olivier Jacot Des Combes</h4>
                <p class="text-xs text-slate-500 mt-1">Avocat au Barreau</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Group 2: Avocats-Stagiaires (2 Profiles) -->
        <div class="">
          <div class="flex items-center justify-center gap-4 mb-10">
            <div class="h-px w-10 bg-slate-300"></div>
            <h3 class="text-sm font-bold text-slate-500 uppercase tracking-widest">Avocats-Stagiaires</h3>
            <div class="h-px w-10 bg-slate-300"></div>
          </div>

          <div class="flex flex-wrap justify-center gap-8">
            <!-- Stagiaire 1 -->
            <div class="group w-full max-w-[240px]">
              <a href="#equipe-bio" class="block relative mb-4 overflow-hidden rounded-xl bg-slate-200">
                <img src="/images/lea_rodrigues.png" alt="Stagiaire" class="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500 filter saturate-0 group-hover:saturate-100">
              </a>
              <div class="text-center">
                <h4 class="text-sm font-semibold text-slate-900">Me Léa Rodrigues</h4>
                <p class="text-xs text-slate-500 mt-1">Avocate-stagiaire</p>
              </div>
            </div>

            <!-- Stagiaire 2 -->
            <div class="group w-full max-w-[240px]">
              <a href="#equipe-bio" class="block relative mb-4 overflow-hidden rounded-xl bg-slate-200">
                <img src="/images/labaume.png" alt="Stagiaire" class="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500 filter saturate-0 group-hover:saturate-100">
              </a>
              <div class="text-center">
                <h4 class="text-sm font-semibold text-slate-900">Me Jean Labaume</h4>
                <p class="text-xs text-slate-500 mt-1">Avocat-stagiaire</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- Social Proof / Testimonials -->
    <section class="bg-slate-50 pt-20 pb-20 border-b border-slate-200" id="blog">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
            <div class="flex text-red-800 mb-3">
              <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 fill-current"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
            </div>
            <p class="text-sm text-slate-600 mb-4">"Me Mansour Cheema a fait preuve de professionnalisme, d’écoute et de réactivité tout au long de mon dossier. Je recommande vivement ses services !"</p>
            <p class="text-xs font-semibold text-slate-900">SB - Droit du travail, Genève</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
            <div class="flex text-red-800 mb-3">
              <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 fill-current"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
            </div>
            <p class="text-sm text-slate-600 mb-4">"Professionnel, dynamique, réactif. Efficient (pas de conversations interminables) "Droit" au but. Je recommande vivement même à nouveau si besoin.
            Tarifs abordables ..."</p>
            <p class="text-xs font-semibold text-slate-900">CR - Droit de la famille, Genève</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
            <div class="flex text-red-800 mb-3">
              <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 fill-current"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
            </div>
            <p class="text-sm text-slate-600 mb-4">"Maître Cheema était compétent, compatissant et sûr de lui. Il m'a guidé à chaque étape du processus avec clarté et confiance, rendant cette période difficile beaucoup plus facile à gérer. Je me suis senti très soutenu."</p>
            <p class="text-xs font-semibold text-slate-900">AN- Droit pénal, Lausanne</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Conversion Section (Formulaire) -->
    <ContactForm />

    <!-- Mobile Sticky Action Button -->
    <div class="fixed bottom-4 left-4 right-4 z-40 md:hidden">
        <a href="#contact" class="flex items-center justify-center w-full bg-red-900 text-white font-semibold py-3 rounded-lg shadow-lg hover:bg-red-800 transition-colors">
            Prendre RDV (155 CHF)
        </a>
    </div>

  </div>
</template>

<script setup lang="ts">
import ContactForm from '@/components/ContactForm.vue';

const handleSubmit = () => {
  // Logic to handle form submission
  alert('Merci. Votre demande a été enregistrée. Nous vous contacterons pour fixer l\'horaire.');
}
</script>

<style scoped>
/* Custom scrollbar and Grid Background from HTML */
.bg-grid-slate {
  background-size: 40px 40px;
  background-image: linear-gradient(to right, rgba(226, 232, 240, 0.5) 1px, transparent 1px),
  linear-gradient(to bottom, rgba(226, 232, 240, 0.5) 1px, transparent 1px);
}

/* Ensure smooth scrolling behavior works within this page view */
html {
  scroll-behavior: smooth;
}
</style>