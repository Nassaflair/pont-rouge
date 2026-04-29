<template>
  <div class="antialiased text-slate-800 bg-slate-50 selection:bg-red-900 selection:text-white">
    
    <!-- Hero Section -->
    <section id="etude" class="scroll-mt-28 lg:pt-40 lg:pb-28 overflow-hidden pt-32 pb-20 relative z-0">
      <div class="absolute inset-0 -z-20 h-full w-full">
        <!-- Image from HTML Source -->
        <NuxtImg
          src="/images/landing_hero_optimized.jpg"
          alt="Cabinet Avocat Genève"
          format="webp"
          sizes="sm:100vw md:80vw lg:60vw"
          quality="60"
          class="w-full h-full object-cover object-center opacity-40"
          loading="eager"
          fetchpriority="high"
          width="1920"
          height="1080"
        />
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
                        
            <h1 class="lg:text-5xl leading-tight text-4xl font-semibold text-slate-900 tracking-tight mb-2">
              Clegal Avocats à Genève | <br>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-700 to-slate-800">Droit Pénal, Famille, Travail & Immigration</span>
            </h1>
            <p class="text-sm font-medium text-slate-400 tracking-wide mb-4">Pont-Rouge Avocats, vos avocats à Genève</p>

            <!-- Mobile Price Banner - visible only on mobile -->
            <div class="lg:hidden mb-6 space-y-3">
              <!-- Price Card -->
              <div class="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-4 border border-slate-200">
                <div class="text-center mb-3">
                  <p class="text-sm font-medium text-slate-500">1er rendez-vous d'analyse</p>
                  <p class="text-4xl font-bold text-slate-900">CHF 155.-</p>
                  <p class="text-xs text-red-700 font-medium mt-1">Sans engagement</p>
                </div>
                <a href="#contact" class="block w-full text-center bg-red-900 hover:bg-red-800 text-white font-semibold py-3.5 rounded-lg transition-colors shadow-md">
                  Prendre rendez-vous
                </a>
              </div>

              <!-- Google Rating Card -->
              <a href="https://share.google/QFbFusfEbqJIMUoNF" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-3 bg-white/90 backdrop-blur-sm rounded-lg p-3 border border-slate-200 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <div class="flex items-center gap-2">
                  <span class="text-xl font-bold text-slate-900">5.0</span>
                  <div class="flex text-yellow-400">
                    <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
                  </div>
                </div>
                <span class="text-xs text-slate-500">Avis Google</span>
              </a>
            </div>

            <div class="w-24 h-1 bg-red-900 mb-6 hidden lg:block"></div>

            <h2 class="text-xl font-bold text-slate-800 mb-4 max-w-lg leading-snug">
              Une expertise juridique de pointe, enfin accessible à Genève
            </h2>

            <p class="text-base text-slate-600 mb-6 max-w-lg leading-relaxed mix-blend-multiply">
              Que vous fassiez face à des défis en droit de l'immigration, pénal, de la famille, du travail ou d'un autre domaine, nous croyons que l'accès à un avocat de qualité ne devrait jamais être un luxe. <span class="hidden lg:inline">Ainsi, nous proposons un tarif horaire avantageux, des possibilités de paiement échelonné, des forfaits et acceptons de travailler à l'assistance judiciaire. Installée aux Acacias, notre étude allie la rigueur genevoise à une approche profondément humaine et inclusive.</span>
            </p>

            <!-- Desktop only: full "Pourquoi nous choisir" section -->
            <div class="max-w-lg mb-8 hidden lg:block">
              <h3 class="text-sm font-bold text-red-900 uppercase tracking-wide mb-3">Pourquoi nous choisir ?</h3>
              <ul class="space-y-2 text-sm text-slate-600">
                <li><span class="font-semibold text-slate-800">Une première étape sans stress :</span> Votre premier rendez-vous d'analyse est fixé à CHF 155.-. C'est le point de départ pour transformer la complexité du droit suisse en une stratégie claire et sereine.</li>
                <li><span class="font-semibold text-slate-800">La flexibilité avant tout :</span> Nous savons que les imprévus de la vie peuvent peser sur un budget. C'est pourquoi nous proposons des arrangements de paiement personnalisés (échelonnements, facilités) pour que votre défense reste toujours la priorité.</li>
                <li><span class="font-semibold text-slate-800">Un partenaire qui vous ressemble :</span> Chaque parcours est unique. Que vous soyez un particulier, une famille ou un professionnel, nous adaptons notre accompagnement à votre réalité financière et personnelle.</li>
              </ul>
              <p class="mt-4 text-sm text-slate-700 font-medium">
                <span class="text-red-900">Notre mission :</span> Sécuriser vos intérêts devant le Tribunal de Première Instance, le Tribunal pénal ou l'OCPM, tout en restant à vos côtés avec des solutions financières souples.
              </p>
            </div>

            <!-- Mobile: compact benefits -->
            <div class="lg:hidden mb-6">
              <ul class="space-y-2 text-sm text-slate-600">
                <li class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 text-emerald-600 mr-2 mt-0.5 shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                  <span>Paiement échelonné possible</span>
                </li>
                <li class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 text-emerald-600 mr-2 mt-0.5 shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                  <span>Assistance judiciaire acceptée</span>
                </li>
                <li class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 text-emerald-600 mr-2 mt-0.5 shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                  <span>Honoraires transparents dès le départ</span>
                </li>
              </ul>
            </div>

            <div class="hidden lg:flex flex-col sm:flex-row gap-4">
              <a href="#contact" class="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-red-900 hover:bg-red-800 rounded-md shadow-md hover:shadow-lg transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 mr-2"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>
                Réserver une consultation
              </a>
              <a href="#domaines" class="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-slate-700 bg-white/80 border border-slate-200 hover:bg-white rounded-md transition-all backdrop-blur-sm">
                Découvrir nos domaines
              </a>
            </div>
          </div>

          <!-- Right Content (Conversion Card) - Hidden on mobile -->
          <div class="relative group mt-8 lg:mt-0 scroll-mt-28 hidden lg:block" id="honoraires">
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

            <!-- Google Reviews Badge -->
            <div class="mt-6 bg-white/95 backdrop-blur-sm ring-1 ring-slate-200 rounded-xl shadow-lg p-5">
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-8 h-8">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <div>
                    <div class="flex items-center gap-1.5">
                      <span class="text-xl font-bold text-slate-900">5.0</span>
                      <div class="flex text-yellow-400">
                        <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
                      </div>
                    </div>
                    <p class="text-xs text-slate-500">Avis Google</p>
                  </div>
                </div>
                <a
                  href="https://share.google/QFbFusfEbqJIMUoNF"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-xs font-medium text-red-800 hover:text-red-900 hover:underline"
                >
                  Voir les avis
                </a>
              </div>

              <!-- Reviews Carousel -->
              <div class="relative overflow-hidden border-t border-slate-100 pt-4">
                <div class="flex transition-transform duration-500 ease-in-out" :style="{ transform: `translateX(-${currentReview * 100}%)` }">
                  <div v-for="(review, index) in googleReviews" :key="index" class="w-full flex-shrink-0 px-1">
                    <div class="flex text-yellow-400 mb-2">
                      <svg v-for="star in 5" :key="star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-3 h-3"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
                    </div>
                    <p class="text-xs text-slate-600 italic line-clamp-3">"{{ review.text }}"</p>
                    <p class="text-xs font-semibold text-slate-800 mt-2">{{ review.author }}</p>
                  </div>
                </div>

                <!-- Dots indicator -->
                <div class="flex justify-center gap-1.5 mt-3">
                  <button
                    v-for="(_, index) in googleReviews"
                    :key="index"
                    @click="currentReview = index"
                    class="w-1.5 h-1.5 rounded-full transition-colors"
                    :class="currentReview === index ? 'bg-red-800' : 'bg-slate-300'"
                  ></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- NEW PROFILE SECTION -->
    <section id="profil" class="scroll-mt-28 py-24 bg-white relative overflow-hidden border-t border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
                    
          <!-- Image Column (Portrait) -->
          <div class="lg:col-span-5 relative mb-12 lg:mb-0 order-1">
            <div class="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] group border border-slate-100">
              <NuxtImg
                src="/images/mansour_cheema_portrait.png"
                alt="Maître Mansour Cheema - Avocat à Genève"
                format="webp"
                width="600"
                height="800"
                loading="lazy"
                class="object-cover w-full h-full transform transition duration-700 group-hover:scale-105 saturate-0 group-hover:saturate-100"
              />
                            
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
                        
            <h2 class="md:text-4xl leading-tight text-3xl font-semibold text-slate-900 tracking-tight mb-6">"Le droit suisse est complexe, votre solution doit être simple, humaine et accessible."</h2>

            <div class="text-base text-slate-600 mb-8 space-y-4 leading-relaxed">
              <p>Le système judiciaire peut impressionner, voire intimider. Face à l'incertitude d'une procédure à <span class="font-bold text-slate-900">Genève</span> ou ailleurs en Suisse, il est normal de ressentir une appréhension. Chez <span class="font-bold text-slate-900">Clegal Avocats</span>, nous ne voyons pas seulement des dossiers, nous voyons des personnes. Nous savons qu'un litige impacte votre vie quotidienne, votre sommeil et votre sérénité.</p>
              <p>Ma priorité absolue ? <span class="font-bold text-slate-900">La clarté.</span> Ici, nous ne vous vendons pas des heures de jargon technique, mais une stratégie de défense que vous comprenez vraiment. Que vous soyez un particulier aux <span class="font-bold text-slate-900">Acacias</span> ou une entreprise genevoise, je transforme la complexité du Code civil ou pénal en une feuille de route précise pour protéger vos intérêts.</p>

              <h3 class="text-lg font-semibold text-slate-900 pt-2">Une justice pour tous, sans barrière financière</h3>
              <p>Je suis convaincu que l'excellence juridique ne doit pas être réservée à une élite. Mon engagement est de rendre le droit accessible à chaque <span class="font-bold text-slate-900">Genevois et Genevoise</span>, quelle que soit sa situation :</p>
              <ul class="space-y-2 text-sm">
                <li><span class="font-semibold text-slate-800">Une porte d'entrée simplifiée :</span> Un premier rendez-vous d'analyse à CHF 155.- pour poser les bases, sans engagement lourd.</li>
                <li><span class="font-semibold text-slate-800">Transparence et sérénité :</span> Nous définissons ensemble les honoraires dès le départ. Pas de factures surprises.</li>
                <li><span class="font-semibold text-slate-800">Flexibilité totale :</span> Parce que chacun traverse des réalités différentes, nous proposons des arrangements de paiement personnalisés. Nous adaptons nos modalités à votre budget pour que l'aspect financier ne soit jamais un frein à votre défense.</li>
              </ul>
              <p>Qu'il s'agisse de défendre vos droits aux <span class="font-bold text-slate-900">Prud'hommes</span>, de sécuriser un permis de séjour, de traverser un divorce ou de vous soutenir dans une procédure pénale, vous méritez une rigueur absolue et un partenaire qui s'adapte à vous.</p>
              <p class="font-medium text-slate-800">Rencontrons-nous pour transformer vos doutes en solutions.</p>
            </div>
        
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-8 mb-10 border-t border-slate-100 pt-8">
              <div>
                <div class="flex items-center gap-2 text-slate-900 font-semibold tracking-tight text-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-red-800"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="M7 21h10"></path><path d="M12 3v18"></path><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path></svg>
                  <span>Expertise</span>
                </div>
                <div class="text-xs text-slate-500 mt-1">Droit pénal, civil & administratif</div>
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
    <section class="scroll-mt-28 border-y bg-slate-50 border-slate-200 pt-20 pb-20" id="domaines">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <h2 class="text-base text-red-800 font-semibold tracking-wide uppercase">Nos domaines d'expertise juridique au Barreau de Genève</h2>
          <p class="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Expertise juridique globale à Genève</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Droit des étrangers / Immigration (Premier) -->
          <NuxtLink to="/droit-etrangers" class="group p-6 bg-white rounded-lg border border-slate-200 hover:border-red-900/20 hover:shadow-md transition-all duration-300">
            <div class="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-slate-700"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
            </div>
            <h3 class="text-base font-semibold text-slate-900 mb-1">Avocat droit des étrangers à Genève</h3>
            <p class="text-xs text-slate-600 leading-relaxed">Permis B, C, regroupement familial, naturalisation à Genève.</p>
          </NuxtLink>

          <!-- Droit pénal -->
          <NuxtLink to="/droit-penal" class="group p-6 bg-white rounded-lg border border-slate-200 hover:border-red-900/20 hover:shadow-md transition-all duration-300">
            <div class="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-slate-700"><path d="m14 13-8.381 8.38a1 1 0 0 1-3.001-3l8.384-8.381"></path><path d="m16 16 6-6"></path><path d="m21.5 10.5-8-8"></path><path d="m8 8 6-6"></path><path d="m8.5 7.5 8 8"></path></svg>
            </div>
            <h3 class="text-base font-semibold text-slate-900 mb-1">Avocat pénaliste à Genève</h3>
            <p class="text-xs text-slate-600 leading-relaxed">Défense pénale, victimes, Ministère public et tribunaux genevois.</p>
          </NuxtLink>

          <!-- Droit de la famille -->
          <NuxtLink to="/droit-famille" class="group p-6 bg-white rounded-lg border border-slate-200 hover:border-red-900/20 hover:shadow-md transition-all duration-300">
            <div class="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-slate-700"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762"></path></svg>
            </div>
            <h3 class="text-base font-semibold text-slate-900 mb-1">Avocat famille et divorce à Genève</h3>
            <p class="text-xs text-slate-600 leading-relaxed">Divorce, séparation, garde, pension, succession.</p>
          </NuxtLink>



          <!-- Droit du travail -->
          <NuxtLink to="/droit-travail" class="group p-6 bg-white rounded-lg border border-slate-200 hover:border-red-900/20 hover:shadow-md transition-all duration-300">
            <div class="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-slate-700"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect width="20" height="14" x="2" y="6" rx="2"></rect></svg>
            </div>
            <h3 class="text-base font-semibold text-slate-900 mb-1">Avocat travail à Genève</h3>
            <p class="text-xs text-slate-600 leading-relaxed">Licenciement, certificats, harcèlement, Tribunal des prud'hommes.</p>
          </NuxtLink>

          <!-- Droit du bail -->
          <NuxtLink to="/droit-immobilier/avocat-droit-bail" class="group p-6 bg-white rounded-lg border border-slate-200 hover:border-red-900/20 hover:shadow-md transition-all duration-300">
            <div class="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-slate-700"><path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"></path><path d="m21 2-9.6 9.6"></path><circle cx="7.5" cy="15.5" r="5.5"></circle></svg>
            </div>
            <h3 class="text-base font-semibold text-slate-900 mb-1">Avocat bail à Genève</h3>
            <p class="text-xs text-slate-600 leading-relaxed">Loyer, résiliation, évacuation, Tribunal des baux et loyers.</p>
          </NuxtLink>

          <!-- Droit des affaires -->
          <NuxtLink to="/droit-affaires" class="group p-6 bg-white rounded-lg border border-slate-200 hover:border-red-900/20 hover:shadow-md transition-all duration-300">
            <div class="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-slate-700"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg>
            </div>
            <h3 class="text-base font-semibold text-slate-900 mb-1">Avocat des affaires à Genève</h3>
            <p class="text-xs text-slate-600 leading-relaxed">Contrats commerciaux, sociétés (Sàrl, SA), fusions, litiges.</p>
          </NuxtLink>

          <!-- Droit des assurances -->
          <NuxtLink to="/droit-assurance" class="group p-6 bg-white rounded-lg border border-slate-200 hover:border-red-900/20 hover:shadow-md transition-all duration-300">
            <div class="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-slate-700"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
            </div>
            <h3 class="text-base font-semibold text-slate-900 mb-1">Avocat assurances à Genève</h3>
            <p class="text-xs text-slate-600 leading-relaxed">LAA, AI, LPP, RC. Chambre des assurances sociales.</p>
          </NuxtLink>

          <!-- Droit administratif -->
          <NuxtLink to="/droit-administratif" class="group p-6 bg-white rounded-lg border border-slate-200 hover:border-red-900/20 hover:shadow-md transition-all duration-300">
            <div class="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-slate-700"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
            </div>
            <h3 class="text-base font-semibold text-slate-900 mb-1">Avocat administratif à Genève</h3>
            <p class="text-xs text-slate-600 leading-relaxed">Recours contre l'État, TAPI, Cour de justice administrative.</p>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Cross-city : Avocat Genève + Avocat Lausanne -->
    <section class="border-b border-slate-200 bg-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-12">
          <h2 class="text-base text-red-800 font-semibold tracking-wide uppercase">Genève et Lausanne</h2>
          <p class="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Un cabinet d'avocats au cœur de la Suisse romande</p>
          <p class="mt-4 text-lg text-slate-600">
            Sept avocats. Deux bureaux. Le même premier rendez-vous d'analyse à CHF 155.-.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Carte Genève -->
          <NuxtLink to="/#domaines" class="group relative bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:border-red-900/30 hover:shadow-lg transition-all overflow-hidden">
            <div class="absolute top-4 right-4 inline-flex items-center gap-1.5 px-2 py-0.5 bg-emerald-50 border border-emerald-200 rounded-full">
              <span class="relative flex h-1.5 w-1.5">
                <span class="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span class="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
              </span>
              <span class="text-[9px] font-bold uppercase tracking-wider text-emerald-900">Ouvert</span>
            </div>
            <p class="text-xs uppercase tracking-widest font-bold text-red-900 mb-3">Bureau de Genève</p>
            <h3 class="text-2xl font-semibold text-slate-900 group-hover:text-red-900 transition-colors">
              Avocat à Genève
            </h3>
            <p class="text-sm text-slate-600 mt-3 leading-relaxed">
              Route des Jeunes 9, 1227 Les Acacias. À 5 minutes du centre-ville. Tribunal de première instance, Cour de justice, Ministère public, Tribunal des prud'hommes — tout l'écosystème judiciaire genevois.
            </p>
            <div class="mt-6 flex flex-wrap gap-2">
              <span class="text-[10px] font-medium px-2 py-1 bg-white text-slate-600 rounded border border-slate-200">Acacias</span>
              <span class="text-[10px] font-medium px-2 py-1 bg-white text-slate-600 rounded border border-slate-200">Carouge</span>
              <span class="text-[10px] font-medium px-2 py-1 bg-white text-slate-600 rounded border border-slate-200">Eaux-Vives</span>
              <span class="text-[10px] font-medium px-2 py-1 bg-white text-slate-600 rounded border border-slate-200">Plainpalais</span>
              <span class="text-[10px] font-medium px-2 py-1 bg-white text-slate-600 rounded border border-slate-200">Lancy</span>
              <span class="text-[10px] font-medium px-2 py-1 bg-white text-slate-600 rounded border border-slate-200">Vernier</span>
            </div>
            <p class="mt-6 text-sm font-medium text-red-900 group-hover:underline">Voir nos services à Genève →</p>
          </NuxtLink>

          <!-- Carte Lausanne -->
          <NuxtLink to="/lausanne" class="group relative bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:border-red-900/30 hover:shadow-lg transition-all overflow-hidden">
            <div class="absolute top-4 right-4 inline-flex items-center gap-1.5 px-2 py-0.5 bg-emerald-50 border border-emerald-200 rounded-full">
              <span class="relative flex h-1.5 w-1.5">
                <span class="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span class="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
              </span>
              <span class="text-[9px] font-bold uppercase tracking-wider text-emerald-900">Ouvert</span>
            </div>
            <p class="text-xs uppercase tracking-widest font-bold text-red-900 mb-3">Bureau de Lausanne</p>
            <h3 class="text-2xl font-semibold text-slate-900 group-hover:text-red-900 transition-colors">
              Avocat à Lausanne
            </h3>
            <p class="text-sm text-slate-600 mt-3 leading-relaxed">
              Plusieurs de nos avocats sont formés à l'UNIL et interviennent devant le Tribunal cantonal vaudois, la Justice de paix de Lausanne, la Cour de droit administratif et public (CDAP) et le Tribunal d'arrondissement de Lausanne. Premier rendez-vous d'analyse à CHF 155.-.
            </p>
            <div class="mt-6 flex flex-wrap gap-2">
              <span class="text-[10px] font-medium px-2 py-1 bg-white text-slate-600 rounded border border-slate-200">Lausanne</span>
              <span class="text-[10px] font-medium px-2 py-1 bg-white text-slate-600 rounded border border-slate-200">Pully</span>
              <span class="text-[10px] font-medium px-2 py-1 bg-white text-slate-600 rounded border border-slate-200">Renens</span>
              <span class="text-[10px] font-medium px-2 py-1 bg-white text-slate-600 rounded border border-slate-200">Morges</span>
              <span class="text-[10px] font-medium px-2 py-1 bg-white text-slate-600 rounded border border-slate-200">Vevey</span>
              <span class="text-[10px] font-medium px-2 py-1 bg-white text-slate-600 rounded border border-slate-200">Nyon</span>
            </div>
            <p class="mt-6 text-sm font-medium text-red-900 group-hover:underline">Voir nos services à Lausanne →</p>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- New Team Section -->
    <section class="scroll-mt-28 py-20 bg-white border-b border-slate-200" id="equipe">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-base text-red-800 font-semibold tracking-wide uppercase">Vos avocats dédiés au quartier Acacias Genève</h2>
          <p class="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Nos Avocats, vos partenaires de confiance.</p>
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
            <div 
              v-for="(partner, index) in partners" 
              :key="index"
              class="group cursor-pointer"
              @click="openPopup(partner)"
            >
              <div class="block relative mb-4 overflow-hidden rounded-xl bg-slate-200">
                <NuxtImg :src="partner.image.replace('.png', '.jpg')" :alt="partner.name + ' - Avocat à Genève'" format="webp" width="300" height="400" loading="lazy" class="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500 filter saturate-0 group-hover:saturate-100" />
              </div>
              <div class="text-center">
                <h4 class="text-sm font-semibold text-slate-900">{{ partner.name }}</h4>
                <p class="text-xs text-slate-500 mt-1">{{ partner.role }}</p>
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
            <div 
              v-for="(intern, index) in interns"
              :key="index"
              class="group w-full max-w-[240px] cursor-pointer"
              @click="openPopup(intern)"
            >
              <div class="block relative mb-4 overflow-hidden rounded-xl bg-slate-200">
                <NuxtImg :src="intern.image.replace('.png', '.jpg')" :alt="intern.name + ' - Avocat stagiaire Genève'" format="webp" width="300" height="400" loading="lazy" class="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500 filter saturate-0 group-hover:saturate-100" />
              </div>
              <div class="text-center">
                <h4 class="text-sm font-semibold text-slate-900">{{ intern.name }}</h4>
                <p class="text-xs text-slate-500 mt-1">{{ intern.role }}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- Social Proof / Testimonials -->
    <section class="scroll-mt-28 bg-slate-50 pt-20 pb-20 border-b border-slate-200" id="avis">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <!-- Google Rating Header -->
        <div class="text-center mb-12">
          <div class="inline-flex items-center gap-3 bg-white px-6 py-4 rounded-xl shadow-md border border-slate-100 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-8 h-8">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <div class="text-left">
              <div class="flex items-center gap-1">
                <span class="text-2xl font-bold text-slate-900">5.0</span>
                <div class="flex text-yellow-400">
                  <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
                </div>
              </div>
              <p class="text-xs text-slate-500">Avis Google</p>
            </div>
          </div>
          <h2 class="text-3xl font-semibold text-slate-900 tracking-tight">Ce que nos clients disent de nous</h2>
          <p class="mt-2 text-slate-600">La satisfaction de nos clients est notre priorité</p>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-white p-6 rounded-lg shadow-sm border border-slate-100 relative">
            <div class="absolute top-4 right-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-5 h-5 opacity-40">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </div>
            <div class="flex text-yellow-400 mb-3">
              <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
            </div>
            <p class="text-sm text-slate-600 mb-4">"Me Mansour Cheema a fait preuve de professionnalisme, d'écoute et de réactivité tout au long de mon dossier. Je recommande vivement ses services !"</p>
            <p class="text-xs font-semibold text-slate-900">SB - Droit du travail, Genève</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-sm border border-slate-100 relative">
            <div class="absolute top-4 right-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-5 h-5 opacity-40">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </div>
            <div class="flex text-yellow-400 mb-3">
              <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
            </div>
            <p class="text-sm text-slate-600 mb-4">"Professionnel, dynamique, réactif. Efficient (pas de conversations interminables) "Droit" au but. Je recommande vivement même à nouveau si besoin. Tarifs abordables ..."</p>
            <p class="text-xs font-semibold text-slate-900">CR - Droit de la famille, Genève</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-sm border border-slate-100 relative">
            <div class="absolute top-4 right-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-5 h-5 opacity-40">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </div>
            <div class="flex text-yellow-400 mb-3">
              <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
            </div>
            <p class="text-sm text-slate-600 mb-4">"Maître Cheema était compétent, compatissant et sûr de lui. Il m'a guidé à chaque étape du processus avec clarté et confiance, rendant cette période difficile beaucoup plus facile à gérer. Je me suis senti très soutenu."</p>
            <p class="text-xs font-semibold text-slate-900">AN - Droit pénal, Lausanne</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Conversion Section (Formulaire) -->
    <ContactForm />

    <!-- Access & Map Section (SEO Local) -->
    <section class="py-20 bg-slate-50 border-t border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
            <!-- Info -->
            <div>
                <h3 class="text-2xl font-bold text-slate-900 mb-6">Nous trouver aux Acacias</h3>
                <div class="space-y-6 text-slate-600">
                    <div class="flex items-start gap-4">
                        <div class="p-3 bg-white rounded-lg border border-slate-200 shadow-sm shrink-0">
                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-red-900"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                        </div>
                        <div>
                            <p class="font-semibold text-slate-900 text-lg">Adresse</p>
                            <p class="text-slate-800">Route des Jeunes 9</p>
                            <p class="text-slate-800">1227 Les Acacias (Genève)</p>
                            <p class="text-sm text-slate-500 mt-2 bg-slate-100 inline-block px-2 py-1 rounded">🅿️ Parking public à proximité / 🚊 Arrêt TPG "Acacias"</p>
                        </div>
                    </div>
                    
                     <div class="flex items-start gap-4">
                        <div class="p-3 bg-white rounded-lg border border-slate-200 shadow-sm shrink-0">
                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-red-900"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                        </div>
                        <div>
                            <p class="font-semibold text-slate-900 text-lg">Contact direct</p>
                            <p><a href="mailto:info@clegal-avocats.ch" class="hover:text-red-900 transition-colors font-medium">info@clegal-avocats.ch</a></p>
                            <p><a href="tel:0225121050" class="hover:text-red-900 transition-colors font-medium">022 512 10 50</a></p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Map – chargée au clic pour la performance -->
            <div
              class="rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-200 h-[400px] relative group cursor-pointer"
              @click="showMap = true"
            >
                 <iframe
                    v-if="showMap"
                    width="100%"
                    height="100%"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                    src="https://maps.google.com/maps?q=Route+des+Jeunes+9+1227+Les+Acacias&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    title="Carte Clegal Avocats Genève"
                    class="absolute inset-0 w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                 ></iframe>
                 <div v-else class="absolute inset-0 flex flex-col items-center justify-center text-slate-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="mb-3 text-red-900"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    <p class="font-medium text-slate-700">Cliquez pour afficher la carte</p>
                    <p class="text-sm text-slate-400 mt-1">Route des Jeunes 9, 1227 Les Acacias</p>
                 </div>
            </div>
        </div>
      </div>
    </section>

    <!-- Mobile Sticky Action Button -->
    <div class="fixed bottom-4 left-4 right-4 z-40 md:hidden">
        <a href="#contact" class="flex items-center justify-center w-full bg-red-900 text-white font-semibold py-3 rounded-lg shadow-lg hover:bg-red-800 transition-colors">
            Prendre RDV (155 CHF)
        </a>
    </div>


    <PartnerPopup 
      :is-open="isPopupOpen" 
      :partner="selectedPartner" 
      @close="isPopupOpen = false" 
    />

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, defineAsyncComponent } from 'vue';
import { lawyers, getPartners, getInterns } from '~/data/team';
import { locations } from '~/data/locations';

