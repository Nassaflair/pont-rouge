<script setup lang="ts">
useLocalSeo(
  'Assistance judiciaire à Genève : conditions, demande, montants',
  'Assistance judiciaire (AJ) à Genève : aide étatique aux personnes sans moyens suffisants. Conditions, requête au Tribunal civil, art. 117 CPC.',
  {
    city: 'geneve',
    breadcrumbs: [
      { name: 'Glossaire', url: 'https://clegal-avocats.ch/glossaire' },
      { name: 'Assistance judiciaire', url: 'https://clegal-avocats.ch/glossaire/assistance-judiciaire-geneve' },
    ],
    faq: [
      {
        question: 'Qui peut bénéficier de l\'assistance judiciaire à Genève ?',
        answer: 'Toute personne dont les revenus et la fortune sont insuffisants pour couvrir les frais de procédure et d\'avocat. À Genève, en pratique, un revenu inférieur à CHF 4\'000 par mois (célibataire) ou CHF 6\'000 (couple), sans fortune significative, ouvre généralement le droit (évaluation au cas par cas par le Tribunal).',
      },
      {
        question: 'Faut-il rembourser l\'assistance judiciaire ?',
        answer: 'Oui, si votre situation s\'améliore dans les 10 ans (art. 123 CPC). L\'État avance les frais et peut en exiger le remboursement total ou partiel si votre patrimoine ou vos revenus le permettent ultérieurement.',
      },
    ],
  },
)

const quickDef = `L'<strong>assistance judiciaire</strong> est une aide étatique permettant aux personnes sans moyens suffisants d'avoir accès à un avocat et à la justice. À Genève, elle est accordée par le <strong>Tribunal civil ou pénal</strong> sur requête motivée (art. 117 CPC). Elle couvre les <strong>honoraires d'avocat</strong> et les <strong>frais de justice</strong>.`

const body = [
  {
    heading: 'Conditions d\'octroi à Genève',
    content: `Trois conditions cumulatives : 1. <strong>Indigence</strong> (revenus + fortune insuffisants). 2. <strong>Cause non manifestement infondée</strong>. 3. <strong>Nécessité d'un avocat</strong> (selon la complexité et l'enjeu). En pratique à Genève, le seuil tourne autour d'un revenu mensuel de CHF 4'000 pour un célibataire et CHF 6'000 pour un couple, sans fortune significative.`,
  },
  {
    heading: 'Comment déposer la requête à Genève ?',
    content: `La requête se dépose au <strong>Tribunal de première instance de Genève</strong> (Rue de l'Athénée 6/8). Documents requis : copie de la dernière déclaration fiscale, trois dernières fiches de salaire, relevés bancaires, justificatifs de loyer et charges, factures importantes. Notre cabinet accompagne la rédaction de la requête. Cf. <a href='/honoraires' class='text-red-900 hover:underline'>nos honoraires</a>.`,
  },
  {
    heading: 'Que couvre l\'assistance judiciaire ?',
    content: `Tous les <strong>frais de procédure</strong> (avances, expertises, traductions) et les <strong>honoraires de l'avocat d'office</strong> selon le barème du règlement vaudois ou genevois. Les sommes versées par l'État ne couvrent toutefois qu'environ 60-70 % des honoraires libres usuels.`,
  },
  {
    heading: 'Remboursement (art. 123 CPC)',
    content: `L'assistance judiciaire est une <strong>avance de l'État</strong>, pas un don. Si votre situation financière s'améliore dans les <strong>10 ans</strong>, l'État peut exiger le remboursement total ou partiel. C'est un point souvent ignoré par les bénéficiaires.`,
  },
]
</script>

<template>
  <GlossaryEntry
    category="Procédure"
    term="Assistance judiciaire (aide juridictionnelle)"
    slug="assistance-judiciaire-geneve"
    :quick-def="quickDef"
    :body="body"
    :related-link="{ label: 'Honoraires Clegal Avocats', url: '/honoraires' }"
  />
</template>
