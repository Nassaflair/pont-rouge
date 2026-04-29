<script setup lang="ts">
useLocalSeo(
  'Cas clients à Genève | Dossiers traités – Clegal Avocats',
  'Cas clients anonymisés traités par Clegal Avocats à Genève. Divorce, droit pénal, licenciement, permis de séjour, bail. Exemples concrets d\'interventions.',
  {
    city: 'geneve',
    breadcrumbs: [{ name: 'Cas clients', url: 'https://clegal-avocats.ch/cas-clients' }],
  },
)

const cases = [
  {
    domain: 'Droit de la famille',
    domainColor: 'red',
    title: 'Divorce contentieux à Genève — gain de cause sur la garde alternée',
    context: 'Père de deux enfants (4 et 7 ans), résidant à Carouge, en procédure de divorce contentieux. La mère demandait la garde exclusive avec déménagement à Lyon.',
    intervention: 'Stratégie procédurale axée sur l\'intérêt supérieur des enfants : production d\'un calendrier de présence détaillé, audition des enfants par un curateur, expertise psycho-familiale. Plaidoirie sur la stabilité du cadre genevois (école, loisirs, famille élargie).',
    result: 'Garde alternée prononcée par le Tribunal de première instance, avec maintien du domicile principal à Genève. Pension alimentaire ajustée. Procédure : 14 mois.',
  },
  {
    domain: 'Droit pénal',
    domainColor: 'red',
    title: 'Opposition à ordonnance pénale — classement obtenu',
    context: 'Cliente convoquée par le Ministère public pour des faits de lésions corporelles simples. Ordonnance pénale notifiée avec une peine pécuniaire et inscription au casier.',
    intervention: 'Opposition déposée dans le délai de 10 jours (art. 354 CPP). Présentation au Tribunal de police de pièces médicales et de témoignages démontrant la légitime défense.',
    result: 'Classement de la procédure prononcé par le Ministère public après réexamen. Aucune inscription au casier judiciaire.',
  },
  {
    domain: 'Droit du travail',
    domainColor: 'red',
    title: 'Licenciement abusif à Genève — 6 mois d\'indemnité',
    context: 'Employée d\'une PME genevoise, licenciée à 54 ans après 12 ans d\'ancienneté, dans un contexte de restructuration suspecte. Certificat de travail défavorable.',
    intervention: 'Conciliation préalable au Tribunal des prud\'hommes. Préparation d\'un dossier mettant en lumière le motif réel du licenciement (âge + remplacement par un profil junior). Demande d\'indemnité pour licenciement abusif (art. 336 CO) et de rectification du certificat.',
    result: 'Accord en conciliation : 6 mois de salaire d\'indemnité (CHF 42\'000) + certificat de travail rectifié favorablement.',
  },
  {
    domain: 'Droit des étrangers',
    domainColor: 'red',
    title: 'Permis B à Genève — recours TAPI gagné',
    context: 'Ressortissant d\'un État tiers, refus de l\'OCPM pour un permis B suite à une demande de regroupement familial avec son épouse suisse. Décision contestée.',
    intervention: 'Recours au Tribunal administratif de première instance (TAPI) dans le délai de 30 jours. Constitution d\'un dossier prouvant la solidité de la relation, l\'autonomie financière du couple et l\'intégration linguistique.',
    result: 'Décision OCPM annulée, permis B délivré. Procédure : 7 mois.',
  },
  {
    domain: 'Droit du bail',
    domainColor: 'red',
    title: 'Résiliation abusive — annulation par le Tribunal des baux',
    context: 'Locataire d\'un appartement à Plainpalais depuis 8 ans, résiliation reçue avec un préavis légal mais motif douteux (prétendue rénovation lourde, mais aucun permis demandé).',
    intervention: 'Conciliation devant la Commission de conciliation en matière de baux et loyers. Production de pièces démontrant l\'absence de projet réel. Demande d\'annulation du congé (art. 271 CO).',
    result: 'Annulation du congé prononcée par le Tribunal des baux et loyers. Locataire maintenu dans son appartement.',
  },
  {
    domain: 'Droit administratif',
    domainColor: 'red',
    title: 'Recours contre une décision de l\'État de Genève — gain de cause à la CDAP',
    context: 'Entrepreneur genevois faisant face à une décision défavorable d\'un département cantonal en matière de marchés publics. Évaluation contestée des critères techniques.',
    intervention: 'Recours à la Chambre administrative de la Cour de justice avec analyse fine du barème d\'évaluation et démonstration de l\'incohérence de la pondération.',
    result: 'Décision annulée, marché réévalué et adjugé à notre client. Procédure : 9 mois.',
  },
]
</script>

<template>
  <NuxtLayout>
    <main class="bg-slate-50">
      <section class="pt-32 pb-12 bg-white border-b border-slate-200">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb :links="[{ name: 'Cas clients', path: '/cas-clients' }]" />
          <h1 class="text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight mt-6 mb-4">
            Cas clients — exemples de dossiers traités à Genève
          </h1>
          <p class="text-lg text-slate-600 max-w-3xl">
            Une sélection de dossiers anonymisés traités par notre cabinet d'avocats à Genève. Tous les exemples sont
            réels mais entièrement anonymisés pour respecter le secret professionnel.
          </p>
        </div>
      </section>

      <section class="py-16">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <article
            v-for="(c, i) in cases"
            :key="i"
            class="bg-white border border-slate-200 rounded-xl overflow-hidden"
          >
            <div class="p-6 md:p-8">
              <p class="text-xs uppercase tracking-widest font-bold text-red-900 mb-3">{{ c.domain }}</p>
              <h2 class="text-xl font-semibold text-slate-900">{{ c.title }}</h2>

              <dl class="mt-6 space-y-4">
                <div>
                  <dt class="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Contexte</dt>
                  <dd class="text-sm text-slate-700 leading-relaxed">{{ c.context }}</dd>
                </div>
                <div>
                  <dt class="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Notre intervention</dt>
                  <dd class="text-sm text-slate-700 leading-relaxed">{{ c.intervention }}</dd>
                </div>
                <div class="bg-emerald-50 border-l-4 border-emerald-700 p-4 rounded-r-lg">
                  <dt class="text-xs font-semibold text-emerald-900 uppercase tracking-wider mb-1">Résultat</dt>
                  <dd class="text-sm text-slate-800 leading-relaxed font-medium">{{ c.result }}</dd>
                </div>
              </dl>
            </div>
          </article>
        </div>
      </section>

      <section class="py-12 bg-slate-100">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p class="text-xs text-slate-500 italic">
            Tous les cas présentés sont des dossiers réels traités par les avocats du cabinet. Les noms, dates précises,
            montants et détails identifiants ont été modifiés ou omis afin de respecter le secret professionnel
            (art. 13 LLCA) et la sphère privée de nos clients. Les résultats passés ne préjugent pas des résultats futurs.
          </p>
        </div>
      </section>

      <section class="py-16 bg-slate-900 text-white">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-3xl font-semibold tracking-tight">Votre dossier mérite la même attention</h2>
          <p class="mt-3 text-slate-300">
            Premier rendez-vous d'analyse à CHF 155.- — 60 minutes pour évaluer la situation et proposer une stratégie.
          </p>
          <div class="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <NuxtLink to="/contact" class="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-slate-900 bg-white hover:bg-slate-100 rounded-md">Prendre rendez-vous</NuxtLink>
            <a href="tel:0225121050" class="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white border border-white/20 hover:bg-white/10 rounded-md">022 512 10 50</a>
          </div>
        </div>
      </section>
    </main>
  </NuxtLayout>
</template>
