<script setup lang="ts">
useLocalSeo(
  'MPUC Genève : mesures protectrices de l\'union conjugale',
  'MPUC à Genève : décision du Tribunal de première instance pour organiser la séparation provisoire des époux. Domicile, garde, contributions, durée.',
  {
    city: 'geneve',
    breadcrumbs: [
      { name: 'Glossaire', url: 'https://clegal-avocats.ch/glossaire' },
      { name: 'MPUC', url: 'https://clegal-avocats.ch/glossaire/mpuc-geneve' },
    ],
    faq: [
      {
        question: 'Combien de temps dure une procédure MPUC à Genève ?',
        answer: 'À Genève, une procédure MPUC dure entre 2 et 6 mois selon la complexité (présence d\'enfants mineurs, désaccord sur les contributions). En cas d\'urgence (violences), des mesures superprovisionnelles peuvent être ordonnées en quelques jours.',
      },
      {
        question: 'Faut-il un avocat pour une MPUC ?',
        answer: 'Pas obligatoire mais fortement recommandé : la décision MPUC fixe le cadre de la séparation (parfois pour des années avant le divorce). Un avocat sécurise vos droits sur le logement, la garde, les contributions et la prévoyance.',
      },
    ],
  },
)

const quickDef = `Les <strong>MPUC</strong> (mesures protectrices de l'union conjugale) sont des décisions du <strong>Tribunal de première instance de Genève</strong> qui organisent la <strong>séparation provisoire</strong> des époux : attribution du domicile conjugal, garde des enfants, contributions d'entretien, mesures patrimoniales urgentes (art. 172 ss CC). Elles s'appliquent <strong>tant qu'aucun divorce n'est prononcé</strong>.`

const body = [
  {
    heading: 'À Genève, qui prononce les MPUC ?',
    content: `Le <strong>Tribunal de première instance de Genève</strong> (Rue de l'Athénée 6/8, 1205 Genève) statue sur les MPUC en première instance. La requête doit être motivée et accompagnée des justificatifs (déclaration fiscale, fiches de salaire, certificat LPP, documents relatifs au logement).`,
  },
  {
    heading: 'Que peut-on demander dans une MPUC ?',
    content: `1. <strong>Suspension de la vie commune</strong> avec attribution du logement à l'un des époux. 2. <strong>Garde des enfants</strong> et droit de visite. 3. <strong>Contributions d'entretien</strong> en faveur du conjoint et des enfants. 4. <strong>Mesures patrimoniales</strong> (séparation des biens, blocage de comptes). 5. <strong>Interdictions</strong> (en cas de violences).`,
  },
  {
    heading: 'Combien coûtent des MPUC à Genève ?',
    content: `Les frais de justice oscillent entre CHF 800 et CHF 2'500 selon la complexité (avance du Tribunal de première instance). Les honoraires d'avocat varient entre CHF 3'000 et CHF 8'000 pour une procédure standard. L'<a href='/glossaire/assistance-judiciaire-geneve' class='text-red-900 hover:underline'>assistance judiciaire</a> est possible sous conditions.`,
  },
]
</script>

<template>
  <GlossaryEntry
    category="Droit de la famille"
    term="MPUC — Mesures protectrices de l'union conjugale"
    slug="mpuc-geneve"
    :quick-def="quickDef"
    :body="body"
    :related-link="{ label: 'Avocat divorce Genève', url: '/droit-famille/avocat-divorce' }"
  />
</template>
