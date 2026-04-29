<script setup lang="ts">
useLocalSeo(
  'Avocat Eaux-Vives Genève | Clegal Avocats – Dès 155.- le 1er RDV',
  'Avocat aux Eaux-Vives ? Clegal Avocats vous reçoit aux Acacias, à 10 minutes du quartier des Eaux-Vives. Droit pénal, famille, affaires, étrangers. 1er RDV à CHF 155.-.',
  {
    city: 'geneve',
    breadcrumbs: [
      { name: 'Avocat Eaux-Vives', url: 'https://clegal-avocats.ch/avocat-eaux-vives' },
    ],
    faq: [
      {
        question: 'Quel avocat pour le quartier des Eaux-Vives à Genève ?',
        answer: 'Clegal Avocats est l\'un des cabinets d\'avocats à Genève les plus accessibles depuis les Eaux-Vives : 10 minutes en voiture par le pont du Mont-Blanc et le quai des Acacias, ou 12 minutes en tram (lignes 12 et 17). Notre étude est située Route des Jeunes 9, 1227 Les Acacias. Premier rendez-vous d\'analyse à CHF 155.-.',
      },
      {
        question: 'Quel tribunal compétent pour les Eaux-Vives ?',
        answer: 'Les Eaux-Vives, quartier de la Ville de Genève, dépendent des juridictions genevoises ordinaires : Tribunal de première instance, Cour de justice, Ministère public (Place du Bourg-de-Four — à 8 minutes des Eaux-Vives), Tribunal des prud\'hommes, Tribunal des baux et loyers, TAPI.',
      },
      {
        question: 'Combien coûte un avocat aux Eaux-Vives ?',
        answer: 'Les tarifs d\'un avocat à Genève (Eaux-Vives compris) varient entre CHF 300 et 500 de l\'heure. Clegal Avocats propose un premier rendez-vous d\'analyse forfaitaire à CHF 155.-, des forfaits pour les procédures prévisibles et accepte l\'aide juridictionnelle pour les clients éligibles.',
      },
    ],
  },
)
</script>

<template>
  <NuxtLayout>
    <main class="bg-slate-50">
      <section class="pt-32 pb-12 bg-white border-b border-slate-200">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb :links="[{ name: 'Avocat Eaux-Vives', path: '/avocat-eaux-vives' }]" />

          <p class="text-xs uppercase tracking-widest text-red-900 font-semibold mt-6">Genève · Quartier Eaux-Vives</p>
          <h1 class="text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight mt-3 mb-4">
            Avocat aux Eaux-Vives — à 10 minutes du quartier
          </h1>
          <p class="text-lg text-slate-600 max-w-3xl">
            Vous habitez ou travaillez aux Eaux-Vives ? Notre cabinet d'<NuxtLink to="/" class="text-red-900 hover:underline font-medium">avocats à Genève</NuxtLink>, situé aux Acacias, accueille les habitants du quartier pour tous les domaines du droit. Sept avocats, premier rendez-vous d'analyse à CHF 155.-.
          </p>

          <div class="mt-8 flex flex-col sm:flex-row gap-3">
            <NuxtLink to="/contact" class="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-slate-900 hover:bg-red-900 rounded-md transition-all shadow-sm">Prendre rendez-vous</NuxtLink>
            <a href="tel:0225121050" class="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-md transition-all">022 512 10 50</a>
          </div>
        </div>
      </section>

      <section class="py-16 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-2xl font-semibold text-slate-900 mb-6">Domaines pratiqués pour les habitants des Eaux-Vives</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <NuxtLink to="/droit-famille/avocat-divorce" class="block bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-red-900/30 hover:shadow-sm transition-all">
              <h3 class="font-semibold text-slate-900">Avocat divorce Eaux-Vives</h3>
              <p class="text-sm text-slate-600 mt-2">Procédure amiable (art. 111 CC) ou contentieuse devant le Tribunal de première instance.</p>
            </NuxtLink>
            <NuxtLink to="/droit-penal" class="block bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-red-900/30 hover:shadow-sm transition-all">
              <h3 class="font-semibold text-slate-900">Avocat pénaliste Eaux-Vives</h3>
              <p class="text-sm text-slate-600 mt-2">Défense devant le Ministère public et le Tribunal correctionnel — Place du Bourg-de-Four à 8 min.</p>
            </NuxtLink>
            <NuxtLink to="/droit-affaires" class="block bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-red-900/30 hover:shadow-sm transition-all">
              <h3 class="font-semibold text-slate-900">Avocat affaires Eaux-Vives</h3>
              <p class="text-sm text-slate-600 mt-2">Constitution de société, contrats commerciaux, contentieux pour les entreprises du quartier.</p>
            </NuxtLink>
            <NuxtLink to="/droit-immobilier/avocat-droit-bail" class="block bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-red-900/30 hover:shadow-sm transition-all">
              <h3 class="font-semibold text-slate-900">Avocat bail Eaux-Vives</h3>
              <p class="text-sm text-slate-600 mt-2">Loyer, congé, expulsion. Tribunal des baux et loyers de Genève.</p>
            </NuxtLink>
            <NuxtLink to="/droit-travail/avocat-licenciement" class="block bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-red-900/30 hover:shadow-sm transition-all">
              <h3 class="font-semibold text-slate-900">Avocat travail Eaux-Vives</h3>
              <p class="text-sm text-slate-600 mt-2">Licenciement, conflits, Tribunal des prud'hommes (gratuit jusqu'à CHF 75'000).</p>
            </NuxtLink>
            <NuxtLink to="/droit-etrangers/avocat-permis-sejour" class="block bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-red-900/30 hover:shadow-sm transition-all">
              <h3 class="font-semibold text-slate-900">Avocat étrangers Eaux-Vives</h3>
              <p class="text-sm text-slate-600 mt-2">Permis B/C, regroupement familial, recours à l'OCPM.</p>
            </NuxtLink>
          </div>
        </div>
      </section>

      <section class="py-16 bg-slate-900 text-white">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-3xl font-semibold tracking-tight">Avocat à Genève au service des Eaux-Vives</h2>
          <p class="mt-3 text-slate-300">
            Premier rendez-vous d'analyse à CHF 155.-. Nos avocats vous reçoivent du lundi au vendredi, 8h30-18h00.
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
