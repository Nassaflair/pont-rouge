<script setup lang="ts">
useLocalSeo(
  'Avocat à Carouge | Clegal Avocats Genève – Dès 155.- le 1er RDV',
  'Avocat à Carouge ? Clegal Avocats vous reçoit aux Acacias, à 5 minutes de la Place du Marché. Droit pénal, famille, travail, étrangers, bail. 1er RDV à CHF 155.-.',
  {
    city: 'geneve',
    breadcrumbs: [
      { name: 'Avocat à Carouge', url: 'https://clegal-avocats.ch/avocat-carouge' },
    ],
    faq: [
      {
        question: 'Y a-t-il un cabinet d\'avocats à Carouge ?',
        answer: 'Clegal Avocats reçoit régulièrement des clients carougeois depuis son cabinet de Genève situé Route des Jeunes 9, 1227 Les Acacias — à 5 minutes en tram (ligne 12 ou 18) ou en voiture de la Place du Marché de Carouge. Premier rendez-vous d\'analyse à CHF 155.-.',
      },
      {
        question: 'Quel tribunal compétent pour Carouge ?',
        answer: 'Carouge dépend du Tribunal de première instance de Genève (Rue de l\'Athénée 6/8, 1205 Genève) pour le civil, du Ministère public et du Tribunal correctionnel pour le pénal, du Tribunal des prud\'hommes pour le travail, du Tribunal des baux et loyers pour le logement. Carouge n\'a pas de juridiction propre — elle est intégrée à l\'organisation judiciaire genevoise.',
      },
      {
        question: 'Combien coûte un avocat à Carouge ?',
        answer: 'Les tarifs d\'un avocat à Carouge / Genève varient entre CHF 300 et 500 de l\'heure. Clegal Avocats propose un premier rendez-vous d\'analyse forfaitaire à CHF 155.-, des forfaits pour les procédures prévisibles (divorce amiable, dépôt OCPM) et accepte l\'aide juridictionnelle.',
      },
      {
        question: 'Quels domaines du droit pratiquez-vous pour les Carougeois ?',
        answer: 'Tous les domaines : droit de la famille (divorce, séparation, garde, pension), droit pénal, droit du travail (Tribunal des prud\'hommes), droit des étrangers (OCPM Onex), droit du bail, droit des affaires, droit administratif et droit des assurances.',
      },
    ],
  },
)
</script>

