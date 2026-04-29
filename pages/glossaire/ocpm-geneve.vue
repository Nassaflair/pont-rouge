<script setup lang="ts">
useLocalSeo(
  'OCPM Genève : Office cantonal de la population et des migrations',
  'OCPM Genève : adresse, démarches (permis B/C, regroupement, naturalisation), recours au TAPI. Office situé à Onex.',
  {
    city: 'geneve',
    breadcrumbs: [
      { name: 'Glossaire', url: 'https://clegal-avocats.ch/glossaire' },
      { name: 'OCPM', url: 'https://clegal-avocats.ch/glossaire/ocpm-geneve' },
    ],
    faq: [
      {
        question: 'Où se trouve l\'OCPM à Genève ?',
        answer: 'L\'Office cantonal de la population et des migrations est situé Route de Chancy 88, 1213 Onex. Accès en bus (lignes TPG 2, 19, K, L) ou en voiture (parking visiteurs). Les démarches en ligne se font via le portail e-démarches de l\'OCPM.',
      },
      {
        question: 'Comment faire recours contre une décision de l\'OCPM ?',
        answer: 'Une décision négative de l\'OCPM (refus de permis, non-renouvellement, révocation) peut être contestée devant le Tribunal administratif de première instance (TAPI) dans les 30 jours dès notification (art. 62 LPA). Un avocat en droit des étrangers est essentiel pour analyser les motifs et préparer le recours.',
      },
    ],
  },
)
</script>

<template>
  <GlossaryEntry
    category="Droit des étrangers"
    term="OCPM — Office cantonal de la population et des migrations"
    slug="ocpm-geneve"
    quick-def="L'<strong>OCPM</strong> est l'autorité cantonale genevoise compétente pour les permis de séjour des étrangers : <strong>permis B, C, L</strong>, regroupement familial, naturalisation. Adresse : <strong>Route de Chancy 88, 1213 Onex</strong>. Décisions susceptibles de recours au <strong>TAPI</strong> dans les 30 jours."
    :body="[
      {
        heading: 'Démarches courantes à l\'OCPM',
        content: '1. <strong>Première demande de permis B</strong> (UE/AELE ou États tiers). 2. <strong>Renouvellement</strong> de permis B (3 mois avant expiration). 3. <strong>Conversion en permis C</strong> (5 ans UE/AELE, 10 ans États tiers). 4. <strong>Regroupement familial</strong> (art. 47 LEI). 5. <strong>Naturalisation</strong> ordinaire ou facilitée. 6. <strong>Changement de canton</strong> (transfert de permis).',
      },
      {
        heading: 'Délais d\'instruction OCPM Genève',
        content: '4 à 8 semaines pour un dossier UE/AELE complet, 2 à 6 mois pour un dossier d\'État tiers. Les délais peuvent être plus longs en cas de pièces manquantes ou de demande complémentaire. Les démarches en ligne via le portail e-démarches accélèrent souvent le traitement.',
      },
      {
        heading: 'Recours en cas de décision négative',
        content: 'Recours au <strong>Tribunal administratif de première instance (TAPI)</strong> dans les 30 jours dès notification (art. 62 LPA). En cas de rejet, recours possible à la <strong>Chambre administrative de la Cour de justice</strong>, puis au <strong>Tribunal fédéral</strong> (Lausanne). L\'effet suspensif peut être demandé pour éviter une expulsion durant la procédure.',
      },
    ]"
    :related-link="{ label: 'Avocat permis de séjour Genève', url: '/droit-etrangers/avocat-permis-sejour' }"
  />
</template>