const ContactForm = defineAsyncComponent(() => import('@/components/ContactForm.vue'));
const PartnerPopup = defineAsyncComponent(() => import('@/components/PartnerPopup.vue'));

useLocalSeo(
  'Avocat Genève | Clegal Avocats – Dès 155.- le 1er RDV',
  'Cabinet d\'avocats à Genève (Acacias). Expertise droit pénal, famille, travail & immigration. 1er RDV à 155.-. 7 avocats à votre service.',
  {
    city: 'geneve',
    type: 'LegalService',
    priceRange: 'Dès CHF 155.-',
    lawyerSlugs: lawyers.map((l) => l.slug),
    faq: [
      {
        question: 'Combien coûte un avocat à Genève ?',
        answer: 'Chez Clegal Avocats, le premier rendez-vous d\'analyse est à CHF 155.-. Les honoraires varient ensuite selon la complexité du dossier, entre CHF 350.- et 400.- de l\'heure.',
      },
      {
        question: 'Quels domaines du droit pratiquez-vous ?',
        answer: 'Nous pratiquons le droit de la famille (divorce, garde d\'enfants, pension alimentaire), le droit du travail (licenciement abusif, Prud\'hommes), le droit pénal, le droit des étrangers (permis B, C, OCPM), le droit immobilier, le droit des affaires et le droit administratif.',
      },
      {
        question: 'Comment prendre rendez-vous chez Clegal Avocats ?',
        answer: 'Appelez le +41 22 512 10 50 ou utilisez le formulaire de contact sur notre site. Nous répondons sous 24h ouvrables. Notre étude est située Route des Jeunes 9, 1227 Les Acacias, Genève.',
      },
      {
        question: 'Clegal Avocats est-il aussi présent à Lausanne ?',
        answer: 'Oui. Clegal Avocats dispose de deux bureaux : Genève (Route des Jeunes 9, 1227 Les Acacias) et Lausanne. Nos avocats interviennent devant les juridictions vaudoises (Tribunal cantonal vaudois, Tribunal d\'arrondissement de Lausanne, Justice de paix, CDAP). Plusieurs membres de l\'équipe ont étudié à l\'Université de Lausanne ou exercé dans des études vaudoises — voir la page /lausanne.',
      },
    ],
  }
);