<template>
  <NuxtLayout>
    <main class="bg-slate-50">
      <!-- Hero -->
      <section class="pt-32 pb-12 bg-white border-b border-slate-200">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb :links="[{ name: 'Avocat à Carouge', path: '/avocat-carouge' }]" />

          <p class="text-xs uppercase tracking-widest text-red-900 font-semibold mt-6">Genève · Quartier Carouge</p>
          <h1 class="text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight mt-3 mb-4">
            Avocat à Carouge — à 5 minutes de la Place du Marché
          </h1>
          <p class="text-lg text-slate-600 max-w-3xl">
            Clegal Avocats est le cabinet d'<NuxtLink to="/" class="text-red-900 hover:underline font-medium">avocats à Genève</NuxtLink> le plus proche de Carouge. Sept avocats au service des Carougeois pour le droit pénal, la famille, le travail, les étrangers, le bail et les affaires. Premier rendez-vous d'analyse à CHF 155.-.
          </p>

          <div class="mt-8 flex flex-col sm:flex-row gap-3">
            <NuxtLink to="/contact" class="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-slate-900 hover:bg-red-900 rounded-md transition-all shadow-sm">Prendre rendez-vous</NuxtLink>
            <a href="tel:0225121050" class="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-md transition-all">022 512 10 50</a>
          </div>
        </div>
      </section>

      <!-- Distance + accès -->
      <section class="py-16 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-2xl font-semibold text-slate-900 mb-6">À 5 minutes de Carouge</h2>
          <p class="text-slate-700 leading-relaxed mb-6">
            Notre cabinet est situé Route des Jeunes 9, 1227 Les Acacias — à la limite directe de Carouge. Quelle que soit votre adresse de départ à Carouge (Place du Marché, Vieux-Carouge, Acacias-Carouge, Drize, La Tambourine), vous arrivez chez nous en moins de 10 minutes.
          </p>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <p class="text-xs uppercase font-bold text-red-900">En tram</p>
              <p class="text-sm text-slate-700 mt-2">Ligne 12 ou 18, arrêt <strong>Pont-Rouge</strong> ou <strong>Acacias</strong>. 6 minutes depuis la Place du Marché de Carouge.</p>
            </div>
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <p class="text-xs uppercase font-bold text-red-900">En voiture</p>
              <p class="text-sm text-slate-700 mt-2">5 minutes via la Route des Acacias. Parking de Carouge / Pont-Rouge à proximité.</p>
            </div>
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <p class="text-xs uppercase font-bold text-red-900">À vélo</p>
              <p class="text-sm text-slate-700 mt-2">10-12 minutes via les pistes cyclables longeant l'Arve.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Domaines pour Carouge -->
      <section class="py-16">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-2xl font-semibold text-slate-900 mb-3">Domaines du droit pour les Carougeois</h2>
          <p class="text-slate-600 mb-8">
            Nos sept avocats à Genève couvrent tous les domaines du droit suisse devant les juridictions genevoises dont relève Carouge.
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <NuxtLink to="/droit-famille" class="block bg-white border border-slate-200 rounded-xl p-5 hover:border-red-900/30 hover:shadow-sm transition-all">
              <h3 class="font-semibold text-slate-900">Avocat famille à Carouge</h3>
              <p class="text-sm text-slate-600 mt-2">Divorce, séparation, garde d'enfants, pension alimentaire, succession.</p>
            </NuxtLink>
            <NuxtLink to="/droit-penal" class="block bg-white border border-slate-200 rounded-xl p-5 hover:border-red-900/30 hover:shadow-sm transition-all">
              <h3 class="font-semibold text-slate-900">Avocat pénaliste pour Carouge</h3>
              <p class="text-sm text-slate-600 mt-2">Défense devant le Ministère public et le Tribunal correctionnel de Genève.</p>
            </NuxtLink>
            <NuxtLink to="/droit-travail" class="block bg-white border border-slate-200 rounded-xl p-5 hover:border-red-900/30 hover:shadow-sm transition-all">
              <h3 class="font-semibold text-slate-900">Avocat travail Carouge</h3>
              <p class="text-sm text-slate-600 mt-2">Licenciement, conflits employeur-employé, Tribunal des prud'hommes (Carouge inclus).</p>
            </NuxtLink>
            <NuxtLink to="/droit-etrangers" class="block bg-white border border-slate-200 rounded-xl p-5 hover:border-red-900/30 hover:shadow-sm transition-all">
              <h3 class="font-semibold text-slate-900">Avocat étrangers Carouge</h3>
              <p class="text-sm text-slate-600 mt-2">Permis B, C, regroupement familial. OCPM (Onex) à 8 minutes de Carouge.</p>
            </NuxtLink>
            <NuxtLink to="/droit-immobilier/avocat-droit-bail" class="block bg-white border border-slate-200 rounded-xl p-5 hover:border-red-900/30 hover:shadow-sm transition-all">
              <h3 class="font-semibold text-slate-900">Avocat bail Carouge</h3>
              <p class="text-sm text-slate-600 mt-2">Conflits locatifs : loyer, résiliation, expulsion. Tribunal des baux à Genève.</p>
            </NuxtLink>
            <NuxtLink to="/droit-affaires" class="block bg-white border border-slate-200 rounded-xl p-5 hover:border-red-900/30 hover:shadow-sm transition-all">
              <h3 class="font-semibold text-slate-900">Avocat affaires Carouge</h3>
              <p class="text-sm text-slate-600 mt-2">Création de Sàrl/SA, contrats, contentieux commerciaux pour les commerces carougeois.</p>
            </NuxtLink>
          </div>
        </div>
      </section>

      <!-- Spécificités Carouge -->
      <section class="py-16 bg-white border-y border-slate-200">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-2xl font-semibold text-slate-900 mb-6">Carouge dans le système judiciaire genevois</h2>

          <p class="text-slate-700 leading-relaxed mb-4">
            La Ville de Carouge, troisième commune du canton (22'000 habitants), n'a pas de juridiction propre. Tous les litiges juridiques des Carougeois relèvent de l'organisation judiciaire genevoise. Concrètement&nbsp;:
          </p>

          <ul class="space-y-3 text-slate-700">
            <li class="flex gap-3">
              <span class="text-red-900 font-bold">›</span>
              <span><strong>Civil et famille</strong> (divorce, succession, contrats) → Tribunal de première instance de Genève, Rue de l'Athénée 6/8, 1205 Genève</span>
            </li>
            <li class="flex gap-3">
              <span class="text-red-900 font-bold">›</span>
              <span><strong>Pénal</strong> → Ministère public (Place du Bourg-de-Four 3) et Tribunal correctionnel</span>
            </li>
            <li class="flex gap-3">
              <span class="text-red-900 font-bold">›</span>
              <span><strong>Travail</strong> → Tribunal des prud'hommes de Genève — gratuit jusqu'à CHF 75'000 (art. 114 CPC)</span>
            </li>
            <li class="flex gap-3">
              <span class="text-red-900 font-bold">›</span>
              <span><strong>Bail</strong> → Tribunal des baux et loyers + commission de conciliation préalable obligatoire</span>
            </li>
            <li class="flex gap-3">
              <span class="text-red-900 font-bold">›</span>
              <span><strong>Étrangers</strong> → OCPM (Office cantonal de la population et des migrations), Route de Chancy 88, Onex — à 8 min de Carouge</span>
            </li>
            <li class="flex gap-3">
              <span class="text-red-900 font-bold">›</span>
              <span><strong>Administratif</strong> → Tribunal administratif de première instance (TAPI) puis Chambre administrative de la Cour de justice</span>
            </li>
          </ul>
        </div>
      </section>

      <!-- CTA -->
      <section class="py-16 bg-slate-900 text-white">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-3xl font-semibold tracking-tight">Prendre rendez-vous depuis Carouge</h2>
          <p class="mt-3 text-slate-300">
            Premier rendez-vous d'analyse à CHF 155.- avec un <NuxtLink to="/equipe" class="text-white underline hover:text-red-300">avocat à Genève</NuxtLink> de notre équipe.
          </p>
          <div class="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <NuxtLink to="/contact" class="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-slate-900 bg-white hover:bg-slate-100 rounded-md">Demander un rendez-vous</NuxtLink>
            <a href="tel:0225121050" class="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white border border-white/20 hover:bg-white/10 rounded-md">022 512 10 50</a>
          </div>
        </div>
      </section>
    </main>
  </NuxtLayout>
</template>
