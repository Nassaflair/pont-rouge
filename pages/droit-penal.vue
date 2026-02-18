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
                        <!-- Breadcrumb -->
                        <Breadcrumb :links="[
                            { name: 'Droit Pénal', path: '/droit-penal' }
                        ]" />

                        <h1 class="text-3xl md:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight mb-6 leading-[1.1] text-balance">
                            Avocat Expert en Droit Pénal à Genève<br>
                        </h1>

                        <p class="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                            Défense pénale, assistance aux victimes et conseil juridique. Nous vous représentons devant le Ministère Public et le Tribunal de première instance.
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
                            <span class="flex items-center gap-1.5"><i data-lucide="check-circle" class="w-4 h-4 text-emerald-600"></i> Défense Accusés</span>
                            <span class="flex items-center gap-1.5"><i data-lucide="check-circle" class="w-4 h-4 text-emerald-600"></i> Assistance Victimes</span>
                            <span class="flex items-center gap-1.5"><i data-lucide="check-circle" class="w-4 h-4 text-emerald-600"></i> Mineurs</span>
                        </div>
                    </div>

                    <!-- Image Right -->
                    <div class="relative hidden lg:block">
                        <div class="absolute inset-0 bg-red-900/5 rounded-2xl transform translate-x-4 translate-y-4"></div>
                        <div class="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
                            <img src="/images/landing_hero_optimized.jpg" loading="lazy" width="800" height="600" alt="Avocat Pénal Genève"
                                class="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" />
                            <div class="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm border border-slate-200 p-4 rounded-lg shadow-lg max-w-xs">
                                <div class="flex items-center gap-3 mb-2">
                                    <div class="p-2 bg-red-50 rounded-full text-red-900">
                                        <i data-lucide="shield" class="w-4 h-4"></i>
                                    </div>
                                    <span class="text-xs font-semibold text-slate-900">Défense Pénale</span>
                                </div>
                                <p class="text-[11px] leading-snug text-slate-500">Ministère Public, Place du Bourg-de-Four.</p>
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
                    <p class="text-lg text-slate-600">Une connaissance approfondie du système judiciaire local.</p>
                </div>
                
                <div class="grid md:grid-cols-2 gap-12 items-center">
                    <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                        <div class="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900">
                            <i data-lucide="landmark" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-4">Connaissance des tendances des juges</h3>
                        <p class="text-slate-600 leading-relaxed">
                            La connaissance des <strong>tendances des juges</strong> du Tribunal de première instance de Genève peut significativement influencer l'issue d'un procès. Un avocat local est mieux placé pour naviguer dans ces nuances.
                        </p>
                    </div>

                    <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                        <div class="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900">
                            <i data-lucide="clock" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-4">Disponibilité et réactivité</h3>
                        <p class="text-slate-600 leading-relaxed">
                            Un avocat basé à Genève offre une <strong>communication rapide</strong> et une <strong>disponibilité personnelle</strong> accrue, essentielle pour une défense efficace dans des affaires criminelles complexes.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Process Section -->
        <section class="py-20 bg-white border-b border-slate-100 overflow-hidden">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center max-w-3xl mx-auto mb-16">
                    <h2 class="text-3xl font-bold tracking-tight text-slate-900 mb-4">La Procédure Pénale à Genève</h2>
                    <p class="text-slate-500 font-medium tracking-wide uppercase text-sm">Étape par Étape</p>
                </div>

                <div class="relative">
                    <div class="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>
                    <div class="grid md:grid-cols-5 gap-6 relative z-10">
                        <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                            <div class="w-9 h-9 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold mb-3 text-sm">1</div>
                            <h4 class="text-base font-bold text-slate-900 mb-2">Dépôt Plainte</h4>
                            <p class="text-xs text-slate-600">Ministère Public, <strong>Place du Bourg-de-Four</strong>.</p>
                        </div>
                        <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                            <div class="w-9 h-9 bg-white text-slate-900 border-2 border-slate-900 rounded-full flex items-center justify-center font-bold mb-3 text-sm">2</div>
                            <h4 class="text-base font-bold text-slate-900 mb-2">Enquête</h4>
                            <p class="text-xs text-slate-600">Police Cantonale de Genève recueille les preuves.</p>
                        </div>
                        <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                            <div class="w-9 h-9 bg-white text-slate-900 border-2 border-slate-900 rounded-full flex items-center justify-center font-bold mb-3 text-sm">3</div>
                            <h4 class="text-base font-bold text-slate-900 mb-2">Instruction</h4>
                            <p class="text-xs text-slate-600">Juge d'instruction examine les preuves.</p>
                        </div>
                        <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                            <div class="w-9 h-9 bg-white text-slate-900 border-2 border-slate-900 rounded-full flex items-center justify-center font-bold mb-3 text-sm">4</div>
                            <h4 class="text-base font-bold text-slate-900 mb-2">Jugement</h4>
                            <p class="text-xs text-slate-600">Procès au Tribunal de première instance.</p>
                        </div>
                        <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform duration-300">
                            <div class="w-9 h-9 bg-red-900 text-white rounded-full flex items-center justify-center font-bold mb-3 text-sm">5</div>
                            <h4 class="text-base font-bold text-slate-900 mb-2">Recours</h4>
                            <p class="text-xs text-slate-600">Appel possible à la <strong>Cour de Justice</strong>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Legal Framework -->
        <section id="features" class="py-20 bg-slate-50 border-t border-slate-200">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="mb-16 text-center max-w-3xl mx-auto">
                    <h2 class="text-3xl font-bold tracking-tight text-slate-900 mb-4">Le Cadre Légal</h2>
                    <p class="text-lg text-slate-600">Code Pénal Suisse (CP) et Code de Procédure Pénale (CPP).</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="book-open" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Code Pénal Suisse (CP)</h3>
                        <ul class="space-y-2 text-slate-600 text-sm">
                            <li><strong>Article 111 CP</strong> : Définit l'homicide et ses peines.</li>
                            <li><strong>Article 122 CP</strong> : Lésions corporelles graves.</li>
                            <li><strong>Article 195 CP</strong> : Infractions liées aux stupéfiants.</li>
                        </ul>
                    </div>

                    <div class="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:border-red-900/20 hover:shadow-md transition-all group">
                        <div class="h-12 w-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-900 group-hover:bg-red-100 transition-colors">
                            <i data-lucide="scale" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-bold text-slate-900 mb-3">Code de Procédure Pénale (CPP)</h3>
                        <ul class="space-y-2 text-slate-600 text-sm">
                            <li><strong>Article 309 CPP</strong> : Procédure préliminaire.</li>
                            <li><strong>Article 319 CPP</strong> : Droits de la personne prévenue.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQ -->
        <section id="faq" class="py-16 bg-white border-t border-slate-100">
            <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h3 class="text-xl font-bold text-slate-900 mb-8 text-center">FAQ (Droit Pénal Genève)</h3>
                <div class="space-y-6">
                    <div class="border-b border-slate-100 pb-4">
                        <h4 class="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                            <i data-lucide="help-circle" class="w-5 h-5 text-red-800 mt-0.5 shrink-0"></i>
                            Quel est le coût moyen d'un avocat pénaliste ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-7">Les honoraires varient entre <strong>CHF 350-450</strong> par heure, avec des mandats entre CHF 3'000 et 5'000 selon la complexité.</p>
                    </div>
                    <div class="border-b border-slate-100 pb-4">
                        <h4 class="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                            <i data-lucide="help-circle" class="w-5 h-5 text-red-800 mt-0.5 shrink-0"></i>
                            Combien de temps dure une procédure pénale ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-7">De quelques mois à plusieurs années, selon la complexité et les éventuels appels.</p>
                    </div>
                    <div class="border-b border-slate-100 pb-4">
                        <h4 class="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                            <i data-lucide="help-circle" class="w-5 h-5 text-red-800 mt-0.5 shrink-0"></i>
                            Quels sont mes droits en tant qu'accusé ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-7">Droit à une défense, à être informé des charges, et à un procès équitable (<strong>Article 319 CPP</strong>).</p>
                    </div>
                    <div class="pb-4">
                        <h4 class="text-base font-bold text-slate-900 mb-2 flex items-start gap-2">
                            <i data-lucide="help-circle" class="w-5 h-5 text-red-800 mt-0.5 shrink-0"></i>
                            Comment contester une accusation ?
                        </h4>
                        <p class="text-sm text-slate-600 pl-7">Les contestations sont gérées par la <strong>Cour de Justice de Genève</strong>, où votre avocat présentera preuves et arguments.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Form Section -->
        <section id="formulaire" class="py-20 bg-slate-50 border-t border-slate-200">
            <div class="max-w-3xl mx-auto px-4">
                <div class="mb-12 text-center">
                    <h2 class="text-2xl font-bold text-slate-900 tracking-tight mb-4">Besoin d'un avocat pénaliste ?</h2>
                    <p class="text-slate-600">Nous défendons vos droits avec discrétion et détermination.</p>
                </div>
                <ContactForm />
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
useLocalSeo(
  'Avocat Pénal Genève | Défense Criminelle – Clegal Avocats',
  'Défense pénale à Genève. Avocat spécialisé en droit criminel, assistance durant l\'instruction. Intervention urgente. 1er RDV à 155.-.',
  {
    type: 'LegalService',
    priceRange: 'Dès CHF 155.-',
    breadcrumbs: [{ name: 'Droit Pénal', url: 'https://clegal-avocats.ch/droit-penal' }]
  }
)

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Service",
            "name": "Avocat Droit Pénal Genève",
            "provider": {
              "@type": "LegalService",
              "name": "Clegal Avocats Genève",
              "image": "https://clegal-avocats.ch/logo.svg"
            },
            "areaServed": {
              "@type": "City",
              "name": "Genève"
            },
            "description": "Défense pénale experte à Genève : assistance aux prévenus et victimes, représentation devant le Ministère Public et les tribunaux."
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Quel est le coût moyen d'un avocat pénaliste ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Les honoraires varient généralement entre CHF 350 et 450 par heure. Pour des mandats forfaitaires, comptez entre CHF 3'000 et 5'000 selon la complexité du dossier."
                }
              },
              {
                "@type": "Question",
                "name": "Combien de temps dure une procédure pénale ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "La durée est variable, allant de quelques mois pour des affaires simples à plusieurs années pour des cas complexes impliquant des appels."
                }
              },
              {
                "@type": "Question",
                "name": "Quels sont mes droits en tant qu'accusé ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Vous avez le droit fondamental à une défense, le droit d'être informé des charges retenues contre vous, le droit de garder le silence et d'avoir un procès équitable (Article 319 CPP)."
                }
              },
              {
                "@type": "Question",
                "name": "Comment contester une accusation ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Les contestations et recours sont gérés par la Cour de Justice de Genève. Votre avocat est chargé de présenter les preuves et arguments nécessaires à votre défense."
                }
              }
            ]
          }
        ]
      })
    }
  ]
})
</script>