<template>
  <div class="antialiased text-slate-800 bg-white">

    <!-- Hero Section -->
    <section class="lg:pt-32 lg:pb-16 pt-28 pb-12 bg-slate-50 border-b border-slate-200">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb :links="[
          { name: 'Blog', path: '/blog' },
          { name: 'Permis de travail hors UE', path: '/blog/travailler-suisse-hors-ue' }
        ]" />

        <div class="flex flex-wrap gap-2 mb-6">
          <span class="inline-flex items-center gap-1.5 px-3 py-1 bg-red-50 border border-red-100 rounded-full text-xs font-medium text-red-800">
            <i data-lucide="globe" class="w-3 h-3"></i>
            Droit des Étrangers
          </span>
          <span class="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 border border-slate-200 rounded-full text-xs text-slate-600">
            <i data-lucide="map-pin" class="w-3 h-3"></i>
            Genève
          </span>
        </div>

        <h1 class="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-tight mb-6">
          Travailler en Suisse en tant que ressortissant hors UE-AELE
        </h1>

        <p class="text-lg text-slate-600 leading-relaxed mb-8">
          Guide complet sur les conditions d'obtention d'un permis de travail en Suisse pour les ressortissants de pays tiers. Procédure, contingents et recours expliqués par un avocat spécialisé à Genève.
        </p>

        <div class="flex items-center gap-4 pt-6 border-t border-slate-200">
          <img src="/images/mansour_cheema.jpg" loading="lazy" alt="Me Mansour Cheema - Avocat droit des étrangers Genève" class="w-12 h-12 rounded-full object-cover" />
          <div>
            <p class="font-semibold text-slate-900">Me Mansour Cheema</p>
            <p class="text-sm text-slate-500">Avocat spécialisé en droit des étrangers, Barreau de Genève</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Article Content -->
    <article class="py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="prose prose-slate prose-lg max-w-none">

          <!-- Introduction -->
          <section class="mb-12">
            <h2 class="text-2xl font-bold text-slate-900 mb-4">Est-il possible de travailler en Suisse lorsque l'on n'est pas issu d'un pays européen ?</h2>
            <p class="text-slate-600 leading-relaxed">
              <strong>Oui, cela est possible mais à des conditions très strictes.</strong> La Suisse applique un système de contingentement et de priorité qui rend l'obtention d'un permis de travail pour les ressortissants hors UE-AELE particulièrement exigeante. Voici ce que vous devez savoir.
            </p>
          </section>

          <!-- Conditions -->
          <section class="mb-12 bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <h2 class="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <span class="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <i data-lucide="clipboard-list" class="w-5 h-5 text-red-800"></i>
              </span>
              Les 5 Conditions pour Obtenir un Permis de Travail
            </h2>

            <div class="space-y-6">
              <div class="bg-white rounded-xl p-6 border border-slate-200">
                <div class="flex items-start gap-4">
                  <span class="w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">1</span>
                  <div>
                    <h3 class="font-semibold text-slate-900 mb-2">Demande déposée par l'employeur</h3>
                    <p class="text-slate-600 text-sm">Il est nécessaire d'avoir d'ores et déjà un employeur qui est prêt à faire des démarches en votre faveur et cela <strong>avant même la venue en Suisse</strong>.</p>
                  </div>
                </div>
              </div>

              <div class="bg-white rounded-xl p-6 border border-slate-200">
                <div class="flex items-start gap-4">
                  <span class="w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">2</span>
                  <div>
                    <h3 class="font-semibold text-slate-900 mb-2">Respect de l'ordre de priorité</h3>
                    <p class="text-slate-600 text-sm">L'employeur doit démontrer n'avoir trouvé aucun travailleur capable d'assumer l'emploi en question et cela tant sur le <strong>marché suisse qu'européen</strong>.</p>
                  </div>
                </div>
              </div>

              <div class="bg-white rounded-xl p-6 border border-slate-200">
                <div class="flex items-start gap-4">
                  <span class="w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">3</span>
                  <div>
                    <h3 class="font-semibold text-slate-900 mb-2">Respect des contingents</h3>
                    <p class="text-slate-600 text-sm">Le Conseil fédéral donne chaque année un nombre limité de permis à chaque canton suisse. Une fois les places épuisées, il n'est plus possible d'obtenir un permis de travail. <strong>À Genève, les places sont très prisées</strong> puisque le Canton accueille un grand nombre de sociétés internationales.</p>
                  </div>
                </div>
              </div>

              <div class="bg-white rounded-xl p-6 border border-slate-200">
                <div class="flex items-start gap-4">
                  <span class="w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">4</span>
                  <div>
                    <h3 class="font-semibold text-slate-900 mb-2">Intérêt économique de la Suisse</h3>
                    <p class="text-slate-600 text-sm">La demande de permis de travail doit avant tout répondre à l'intérêt économique de la Suisse. Il faudra démontrer à l'Autorité migratoire que la prise d'emploi répond à cet intérêt.</p>
                  </div>
                </div>
              </div>

              <div class="bg-white rounded-xl p-6 border border-slate-200">
                <div class="flex items-start gap-4">
                  <span class="w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">5</span>
                  <div>
                    <h3 class="font-semibold text-slate-900 mb-2">Respect des lois, CCT et règlements locaux</h3>
                    <p class="text-slate-600 text-sm">Le salaire et les conditions de travail devront répondre aux conditions posées par la réglementation suisse afin d'éviter le <strong>dumping salarial</strong>.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Autorité compétente -->
          <section class="mb-12">
            <h2 class="text-2xl font-bold text-slate-900 mb-4">Qui est compétent pour rendre la décision ?</h2>
            <p class="text-slate-600 leading-relaxed mb-4">
              La demande doit être déposée auprès de l'Office cantonal de la population du canton concerné :
            </p>
            <ul class="space-y-3">
              <li class="flex items-start gap-3">
                <i data-lucide="building-2" class="w-5 h-5 text-red-800 mt-0.5 shrink-0"></i>
                <span class="text-slate-600"><strong>À Genève</strong> : Office cantonal de la population et des migrations (OCPM)</span>
              </li>
              <li class="flex items-start gap-3">
                <i data-lucide="building-2" class="w-5 h-5 text-red-800 mt-0.5 shrink-0"></i>
                <span class="text-slate-600"><strong>À Lausanne</strong> : Service de la population (SPOP)</span>
              </li>
            </ul>
          </section>

          <!-- Avocat nécessaire -->
          <section class="mb-12 bg-red-50 rounded-2xl p-8 border border-red-100">
            <h2 class="text-2xl font-bold text-slate-900 mb-4">Un avocat est-il nécessaire ?</h2>
            <p class="text-slate-700 leading-relaxed mb-4">
              Théoriquement, l'assistance d'un avocat n'est pas nécessaire pour déposer la demande. À Genève, la demande se fait par le biais d'un formulaire officiel.
            </p>
            <p class="text-slate-700 leading-relaxed mb-6">
              <strong>Cela étant, les demandes de permis de travail pour les extra-européens sont difficiles à obtenir.</strong> Afin de maximiser vos chances, il est préférable de passer par un conseil professionnel qui sera capable de vous guider avec force et conviction.
            </p>
            <a href="https://www.ge.ch/document/ocpm-formulaire-m-demande-autorisation-sejour-avec-sans-activite" target="_blank" rel="noopener" class="inline-flex items-center gap-2 text-sm font-medium text-red-800 hover:text-red-900 transition-colors">
              <i data-lucide="external-link" class="w-4 h-4"></i>
              Formulaire officiel OCPM (ge.ch)
            </a>
          </section>

          <!-- Pourquoi Me Cheema -->
          <section class="mb-12 bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
            <div class="flex flex-col md:flex-row gap-8 items-start">
              <img src="/images/mansour_cheema.jpg" loading="lazy" alt="Me Mansour Cheema - Avocat droit des étrangers Genève" class="w-32 h-32 rounded-xl object-cover shrink-0" />
              <div>
                <h2 class="text-xl font-bold text-slate-900 mb-4">Pourquoi choisir Me Mansour Cheema ?</h2>
                <p class="text-slate-600 leading-relaxed mb-4">
                  Me Mansour Cheema a une <strong>expertise toute particulière en droit des étrangers</strong>. Il a rédigé sa thèse de fin d'étude en droit des étrangers, obtenant la note maximale.
                </p>
                <p class="text-slate-600 leading-relaxed mb-4">
                  Par la suite, il a travaillé en étroite collaboration avec le <strong>Secrétariat d'État aux migrations</strong> dans les Centres fédéraux pour requérants d'asile où il a exercé comme représentant juridique pour Caritas.
                </p>
                <p class="text-slate-600 leading-relaxed">
                  Fait notable : il a obtenu - fait très rare - le <strong>statut d'apatride</strong> pour l'un de ses clients. Depuis qu'il exerce en qualité d'avocat associé, Me Cheema reste une référence en la matière.
                </p>
              </div>
            </div>
          </section>

          <!-- Étapes de la procédure -->
          <section class="mb-12">
            <h2 class="text-2xl font-bold text-slate-900 mb-6">Les étapes pour déposer une demande de permis de travail</h2>

            <div class="relative">
              <div class="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200"></div>

              <div class="space-y-6">
                <div class="relative pl-12">
                  <div class="absolute left-0 w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                  <div class="bg-slate-50 rounded-xl p-5 border border-slate-200">
                    <h3 class="font-semibold text-slate-900 mb-2">Premier rendez-vous d'analyse</h3>
                    <p class="text-sm text-slate-600">L'Étude effectue un premier rendez-vous afin de déterminer les chances de succès et d'établir une stratégie viable. <strong>Ce premier rendez-vous est proposé au prix de CHF 155.-</strong> et peut se faire en ligne ou en présentiel.</p>
                  </div>
                </div>

                <div class="relative pl-12">
                  <div class="absolute left-0 w-8 h-8 bg-slate-300 text-slate-700 rounded-full flex items-center justify-center font-bold text-sm">2</div>
                  <div class="bg-slate-50 rounded-xl p-5 border border-slate-200">
                    <h3 class="font-semibold text-slate-900 mb-2">Réunion des pièces</h3>
                    <p class="text-sm text-slate-600">Le requérant réunit les documents nécessaires : contrat de travail (ou promesse d'embauche), copie des diplômes et preuve du respect de l'ordre de priorité.</p>
                  </div>
                </div>

                <div class="relative pl-12">
                  <div class="absolute left-0 w-8 h-8 bg-slate-300 text-slate-700 rounded-full flex items-center justify-center font-bold text-sm">3</div>
                  <div class="bg-slate-50 rounded-xl p-5 border border-slate-200">
                    <h3 class="font-semibold text-slate-900 mb-2">Rédaction de la demande</h3>
                    <p class="text-sm text-slate-600">L'avocat rédige un projet de demande formelle aux autorités compétentes.</p>
                  </div>
                </div>

                <div class="relative pl-12">
                  <div class="absolute left-0 w-8 h-8 bg-slate-300 text-slate-700 rounded-full flex items-center justify-center font-bold text-sm">4</div>
                  <div class="bg-slate-50 rounded-xl p-5 border border-slate-200">
                    <h3 class="font-semibold text-slate-900 mb-2">Validation par le client</h3>
                    <p class="text-sm text-slate-600">Le projet d'écriture est transmis au client pour validation avant envoi.</p>
                  </div>
                </div>

                <div class="relative pl-12">
                  <div class="absolute left-0 w-8 h-8 bg-slate-300 text-slate-700 rounded-full flex items-center justify-center font-bold text-sm">5</div>
                  <div class="bg-slate-50 rounded-xl p-5 border border-slate-200">
                    <h3 class="font-semibold text-slate-900 mb-2">Dépôt officiel</h3>
                    <p class="text-sm text-slate-600">La demande est formellement déposée sous pli recommandé à l'Autorité.</p>
                  </div>
                </div>

                <div class="relative pl-12">
                  <div class="absolute left-0 w-8 h-8 bg-slate-300 text-slate-700 rounded-full flex items-center justify-center font-bold text-sm">6</div>
                  <div class="bg-slate-50 rounded-xl p-5 border border-slate-200">
                    <h3 class="font-semibold text-slate-900 mb-2">Suivi et compléments</h3>
                    <p class="text-sm text-slate-600">L'Autorité peut demander des informations complémentaires ; l'avocat les transmet.</p>
                  </div>
                </div>

                <div class="relative pl-12">
                  <div class="absolute left-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-sm">7</div>
                  <div class="bg-emerald-50 rounded-xl p-5 border border-emerald-200">
                    <h3 class="font-semibold text-slate-900 mb-2">Décision finale</h3>
                    <p class="text-sm text-slate-600">La décision est rendue par l'Autorité et transmise au client par l'avocat.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Refus et recours -->
          <section class="mb-12">
            <h2 class="text-2xl font-bold text-slate-900 mb-4">Que faire si la demande est refusée ?</h2>
            <p class="text-slate-600 leading-relaxed mb-4">
              À Genève, l'autorité ne refuse pas directement la demande. Elle commence par indiquer son <strong>intention de la refuser</strong> et le requérant a la possibilité d'exercer son <strong>droit d'être entendu</strong>.
            </p>
            <p class="text-slate-600 leading-relaxed mb-6">
              Si malgré cela l'autorité maintient son refus, la décision est susceptible de recours :
            </p>
            <div class="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <ol class="space-y-3">
                <li class="flex items-center gap-3">
                  <span class="w-6 h-6 bg-slate-200 rounded-full flex items-center justify-center text-xs font-bold">1</span>
                  <span class="text-slate-700"><strong>Tribunal administratif de première instance</strong> de Genève</span>
                </li>
                <li class="flex items-center gap-3">
                  <span class="w-6 h-6 bg-slate-200 rounded-full flex items-center justify-center text-xs font-bold">2</span>
                  <span class="text-slate-700"><strong>Chambre administrative</strong> de la Cour de justice de Genève</span>
                </li>
                <li class="flex items-center gap-3">
                  <span class="w-6 h-6 bg-slate-200 rounded-full flex items-center justify-center text-xs font-bold">3</span>
                  <span class="text-slate-700"><strong>Tribunal fédéral</strong> (le cas échéant)</span>
                </li>
              </ol>
            </div>
          </section>

          <!-- Type de permis -->
          <section class="mb-12 bg-emerald-50 rounded-2xl p-8 border border-emerald-200">
            <h2 class="text-2xl font-bold text-slate-900 mb-4">Quel permis obtient-on si la demande est acceptée ?</h2>
            <p class="text-slate-700 leading-relaxed mb-4">
              Si la demande est acceptée, le travailleur obtient :
            </p>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-white rounded-xl p-5 border border-emerald-200">
                <div class="flex items-center gap-3 mb-2">
                  <span class="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center font-bold text-emerald-800">B</span>
                  <h3 class="font-semibold text-slate-900">Permis B</h3>
                </div>
                <p class="text-sm text-slate-600">Pour un emploi de longue durée (plus de 12 mois)</p>
              </div>
              <div class="bg-white rounded-xl p-5 border border-emerald-200">
                <div class="flex items-center gap-3 mb-2">
                  <span class="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center font-bold text-emerald-800">L</span>
                  <h3 class="font-semibold text-slate-900">Permis L</h3>
                </div>
                <p class="text-sm text-slate-600">Pour un emploi de courte durée (moins de 12 mois)</p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </article>

    <!-- Related Links -->
    <section class="py-12 bg-slate-50 border-t border-slate-200">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-xl font-bold text-slate-900 mb-6">Articles connexes</h2>
        <div class="grid md:grid-cols-2 gap-4">
          <NuxtLink to="/droit-etrangers" class="group bg-white rounded-xl p-5 border border-slate-200 hover:border-red-200 hover:shadow-md transition-all">
            <h3 class="font-semibold text-slate-900 mb-2 group-hover:text-red-800 transition-colors">Droit des Étrangers à Genève</h3>
            <p class="text-sm text-slate-600">Permis de séjour, regroupement familial, naturalisation.</p>
          </NuxtLink>
          <NuxtLink to="/blog" class="group bg-white rounded-xl p-5 border border-slate-200 hover:border-red-200 hover:shadow-md transition-all">
            <h3 class="font-semibold text-slate-900 mb-2 group-hover:text-red-800 transition-colors">Tous nos articles</h3>
            <p class="text-sm text-slate-600">Retrouvez l'ensemble de nos conseils juridiques.</p>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA Contact -->
    <section class="py-16 bg-white border-t border-slate-100">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-2xl font-bold text-slate-900 mb-4">Besoin d'aide pour votre demande de permis de travail ?</h2>
        <p class="text-slate-600 mb-8">Notre équipe d'avocats spécialisés en droit des étrangers vous accompagne dans vos démarches à Genève.</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/contact" class="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white bg-red-900 hover:bg-red-800 rounded-lg shadow-lg transition-all">
            Prendre rendez-vous (CHF 155.-)
          </NuxtLink>
          <a href="tel:0225121050" class="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg transition-all">
            <i data-lucide="phone" class="w-4 h-4 mr-2"></i>
            022 512 10 50
          </a>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
useLocalSeo(
  'Travailler en Suisse hors UE-AELE | Permis de travail Genève',
  'Guide complet sur les conditions d\'obtention d\'un permis de travail en Suisse pour les ressortissants hors UE-AELE. Procédure, contingents et recours par un avocat à Genève.',
  {
    type: 'LegalService',
    priceRange: 'Dès CHF 155.-',
    faq: [
      {
        question: 'Est-il possible de travailler en Suisse en tant que ressortissant hors UE-AELE ?',
        answer: 'Oui, c\'est possible mais à des conditions très strictes : demande par l\'employeur, respect de l\'ordre de priorité, contingents limités, intérêt économique de la Suisse et respect des lois sur le travail.'
      },
      {
        question: 'Quelles sont les conditions pour obtenir un permis de travail en Suisse ?',
        answer: 'Les 5 conditions sont : 1) Demande déposée par l\'employeur avant la venue en Suisse, 2) Respect de l\'ordre de priorité (marché suisse puis européen), 3) Respect des contingents cantonaux, 4) Intérêt économique pour la Suisse, 5) Respect des lois et CCT suisses.'
      },
      {
        question: 'Quel permis obtient-on si la demande est acceptée ?',
        answer: 'Si la demande est acceptée, le travailleur obtient un permis B (emploi longue durée, plus de 12 mois) ou un permis L (emploi courte durée, moins de 12 mois).'
      },
      {
        question: 'Que faire si ma demande de permis de travail est refusée à Genève ?',
        answer: 'À Genève, l\'autorité indique d\'abord son intention de refuser et vous pouvez exercer votre droit d\'être entendu. En cas de refus maintenu, vous pouvez faire recours au Tribunal administratif de première instance, puis à la Chambre administrative de la Cour de justice, et enfin au Tribunal fédéral.'
      }
    ]
  }
);

// Additional meta tags for article SEO
useHead({
  meta: [
    { property: 'og:type', content: 'article' },
    { property: 'article:published_time', content: '2025-01-29' },
    { property: 'article:modified_time', content: '2025-01-29' },
    { property: 'article:author', content: 'Me Mansour Cheema' },
    { property: 'article:section', content: 'Droit des Étrangers' },
    { property: 'article:tag', content: 'permis de travail' },
    { property: 'article:tag', content: 'immigration suisse' },
    { property: 'article:tag', content: 'hors UE' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'author', content: 'Me Mansour Cheema' },
  ],
  script: [
    // Article schema
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': 'Travailler en Suisse en tant que ressortissant hors UE-AELE',
        'description': 'Guide complet sur les conditions d\'obtention d\'un permis de travail en Suisse pour les ressortissants hors UE-AELE.',
        'author': {
          '@type': 'Person',
          'name': 'Me Mansour Cheema',
          'jobTitle': 'Avocat au Barreau de Genève',
          'url': 'https://clegal-avocats.ch'
        },
        'publisher': {
          '@type': 'Organization',
          'name': 'Pont-Rouge Avocats',
          'logo': {
            '@type': 'ImageObject',
            'url': 'https://clegal-avocats.ch/logo.svg'
          }
        },
        'datePublished': '2025-01-29',
        'dateModified': '2025-01-29',
        'mainEntityOfPage': {
          '@type': 'WebPage',
          '@id': 'https://clegal-avocats.ch/blog/travailler-suisse-hors-ue'
        },
        'image': 'https://clegal-avocats.ch/images/mansour_cheema.png',
        'articleSection': 'Droit des Étrangers',
        'keywords': 'permis de travail suisse, travail hors UE, permis B, permis L, OCPM Genève, contingents, avocat immigration Genève'
      })
    },
    // Breadcrumb schema for rich snippets
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Accueil',
            'item': 'https://clegal-avocats.ch'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Blog',
            'item': 'https://clegal-avocats.ch/blog'
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': 'Permis de travail hors UE',
            'item': 'https://clegal-avocats.ch/blog/travailler-suisse-hors-ue'
          }
        ]
      })
    }
  ]
});
</script>
