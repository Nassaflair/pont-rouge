<script setup lang="ts">
useLocalSeo(
  'Avocat à Champel (Genève) | Clegal Avocats – Dès 155.-',
  'Avocat à Champel ? Clegal Avocats vous reçoit aux Acacias, à 10 minutes du plateau de Champel. Notre équipe à Genève. 1er RDV à CHF 155.-.',
  {
    city: 'geneve',
    breadcrumbs: [{ name: 'Avocat à Champel', url: 'https://clegal-avocats.ch/avocat-champel' }],
    faq: [
      {
        question: 'Quel avocat pour le plateau de Champel à Genève ?',
        answer: 'Clegal Avocats accueille les habitants de Champel à son cabinet de la Route des Jeunes 9, 1227 Les Acacias — à 10 minutes en voiture ou 15 en tram (lignes 12, 17 jusqu\'à Pont-Rouge). Premier rendez-vous d\'analyse à CHF 155.-.',
      },
      {
        question: 'Quel tribunal compétent pour Champel ?',
        answer: 'Champel dépend des juridictions cantonales genevoises ordinaires : Tribunal de première instance, Cour de justice, Ministère public, Tribunal des prud\'hommes, Tribunal des baux et loyers, TAPI.',
      },
    ],
  },
)
</script>

<template>
  <QuartierPage
    city="geneve"
    quartier="Champel"
    slug="avocat-champel"
    intro="Vous résidez sur le plateau de Champel ? Notre cabinet d'avocats à Genève accueille les habitants du quartier pour tous les domaines du droit : pénal, famille, travail, étrangers, bail, affaires."
    trajet="Champel est relié aux Acacias par le pont de Carouge et la route de Drize. Comptez 10 minutes en voiture, 15 en tram (lignes 12 ou 17, arrêt Pont-Rouge), ou 20 en taxi/Uber. La gare Lancy-Pont-Rouge (Léman Express) est aussi accessible depuis Champel."
    :juridictions="[
      'Tribunal de première instance de Genève (Rue de l\'Athénée 6/8)',
      'Cour de justice de Genève (Place du Bourg-de-Four)',
      'Ministère public',
      'Tribunal des prud\'hommes',
      'Tribunal des baux et loyers',
      'Tribunal administratif de première instance (TAPI)',
      'Chambre des assurances sociales du Tribunal cantonal',
    ]"
    proximite="Le plateau de Champel, quartier résidentiel et hospitalier (HUG), accueille de nombreuses familles et professionnels. Notre cabinet aux Acacias est facilement accessible en transports publics ou en voiture, avec parking visiteurs au Centre Commercial La Praille."
  />
</template>
