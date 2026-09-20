<script setup lang="ts">
/**
 * Page vaudoise du divorce. Elle n'existe que parce qu'il y a de la matière propre au
 * canton : tribunaux d'arrondissement, compétence du président pour les MPUC, formulaire
 * cantonal, assistance judiciaire vaudoise. Le droit de fond est fédéral et reste traité
 * sur /droit-famille/avocat-divorce (Genève) — les deux pages ne se recouvrent pas.
 */
const faq = [
  {
    question: 'Quel tribunal est compétent pour un divorce dans le canton de Vaud ?',
    answer: 'Le canton de Vaud compte quatre tribunaux d\'arrondissement : Lausanne (districts de Lausanne et de l\'Ouest lausannois), l\'Est vaudois à Vevey (Aigle, Lavaux-Oron, Riviera-Pays-d\'Enhaut), La Côte à Nyon (Morges et Nyon), et la Broye et le Nord vaudois. C\'est le tribunal du domicile de l\'un des époux qui est compétent — au choix, ce qui ouvre parfois une option lorsque les conjoints résident dans deux arrondissements différents.',
  },
  {
    question: 'Comment demander des mesures protectrices de l\'union conjugale à Lausanne ?',
    answer: 'Dans le canton de Vaud, la requête se dépose auprès du Président du Tribunal d\'arrondissement, et non devant la Justice de paix. Le formulaire cantonal doit être imprimé, signé, puis envoyé en deux exemplaires par courrier. Quatre pièces sont systématiquement exigées : le certificat de famille, une fiche de salaire pour chaque époux, une copie du bail à loyer et une attestation des primes d\'assurance maladie.',
  },
  {
    question: 'Le divorce vaudois passe-t-il par une conciliation préalable ?',
    answer: 'Non. La procédure de divorce est dispensée de la tentative de conciliation préalable (art. 198 let. c CPC), dans le canton de Vaud comme partout en Suisse. Ce qui a lieu, c\'est l\'audition des époux par le tribunal : en divorce sur requête commune, le juge entend les conjoints pour vérifier que la volonté de divorcer est libre et mûrement réfléchie et que la convention est claire et complète.',
  },
  {
    question: 'Combien de temps dure un divorce dans le canton de Vaud ?',
    answer: 'Un divorce sur requête commune avec convention complète se règle généralement en quelques mois après le dépôt, le temps de l\'audition des époux et de la ratification de la convention. Un divorce contentieux, avec désaccord sur les enfants, la contribution d\'entretien ou le partage de la prévoyance, s\'étend sur une durée nettement plus longue et dépend de la charge du tribunal d\'arrondissement saisi. [À VALIDER — Me Cheema : indiquer les durées réellement observées dans vos dossiers vaudois.]',
  },
  {
    question: 'Puis-je obtenir l\'assistance judiciaire pour un divorce dans le canton de Vaud ?',
    answer: 'Oui, si vos ressources sont insuffisantes et que la cause n\'est pas dénuée de chances de succès (art. 117 CPC). La demande se dépose auprès du tribunal saisi du divorce, accompagnée des justificatifs de revenus et de charges. L\'assistance judiciaire vaudoise couvre les frais judiciaires et, si nécessaire, la commission d\'un avocat d\'office. Elle constitue une avance : l\'État peut en demander le remboursement si votre situation financière s\'améliore.',
  },
  {
    question: 'Vos avocats plaident-ils devant les tribunaux vaudois ?',
    answer: 'Oui. Notre bureau de Lausanne se trouve Rue Saint-Pierre 2, à 5 minutes à pied de la gare, et nous intervenons devant l\'ensemble des juridictions vaudoises. Plusieurs membres de l\'équipe ont été formés à l\'Université de Lausanne et ont pratiqué dans le canton. Premier rendez-vous d\'analyse à CHF 155.-.',
  },
]

useLocalSeo(
  'Avocat Divorce Lausanne (Vaud) | Procédure & MPUC – Clegal Avocats',
  'Avocat divorce à Lausanne. Tribunaux d\'arrondissement vaudois, mesures protectrices devant le président, assistance judiciaire VD. 1er RDV d\'analyse CHF 155.-.',
  {
    city: 'lausanne',
    breadcrumbs: [
      { name: 'Droit de la famille', url: 'https://clegal-avocats.ch/droit-famille' },
      { name: 'Avocat divorce Lausanne', url: 'https://clegal-avocats.ch/droit-famille/avocat-divorce-lausanne' },
    ],
    services: [
      {
        name: 'Avocat divorce à Lausanne',
        serviceType: 'Représentation en divorce et mesures protectrices',
        description: 'Divorce sur requête commune et contentieux devant les tribunaux d\'arrondissement vaudois, mesures protectrices de l\'union conjugale devant le président du tribunal, assistance judiciaire vaudoise.',
        url: 'https://clegal-avocats.ch/droit-famille/avocat-divorce-lausanne',
        category: 'Droit de la famille',
      },
    ],
    faq,
  },
)
</script>

