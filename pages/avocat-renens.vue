<script setup lang="ts">
const faq = [
  {
    question: 'Quel tribunal est compétent pour un habitant de Renens ?',
    answer: 'Renens appartient au district de l\'Ouest lausannois, lui-même rattaché au Tribunal d\'arrondissement de Lausanne (Palais de justice de Montbenon, Allée E.-Ansermet 2, 1014 Lausanne). Contrairement à Morges ou Pully, qui relèvent d\'autres arrondissements, les Renanais plaident bien à Lausanne en première instance.',
  },
  {
    question: 'Renens est-elle concernée par des litiges de bail particuliers ?',
    answer: 'Oui. L\'Ouest lausannois concentre une part importante du parc locatif dense de l\'agglomération, avec de nombreux immeubles des années 1960-1980 en cours de rénovation. Les litiges les plus fréquents portent sur les hausses de loyer consécutives à des travaux à plus-value, la répercussion des frais accessoires et les résiliations pour rénovation. Ces affaires relèvent du Tribunal des baux vaudois.',
  },
  {
    question: 'Quel tarif pour un avocat à Renens ?',
    answer: 'Les tarifs vaudois se situent entre CHF 300 et CHF 500 de l\'heure. Clegal Avocats propose un premier rendez-vous d\'analyse forfaitaire à CHF 155.- et accepte l\'assistance judiciaire vaudoise, qui se demande auprès du tribunal saisi et dont les conditions de revenu sont examinées cas par cas.',
  },
]

useLocalSeo(
  'Avocat à Renens | Tribunal de Lausanne – Clegal Avocats',
  'Avocat à Renens ? Renens relève du Tribunal d\'arrondissement de Lausanne (Ouest lausannois). Notre bureau à 10 min en métro M1. 1er RDV d\'analyse à CHF 155.-.',
  {
    city: 'lausanne',
    breadcrumbs: [{ name: 'Avocat à Renens', url: 'https://clegal-avocats.ch/avocat-renens' }],
    faq,
  },
)
</script>

<template>
  <QuartierPage
    :faq="faq"
    city="lausanne"
    quartier="Renens"
    slug="avocat-renens"
    intro="Vous habitez ou travaillez à Renens ? Le district de l'Ouest lausannois relève du Tribunal d'arrondissement de Lausanne, à dix minutes de notre bureau. Droit du bail, droit du travail, droit des étrangers, famille et pénal."
    :tribunal="{
      nom: 'Tribunal d\'arrondissement de Lausanne',
      siege: 'Palais de justice de Montbenon, Allée E.-Ansermet 2, 1014 Lausanne',
      precision: 'L\'arrondissement de Lausanne couvre les districts de Lausanne et de l\'Ouest lausannois, dont Renens fait partie. C\'est la même juridiction que pour les Lausannois — ce qui n\'est pas le cas des communes de Lavaux-Oron ou du district de Morges.',
    }"
    :contexte-local="{
      titre: 'Ce qui caractérise les dossiers de l\'Ouest lausannois',
      paragraphes: [
        'Renens est l\'une des communes les plus densément peuplées et les plus jeunes du canton, avec une population fortement multiculturelle. Cette composition se traduit dans la nature des dossiers : le droit des étrangers y occupe une place centrale — renouvellements de permis B, passages au permis C, regroupement familial, mais aussi recours contre des décisions du Service de la population (SPOP) et cas de rigueur. Ces procédures administratives relèvent en dernière instance cantonale de la Cour de droit administratif et public (CDAP).',
        'Le parc immobilier constitue le second foyer de litiges. L\'Ouest lausannois connaît depuis plusieurs années un cycle de rénovations lourdes d\'immeubles construits durant les Trente Glorieuses. Les conséquences juridiques sont récurrentes : hausses de loyer justifiées par des travaux à plus-value, congés-rénovation, contestation du rendement admissible. La contestation d\'une hausse doit intervenir dans les trente jours suivant sa notification — un délai que beaucoup de locataires découvrent trop tard.',
        'Enfin, la zone industrielle et commerciale de Renens, ainsi que la proximité immédiate des hautes écoles de l\'Ouest lausannois, génèrent un volume constant de litiges du travail : contrats de durée déterminée en chaîne, heures supplémentaires non compensées, licenciements pendant une incapacité. Le Tribunal de prud\'hommes vaudois est compétent, avec une procédure gratuite jusqu\'à CHF 30\'000 de valeur litigieuse.',
      ],
    }"
    :domaines="[
      { url: '/droit-etrangers', titre: 'Droit des étrangers à Renens', description: 'Permis B et C, regroupement familial, recours SPOP, cas de rigueur, naturalisation.' },
      { url: '/droit-bail', titre: 'Hausses de loyer et congés-rénovation', description: 'Contestation dans les 30 jours, travaux à plus-value, frais accessoires, expulsion.' },
      { url: '/droit-travail', titre: 'Prud\'hommes — Ouest lausannois', description: 'Licenciement, heures supplémentaires, CDD en chaîne. Procédure gratuite jusqu\'à CHF 30\'000.' },
      { url: '/droit-famille/avocat-divorce-lausanne', titre: 'Divorce — Tribunal de Lausanne', description: 'Divorce et mesures protectrices devant la juridiction lausannoise : procédure vaudoise détaillée.' },
      { url: '/droit-penal-lausanne', titre: 'Défense pénale vaudoise', description: 'Ministère public de l\'arrondissement de Lausanne, opposition en 10 jours, permanence 24h/24.' },
      { url: '/droit-assurance', titre: 'Assurances sociales', description: 'AI, LAA, chômage : recours contre les décisions et expertises médicales.' },
    ]"
    trajet="Renens est reliée au centre de Lausanne par le métro M1 (environ 10 minutes jusqu'à la gare) et par le RER vaudois. Notre bureau, Rue Saint-Pierre 2, se trouve à 5 minutes à pied de la gare de Lausanne. En voiture, comptez un quart d'heure hors heures de pointe, avec les parkings du centre-ville à proximité."
    :juridictions="[
      'Tribunal d\'arrondissement de Lausanne — civil, pénal, famille',
      'Ministère public de l\'arrondissement de Lausanne',
      'Justice de paix du district de l\'Ouest lausannois',
      'Tribunal cantonal vaudois — appel civil et pénal',
      'Cour de droit administratif et public (CDAP) — recours SPOP',
      'Tribunal des baux vaudois',
      'Tribunal de prud\'hommes de l\'arrondissement de Lausanne',
    ]"
    proximite="Renens compte environ 21'000 habitants et forme, avec Crissier, Chavannes, Ecublens et Prilly, le district de l'Ouest lausannois. La commune est desservie par le métro M1 et constitue un nœud ferroviaire important de l'agglomération."
  />
</template>