const isPopupOpen = ref(false);
const selectedPartner = ref(null);
const showMap = ref(false);

// Google Reviews Carousel
const currentReview = ref(0);
const googleReviews = [
  {
    text: "Me Mansour Cheema a fait preuve de professionnalisme, d'écoute et de réactivité tout au long de mon dossier. Je recommande vivement ses services !",
    author: "SB - Droit du travail"
  },
  {
    text: "Professionnel, dynamique, réactif. Efficient (pas de conversations interminables) \"Droit\" au but. Je recommande vivement. Tarifs abordables.",
    author: "CR - Droit de la famille"
  },
  {
    text: "Maître Cheema était compétent, compatissant et sûr de lui. Il m'a guidé à chaque étape du processus avec clarté et confiance.",
    author: "AN - Droit pénal"
  }
];

let reviewInterval: ReturnType<typeof setInterval> | null = null;

onMounted(() => {
  reviewInterval = setInterval(() => {
    currentReview.value = (currentReview.value + 1) % googleReviews.length;
  }, 5000);
});

onUnmounted(() => {
  if (reviewInterval) {
    clearInterval(reviewInterval);
  }
});

// Mapping data/team.ts → format attendu par le composant PartnerPopup (qui attend `role`).
const toPopupShape = (l: typeof lawyers[number]) => ({
  name: l.name,
  role: l.jobTitle,
  image: l.image,
  email: l.email,
  languages: l.languages,
  bio: l.bio,
});

