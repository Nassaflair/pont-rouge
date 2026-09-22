<script setup lang="ts">
import { getLawyersByCity } from '~/data/team'

const vdLawyers = getLawyersByCity('lausanne')

const faq = [
    {
      question: 'Y a-t-il un avocat Clegal pour Pully ?',
      answer: 'Oui. Clegal Avocats dispose d\'un bureau à Lausanne accessible aux Pulliérans. Pour un rendez-vous, contactez-nous au 021 512 10 25 ou via notre formulaire. Premier rendez-vous d\'analyse à CHF 155.-.',
    },
    {
      question: 'Quelles juridictions compétentes pour Pully ?',
      answer: 'Attention à une confusion fréquente : Pully appartient au district de Lavaux-Oron, rattaché au Tribunal d\'arrondissement de l\'Est vaudois, dont le siège est à Vevey (Rue du Simplon 22) — et non au Tribunal d\'arrondissement de Lausanne, malgré la proximité immédiate de la capitale vaudoise. En appel, c\'est le Tribunal cantonal vaudois à Lausanne qui statue. Pour l\'administratif, la Cour de droit administratif et public (CDAP) ; pour la protection de l\'adulte et de l\'enfant, la Justice de paix du district de Lavaux-Oron ; pour les baux, le Tribunal des baux vaudois.',
    },
    {
      question: 'Quel tarif pour un avocat à Pully ?',
      answer: 'Entre CHF 300 et CHF 500 de l\'heure, comme dans l\'ensemble du canton. Un point propre aux dossiers pulliérans : lorsque l\'affaire se juge à Vevey, au Tribunal d\'arrondissement de l\'Est vaudois, les déplacements en audience sont facturés — nous les limitons aux comparutions où votre présence est requise. Premier rendez-vous d\'analyse forfaitaire à CHF 155.-, forfaits pour les procédures prévisibles, assistance judiciaire vaudoise acceptée.',
    },
    {
      question: 'Où déposer une requête de mesures protectrices si j\'habite Pully ?',
      answer: 'Auprès du Président du Tribunal d\'arrondissement de l\'Est vaudois, à Vevey. Le formulaire vaudois s\'imprime, se signe et s\'envoie en deux exemplaires par courrier, avec le certificat de famille, une fiche de salaire par époux, une copie du bail et l\'attestation des primes d\'assurance maladie. Le tribunal du domicile de l\'un ou l\'autre époux est compétent, au choix — ce qui peut ouvrir une option si votre conjoint réside dans un autre arrondissement.',
    },
    {
      question: 'Vos avocats connaissent-ils le droit vaudois ?',
      answer: 'Oui. Plusieurs membres de notre équipe ont étudié à l\'Université de Lausanne (Me Cheema, Me Amberger, Me Rodrigues). Me Léa Rodrigues a notamment été greffière ad hoc auprès de la Chambre pénale du Tribunal d\'arrondissement de Lausanne. Me Cyril-Marc Amberger a pratiqué chez Reymond, Ulmann & Associés à Lausanne.',
    },
  ]

useLocalSeo(
  'Avocat à Pully | Clegal Avocats Lausanne – Dès 155.- le 1er RDV',
  'Avocat à Pully ? Clegal Avocats vous reçoit à son bureau de Lausanne. Tribunal cantonal vaudois, Justice de paix, CDAP. Premier rendez-vous d\'analyse à CHF 155.-.',
  {
    city: 'lausanne',
    breadcrumbs: [
      { name: 'Avocat à Pully', url: 'https://clegal-avocats.ch/avocat-pully' },
    ],
    lawyerSlugs: vdLawyers.map((l) => l.slug),
    faq,

  },
)
</script>

