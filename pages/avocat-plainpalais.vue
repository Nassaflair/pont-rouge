<script setup lang="ts">
useLocalSeo(
  'Avocat à Plainpalais (Genève) | Clegal Avocats – Dès 155.-',
  'Avocat à Plainpalais à Genève. Clegal Avocats vous reçoit aux Acacias, à 8 min en tram. Pénal, famille, travail, étrangers. 1er RDV CHF 155.-.',
  {
    city: 'geneve',
    breadcrumbs: [{ name: 'Avocat à Plainpalais', url: 'https://clegal-avocats.ch/avocat-plainpalais' }],
    faq: [
      {
        question: 'Y a-t-il un avocat Clegal à Plainpalais ?',
        answer: 'Notre cabinet d\'avocats à Genève est situé Route des Jeunes 9, 1227 Les Acacias — à 8 minutes de Plainpalais en tram (lignes 12, 15) ou en voiture par le boulevard du Pont-d\'Arve. Premier rendez-vous d\'analyse à CHF 155.-.',
      },
      {
        question: 'Quel tribunal compétent pour Plainpalais ?',
        answer: 'Plainpalais, quartier de la Ville de Genève, dépend des juridictions cantonales : Tribunal de première instance (Rue de l\'Athénée 6/8, à 5 min de Plainpalais), Cour de justice (Place du Bourg-de-Four), Ministère public, Tribunal des prud\'hommes, Tribunal des baux et loyers, TAPI.',
      },
    ],
  },
)
</script>

<template>
  <QuartierPage
    city="geneve"
    quartier="Plainpalais"
    slug="avocat-plainpalais"
    intro="Vous habitez ou étudiez à Plainpalais ? Notre cabinet d'avocats aux Acacias est à 8 minutes en tram (lignes 12, 15). Notre équipe au Barreau de Genève pour le droit pénal, la famille, le travail, les étrangers, le bail."
    trajet="Plainpalais est connecté au quartier des Acacias par le boulevard du Pont-d'Arve. En tram, comptez 8 minutes (ligne 12 ou 15, arrêt Pont-Rouge). En voiture, 5 minutes via le pont des Acacias. À pied : 25-30 minutes via le Bois-de-la-Bâtie."
    :juridictions="[
      'Tribunal de première instance de Genève (Rue de l\'Athénée 6/8, à 5 min de Plainpalais)',
      'Cour de justice (Place du Bourg-de-Four)',
      'Ministère public (Place du Bourg-de-Four 3)',
      'Tribunal des prud\'hommes — Université de Genève à proximité',
      'Tribunal des baux et loyers',
      'Tribunal administratif de première instance (TAPI)',
    ]"
    proximite="Plainpalais, quartier universitaire et résidentiel de Genève, abrite la Faculté de droit de l'UNIGE, le Tribunal de première instance et la Cour de justice à proximité immédiate. Nos avocats interviennent quotidiennement devant ces juridictions."
  />
</template>