const partners = getPartners().map(toPopupShape);
const interns = getInterns().map(toPopupShape);

const openPopup = (partner: any) => {
  selectedPartner.value = partner;
  isPopupOpen.value = true;
};


const handleSubmit = () => {
  // Logic to handle form submission
  alert('Merci. Votre demande a été enregistrée. Nous vous contacterons pour fixer l\'horaire.');
}

// SEO Schema.org : WebSite (avec SearchAction) + Organization multi-branch (Genève + Lausanne)
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': 'https://clegal-avocats.ch/#website',
        url: 'https://clegal-avocats.ch',
        name: 'Clegal Avocats',
        description: 'Cabinet d\'avocats à Genève et à Lausanne. Droit pénal, famille, travail, étrangers, bail, affaires.',
        publisher: { '@id': 'https://clegal-avocats.ch/#organization' },
        inLanguage: 'fr-CH',
      }),
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': 'https://clegal-avocats.ch/#organization',
        name: 'Clegal Avocats',
        alternateName: 'Clegal',
        url: 'https://clegal-avocats.ch',
        logo: 'https://clegal-avocats.ch/logo.svg',
        description: 'Cabinet d\'avocats généraliste fondé à Genève. Sept avocats spécialisés en droit pénal, droit de la famille, droit du travail, droit des étrangers, droit immobilier, droit des affaires, droit administratif et droit des assurances.',
        founder: { '@type': 'Person', name: 'Me Mansour A. Cheema' },
        numberOfEmployees: { '@type': 'QuantitativeValue', value: 7 },
        department: [
          {
            '@type': 'LegalService',
            '@id': 'https://clegal-avocats.ch/#geneve',
            name: locations.geneve.name,
            url: 'https://clegal-avocats.ch',
            telephone: locations.geneve.telephone,
            email: locations.geneve.email,
            address: {
              '@type': 'PostalAddress',
              streetAddress: locations.geneve.streetAddress,
              addressLocality: locations.geneve.addressLocality,
              postalCode: locations.geneve.postalCode,
              addressRegion: locations.geneve.addressRegion,
              addressCountry: locations.geneve.addressCountry,
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: locations.geneve.geo.latitude,
              longitude: locations.geneve.geo.longitude,
            },
            areaServed: locations.geneve.areaServed.map((c) => ({ '@type': 'City', name: c })),
            openingHoursSpecification: locations.geneve.hours.map((h) => ({
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: h.dayOfWeek,
              opens: h.opens,
              closes: h.closes,
            })),
          },
          {
            '@type': 'LegalService',
            '@id': 'https://clegal-avocats.ch/#lausanne',
            name: locations.lausanne.name,
            url: 'https://clegal-avocats.ch/lausanne',
            email: locations.lausanne.email,
            address: {
              '@type': 'PostalAddress',
              addressLocality: locations.lausanne.addressLocality,
              postalCode: locations.lausanne.postalCode,
              addressRegion: locations.lausanne.addressRegion,
              addressCountry: locations.lausanne.addressCountry,
            },
            areaServed: locations.lausanne.areaServed.map((c) => ({ '@type': 'City', name: c })),
          },
        ],
      }),
    },
  ],
});
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