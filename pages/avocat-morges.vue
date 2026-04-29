<script setup lang="ts">
useLocalSeo(
  'Avocat à Morges | Clegal Avocats Lausanne – Dès 155.-',
  'Avocat à Morges ? Clegal Avocats vous reçoit à son bureau de Lausanne. Sept avocats, Tribunal d\'arrondissement de l\'Est vaudois. 1er RDV à CHF 155.-.',
  {
    city: 'lausanne',
    breadcrumbs: [{ name: 'Avocat à Morges', url: 'https://clegal-avocats.ch/avocat-morges' }],
    faq: [
      {
        question: 'Quel avocat pour Morges ?',
        answer: 'Clegal Avocats accueille les habitants de Morges à son bureau de Lausanne (Rue Saint-Pierre 2, 1003 Lausanne) — à 15 minutes en train ou 20 en voiture par l\'autoroute A1. Premier rendez-vous d\'analyse à CHF 155.-.',
      },
      {
        question: 'Quel tribunal compétent pour Morges ?',
        answer: 'Morges dépend du Tribunal d\'arrondissement de La Côte (siège à Nyon, mais Morges en relève également selon la matière), du Tribunal cantonal vaudois (Lausanne) en appel, de la Cour de droit administratif et public (CDAP), de la Justice de paix et du Tribunal des baux vaudois.',
      },
    ],
  },
)
</script>

<template>
  <QuartierPage
    city="lausanne"
    quartier="Morges"
    slug="avocat-morges"
    intro="Vous habitez ou travaillez à Morges ? Notre cabinet d'avocats à Lausanne (Rue Saint-Pierre 2) est à 15 minutes en train. Sept avocats pour le droit pénal, la famille, le travail, les étrangers, le bail."
    trajet="Morges est connectée à Lausanne par le train (15 min, RER vaudois) et par l'autoroute A1 (20 min en voiture). Notre bureau Rue Saint-Pierre 2 est à 5 minutes à pied de la gare de Lausanne, donc idéalement situé pour les Morgiens venant en transports."
    :juridictions="[
      'Tribunal d\'arrondissement de La Côte',
      'Tribunal cantonal vaudois (Lausanne) — appel',
      'Cour de droit administratif et public (CDAP)',
      'Justice de paix',
      'Tribunal des baux vaudois',
      'Tribunal de prud\'hommes du canton de Vaud',
    ]"
    proximite="Morges, ville d'environ 16'000 habitants au bord du lac Léman, abrite le Château de Morges et constitue un pôle économique important sur l'arc lémanique. De nombreux résidents y combinent vie professionnelle à Lausanne et qualité de vie au bord du lac."
  />
</template>
