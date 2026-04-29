<script setup lang="ts">
useLocalSeo(
  'Avocat à Renens | Clegal Avocats Lausanne – Dès 155.-',
  'Avocat à Renens ? Clegal Avocats vous reçoit à son bureau de Lausanne. Sept avocats, Tribunal d\'arrondissement de Lausanne. 1er RDV à CHF 155.-.',
  {
    city: 'lausanne',
    breadcrumbs: [{ name: 'Avocat à Renens', url: 'https://clegal-avocats.ch/avocat-renens' }],
    faq: [
      {
        question: 'Quel avocat pour Renens ?',
        answer: 'Clegal Avocats accueille les habitants de Renens à son bureau de Lausanne (Rue Saint-Pierre 2, 1003 Lausanne) — à 10 minutes en train (M1) ou 15 en voiture. Premier rendez-vous d\'analyse à CHF 155.-.',
      },
      {
        question: 'Quel tribunal compétent pour Renens ?',
        answer: 'Renens dépend du Tribunal d\'arrondissement de Lausanne (civil et pénal de première instance), du Tribunal cantonal vaudois (appel), de la Cour de droit administratif et public (CDAP), de la Justice de paix de Lausanne et du Tribunal des baux vaudois.',
      },
    ],
  },
)
</script>

<template>
  <QuartierPage
    city="lausanne"
    quartier="Renens"
    slug="avocat-renens"
    intro="Vous habitez à Renens ? Notre cabinet d'avocats à Lausanne (Rue Saint-Pierre 2) est à 10 minutes en métro M1. Sept avocats au service des Renanais pour tous les domaines du droit."
    trajet="Renens est directement connectée à Lausanne par le métro M1 (10 minutes jusqu'à la gare). Notre bureau Rue Saint-Pierre 2 est à 5 minutes à pied de la gare de Lausanne. En voiture : 15 minutes via l'autoroute A1 ou la route de Cossonay."
    :juridictions="[
      'Tribunal d\'arrondissement de Lausanne (civil et pénal)',
      'Tribunal cantonal vaudois (appel)',
      'Cour de droit administratif et public (CDAP)',
      'Justice de paix de Lausanne',
      'Tribunal des baux vaudois',
      'Tribunal de prud\'hommes du canton de Vaud',
    ]"
    proximite="Renens, deuxième commune du canton de Vaud (environ 21'000 habitants), abrite l'EPFL (Lausanne-Ecublens à proximité immédiate), de nombreux centres de formation et un tissu industriel actif. Ses habitants relèvent des juridictions lausannoises."
  />
</template>