<template>
    <main class="bg-slate-50">
      <section class="pt-32 pb-12 bg-white border-b border-slate-200">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb :links="[{ name: 'Avocat à Pully', path: '/avocat-pully' }]" />

          <p class="text-xs uppercase tracking-widest text-red-900 font-semibold mt-6">Vaud · Pully</p>
          <h1 class="text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight mt-3 mb-4">
            Avocat à Pully — Clegal Avocats Lausanne
          </h1>
          <p class="text-lg text-slate-600 max-w-3xl">
            Vous habitez ou travaillez à Pully ? Notre cabinet d'<NuxtLink to="/lausanne" class="text-red-900 hover:underline font-medium">avocats à Lausanne</NuxtLink> accueille les habitants de la commune. Notre équipe, dont plusieurs formés à l'UNIL, qui interviennent devant les juridictions vaudoises. Premier rendez-vous d'analyse à CHF 155.-.
          </p>

          <div class="mt-8 flex flex-col sm:flex-row gap-3">
            <NuxtLink to="/contact" class="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-slate-900 hover:bg-red-900 rounded-md transition-all shadow-sm">Prendre rendez-vous</NuxtLink>
            <a href="tel:0215121025" class="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-md transition-all">021 512 10 25</a>
          </div>
        </div>
      </section>

      <section class="py-16 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-2xl font-semibold text-slate-900 mb-6">Pully dans le système judiciaire vaudois</h2>
          <p class="text-slate-700 leading-relaxed mb-4">
            Pully (18'000 habitants), commune limitrophe de Lausanne, dépend des juridictions du canton de Vaud. Les Pulliérans qui font appel à un <NuxtLink to="/lausanne" class="text-red-900 hover:underline">avocat à Lausanne</NuxtLink> passent par les autorités suivantes&nbsp;:
          </p>
          <ul class="space-y-3 text-slate-700">
            <li class="flex gap-3">
              <span class="text-red-900 font-bold">›</span>
              <span><strong>Tribunal d'arrondissement de l'Est vaudois</strong> (Vevey) — civil et pénal de première instance. Pully relève du district de Lavaux-Oron, non de l'arrondissement de Lausanne.</span>
            </li>
            <li class="flex gap-3">
              <span class="text-red-900 font-bold">›</span>
              <span><strong>Tribunal cantonal vaudois</strong> (Lausanne) — appel et révision</span>
            </li>
            <li class="flex gap-3">
              <span class="text-red-900 font-bold">›</span>
              <span><strong>Justice de paix de Lausanne</strong> — droit de la famille (MPUC, autorité parentale, protection de l'adulte)</span>
            </li>
            <li class="flex gap-3">
              <span class="text-red-900 font-bold">›</span>
              <span><strong>Cour de droit administratif et public (CDAP)</strong> — recours administratifs</span>
            </li>
            <li class="flex gap-3">
              <span class="text-red-900 font-bold">›</span>
              <span><strong>Tribunal des baux</strong> vaudois — conflits locatifs</span>
            </li>
            <li class="flex gap-3">
              <span class="text-red-900 font-bold">›</span>
              <span><strong>Tribunal de prud'hommes du canton de Vaud</strong> — droit du travail</span>
            </li>
          </ul>
        </div>
      </section>

      <section v-if="vdLawyers.length" class="py-16 bg-slate-50 border-y border-slate-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-2xl font-semibold text-slate-900 mb-3">Nos avocats avec une connexion vaudoise</h2>
          <p class="text-slate-600 mb-8 max-w-3xl">
            Plusieurs membres de l'équipe ont étudié à l'UNIL ou exercé dans des études vaudoises.
          </p>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <LawyerCard v-for="lawyer in vdLawyers" :key="lawyer.slug" :lawyer="lawyer" variant="compact" />
          </div>
        </div>
      </section>

      <!-- Domaines traités selon la procédure vaudoise -->
      <section class="py-16 bg-white border-t border-slate-200">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-2xl font-semibold text-slate-900 mb-3">Nos domaines pour Pully</h2>
          <p class="text-slate-600 mb-8">
            Pully relevant de l'arrondissement de l'Est vaudois, la procédure applicable est vaudoise.
            Ces pages la détaillent.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <NuxtLink to="/droit-famille/avocat-divorce-lausanne" class="block bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-red-900/30 hover:shadow-sm transition-all">
              <h3 class="font-semibold text-slate-900">Divorce — procédure vaudoise</h3>
              <p class="text-sm text-slate-600 mt-2">Tribunaux d'arrondissement, mesures protectrices devant le président, assistance judiciaire vaudoise.</p>
            </NuxtLink>
            <NuxtLink to="/droit-penal-lausanne" class="block bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-red-900/30 hover:shadow-sm transition-all">
              <h3 class="font-semibold text-slate-900">Défense pénale dans le canton de Vaud</h3>
              <p class="text-sm text-slate-600 mt-2">Garde à vue, opposition en 10 jours, juridictions vaudoises. Permanence 24h/24.</p>
            </NuxtLink>
            <NuxtLink to="/droit-bail" class="block bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-red-900/30 hover:shadow-sm transition-all">
              <h3 class="font-semibold text-slate-900">Droit du bail</h3>
              <p class="text-sm text-slate-600 mt-2">Hausses de loyer, résiliations, défauts de la chose louée devant le Tribunal des baux vaudois.</p>
            </NuxtLink>
            <NuxtLink to="/droit-travail" class="block bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-red-900/30 hover:shadow-sm transition-all">
              <h3 class="font-semibold text-slate-900">Droit du travail</h3>
              <p class="text-sm text-slate-600 mt-2">Licenciement, heures supplémentaires, certificat de travail, prud'hommes vaudois.</p>
            </NuxtLink>
          </div>
        </div>
      </section>

      <section class="py-16 bg-slate-900 text-white">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-3xl font-semibold tracking-tight">Avocat pour les Pulliérans</h2>
          <p class="mt-3 text-slate-300">
            Notre bureau de <NuxtLink to="/lausanne" class="text-white underline hover:text-red-300">Lausanne</NuxtLink> accueille les clients de Pully. Premier rendez-vous d'analyse à CHF 155.-.
          </p>
          <div class="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <NuxtLink to="/contact" class="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-slate-900 bg-white hover:bg-slate-100 rounded-md">Demander un rendez-vous</NuxtLink>
            <a href="tel:0215121025" class="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white border border-white/20 hover:bg-white/10 rounded-md">021 512 10 25</a>
          </div>
        </div>
      </section>
    <FaqSection :items="faq" />

    </main>
</template>
