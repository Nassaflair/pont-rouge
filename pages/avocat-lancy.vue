<script setup lang="ts">
useLocalSeo(
  'Avocat à Lancy (Genève) | Clegal Avocats Pont-Rouge – Dès 155.-',
  'Avocat à Lancy ? Notre cabinet est situé Route des Jeunes 9, à Lancy-Acacias. Sept avocats au Barreau de Genève. 1er RDV à CHF 155.-.',
  {
    city: 'geneve',
    breadcrumbs: [{ name: 'Avocat à Lancy', url: 'https://clegal-avocats.ch/avocat-lancy' }],
    faq: [
      {
        question: 'Y a-t-il un avocat à Lancy ?',
        answer: 'Oui. Clegal Avocats est physiquement situé Route des Jeunes 9, 1227 Les Acacias — sur le territoire de la commune de Lancy, dans le quartier de Lancy-Pont-Rouge. Premier rendez-vous d\'analyse à CHF 155.-.',
      },
      {
        question: 'Quels tribunaux compétents pour Lancy ?',
        answer: 'Lancy dépend des juridictions cantonales genevoises : Tribunal de première instance, Cour de justice, Ministère public, Tribunal des prud\'hommes, Tribunal des baux et loyers, TAPI.',
      },
    ],
  },
)
</script>

<template>
  <QuartierPage
    city="geneve"
    quartier="Lancy"
    slug="avocat-lancy"
    intro="Notre cabinet est physiquement situé à Lancy (quartier des Acacias / Pont-Rouge). Sept avocats au Barreau de Genève au service des habitants de Lancy : Petit-Lancy, Grand-Lancy, La Praille, Lancy-Centre, Pont-Rouge."
    trajet="Notre étude se trouve Route des Jeunes 9, 1227 Les Acacias — au cœur du quartier d'affaires de Lancy-Pont-Rouge. Accès immédiat depuis tout le territoire de la commune : tram 12/15/17/18 (arrêts Pont-Rouge ou Acacias), Léman Express (gare Lancy-Pont-Rouge), bus, voiture (parking visiteurs Centre Commercial La Praille)."
    :juridictions="[
      'Tribunal de première instance de Genève',
      'Cour de justice de Genève',
      'Ministère public',
      'Tribunal correctionnel & Tribunal de police',
      'Tribunal des prud\'hommes',
      'Tribunal des baux et loyers',
      'Tribunal administratif de première instance (TAPI)',
      'Chambre administrative de la Cour de justice',
    ]"
    proximite="Lancy est la commune qui héberge notre cabinet. À ce titre, nous connaissons parfaitement le tissu économique local (entreprises de la zone industrielle des Acacias, commerces de la Praille, résidents de Petit et Grand-Lancy) et travaillons régulièrement avec les acteurs locaux."
  />
</template>