<template>
  <main class="bg-slate-50">
    <section class="pt-32 pb-12 bg-white border-b border-slate-200">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          :links="[
            { name: 'Droit de la famille', path: '/droit-famille' },
            { name: 'Divorce Lausanne', path: '/droit-famille/avocat-divorce-lausanne' },
          ]"
        />

        <p class="text-xs uppercase tracking-widest text-red-900 font-semibold mt-6">Canton de Vaud</p>
        <h1 class="text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight mt-3 mb-4">
          Avocat divorce à Lausanne
        </h1>

        <div class="bg-slate-50 border-l-4 border-red-900 rounded-r-xl p-6 mt-8">
          <p class="text-xs uppercase tracking-widest font-bold text-red-900 mb-2">Réponse rapide</p>
          <p class="text-slate-800 leading-relaxed">
            Dans le canton de Vaud, le divorce se plaide devant l'un des quatre tribunaux d'arrondissement,
            selon le domicile des époux. Les mesures protectrices de l'union conjugale se demandent au
            <strong>président du tribunal d'arrondissement</strong>, par formulaire cantonal envoyé en deux
            exemplaires. La procédure de divorce est dispensée de conciliation préalable
            (art. 198 let. c CPC). Premier rendez-vous d'analyse à <strong>CHF 155.-</strong>.
          </p>
        </div>

        <div class="mt-8 flex flex-col sm:flex-row gap-3">
          <NuxtLink to="/contact" class="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-slate-900 hover:bg-red-900 rounded-md transition-all shadow-sm">
            Prendre rendez-vous à Lausanne
          </NuxtLink>
          <a href="tel:0215121025" class="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-md transition-all">
            021 512 10 25
          </a>
        </div>
      </div>
    </section>

    <!-- Le tableau des arrondissements : l'information la plus recherchée et la plus mal connue -->
    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-2xl font-semibold text-slate-900 mb-4">Quel tribunal pour votre divorce ?</h2>
        <p class="text-slate-700 leading-relaxed mb-6">
          Le canton de Vaud est découpé en quatre arrondissements judiciaires. C'est une différence de fond
          avec Genève, qui ne connaît qu'un seul Tribunal de première instance pour tout le canton. Une
          requête adressée au mauvais tribunal est transmise d'office, mais la procédure y perd des semaines.
        </p>

        <div class="overflow-x-auto">
          <table class="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
            <thead class="bg-slate-50 text-left">
              <tr>
                <th class="p-4 font-semibold text-slate-900">Tribunal d'arrondissement</th>
                <th class="p-4 font-semibold text-slate-900">Siège</th>
                <th class="p-4 font-semibold text-slate-900">Districts couverts</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200">
              <tr>
                <td class="p-4 font-medium text-slate-900">Lausanne</td>
                <td class="p-4 text-slate-700">Palais de Montbenon, Lausanne</td>
                <td class="p-4 text-slate-700">Lausanne, Ouest lausannois (Renens, Ecublens, Prilly, Crissier)</td>
              </tr>
              <tr>
                <td class="p-4 font-medium text-slate-900">Est vaudois</td>
                <td class="p-4 text-slate-700">Rue du Simplon 22, Vevey</td>
                <td class="p-4 text-slate-700">Aigle, Lavaux-Oron (dont Pully), Riviera-Pays-d'Enhaut</td>
              </tr>
              <tr>
                <td class="p-4 font-medium text-slate-900">La Côte</td>
                <td class="p-4 text-slate-700">Route de Saint-Cergue 38, Nyon</td>
                <td class="p-4 text-slate-700">Morges, Nyon</td>
              </tr>
              <tr>
                <td class="p-4 font-medium text-slate-900">Broye et Nord vaudois</td>
                <td class="p-4 text-slate-700">Yverdon-les-Bains</td>
                <td class="p-4 text-slate-700">Broye-Vully, Jura-Nord vaudois, Gros-de-Vaud</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p class="text-slate-700 leading-relaxed mt-6">
          Le tribunal compétent est celui du domicile de l'un des époux, <strong>au choix</strong>. Lorsque
          les conjoints se sont séparés et vivent dans deux arrondissements différents, ce choix n'est pas
          neutre : les délais de traitement varient d'un tribunal à l'autre. C'est l'un des premiers points
          que nous examinons en rendez-vous.
        </p>
      </div>
    </section>

    <!-- MPUC : la vraie spécificité procédurale vaudoise -->
    <section class="py-16 border-t border-slate-100">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-2xl font-semibold text-slate-900 mb-4">
          Avant le divorce : les mesures protectrices (MPUC)
        </h2>
        <p class="text-slate-700 leading-relaxed mb-6">
          Lorsque la vie commune cesse mais que le divorce n'est pas encore engagé, les mesures protectrices
          de l'union conjugale règlent l'intervalle : attribution du logement, garde des enfants, contributions
          d'entretien. Dans le canton de Vaud, la requête se dépose auprès du
          <strong>président du tribunal d'arrondissement</strong> — une compétence qu'il faut distinguer de
          celle de la Justice de paix, qui traite en Vaud la protection de l'adulte et de l'enfant, les
          curatelles et les successions.
        </p>

        <div class="bg-white border border-slate-200 rounded-xl p-6">
          <h3 class="font-semibold text-slate-900 mb-4">Les pièces exigées avec la requête</h3>
          <ul class="space-y-2 text-slate-700">
            <li class="flex gap-3"><span class="text-red-900 font-bold">›</span><span>Le certificat de famille</span></li>
            <li class="flex gap-3"><span class="text-red-900 font-bold">›</span><span>Une fiche de salaire pour chacun des époux</span></li>
            <li class="flex gap-3"><span class="text-red-900 font-bold">›</span><span>Une copie du bail à loyer</span></li>
            <li class="flex gap-3"><span class="text-red-900 font-bold">›</span><span>Une attestation du montant des primes d'assurance maladie</span></li>
          </ul>
          <p class="text-sm text-slate-600 mt-4">
            Le formulaire cantonal s'imprime, se signe et s'envoie <strong>en deux exemplaires par courrier</strong>.
            Un dossier incomplet est renvoyé, ce qui retarde d'autant une décision souvent urgente.
          </p>
        </div>
      </div>
    </section>

    <!-- Différences concrètes avec Genève : justifie l'existence de la page -->
    <section class="py-16 bg-white border-t border-slate-100">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-2xl font-semibold text-slate-900 mb-4">Vaud et Genève : ce qui change réellement</h2>
        <p class="text-slate-700 leading-relaxed mb-6">
          Le droit du divorce est fédéral : les mêmes articles du Code civil s'appliquent des deux côtés de
          la Venoge. Ce qui diffère, c'est l'organisation judiciaire et la pratique — et cela change
          concrètement le déroulement d'un dossier.
        </p>

        <div class="overflow-x-auto">
          <table class="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
            <thead class="bg-slate-50 text-left">
              <tr>
                <th class="p-4 font-semibold text-slate-900"></th>
                <th class="p-4 font-semibold text-slate-900">Canton de Vaud</th>
                <th class="p-4 font-semibold text-slate-900">Canton de Genève</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200">
              <tr>
                <td class="p-4 font-medium text-slate-900">Tribunal du divorce</td>
                <td class="p-4 text-slate-700">Quatre tribunaux d'arrondissement selon le domicile</td>
                <td class="p-4 text-slate-700">Un seul Tribunal de première instance pour le canton</td>
              </tr>
              <tr>
                <td class="p-4 font-medium text-slate-900">Mesures protectrices</td>
                <td class="p-4 text-slate-700">Président du tribunal d'arrondissement, formulaire cantonal en deux exemplaires</td>
                <td class="p-4 text-slate-700">Tribunal de première instance, par requête</td>
              </tr>
              <tr>
                <td class="p-4 font-medium text-slate-900">Justice de paix</td>
                <td class="p-4 text-slate-700">Protection de l'adulte et de l'enfant, curatelles, successions</td>
                <td class="p-4 text-slate-700">Pas d'équivalent : le Tribunal de protection assume ce rôle</td>
              </tr>
              <tr>
                <td class="p-4 font-medium text-slate-900">Appel</td>
                <td class="p-4 text-slate-700">Tribunal cantonal vaudois, à Lausanne</td>
                <td class="p-4 text-slate-700">Cour de justice de Genève</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p class="text-slate-700 leading-relaxed mt-6">
          Si votre divorce relève du canton de Genève, la procédure genevoise est détaillée sur notre
          <NuxtLink to="/droit-famille/avocat-divorce" class="text-red-900 hover:underline font-medium">page consacrée au divorce à Genève</NuxtLink>.
        </p>
      </div>
    </section>

    <FaqSection :items="faq" title="Divorce dans le canton de Vaud — questions fréquentes" />

    <section class="py-16 bg-slate-900 text-white">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-semibold tracking-tight">Un premier avis sur votre situation</h2>
        <p class="mt-3 text-slate-300">
          Premier rendez-vous d'analyse à CHF 155.- à notre bureau de Lausanne, Rue Saint-Pierre 2 —
          à 5 minutes à pied de la gare.
        </p>
        <div class="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <NuxtLink to="/contact" class="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-slate-900 bg-white hover:bg-slate-100 rounded-md">
            Prendre rendez-vous
          </NuxtLink>
          <a href="tel:0215121025" class="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white border border-white/20 hover:bg-white/10 rounded-md">
            021 512 10 25
          </a>
        </div>
      </div>
    </section>
  </main>
</template>
