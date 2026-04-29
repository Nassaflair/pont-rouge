<script setup lang="ts">
useLocalSeo(
  'Tribunal des prud\'hommes Genève : compétence, gratuité, procédure',
  'Tribunal des prud\'hommes de Genève : juridiction du droit du travail. Gratuit jusqu\'à CHF 75\'000 (art. 114 CPC). Procédure, délais, recours.',
  {
    city: 'geneve',
    breadcrumbs: [
      { name: 'Glossaire', url: 'https://clegal-avocats.ch/glossaire' },
      { name: 'Prud\'hommes', url: 'https://clegal-avocats.ch/glossaire/prud-hommes-geneve' },
    ],
    faq: [
      {
        question: 'Le Tribunal des prud\'hommes à Genève est-il vraiment gratuit ?',
        answer: 'Oui, gratuit jusqu\'à CHF 75\'000 de valeur litigieuse (art. 114 CPC) : pas de frais de procédure pour le justiciable. Au-delà de ce montant ou en appel, des frais s\'appliquent. Les honoraires d\'avocat restent à la charge de chaque partie (sauf condamnation aux dépens).',
      },
      {
        question: 'Combien de temps dure une procédure prud\'homale à Genève ?',
        answer: 'Première instance à Genève : 6 à 12 mois en moyenne. Une tentative de conciliation obligatoire précède la procédure (1-3 mois). En cas d\'appel à la Cour de justice (Chambre des prud\'hommes), comptez 6-12 mois supplémentaires.',
      },
    ],
  },
)

const quickDef = `Le <strong>Tribunal des prud'hommes</strong> de Genève est la juridiction spécialisée en droit du travail : licenciement abusif, certificats de travail, harcèlement, salaire, vacances, gratifications. <strong>Procédure gratuite</strong> jusqu'à <strong>CHF 75'000</strong> de valeur litigieuse (art. 114 CPC). Conciliation obligatoire avant le procès.`

const body = [
  {
    heading: 'Compétence du Tribunal des prud\'hommes à Genève',
    content: `Tout litige issu d'un <strong>contrat de travail</strong> (art. 319 ss CO) entre un employeur et un employé domiciliés ou actifs à Genève. Inclut les différends sur le salaire, les heures supplémentaires, les vacances, le 13e mois, le certificat de travail, le congé (licenciement immédiat, abusif, en temps inopportun). Exclus : les contrats de mandat, les indépendants pures.`,
  },
  {
    heading: 'Procédure de conciliation préalable',
    content: `Avant tout procès, une <strong>tentative de conciliation</strong> obligatoire devant la Chambre de conciliation (art. 197 ss CPC). Cette audience est gratuite, dure 30-60 minutes et débouche souvent sur un accord. En cas d'échec, l'autorité délivre une <strong>autorisation de procéder</strong> qui ouvre la voie au procès devant le Tribunal des prud'hommes.`,
  },
  {
    heading: 'Délai pour saisir le Tribunal',
    content: `Pour le <strong>licenciement abusif</strong> (art. 336 CO) : 180 jours dès la fin du contrat pour réclamer une indemnité. Pour le <strong>licenciement immédiat injustifié</strong> (art. 337 CO) : 30 jours. Le <strong>certificat de travail</strong> est imprescriptible. Un avocat évalue l'opportunité et la stratégie selon votre situation.`,
  },
  {
    heading: 'Coût et représentation',
    content: `Procédure <strong>gratuite jusqu'à CHF 75'000</strong>. Au-delà, frais de justice ordinaires. Les <strong>honoraires d'avocat</strong> restent à votre charge sauf condamnation aux dépens. Notre cabinet propose des forfaits pour les procédures prévisibles. Voir <a href='/honoraires' class='text-red-900 hover:underline'>nos honoraires détaillés</a>.`,
  },
]
</script>

<template>
  <GlossaryEntry
    category="Droit du travail"
    term="Tribunal des prud'hommes de Genève"
    slug="prud-hommes-geneve"
    :quick-def="quickDef"
    :body="body"
    :related-link="{ label: 'Avocat licenciement Genève', url: '/droit-travail/avocat-licenciement' }"
  />
</template>
